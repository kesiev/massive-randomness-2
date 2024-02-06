ModManager.modules.push(function(){

    return [
            {

            id:"md2-crystallava",
            needs:[ ],
            provides:[ "md2-crystallava" ],
            label:{
                EN:"MD A Quest of Crystal & Lava box content"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxMd2CrystalLava:{
                            EN:"from MD A Quest of Crystal &amp; Lava",
                            IT:"da MD Una Missione di Lava e Cristalli"
                        }
                    }
                },{
                    type:"specialRules",
                    data:{
                        noLydian:[
                            {
                                priority:10,
                                type:"rule",
                                name:{
                                    IT:"Sonno di Lyidan",
                                    EN:"Lyidan's Sleep"
                                },
                                explanation:{
                                    IT:"Rimuovere le carte di Lyidan da tutti i mazzi dei Mostri Erranti.",
                                    EN:"Remove Lyidan cards from all Roaming Monster decks."
                                }
                            }
                        ]
                    }
                },
                {
                    type:"tiles",
                    data:[
                        {
                            id:"1",
                            label:"1",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"1V",
                                    label:"1V",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize2", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, false, false, true ]}, { type:[ "dark" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"1R",
                                    label:"1R",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], walls:[ false, false, true, false ] }, { type:[ "dark" ], walls:[ false, false, false, false ]}, { type:[ "light" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"2",
                            label:"2",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"2V",
                                    label:"2V",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], walls:[ false, false, true, false ] }, { type:[ "dark" ], walls:[ false, false, false, false ]}, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"2R",
                                    label:"2R",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize5", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "light" ], isRoom:true,  walls:[ true, false, false, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, false ]}, { type:[ "light" ], isRoom:false,  walls:[ false, false, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "light" ], isRoom:true, walls:[ false, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"3",
                            label:"3",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"3V",
                                    label:"3V",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize4", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], walls:[ false, true, false, false ] }, { type:[ "light" ], isRoom:true, walls:[ true, false, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "light" ], isRoom:true,  walls:[ false, true, true, false ] } ],
                                            [ { type:[ "dark" ], walls:[ false, false, false, false ] }, { type:[ "light" ], walls:[ true, false, false, false ]}, { type:[ "light" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"3R",
                                    label:"3R",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "dark" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"4",
                            label:"4",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"4V",
                                    label:"4V",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], walls:[ false, false, true, false ] }, { type:[ "light" ], walls:[ false, false, false, false ]}, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"4R",
                                    label:"4R",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"5",
                            label:"5",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"5V",
                                    label:"5V",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], walls:[ false, false, true, false ] }, { type:[ "dark" ], walls:[ false, false, false, false ]}, { type:[ "light" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"5R",
                                    label:"5R",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "dark" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"6",
                            label:"6",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"6V",
                                    label:"6V",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "dark" ], walls:[ false, true, false, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true] } ],
                                        ]
                                    ]
                                },{
                                    id:"6R",
                                    label:"6R",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"7",
                            label:"7",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"7V",
                                    label:"7V",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "roomSize3", "roomSize2+", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "light" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:false,  walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:false,  walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"7R",
                                    label:"7R",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "roomSize3", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "light" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "light" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:false,  walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:false,  walls:[ true, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"8",
                            label:"8",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"8V",
                                    label:"8V",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "roomSize3", "roomSize2+", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, false, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:false,  walls:[ false, false, true, false ] }, { type:[ "light" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:false,  walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "light" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"8R",
                                    label:"8R",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "roomSize3", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ] }, { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ false, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"9",
                            label:"9",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"9V",
                                    label:"9V",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize2", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, false, false, true ]}, { type:[ "light" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"9R",
                                    label:"9R",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount3", "roomsCount1+", "roomsCount2+", "roomsCount3+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "dark" ], walls:[ false, false, false, true ]}, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], walls:[ true, false, true, false ] }, { type:[ "dark" ], walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "light" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"10",
                            label:"10",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"10V",
                                    label:"10V",
                                    skins:[ "crystal" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize5", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, false, false ] } ],
                                            [ { type:[ "crystal" ], isRoom:true,  walls:[ true, false, false, true ] }, { type:[ "crystal" ], isRoom:true, walls:[ true, true, false, false ]}, { type:[ "dark" ], isRoom:false,  walls:[ false, false, true, true ] } ],
                                            [ { type:[ "crystal" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "crystal" ], isRoom:true, walls:[ false, false, true, false ]}, { type:[ "crystal" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"10R",
                                    label:"10R",
                                    skins:[ "lava" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount3", "roomsCount1+", "roomsCount2+", "roomsCount3+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "lava" ], walls:[ false, false, false, true ]}, { type:[ "lava" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "lava" ], walls:[ true, false, true, false ] }, { type:[ "lava" ], walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "lava" ], walls:[ false, false, false, true ]}, { type:[ "lava" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"11",
                            label:"11",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"11R",
                                    label:"11R",
                                    skins:[ "lava" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "lava" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "lava" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "lava" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "lava" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "lava" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                },{
                                    id:"11V",
                                    label:"11V",
                                    skins:[ "crystal" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "crystal" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, false, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "crystal" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "crystal" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ]}, { type:[ "crystal" ], isRoom:true, walls:[ false, true, true, true ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"12",
                            label:"12",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"12V",
                                    label:"12V",
                                    skins:[ "crystal" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "roomSize3", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "crystal" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "crystal" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:false,  walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:false,  walls:[ true, false, true, false ] } ],
                                            [ { type:[ "crystal" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "crystal" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "crystal" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"12R",
                                    label:"12R",
                                    skins:[ "lava" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "roomSize3", "roomSize2+", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "lava" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "lava" ], isRoom:false, walls:[ false, false, false, true ] } ],
                                            [ { type:[ "lava" ], isRoom:false,  walls:[ false, false, true, false ] }, { type:[ "lava" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "lava" ], isRoom:false,  walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id:"13",
                            label:"13",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"13V",
                                    label:"13V",
                                    skins:[ "crystal" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "crystal" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "crystal" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "crystal" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "crystal" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "dark" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"13R",
                                    label:"13R",
                                    skins:[ "lava" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "lava" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "lava" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] }, { type:[ "lava" ], isRoom:false, walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "lava" ], isRoom:false, walls:[ false, false, false, true ]}, { type:[ "lava" ], isRoom:false, walls:[ true, false, false, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"14",
                            label:"14",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"14V",
                                    label:"14V",
                                    skins:[ "crystal" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize5", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] }, { type:[ "dark" ], isRoom:false, walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:false,  walls:[ false, true, true, false ] }, { type:[ "crystal" ], isRoom:true, walls:[ true, false, false, true ]}, { type:[ "crystal" ], isRoom:true,  walls:[ true, true, false, false ] } ],
                                            [ { type:[ "crystal" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "crystal" ], isRoom:true, walls:[ false, false, true, false ]}, { type:[ "crystal" ], isRoom:true, walls:[ false, true, true, false ] } ]
                                        ]
                                    ]
                                },{
                                    id:"14R",
                                    label:"14R",
                                    skins:[ "lava" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "roomSize3", "roomSize2+", "roomSize3+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "lava" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "lava" ], isRoom:false, walls:[ false, false, false, true ] } ],
                                            [ { type:[ "lava" ], isRoom:false,  walls:[ false, false, true, false ] }, { type:[ "lava" ], isRoom:false, walls:[ true, false, true, false ]}, { type:[ "lava" ], isRoom:false,  walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, true, false ] } ]
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"15",
                            label:"15",
                            from:"boxMd2CrystalLava",
                            sides:[
                                {
                                    id:"15V",
                                    label:"15V",
                                    skins:[ "crystal" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize2", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "crystal" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "crystal" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "crystal" ], isRoom:true, walls:[ false, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "crystal" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "crystal" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, false, false, true ]}, { type:[ "dark" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"15R",
                                    label:"15R",
                                    skins:[ "lava" ],
                                    specialRules:[ "noLydian" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount3", "roomsCount1+", "roomsCount2+", "roomsCount3+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "lava" ], walls:[ false, false, false, true ]}, { type:[ "lava" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "lava" ], walls:[ true, false, true, false ] }, { type:[ "lava" ], walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "lava" ], walls:[ false, false, false, true ]}, { type:[ "lava" ], walls:[ true, false, false, false ] } ],
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