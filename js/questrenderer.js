QuestRenderer=(function(){

    let
        SIMPLE_ENTITIES={
            eacute:"e'",
            Eacute:"E'",
            ograve:"o'",
            agrave:"a'",
            egrave:"e'",
            igrave:"i'",
            ugrave:"u'",
            Ograve:"O'",
            Agrave:"A'",
            Egrave:"E'",
            Igrave:"I'",
            Ugrave:"U'"
        };

    function createNode(into,type,className) {
        let
            node = document.createElement(type);

        if (className) node.className=className;
        if (into) into.appendChild(node);

        return node;
    }

    function simplifyEntities(text) {
        return text.replace(/&([^;]+);/g,(m,m1)=>{
            if (SIMPLE_ENTITIES[m1])
                return SIMPLE_ENTITIES[m1];
            else
                return m;
        });
    }

    function renderTokenList(flags,resources,result,language,resources,tokensListNode,list) {

        for (let k in list)
            if (resources.tokensMetadata[k]) {
                let
                    tokenNode = createNode(tokensListNode,"div","tokenElement"),
                    tokenName,
                    tokenLabel = "";
                if (resources.tokensMetadata[k].className)
                    tokenNode.innerHTML="<div class=\""+resources.tokensMetadata[k].className.map+"\"></div>";
                
                tokenName = createNode(tokenNode,"span","tokenDescription"),
                tokenLabel= Labels.getLabel(flags,resources,result,language,resources.tokensMetadata[k].label,0);
                switch (resources.tokensMetadata[k].type) {
                    case "variableAmount":{
                        tokenLabel+="*";
                        break;
                    }
                    case "upTo":{
                        tokenLabel+=" ("+Labels.getLabel(flags,resources,result,language,resources.globalLabels.upTo)+" x"+list[k]+")";
                        break;
                    }
                    default:{
                        tokenLabel+=" x"+list[k];
                    }
                }
                tokenName.innerHTML=tokenLabel;
            }
            
    }

    return {
        render:(resources,result,language,into,flags)=>{

            if (result.quest) {

                if (!flags) flags = {};

                let
                    quest = result.quest,
                    questNode = createNode(into,"div","quest"),
                    sheetHeader = createNode(questNode,"div","sheetHeader displayonly"),
                    sheetQuestHeader = createNode(questNode,"div","sheetQuestHeader displayonly"),
                    questHeadNode = createNode(questNode,"div","questHead"),
                    titleNode = createNode(questHeadNode,"div","title"),
                    authorNode = createNode(questHeadNode,"div","author"),
                    storyNode = createNode(questHeadNode,"div","story"),
                    tilesNode = createNode(questHeadNode,"div","tiles"),
                    objectivesTitleNode = createNode(questHeadNode,"div","objectivesTitle"),
                    objectivesNode = createNode(questHeadNode,"div","objectives"),
                    specialRulesTitleNode = createNode(questHeadNode,"div","specialRulesTitle"),
                    specialRulesNode = createNode(questHeadNode,"div","specialRules"),
                    tokensListNode = createNode(questNode,"div","tokensList displayonly"),
                    printTokensListNode = createNode(questNode,"div","tokensList printonly"),
                    miniMapNode = createNode(questNode,"div","miniMap"),
                    printMiniMapNode = createNode(questNode,"div","miniMap"),
                    mapNode = createNode(questNode,"div","map"),
                    printMapNode = createNode(questNode,"div","map"),
                    footerNode,
                    objectivesList,
                    tilesList,
                    tilesGroups = {};

                // Prepare global labels

                for (let k in result.map.usedTokens)
                    result.labels["tokensCount."+k] = {
                        EN:result.map.usedTokens[k]
                    };

                // Prepare quest outline

                authorNode.innerHTML = Labels.getLabel(flags,resources,result,language,quest.by);

                sheetQuestHeader.innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.questHeader);

                createNode(titleNode,"div","left diamond displayonly");
                createNode(titleNode,"div","text").innerHTML = simplifyEntities(Labels.getLabel(flags,resources,result,language,quest.title));
                createNode(titleNode,"div","right diamond displayonly");

                storyNode.innerHTML = Labels.getLabel(flags,resources,result,language,quest.story);
                
                objectivesTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.objectives);
                specialRulesTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.specialRules);

                // Prepare the tiles list

                tilesList = Labels.getLabel(flags,resources,result,language,resources.globalLabels.requiredTiles)+": ";
                result.map.index.forEach(placedTile=>{
                    let
                        tile = placedTile.tile;

                    if (tile.from) {
                        if (!tilesGroups[tile.from]) tilesGroups[tile.from]=[];
                        tilesGroups[tile.from].push(tile.sides[placedTile.side].label);
                    }
                });

                for (let k in tilesGroups)
                    tilesList+="<i>("+Labels.getLabel(flags,resources,result,language,resources.globalLabels[k])+")</i> <b>"+tilesGroups[k].sort().join(", ")+"</b>, ";
                
                tilesNode.innerHTML = tilesList.substr(0,tilesList.length-2)+".";

                // Prepare the tokens list

                renderTokenList(flags,resources,result,language,resources,tokensListNode,result.map.visibleUsedTokens);
                renderTokenList(flags,resources,result,language,resources,printTokensListNode,result.map.usedTokens);

                // Prepare the objective/special rules list

                if (quest.objectivesHeader)
                    objectivesNode.innerHTML = Labels.getLabel(flags,resources,result,language,quest.objectivesHeader);

                objectivesList = createNode(objectivesNode,"ol");
                specialRulesList = createNode(specialRulesNode,"ul");
                quest.rules.sort((a,b)=>{
                    if (a.priority && !b.priority) return -1;
                    else if (!a.priority && b.priority) return 1;
                    else if (a.priority > b.priority) return -1;
                    else if (a.priority < b.priority) return 1;
                    else return 0;
                });
                quest.rules.forEach(rule=>{

                    if (rule.type == "objective") {
                        let
                            objectiveNode = createNode(objectivesList,"li");
                        objectiveNode.innerHTML = "<b>"+Labels.getLabel(flags,resources,result,language,rule.name)+"</b>: "+Labels.getLabel(flags,resources,result,language,rule.summary);
                        if (rule.classNames)
                            rule.classNames.forEach(rule=>{
                                objectiveNode.className+=" "+rule;
                            });
                    }

                    if (rule.explanation) {
                        let
                            specialRuleNode = createNode(specialRulesList,"li");
                        specialRuleNode.innerHTML = "<b>"+Labels.getLabel(flags,resources,result,language,rule.name)+"</b>: "+Labels.getLabel(flags,resources,result,language,rule.explanation);
                        if (rule.classNames)
                            rule.classNames.forEach(rule=>{
                                specialRuleNode.className+=" "+rule;
                            });
                    }

                });

                // Prepare the challenges list

                if (quest.challenges.length) {

                    let
                        challengesTitleNode = createNode(questHeadNode,"div","challengesTitle"),
                        challengesNode = createNode(questHeadNode,"div","challenges"),
                        challengesList;

                    challengesTitleNode.innerHTML =  "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.challenges);
                    challengesNode.innerHTML =  Labels.getLabel(flags,resources,result,language,resources.globalLabels.challengesExplanation);

                    challengesList = createNode(challengesNode,"ul");

                    quest.challenges.forEach(challenge=>{
                    
                        let
                            intensity = "",
                            challengeRuleNode = createNode(challengesList,"li");

                        for (let i=0;i<challenge.intensity;i++)
                            intensity+="<div class='intensity'></div>";
                        
                        challengeRuleNode.innerHTML = intensity+"<b>"+Labels.getLabel(flags,resources,result,language,challenge.name)+"</b>: "+Labels.getLabel(flags,resources,result,language,challenge.explanation);
                    
                    });
   
                }

                createNode(questHeadNode,"div","mapSeparator displayonly");

                // Prepare the loot ratio grid

                if (result.mapConfig.lootRatio) {

                    let
                        lootRatioNode = createNode(questNode,"div","lootRatio"),
                        lootRatioLabel = createNode(lootRatioNode,"div","lootRatioLabel"),
                        lootRatioContentNode = createNode(lootRatioNode,"div","lootRatioContent");
                    
                    lootRatioLabel.innerHTML="*"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.lootRatio);

                    result.mapConfig.lootRatio.forEach(ratio=>{
                        let
                            lootRatioRow = createNode(lootRatioContentNode,"div","lootRatioRow"),
                            lootRatioText;
                        
                        lootRatioText = ratio.players[0]+"-"+ratio.players[1]+" <div class='perPlayer'></div> ";
                        for (let i=0;i<ratio.lootTokens;i++)
                            lootRatioText+="<div class=\""+resources.tokensMetadata.loot.className.map+"\"></div>";

                        lootRatioRow.innerHTML=lootRatioText;
                    })

                }

                footerNode = createNode(questNode,"div","questfooter displayonly");
                footerNode.innerHTML = "<div class='arrow left'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.questFooter)+"<div class='arrow right'></div>";

                result.printTitleSuffix = titleNode.innerText;

                // Print maps

                MapRenderer.render(resources,result,mapNode,miniMapNode,true);
                MapRenderer.render(resources,result,printMapNode,printMiniMapNode,false);

                // Apply media classess

                miniMapNode.className += " displayOnly";
                mapNode.className += " displayOnly";

                printMiniMapNode.className += " printOnly";
                printMapNode.className += " printOnly";

                // Hide hidden text

                let
                    hiddenText = document.getElementsByClassName("hiddentext");
                for (let i=0;i<hiddenText.length;i++) {
                    let
                        node = hiddenText[i],
                        button = createNode(0,"span","showtext");
                    
                    node.style.display = "none";
                    button.onclick=function() {
                        this.style.display = "none";
                        node.style.display = "";
                    }
                    button.innerHTML=Labels.getLabel(flags,resources,result,language,resources.globalLabels.showHiddenText);
                    node.parentElement.insertBefore(button,node);
                }
                
            } else {
                let
                    questNode = createNode(into,"div","quest"),
                    notAvailableNode = createNode(questNode,"div","notavailable");

                if (flags.questUnavailableLabel)
                    notAvailableNode.innerHTML = Labels.getLabel(flags,resources,result,language,flags.questUnavailableLabel);

            }
    
        }
    }

})();        