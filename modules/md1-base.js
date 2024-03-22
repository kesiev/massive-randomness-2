ModManager.modules.push(function(){

    return [
        {
            id:"md1-base",
            needs:[ ],
            provides:[ "md1-base" ],
            label:{
                EN:"Massive Darkness 1 box content (tiles)"
            },
            content:[
                {
                    type:"tiles",
                    data:[
                        {
                            id:"1",
                            label:"1",
                            from:"massiveDarkness1",
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
                            from:"massiveDarkness1",
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
                            from:"massiveDarkness1",
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
                            from:"massiveDarkness1",
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
                            from:"massiveDarkness1",
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
                            from:"massiveDarkness1",
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
                            from:"massiveDarkness1",
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
                            from:"massiveDarkness1",
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
                            from:"massiveDarkness1",
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
                        }
                    ]
                }
            ]
        }
    ]

});