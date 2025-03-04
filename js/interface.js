Interface=(function() {

    const
        DEBUG_RENDER = false,
        DEBUG_QUEST = false,
        DEBUG_CAMPAIGN = false,
        DEBUG_HIDDENTEXT = false,
        VERSION = "0.41b",
        SOURCES_AT = {
            short:"github.com/kesiev/massive-randomness-2",
            full:"https://github.com/kesiev/massive-randomness-2"
        },
        DISCORD_AT = "https://discord.gg/TeAWvnuGku",
        LOCALSTORAGE_PREFIX="MARA2_",
        LOCALSTORAGE_FLAG=LOCALSTORAGE_PREFIX+"FLAG_",
        LOCALSTORAGE_LANGUAGE=LOCALSTORAGE_PREFIX+"LANG",
        LOCALSTORAGE_ID=LOCALSTORAGE_PREFIX+"ID",
        LOCALSTORAGE_COUNTER=LOCALSTORAGE_PREFIX+"COUNT",
        COUNTER_LIMIT = 30,
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
        isAppMode = document.location.hash == "#user_mode=app",
        settingsMode = false,
        showInstaller = false,
        seed = 0,
        generationCounter = 0,
        settings,
        lastResult,
        lastResources,
        language,
        generating,
        rootNode,
        headerNode,
        footerNode,
        settingsNode,
        noticebarNode,
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

    function loadCounter() {

        generationCounter = parseInt(localStorage[LOCALSTORAGE_COUNTER]) || 0;

    }

    function increaseCounter() {

        if (generationCounter < COUNTER_LIMIT)
            generationCounter++;
        else
            generationCounter = COUNTER_LIMIT;

        localStorage[LOCALSTORAGE_COUNTER] = generationCounter;

    }

    function saveId(id) {
        if (isAppMode)
            localStorage[LOCALSTORAGE_ID] = id;
        else
            history.replaceState(undefined, undefined, id);
    }

    function isFlag(id) {
        return !!localStorage[LOCALSTORAGE_FLAG+id];
    }

    function setFlag(id) {
        localStorage[LOCALSTORAGE_FLAG+id] = 1;
    }

    function unsetFlag(id) {
        delete localStorage[LOCALSTORAGE_FLAG+id];
    }

    function renderLastQuest() {
        let
            printTitlePrefix = getLabel(language,INTERFACE.labels.toolName);
        document.title = printTitlePrefix;
        bodyNode.innerHTML = "";

        if (lastResources) {
            lastResult.printTitlePrefix = printTitlePrefix;
            QuestRenderer.render(lastResources,lastResult,language,bodyNode,{
                debugRender:DEBUG_RENDER,
                debugHiddenText:DEBUG_HIDDENTEXT,
                questUnavailableLabel:INTERFACE.labels.questUnavailable,
                gotoPageCallback:(page)=>{
                    if (!generating) {
                        lastResult.campaign.page = page;
                        generate();
                    }
                }
            });
            if (lastResult.quest && (lastResult.quest.languages.indexOf(language) == -1)) {
                noticebarNode.innerHTML=getLabel(language,INTERFACE.labels.languageUnavailable);
                noticebarNode.style.display="";
            } else {
                noticebarNode.innerHTML="";
                noticebarNode.style.display="none";
            }
            headerNode.scrollIntoView();
        }
    }

    function isMenuOptionSelected(settings,option) {
        for (let i=0;i<INTERFACE.settings.length;i++)
            if (settings[i])
                for (let j=0;j<settings[i].length;j++)
                    if (option.indexOf(INTERFACE.settings[i].entries[settings[i][j]].idOption) != -1)
                        return true;
        return false;
    }

    function isOptionSelected(selected,entry,id) {
        if (entry.isCounterTrigger)
            return generationCounter == COUNTER_LIMIT;
        else if (entry.isFlag)
            return isFlag(entry.isFlag);
        else
            return selected.indexOf(id) != -1;
    }

    function generate(fromscratch) {
        if (!generating) {

            let
                requirements;

            if (fromscratch) {

                requirements = {};
            
                for (let k in SETTINGS_DEFAULT)
                    requirements[k] = SETTINGS_DEFAULT[k].slice();

                INTERFACE.settings.forEach((setting,sid)=>{

                    if (
                        (!setting.ifMenuOptionSelected || isMenuOptionSelected(settings,setting.ifMenuOptionSelected))
                    ) {

                        let
                            picked = [],
                            notPicked = [],
                            selected = settings[sid];

                        setting.entries.forEach((entry,id)=>{
                            if (entry.languageExcludeTags && entry.languageExcludeTags[language]) {
                                if (isOptionSelected(selected,entry,id))
                                    entry.languageExcludeTags[language].forEach(tag=>{
                                        if (notPicked.indexOf(tag) == -1)
                                            notPicked.push(tag)
                                    });
                            }
                            if (entry.tags)
                                if (isOptionSelected(selected,entry,id))
                                    entry.tags.forEach(tag=>{
                                        if (picked.indexOf(tag) == -1)
                                            picked.push(tag)
                                    });
                                else
                                    entry.tags.forEach(tag=>{
                                        if (notPicked.indexOf(tag) == -1)
                                        notPicked.push(tag)
                                    });
                            if (entry.excludeTags)
                                if (isOptionSelected(selected,entry,id))
                                    entry.excludeTags.forEach(tag=>{
                                        if (notPicked.indexOf(tag) == -1)
                                            notPicked.push(tag)
                                    });
                        });

                        switch (setting.type) {
                            case "includeExclude":{
                                notPicked.forEach(item=>{
                                    if ((requirements.excludes.indexOf(item) == -1) && (requirements.needs.indexOf(item) == -1))
                                        requirements.excludes.push(item)
                                });
                                break;
                            }
                        }

                        picked.forEach(item=>{
                            if (requirements.needs.indexOf(item) == -1)
                                requirements.needs.push(item)
                        });

                    }

                });

                generating = true;
                bodyNode.innerHTML = "<div class='generating'>"+getLabel(language,INTERFACE.labels.wait)+"</div>";
                if (!seed) increaseCounter();

            }

            Generator.generate(requirements,seed,{
                debugQuest:DEBUG_QUEST,
                campaignDebugQuest:DEBUG_CAMPAIGN && DEBUG_QUEST
            },
            fromscratch ? false : lastResult.campaign,
            (resources,result)=>{
                let
                    hash;
                seed = result.seed;
                hash = settingsToHash();
                saveId(hash);
                result.hash = hash;
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

    function showFlagPopup(entry) {
        let
            yesNode, noNode,
            containerNode = createNode(rootNode,"div","popupcontainer"),
            boxNode = createNode(containerNode,"div","popupbox");
        
        boxNode.innerHTML = getLabel(language,entry.message);
        yesNode = createNode(boxNode,"div","popupbutton");
        noNode = createNode(boxNode,"div","popupbutton");

        yesNode.innerHTML = getLabel(language,entry.buttons.yes);
        noNode.innerHTML = getLabel(language,entry.buttons.no);

        yesNode.onclick = ()=>{
            setFlag(entry.isFlagButton);
            drawSettings();
            showSettings();
            rootNode.removeChild(containerNode);
        }

        noNode.onclick = ()=>{
            rootNode.removeChild(containerNode);
        }
        
    }

    function drawSettings() {
        let
            id = 0;
        settingsNode.innerHTML = "";
        INTERFACE.settings.forEach((setting,sid)=>{
            if (
                (setting.ifMenuOptionSelected && !isMenuOptionSelected(settings,setting.ifMenuOptionSelected))
            ) {
                // Hide entry
            } else {

                let
                    panelNode = createNode(settingsNode,"div","panel"),
                    sectionNode = createNode(panelNode,"div","section"),
                    itemsNode = createNode(panelNode,"div","items");

                sectionNode.innerHTML = getLabel(language,setting.title);

                setting.entries.forEach((entry,eid)=>{

                    id++;

                    if (
                        entry.isHidden ||
                        (entry.ifFlag && !isFlag(entry.ifFlag)) ||
                        (entry.ifNotFlag && isFlag(entry.ifNotFlag)) ||
                        (entry.ifMenuOptionSelected && !isMenuOptionSelected(settings,entry.ifMenuOptionSelected))
                    ) {
                        // Hide entry
                    } else if (entry.isButton) {

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
                            else if (entry.isFlagButton)
                                entry._selector.onclick=()=>{
                                    showFlagPopup(entry);
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
                                if (entry.idOption) drawSettings();
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
                                    if (entry.isFlag) {
                                        if (isFlag(entry.isFlag))
                                            unsetFlag(entry.isFlag);
                                        else
                                            setFlag(entry.isFlag);
                                    } else {
                                        let
                                            pos = settings[sid].indexOf(eid);
                                        if (pos == -1)
                                            settings[sid].push(eid);
                                        else
                                            settings[sid].splice(pos,1);
                                    }
                                    loadSettingsFrom(SETTINGS_SOURCES.MEMORY);
                                    if (entry.idOption) drawSettings();
                                    showSettings();
                                }
                        }
                    
                        labelNode.innerHTML = "<span class='name'>"+getLabel(language,entry.label)+"</span><span class='description'> - "+getLabel(language,entry.description)+"</span>";

                    }
                })
            }
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
                selected;

            if (
                (source == SETTINGS_SOURCES.MEMORY) &&
                (!setting.ifMenuOptionSelected || isMenuOptionSelected(newSettings,setting.ifMenuOptionSelected))
            )
                selected = settings[sid];
            else
                selected = [];

            setting.entries.forEach((entry,id)=>{
                if (entry.isDefault)
                    defaults.push(id);
                if (entry.isMandatory)
                    mandatory.push(id);

                if (entry.isFlag) {
                    if (isFlag(entry.isFlag))
                        selected.push(id);
                } else
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
           
            if (
                (!setting.ifMenuOptionSelected || isMenuOptionSelected(settings,setting.ifMenuOptionSelected))
            ) setting.entries.forEach((entry,id)=>{
                if (
                    entry._selector &&
                    !entry.isButton &&
                    !entry.isHidden &&
                    (!entry.ifFlag || isFlag(entry.ifFlag)) &&
                    (!entry.ifNotFlag || !isFlag(entry.ifNotFlag)) &&
                    (!entry.ifMenuOptionSelected || isMenuOptionSelected(settings,entry.ifMenuOptionSelected))
                )
                    entry._selector.checked = isOptionSelected(selected,entry,id);
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
                case "discordAt":{
                    out = DISCORD_AT;
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

            rootNode = root;
            headerNode = createNode(rootNode,"div","header");
            noticebarNode = createNode(rootNode,"div","noticebar");
            headerContentNode = createNode(headerNode,"div","content");
            settingsNode = createNode(headerContentNode,"div","settings");
            actionsNode = createNode(headerContentNode,"div","actions");
            bodyNode = createNode(rootNode,"div","body"),
            footerNode = createNode(rootNode,"div","footer");

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
                generate(true)
            }

            settingsButtonNode.onclick=()=>{
                setSettingsMode(!settingsMode);
            }

            if (loadId())
                loadSettingsFrom(SETTINGS_SOURCES.SESSION);
            else
                loadSettingsFrom(SETTINGS_SOURCES.DEFAULT);

            loadCounter();
            setLanguage(loadLanguage());
            setSettingsMode(settingsMode);
            showSettings();

            generate(true);

            if (window.Installer)
                Installer.check(()=>{
                    showInstaller = true;
                    drawSettings();
                    showSettings();
                });

            window.onhashchange=()=>{
                if (loadId()) {
                    loadSettingsFrom(SETTINGS_SOURCES.SESSION);
                    showSettings();
                    generate(true);
                }
            }
        }
    }

}());