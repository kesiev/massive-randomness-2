MapRenderer=(function(){

    const
        CELLSIZE_X=122,
        CELLSIZE_Y=122,
        MINIMAP_CELLSIZE = 25;

    function createCellNode() {
        let
            node = document.createElement("div"),
            inner = document.createElement("div"),
            content = document.createElement("div"),
            background= document.createElement("div");
        node.className="cell";
        inner.className="inner";
        content.className="content";
        background.className="background";
        node.appendChild(inner);
        node.appendChild(content);
        node.appendChild(background);
        return {
            cell:node,
            inner:inner,
            content:content,
            background:background
        };
    }

    function createTileNode() {
        let
            node = document.createElement("div"),
            container = document.createElement("div");
        node.className = "tile";
        container.className = "container";
        node.appendChild(container);
        return {
            node:node,
            container:container
        };
    }

    function createBrNode() {
        let
            node = document.createElement("br");
        return node;
    }

    function renderSideColor(cell,side,className,solidClassName) {
        if (cell.doors[side] || cell.originalWalls[side])
            return " "+(!cell.solidWalls || !cell.solidWalls[side] ? className : solidClassName);
        else
            return "";
    }

    function renderHedgesColor(cell,side,className) {
        if (cell.hedges && cell.hedges[side])
            return " "+className;
        else
            return "";
    }

    function renderCellTokens(resources,cellNode,hideHidden) {
        let
            groups = {},
            order = [];

        cellNode.cellData.tokens.forEach(token=>{
            if (!hideHidden || !token.isHidden) {
                let
                    tokenId = token.id + "_" + (token.flipped ? "flip" : "normal");

                if (!groups[tokenId]) {
                    groups[tokenId]={
                        token:token,
                        count:0
                    };
                    order.push(tokenId);
                }
                groups[tokenId].count++;
            }
        })
        
        order.forEach(id=>{
            let
                token = groups[id].token,
                count = groups[id].count,
                tokenMetadata=resources.tokensMetadata[token.id],
                className = tokenMetadata.className.map,
                doGroup = tokenMetadata.groupWhen && (count >= tokenMetadata.groupWhen);
                
            if (token.flipped)
                className+=" flipped";

            if (doGroup)
                cellNode.content.innerHTML+="<span class=\""+className+"\"><span class=\"count\">&times;"+count+"</span></span> ";
            else
                for (let i=0;i<count;i++)
                    cellNode.content.innerHTML+="<span class=\""+className+"\"></span> ";
            
        })
    }

    function renderCellDoors(resources,cellNode,hideHidden,hiddenOnly) {
        cellNode.cellData.doors.forEach((door,side)=>{

            if (door && (!door.isHidden || !hideHidden) && (!hiddenOnly || door.isHidden)) {
                let
                    doorNode = document.createElement("div");
                doorNode.className=resources.tokensMetadata[door.id].className.map+(door.className ? " "+door.className : "")+(door.flipped ? " flipped" : "")+" side-"+side;
                cellNode.cell.appendChild(doorNode);
            }

        })
    }

    function renderHiddenBlock(resources,cellNode,hiddenGroup) {
        let
            node = document.createElement("div");

        node.className = "hiddenblock "+hiddenGroup;
        node.innerHTML = "?";
        node._cellNode = cellNode;
        cellNode.cell.appendChild(node);

        node.onclick = ()=>{
            let
                elements = Array.from(document.getElementsByClassName(hiddenGroup));
            elements.forEach(element=>{
                renderCellTokens(resources,element._cellNode,false);
                renderCellDoors(resources,element._cellNode,false,true);
                element.parentNode.removeChild(element);
            });
        }
    }

    function renderTile(resources,result,into,tile,hideHidden) {
        let
            tileNode=createTileNode();
        into.appendChild(tileNode.node);
        tile.forEach(row=>{
            row.forEach(cell=>{
                let
                    cellNode = createCellNode();
                tileNode.container.appendChild(cellNode.cell);
                if (hideHidden) cell._node = cellNode.cell;
                cellNode.cellData = cell;

                if (cell.isRoom) {
                    cellNode.cell.className+=
                        " room"+
                        renderSideColor(cell,0,"topBorder","solidTopBorder")+
                        renderSideColor(cell,1,"rightBorder","solidRightBorder")+
                        renderSideColor(cell,2,"bottomBorder","solidBottomBorder")+
                        renderSideColor(cell,3,"leftBorder","solidLeftBorder");
                } else if (cell.isWalled) {
                    cellNode.cell.className+=
                        " corridor walled"+(cell.isBridge ? " bridge" : "")+
                        renderSideColor(cell,0,"topBorder","solidTopBorder")+renderHedgesColor(cell,0,"topHedge")+
                        renderSideColor(cell,1,"rightBorder","solidRightBorder")+renderHedgesColor(cell,1,"rightHedge")+
                        renderSideColor(cell,2,"bottomBorder","solidBottomBorder")+renderHedgesColor(cell,2,"bottomHedge")+
                        renderSideColor(cell,3,"leftBorder","solidLeftBorder");renderHedgesColor(cell,3,"leftHedge");
                } else {
                    cellNode.cell.className+=
                    " corridor "+
                        renderHedgesColor(cell,0,"topHedge")+
                        renderHedgesColor(cell,1,"rightHedge")+
                        renderHedgesColor(cell,2,"bottomHedge")+
                        renderHedgesColor(cell,3,"leftHedge");
                }

                if (cell.type)
                    cell.type.forEach(type=>{
                        cellNode.cell.className+=" "+type;
                    })

                renderCellTokens(resources,cellNode,hideHidden);

                if (hideHidden && (cell.roomId !== undefined)) {
                    let
                        roomId = cell.roomId,
                        room = result.map.rooms[roomId];
                    
                    if (room.isHidden)
                        renderHiddenBlock(resources,cellNode,"hidden-room-"+roomId);

                }

                renderCellDoors(resources,cellNode,hideHidden,false);

            });
            let
                brNode = createBrNode();
            tileNode.container.appendChild(brNode);

        });

        return tileNode;

    }


    return {
        render:(resources,result,mapNode,minimapInto,isOnScreen)=>{

            if (result.map) {

                let
                    mapImageNode = document.createElement("div"),
                    minimapImageNode = document.createElement("div"),
                    mapWidth = 0,
                    mapHeight = 0,
                    minimapWidth = 0,
                    minimapHeight = 0;

                mapImageNode.className = "mapImage";
                minimapImageNode.className = "minimapImage";
                
                mapNode.appendChild(mapImageNode);
                minimapInto.appendChild(minimapImageNode);
        
                result.map.index.forEach(tile=>{
                    let
                        tileSide=tile.tile.sides[tile.side],
                        tileData=tileSide.angles[tile.angle],
                        tileNode=renderTile(resources,result,mapImageNode,tileData,isOnScreen),
                        minimapNode=document.createElement("div"),
                        minimapNodeContent=document.createElement("div"),
                        atX=tile.at.x*CELLSIZE_X,
                        atY=tile.at.y*CELLSIZE_Y,
                        minimapAtX=tile.at.x*MINIMAP_CELLSIZE,
                        minimapAtY=tile.at.y*MINIMAP_CELLSIZE;
            
                    if (tileSide.label)
                        tileNode.node.title=tileSide.label;
                    tileNode.node.style.position="absolute";
                    tileNode.node.style.left=atX+"px";
                    tileNode.node.style.top=atY+"px";

                    minimapNode.appendChild(minimapNodeContent);
                    minimapNodeContent.className="minimapNodeContent";
                    minimapNode.className="minimapNode";
                    minimapNode.style.position="absolute";
                    minimapNode.style.width=(MINIMAP_CELLSIZE*tileData[0].length)+"px";
                    minimapNode.style.height=(MINIMAP_CELLSIZE*tileData.length)+"px";
                    minimapNode.style.left=minimapAtX+"px";
                    minimapNode.style.top=minimapAtY+"px";
                    minimapNodeContent.style.lineHeight=minimapNode.style.height;
                    
                    minimapImageNode.appendChild(minimapNode);

                    if (tile.tile.label)
                        minimapNodeContent.innerHTML=tileSide.label;
            
                    mapWidth=Math.max(mapWidth,atX+tileNode.node.offsetWidth);
                    mapHeight=Math.max(mapHeight,atY+tileNode.node.offsetHeight);

                    minimapWidth=Math.max(minimapWidth,minimapAtX+minimapNode.offsetWidth);
                    minimapHeight=Math.max(minimapHeight,minimapAtY+minimapNode.offsetHeight);
                });
        
                mapImageNode.style.width=mapWidth+"px";
                mapImageNode.style.height=mapHeight+"px";

                minimapImageNode.style.width=minimapWidth+"px";
                minimapImageNode.style.height=minimapHeight+"px";

                if (!isOnScreen) {

                    mapNode.style.height = (mapHeight/2)+"px";

                    window.onbeforeprint = () => {
                        document.title = result.printTitlePrefix+" - "+result.printTitleSuffix+(result.printTitleCoords ? " "+result.printTitleCoords : "");
                    };

                    window.onafterprint = () => {
                        document.title = result.printTitlePrefix;
                    };

                }

            }
    
        }
    }

})();        