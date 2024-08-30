Generator=(function(){

    const
        GIVEUP_ATTEMPT = 50,
        ATTEMPT_LIMIT = GIVEUP_ATTEMPT * 10,
        SEED_RANGE = 1000000;

    function getNextSeed(seed) {
        return SEED_RANGE+Math.floor(((seed * 9301 + 49297) % 233280) / 233280 * SEED_RANGE);
    }
        
    function rawGenerate(needs,seed,flags,campaign,cb,mapSeed,questSeed,attempt) {

        let
            createMap = true,
            mapNeeds,
            resources,
            result;

        if (campaign || (needs.needs.indexOf("generator-campaign") !== -1)) {

            let
                page;

            if (campaign) {

                page = campaign.page;
                resources = campaign.resources;

                if (!campaign.pages[page])
                    page = 0;

            } else {

                page = 0;

                if (!seed)
                    seed = Math.floor(Math.random()*SEED_RANGE);

                resources = ModManager.load(JSON.parse(JSON.stringify(needs)));
                campaign = CampaignGenerator.generate(resources,{ campaignSeed:seed },flags,needs);
                campaign.resources = resources;

            }

            campaign.page = page;
            campaign.labels["campaign.page"] = page+1;
            campaign.currentPage = campaign.pages[campaign.page];
            
            if (campaign.currentPage.generator) {
                mapNeeds = campaign.currentPage.generator.needs;
                if (!mapSeed)
                    mapSeed = campaign.currentPage.generator.seed;
                if (!questSeed)
                    questSeed = campaign.currentPage.generator.seed;

            } else
                createMap = false;
        
        } else
            mapNeeds = needs;

        if (!attempt)
            attempt = 1;
        else
            attempt++;

        if (!seed)
            seed = Math.floor(Math.random()*SEED_RANGE);
        else if (mapSeed)
            mapSeed = getNextSeed(mapSeed);

        if (!questSeed)
            questSeed = seed;

        if (attempt % GIVEUP_ATTEMPT == 0) {
            questSeed++;
            mapSeed = 0;
        }

        if (!mapSeed)
            mapSeed = questSeed;

        result = {
            hash:flags.hash,
            campaign:campaign,
            attempt:attempt,
            seed: seed,
            questSeed: questSeed,
            mapSeed: mapSeed
        };

        if (attempt >= ATTEMPT_LIMIT) {

            result.noQuestsAvailable = true;
            cb(resources,result);

        } else {

            if (createMap) {

                resources = ModManager.load(JSON.parse(JSON.stringify(mapNeeds)));

                // console.log(flags && flags.quest ? flags.quest.by.EN : "", seed,"(",questSeed,")",mapSeed);

                if (resources.quests) {

                    QuestGenerator.generate(resources,result,flags);
                    MapGenerator.generate(resources,result);
                
                    if (result && result.map && result.map.index && result.map.isValid)
                        cb(resources,result);
                    else {
                        setTimeout(()=>{
                            rawGenerate(needs,seed,flags,campaign,cb,mapSeed,questSeed,attempt);
                        },10);
                    }

                } else {
                    result.noQuestsAvailable = true;
                    cb(resources,result);
                }

            } else {

                result.noMapCreated = true;
                cb(resources,result);
                
            }

        }

    }

    return {
        SEED_RANGE:SEED_RANGE,
        generate:(needs,seed,flags,campaign,cb)=>{
            return rawGenerate(needs,seed,flags,campaign,cb);
        }
    }
}())
