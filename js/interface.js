Interface=(function() {

    const
        DEBUG_RENDER = false,
        DEBUG_QUEST = false,
        VERSION = "0.1b",
        SOURCES_AT = {
            short:"github.com/kesiev/massive-randomness-2",
            full:"https://github.com/kesiev/massive-randomness-2"
        },
        LOCALSTORAGE_PREFIX="MARA2_",
        LOCALSTORAGE_LANGUAGE=LOCALSTORAGE_PREFIX+"LANG",
        LOCALSTORAGE_ID=LOCALSTORAGE_PREFIX+"ID",
        SETTINGS_SOURCES={
            MEMORY:0,
            DEFAULT:1,
            UI:2,
            SESSION:3
        },
        SETTINGS_DEFAULT={
            needs:[ "quests", "maps-default" ],
            excludes:[ ]
        };

    let
        INTERFACE,
        isAppMode = document.location.href.indexOf("user_mode=app") != -1,
        settingsMode = false,
        showInstaller = false,
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
        
        if (INTERFACE.supportedLanguages[loadedLanguage])
            language = loadedLanguage;
        else if (userLang) {
            userLang=userLang.split("-")[0].toUpperCase();
            if (INTERFACE.supportedLanguages[userLang] !== undefined) language=userLang;
        }
        localStorage[LOCALSTORAGE_LANGUAGE] = language;
        return language;
    }

    function loadId() {

        let
            loaded = "";

        if (isAppMode)
            loaded = localStorage[LOCALSTORAGE_ID];
        else
            loaded = document.location.hash;
        
        return (loaded || "").trim().replace(/#/g,"");
    }

    function saveId(id) {
        if (isAppMode)
            localStorage[LOCALSTORAGE_ID] = id;
        else
            history.replaceState(undefined, undefined, id);
    }

    function renderLastQuest() {
        let
            printTitlePrefix = getLabel(language,INTERFACE.labels.toolName);
        document.title = printTitlePrefix;
        bodyNode.innerHTML = "";

        if (lastResources) {
            lastResult.printTitlePrefix = printTitlePrefix;
            QuestRenderer.render(lastResources,lastResult,language,bodyNode,{
                debugRender:DEBUG_RENDER
            });
        }
    }

    function generate() {
        if (!generating) {
            let
                requirements = {};

            for (let k in SETTINGS_DEFAULT)
                requirements[k] = SETTINGS_DEFAULT[k].slice();

            INTERFACE.settings.forEach((setting,sid)=>{
                let
                    picked = [],
                    notPicked = [],
                    selected = settings[sid];
                
                setting.entries.forEach((entry,id)=>{
                    if (entry.tags)
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
            bodyNode.innerHTML = "<div class='generating'>"+getLabel(language,INTERFACE.labels.wait)+"</div>";
            Generator.generate(requirements,seed,{
                debugQuest:DEBUG_QUEST
            },(resources,result)=>{
                seed = result.questSeed;
                saveId(settingsToHash());
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
        INTERFACE.settings.forEach((setting,sid)=>{
            let
                panelNode = createNode(settingsNode,"div","panel"),
                sectionNode = createNode(panelNode,"div","section"),
                itemsNode = createNode(panelNode,"div","items");

            sectionNode.innerHTML = getLabel(language,setting.title);

            setting.entries.forEach((entry,eid)=>{

                id++;

                if (entry.isButton) {

                    if (!entry.isInstallerButton || showInstaller) {

                        let
                            itemNode = createNode(itemsNode,"div","item"),
                            selectorNode = createNode(itemNode,"div","selector"),
                            labelNode = createNode(itemNode,"label","label"),
                            entryId = "selector"+id;

                        entry._selector = createNode(selectorNode,"div","optionbutton");
                        entry._selector.id = entryId;
                        entry._selector.innerHTML = getLabel(language,entry.label);
                        if (entry.isInstallerButton)
                            entry._selector.onclick=()=>{
                                Installer.install(()=>{
                                    showInstaller = false;
                                    drawSettings();
                                })
                            }
                        labelNode.innerHTML = "<span class='description'>"+getLabel(language,entry.description)+"</span>";
                    }

                } else {

                    let
                        itemNode = createNode(itemsNode,"div","item"),
                        selectorNode = createNode(itemNode,"div","selector"),
                        labelNode = createNode(itemNode,"label","label"),
                        entryId = "selector"+id;

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

                }
            })
        })
    }

    function loadSettingsFrom(source) {
        let
            hash = loadId().split("-"),
            newSettings = [];

        INTERFACE.settings.forEach((setting,sid)=>{
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
                    case SETTINGS_SOURCES.SESSION:{
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

        if (source == SETTINGS_SOURCES.SESSION) {
            seed = parseInt(hash[1].replace(/[^0-9]/g,""));
            if (seed < 0) seed=0;
            if (seed >= Generator.SEED_RANGE) seed=Generator.SEED_RANGE-1;
        } else
            seed = 0;
    }

    function showSettings() {
        INTERFACE.settings.forEach((setting,sid)=>{
            let
                selected = settings[sid];
           
            setting.entries.forEach((entry,id)=>{
                if (!entry.isButton)
                    entry._selector.checked = selected.indexOf(id) != -1;
            });
        });
    }

    function settingsToHash() {

        let
            hash="#";

        INTERFACE.settings.forEach((setting,sid)=>{
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
        let
            footerText = getLabel(language,INTERFACE.labels.footer);

        footerText = footerText.replace(/\{([^}]+)\}/g,(m,m1)=>{
            let
                out;
            switch (m1) {
                case "toolName":{
                    out = getLabel(language,INTERFACE.labels.toolName);
                    break;
                }
                case "toolVersion":{
                    out = VERSION;
                    break;
                }
                case "sourcesAtFull":{
                    out = SOURCES_AT.full;
                    break;
                }
                case "sourcesAtShort":{
                    out = SOURCES_AT.short
                    break;
                }
            }
            return out || "[???]"
        });
        localStorage[LOCALSTORAGE_LANGUAGE] = lang;
        languageSelectorCombo.value = lang;
        language = lang;
        logoTitleNode.innerHTML = getLabel(language,INTERFACE.labels.toolName);
        logoSubtitleNode.innerHTML = getLabel(language,INTERFACE.labels.toolDescription);
        footerNode.innerHTML = footerText+"<br><span class='notice'>"+getLabel(language,INTERFACE.labels.notice)+"</span>";
        newQuestNode.title = getLabel(language,INTERFACE.labels.tooltipNewQuest);
        settingsButtonNode.title = getLabel(language,INTERFACE.labels.tooltipSettings);
        drawSettings();
        showSettings();
        renderLastQuest();
    }

    return {
        initialize:(root)=>{

            let
                headerContentNode;

            INTERFACE=ModManager.load({ needs:[ "interface" ]}).interface;

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

            for (let k in INTERFACE.supportedLanguages) {
                let option = createNode(languageSelectorCombo,"option");
                option.value = k;
                option.innerHTML = INTERFACE.supportedLanguages[k];
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

            if (loadId())
                loadSettingsFrom(SETTINGS_SOURCES.SESSION);
            else
                loadSettingsFrom(SETTINGS_SOURCES.DEFAULT);

            setLanguage(loadLanguage());
            setSettingsMode(settingsMode);
            showSettings();

            generate();

            if (window.Installer)
                Installer.check(()=>{
                    showInstaller = true;
                    drawSettings();
                });

            window.onhashchange=()=>{
                if (loadId()) {
                    loadSettingsFrom(SETTINGS_SOURCES.SESSION);
                    showSettings();
                    generate();
                }
            }
        }
    }

}());