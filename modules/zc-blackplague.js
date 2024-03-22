ModManager.modules.push(function(){

    return [
        {

            id:"zc-blackplague",
            needs:[ ],
            provides:[ "zc-blackplague" ],
            label:{
                EN:"Zombicide: Black Plague tiles"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxZcBlackPlague:{
                            EN:"from Zombicide: Black Plague",
                            IT:"da Zombicide: Black Plague"
                        }
                    }
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z9",
                            label:"[Z]9",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z9R",
                                    label:"[Z]9R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize5", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "roomSize1", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, true, true ] }, { type:[ "light" ], isRoom:false,  walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z9V",
                                    label:"[Z]9V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], walls:[ false, false, true, false ] }, { type:[ "light" ], walls:[ false, false, false, false ]}, { type:[ "light" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                }
                            ]                                
                        },{
                            id:"Z8",
                            label:"[Z]8",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z8R",
                                    label:"[Z]8R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize1", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount3", "roomsCount1+", "roomsCount2+", "roomsCount3+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false,  walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z8V",
                                    label:"[Z]8V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize8", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "roomSize6+", "roomSize7+", "roomSize8+", "openSides1", "openSides1+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, false, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, false, false, true ] }, { type:[ "dark" ], isRoom:true, walls:[ false, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, false, false] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ true, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                }
                            ]                                
                        },{
                            id:"Z7",
                            label:"[Z]7",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z7R",
                                    label:"[Z]7R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize5", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "roomSize1", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, true, true ] }, { type:[ "light" ], isRoom:false,  walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z7V",
                                    label:"[Z]7V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount4", "roomsCount1+", "roomsCount2+", "roomsCount3+", "roomsCount4+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                        ]
                                    ]
                                }
                            ]                                
                        },{
                            id:"Z6",
                            label:"[Z]6",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z6R",
                                    label:"[Z]6R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false,  walls:[ false, false, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z6V",
                                    label:"[Z]6V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                }                                
                            ]
                        },{
                            id:"Z5",
                            label:"[Z]5",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z5R",
                                    label:"[Z]5R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize1", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount3", "roomsCount1+", "roomsCount2+", "roomsCount3+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false,  walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z5V",
                                    label:"[Z]5V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize7", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "roomSize6+", "roomSize7+", "openSides1", "openSides1+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, true, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ] }, { type:[ "light" ], isBlocking:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ false, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            // One of the streets is never used, since it may not connect with the path. Marked as blocking.
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"Z4",
                            label:"[Z]4",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z4R",
                                    label:"[Z]4R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], walls:[ false, true, false, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z4V",
                                    label:"[Z]4V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount4", "roomsCount1+", "roomsCount2+", "roomsCount3+", "roomsCount4+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"Z3",
                            label:"[Z]3",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z3V",
                                    label:"[Z]3V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                },{
                                    id:"Z3R",
                                    label:"[Z]3R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], walls:[ false, true, false, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"Z2",
                            label:"[Z]2",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z2R",
                                    label:"[Z]2R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"Z2V",
                                    label:"[Z]2V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize7", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "roomSize6+", "roomSize7+", "openSides1", "openSides1+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, false, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ true, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"Z1",
                            label:"[Z]1",
                            from:"boxZcBlackPlague",
                            sides:[
                                {
                                    id:"Z1R",
                                    label:"[Z]1R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"Z1V",
                                    label:"[Z]1V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize6", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "roomSize6+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, false, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ false, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, false] } ],
                                            [ { type:[ "light" ], walls:[ true, false, false, false ] }, { type:[ "light" ], walls:[ true, false, false, false ]}, { type:[ "light" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});