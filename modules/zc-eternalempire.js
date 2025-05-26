ModManager.modules.push(function(){

    return [
        {

            id:"zc-eternalempire",
            needs:[ ],
            provides:[ "zc-eternalempire" ],
            label:{
                EN:"Zombicide: Eternal Empire tiles"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxZcEternalEmpire:{
                            EN:"from Zombicide: Eternal Empire",
                            IT:"da Zombicide: Eternal Empire"
                        }
                    }
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z35",
                            label:"[Z]35",
                            from:"boxZcEternalEmpire",
                            sides:[
                                // 35R is a wall tile, ATM do not fits MD2
                                {
                                    id:"Z35V",
                                    label:"[Z]35V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], hedges:[ false, false, true, false ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], hedges:[ true, false, true, false ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], hedges:[ true, false, false, false ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"Z36",
                            label:"[Z]36",
                            from:"boxZcEternalEmpire",
                            sides:[
                                {
                                    id:"Z36R",
                                    label:"[Z]36R",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, false, true, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z36V",
                                    label:"[Z]36V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], hedges:[ false, false, true, false ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], hedges:[ true, false, true, false ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], hedges:[ true, false, false, false ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"Z37",
                            label:"[Z]37",
                            from:"boxZcEternalEmpire",
                            sides:[
                                {
                                    id:"Z37R",
                                    label:"[Z]37R",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z37V",
                                    label:"[Z]37V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, hedges:[ false, false, true, false ], walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, hedges:[ true, false, true, false ], walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, true, true, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"Z38",
                            label:"[Z]38",
                            from:"boxZcEternalEmpire",
                            sides:[
                                // 38R is a wall tile, ATM do not fits MD2
                                {
                                    id:"Z38V",
                                    label:"[Z]38V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideHedges" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, hedges:[ false, true, false, false ], walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, hedges:[ false, true, false, true ], walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, hedges:[ false, false, false, true ], walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, true, true, false ]}, { type:[ "dark" ], isRoom:true, isWalled:true, walls:[ false, true, true, true ] } ],
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