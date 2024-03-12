ModManager.modules.push(function(){

    return [

        // --- Normal size maps
        {

            id:"maps-default-normal",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-size-normal" ],
            label:{
                EN:"MD2 map generator default tile layouts (normal-size)"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        {
                            attribute:"structure",
                            value:"path",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToRoom",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomSize1",
                                                    "roomSize2",
                                                    "roomSize3"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToPrison",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomSize1",
                                                    "roomSize2",
                                                    "roomSize3"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            includeTags:[
                                                [
                                                    "roomSize1"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roamingToRoom",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapDistanceScore: [ -1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"maze",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ 1 ],
                                mapAsGrid:[ false ],
                                mapDistanceScore: [ -1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roaming",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true ]
                            }
                        },{
                            attribute:"structure",
                            value:"roaming-large",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ false ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToRooms",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }, { 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"magicMaze",
                            config:{
                                mapTiles:[
                                    [
                                        {
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{
                                            tileId:"fourth",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true ],
                                mapRightmostScore:[ 1 ]
                            }
                        },
                        // --- Game modes
                        {
                            attribute:"gameMode",
                            value:"magicMazeHunt",
                            config:{
                                roomsExpectedRatio:[ 3 ],
                                roomsDoorsDefaultType:[
                                    { id:"door", doNotCrossTile:true }
                                ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            atTileId:"first",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"second",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"third",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"fourth",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },
                        // --- Corridors
                        {
                            attribute:"corridors",
                            value:"magicMaze",
                            config:{                            
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]}
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:0, tokens:[ { id:"startMob", isVisible:true } ]}
                                            ]
                                        },{
                                            atTileId:"first",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"second",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"third",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"fourth",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        }
                                    ]
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        // --- Large size maps
        {

            id:"maps-default-large",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-size-large" ],
            label:{
                EN:"MD2 map generator default tile layouts (large-size)"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        {
                            attribute:"structure",
                            value:"path",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToRoom",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomSize1",
                                                    "roomSize2",
                                                    "roomSize3"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToPrison",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomSize1",
                                                    "roomSize2",
                                                    "roomSize3"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            includeTags:[
                                                [
                                                    "roomSize1"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roamingToRoom",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapDistanceScore: [ -1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"maze",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ 1 ],
                                mapAsGrid:[ false ],
                                mapDistanceScore: [ -1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roaming",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToRooms",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"magicMaze",
                            config:{
                                mapTiles:[
                                    [
                                        {
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{
                                            tileId:"fourth",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToRoom-small",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomSize1",
                                                    "roomSize2",
                                                    "roomSize3"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roamingToRoom-small",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapDistanceScore: [ -1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roaming-large",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"extra", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true ]
                            }
                        },
                        // --- Game modes
                        {
                            attribute:"gameMode",
                            value:"magicMazeHunt",
                            config:{
                                roomsExpectedRatio:[ 3 ],
                                roomsDoorsDefaultType:[
                                    { id:"door", doNotCrossTile:true }
                                ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            atTileId:"first",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"second",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"third",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"fourth",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"extra",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },
                        // --- Corridors
                        {
                            attribute:"corridors",
                            value:"magicMaze",
                            config:{                            
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]}
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:0, tokens:[ { id:"startMob", isVisible:true } ]}
                                            ]
                                        },{
                                            atTileId:"first",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"second",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"third",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"fourth",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"extra",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },
                        // --- Room sizes
                        {
                            attribute:"size",
                            value:"square",
                            config:{
                                mapMaxWidth:[ 9 ],
                                mapMaxHeight:[ 6 ]
                            }
                        }
                    ]
                }
            ]
        },
        
        // --- Small size maps
        {

            id:"maps-default-small",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-size-small" ],
            label:{
                EN:"MD2 map generator default tile layouts (small-size)"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        {
                            attribute:"structure",
                            value:"path",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToRoom",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomSize1",
                                                    "roomSize2",
                                                    "roomSize3"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToPrison",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomSize1",
                                                    "roomSize2",
                                                    "roomSize3"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomSize1"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roamingToRoom",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapDistanceScore: [ -1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"maze",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ 1 ],
                                mapAsGrid:[ false ],
                                mapDistanceScore: [ -1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roaming",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true ]
                            }
                        },{
                            attribute:"structure",
                            value:"pathToRooms",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        }, { 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"magicMaze",
                            config:{
                                mapTiles:[
                                    [
                                        {
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third",
                                            includeTags:[
                                                [
                                                    "roomsCount1",
                                                    "roomsCount2"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roaming-large",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ false ]
                            }
                        },{
                            attribute:"structure",
                            value:"maze-huge",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                mapRightmostScore:[ 1 ],
                                mapAsGrid:[ false ]
                            }
                        },
                        // --- Game modes
                        {
                            attribute:"gameMode",
                            value:"magicMazeHunt",
                            config:{
                                roomsExpectedRatio:[ 3 ],
                                roomsDoorsDefaultType:[
                                    { id:"door", doNotCrossTile:true }
                                ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            atTileId:"first",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"second",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"third",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },
                        // --- Corridors
                        {
                            attribute:"corridors",
                            value:"magicMaze",
                            config:{                            
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:false },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]}
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:0, tokens:[ { id:"startMob", isVisible:true } ]}
                                            ]
                                        },{
                                            atTileId:"first",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"second",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"third",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        },{
                                            atTileId:"fourth",
                                            elements:[
                                                { at:1, tokens:[ { id:"objective" }]},
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },
                        // --- Map sizes
                        {
                            attribute:"size",
                            value:"huge",
                            config:{
                                mapMaxWidth:[ 9 ],
                                mapMaxHeight:[ 6 ]
                            }
                        }
                    ]
                }
            ]
        },

        // --- Small/Normal size maps
        {
            id:"maps-default-smallest",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-size-small", "maps-size-normal" ],
            label:{
                EN:"MD2 map generator smallest tile layouts (smalllest-size)"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        {
                            attribute:"structure",
                            value:"pathToRoom-small",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomSize1",
                                                    "roomSize2",
                                                    "roomSize3"
                                                ],[
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ true, false ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"roamingToRoom-small",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true, false ],
                                mapDistanceScore: [ -1 ]
                            }
                        },
                        // --- Room sizes
                        {
                            attribute:"size",
                            value:"square",
                            config:{
                                mapMaxWidth:[ 6 ],
                                mapMaxHeight:[ 6 ]
                            }
                        }
                    ]
                }
            ]
        },

        // --- Small/Normal size maps
        {
            id:"maps-default-largest",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-size-normal", "maps-size-large" ],
            label:{
                EN:"MD2 map generator smallest tile layouts (largest-size)"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        {
                            attribute:"structure",
                            value:"maze-huge",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"sixth", 
                                            includeTags:[
                                                [
                                                    "any"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapRightmostScore:[ 2 ],
                                // mapNoSquaresScore:[ -0.1 ],
                                // mapDistanceScore: [ 1 ]
                                mapAsGrid:[ false ]
                            }
                        },{
                            attribute:"size",
                            value:"huge",
                            config:{
                                mapMaxWidth:[ 10 ],
                                mapMaxHeight:[ 6 ]
                            }
                        }
                    ]
                }
            ]
        },

        // --- Small/Normal/Large size maps
        {

            id:"maps-default-fixedsize",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-size-small", "maps-size-normal", "maps-size-large" ],
            label:{
                EN:"MD2 map generator default tile layouts (fixed sizes)"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        {
                            attribute:"structure",
                            value:"largeMaze",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"sixth", 
                                            iincludeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapDistanceScore: [ -1 ],
                                mapRightmostScore:[ 1 ],
                                mapAsGrid:[ true ]
                            }
                        },{
                            attribute:"structure",
                            value:"cross",
                            config:{
                                mapTiles:[
                                    [
                                        {
                                            tileId:"center", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "roomSize4+"
                                                ]
                                            ]
                                        },{
                                            tileId:"first", 
                                            at:{ x:3, y:-1 },
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        },{
                                            tileId:"second", 
                                            at:{ x:3, y:2 },
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        },{
                                            tileId:"third", 
                                            at:{ x:6, y:-1 },
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{
                                            tileId:"fourth", 
                                            at:{ x:6, y:2 },
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"structure",
                            value:"unlockAndEscape",
                            config:{
                                mapTiles: [
                                    [
                                        { 
                                            tileId:"first", 
                                            includeTags:[
                                                [
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ],[
                                                    "roomsCount1+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            includeTags:[
                                                [
                                                    "roomsCount2"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapDistanceScore: [ -1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"fallingDungeon",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            at:{ x:3, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            at:{ x:3, y:3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }, { 
                                            tileId:"fourth", 
                                            at:{ x:6, y:3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ],[
                                        { 
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            at:{ x:3, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            at:{ x:3, y:-3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }, { 
                                            tileId:"fourth", 
                                            at:{ x:6, y:-3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ],[
                                        { 
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            at:{ x:3, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            at:{ x:6, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }, { 
                                            tileId:"fourth", 
                                            at:{ x:6, y:3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ],[
                                        { 
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            at:{ x:3, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            at:{ x:6, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }, { 
                                            tileId:"fourth", 
                                            at:{ x:6, y:-3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ],[
                                        { 
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            at:{ x:0, y:3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            at:{ x:3, y:3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }, { 
                                            tileId:"fourth", 
                                            at:{ x:6, y:3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ],[
                                        { 
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            at:{ x:0, y:-3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            at:{ x:3, y:-3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }, { 
                                            tileId:"fourth", 
                                            at:{ x:6, y:-3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        }
                                    ]
                                ],
                                mapAsGrid:[ true ],
                                mapRightmostScore:[ 1 ]
                            }
                        },{
                            attribute:"structure",
                            value:"armorToBoss",
                            config:{
                                mapTiles:[
                                    [
                                        { 
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            at:{ x:0, y:-3 },
                                            includeTags:[
                                                [
                                                    "roomSize2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            at:{ x:3, y:-3 },
                                            includeTags:[
                                                [
                                                    "roomSize2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            at:{ x:6, y:-3 },
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            at:{ x:6, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ],[
                                                    "roomsCount1+"
                                                ]
                                            ]
                                        }
                                    ],[
                                        { 
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"second", 
                                            at:{ x:0, y:3 },
                                            includeTags:[
                                                [
                                                    "roomSize2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"third", 
                                            at:{ x:3, y:3 },
                                            includeTags:[
                                                [
                                                    "roomSize2+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fourth", 
                                            at:{ x:6, y:3 },
                                            includeTags:[
                                                [
                                                    "roomSize3+"
                                                ]
                                            ]
                                        },{ 
                                            tileId:"fifth", 
                                            at:{ x:6, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ],[
                                                    "roomsCount1+"
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"structure",
                            value:"towerDefense",
                            config:{
                                mapTiles:[
                                    [
                                        {
                                            tileId:"first", 
                                            at:{ x:0, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides4+"
                                                ],[
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{
                                            tileId:"second", 
                                            at:{ x:0, y:-3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ],[
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{
                                            tileId:"third", 
                                            at:{ x:3, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ],[
                                                    "roomsCount2+"
                                                ]
                                            ]
                                        },{
                                            tileId:"fourth", 
                                            at:{ x:0, y:3 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },
                                        {
                                            tileId:"fifth", 
                                            at:{ x:-3, y:0 },
                                            includeTags:[
                                                [
                                                    "openSides2+"
                                                ]
                                            ]
                                        },
                                    ]
                                ],
                                mapNoSquaresScore:[ -1 ]
                            }
                        }
                    ]
                }
            ]
        },

        // --- Uniform skinned maps
        {
            id:"maps-default-uniform",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-default-uniform" ],
            label:{
                EN:"MD2 map generator uniform skin setting"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        {
                            attribute:"skin",
                            value:"default",
                            config:{
                                mapSameSkin:[ true ]
                            }
                        }
                    ]
                }
            ]
        },

        // --- Not uniform skinned maps
        {
            id:"maps-default-uniform",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-default-notuniform" ],
            label:{
                EN:"MD2 map generator not uniform skin setting"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        {
                            attribute:"skin",
                            value:"default",
                            config:{
                                mapSameSkin:[ false ]
                            }
                        }
                    ]
                }
            ]
        },

        // --- Default settings
        {
            id:"maps-default",
            needs:[ "md2-hellscape" ],
            provides:[ "maps-default" ],
            label:{
                EN:"MD2 map generator default configurations"
            },
            content:[
                {
                    type:"mapConfigs",
                    data:[
                        // --- Map sizes
                        {
                            attribute:"size",
                            value:"default",
                            config:{
                                mapMaxWidth:[ 9 ],
                                mapMaxHeight:[ 6 ]
                            }
                        },
                        // --- Map loot/player ratio
                        {
                            attribute:"lootRatio",
                            value:"default",
                            config:{
                                lootRatio:[
                                    [
                                        { players:[1,2], lootTokens:1 },
                                        { players:[3,4], lootTokens:2 },
                                        { players:[5,6], lootTokens:3 }
                                    ]
                                ]
                            }
                        },
                        {
                            attribute:"lootRatio",
                            value:"same",
                            config:{
                                lootRatio:[
                                    [
                                        { players:[1,6], lootTokens:1 }
                                    ]
                                ]
                            }
                        },
                        // --- Bridges
                        {
                            attribute:"bridges",
                            value:"default",
                            config:{
                                mapBridgesAt:[ 0, 0.25, 0.5 ]
                            }
                        },
                        // --- Corridors
                        {
                            attribute:"corridors",
                            value:"default",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"noBridges",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:false },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"armorToBoss",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:false },
                                        { at:0.9, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]}
                                            ]
                                        },{
                                            elements:[
                                                { at:1, tokens:[ { id:"objective", flipped:true }]}
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"largeMaze",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:false },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        },{
                                            elements:[
                                                { at:0.25, tokens:[ { id:"bearTrap" } ]}
                                            ]
                                        },{
                                            elements:[
                                                { at:0.45, tokens:[ { id:"spikeTrap" } ]}
                                            ]
                                        },{
                                            elements:[
                                                { at:0.65, tokens:[ { id:"bearTrap" } ]}
                                            ]
                                        },{
                                            elements:[
                                                { at:0.85, tokens:[ { id:"spikeTrap" } ]}
                                            ]
                                        }
                                    ],[
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        },{
                                            elements:[
                                                { at:0.25, tokens:[ { id:"spikeTrap" } ]}
                                            ]
                                        },{
                                            elements:[
                                                { at:0.45, tokens:[ { id:"bearTrap" } ]}
                                            ]
                                        },{
                                            elements:[
                                                { at:0.65, tokens:[ { id:"spikeTrap" } ]}
                                            ]
                                        },{
                                            elements:[
                                                { at:0.85, tokens:[ { id:"bearTrap" } ]}
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"tyrant",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { at:1, tokens:[ { id:"startRoaming", isVisible:true } ]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"cross",
                            config:{                            
                                corridorsContent:[
                                    [
                                        {
                                            atTileId:"first",
                                            elements:[
                                                { at:1, tokens:[ { id:"startPoint", isVisible:true }, { id: "regularPortal", isVisible:true } ]},
                                                { at:0, tokens:[ { id:"objective", flipped:true } ] },
                                                { at:0.5, tokens:[ { id:"spikeTrap" } ] }
                                            ]
                                        },
                                        {
                                            atTileId:"second",
                                            elements:[
                                                { at:1, tokens:[ { id:"startPoint", isVisible:true }, { id: "greenPortal", isVisible:true }]},
                                                { at:0, tokens:[ { id:"objective", flipped:true } ] },
                                                { at:0.5, tokens:[ { id:"spikeTrap" } ] }
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:1, tokens:[ { id:"startPoint", isVisible:true }, { id: "greenPortal", isVisible:true }]},
                                                { at:0, tokens:[ { id:"objective", flipped:true } ] },
                                                { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                { at:0.5, tokens:[ { id:"fountain" } ] }
                                            ]
                                        },
                                        {
                                            atTileId:"fourth",
                                            elements:[
                                                { at:1, tokens:[ { id:"startPoint", isVisible:true }, { id: "greenPortal", isVisible:true }]},
                                                { at:0, tokens:[ { id:"objective", flipped:true } ] },
                                                { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                { at:0.5, tokens:[ { id:"fountain" } ] }
                                            ]
                                        },{
                                            atTileId:"center",
                                            elements:[
                                                { at:0.5, tokens:[ { id:"objective" } ] },
                                                { at:0, tokens:[ { id:"greaterChest" } ] },
                                                { at:1, tokens:[ { id:"greaterChest" } ] }
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"elemental",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        },{
                                            elements:[
                                                { at:1, tokens:[ { id:"{label.hazard@0}" }]},
                                                { at:0.8, tokens:[ { id:"{label.hazard@0}" } ]}
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"fallingDungeon",
                            config:{ 
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:false }
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:0.80, tokens:[ { id:"spikeTrap" } ]}
                                            ]
                                        },
                                        {
                                            atTileId:"fourth",
                                            elements:[
                                                { at:0, tokens:[ { id:"objective" } ]},
                                                { at:1, tokens:[ { id:"objective", flipped:true }]},
                                                { at:0.5, tokens:[ { id: "regularPortal", isVisible:true } ] }
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"elementalTrapExit",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        },
                                        {
                                            elements:[
                                                { at:0.5, tokens:[ { id:"spikeTrap" }, { id:"{label.hazard@0}" }, { id:"objective", flipped:true } ]},
                                                { at:0.5, tokens:[ { id:"spikeTrap" }, { id:"{label.hazard@0}" } ]},
                                                { at:0.75, tokens:[ { id:"spikeTrap" }, { id:"{label.hazard@0}" } ]},
                                                { at:0.75, tokens:[ { id:"spikeTrap" }, { id:"{label.hazard@0}" } ]},
                                                { at:0.25, tokens:[ { id:"spikeTrap" }, { id:"{label.hazard@0}" } ]}
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"capture",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        },{
                                            elements:[
                                                { atCell:1, tokens:[ { id:"corruption", isVisible:true }]},
                                                { at:0.6, tokens:[ { id:"corruption", isVisible:true } ]},
                                                { at:0.85, tokens:[ { id:"corruption", isVisible:true } ]},
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"doubleBoss",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3", isVisible:true } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5", isVisible:true } ], allowBridge:false },
                                        { at:0.95, tokens:[ { id: "regularPortal", isVisible:true } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint", isVisible:true }]},
                                                { atCell:6, tokens:[ { id:"startMob", isVisible:true } ]},
                                                { atCell:11, tokens:[ { id:"startMob", isVisible:true } ]},
                                            ]
                                        },{
                                            elements:[
                                                { at:0.45, tokens:[ { id:"fountain" }]},
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"corridors",
                            value:"towerDefense",
                            config:{
                                corridorsSpawnPoints:[],
                                corridorsContent:[
                                    [
                                        {
                                            atTileId:"first",
                                            elements:[
                                                { at:0.5, tokens:[
                                                    { id:"startPoint", isVisible:true },
                                                    { id:"objective", isVisible:true },
                                                ]}
                                            ]
                                        },{
                                            atTileId:"second",
                                            elements:[
                                                { at:1, tokens:[ { id:"greenPortal", isVisible:true }]}
                                            ]
                                        },{
                                            atTileId:"second",
                                            elements:[
                                                { at:0, tokens:[ { id:"objective", flipped:true, isVisible:true }]}
                                            ]
                                        },{
                                            atTileId:"third",
                                            elements:[
                                                { at:1, tokens:[ { id:"greenPortal", isVisible:true }]}
                                            ]
                                        },{
                                            atTileId:"third",
                                            elements:[
                                                { at:0, tokens:[ { id:"objective", flipped:true, isVisible:true }]}
                                            ]
                                        },{
                                            atTileId:"fourth",
                                            elements:[
                                                { at:1, tokens:[ { id:"greenPortal", isVisible:true }]}
                                            ]
                                        },{
                                            atTileId:"fourth",
                                            elements:[
                                                { at:0, tokens:[ { id:"objective", flipped:true, isVisible:true }]}
                                            ]
                                        },{
                                            atTileId:"fifth",
                                            elements:[
                                                { at:1, tokens:[ { id:"regularPortal", isVisible:true }]}
                                            ]
                                        },{
                                            atTileId:"fifth",
                                            elements:[
                                                { at:0, tokens:[ { id:"objective", flipped:true, isVisible:true }]}
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },
                        // --- Room limits
                        {
                            attribute:"roomLimits",
                            value:"default",
                            config:{
                                roomLimits:[
                                    { tokensPerRoomLimit:{ mob:3, fire:1, frost:1 }, tokensPerRoomCellLimit:{ mob:1, fire:1, frost:1 } }
                                ]
                            }
                        },
                        // --- Room merges
                        {
                            attribute:"roomsMerges",
                            value:"default",
                            config:{
                                roomsMerges: [ 0, 1, 2 ]
                            }
                        },
                        // --- Difficulty
                        {
                            attribute:"difficulty",
                            value:"default",
                            config:{
                                roomsDefaults:[
                                    { risk:1, reward:1 }
                                ]
                            }
                        },
                        {
                            attribute:"difficulty",
                            value:"none",
                            config:{
                                roomsDefaults:[
                                    { risk:0, reward:0 }
                                ]
                            }
                        },
                        {
                            attribute:"difficulty",
                            value:"hard",
                            config:{
                                roomsDefaults:[
                                    { risk:1.5, reward:1.6 }
                                ]
                            }
                        },
                        {
                            attribute:"difficulty",
                            value:"increasedLoot",
                            config:{
                                roomsDefaults:[
                                    { risk:1, reward:1.6 }
                                ]
                            }
                        },
                        // --- Game modes
                        {
                            attribute:"gameMode",
                            value:"arena",
                            config:{
                                roomsExpectedRatio:[ 3 ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"collectAndDeliver",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.2,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            intensity:{ risk:1, reward:0.5 },
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            {id:"forge"}
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ],
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"collectAndDeliver-small",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            intensity:{ risk:1, reward:0.5 },
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            {id:"forge"}
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.2,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"xpAndDeliver",
                            config:{
                                roomsExpectedRatio:[ 3 ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1.5, reward:1 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true }
                                                        ]
                                                    },
                                                    {
                                                        atExposure:1,
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.2,
                                            relevance:1,
                                            intensity:{ risk:1.5, reward:1 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.8,
                                            intensity:{ risk:1, reward:0.5 },
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            intensity:{ risk:1, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective"} 
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ],
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"unlockAndActivate",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            doors:[ { id:"door", className:"marked red" } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:0.2,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1, reward:0.5 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:0.8,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]   
                                            ],
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"unlockAndBoss",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            intensity:{ risk:0, reward:0 },
                                            doors:[ { id:"door", className:"marked red" } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"corruption", isVisible:true }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:0.2,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1, reward:0.5 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:0.8,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]   
                                            ],
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1, reward:0.5 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1, reward:0.5 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"escort",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            doors:[ { id:"door", className:"marked red" } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ],
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"targets",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.2,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.4,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.6,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"largeTargets",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob"}
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.2,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob"}
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.4,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob"}
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.6,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"cross",
                            config:{
                                roomsExpectedRatio:[ 3 ],
                                roomsDoorsDefaultType:[
                                    { id:"door", doNotCrossTile:true }
                                ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            atTileId:"center",
                                            relevance:1,
                                            size:1,
                                            doors:[
                                                { id:"door", className:"marked red", doNotCrossTile:true }
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"first",
                                            relevance:1,
                                            size:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"regularChest" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"first",
                                            relevance:1,
                                            size:1,
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"second",
                                            relevance:1,
                                            size:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"regularChest" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"regularChest" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"second",
                                            relevance:1,
                                            size:1,
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"third",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"regularChest" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"third",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"third",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"third",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"fourth",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"regularChest" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"fourth",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"fourth",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"fourth",
                                            relevance:1,
                                            size:1,
                                            doors:[ { id:"door", doNotCrossTile:true } ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"loot" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"unlockAndEscape",
                            config:{
                                roomsExpectedRatio:[ 1.5 ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            size:-1,
                                            relevance:1,
                                            atTileId:"first",
                                            intensity:{ risk:0, reward:2 },
                                            doors:[
                                                { id:"door", doNotCrossTile:true },
                                                { id:"door", doNotCrossTile:true }
                                            ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"time" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            atTileId:"fourth",
                                            intensity:{ risk:0, reward:0 },
                                            onPathAdd:[
                                                [
                                                    { at:0.75, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.75, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true },
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            atTileId:"fourth",
                                            intensity:{ risk:0, reward:0 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true },
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            atTileId:"second",
                                            intensity:{ risk:1.5, reward:2 },
                                            doors:[
                                                { id:"door", className:"marked red" },
                                                { id:"door", className:"marked red" }
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        },{
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            atTileId:"third",
                                            intensity:{ risk:1.5, reward:2 },
                                            onPathAdd:[
                                                [
                                                    { at:0, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            doors:[
                                                { id:"door", className:"marked red" },
                                                { id:"door", className:"marked red" }
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]   
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"elementalLord",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"{label.hazard@0}" } ] }
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"corruption", isVisible:true }
                                                        ]
                                                    },{
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"{label.hazard@0}" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"{label.hazard@0}" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.2,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"{label.hazard@0}" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.4,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"{label.hazard@0}" } ] }
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"{label.hazard@0}" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.5,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.3, tokens:[ { id:"{label.hazard@0}" } ] }
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"theCure",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            atTileId:"second",
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                ],[
                                                    { at:0.85, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.85, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            intensity:{ risk:1, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"armorToBoss",
                            config:{
                                roomsExpectedRatio:[ 3 ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            atTileId:"fourth",
                                            intensity:{ risk:0, reward:0 },
                                            doors:[ { id:"door", className:"marked red" } ],
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] }
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:1,
                                                        tokens:[
                                                            { id:"corruption" },
                                                            { id:"spikeTrap" }
                                                        ]
                                                    },{
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true }
                                                        ]
                                                    },{
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"mob" },
                                                        ]
                                                    }
                                                ],[
                                                    {
                                                        atExposure:1,
                                                        tokens:[
                                                            { id:"corruption" },
                                                            { id:"bearTrap" }
                                                        ]
                                                    },{
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true }
                                                        ]
                                                    },{
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"mob" },
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            atTileId:"second",
                                            intensity:{ risk:1.3, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" },
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            atTileId:"third",
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.5, tokens:[ { id:"bearTrap" } ] }
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"fountain" },
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            atTileId:"fifth",
                                            isEmpty:true
                                        },{
                                            at:1,
                                            relevance:1,
                                            atTileId:"fifth",
                                            isEmpty:true
                                        },{
                                            at:1,
                                            relevance:1,
                                            atTileId:"fifth",
                                            isEmpty:true
                                        },{
                                            at:1,
                                            relevance:1,
                                            atTileId:"fifth",
                                            isEmpty:true
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"fallingDungeon",
                            config:{
                                roomsExpectedRatio:[ 3 ],
                                roomsDoorsDefaultType:[
                                    { id:"door", doNotCrossTile:true }
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"adventureAndBoss",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            doors:[ { id:"door", className:"marked red" }, { id:"door", className:"marked red" } ],
                                            intensity:{ risk:0, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"mob" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0,
                                            relevance:1,
                                            intensity:{ risk:0, reward:1 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"collectAndForge",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"forge" },
                                                            { id:"objective", flipped:true }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.25, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.25, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"targetsSmall",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            size:1,
                                            intensity:{ risk:1.3, reward:1.3 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.2,
                                            relevance:1,
                                            doors:[ { id:"door" } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.8,
                                            size:1,
                                            relevance:1,
                                            doors:[ { id:"door" } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" },
                                                            { id:"spikeTrap" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.6,
                                            relevance:1,
                                            doors:[ { id:"door" } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"capture",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:0.8,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            size:1,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    },{
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.6,
                                            relevance:1,
                                            size:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        tokens:[
                                                            { id:"fountain" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"doubleBoss",
                            config:{
                                roomsExpectedRatio:[ 6 ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            intensity:{ risk:0, reward:0 },
                                            doors:[ { id:"door", className:"marked red" } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.95,
                                            relevance:1,
                                            intensity:{ risk:0, reward:0 },
                                            doors:[ { id:"door", className:"marked red" } ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.75,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"fountain", flipped:true }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.75,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.85, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.85, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"forge", flipped:true }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.5,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"fountain", flipped:true }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"investigation",
                            config:{
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.4, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.4, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" },
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.4, tokens:[ { id:"spikeTrap" } ] },
                                                    { at:0.4, tokens:[ { id:"bearTrap" } ] },
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" },
                                                            { id:"time" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.6,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true },
                                                            { id:"corruption" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.6,
                                            relevance:1,
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective", flipped:true },
                                                            { id:"time" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },{
                            attribute:"gameMode",
                            value:"towerDefense",
                            config:{
                                roomsExpectedRatio:[ 0 ],
                                roomsContent:[
                                    [
                                        {
                                            at:1,
                                            atTileId:"first",
                                            relevance:1,
                                            doors:[ { id:"door", flipped:true, doNotCrossTile:true } ],
                                            intensity:{ risk:0, reward:0 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"fountain" },
                                                            { id:"fountain" },
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:1,
                                            atTileId:"first",
                                            relevance:1,
                                            doors:[ { id:"door", flipped:true, doNotCrossTile:true } ],
                                            intensity:{ risk:0, reward:0 },
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"forge" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },
                    ]
                }
            ]
        }
    ]

});