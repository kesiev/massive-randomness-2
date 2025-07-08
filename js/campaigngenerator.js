CampaignGenerator=(function() {

    const
        CAMPAIGNNAME_LENGTH = 2,
        SEED_RANGE = 1000000,
        DEFAULT_FLAGS = {
            defaults:"yes"
        };

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

    function pickRandomElement(list) {
        let
            pos = pickRandomElementId(list),
            element = list[pos];
        list.splice(pos,1);
        return element;
    }

    function mergeFlags(merge,into) {
        for (let k in merge)
            into[k] = merge[k];
    }

    function isNeedProtected(resources,need) {
        return resources.campaignProtectedNeeds.indexOf(need) != -1;
    }

    function newBag(list) {
        return {
            tags:[],
            elements:list.map(element=>{ return { count:0, element:element } })
        };
    }

    function pickFromBag(bag,tags) {
        let
            item,
            minCount,
            available = bag.elements.filter(element=>{
                let
                    ok = false;
                tags.forEach(tag=>{
                    if (element.element.tags.indexOf(tag) != -1)
                        ok = true;
                })
                if (ok && ((minCount === undefined) || (element.count<minCount)))
                    minCount = element.count;
                return ok;
            });

        if (available.length) {
            available = available.filter(element=>element.count === minCount);
            item = pickRandomElementValue(available);
            item.count++;
            if (item.count >= item.element.maxAmount)
                bag.elements.splice(bag.elements.indexOf(item),1);
            return item.element;
        }

    }

    function pickRewards(rewardsBag,tagset) {
        
        let
            rewardModels = [];

        tagset.forEach(tags=>{
            let
                rewardModel = pickFromBag(rewardsBag,tags);
            if (rewardModel)
                rewardModels.push(rewardModel);
        });

        return rewardModels;

    }

    // --- Init

    function generate(resources,result,flags,needs) {

        if (!flags) flags = {};

        let
            campaignFlags = resources.campaignGeneratorFlags || {},
            campaign = flags.campaign || pickRandomElementValue(resources.campaignModels),
            actModel = pickRandomElementValue(resources.campaignActModels),
            mapModel = pickRandomElementValue(resources.campaignMapModels),
            rewardModel = pickRandomElementValue(resources.campaignRewardModels),
            crawlingModel = pickRandomElementValue(resources.campaignCrawlingModels),
            bossFightModel = pickRandomElementValue(resources.campaignBossFightModels),
            sideQuestsBag = newBag(resources.campaignSideQuests),
            rewardsBag = newBag(resources.campaignRewards),
            campaignName = "",
            words = [],
            flagsMap = [],
            flagsBoss = [],
            questsDone = [];

        result.pages = [];
        result.labels = {};
        result.flags = campaignFlags;
        result.achievements = campaign.achievements;
        result.achievementsCondition = campaign.achievementsCondition;
        result.questPhase = campaign.questPhase;
        result.treasureBag = campaign.treasureBag;
        result.campaignMode = campaign.campaignMode;
        result.explanationKeys = campaign.explanationKeys;
        result.summaryKeys = campaign.summaryKeys;
        result.story = campaign.story.map(set=>pickRandomElement(set));
        result.introduction = campaign.introduction.map(set=>pickRandomElement(set));

        [
            actModel,
            crawlingModel,
            mapModel,
            rewardModel,
            bossFightModel
        ].forEach(modelSet=>{
            if (modelSet) {
                if (modelSet.words)
                    words.push(modelSet.words);
                modelSet.models.forEach(model=>{
                    let
                        flags = pickRandomElementValue(model.flags);
                    model.at.forEach(at=>{
                        if (!flagsMap[at.act]) flagsMap[at.act]=[];
                        if (!flagsMap[at.act][at.map]) flagsMap[at.act][at.map]={};
                        for (let f in flags)
                            flagsMap[at.act][at.map][f]=flags[f];
                    })
                });
            }
        });

        for (let i=0;i<CAMPAIGNNAME_LENGTH;i++)
            campaignName += pickRandomElementValue(pickRandomElement(words)[i]);

        result.name = campaignName[0].toUpperCase()+campaignName.substr(1,campaignName.length);
            
        campaign.pages.forEach((page,id)=>{
            let
                pageData = {
                    id:id,
                    name:page.name,
                    actMap:page.actMap ? pickRandomElementValue(page.actMap) : 0,
                    labels:{
                        "campaign.page":id+1,
                        "campaign.pageName":page.name
                    },
                },
                bossAct = page.bossAsAct ? pickRandomElementValue(page.bossAsAct) : pageData.actMap;

            switch (page.type) {
                case "map":{
                    let
                        questModel,
                        questVersion,
                        questCampaign,
                        questFlags = {},
                        mapNeeds = JSON.parse(JSON.stringify(needs)),
                        allQuests = [],
                        availableQuests = [],
                        mapResources;

                    if (!needs.excludes)
                        needs.excludes = [];

                    pageData.generator = {
                        seed:Math.floor(random(SEED_RANGE)),
                        needs:mapNeeds,
                        progression:{
                            story:page.progression.story ? page.progression.story.map(set=>pickRandomElement(set)) : 0,
                            rewards:page.progression.rewards,
                            nextMissionStory:page.progression.nextMissionStory ? page.progression.nextMissionStory.map(set=>pickRandomElement(set)) : 0,
                            nextMissionDirection:page.progression.nextMissionDirection,
                            ending:page.progression.ending ? page.progression.ending.map(set=>pickRandomElement(set)) : 0
                        }
                    };

                    resources.campaignFlags.forEach(flag=>{
                        if (flag.default)
                            questFlags[flag.id] = flag.default;
                    })

                    if (flagsMap[pageData.actMap.act][pageData.actMap.map])
                        mergeFlags(flagsMap[pageData.actMap.act][pageData.actMap.map],questFlags);
                    mergeFlags(DEFAULT_FLAGS,questFlags);

                    resources.campaignFlags.forEach(flag=>{
                        if (questFlags[flag.id]) {
                            let
                                value = flag.values[questFlags[flag.id]];
                            if (value) {

                                if (value.onlyNeeds) {
                                    let
                                        needs = [],
                                        excludes = [];

                                    mapNeeds.needs.forEach(tag=>{
                                        if (isNeedProtected(resources,tag))
                                            needs.push(tag);
                                        else {
                                            let
                                                remove = value.onlyNeeds.indexOf(tag) == -1;
                                            if (remove)
                                                excludes.push(tag);
                                        }
                                    });
                                    mapNeeds.excludes.forEach(tag=>{
                                        if (isNeedProtected(resources,tag))
                                            excludes.push(tag);
                                        else {
                                            let
                                                keep = (value.onlyNeeds.indexOf(tag) == -1) && (excludes.indexOf(tag) == -1);
                                            if (keep)
                                                excludes.push(tag);
                                        }
                                    });
                                    value.onlyNeeds.forEach(tag=>{
                                        if ((needs.indexOf(tag) == -1) && (excludes.indexOf(tag) == -1))
                                            needs.push(tag);
                                    })
                                    mapNeeds.needs = needs;
                                    mapNeeds.excludes = excludes;
                                }

                                if (value.notNeeds)
                                    value.notNeeds.forEach(tag=>{
                                        if (!isNeedProtected(resources,tag)) {
                                            let
                                                needsPosition = mapNeeds.needs.indexOf(tag),
                                                excludesPosition = mapNeeds.excludes.indexOf(tag);
                                            if (needsPosition != -1)
                                                mapNeeds.needs.splice(needsPosition,1);
                                            if (excludesPosition != -1)
                                                mapNeeds.excludes.splice(excludesPosition,1);
                                        }
                                    });

                                if (value.notExclude)
                                    value.notExclude.forEach(tag=>{
                                        if (!isNeedProtected(resources,tag)) {
                                            let
                                                exclude = mapNeeds.excludes.indexOf(tag);
                                            if (exclude != -1)
                                                mapNeeds.excludes.splice(exclude,1);
                                        }
                                    });

                                if (value.needs)
                                    value.needs.forEach(tag=>{
                                        if (!isNeedProtected(resources,tag)) {
                                            let
                                                exclude = mapNeeds.excludes.indexOf(tag);
                                            if (exclude != -1)
                                                mapNeeds.excludes.splice(exclude,1);
                                            if (mapNeeds.needs.indexOf(tag) == -1)
                                                mapNeeds.needs.push(tag);
                                        }
                                    });

                            }
                        }
                    });

                    mapResources = ModManager.load(JSON.parse(JSON.stringify(mapNeeds)));
                    if (mapResources.quests && mapResources.quests.length) {
                            
                        mapResources.quests.forEach(quest=>{
                            if (
                                (flags.campaignDebugQuest && quest._debug) ||
                                (!flags.campaignDebugQuest && 
                                    (quest.forCampaign && (quest.forCampaign.indexOf(campaign.type) != -1)) &&
                                    (!quest.forActs || (quest.forActs.indexOf(pageData.actMap.act) != -1)) &&
                                    (!quest.forMaps || (quest.forMaps.indexOf(pageData.actMap.map) != -1))
                                )
                            ) {
                                allQuests.push(quest);
                                if (flags.campaignDebugQuest || ((questsDone.indexOf(quest.by.EN) == -1)))
                                    availableQuests.push(quest);
                            }
                        });
                        if (!availableQuests.length) availableQuests = allQuests.quests;

                        questModel = pickRandomElementValue(availableQuests);
                        questVersion = pickRandomElementValue(questModel.versions);

                        if (questVersion.campaign)
                            questVersion.campaign.forEach(campaignModel=>{
                                if (campaignModel.forCampaign.indexOf(campaign.type) != -1)
                                    questCampaign = campaignModel;
                            });

                        if (questsDone.indexOf(questModel.by.EN) == -1)
                            questsDone.push(questModel.by.EN);

                        if (questCampaign) {

                            // Add side quest

                            if (questCampaign.sideQuests) {

                                let
                                    sideQuest = pickRandomElementValue(questCampaign.sideQuests),
                                    sideQuestTags = pickRandomElementValue(sideQuest.tags),
                                    sideQuestModel = pickFromBag(sideQuestsBag,sideQuestTags),
                                    sideQuestReward = sideQuest.rewardTags || sideQuestModel.rewardTags || questFlags.sideQuestRewardTags;

                                if (sideQuestModel && sideQuestReward) {

                                    let
                                        rewardModels = pickRewards(rewardsBag,sideQuestReward);

                                    if (rewardModels.length) {

                                        let
                                            ifCodeName = sideQuest.if || sideQuestModel.if,
                                            mods = [];
                                        
                                        if (sideQuestModel.mods)
                                            sideQuestModel.mods.forEach(mod=>{
                                                mods.push(mod);
                                            })

                                        if (sideQuest.mods)
                                            sideQuest.mods.forEach(mod=>{
                                                if (mods.indexOf(mod) == -1)
                                                    mods.push(mod);
                                            });
                                            
                                        pageData.generator.sideQuest = {
                                            if:ifCodeName ? questModel.code && questModel.code[ifCodeName] ? questModel.code[ifCodeName] : resources.campaignCode[0].code[ifCodeName] : 0,
                                            mods:mods,
                                            name:pickRandomElementValue(sideQuestModel.name),
                                            story:pickRandomElementValue(sideQuestModel.story),
                                            condition:pickRandomElementValue(sideQuestModel.condition),
                                            sideQuestReward:rewardModels
                                        };

                                    }

                                }

                            }

                            if (questFlags.challengeIntensity) {

                                let
                                    rewardModels;

                                if (questFlags.challengeRewardTags)
                                    rewardModels = pickRewards(rewardsBag,questFlags.challengeRewardTags);

                                pageData.generator.challenge = {
                                    intensity:questFlags.challengeIntensity,
                                    asRule:questFlags.challengeAsRule,
                                    challengeReward:rewardModels
                                };
                                
                            }

                            // Add special rules

                            pageData.generator.specialRules = page.specialRules;

                            // Add campaign-specific rewards

                            if (questFlags.questRewardTags) {
                                
                                let
                                    rewardModels = pickRewards(rewardsBag,questFlags.questRewardTags);

                                if (rewardModels.length) {
                                    if (!pageData.generator.progression.rewards) pageData.generator.progression.rewards = [];
                                    rewardModels.forEach(model=>{
                                        pageData.generator.progression.rewards.unshift(model.description);
                                    })
                                    
                                }

                            }

                            // Add boss fight specific rewards if any

                            let
                                addBoss = false,
                                selectedReward,
                                selectedBoss;

                            if (questFlags.bossFight == "yes") {

                                let
                                    bosses = [];

                                resources.bossList.forEach(boss=>{
                                    if (!selectedBoss && boss.campaign) {
                                        let
                                            add = true;

                                        flagsBoss.forEach(flag=>{
                                            if (boss.tags.indexOf(flag) != -1)
                                                add = false;
                                        })

                                        if (add) {

                                            boss.campaign.forEach(version=>{
                                                let
                                                    add = false;
                                                version.at.forEach(at=>{
                                                    if ((at.act == bossAct.act) && (at.map == bossAct.map))
                                                        add = true;
                                                });
                                                if (add)
                                                    bosses.push({ mods:version.mods, data:boss });
                                            });
                                        
                                        }
                                    }

                                })

                                if (bosses.length) {
                                    selectedBoss = pickRandomElementValue(bosses);
                                    addBoss = true;
                                }

                            }

                            if (addBoss && questFlags.bossFightRewardTags) {

                                selectedReward = pickRewards(rewardsBag,questFlags.bossFightRewardTags);
                                addBoss = !!selectedReward.length;

                            }

                            if (addBoss) {

                                // Add boss

                                pageData.generator.boss = selectedBoss;
                                pageData.generator.bossPreparation = "";

                                selectedBoss.data.tags.forEach(tag =>{
                                    flagsBoss.push(tag);
                                })

                                // Add reward

                                if (selectedReward) {
                                    if (!pageData.generator.progression.rewards) pageData.generator.progression.rewards = [];
                                    selectedReward.forEach(model=>{
                                        pageData.generator.progression.rewards.unshift(model.description);
                                    });
                                }

                            }

                            // Add quest-specific rewards

                            if (questCampaign.rewards) {
                                if (!pageData.generator.progression.rewards) pageData.generator.progression.rewards = [];
                                for (let i=questCampaign.rewards.length-1;i>=0;i--)
                                    pageData.generator.progression.rewards.unshift(questCampaign.rewards[i]);
                            }

                        }

                        pageData.generator.questModel = questModel;
                        pageData.generator.questVersion = questVersion;

                    }

                    break;
                }
                default:{
                    for (let k in page)
                        pageData[k] = page[k];
                }
            }

            result.pages.push(pageData);

        })

        result.labels["campaign.pages"] = campaign.pages.length;
        result.labels["campaign.name"] = result.name;
        for (let k in resources.campaignLabels)
            result.labels["label."+k]=resources.campaignLabels[k];

        return result;

    }

    return {
        generate:(resources,result,flags,needs)=>{
            if (!flags) flags={};
            seed = result.campaignSeed;
            generate(resources,result,flags,needs);
            return result;
        }
    };

})();