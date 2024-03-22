ModManager.modules.push(function(){

    return [
        {

            id:"md2-rainbowcrossing",
            needs:[ ],
            provides:[ "md2-rainbowcrossing" ],
            label:{
                EN:"MD: Rainbow Crossing box tiles"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxMd2RainbowCrossing:{
                            EN:"from MD2: Rainbow Crossing",
                            IT:"da MD2: Rainbow Crossing"
                        }
                    }
                },
                {
                    type:"tiles",
                    data:[
                        {
                            id:"C4",
                            label:"[C]4",
                            from:"boxMd2RainbowCrossing",
                            sides:[
                                {
                                    id:"C4A",
                                    label:"[C]4A",
                                    skins:[ "rainbow" ],
                                    tags:[ "any", "roomSize4", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "light" ], walls:[ false, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, false ] } ],
                                            [ { type:[ "dark" ], walls:[ false, false, false, false ] }, { type:[ "light" ], walls:[ true, false, false, false ]}, { type:[ "dark" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"C3",
                            label:"[C]3",
                            from:"boxMd2RainbowCrossing",
                            sides:[
                                {
                                    id:"C3A",
                                    label:"[C]3A",
                                    skins:[ "rainbow" ],
                                    tags: [ "any", "roomSize5", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:false,  walls:[ false, true, true, false ] }, { type:[ "light" ], isRoom:true, walls:[ true, false, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ false, false, true, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"C2",
                            label:"[C]2",
                            from:"boxMd2RainbowCrossing",
                            sides:[
                                {
                                    id:"C2A",
                                    label:"[C]2A",
                                    skins:[ "rainbow" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], walls:[ false, false, true, false ] }, { type:[ "dark" ], walls:[ false, false, false, false ]}, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"C2B",
                                    label:"[C]2B",
                                    skins:[ "rainbow" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "dark" ], walls:[ false, true, false, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"C1",
                            label:"[C]1",
                            from:"boxMd2RainbowCrossing",
                            sides:[
                                {
                                    id:"C1A",
                                    label:"[C]1A",
                                    skins:[ "rainbow" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"C1B",
                                    label:"[C]1B",
                                    skins:[ "rainbow" ],
                                    tags:[ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false,  walls:[ false, false, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, false, false] }, { type:[ "dark" ], isRoom:false, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
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