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
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal" } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]}
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:0, tokens:[ { id:"startMob" } ]}
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
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal" } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]}
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:0, tokens:[ { id:"startMob" } ]}
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
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:false },
                                        { at:0.95, tokens:[ { id: "regularPortal" } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]}
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:0, tokens:[ { id:"startMob" } ]}
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
                                                ]
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
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal" } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]},
                                                { atCell:6, tokens:[ { id:"startMob" } ]},
                                                { atCell:11, tokens:[ { id:"startMob" } ]},
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
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:false },
                                        { at:0.95, tokens:[ { id: "regularPortal" } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]},
                                                { atCell:6, tokens:[ { id:"startMob" } ]},
                                                { atCell:11, tokens:[ { id:"startMob" } ]},
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
                                        { at:0.5, tokens:[ { id: "regularPortal" } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:false },
                                        { at:0.9, tokens:[ { id: "portal3" } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]},
                                                { atCell:6, tokens:[ { id:"startMob" } ]}
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
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:false },
                                        { at:0.95, tokens:[ { id: "regularPortal" } ], allowBridge:false },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]},
                                                { atCell:6, tokens:[ { id:"startMob" } ]},
                                                { atCell:11, tokens:[ { id:"startMob" } ]},
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
                                                { atCell:0, tokens:[ { id:"startPoint" }]},
                                                { atCell:6, tokens:[ { id:"startMob" } ]},
                                                { atCell:11, tokens:[ { id:"startMob" } ]},
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
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal" } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]},
                                                { at:1, tokens:[ { id:"startRoaming" } ]},
                                                { atCell:6, tokens:[ { id:"startMob" } ]},
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
                                                { at:1, tokens:[ { id:"startPoint" }, { id: "regularPortal" } ]},
                                                { at:0, tokens:[ { id:"objective", flipped:true } ] },
                                                { at:0.5, tokens:[ { id:"spikeTrap" } ] }
                                            ]
                                        },
                                        {
                                            atTileId:"second",
                                            elements:[
                                                { at:1, tokens:[ { id:"startPoint" }, { id: "greenPortal" }]},
                                                { at:0, tokens:[ { id:"objective", flipped:true } ] },
                                                { at:0.5, tokens:[ { id:"spikeTrap" } ] }
                                            ]
                                        },
                                        {
                                            atTileId:"third",
                                            elements:[
                                                { at:1, tokens:[ { id:"startPoint" }, { id: "greenPortal" }]},
                                                { at:0, tokens:[ { id:"objective", flipped:true } ] },
                                                { at:0.5, tokens:[ { id:"bearTrap" } ] },
                                                { at:0.5, tokens:[ { id:"fountain" } ] }
                                            ]
                                        },
                                        {
                                            atTileId:"fourth",
                                            elements:[
                                                { at:1, tokens:[ { id:"startPoint" }, { id: "greenPortal" }]},
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
                            value:"flaming",
                            config:{
                                
                                corridorsPillarsMinDistance:[ 5 ],
                                corridorsSpawnPoints:[
                                    [
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:true },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:true },
                                        { at:0.95, tokens:[ { id: "regularPortal" } ], allowBridge:true },
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]},
                                                { atCell:6, tokens:[ { id:"startMob" } ]},
                                                { atCell:11, tokens:[ { id:"startMob" } ]},
                                            ]
                                        },{
                                            elements:[
                                                { at:1, tokens:[ { id:"fire" }]},
                                                { at:0.8, tokens:[ { id:"fire" } ]}
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
                                        { at:0.5, tokens:[ { id: "portal3" } ], allowBridge:false },
                                        { at:0.055, tokens:[ { id: "portal5" } ], allowBridge:false }
                                    ]
                                ],
                                corridorsContent:[
                                    [
                                        {
                                            elements:[
                                                { atCell:0, tokens:[ { id:"startPoint" }]},
                                                { atCell:6, tokens:[ { id:"startMob" } ]},
                                                { atCell:11, tokens:[ { id:"startMob" } ]},
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
                                                { at:0.5, tokens:[ { id: "regularPortal" } ] }
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
                                    { tokensPerRoomLimit:{ mob:3, fire:1 }, tokensPerRoomCellLimit:{ mob:1, fire:1 } }
                                ]
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
                        },
                        {
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
                                                            { id:"corruption" }
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
                            value:"flamesLord",
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
                                                    { at:0.25, tokens:[ { id:"fire" } ] }
                                                ]
                                            ],
                                            add:[
                                                [
                                                    {
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"corruption" }
                                                        ]
                                                    },{
                                                        atExposure:-1,
                                                        tokens:[
                                                            { id:"objective" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fire" }
                                                        ]
                                                    },{
                                                        tokens:[
                                                            { id:"fire" }
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
                                                            { id:"fire" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.4,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.5, tokens:[ { id:"fire" } ] }
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
                                                            { id:"fire" }
                                                        ]
                                                    }
                                                ]
                                            ]
                                        },{
                                            at:0.5,
                                            relevance:1,
                                            onPathAdd:[
                                                [
                                                    { at:0.3, tokens:[ { id:"fire" } ] }
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
                        }
                    ]
                }
            ]
        }
    ]

});