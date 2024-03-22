ModManager.modules.push(function(){

    return [
        {
            id:"zc-friendfoes",
            needs:[ ],
            provides:[ "zc-friendfoes" ],
            label:{
                EN:"Zombicide: Friends and Foes tiles"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxZcFriendFoes:{
                            EN:"from Zombicide: Friends and Foes",
                            IT:"da Zombicide: Friends and Foes"
                        }
                    }
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z21",
                            label:"[Z]21",
                            from:"boxZcFriendFoes",
                            sides:[
                                {
                                    id:"Z21R",
                                    label:"[Z]21R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "water" ], walls:[ false, false, true, false ] }, { type:[ "water" ], walls:[ false, false, false, false ]}, { type:[ "water" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "water" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "water" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z21V",
                                    label:"[Z]21V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, true, true ] }, { type:[ "light" ], isRoom:false, walls:[  false, false, true, false ], hedges:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, true, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, true, false, false ], hedges:[ true, false, true, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false,  walls:[  false, false, false, true ], hedges:[ false, true, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ], hedges:[ false, true, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z22",
                            label:"[Z]22",
                            from:"boxZcFriendFoes",
                            sides:[
                                {
                                    id:"Z22R",
                                    label:"[Z]22R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "water" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "water" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"Z22V",
                                    label:"[Z]22V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, true, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, false, true ]}, { type:[ "light" ], isRoom:false,  walls:[ false, false, true, false ], hedges:[ false, false, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ false, false, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ false, false, false, false ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z23",
                            label:"[Z]23",
                            from:"boxZcFriendFoes",
                            sides:[
                                {
                                    id:"Z23R",
                                    label:"[Z]23R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "water" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                },{
                                    id:"Z23V",
                                    label:"[Z]23V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges", "zombicideWater" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, true, false ] }, { type:[ "light" ], isRoom:false, walls:[  false, false, false, false ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, false, true, false ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, true, false ], hedges:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false,  walls:[  false, false, false, false ], hedges:[ true, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ true, false, true, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ], hedges:[ true, false, true, false ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z24",
                            label:"[Z]24",
                            from:"boxZcFriendFoes",
                            sides:[
                                {
                                    id:"Z24R",
                                    label:"[Z]24R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount4", "roomsCount1+", "roomsCount2+", "roomsCount3+", "roomsCount4+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "water" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z24V",
                                    label:"[Z]24V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ true, false, false, true ] }, { type:[ "dark" ], isRoom:true, walls:[  true, true, false, true ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ], hedges:[ true, true, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, true, false, false ], hedges:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ], hedges:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false,  walls:[  false, false, false, true ], hedges:[ false, true, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ], hedges:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z25",
                            label:"[Z]25",
                            from:"boxZcFriendFoes",
                            sides:[
                                {
                                    id:"Z25R",
                                    label:"[Z]25R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ]}, { type:[ "light" ], isBlocking:true, isRoom:false, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "water" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ],
                                            // The corner street is never used, since it may not connect with the main path. Marked as not-room blocking.
                                        ]
                                    ]
                                },{
                                    id:"Z25V",
                                    label:"[Z]25V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "water" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[  true, true, false, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, false, true ] } ],
                                            [ { type:[ "water" ], isRoom:false,  walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ]}, { type:[ "water" ], isRoom:false,  walls:[  false, false, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ]
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