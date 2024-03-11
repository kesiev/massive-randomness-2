Generator=(function(){

    const
        SEED_RANGE=1000000;
        
    function rawGenerate(needs,questSeed,flags,cb,mapSeed,attempt) {

        let
            resources = ModManager.load(JSON.parse(JSON.stringify(needs))),
            result;

        if (!attempt)
            attempt = 1;
        else
            attempt++;

        if (!questSeed) {
            questSeed = Math.floor(Math.random()*SEED_RANGE);
        } else if (mapSeed)
            mapSeed = SEED_RANGE+Math.floor(((mapSeed * 9301 + 49297) % 233280) / 233280 * SEED_RANGE);

        if (!mapSeed)
            mapSeed = questSeed;

        result = {
            attempt:attempt,
            questSeed: questSeed,
            mapSeed: mapSeed
        };

        // console.log(flags && flags.quest ? flags.quest.by.EN : "", questSeed,mapSeed);

        if (resources.quests) {

            QuestGenerator.generate(resources,result,flags);
            MapGenerator.generate(resources,result);
        
            if (result && result.map && result.map.index && result.map.isValid)
                cb(resources,result);
            else {
                setTimeout(()=>{
                    rawGenerate(needs,questSeed,flags,cb,mapSeed,attempt);
                },10);
            }

        } else {
            result.noQuestsAvailable = true;
            cb(resources,result);
        }

    }

    return {
        SEED_RANGE:SEED_RANGE,
        generate:(needs,questSeed,flags,cb)=>{
            return rawGenerate(needs,questSeed,flags,cb);
        }
    }
}())
