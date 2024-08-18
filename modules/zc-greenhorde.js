ModManager.modules.push(function(){

    return [
        {
            id:"zc-greenhorde",
            needs:[ ],
            provides:[ "zc-greenhorde" ],
            label:{
                EN:"Zombicide: Green Horde tiles"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxZcGreenHorde:{
                            EN:"from Zombicide: Green Horde",
                            IT:"da Zombicide: Green Horde"
                        }
                    }
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z20",
                            label:"[Z]20",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z20R",
                                    label:"[Z]20R",
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
                                    id:"Z20V",
                                    label:"[Z]20V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges", "zombicideWater" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, true, false ] }, { type:[ "light" ], isRoom:false, walls:[  false, false, false, false ], hedges:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, true ] } ],
                                            [ { type:[ "water" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, false, true, false ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, true, false ], hedges:[ false, false, false, false ]}, { type:[ "water" ], isRoom:false,  walls:[  false, false, false, false ], hedges:[ true, true, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ true, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ], hedges:[ true, false, false, true ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z19",
                            label:"[Z]19",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z19R",
                                    label:"[Z]19R",
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
                                },{
                                    id:"Z19V",
                                    label:"[Z]19V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ false, true, true, false ] }, { type:[ "light" ], isRoom:false, walls:[  false, false, false, true ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ true, false, false, false ], hedges:[ true, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false,  walls:[  false, false, false, false ], hedges:[ true, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, true, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, true ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z18",
                            label:"[Z]18",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z18R",
                                    label:"[Z]18R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount4", "roomsCount1+", "roomsCount2+", "roomsCount3+", "roomsCount4+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "water" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "water" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z18V",
                                    label:"[Z]18V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, true, false ] }, { type:[ "light" ], isRoom:false, walls:[  false, false, false, false ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ], hedges:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false,  walls:[  false, false, false, false ], hedges:[ true, true, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ true, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ], hedges:[ true, false, false, true ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z17",
                            label:"[Z]17",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z17R",
                                    label:"[Z]17R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount4", "roomsCount1+", "roomsCount2+", "roomsCount3+", "roomsCount4+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "water" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "water" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z17V",
                                    label:"[Z]17V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, true, false ] }, { type:[ "light" ], isRoom:false, walls:[  false, false, false, false ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, false ]}, { type:[ "light" ], isRoom:false,  walls:[  false, false, true, false ], hedges:[ true, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ true, true, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ false, false, false, true ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z16",
                            label:"[Z]16",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z16R",
                                    label:"[Z]16R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize1", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], walls:[ false, true, false, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z16V",
                                    label:"[Z]16V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges", "zombicideWater" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[  false, false, true, false ], hedges:[ true, true, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, false, true ] } ],
                                            [ { type:[ "water" ], isRoom:false,  walls:[ false, true, false, false ], hedges:[ true, false, true, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ true, false, true, false ]}, { type:[ "light" ], isRoom:false,  walls:[  false, false, false, true ], hedges:[ false, true, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ], hedges:[ true, true, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, true ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z15",
                            label:"[Z]15",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z15R",
                                    label:"[Z]15R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "water" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"Z15V",
                                    label:"[Z]15V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, false, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, true, false ]}, { type:[ "light" ], isRoom:false,  walls:[ true, false, false, false ], hedges:[ false, true, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, true, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, true, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, true ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z14",
                            label:"[Z]14",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z14R",
                                    label:"[Z]14R",
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
                                    id:"Z14V",
                                    label:"[Z]14V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges", "zombicideWater" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ], hedges:[ false, true, false, false ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ true, true, true, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, false, true ], hedges:[ false, true, false, false ]}, { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, false, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, true, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, false, true ] } ]
                                        ]
                                    ]
                                } 
                            ]                                
                        },{
                            id:"Z13",
                            label:"[Z]13",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z13R",
                                    label:"[Z]13R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "water" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                },{
                                    id:"Z13V",
                                    label:"[Z]13V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, true, false ]}, { type:[ "light" ], isRoom:false,  walls:[ false, false, true, false ], hedges:[ true, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ true, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ], hedges:[ false, false, false, true ] } ]
                                        ]
                                    ]
                                }
                            ]                                
                        },{
                            id:"Z12",
                            label:"[Z]12",
                            from:"boxZcGreenHorde",
                            sides:[
                                {
                                    id:"Z12R",
                                    label:"[Z]12R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideWater" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "water" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                },{
                                    id:"Z12V",
                                    label:"[Z]12V",
                                    skins:[ "outdoor", "village" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ false, false, true, false ]  }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ], hedges:[ true, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] , hedges:[ true, false, true, false ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ], hedges:[ true, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ], hedges:[ true, false, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
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