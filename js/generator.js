Generator=(function(){

    const
        GIVEUP_ATTEMPT = 50,
        SEED_RANGE = 1000000;

    function getNextSeed(seed) {
        return SEED_RANGE+Math.floor(((seed * 9301 + 49297) % 233280) / 233280 * SEED_RANGE);
    }
        
    function rawGenerate(needs,seed,flags,cb,mapSeed,questSeed,attempt) {

        let
            resources = ModManager.load(JSON.parse(JSON.stringify(needs))),
            result;

        if (!attempt)
            attempt = 1;
        else
            attempt++;

        if (!seed) {
            seed = Math.floor(Math.random()*SEED_RANGE);
        } else if (mapSeed)
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
            attempt:attempt,
            seed: seed,
            questSeed: questSeed,
            mapSeed: mapSeed
        };

        // console.log(flags && flags.quest ? flags.quest.by.EN : "", seed,"(",questSeed,")",mapSeed);

        if (resources.quests) {

            QuestGenerator.generate(resources,result,flags);
            MapGenerator.generate(resources,result);
        
            if (result && result.map && result.map.index && result.map.isValid)
                cb(resources,result);
            else {
                setTimeout(()=>{
                    rawGenerate(needs,seed,flags,cb,mapSeed,questSeed,attempt);
                },10);
            }

        } else {
            result.noQuestsAvailable = true;
            cb(resources,result);
        }

    }

    return {
        SEED_RANGE:SEED_RANGE,
        generate:(needs,seed,flags,cb)=>{
            return rawGenerate(needs,seed,flags,cb);
        }
    }
}())
