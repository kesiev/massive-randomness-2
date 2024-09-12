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

    function renderRewards(hideSpoilers,flags,resources,result,language,rewards) {
        let
            rewardText;
        if (rewards.length == 1) {
            rewardText = Labels.getLabel(flags,resources,result,language,rewards[0].description);
            if (hideSpoilers)
                rewardText = "<span class='hiddentext'>"+rewardText+"</span>";
        } else {
            rewardText = "<ul>";
            rewards.forEach(reward=>{
                rewardText+="<li>"+Labels.getLabel(flags,resources,result,language,reward.description)+"</li>";
            });
            rewardText += "</ul>";
            if (hideSpoilers)
                rewardText = "<div class='hiddentext'>"+rewardText+"</div>";
    
        }
        return rewardText;
    }

    return {
        render:(resources,result,language,into,flags)=>{

            let
                campaignBrowser,
                headerLabel = resources.globalLabels.questHeader,
                footerLabel = resources.globalLabels.questFooter,
                renderQuest = true,
                hideSpoilers = false;

            if (!flags) flags = {};
            if (!result.labels) result.labels = [];

            if (result.campaign) {

                let
                    currentPage = result.campaign.currentPage;

                hideSpoilers = result.campaign.flags.hideSpoilers;

                campaignBrowser = createNode(into,"div","campaignBrowser displayOnly");

                let
                    pageLabel = createNode(campaignBrowser,"div","pageLabel");

                pageLabel.onclick = ()=>{
                    flags.gotoPageCallback(0);
                }

                if (result.campaign.page) {
                    let
                        leftButton = createNode(campaignBrowser,"div","leftButton");
                    leftButton.onclick = ()=>{
                        flags.gotoPageCallback(result.campaign.page-1);
                    }
                }

                if (result.campaign.page+1 < result.campaign.pages.length) {
                    let
                        rightButton = createNode(campaignBrowser,"div","rightButton");
                    rightButton.onclick = ()=>{
                        flags.gotoPageCallback(result.campaign.page+1);
                    }
                }

                headerLabel = currentPage.name;
                footerLabel = resources.globalLabels.campaignFooter;

                for (let k in result.campaign.labels)
                    result.labels[k] = result.campaign.labels[k];
                for (let k in currentPage.labels)
                    result.labels[k] = currentPage.labels[k];

                pageLabel.innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignPage);
                result.printTitleCoords = " ("+result.hash+" - "+pageLabel.innerText+")";

                if (!currentPage.generator) {

                    renderQuest = false;

                    switch (currentPage.type) {
                        case "cover":{
                            let
                                story = "",
                                introduction = "",
                                questNode = createNode(into,"div","quest coverCampaign"),
                                questCoverNode = createNode(questNode,"div","cover"),
                                campaignLogo = createNode(questCoverNode,"img","campaignLogo"),
                                campaignNameNode = createNode(questCoverNode,"div","campaignName"),
                                questHeadNode = createNode(questNode,"div","questHead"),
                                sheetHeader = createNode(questHeadNode,"div","sheetHeader displayonly"),
                                titleNode = createNode(questHeadNode,"div","title"),
                                titleNodeText,
                                storyNode = createNode(questHeadNode,"div","story"),
                                preparationTitleNode = createNode(questHeadNode,"div","objectivesTitle"),
                                preparationNode = createNode(questHeadNode,"div","objectives"),
                                indexTitleNode = createNode(questHeadNode,"div","objectivesTitle"),
                                indexNode = createNode(questHeadNode,"div","objectives"),
                                questPhaseTitleNode = createNode(questHeadNode,"div","objectivesTitle"),
                                questPhaseNode = createNode(questHeadNode,"div","objectives"),
                                achievementsTitleNode = result.campaign.achievements ? createNode(questHeadNode,"div","objectivesTitle") : 0,
                                achievementsNode = result.campaign.achievements ?  createNode(questHeadNode,"div","objectives") : 0,
                                introductionTitleNode = createNode(questHeadNode,"div","objectivesTitle"),
                                introductionNode = createNode(questHeadNode,"div","objectives"),
                                footerNode = createNode(questNode,"div","questfooter displayonly"),
                                pagesList = createNode(indexNode,"ul");

                            campaignLogo.src="images/logo.svg";

                            createNode(titleNode,"div","left diamond displayonly");
                            titleNodeText = createNode(titleNode,"div","text");
                            titleNodeText.innerHTML = simplifyEntities(Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignMode));
                            createNode(titleNode,"div","right diamond displayonly");

                            preparationTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignPreparationTitle);
                            indexTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignIndex);
                            introductionTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignIntroductionTitle);
                            footerNode.innerHTML = "<div class='arrow left'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignIndexFooter)+"<div class='arrow right'></div>";
                            questPhaseTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignQuestPhase);
                            questPhaseNode.innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignQuestPhaseDescription);
                            campaignNameNode.innerHTML = result.campaign.name;

                            createNode(preparationNode,"p").innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignPreparation);
                    
                            result.campaign.pages.forEach((page,id)=>{
                                createNode(pagesList,"li").innerHTML = "<span class='gotopage' page='"+id+"'></span>";
                            });

                            result.campaign.introduction.forEach(paragraph=>{
                                introduction +=  Labels.getLabel(flags,resources,result,language,paragraph);
                            });

                            if (hideSpoilers)
                                introduction = "<div class='hiddentext'>"+introduction+"</div>";

                            result.campaign.story.forEach(paragraph=>{
                                story += Labels.getLabel(flags,resources,result,language,paragraph);
                            });

                            introductionNode.innerHTML = introduction;
                            storyNode.innerHTML = story;

                            if (achievementsTitleNode) {

                                achievementsTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignAchievements);
                                if (result.campaign.achievementsCondition)
                                    createNode(achievementsNode,"div").innerHTML = Labels.getLabel(flags,resources,result,language,result.campaign.achievementsCondition);

                                let
                                    achievementList = createNode(achievementsNode,"ul");
                                    
                                result.campaign.achievements.forEach(achievement=>{
                                    createNode(achievementList,"li").innerHTML = "<b>"+
                                        Labels.getLabel(flags,resources,result,language,achievement.condition)+
                                        "</b>:<br><span class='achievementSpacing'></span>"+
                                        renderRewards(hideSpoilers,flags,resources,result,language,achievement.reward);
                                })

                            }

                            result.printTitleSuffix = titleNodeText.innerText;

                            break;
                        }
                    }

                }

            }

            if (result.bossData)
                for (let k in result.bossData.labels)
                    result.labels[k] = result.bossData.labels[k];

            if (renderQuest) {

                if (result.quest) {

                    let
                        quest = result.quest,
                        campaign = result.campaign,
                        campaignPage = campaign && campaign.currentPage,
                        campaignPageGenerator = campaignPage && campaignPage.generator,
                        campaignChallenge = quest.challenges.length && campaignPageGenerator && campaignPageGenerator.challenge,
                        questNode = createNode(into,"div","quest "+(campaign ? "questCampaign " : "")+(quest.specialClass ? quest.specialClass : "")),
                        sheetHeader = createNode(questNode,"div","sheetHeader displayonly"),
                        questHeadNode = createNode(questNode,"div","questHead"),
                        sheetQuestHeader = createNode(questHeadNode,"div","sheetQuestHeader"+(campaign ? "" : " displayonly")),
                        titleNode = createNode(questHeadNode,"div","title"),
                        authorNode = createNode(questHeadNode,"div","author"),
                        storyNode = createNode(questHeadNode,"div","story"),
                        tilesNode = createNode(questHeadNode,"div","tiles"),
                        objectivesTitleNode = createNode(questHeadNode,"div","objectivesTitle"),
                        objectivesNode = createNode(questHeadNode,"div","objectives"),
                        specialRulesTitleNode = createNode(questHeadNode,"div","specialRulesTitle"),
                        specialRulesNode = createNode(questHeadNode,"div","specialRules"),
                        sideQuestTitleNode = campaignPageGenerator && campaignPageGenerator.sideQuest && campaignPageGenerator.sideQuest.isValid ? createNode(questHeadNode,"div","sideQuestTitle") : false,
                        sideQuestRulesNode = campaignPageGenerator && campaignPageGenerator.sideQuest && campaignPageGenerator.sideQuest.isValid ? createNode(questHeadNode,"div","sideQuestRules") : false,
                        campaignChallengeTitleNode = campaignChallenge && !campaignChallenge.asRule ? createNode(questHeadNode,"div","sideQuestTitle") : false,
                        campaignChallengeRulesNode = campaignChallenge && !campaignChallenge.asRule ? createNode(questHeadNode,"div","sideQuestRules") : false,
                        tokensListNode = createNode(questNode,"div","tokensList displayonly"),
                        printTokensListNode = createNode(questNode,"div","tokensList printonly"),
                        miniMapNode = createNode(questNode,"div","miniMap"),
                        printMiniMapNode = createNode(questNode,"div","miniMap"),
                        mapNode = createNode(questNode,"div","map"),
                        printMapNode = createNode(questNode,"div","map"),
                        rules,
                        sideQuestChallenge,
                        footerNode,
                        objectivesList,
                        tilesList,
                        tilesGroups = {};

                    // Get side quest challenge

                    if (campaignChallenge) {
                        quest.challenges.forEach(challenge=>{
                            if (!sideQuestChallenge || (challenge.intensity === campaignChallenge.intensity))
                                sideQuestChallenge = challenge;
                        });
                    }

                    // Prepare global labels

                    for (let k in result.map.usedTokens)
                        result.labels["tokensCount."+k] = {
                            EN:result.map.usedTokens[k]
                        };

                    // Prepare quest outline

                    authorNode.innerHTML = Labels.getLabel(flags,resources,result,language,quest.by);

                    sheetQuestHeader.innerHTML = Labels.getLabel(flags,resources,result,language,headerLabel);

                    createNode(titleNode,"div","left diamond displayonly");
                    createNode(titleNode,"div","text").innerHTML = simplifyEntities(Labels.getLabel(flags,resources,result,language,quest.title));
                    createNode(titleNode,"div","right diamond displayonly");

                    storyNode.innerHTML = Labels.getLabel(flags,resources,result,language,quest.story);
                    
                    objectivesTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.objectives);
                    specialRulesTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.specialRules);
                    if (sideQuestTitleNode)
                        sideQuestTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.sideQuest);
                    if (campaignChallengeTitleNode)
                        campaignChallengeTitleNode.innerHTML = "<div class='diamond displayonly'></div>"+Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignChallenge);

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
                    
                    tilesList = tilesList.substr(0,tilesList.length-2)+".";

                    if (result.bossData && result.bossData.data.tilesNeeded)
                        tilesList += " "+Labels.getLabel(flags,resources,result,language,result.bossData.data.tilesNeeded);

                    tilesNode.innerHTML = tilesList;

                    // Prepare the tokens list

                    renderTokenList(flags,resources,result,language,resources,tokensListNode,result.map.visibleUsedTokens);
                    renderTokenList(flags,resources,result,language,resources,printTokensListNode,result.map.usedTokens);

                    // Prepare the objective/special rules list

                    if (quest.objectivesHeader)
                        objectivesNode.innerHTML = Labels.getLabel(flags,resources,result,language,quest.objectivesHeader);

                    // Add challenge as rule

                    rules = quest.rules.slice();

                    if (campaignChallenge && campaignChallenge.asRule)
                        rules.push({
                            priority:5,
                            type:"rule",
                            name:sideQuestChallenge.name,
                            explanation:sideQuestChallenge.explanation
                        });

                    if (result.bossData && quest.boss && quest.boss.rules)
                        quest.boss.rules.forEach(rule=>{
                            rules.push(rule);
                        })

                    objectivesList = createNode(objectivesNode,"ol");
                    specialRulesList = createNode(specialRulesNode,"ul");
                    rules.sort((a,b)=>{
                        if (a.priority && !b.priority) return -1;
                        else if (!a.priority && b.priority) return 1;
                        else if (a.priority > b.priority) return -1;
                        else if (a.priority < b.priority) return 1;
                        else return 0;
                    });
                    rules.forEach(rule=>{

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

                    // Add boss battle rules

                    if (result.bossData) {
                        let
                            preparation = "";

                        createNode(specialRulesNode,"div","bossBattleTitle").innerHTML = Labels.getLabel(flags,resources,result,language,result.bossData.data.title);

                        if (sideQuestTitleNode)
                            preparation += Labels.getLabel(flags,resources,result,language,"{boss.bossSideQuestValidation}");

                        if (campaignChallengeTitleNode)
                            preparation += Labels.getLabel(flags,resources,result,language,"{boss.bossChallengeValidation}");

                        if (campaign && quest.boss.campaignPreparation)
                            preparation += Labels.getLabel(flags,resources,result,language,quest.boss.campaignPreparation);
                        else if (quest.boss.preparation)
                            preparation += Labels.getLabel(flags,resources,result,language,quest.boss.preparation);

                        preparation += Labels.getLabel(flags,resources,result,language,result.bossData.data.preparation);

                        createNode(specialRulesNode,"div","bossBattleText").innerHTML = preparation;
                    }

                    // Prepare the challenges list

                    if (!campaign && quest.challenges.length) {

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

                    // Prepare side quest rules

                    if (sideQuestTitleNode) {

                         let
                            sideQuestTitleNode = createNode(sideQuestRulesNode,"div","sideQuestSubtitle"),
                            sideQuestStoryNode = createNode(sideQuestRulesNode,"div","sideQuestStory"),
                            sideQuestList = createNode(sideQuestRulesNode,"ul");

                        sideQuestTitleNode.innerHTML = Labels.getLabel(flags,resources,result,language,campaignPageGenerator.sideQuest.name);
                        sideQuestStoryNode.innerHTML = Labels.getLabel(flags,resources,result,language,campaignPageGenerator.sideQuest.story);

                        createNode(sideQuestList,"li").innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.sideQuestCondition)+" "+Labels.getLabel(flags,resources,result,language,campaignPageGenerator.sideQuest.condition);
                        createNode(sideQuestList,"li").innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.sideQuestReward)+
                            " "+renderRewards(hideSpoilers,flags,resources,result,language,campaignPageGenerator.sideQuest.sideQuestReward);

                    }

                    // Prepare campaign challenges quest rules

                    if (campaignChallengeTitleNode) {

                        let
                            intensity = "",
                            campaignChallengeStoryNode = createNode(campaignChallengeRulesNode,"div","sideQuestStory"),
                            campaignChallengeList = createNode(campaignChallengeRulesNode,"ul");

                        campaignChallengeStoryNode.innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignChallengeExplanation);

                        for (let i=0;i<sideQuestChallenge.intensity;i++)
                            intensity+="<div class='intensity'></div>";
                        
                        createNode(campaignChallengeList,"li").innerHTML = intensity+"<b>"+Labels.getLabel(flags,resources,result,language,sideQuestChallenge.name)+"</b>: "+Labels.getLabel(flags,resources,result,language,sideQuestChallenge.explanation);
                        createNode(campaignChallengeList,"li").innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignChallengeReward)+
                            " "+renderRewards(hideSpoilers,flags,resources,result,language,campaignChallenge.challengeReward);

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

                    // Prepare campaign progression

                    if (campaignPageGenerator && campaignPageGenerator.progression) {
                        let
                            progression = campaignPageGenerator.progression,
                            progressionNode = createNode(questNode,"div","campaignProgression");

                        if (progression.ending) {

                            createNode(progressionNode,"div","campaignVictoryCase").innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignVictoryCase);
                            createNode(progressionNode,"div","campaignCongratulations").innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignCongratulations);

                            let
                                ending = "",
                                progressionBody = createNode(progressionNode,"div","campaignProgressionBody");

                                progression.ending.forEach(line=>{
                                    ending += Labels.getLabel(flags,resources,result,language,line);
                                })

                                createNode(progressionBody,"div","campaignEndingStory"+(hideSpoilers ? " hiddentext" : "")).innerHTML = ending;

                        } else {

                            let
                                nextMissionStory = "",
                                story = "",
                                progressionQuestNameNode = createNode(progressionNode,"div","campaignProgressionQuestName"),
                                progressionTitle = createNode(progressionNode,"div","campaignProgressionTitle"),
                                progressionBody = createNode(progressionNode,"div","campaignProgressionBody"+(hideSpoilers ? " hiddentext" : ""));

                            progressionQuestNameNode.innerHTML = Labels.getLabel(flags,resources,result,language,headerLabel)+":";
                            progressionTitle.innerHTML = simplifyEntities(Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignProgress));

                            if (progression.story) {
                                progression.story.forEach(line=>{
                                    story += Labels.getLabel(flags,resources,result,language,line);
                                });
                                createNode(progressionBody,"div","campaignStory").innerHTML = story;
                            }

                            if (progression.rewards) {
                                let
                                    list = createNode(progressionBody,"ul");
                                progression.rewards.forEach(reward=>{
                                    createNode(list,"li").innerHTML = Labels.getLabel(flags,resources,result,language,reward);
                                });
                            }

                            if (progression.nextMissionDirection) {

                                createNode(progressionBody,"div","campaignNextMission").innerHTML = Labels.getLabel(flags,resources,result,language,resources.globalLabels.campaignNextMission)
                                if (progression.nextMissionStory) {
                                    progression.nextMissionStory.forEach(line=>{
                                        nextMissionStory += Labels.getLabel(flags,resources,result,language,line);
                                    });
                                    createNode(progressionBody,"div","campaignStory").innerHTML = nextMissionStory
                                }

                                if (progression.nextMissionDirection.length == 1) {

                                    createNode(progressionBody,"p").innerHTML = Labels.getLabel(flags,resources,result,language,progression.nextMissionDirection[0]);

                                } else {

                                    let
                                        list = createNode(progressionBody,"ul");
                                    progression.nextMissionDirection.forEach(line=>{
                                        createNode(list,"li").innerHTML = Labels.getLabel(flags,resources,result,language,line);
                                    })

                                }
                            }

                        }

                    }


                    footerNode = createNode(questNode,"div","questfooter displayonly");
                    footerNode.innerHTML = "<div class='arrow left'></div>"+Labels.getLabel(flags,resources,result,language,footerLabel)+"<div class='arrow right'></div>";

                    result.printTitleSuffix = campaign ? sheetQuestHeader.innerText : titleNode.innerText;

                    // Print maps

                    MapRenderer.render(resources,result,mapNode,miniMapNode,true);
                    MapRenderer.render(resources,result,printMapNode,printMiniMapNode,false);

                    // Apply media classess

                    miniMapNode.className += " displayOnly";
                    mapNode.className += " displayOnly";

                    printMiniMapNode.className += " printOnly";
                    printMapNode.className += " printOnly";

                } else {

                    let
                        questNode = createNode(into,"div","quest"),
                        notAvailableNode = createNode(questNode,"div","notavailable");

                    if (flags.questUnavailableLabel)
                        notAvailableNode.innerHTML = Labels.getLabel(flags,resources,result,language,flags.questUnavailableLabel);

                }

            } else {

                window.onbeforeprint = () => {
                    document.title = result.printTitlePrefix+" - "+result.printTitleSuffix+(result.printTitleCoords ? " "+result.printTitleCoords : "");
                };

                window.onafterprint = () => {
                    document.title = result.printTitlePrefix;
                };

            }
                

            // Hide hidden text

            if (!flags.debugHiddenText) {
                    
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

            }

            // Create page links

            let
                pageLinks = document.getElementsByClassName("gotopage");
            for (let i=0;i<pageLinks.length;i++) {
                let
                    node = pageLinks[i],
                    page = parseInt(node.getAttribute("page"));

                if (!node.innerHTML)
                    node.innerHTML = Labels.getLabel(flags,resources,result,language,result.campaign.pages[page].name);
                
                node.onclick=function() {
                    flags.gotoPageCallback(page);
                }

            }
        }
    }

})();        