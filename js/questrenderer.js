QuestRenderer=(function(){

    let
        SIMPLE_ENTITIES={
            ograve:"o'",
            agrave:"a'",
            egrave:"e'",
            igrave:"i'"
        };

    function wrap(flags,key,text) {
        if (flags.debugRender)
            return "<span style='color:#f00; border:1px solid #f00;display:inline-block' title=\""+key+"\">"+text+"</span>";
        else
            return text;
    }

    function getLabel(flags,resources,result,language,label,index) {
        let
            out;
        if (label[language])
            out=label[language];
        else if (label.EN)
            out=label.EN;
        if (result) {
            if (index !== undefined)
                out = out[index];
            out = String(out);
            return out.replace(/\{([^}]+)\}/g,(m,m1)=>{
                let
                    text = m1.split("@"),
                    parts = text[0].split(":");
                if (result.labels[parts[0]] !== undefined) {
                    let
                        subOut = getLabel(flags,resources,result,language,result.labels[parts[0]], text[1]);
                    if (parts[1] == "capital")
                        return wrap(flags,m1,subOut[0].toUpperCase()+subOut.substr(1,subOut.length));
                    else
                        return wrap(flags,m1,subOut);
                } else
                    return wrap(flags,m1,"{???}");
            });
        } else return wrap(flags,"?","[???]");
    }

    function createNode(into,type,className) {
        let
            node = document.createElement(type);

        if (className) node.className=className;
        into.appendChild(node);

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

    return {
        render:(resources,result,language,into,flags)=>{

            if (result.quest) {

                if (!flags) flags = {};

                let
                    quest = result.quest,
                    questNode = createNode(into,"div","quest"),
                    questHeadNode = createNode(questNode,"div","questHead"),
                    titleNode = createNode(questHeadNode,"div","title"),
                    authorNode = createNode(questHeadNode,"div","author"),
                    storyNode = createNode(questHeadNode,"div","story"),
                    tilesNode = createNode(questHeadNode,"div","tiles"),
                    objectivesTitleNode = createNode(questHeadNode,"div","objectivesTitle"),
                    objectivesNode = createNode(questHeadNode,"div","objectives"),
                    specialRulesTitleNode = createNode(questHeadNode,"div","specialRulesTitle"),
                    specialRulesNode = createNode(questHeadNode,"div","specialRules"),
                    tokensListNode = createNode(questNode,"div","tokensList"),
                    miniMapNode = createNode(questNode,"div","miniMap"),
                    mapNode = createNode(questNode,"div","map"),
                    objectivesList,
                    tilesList,
                    tilesGroups = {};

                // Prepare global labels

                for (let k in result.map.usedTokens)
                    result.labels["tokensCount."+k] = {
                        EN:result.map.usedTokens[k]
                    };

                // Prepare quest outline

                authorNode.innerHTML = getLabel(flags,resources,result,language,quest.by);
                titleNode.innerHTML = simplifyEntities(getLabel(flags,resources,result,language,quest.title));
                storyNode.innerHTML = getLabel(flags,resources,result,language,quest.story);
                
                objectivesTitleNode.innerHTML = getLabel(flags,resources,result,language,resources.globalLabels.objectives);
                specialRulesTitleNode.innerHTML = getLabel(flags,resources,result,language,resources.globalLabels.specialRules);

                // Prepare the tiles list

                tilesList = getLabel(flags,resources,result,language,resources.globalLabels.requiredTiles)+": ";
                result.map.index.forEach(placedTile=>{
                    let
                        tile = placedTile.tile;

                    if (tile.from) {
                        if (!tilesGroups[tile.from]) tilesGroups[tile.from]=[];
                        tilesGroups[tile.from].push(tile.sides[placedTile.side].label);
                    }
                });

                for (let k in tilesGroups)
                    tilesList+="<i>("+getLabel(flags,resources,result,language,resources.globalLabels[k])+")</i> <b>"+tilesGroups[k].sort().join(", ")+"</b>, ";
                
                tilesNode.innerHTML = tilesList.substr(0,tilesList.length-2)+".";

                // Prepare the tokens list

                for (let k in result.map.usedTokens)
                    if (resources.tokensMetadata[k]) {
                        let
                            tokenNode = createNode(tokensListNode,"div","tokenElement"),
                            tokenName,
                            tokenLabel = "";
                        if (resources.tokensMetadata[k].className)
                            tokenNode.innerHTML="<div class=\""+resources.tokensMetadata[k].className.map+"\"></div>";
                        
                        tokenName = createNode(tokenNode,"span","tokenDescription"),
                        tokenLabel= getLabel(flags,resources,result,language,resources.tokensMetadata[k].label,0);
                        switch (resources.tokensMetadata[k].type) {
                            case "variableAmount":{
                                tokenLabel+="*";
                                break;
                            }
                            case "upTo":{
                                tokenLabel+=" ("+getLabel(flags,resources,result,language,resources.globalLabels.upTo)+" x"+result.map.usedTokens[k]+")";
                                break;
                            }
                            default:{
                                tokenLabel+=" x"+result.map.usedTokens[k];
                            }
                        }
                        tokenName.innerHTML=tokenLabel;
                    }

                // Prepare the objective/special rules list

                if (quest.objectivesHeader)
                    objectivesNode.innerHTML = getLabel(flags,resources,result,language,quest.objectivesHeader);

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
                        objectiveNode.innerHTML = "<b>"+getLabel(flags,resources,result,language,rule.name)+"</b>: "+getLabel(flags,resources,result,language,rule.summary);
                    }

                    if (rule.explanation) {
                        let
                            specialRuleNode = createNode(specialRulesList,"li");
                        specialRuleNode.innerHTML = "<b>"+getLabel(flags,resources,result,language,rule.name)+"</b>: "+getLabel(flags,resources,result,language,rule.explanation);
                    }

                });

                // Prepare the challenges list

                if (quest.challenges.length) {

                    let
                        challengesTitleNode = createNode(questHeadNode,"div","challengesTitle"),
                        challengesNode = createNode(questHeadNode,"div","challenges"),
                        challengesList;

                    challengesTitleNode.innerHTML =  getLabel(flags,resources,result,language,resources.globalLabels.challenges);
                    challengesNode.innerHTML =  getLabel(flags,resources,result,language,resources.globalLabels.challengesExplanation);

                    challengesList = createNode(challengesNode,"ul");

                    quest.challenges.forEach(challenge=>{
                    
                        let
                            intensity = "",
                            challengeRuleNode = createNode(challengesList,"li");

                        for (let i=0;i<challenge.intensity;i++)
                            intensity+="<div class='intensity'></div>";
                        
                        challengeRuleNode.innerHTML = intensity+"<b>"+getLabel(flags,resources,result,language,challenge.name)+"</b>: "+getLabel(flags,resources,result,language,challenge.explanation);
                    
                    });
   
                }

                // Prepare the loot ratio grid

                if (result.mapConfig.lootRatio) {

                    let
                        lootRatioNode = createNode(questNode,"div","lootRatio"),
                        lootRatioLabel = createNode(lootRatioNode,"div","lootRatioLabel"),
                        lootRatioContentNode = createNode(lootRatioNode,"div","lootRatioContent");
                        

                    lootRatioLabel.innerHTML="*"+getLabel(flags,resources,result,language,resources.globalLabels.lootRatio);

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

                result.printTitleSuffix = titleNode.innerText;
                result.mapNode = mapNode;
                result.miniMapNode = miniMapNode;
                
            }
    
        }
    }

})();        