MapGenerator=(function() {

    const
        BRIDGE_ATTEMPTS = 5,
        MAPCENTER_X=3*50,
        MAPCENTER_Y=3*50,
        BRIDGE_TILESTRATEGY = { isBridge:true },
        GETLABEL_LANGUAGE = "EN",
        GETLABEL_FLAGS = {},
        DEFAULT_ROOMSDOORSTYPE={ id:"door" },
        DEFAULT_ROOMLIMITS={ tokensPerRoomLimit:{}, tokensPerRoomCellLimit:{} },
        DEFAULT_ROOMSEXPECTEDRATIO=1.1;

    // --- Math & Data structures

    function calculateDistance(p1,p2) {
        let
            a = p1.x - p2.x;
            b = p1.y - p2.y;

        return Math.sqrt( a*a + b*b );
    }

    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function rotateCell(cell) {
        let
            out=clone(cell);
        for (let i=0;i<4;i++)
            out.walls[i]=cell.walls[(i+3)%4];
        return out;
    }

    function getItemIdAtPercentage(path,perc) {
        let
            pos=Math.floor((path.length-1)*perc);
        return pos;
    }

    function getItemValueAtPercentage(path,perc) {
        return path[getItemIdAtPercentage(path,perc)];
    }

    function getItemAtPercentage(path,perc) {
        let
            pos=getItemIdAtPercentage(path,perc),
            value=path[pos];
        path.splice(pos,1);
        return value;
    }

    function createBag(list) {
        return {
            list:list,
            left:[],
            checkCycle:function() {
                if (!this.left.length)
                    this.left = this.list.slice();
            },
            remove:function(item) {
                let
                    pos = this.left.indexOf(item);
                if (pos != -1)
                    this.left.splice(pos,1);
            },
            delete:function(item) {
                let
                    pos = this.list.indexOf(item);
                if (pos != -1)
                    this.list.splice(pos,1);
                this.remove(item);
            },
            pick:function() {
                this.checkCycle();
                return pickRandomElement(this.left);
            }
        }
    }

    // --- Random-related functions

    let seed;

    function random(max) {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280 * max;
    }

    function pickRandomElementId(list) {
        return Math.floor(random(list.length));
    }

    function pickRandomElementValue(list) {
        return list[pickRandomElementId(list)];
    }

    function pickRandomElement(list) {
        let
            pos = pickRandomElementId(list),
            element = list[pos];
        list.splice(pos,1);
        return element;
    }

    // --- Data preparation

    function addTileRotations(angles) {
        for (let i=0;i<3;i++) {
            let
                newTile=[];
            for (let oy=0;oy<angles[i].length;oy++)
                for (let ox=0;ox<angles[i][0].length;ox++) {
                    let
                        dx=angles[0][0].length-oy-1,
                        dy=ox;
                    if (!newTile[dy]) newTile[dy]=[];
                    newTile[dy][dx]=rotateCell(angles[i][oy][ox]);
                }
            angles.push(newTile);
        }
    }

    // --- Tokens

    function getToken(resources,result,tokenModel,hidden,map) {
        
        let
            token = clone(tokenModel);
        
        token.isHidden = hidden;
        token.id = Labels.getLabel(GETLABEL_FLAGS,resources,result,GETLABEL_LANGUAGE,token.id);

        if (resources.tokensAvailable[token.id]) {
            let
                usedTokenId = token.id;

            if (resources.tokensMetadata[usedTokenId]) {
                if (resources.tokensMetadata[usedTokenId].aggregateTo)
                    usedTokenId = resources.tokensMetadata[usedTokenId].aggregateTo;
                if (token.flipped && resources.tokensMetadata[usedTokenId].splitFlippedTo)
                    usedTokenId = resources.tokensMetadata[usedTokenId].splitFlippedTo;
            }
            if (!map.usedTokens[usedTokenId])
                map.usedTokens[usedTokenId]=0;
            map.usedTokens[usedTokenId]++;
            if (!hidden) {
                if (!map.visibleUsedTokens[usedTokenId])
                    map.visibleUsedTokens[usedTokenId]=0;
                map.visibleUsedTokens[usedTokenId]++;
            }
            resources.tokensAvailable[token.id]--;
            return token;
        }
    }

    function addToken(resources,result,token,hidden,map,pos) {

        let
            cell = isCoordInMap(map,pos.x,pos.y);

        if (cell) {
            let
                pickedToken = getToken(resources,result,token,hidden,map);

            if (pickedToken) {
                if (!cell.tokensIndex[pickedToken.id]) cell.tokensIndex[pickedToken.id]=1;
                else cell.tokensIndex[pickedToken.id]++;
                cell.tokens.push(pickedToken);
                cell.tileData.tokensCount++;
                return true;
            }
        }
    }

    // --- Map cells getters/testers

    function isCellCorridor(cell) {
        return !cell.isBlocking && !cell.isRoom
    }

    function isCoordInMap(map,x,y) {
        return map.grid[y] && map.grid[y][x] ? map.grid[y][x] : false;
    }

    function addWall(map,x,y,by) {
        if (!map.walls[y]) map.walls[y] = [];
        map.walls[y][x] = by;
        removeExit(map,x,y);
    }

    function isCoordWall(map,x,y) {
        return map.walls[y] && map.walls[y][x] ? map.walls[y][x] : false;
    }

    function isCoordCorridor(map,x,y) {
        return isCoordInMap(map,x,y) && isCellCorridor(map.grid[y][x]) ? map.grid[y][x] : false;
    }

    function isCoordWithDoor(map,cell,x,y) {
        let
            testingCell = isCoordInMap(map,cell.x+x,cell.y+y);

        if (testingCell && testingCell.hasDoor) {
            return true;
        } else
            return false;
    }

    function removeBridge(map,bridge) {

        let
            pos = map.index.indexOf(bridge);


        if (pos != -1) {

            let
                side = bridge.tile.sides[bridge.side];
        
            side.angles[bridge.angle].forEach((row,y)=>{
                row.forEach((col,x)=>{
                    delete map.grid[y+bridge.at.y][x+bridge.at.x];
                })
            });

            map.walls.forEach((row,y)=>{
                row.forEach((cell,x)=>{
                    if (cell === side)
                        map.walls[y][x] = false;
                })
            });

            map.index.splice(pos,1);

        }
    }

    function analyzeBridge(map,x,y) {

        let
            cell,
            joinedSides = 0,
            limitX = x,
            limitY = y;
        
        if (cell=isCoordInMap(map,x-1,y)) {
            limitX+=3;
            if (isCellCorridor(cell)) joinedSides++;
        }
        if (cell=isCoordInMap(map,x+1,y)) {
            limitX-=3;
            if (isCellCorridor(cell)) joinedSides++;
        }
        if (cell=isCoordInMap(map,x,y-1)) {
            limitY+=3;
            if (isCellCorridor(cell)) joinedSides++;
        }
        if (cell=isCoordInMap(map,x,y+1)) {
            limitY-=3;
            if (isCellCorridor(cell)) joinedSides++;
        }

        return {
            joinedSides:joinedSides,
            limitX:limitX,
            limitY:limitY
        }

    }

    // --- Map generation

    function pickTile(tiles,tile) {
        let
            pos = tiles.indexOf(tile);
        if (pos != -1)
            tiles.splice(pos,1);
    }

    function pasteTile(tile,side,angle,px,py,map) {
        let
            tileSide=tile.sides[side],
            tileFace=tileSide.angles[angle],
            grid=map.grid,
            ex,ey,
            tileData;

        tileData={
            at:{x:px, y:py},
            tile:tile,
            side:side,
            angle:angle,
            tokensCount:0
        };
        
        map.index.push(tileData);
        if (tileSide.specialRules)
            tileSide.specialRules.forEach(rule=>{
                if (map.specialRules.indexOf(rule) == -1)
                    map.specialRules.push(rule);
            })

        tileFace.forEach((row,y)=>{
            ey=y+=py;
            if (ey<map.oy) {
                map.height+=map.oy-ey;
                map.oy=ey;
            }
            if (ey>=map.oy+map.height)
                map.height=ey-map.oy+1;
            row.forEach((cell,x)=>{
                ex=x+=px;
                if (ex<map.ox) {
                    map.width+=map.ox-ex;
                    map.ox=ex;
                }
                if (ex>=map.ox+map.width)
                    map.width=ex-map.ox+1;
                
                if (!grid[y]) grid[y]=[];
                
                cell.x=x;
                cell.y=y;
                cell.tokensIndex={};
                cell.tokens=[];
                cell.doors=[];
                cell.tileData=tileData;
                cell.id=x+","+y;
                grid[y][x]=cell;

                removeExit(map,x,y);
                
            })
        });

        if (tileSide.isBridge) {
            if (isCoordCorridor(map,px-1,py) || isCoordCorridor(map,px+1,py)) {
                addWall(map,px,py-1,tileSide);
                addWall(map,px,py+1,tileSide);
            } else {
                addWall(map,px-1,py,tileSide);
                addWall(map,px+1,py,tileSide);
            }
        }

        let
            exits=map.exits;
        for (let x=px;x<=ex;x++)
            for (let y=py;y<=ey;y++) {
                let
                    cell=grid[y][x];
                if (!cell.walls[0] && !isCoordInMap(map,x,y-1) && !isCoordWall(map,x,y-1))
                    exits.push({ side:tileSide, from:{ x:x, y:y, direction:0 }, to:{ x:x, y:y-1, direction:2 }});
                if (!cell.walls[1] && !isCoordInMap(map,x+1,y) && !isCoordWall(map,x+1,y))
                    exits.push({ side:tileSide, from:{ x:x, y:y, direction:1 }, to:{ x:x+1, y:y, direction:3 }});
                if (!cell.walls[2] && !isCoordInMap(map,x,y+1) && !isCoordWall(map,x,y+1))
                    exits.push({ side:tileSide, from:{ x:x, y:y, direction:2 }, to:{ x:x, y:y+1, direction:0 }});
                if (!cell.walls[3] && !isCoordInMap(map,x-1,y) && !isCoordWall(map,x-1,y))
                    exits.push({ side:tileSide, from:{ x:x, y:y, direction:3 }, to:{ x:x-1, y:y, direction:1 }});
            }

        return tileData;
    }

    function findExitsToPosition(map,x,y) {
        return map.exits.filter(exit=>(exit.to.x==x) && (exit.to.y == y));
    }

    function removeExit(map,x,y) {
        map.exits=map.exits.filter(exit=>!(( exit.to.x == x ) && (exit.to.y == y)));
    }

    function findFittingTiles(map,sides) {
        let
            fits=[];
        map.exits.forEach(exit=>{
            sides.forEach(side=>{
            
                // Is there space for a tile?
                let
                    sampleSide=side.tile.sides[side.side].angles[0],
                    width=sampleSide.length,
                    height=sampleSide[0].length,
                    sx=exit.to.x-width+1,
                    sy=exit.to.y-height+1,
                    ex=exit.to.x,
                    ey=exit.to.y

                for (let x=sx;x<=ex;x++)
                    for (let y=sy;y<=ey;y++) {

                        let
                            isFitting=true;
                        for (let tx=0;tx<width;tx++)
                            for (let ty=0;ty<height;ty++)
                                if (isCoordInMap(map,x+tx,y+ty) || isCoordWall(map,x+tx,y+ty)) {
                                    isFitting=false;
                                    break;
                                }
                        
                        if (isFitting) {
                            side.tile.sides[side.side].angles.forEach((angle,angleId)=>{

                                let
                                    exitCell = angle[exit.to.y-y][exit.to.x-x];

                                if (isCellCorridor(exitCell) && !exitCell.walls[exit.to.direction]) {
                                        
                                    // Find fitting exits
                                    let
                                        exitsClosed=0,
                                        exitsContinued=0;

                                    for (let tx=0;tx<width;tx++)
                                        for (let ty=0;ty<height;ty++) {
                                            let
                                                cell=angle[ty][tx],
                                                cellIsBlocking=!isCellCorridor(cell),
                                                exits=findExitsToPosition(map,x+tx,y+ty);
                                            exits.forEach(exit=>{
                                                // TODO: It counts the corners twice, making corner-closing tiles less probable. Anyway, it may be OK.
                                                if (cellIsBlocking || cell.walls[exit.to.direction])
                                                    exitsClosed++;
                                                else
                                                    exitsContinued++;
                                            });
                                        }

                                    if (exitsContinued>0)
                                        fits.push({
                                            side:side,
                                            angle:angleId,
                                            exitsClosed:exitsClosed,
                                            exitsContinued:exitsContinued,
                                            at:{x:x, y:y}
                                        });

                                }
                            });
                        }
                    }
            });
        });
        return fits;
    }

    function getStrategyValue(id,mapStrategy,tileStrategy) {
        return tileStrategy[id] === undefined ? mapStrategy[id] : tileStrategy[id];
    }

    function getBestFittingTile(map,fits,mapStrategy,tileStrategy) {

        let
            highestScore,
            subfits=[],
            mapNoSquaresScore = getStrategyValue("mapNoSquaresScore",mapStrategy,tileStrategy),
            mapDistanceScore = getStrategyValue("mapDistanceScore",mapStrategy,tileStrategy),
            mapRightmostScore = getStrategyValue("mapRightmostScore",mapStrategy,tileStrategy),
            noSquares = getStrategyValue("noSquares",mapStrategy,tileStrategy),
            mapAsGrid = getStrategyValue("mapAsGrid",mapStrategy,tileStrategy),
            mapMaxHeight = getStrategyValue("mapMaxHeight",mapStrategy,tileStrategy),
            mapMaxWidth = getStrategyValue("mapMaxWidth",mapStrategy,tileStrategy);
            at = getStrategyValue("at",mapStrategy,tileStrategy);

        fits.forEach(fit=>{

            let
                isOk = true,
                tile = fit.side.tile,
                side = tile.sides[fit.side.side],
                angle = side.angles[fit.angle],
                tileHeight = angle.length,
                tileWidth = angle[0].length,
                score = 0,
                newMapWidth = map.width,
                newMapHeight = map.height;

            if (tileStrategy.isBridge) {

                let
                    bridgeData = analyzeBridge(map,fit.at.x,fit.at.y);

                if (bridgeData.limitY<map.oy)
                    newMapHeight+=map.oy-bridgeData.limitY;
                if (bridgeData.limitY+tileHeight>map.oy+map.height)
                    newMapHeight=bridgeData.limitY+tileHeight-map.oy;

                if (bridgeData.limitX<map.ox)
                    newMapWidth+=map.ox-bridgeData.limitX;
                if (bridgeData.limitX+tileWidth>map.ox+map.width)
                    newMapWidth=bridgeData.limitX+tileWidth-map.ox;

                if (mapMaxWidth)
                    score += newMapWidth - mapMaxWidth;

                if (mapMaxHeight)
                    score += newMapHeight - mapMaxHeight;

                if (bridgeData.joinedSides > 1)
                    isOk = false;

            } else {

                if (fit.at.y<map.oy)
                    newMapHeight+=map.oy-fit.at.y;
                if (fit.at.y+tileHeight>map.oy+map.height)
                    newMapHeight=fit.at.y+tileHeight-map.oy;

                if (fit.at.x<map.ox)
                    newMapWidth+=map.ox-fit.at.x;
                if (fit.at.x+tileWidth>map.ox+map.width)
                    newMapWidth=fit.at.x+tileWidth-map.ox;
                
            }

            if (mapMaxWidth && (newMapWidth > mapMaxWidth))
                isOk = false;

            if (mapMaxHeight && (newMapHeight > mapMaxHeight))
                isOk = false;

            if (mapAsGrid && !tileStrategy.isBridge && ((fit.at.x%3)||(fit.at.y%3)))
                isOk = false;
            
            if (noSquares && (fit.exitsContinued != 1))
                isOk = false;

            if (at && ((fit.at.x != MAPCENTER_X + at.x) || (fit.at.y != MAPCENTER_Y + at.y)))
                isOk = false;

            if (mapNoSquaresScore && (fit.exitsContinued > 1 ))
                score+=fit.exitsContinued*mapNoSquaresScore;

            if (mapDistanceScore) 
                score += Math.ceil(calculateDistance(map.index[0].at,fit.at) * mapDistanceScore / 3);

            if (mapRightmostScore)
                score += (fit.at.x - map.ox) * mapRightmostScore / 3;

            if (isOk && (highestScore === undefined || (score >= highestScore))) {
                if ((highestScore === undefined || (score > highestScore))) {
                    subfits.length=0;
                    highestScore = score;
                }
                subfits.push(fit);
            }
        });

        if (subfits.length)
            return pickRandomElementValue(subfits);
        else {
            return 0;
        }
    }

    function findFittingSides(sides,criteria,skin) {
        let
            fittingSides = [];
        sides.forEach((side,sideId)=>{
            if (!skin || (side.skins.indexOf(skin) != -1)) {
                let
                    ok = true;
                if (criteria.includeTags) {
                    criteria.includeTags.forEach(conditions=>{
                        let
                            conditionOk = false;
                        conditions.forEach(tag=>{
                            if (side.tags.indexOf(tag) != -1)
                                conditionOk = true;
                        });
                        ok &= conditionOk;
                    });
                }
                if (ok && criteria.excludeTags)
                    criteria.excludeTags.forEach(tag=>{
                        if (side.tags.indexOf(tag) != -1)
                            ok = false;
                    });
                
                if (ok)
                    fittingSides.push(sideId);
            }
        });
        return fittingSides;
    }

    function generateMap(resources,result,map,attempt,skins,mapConfig) {

        // --- Plan usable sides for each step
        let
            // Bridges makes grid maps irregular so bridges are disabled.
            attemptBridgeAt = !mapConfig.mapAsGrid && (attempt < BRIDGE_ATTEMPTS) ? mapConfig.mapBridgesAt === undefined ? -1 : Math.floor((mapConfig.mapTiles.length-1)*mapConfig.mapBridgesAt) : -1,
            tilesPerRequirement=[],
            tilesPerRequirementBySkin = [];

        map.requiredTiles = mapConfig.mapTiles.length;
        map.placedTiles = 0;
        map.tilesById = {};

        if (mapConfig.mapSameSkin) {

            // Select a skin that may fit the tiles requirement
            
            tilesPerRequirementBySkin = skins.map(skin=>{
                let
                    tilesPerRequirement,
                    isValid = true;
                tilesPerRequirement=mapConfig.mapTiles.map(requestedTile=>{
                    let
                        fittingTiles = [];
                    resources.tiles.forEach(tile=>{
                        let
                            fittingSides = findFittingSides(tile.sides,requestedTile,skin);
                        if (fittingSides.length)
                            fittingTiles.push({
                                tile:tile,
                                fittingSides:fittingSides
                            });
                    });
                    if (!fittingTiles.length) {
                        isValid = false;
                        return 0;
                    } else
                        return fittingTiles;
                });
                if (isValid)
                    return tilesPerRequirement;
                else
                    return 0;
            }).filter(list=>list != 0);

            tilesPerRequirement = pickRandomElementValue(tilesPerRequirementBySkin);

        } else {

            tilesPerRequirement=mapConfig.mapTiles.map(requestedTile=>{
                let
                    fittingTiles = [];
                resources.tiles.forEach(tile=>{
                    let
                        fittingSides = findFittingSides(tile.sides,requestedTile);
                    if (fittingSides.length)
                        fittingTiles.push({
                            tile:tile,
                            fittingSides:fittingSides
                        });
                });
                if (!fittingTiles.length) {
                    isValid = false;
                    return 0;
                } else
                    return fittingTiles;
            });

        }

        // Place the tiles

        if (tilesPerRequirement)
            tilesPerRequirement.forEach((tileset,id)=>{

                let
                    selectedSide,
                    selectedAngle,
                    selectedX,
                    selectedY,
                    availableSides = [],
                    subTilesPerRequirement = [],
                    filter = true;

                // Copies the tiles requirement map

                subTilesPerRequirement = tilesPerRequirement.map(row=>row.slice());

                // Reserve tiles for forced future selections

                while (filter) {

                    filter = false;
                    for (let i=id+1;i<subTilesPerRequirement.length;i++)
                        if (subTilesPerRequirement[i].length == 1) {
                            let
                                tileToRemove = subTilesPerRequirement[i][0].tile;
                            for (let j=id;j<subTilesPerRequirement.length;j++)
                                subTilesPerRequirement[j]=subTilesPerRequirement[j].filter(tile=>{
                                    return tile.tile!=tileToRemove;
                                });
                            filter=true;
                        }
                }

                // Prepare remaining tiles

                subTilesPerRequirement[id].forEach(tile=>{
                    tile.fittingSides.forEach(side=>{
                        availableSides.push({
                            tile:tile.tile,
                            side:side
                        });
                    });
                });

                // Select & Paste a tile

                if (availableSides.length) {

                    if (id == 0) {

                        selectedSide = pickRandomElementValue(availableSides),
                        selectedAngle = pickRandomElementId(selectedSide.tile.sides[selectedSide.side].angles);
                        selectedX = map.ox;
                        selectedY = map.oy;

                    } else {

                        let
                            fits=findFittingTiles(map,availableSides),
                            fit=getBestFittingTile(map,fits,mapConfig,mapConfig.mapTiles[id]);

                        if (fit) {
                            selectedSide = fit.side;
                            selectedAngle = fit.angle;
                            selectedX = fit.at.x;
                            selectedY = fit.at.y;
                        }
                    }

                    if (selectedSide) {

                        let
                            pastedTile;

                        map.placedTiles++;
                        pickTile(resources.tiles,selectedSide.tile);
                        pastedTile = pasteTile(selectedSide.tile,selectedSide.side,selectedAngle,selectedX,selectedY,map);
                        if (mapConfig.mapTiles[id].tileId) {
                            let
                                tileId = mapConfig.mapTiles[id].tileId;
                            map.tilesById[tileId] = pastedTile;
                            pastedTile.tileId = tileId;
                        }

                        for (let i=id;i<tilesPerRequirement.length;i++)
                            tilesPerRequirement[i]=tilesPerRequirement[i].filter(tile=>{
                                return tile.tile != selectedSide.tile;
                            });
                    }

                }

                // Add a bridge, if needed
                
                if ((attemptBridgeAt != -1) && (id >= attemptBridgeAt) && (mapConfig.mapMaxHeight || mapConfig.mapMaxWidth)) {

                    let
                        fits=findFittingTiles(map,[
                            {
                                side:0,
                                tile:clone(resources.bridge)
                            }
                        ]),
                        fit=getBestFittingTile(map,fits,mapConfig,BRIDGE_TILESTRATEGY);
                        
                        if (fit) {
                            attemptBridgeAt = -1;
                            map.hasBridge = pasteTile(fit.side.tile,fit.side.side,fit.angle,fit.at.x,fit.at.y,map);
                        }

                }


            });
    
        // Remove orphaned bridge
        if (map.hasBridge) {

            let
                bridgeData = analyzeBridge(map,map.hasBridge.at.x,map.hasBridge.at.y);

            if (bridgeData.joinedSides < 2) {
                removeBridge(map,map.hasBridge);
                map.hasBridge = 0;
                map.bridgeRemoved = true;
            }

        }

        if (map.hasBridge)
            getToken(resources,result,{ id:"bridge" },false,map);
                            
        map.isValid = map.placedTiles == map.requiredTiles;
    }

    // --- Map features analysis

    function crawlRoomCell(cells,roomId,map,dx,dy,oppositeDirection,x,y,direction) {
        let
            startingCell =  isCoordInMap(map,x,y),
            destinationCell = isCoordInMap(map,dx,dy);
        if (oppositeDirection === undefined || (!startingCell.walls[direction] && destinationCell && (destinationCell.roomId === undefined) && !destinationCell.isBlocking && !destinationCell.walls[oppositeDirection])) {
            cells.push(destinationCell);
            destinationCell.roomId=roomId;
            crawlRoomCell(cells,roomId,map,dx,dy-1,2,dx,dy,0);
            crawlRoomCell(cells,roomId,map,dx+1,dy,3,dx,dy,1);
            crawlRoomCell(cells,roomId,map,dx,dy+1,0,dx,dy,2);
            crawlRoomCell(cells,roomId,map,dx-1,dy,1,dx,dy,3);
        }
    }

    function crawlCorridorCell(paths,map,dx,dy,oppositeDirection,x,y,direction,route) {
        let
            startingCell =  isCoordInMap(map,x,y),
            destinationCell = isCoordInMap(map,dx,dy);
        if (oppositeDirection === undefined || (!startingCell.walls[direction] && destinationCell && !destinationCell.isBlocking && !destinationCell.walls[oppositeDirection])) {
            let
                id=destinationCell.id;
            if (!route) route=[];
            else route=route.slice();
            route.push(destinationCell);
            if (!paths[id] || (paths[id].length>route.length)) {
                paths[id]=route;
                crawlCorridorCell(paths,map,dx,dy-1,2,dx,dy,0,route);
                crawlCorridorCell(paths,map,dx+1,dy,3,dx,dy,1,route);
                crawlCorridorCell(paths,map,dx,dy+1,0,dx,dy,2,route);
                crawlCorridorCell(paths,map,dx-1,dy,1,dx,dy,3,route);
            }
        }
    }

    function analyzeMap(resources,map) {

        if (map.index.length) {

            map.exits.length=0;

            let
                ex=map.ox+map.width,
                ey=map.oy+map.height,
                farthestCell,
                longestPath=0,
                deadEnds=[],
                rooms=[],
                roomId=-1;

            for (let y=map.oy;y<ey;y++) {
                for (let x=map.ox;x<ex;x++) {

                    let
                        testingCell,
                        cell = isCoordInMap(map,x,y);

                    if (cell && !cell.isBlocking) {

                        // Close walls on maps edge
                        if (!cell.walls[0] && (!(testingCell = isCoordInMap(map,x,y-1)) || testingCell.isBlocking || testingCell.walls[2]))
                            cell.walls[0]=true;
                        if (!cell.walls[1] && (!(testingCell = isCoordInMap(map,x+1,y)) || testingCell.isBlocking || testingCell.walls[3]))
                            cell.walls[1]=true;
                        if (!cell.walls[2] && (!(testingCell = isCoordInMap(map,x,y+1)) || testingCell.isBlocking || testingCell.walls[0]))
                            cell.walls[2]=true;
                        if (!cell.walls[3] && (!(testingCell = isCoordInMap(map,x-1,y)) || testingCell.isBlocking || testingCell.walls[1]))
                            cell.walls[3]=true;

                        // Find rooms
                        if (cell.isRoom && (cell.roomId === undefined)) {
                            let
                                cells=[];
                            roomId++;
                            crawlRoomCell(cells,roomId,map,x,y);
                            rooms[roomId]={
                                id:roomId,
                                distance:0,
                                hasBridge:false,
                                bridgeRemoved:false,
                                doors:[],
                                intensity:{ risk:0, reward:0 },
                                onPathAdd:[],
                                add:[],
                                exits:[],
                                relevance:0,
                                size:0,
                                cells:cells,
                                tileData:cells[0].tileData
                            }
                        }

                        if (!cell.isRoom) {

                            // Find dead ends
                            let exits=0;
                            cell.walls.forEach(wall=>{
                                if (!wall ) exits++;
                            });

                            if (exits == 1) {
                                deadEnds.push({ x:x, y:y });
                                cell.isDeadEnd=true;
                            }

                            // Find paths
                            let
                                paths = {};
                            crawlCorridorCell(paths,map,x,y);
                            cell.paths=paths;

                            // If it's the starting tile, find the farthest cell
                            if (cell.tileData == map.index[0])
                                for (let k in paths)
                                    if (!longestPath || (paths[k].length > longestPath)) {
                                        longestPath = paths[k].length;
                                        farthestCell = cell;
                                    }
                        }
                    }
                }
            }

            // Finalize corridors

            map.longestPath = longestPath;
            map.startPoint = farthestCell;
            map.corridorCellsByDistance = [];
            for (let k in map.startPoint.paths) {
                let
                    path = map.startPoint.paths[k],
                    destination = path[path.length-1],
                    distance = path.length-1;
                if (distance)
                    map.corridorCellsByDistance.push({distance:distance, destination:destination});
            }
            map.corridorCellsByDistance.sort((a,b)=>{
                if (a.distance > b.distance) return 1;
                else if (a.distance < b.distance) return -1;
                else return 0;
            })

            map.startPoint.isStartPoint=true;

            // Finalize rooms

            map.rooms = rooms;
            map.busyRooms = 0;

            rooms.forEach(room=>{

                let
                    testingCell,
                    distance = 1000;

                room.size = room.cells.length;

                room.cells.forEach(cell=>{

                    let exposedSides = 0;

                    if (testingCell = isCoordCorridor(map,cell.x,cell.y-1)) {
                        distance = Math.min(distance,map.startPoint.paths[testingCell.id].length);
                        exposedSides++;
                    }

                    if (testingCell = isCoordCorridor(map,cell.x+1,cell.y)) {
                        distance = Math.min(distance,map.startPoint.paths[testingCell.id].length);
                        exposedSides++;
                    }

                    if (testingCell = isCoordCorridor(map,cell.x,cell.y+1)) {
                        distance = Math.min(distance,map.startPoint.paths[testingCell.id].length);
                        exposedSides++;
                    }

                    if (testingCell = isCoordCorridor(map,cell.x-1,cell.y)) {
                        distance = Math.min(distance,map.startPoint.paths[testingCell.id].length);
                        exposedSides++;
                    }

                    cell.exposedSides=exposedSides;

                });

                room.distance = distance;

            });

        }
            
    }

    // --- Spawn points management

    function addSpawnPoint(resources,result,map,tokens,point,allowBridge) {
        
        // Add mobs spawn points
        let
            spawnPoint = point.destination,
            spawnPoints = [];

        if (allowBridge && !spawnPoint.isDeadEnd && resources.tokensAvailable.bridge) {

            if (!isCoordInMap(map,spawnPoint.x,spawnPoint.y-1) && !isCoordWall(map,spawnPoint.x,spawnPoint.y-1))
                spawnPoints.push({ x:spawnPoint.x, y:spawnPoint.y-1 });

            if (!isCoordInMap(map,spawnPoint.x+1,spawnPoint.y) && !isCoordWall(map,spawnPoint.x+1,spawnPoint.y))
                spawnPoints.push({ x:spawnPoint.x+1, y:spawnPoint.y });

            if (!isCoordInMap(map,spawnPoint.x,spawnPoint.y+1) && !isCoordWall(map,spawnPoint.x,spawnPoint.y+1))
                spawnPoints.push({  x:spawnPoint.x, y:spawnPoint.y+1 });

            if (!isCoordInMap(map,spawnPoint.x-1,spawnPoint.y) && !isCoordWall(map,spawnPoint.x-1,spawnPoint.y))
                spawnPoints.push({ x:spawnPoint.x-1, y:spawnPoint.y });

            if (spawnPoints.length) {
                getToken(resources,result,{ id:"bridge" },false,map);
                spawnPoint = pickRandomElementValue(spawnPoints);
                pasteTile(clone(resources.bridge),0,0,spawnPoint.x,spawnPoint.y,map);
            }

        }

        tokens.forEach(token=>{
            addToken(resources,result,token,false,map,spawnPoint);
        });
        
    }

    function countWalls(cell) {
        let
            walls=0;
        cell.walls.forEach(wall=>{
            if (wall) walls++;
        });
        return walls;
    }

    function assignRooms(resources,map,requirements,defaults) {

        if (map.rooms && map.rooms.length) {
               
            if (requirements)
                requirements.forEach(requirement=>{
                    let
                        roomFound = false,
                        pickedRoom,
                        subrooms=[];

                    // Get fitting rooms
                    map.rooms.forEach(room=>{
                        let
                            roomIdMatches = false;

                        if (requirement.atTileId && (room.tileData.tileId == requirement.atTileId))
                            roomIdMatches = roomFound = true;

                        if (
                            !room.isBusy &&
                            (!requirement.atTileId || roomIdMatches)
                        )
                            subrooms.push(room);
                    });

                    if (requirement.atTileId && !roomFound)
                        console.warn("Can't find tile",requirement.atTileId);
                    
                    if (subrooms.length) {

                        let
                            intensity = requirement.intensity || defaults;

                        if (subrooms.length == 0)
                            pickedRoom = subrooms[0];
                        else if (
                            (requirement.at !== undefined) ||
                            (requirement.size !== undefined)
                        ) {

                            // Position/size selection
                            subrooms.sort((a,b)=>{
                                if (requirement.size !== undefined) {
                                    if (a.size > b.size) return -requirement.size;
                                    else if (a.size < b.size) return requirement.size;
                                }
                                if (requirement.at !== undefined) {
                                    if (a.distance > b.distance) return 1;
                                    else if (a.distance < b.distance) return -1;
                                }
                                else return 0;
                            });

                            if (requirement.size !== undefined)
                                subrooms = subrooms.filter(room=>room.size == subrooms[0].size);

                            if (requirement.at === undefined)
                                pickedRoom = subrooms[0];
                            else
                                pickedRoom = getItemAtPercentage(subrooms, requirement.at);
                                

                        } else {
                            
                            // Random selection
                            pickedRoom=pickRandomElementValue(subrooms);

                        }

                        if (intensity !== undefined) {
                            pickedRoom.intensity.risk = Math.max(pickedRoom.intensity.risk,intensity.risk);
                            pickedRoom.intensity.reward = Math.max(pickedRoom.intensity.reward,intensity.reward);
                        }

                        if (requirement.doors !== undefined)
                            requirement.doors.forEach(door=>{
                                pickedRoom.doors.push(door);
                            })

                        if (requirement.isEmpty)
                            pickedRoom.isEmpty = true;

                        if (requirement.onPathAdd)
                            requirement.onPathAdd.forEach(add=>{
                                pickedRoom.onPathAdd.push(add);
                            });

                        if (requirement.relevance !== undefined)
                            pickedRoom.relevance = Math.max(pickedRoom.relevance,requirement.relevance);

                        if (requirement.add) {
                            let
                                set = pickRandomElementValue(requirement.add);
                            set.forEach(item=>{
                                pickedRoom.add.push(item);
                            });
                        }

                        pickedRoom.isBusy = true;
                        map.busyRooms++;

                    }

                });

        }
    }

    // --- Corridors & Pillars

    function findCorridor(corridorMap,corridorsList,id,map,x,y,direction,dx,dy,minCorridorLength) {
        let
            processingCorridor = true,
            corridor = { length:0, cells:[], availableCells:[] };

        while (processingCorridor) {
            if ((!corridorMap[y] || !corridorMap[y][x] || (corridorMap[y][x][id] === undefined)) && isCoordCorridor(map,x,y)) {
                let
                    cell = isCoordInMap(map,x,y);
                corridor.cells.push(cell);
                if (!cell.walls[direction]) {
                    x+=dx;
                    y+=dy;
                } else processingCorridor = false;
            } else processingCorridor = false;
        }

        if (corridor.cells.length>=minCorridorLength) {
            corridor.length = corridor.cells.length;
            corridor.cells.forEach(cell=>{
                if (cell.tokens.length == 0)
                    corridor.availableCells.push(cell);
                if (!corridorMap[cell.y]) corridorMap[cell.y]=[];
                if (!corridorMap[cell.y][cell.x])
                    corridorMap[cell.y][cell.x]={};
                if (!corridorMap[cell.y][cell.x][id])
                    corridorMap[cell.y][cell.x][id]=corridor;
            });
            corridorsList.push(corridor);
        }
    }

    function addPillars(resources,result,map,minCorridorLength) {

        let
            corridorMap=[],
            corridorsList=[],
            ex=map.ox+map.width,
            ey=map.oy+map.height;

        for (let x=0;x<ex;x++)
            for (let y=0;y<ey;y++) {
                findCorridor(corridorMap,corridorsList,1,map,x,y,1,1,0,minCorridorLength);
                findCorridor(corridorMap,corridorsList,2,map,x,y,2,0,1,minCorridorLength);
            }

        corridorsList.forEach(corridor=>{
            let
                testingCell,
                pillarsNumber = Math.floor(corridor.length / minCorridorLength),
                pillarsDistance = 1/(pillarsNumber+1),
                pillarPosition = pillarsDistance;
            
            for (let i=0;i<pillarsNumber;i++) {
                half = getItemValueAtPercentage(corridor.availableCells,pillarPosition);
                if (!half.noPillars) {
                    half.noPillars = true;
                    addToken(resources,result,{ id:"pillar" },false,map,half);
                    if (testingCell = isCoordInMap(map,half.x,half.y-1)) testingCell.noPillars=true;
                    if (testingCell = isCoordInMap(map,half.x+1,half.y)) testingCell.noPillars=true;
                    if (testingCell = isCoordInMap(map,half.x,half.y+1)) testingCell.noPillars=true;
                    if (testingCell = isCoordInMap(map,half.x-1,half.y)) testingCell.noPillars=true;
                }
                pillarPosition+=pillarsDistance;
            }
            
        })

    }

    // --- Rooms

    function fillRoomWithIntensity(room, intensity) {
        
        if ((intensity.risk > 0) || (intensity.reward > 0)) {

            let
                roomRatio = room.distance + (room.cells.length / 2),
                mobs = Math.ceil(roomRatio / 9 * intensity.risk),
                value = Math.ceil(roomRatio / 4.2 * intensity.reward),
                regularChests,
                greaterChests;

            greaterChests = Math.floor(value / 4);
            value %= 4;

            regularChests = Math.floor(value / 2);
            value %= 2;

            for (let i=0;i<greaterChests;i++)
                room.add.push({ tokens:[ { id:"greaterChest" } ] });

            for (let i=0;i<regularChests;i++)
                room.add.push({ tokens:[ { id:"regularChest" } ] });

            for (let i=0;i<value;i++)
                room.add.push({ tokens:[ { id:"loot" } ] });
        
            for (let i=0;i<mobs;i++)
                room.add.push({ tokens:[ { id:"mob" } ] });

        }
    }

    function getExpectedDoorsCount(room) {
        return room.cells.length == 1 ? 1 : 2
    }

    function finalizeRoom(resources, result, map, room, limits) {

        let
            isRoomHidden = true,
            roomIndex = {};

        room.add.sort((a,b)=>{
            if (a.atExposure === undefined && (b.atExposure !== undefined)) return 1;
            else if (a.atExposure !== undefined && (b.atExposure === undefined)) return -1;
            else if (a.atExposure < b.atExposure) return -1;
            else if (a.atExposure > b.atExposure) return 1;
            else return 0;
        });

        room.add.forEach(item=>{
            let
                highestScore,
                bestCells;
                
            room.cells.map(cell=>{

                let
                    score = 0,
                    isOk = true;

                if (item.atExposure)
                    score += cell.exposedSides*item.atExposure*2;
                
                item.tokens.forEach(token=>{
                    if (limits.tokensPerRoomCellLimit && (cell.tokensIndex[token.id]>=limits.tokensPerRoomCellLimit[token.id]))
                        isOk = false;
                    else
                        if (cell.tokensIndex[token.id])
                            score -= cell.tokensIndex[token.id];
                });

                score-=cell.tokens.length;

                if (isOk) {

                    if ((highestScore === undefined) || (score > highestScore)) {
                        bestCells = [];
                        highestScore = score;
                    }

                    if (highestScore == score)
                        bestCells.push(cell);

                }

            });

            if (bestCells) {

                let
                    cell = pickRandomElementValue(bestCells);

                item.tokens.forEach(token=>{
                    if (limits.tokensPerRoomLimit && ((limits.tokensPerRoomLimit[token.id] === undefined) || ((roomIndex[token.id] || 0) < limits.tokensPerRoomLimit[token.id]))) {

                        let
                            isTokenHidden = result.mapConfig.roomsHideTokens && !token.isVisible;

                        token.atExposure = item.atExposure;
                        if (!roomIndex[token.id]) roomIndex[token.id]=1;
                        else roomIndex[token.id]++;
                        addToken(resources,result,token,isTokenHidden,map,cell);

                        isRoomHidden &= isTokenHidden;
                    }
                });

            }

        });

        // Rooms are hidden if all tokens are hidden and there is at least one door
        room.isHidden = isRoomHidden && room.doors.length;

    }

    function fillRooms(resources,result,map,defaults,limits,defaultDoorType,expectedRoomsRatio) {

        if (map.rooms && map.rooms.length) {

            let
                expectedRooms = Math.ceil(map.placedTiles*expectedRoomsRatio),
                extraRooms = [],
                extraIntensityAt = 0.5,
                relevantDoors = 0,
                relevantRooms = 0;

            map.rooms.forEach(room=>{

                if (room.relevance) {
                    relevantRooms++;

                    if (!room.doors.length && !room.isEmpty) {
                        let
                            expectedDoors = getExpectedDoorsCount(room);
                        for (let j=0;j<expectedDoors;j++)
                            room.doors.push(defaultDoorType);
                    }
                    
                    relevantDoors += room.doors.length;
                } else
                    extraRooms.push(room);

                if (!room.isEmpty) {

                    // Apply intensity
                    fillRoomWithIntensity(room,room.intensity);

                    // Place elements
                    finalizeRoom(resources,result,map,room,limits);
                
                }

            });

            if ((relevantRooms < expectedRooms) && extraRooms.length) {

                // Add extra rooms

                extraRooms.sort((a,b)=>{
                    if (a.tileData.tokensCount > b.tileData.tokensCount) return 1;
                    else if (a.tileData.tokensCount < b.tileData.tokensCount) return -1;
                    else if (a.distance > b.distance) return 1;
                    else if (a.distance < b.distance) return -1;
                    else return 0;
                });

                for (let i=relevantRooms;i<=expectedRooms;i++)
                    if (extraRooms.length) {
                        let
                            room,
                            expectedDoors;

                        do {
                            room = getItemAtPercentage(extraRooms, extraIntensityAt);
                            expectedDoors = getExpectedDoorsCount(room);
                            if (expectedDoors + relevantDoors <= resources.tokensAvailable.door)
                                break;
                            else
                                room = 0;
                        } while (extraRooms.length);

                        if (room) {

                            room.relevance = 0.1;

                            for (let j=0;j<expectedDoors;j++)
                                room.doors.push(defaultDoorType);
                            relevantDoors+=expectedDoors;
                            fillRoomWithIntensity(room,defaults);
                            finalizeRoom(resources,result,map,room,limits);
                            extraIntensityAt -= 0.5;
                            if (extraIntensityAt < 0) extraIntensityAt = 1;

                        }
                    }

            }

        }

    }

    function addValidDoorExit(map,exits,roomId,sidesDone,cell,doorType,direction,dx,dy,oppositeDirection) {
        let
            destinationCell = isCoordInMap(map,dx,dy);

        if (
            destinationCell && !cell.hasDoor && cell.walls[direction] && !cell.doors[direction] &&
            (!doorType.doNotCrossTile || (cell.tileData === destinationCell.tileData))
        ) {

            if (isCellCorridor(destinationCell) && destinationCell.walls[oppositeDirection]) {

                let
                    score = 0;

                if (destinationCell.isExitTo == roomId)
                    score--;
                else score+=1+countWalls(destinationCell);

                if (sidesDone[direction]) score -= 1;

                if (cell.tokens.length) {
                    score -= cell.tokens.length;
                    cell.tokens.forEach(token=>{
                        if (token.atExposure)
                            score+=token.atExposure; // TODO: It may need a multiplier.
                    });
                }

                if (destinationCell.isStartPoint)
                    score -= 2;

                // Orthogonal
                if (
                    isCoordWithDoor(map,cell,0,-1) ||
                    isCoordWithDoor(map,cell,1,0) ||
                    isCoordWithDoor(map,cell,0,1) ||
                    isCoordWithDoor(map,cell,-1,0)
                ) {
                    score-=2;
                }

                // Diagonal
                if (
                    isCoordWithDoor(map,cell,1,-1) ||
                    isCoordWithDoor(map,cell,1,1) ||
                    isCoordWithDoor(map,cell,-1,1) ||
                    isCoordWithDoor(map,cell,-1,-1)
                )
                    score-=3;

                exits.push({ score:score, from:cell, direction:direction, to:destinationCell, oppositeDirection:oppositeDirection });
            }
        }
                
    }

    function addDoors(resources,result,map) {

        if (map.rooms && map.rooms.length) {

            let
                openedRooms = map.rooms.filter(room=>room.relevance > 0).sort((a,b)=>{
                    if (a.relevance > b.relevance) return -1;
                    else if (a.relevance < b.relevance) return 1;
                    else return 0;
                })

            openedRooms.forEach(room=>{

                // Find exits
                let
                    roomId = room.id,
                    sidesDone = [];

                for (let i=0;i<room.doors.length;i++) {

                    let
                        doorType = room.doors[i],
                        exits = [];

                    room.cells.forEach(cell=>{
                        addValidDoorExit(map,exits,roomId,sidesDone,cell,doorType,0,cell.x,cell.y-1,2);
                        addValidDoorExit(map,exits,roomId,sidesDone,cell,doorType,1,cell.x+1,cell.y,3);
                        addValidDoorExit(map,exits,roomId,sidesDone,cell,doorType,2,cell.x,cell.y+1,0);
                        addValidDoorExit(map,exits,roomId,sidesDone,cell,doorType,3,cell.x-1,cell.y,1);
                    });
                    
                    if (exits.length) {

                        exits.sort((a,b)=>{
                            if (a.score > b.score) return -1;
                            else if (a.score < b.score) return 1;
                            else return 0;
                        });

                        let
                            exit=exits[0];

                        exit.from.walls[exit.direction]=false;
                        exit.from.doors[exit.direction]=doorType;
                        exit.from.hasDoor=true;

                        exit.to.walls[exit.oppositeDirection]=false;
                        exit.to.isExitTo=roomId;
                        exit.to.isDeadEnd=false;

                        sidesDone[exit.direction]=true;

                        getToken(resources,result,doorType,false,map);

                        room.exits.push(exit.to);

                    } else break;

                }

            });

        }

    }

    function addOnPaths(resources,result,map) {

        if (map.rooms && map.rooms.length) {
                
            map.rooms.forEach(room=>{
                if (room.onPathAdd.length && room.exits.length) {
                    let
                        routes;
                    
                    routes=room.exits
                        .map(exit=>exit.paths[map.startPoint.id].filter(cell=>!cell.isStartPoint && (cell.tokens.length == 0)))
                        .filter(route=>route.length>0);
                    
                    if (routes.length) {
                        let
                            routesBag=createBag(routes);

                        room.onPathAdd.forEach(options=>{

                            let
                                add=pickRandomElementValue(options),
                                route=routesBag.pick();

                            if (route) {

                                if (add.at === undefined)
                                    cell = pickRandomElement(route);
                                else
                                    cell = getItemAtPercentage(route,add.at);

                                if (!route.length)
                                    routesBag.delete(route);

                                add.tokens.forEach(token=>{
                                    addToken(resources,result,token,false,map,cell);
                                })

                            }
                        })
                    }
                }
            })

        }
    }

    // --- Corridors content
    
    function addCorridorsContent(resources,result,map,content) {

        if (map.startPoint) {

            content.forEach(subcontent=>{

                let
                    cellsByDistance={},
                    maxDistance = 0;

                for (let k in map.startPoint.paths) {
                    let
                        path = map.startPoint.paths[k],
                        distance = path.length-1,
                        lastCell = path[distance];

                    if (
                        (!subcontent.atTileId || (lastCell.tileData.tileId == subcontent.atTileId))
                    ) {

                        if (!cellsByDistance[distance]) cellsByDistance[distance]=[];
                        cellsByDistance[distance].push(path[path.length-1]);

                        maxDistance=Math.max(maxDistance,distance);

                    }
                }

                if (subcontent.tileId && !maxDistance)
                    console.warn("Can't find tile",subcontent.atTileId);

                subcontent.elements.forEach(element=>{
                    
                    let
                        position = element.atCell === undefined ? Math.floor(maxDistance*element.at) : element.atCell;

                    while (!cellsByDistance[position] && (position<=maxDistance) )
                        position++;
                    
                    if (cellsByDistance[position]) {
                        let
                            cell = pickRandomElement(cellsByDistance[position]);

                        element.tokens.forEach(token=>{
                            addToken(resources,result,token,false,map,cell);
                        })

                        if (cellsByDistance[position].length == 0)
                            delete cellsByDistance[position];
                    }

                })

            })
                

        }

    }

    // --- Map finalization

    function finalizeMap(map) {
        let
            croppedGrid=[];
        for (let y=0;y<map.height;y++)
            croppedGrid.push(map.grid[y+map.oy].splice(map.ox,map.width));

        map.index.forEach(tile=>{
            tile.at.x-=map.ox;
            tile.at.y-=map.oy;
        });
        
        map.ox=0;
        map.oy=0;
        map.grid=croppedGrid;

    }

    // --- Init

    function generate(resources,result) {

        let
            tilesAvailable=[],
            skins = [],
            map={
                ox:MAPCENTER_X,
                oy:MAPCENTER_Y,
                usedTokens:{},
                visibleUsedTokens:{},
                specialRules:[],
                width:0,
                height:0,
                index:[],
                walls:[],
                exits:[],
                grid:[]
            };

        if (resources.tiles && resources.tiles.length) {
                
            resources.tiles.forEach(tile=>{
                tilesAvailable.push(tile);
                tile.sides.forEach(side=>{
                    side.skins.forEach(skin=>{
                        if (skins.indexOf(skin) == -1)
                            skins.push(skin);
                    })
                    addTileRotations(side.angles);
                })
            });

            generateMap(resources,result,map,result.attempt,skins,result.mapConfig);

            if (map.isValid) {
                    
                analyzeMap(resources,map);

                let
                    corridorCells=map.corridorCellsByDistance;

                assignRooms(resources,map,result.mapConfig.roomsContent,result.mapConfig.roomsDefaults);
                fillRooms(
                    resources,result,map,result.mapConfig.roomsDefaults,
                    result.mapConfig.roomLimits || DEFAULT_ROOMLIMITS,
                    result.mapConfig.roomsDoorsDefaultType || DEFAULT_ROOMSDOORSTYPE,
                    result.mapConfig.roomsExpectedRatio === undefined ? DEFAULT_ROOMSEXPECTEDRATIO : result.mapConfig.roomsExpectedRatio
                );
                addDoors(resources,result,map);

                if (corridorCells && result.mapConfig.corridorsSpawnPoints)
                    result.mapConfig.corridorsSpawnPoints.forEach(spawnpoint=>{
                        if (corridorCells.length)
                            addSpawnPoint(resources,result,map,spawnpoint.tokens,getItemAtPercentage(corridorCells,spawnpoint.at),spawnpoint.allowBridge);
                    });

                addPillars(resources,result,map,result.mapConfig.corridorsPillarsMinDistance);
                addOnPaths(resources,result,map);
                addCorridorsContent(resources,result,map,result.mapConfig.corridorsContent);

                finalizeMap(map);

                // Prepare labels

                map.index.forEach(tile=>{
                    result.labels["tileLabel."+tile.tileId]={ EN: tile.tile.sides[tile.side].label };
                })

            }

            map.specialRules.forEach(rule=>{
                resources.specialRules[rule].forEach(rule=>{
                    result.quest.rules.push(rule);
                })
            })
            result.map = map;

        }

        return result;
    
    }

    return {
        generate :(resources,result)=>{
            seed = result.mapSeed;
            generate(resources,result);
            return result;
        }
    };

})();