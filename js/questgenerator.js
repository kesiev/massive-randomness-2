QuestGenerator=(function() {

    // --- Random-related functions

    let seed;

    function random(max) {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280 * max;
    }

    function shuffle(list) {
        for (let j=0;j<3;j++)
            for (let i=0;i<list.length;i++) {
                let
                    dest = Math.floor(random(list.length)),
                    tmp = list[i];
                list[i] = list[dest];
                list[dest] = tmp;
            }
    }

    function pickRandomElementId(list) {
        return Math.floor(random(list.length));
    }

    function pickRandomElementValue(list) {
        return list[pickRandomElementId(list)];
    }

    function mergeMapConfig(resources,attribute,value,mapConfig) {
        resources.mapConfigs.forEach(config=>{
            if ((config.attribute == attribute) && (config.value == value)) {
                for (let k in config.config)
                    mapConfig[k] = pickRandomElementValue(config.config[k])
            }
        })
    }

    function getRelevantKey(set,list,fallback) {
        if (list) {
            for (let i=0;i<list.length;i++) {
                if (set[list[i]])
                    return set[list[i]];
            }
        }
        return set[fallback];
    }

    function createRuleFromVersion(campaign,version,intensity) {
        let
            summary = getRelevantKey(version,campaign.summaryKeys,"summary"),
            explanation = getRelevantKey(version,campaign.explanationKeys,"explanation");

        return {
            type:version.type,
            intensity: intensity || 0,
            name:pickRandomElementValue(version.name),
            summary:summary ? pickRandomElementValue(summary) : 0,
            explanation:explanation ? pickRandomElementValue(explanation) : 0
        };
    }

    // --- Init

    function generate(resources,result,flags) {

        if (resources.quests && resources.quests.length) {

            let
                interface={
                    random:(max)=>{
                        return random(max)
                    },
                    shuffle:(list)=>{
                        return shuffle(list)
                    },
                    pickRandomElementValue:(list)=>{
                        return pickRandomElementValue(list)
                    }
                },
                quest = { languages:[], rules:[], challenges:[] },
                campaign = result.campaign || false,
                campaignPageGenerator = result.campaign && result.campaign.currentPage.generator ? result.campaign.currentPage.generator : false,
                mapConfig = {},
                questModel,
                questVersion,
                questLabels,
                labels = {},
                mapModel;

            // Select a random quest and map model

            if (flags.quest)
                questModel = flags.quest;
            else if (campaignPageGenerator && campaignPageGenerator.questModel)
                questModel = campaignPageGenerator.questModel;
            else if (flags.debugQuest)
                resources.quests.forEach(quest=>{
                    if (quest._debug)
                        questModel = quest;
                });
            
            if (campaignPageGenerator && campaignPageGenerator.questVersion)
                questVersion = campaignPageGenerator.questVersion;

            if (!questModel)
                questModel = pickRandomElementValue(resources.quests);
            if (!questVersion)
                questVersion = pickRandomElementValue(questModel.versions);

            questLabels = pickRandomElementValue(questVersion.labels);
            mapModel = pickRandomElementValue(questVersion.map);

            // Prepare quest contents

            if (questModel.versions.indexOf(questVersion) == -1) debugger;

            quest.by = questModel.by;
            quest.suggestedTilesCount = questModel.suggestedTilesCount;
            quest.code = questModel.code;
            quest.specialClass = questVersion.specialClass;
            quest.title = pickRandomElementValue(questVersion.title);
            quest.story = pickRandomElementValue(questVersion.story);
            quest.boss = questVersion.boss;
            
            if (questVersion.objectivesHeader)
                quest.objectivesHeader = pickRandomElementValue(questVersion.objectivesHeader);

            // Prepare quest rules
            
            questVersion.rules.forEach(rule=>{
                let
                    ruleVersion = pickRandomElementValue(rule);
                quest.rules.push(createRuleFromVersion(campaign,ruleVersion))
            });

            // Add special rules

            if (campaignPageGenerator && campaignPageGenerator.specialRules)
                campaignPageGenerator.specialRules.forEach(rule=>{
                    resources.specialRules[rule].forEach(rule=>{
                        quest.rules.push(rule);
                    })
                });
            
            if (questVersion.specialRules)
                questVersion.specialRules.forEach(rule=>{
                    resources.specialRules[rule].forEach(rule=>{
                        quest.rules.push(rule);
                    })
                });

            // Generate languages list

            for (let k in quest.by)
                quest.languages.push(k);

            // Add dungeon mods
            
            if (questVersion.challenges && resources.challenges) {

                let
                    challengesByIntensity = [];

                resources.challenges.forEach(challenge=>{
                    if (!challengesByIntensity[challenge.intensity])
                        challengesByIntensity[challenge.intensity]=[];
                    challengesByIntensity[challenge.intensity].push(challenge);
                });

                questVersion.challenges.forEach(requestedChallenge=>{
                    
                    let
                        challengesSet = challengesByIntensity[requestedChallenge.intensity];

                    if (challengesSet) {
                        let
                            fittingChallenges = challengesSet.filter(challenge=>challenge.tags.indexOf(requestedChallenge.tag) != -1);

                        if (fittingChallenges.length) {

                            let
                                position = pickRandomElementId(fittingChallenges),
                                challenge = fittingChallenges[position],
                                setPosition = challengesSet.indexOf(challenge);

                            challenge.rules.forEach(rule=>{
                                quest.challenges.push(createRuleFromVersion(campaign,rule,challenge.intensity));
                            });
                            challengesSet.splice(setPosition,1);
                        }
                    }
                });

            }

            // Prepare quest labels

            questLabels.forEach(labelsSet=>{
                for (let k in labelsSet)
                    labels["label."+k]=pickRandomElementValue(labelsSet[k]);
            });

            if (resources.symbols)
                for (let k in resources.symbols)
                    labels["symbol."+k]=resources.symbols[k];
            
            // Prepare map structure

            for (let k in mapModel)
                mergeMapConfig(resources,k,pickRandomElementValue(mapModel[k]),mapConfig);
        
            // Apply the game mode (if any)
            
            if (resources.gameMode) {

                if (resources.gameMode.specialRules)
                    resources.gameMode.specialRules.forEach(specialRule=>{
                        resources.specialRules[specialRule].forEach(rule=>{
                            quest.rules.push(rule);
                        })
                    });
                
                if (resources.gameMode.mapConfig)
                    for (let k in resources.gameMode.mapConfig)
                        mapConfig[k] = resources.gameMode.mapConfig[k];
                    
            }

            result.quest = quest;
            result.mapConfig = mapConfig;
            result.labels = labels;

            if (quest.code && quest.code.onQuestFinalize)
                quest.code.onQuestFinalize(interface,resources,result,questVersion,questLabels);

        }

        return result;
    
    }

    return {
        generate:(resources,result,flags)=>{
            if (!flags) flags={};
            seed = result.questSeed;
            generate(resources,result,flags);
            return result;
        }
    };

})();