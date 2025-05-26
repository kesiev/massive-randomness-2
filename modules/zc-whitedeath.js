ModManager.modules.push(function(){

    return [
        {

            id:"zc-whitedeath",
            needs:[ ],
            provides:[ "zc-whitedeath" ],
            label:{
                EN:"Zombicide: White Death tiles"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxZcWhiteDeath:{
                            EN:"from Zombicide: White Death",
                            IT:"da Zombicide: White Death"
                        }
                    }
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z26",
                            label:"[Z]26",
                            from:"boxZcWhiteDeath",
                            sides:[
                                {
                                    id:"Z26R",
                                    label:"[Z]26R",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false,  walls:[ true, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, false, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z26V",
                                    label:"[Z]26V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isWalled:true, isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "light" ], isWalled:true, isRoom:false, walls:[ false, false, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z27",
                            label:"[Z]27",
                            from:"boxZcWhiteDeath",
                            sides:[
                                {
                                    id:"Z27R",
                                    label:"[Z]27R",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isWalled:true, isRoom:false, walls:[ true, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isWalled:true, isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z27V",
                                    label:"[Z]27V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "roomSize1", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isWalled:true, isRoom:false, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isWalled:true, isRoom:false, walls:[ false, true, true, false ] } ],
                                            [ { type:[ "light" ], isWalled:true, isRoom:false,  walls:[ true, false, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, true, true ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z28",
                            label:"[Z]28",
                            from:"boxZcWhiteDeath",
                            sides:[
                                // 28R is a wall tile, ATM do not fits MD2
                                {
                                    id:"Z28V",
                                    label:"[Z]28V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, false, true, true ] }, { type:[ "light" ], isWalled:true, isRoom:false, walls:[ false, false, true, false ]}, { type:[ "light" ], isWalled:true, isRoom:false, walls:[ false, true, true, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z29",
                            label:"[Z]29",
                            from:"boxZcWhiteDeath",
                            sides:[
                                // 29R is a wall tile, ATM do not fits MD2
                                {
                                    id:"Z29V",
                                    label:"[Z]29V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false,  walls:[ false, false, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, false, false] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z30",
                            label:"[Z]30",
                            from:"boxZcWhiteDeath",
                            sides:[
                                {
                                    id:"Z30R",
                                    label:"[Z]30R",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides2", "openSides1+", "openSides2+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, true, true, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z30V",
                                    label:"[Z]30V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, true, true, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z31",
                            label:"[Z]31",
                            from:"boxZcWhiteDeath",
                            sides:[
                                {
                                    id:"Z31R",
                                    label:"[Z]31R",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, true, true, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z31V",
                                    label:"[Z]31V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, isWalled:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, true, false, true ]}, { type:[ "dark" ], isRoom:true, isWalled:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, false, true, true] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, true, true, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"Z32",
                            label:"[Z]32",
                            from:"boxZcWhiteDeath",
                            sides:[
                                {
                                    id:"Z32R",
                                    label:"[Z]32R",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, false, false, true ] }, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ true, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, true, true, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"Z32V",
                                    label:"[Z]32V",
                                    skins:[ "snow" ],
                                    specialRules:[ "noLydian", "zombicideTiles" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, false, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ]}, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, false, false, true ]}, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, isWalled:true, walls:[ false, false, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                    ]
                },
                // 33R borders are too vague for MR2.
                // 33V is a wall tile, ATM do not fits MD2
            ]
        }
    ]

});