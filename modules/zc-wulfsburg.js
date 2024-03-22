ModManager.modules.push(function(){

    return [
        {
            id:"zc-wulfsburg",
            needs:[ ],
            provides:[ "zc-wulfsburg" ],
            label:{
                EN:"Zombicide: Wulfsburg tiles"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxZcWulfsburg:{
                            EN:"from Zombicide: Wulfsburg",
                            IT:"da Zombicide: Wulfsburg"
                        }
                    }
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z11",
                            label:"[Z]11",
                            from:"boxZcWulfsburg",
                            sides:[
                                {
                                    id:"Z11R",
                                    label:"[Z]11R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideSolidWalls" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides2", "openSides1+", "openSides2+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ false, false, true, false ], walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, isWalled:true, solidWalls:[ true, false, true, false ], walls:[ true, false, true, false ]}, { type:[ "light" ], isWalled:true, solidWalls:[ true, true, false, false ], walls:[ true, true, false, false ] } ],
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ true, false, false, true ], walls:[ true, false, true, true ] }, { type:[ "light" ], isWalled:true, solidWalls:[ true, false, false, false ], walls:[ true, false, false, false ]}, { type:[ "light" ], isWalled:true, solidWalls:[ false, true, true, false ], walls:[ false, true, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, solidWalls:[ false, false, true, true ], walls:[ true, true, true, true ] }, { type:[ "light" ], isWalled:true, solidWalls:[ false, true, true, false ], walls:[ false, true, true, true ]}, { type:[ "dark" ], isWalled:true, isBlocking:true, solidWalls:[ true, false, false, true ], walls:[ true, true, true, true ] } ]
                                            // The corner room is never used, since it may not connect with the main path. Marked as not-room blocking.
                                        ]
                                    ]
                                }
                                /*
                                TODO: The center room blocks the tower entrance, forcing 2 doors placement to make it work. Not using it ATM.
                                {
                                    id:"Z11V",
                                    label:"[Z]11V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideSolidWalls" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides2", "openSides1+", "openSides2+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ true, false, false, true ], walls:[ true, false, false, true ] }, { type:[ "light" ], isWalled:true, solidWalls:[ true, true, false, false ], walls:[ true, true, true, false ]}, { type:[ "light" ], isWalled:true, solidWalls:[ false, false, false, true ], walls:[ false, false, false, true ] } ],
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ false, false, true, true ], walls:[ false, true, true, true ] }, { type:[ "dark" ], isWalled:true, isRoom:true, solidWalls:[ false, true, false, false ], walls:[ true, true, true, true ]}, { type:[ "light" ], isWalled:true, solidWalls:[ false, true, false, true ], walls:[ false, true, false, true ] } ],
                                            [ { type:[ "light" ], isWalled:true, isBlocking:true, solidWalls:[ true, true, false, false ], walls:[ true, true, true, true ] }, { type:[ "light" ], isWalled:true, solidWalls:[ false, false, true, true ], walls:[ true, false, true, true ]}, { type:[ "light" ], isWalled:true, solidWalls:[ false, true, true, false ], walls:[ false, true, true, false ] } ]
                                        ]
                                    ]
                                }
                                */
                            ]                                
                        },{
                            id:"Z10",
                            label:"[Z]10",
                            from:"boxZcWulfsburg",
                            sides:[
                                {
                                    id:"Z10R",
                                    label:"[Z]10R",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideSolidWalls" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides1", "openSides1+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ true, false, false, true ], walls:[ true, true, false, true ] }, { type:[ "dark" ], isRoom:true, solidWalls:[ true, false, false, false ], walls:[ true, true, true, true ]}, { type:[ "light" ], isWalled:true, solidWalls:[ true, true, false, false ], walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ false, false, false, true ], walls:[ false, false, false, true ] }, { type:[ "light" ], walls:[ true, false, false, false ]}, { type:[ "light" ], isWalled:true, solidWalls:[ false, true, true, false ], walls:[ false, true, true, false ] } ],
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ false, true, true, true ], walls:[ false, true, true, true ] }, { type:[ "light" ], isWalled:true, solidWalls:[  false, false, true, true ], walls:[ false, false, true, true ]}, { type:[ "light" ], isWalled:true, solidWalls:[ true, false, true, false ], walls:[ true, false, true, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z10V",
                                    label:"[Z]10V",
                                    skins:[ "outdoor" ],
                                    specialRules:[ "noLydian", "zombicideTiles", "zombicideSolidWalls" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ false, false, true, false ], walls:[ false, false, true, false ] }, { type:[ "light" ], isWalled:true, solidWalls:[ false, false, true, false ], walls:[ false, false, true, false ]}, { type:[ "light" ], solidWalls:[ false, false, false, false ], walls:[ false, false, false, false ] } ],
                                            [ { type:[ "light" ], isWalled:true, solidWalls:[ true, false, false, true ], walls:[ true, false, true, true ] }, { type:[ "light" ], isWalled:true, solidWalls:[ true, true, false, false ], walls:[ true, true, false, false ]}, { isWalled:true, type:[ "light" ], solidWalls:[ false, true, false, true ], walls:[ false, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, solidWalls:[ false, false, true, true ], walls:[ true, true, true, true ] }, { type:[ "light" ], isWalled:true, solidWalls:[ false, false, true, false ], walls:[ false, false, true, true ]}, { isWalled:true, type:[ "light" ], solidWalls:[ false, true, true, false ],  walls:[ false, true, true, false ] } ],
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