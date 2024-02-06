Interface=(function() {

    const
        DEBUG_RENDER = false,
        DEBUG_QUEST = false,
        VERSION = "0.1b",
        LOCALSTORAGE_PREFIX="MARA2_",
        LOCALSTORAGE_LANGUAGE=LOCALSTORAGE_PREFIX+"LANG",
        SOURCES_AT={
            short:"github.com/kesiev/massive-randomness-2",
            full:"https://github.com/kesiev/massive-randomness-2"
        },
        SUPPORTED_LANGUAGES={
            EN:"English",
            IT:"Italiano"
        },
        TOOL_NAME={
            IT:"Massive Randomness 2",
            EN:"Massive Randomness 2"
        },
        TOOL_DESCRIPTION={
            IT:"Un generatore casuale di avventure one-shot per Massive Darkness 2",
            EN:"A Massive Darkness 2 one-shot quest random generator"
        },
        FOOTER={
            IT:"Meglio su Firefox/Chrome - "+TOOL_NAME.IT+" - "+VERSION+" - &copy; 2024 by KesieV - Sorgenti su <a target=_blank href='"+SOURCES_AT.full+"'>"+SOURCES_AT.short+"</a>",
            EN:"Best on Firefox/Chrome - "+TOOL_NAME.EN+" - "+VERSION+" - &copy; 2024 by KesieV - Sources at <a target=_blank href='"+SOURCES_AT.full+"'>"+SOURCES_AT.short+"</a>"
        },
        NOTICE={
            EN:"Massive Darkness 2 and all related properties are owned by CMON Global Limited",
            IT:"Massive Darkness 2 e tutte le relative propriet&agrave; sono marchi registrati CMON Global Limited"
        },
        MESSAGE_WAIT={
            IT:"Sto preparando l'avventura...",
            EN:"Please wait..."
        },
        TOOLTIP_NEWQUEST={
            IT:"Genera una nuova avventura",
            EN:"Generate a new quest"
        },
        TOOLTIP_SETTINGS={
            IT:"Impostazioni",
            EN:"Settings"
        },
        SETTINGS_SOURCES={
            MEMORY:0,
            DEFAULT:1,
            UI:2,
            HASH:3
        },
        SETTINGS_DEFAULT={
            needs:[ "quests", "maps-default" ],
            excludes:[ ]
        },
        SETTINGS_INTERFACE=[
            {
                type:"includeExclude",
                isMandatory:true,
                title:{
                    IT:"Materiali disponibili",
                    EN:"Available components"
                },
                entries:[
                    {
                        code:"A",
                        isMandatory:true,
                        isDefault:true,
                        label:{
                            IT:"Massive Darkness 2 - Hellscape",
                            EN:"Massive Darkness 2 - Hellscape"
                        },
                        description:{
                            IT:"La scatola base del gioco",
                            EN:"The game core box"
                        },
                        tags:[ "md2-hellscape" ]
                    },{
                        code:"B",
                        label:{
                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                            EN:"Massive Darkness: A Quest of Crystal & Lava"
                        },
                        description:{
                            IT:"Una nuova campagna e 15 tessere",
                            EN:"A new campaign and 15 tiles"
                        },
                        tags:[ "md2-crystallava" ]
                    }
                ]
            },{
                type:"includeSelected",
                isSingleOption:true,
                isMandatory:true,
                title:{
                    IT:"Grandezza delle mappa",
                    EN:"Map size"
                },
                entries:[
                    {
                        code:"0",
                        label:{
                            IT:"Piccola",
                            EN:"Small"
                        },
                        description:{
                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in meno rispetto a quelle suggerite.",
                            EN:"If possible, the quest map has 1 fewer tile than suggested."
                        },
                        tags:[ "maps-size-small" ]
                    },{
                        code:"1",
                        isDefault:true,
                        label:{
                            IT:"Normale",
                            EN:"Normal"
                        },
                        description:{
                            IT:"La mappa dell'avventura ha il numero suggerito di tessere.",
                            EN:"The adventure map has the suggested number of tiles."
                        },
                        tags:[ "maps-size-normal" ]
                    },{
                        code:"2",
                        label:{
                            IT:"Grande",
                            EN:"Large"
                        },
                        description:{
                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in pi&ugrave; rispetto a quelle suggerite.",
                            EN:"If possible, the quest map has 1 more tile than suggested."
                        },
                        tags:[ "maps-size-large" ]
                    }
                ]
            },{
                type:"includeSelected",
                isSingleOption:true,
                isMandatory:true,
                title:{
                    IT:"Stile della mappa",
                    EN:"Map style"
                },
                entries:[
                    {
                        code:"Z",
                        isDefault:true,
                        label:{
                            IT:"Uniforme",
                            EN:"Uniform"
                        },
                        description:{
                            IT:"Tutte le tessere della mappa mostrano la stessa ambientazione.",
                            EN:"All tiles on the map show the same setting.",
                        },
                        tags:[ "maps-default-uniform" ]
                    },{
                        code:"z",
                        label:{
                            IT:"Interdimensionale",
                            EN:"Interdimensional"
                        },
                        description:{
                            IT:"Le tessere sulla mappa possono mostrare ambientazioni diverse. Aumenta la variet&agrave; di struttura a scapito dell'estetica.",
                            EN:"The map tiles can show different environments. Increase layout variety to the detriment of aesthetics.",
                        },
                        tags:[ "maps-default-notuniform" ]
                    }
                ]
            }
        ];

    let
        settingsMode = false,
        seed = 0,
        settings,
        lastResult,
        lastResources,
        language,
        generating,
        headerNode,
        footerNode,
        settingsNode,
        actionsNode,
        logoTitleNode,
        logoSubtitleNode,
        settingsButtonNode,
        newQuestNode,
        languageSelectorCombo,
        bodyNode;

    function getLabel(language,label) {
        if (label[language])
            return label[language];
        else if (label.EN)
            return label.EN;
        else
            return "???";
    }

    function loadLanguage() {
        let
            loadedLanguage=localStorage[LOCALSTORAGE_LANGUAGE],
            language="EN",
            userLang = navigator.language || navigator.userLanguage;
        
        if (SUPPORTED_LANGUAGES[loadedLanguage])
            language = loadedLanguage;
        else if (userLang) {
            userLang=userLang.split("-")[0].toUpperCase();
            if (SUPPORTED_LANGUAGES[userLang] !== undefined) language=userLang;
        }
        localStorage[LOCALSTORAGE_LANGUAGE] = language;
        return language;
    }

    function renderLastQuest() {
        let
            printTitlePrefix = getLabel(language,TOOL_NAME);
        document.title = printTitlePrefix;
        bodyNode.innerHTML = "";

        if (lastResources) {
            lastResult.printTitlePrefix = printTitlePrefix;
            QuestRenderer.render(lastResources,lastResult,language,bodyNode,{
                debugRender:DEBUG_RENDER
            });
            MapRenderer.render(lastResources,lastResult,lastResult.mapNode,lastResult.miniMapNode);
        }
    }

    function generate() {
        if (!generating) {
            let
                requirements = {};

            for (let k in SETTINGS_DEFAULT)
                requirements[k] = SETTINGS_DEFAULT[k].slice();

            SETTINGS_INTERFACE.forEach((setting,sid)=>{
                let
                    picked = [],
                    notPicked = [],
                    selected = settings[sid];
                
                setting.entries.forEach((entry,id)=>{
                    if (selected.indexOf(id) != -1)
                        entry.tags.forEach(tag=>{
                            if (picked.indexOf(tag) == -1)
                                picked.push(tag)
                        });
                    else
                        entry.tags.forEach(tag=>{
                            if (notPicked.indexOf(tag) == -1)
                            notPicked.push(tag)
                        });
                });

                switch (setting.type) {
                    case "includeExclude":{
                        notPicked.forEach(item=>{
                            if (requirements.excludes.indexOf(item) == -1)
                                requirements.excludes.push(item)
                        });
                        break;
                    }
                }

                picked.forEach(item=>{
                    if (requirements.needs.indexOf(item) == -1)
                        requirements.needs.push(item)
                });

            });

            generating = true;
            bodyNode.innerHTML = "<div class='generating'>"+getLabel(language,MESSAGE_WAIT)+"</div>";
            Generator.generate(requirements,seed,{
                debugQuest:DEBUG_QUEST
            },(resources,result)=>{
                seed = result.questSeed;
                history.replaceState(undefined, undefined, settingsToHash());
                generating = false;
                lastResources = resources;
                lastResult = result;
                renderLastQuest();
            })
        }
    }

    function createNode(into,type,className) {
        let
            node = document.createElement(type);

        if (className) node.className=className;
        into.appendChild(node);

        return node;
    }

    function setSettingsMode(mode) {
        settingsMode = mode;
        settingsNode.className = "settings "+ (mode ? "open" : "closed");
    }

    function drawSettings() {
        let
            id = 0;
        settingsNode.innerHTML = "";
        SETTINGS_INTERFACE.forEach((setting,sid)=>{
            let
                panelNode = createNode(settingsNode,"div","panel"),
                sectionNode = createNode(panelNode,"div","section"),
                itemsNode = createNode(panelNode,"div","items");

            sectionNode.innerHTML = getLabel(language,setting.title);

            setting.entries.forEach((entry,eid)=>{
                let
                    itemNode = createNode(itemsNode,"div","item"),
                    selectorNode = createNode(itemNode,"div","selector"),
                    labelNode = createNode(itemNode,"label","label"),
                    entryId = "selector"+id;

                id++;

                labelNode.setAttribute("for",entryId);

                if (setting.isSingleOption) {
                    entry._selector = createNode(selectorNode,"input","control");
                    entry._selector.id = entryId;
                    entry._selector.type = "radio";
                    entry._selector.onclick=()=>{
                        settings[sid]=[eid];
                        loadSettingsFrom(SETTINGS_SOURCES.MEMORY);
                        showSettings();
                    }
                } else {
                    entry._selector = createNode(selectorNode,"input","control");
                    entry._selector.id = entryId;
                    entry._selector.type = "checkbox";
                    if (entry.isMandatory)
                        entry._selector.disabled = "disabled";
                    else
                        entry._selector.onclick=()=>{
                            let
                                pos = settings[sid].indexOf(eid);
                            if (pos == -1)
                                settings[sid].push(eid);
                            else
                                settings[sid].splice(pos,1);
                            loadSettingsFrom(SETTINGS_SOURCES.MEMORY);
                            showSettings();
                        }
                }
                
                labelNode.innerHTML = "<span class='name'>"+getLabel(language,entry.label)+"</span><span class='description'> - "+getLabel(language,entry.description)+"</span>";
            })
        })
    }

    function getHash() {
        return document.location.hash.trim().replace(/#/g,"");
    }

    function loadSettingsFrom(source) {
        let
            hash = getHash().split("-"),
            newSettings = [];

        SETTINGS_INTERFACE.forEach((setting,sid)=>{
            let
                defaults = [],
                mandatory = [],
                selected = source == SETTINGS_SOURCES.MEMORY ? settings[sid] : [];

            setting.entries.forEach((entry,id)=>{
                if (entry.isDefault)
                    defaults.push(id);
                if (entry.isMandatory)
                    mandatory.push(id);

                switch (source) {
                    case SETTINGS_SOURCES.UI:{
                        if (entry._selector.checked)
                            selected.push(id);
                        break;
                    }
                    case SETTINGS_SOURCES.HASH:{
                        if (entry.code && (hash[0].indexOf(entry.code) !== -1))
                            selected.push(id);
                        break;
                    }
                }
            });
            
            if ((source == SETTINGS_SOURCES.DEFAULT) && setting.isMandatory && (selected.length == 0))
                selected = defaults;

            mandatory.forEach(option=>{
                if (selected.indexOf(option) == -1)
                    selected.push(option);
            });

            if (setting.isSingleOption)
                if (selected.length>1)
                    selected = [ selected[0] ];
                else if (selected.length == 0)
                    selected = defaults;

            newSettings.push(selected);
        });

        settings = newSettings;

        if (source == SETTINGS_SOURCES.HASH) {
            seed = parseInt(hash[1].replace(/[^0-9]/g,""));
            if (seed < 0) seed=0;
            if (seed >= Generator.SEED_RANGE) seed=Generator.SEED_RANGE-1;
        } else
            seed = 0;
    }

    function showSettings() {
        SETTINGS_INTERFACE.forEach((setting,sid)=>{
            let
                selected = settings[sid];
           
            setting.entries.forEach((entry,id)=>{
                entry._selector.checked = selected.indexOf(id) != -1;
            });
        });
    }

    function settingsToHash() {

        let
            hash="#";

        SETTINGS_INTERFACE.forEach((setting,sid)=>{
            let
                selected = settings[sid];
           
            setting.entries.forEach((entry,id)=>{
                if (entry.code && (selected.indexOf(id) != -1))
                    hash+=entry.code;
            });

        });

        hash+="-"+seed;

        return hash;

    }

    function setLanguage(lang) {
        localStorage[LOCALSTORAGE_LANGUAGE] = lang;
        languageSelectorCombo.value = lang;
        language = lang;
        logoTitleNode.innerHTML = getLabel(language,TOOL_NAME);
        logoSubtitleNode.innerHTML = getLabel(language,TOOL_DESCRIPTION);
        footerNode.innerHTML = getLabel(language,FOOTER)+"<br><span class='notice'>"+getLabel(language,NOTICE)+"</span>";
        newQuestNode.title = getLabel(language,TOOLTIP_NEWQUEST);
        settingsButtonNode.title = getLabel(language,TOOLTIP_SETTINGS);
        drawSettings();
        showSettings();
        renderLastQuest();
    }

    return {
        initialize:(root)=>{

            let
                headerContentNode;

            headerNode = createNode(root,"div","header");
            headerContentNode = createNode(headerNode,"div","content");
            settingsNode = createNode(headerContentNode,"div","settings");
            actionsNode = createNode(headerContentNode,"div","actions");
            bodyNode = createNode(root,"div","body"),
            footerNode = createNode(root,"div","footer");

            let
                toolbarNode = createNode(actionsNode,"div","toolbar"),
                leftToolsNode = createNode(toolbarNode,"div","leftTools"),
                logoNode,
                rightToolsNode = createNode(toolbarNode,"div","rightTools"),
                languageSelector = createNode(rightToolsNode,"div","language");
                
            settingsButtonNode = createNode(leftToolsNode,"div","button settingsButton"),
            logoNode = createNode(leftToolsNode,"div","logo");
            logoTitleNode = createNode(logoNode,"div","title"),
            logoSubtitleNode = createNode(logoNode,"div","subtitle"),

            newQuestNode = createNode(rightToolsNode,"div","button newQuest");
            languageSelectorCombo = createNode(languageSelector,"select");

            for (let k in SUPPORTED_LANGUAGES) {
                let option = createNode(languageSelectorCombo,"option");
                option.value = k;
                option.innerHTML = SUPPORTED_LANGUAGES[k];
            }

            languageSelectorCombo.onchange=()=>{
                setLanguage(languageSelectorCombo.value);
            }

            newQuestNode.onclick=()=>{
                seed = 0;
                generate()
            }

            settingsButtonNode.onclick=()=>{
                setSettingsMode(!settingsMode);
            }

            if (getHash())
                loadSettingsFrom(SETTINGS_SOURCES.HASH);
            else
                loadSettingsFrom(SETTINGS_SOURCES.DEFAULT);

            setLanguage(loadLanguage());
            setSettingsMode(settingsMode);
            showSettings();

            generate();

            window.onhashchange=()=>{
                if (getHash()) {
                    loadSettingsFrom(SETTINGS_SOURCES.HASH);
                    showSettings();
                    generate();
                }
            }
        }
    }

}());