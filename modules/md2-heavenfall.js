ModManager.modules.push(function(){

    return [
            {

            id:"md2-heavenfall",
            needs:[ ],
            provides:[ "md2-heavenfall" ],
            label:{
                EN:"MD2 Heavenfall box content"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxMd2Heavenfall:{
                            EN:"from MD2 Heavenfall",
                            IT:"da MD2 Heavenfall"
                        }
                    }
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"B1",
                            label:"[B]1",
                            from:"boxMd2Heavenfall",
                            sides:[
                                {
                                    id:"B1A",
                                    label:"[B]1A",
                                    skins:[ "heaven" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"B1B",
                                    label:"[B]1B",
                                    skins:[ "heaven" ],
                                    tags: [ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize2", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "dark" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"B2",
                            label:"[B]2",
                            from:"boxMd2Heavenfall",
                            sides:[
                                {
                                    id:"B2A",
                                    label:"[B]2A",
                                    skins:[ "heaven" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], walls:[ false, false, true, false ] }, { type:[ "light" ], walls:[ false, false, false, false ]}, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"B2B",
                                    label:"[B]2B",
                                    skins:[ "heaven" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "roomSize3", "roomSize2+", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "light" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "light" ], isRoom:false,  walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"B3",
                            label:"[B]3",
                            from:"boxMd2Heavenfall",
                            sides:[
                                {
                                    id:"B3A",
                                    label:"[B]3A",
                                    skins:[ "heaven" ],
                                    tags:[ "any", "roomSize4", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "dark" ], walls:[ true, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ true, false, false, true ] } ],
                                            [ { type:[ "light" ], walls:[ false, false, false, false ] }, { type:[ "dark" ], walls:[ true, false, false, false ]}, { type:[ "light" ], walls:[ false, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"B3B",
                                    label:"[B]3B",
                                    skins:[ "heaven" ],
                                    tags:[ "any", "roomSize4", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "openSides0", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ]} ],
                                            [ { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ]}, { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ]}, { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ]} ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"B4",
                            label:"[B]4",
                            from:"boxMd2Heavenfall",
                            sides:[
                                {
                                    id:"B4A",
                                    label:"[B]4A",
                                    skins:[ "heaven" ],
                                    tags:[ "any", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount0" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], walls:[ false, false, false, false ] }, { type:[ "light" ], walls:[ false, false, false, false ]}, { type:[ "dark" ], walls:[ false, false, false, false ] } ],
                                            [ { type:[ "dark" ], walls:[ false, false, true, false ]}, { type:[ "light" ], walls:[ false, false, false, false ] }, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ]}, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ]} ],
                                        ]
                                    ]
                                },{
                                    id:"B4B",
                                    label:"[B]4B",
                                    skins:[ "heaven" ],
                                    tags:[ "any", "openSides2", "openSides1+", "openSides2+", "roomsCount0" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isWalled:true, walls:[ true, false, false, true ] }, { type:[ "dark" ], isWalled:true, walls:[ true, false, true, false ]}, { type:[ "light" ], isWalled:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], isWalled:true, walls:[ false, true, false, true ]}, { type:[ "light" ], isWalled:true, walls:[ true, false, false, true ] }, { type:[ "dark" ], isWalled:true, walls:[ false, true, true, false ] } ],
                                            [ { type:[ "light" ], isWalled:true, walls:[ false, true, false, true ]}, { type:[ "light" ], isWalled:true, walls:[ false, false, true, true ]}, { type:[ "light" ], isWalled:true, walls:[ true, false, true, false ]} ],
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