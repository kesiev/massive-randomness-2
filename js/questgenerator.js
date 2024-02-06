QuestGenerator=(function() {

    // --- Random-related functions

    let seed;

    function random(max) {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280 * max;
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

    function createRuleFromVersion(version,intensity) {
        return {
            type:version.type,
            intensity: intensity || 0,
            name:pickRandomElementValue(version.name),
            summary:version.summary ? pickRandomElementValue(version.summary) : 0,
            explanation:version.explanation ? pickRandomElementValue(version.explanation) : 0
        };
    }

    // --- Init

    function generate(resources,result,flags) {

        if (resources.quests.length) {

            let
                quest = { rules:[], challenges:[] },
                mapConfig = {},
                questModel,
                questVersion,
                questLabels,
                labels = {},
                mapModel;

            // Select a random quest and map model
            if (flags.quest)
                questModel = flags.quest;
            else if (flags.debugQuest)
                resources.quests.forEach(quest=>{
                    if (quest._debug)
                        questModel = quest;
                });
            if (!questModel)
                questModel = pickRandomElementValue(resources.quests);
            questVersion = pickRandomElementValue(questModel.versions);
            questLabels = pickRandomElementValue(questVersion.labels);
            mapModel = pickRandomElementValue(questVersion.map);

            // Prepare quest contents

            quest.by = questModel.by;
            quest.suggestedTilesCount = questModel.suggestedTilesCount;
            quest.title = pickRandomElementValue(questVersion.title);
            quest.story = pickRandomElementValue(questVersion.story);
            
            if (questVersion.objectivesHeader)
                quest.objectivesHeader = pickRandomElementValue(questVersion.objectivesHeader);

            // Prepare quest rules
            
            questVersion.rules.forEach(rule=>{
                let
                    ruleVersion = pickRandomElementValue(rule);
                quest.rules.push(createRuleFromVersion(ruleVersion))
            });

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
                                quest.challenges.push(createRuleFromVersion(rule,challenge.intensity));    
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
        
            result.quest = quest;
            result.mapConfig = mapConfig;
            result.labels = labels;

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