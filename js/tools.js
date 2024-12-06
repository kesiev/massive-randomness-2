Tools=(function(){

    const
        DEBUG_QUEST = false,
        ACTS = 3,
        ACT_MAPS = 3,
        BOSS_LEVELS = 4,
        TESTQUESTS_ITERATIONS = 400,
        TESTCAMPAIGNS_ITERATIONS = 50,
        CAMPAIGN_SIDEQUEST_COUNT = [ "red", "yellow" ],
        CAMPAIGN_NAME_LENGTH = 2,
        CAMPAIGN_ITEM_LIMITS = {
            itemQuality1:2,
            itemQuality2:2,
            itemQuality3:2
        },
        ALLOWED_ENTITIES={
            IT:[ "ograve", "agrave", "egrave", "eacute", "ugrave", "igrave", "deg", "amp", "Egrave", "dash", "OElig", "ocirc" ],
            EN:[ "amp", "dash", "OElig", "ocirc" ]
        },
        ALLOWED_TAGS=[ "p", "/p", "ul", "/ul", "ol", "/ol", "li", "/li", "b", "/b", "i", "/i", "span class='phase'", "span class='displayonly'", "span class='printonly'", "span class='hiddentext'",  "/span", "br", "p class='credits'", "/a", /^a target=_blank href='[^']+'$/ ],
        ALLOWED_PLACEHOLDER_MODS=[ "capital" ],
        ALLOWED_CELLTYPES=[ "light", "dark", "crystal", "lava", "blocking", "water" ],
        ALLOWED_PLACEHOLDERS=[
            // Common tile labels
            "tileLabel.first", "tileLabel.second", "tileLabel.third", "tileLabel.fourth", "tileLabel.fifth", "tileLabel.center",
            // Investigation quest placeholders
            "who", "testimony.corruptionLord", "testimony.corruptionLordServant", "testimony.timeLord", "testimony.timeLordServant",
            "ending.corruptionLord", "ending.timeLord",
            // Ending
            "token.order1", "token.order2", "token.order3", "token.order4",
            "action.order1", "action.order2", "action.order3",
            // Campaign
            "campaign.page", "campaign.pages", "campaign.name"
        ],
        WARNING_WORDS={
            EN:[ "wandering", "quest", "marker" ],
            IT:[ "quest", "xp", "avventura" ],
            FR:[ ]
        },
        CAMPAIGN_CONFIGS = [
            {
                id:"campaign-heavenfall",
                excludes:[],
                needs:[ "boss", "bridge-default-twoexits", "generator-campaign", "campaign-default", "md2-heavenfall", "quests", "maps-default", "md2-hellscape" ]
            },
            {
                id:"campaign-rainbowcrossing",
                excludes:[],
                needs:[ "boss", "bridge-default-twoexits", "generator-campaign", "campaign-default", "md2-heavenfall", "quests", "maps-default", "md2-hellscape", "md2-rainbowcrossing" ]
            },
            {
                id:"campaign-blackplague",
                excludes:[],
                needs:[ "boss", "bridge-default-twoexits", "generator-campaign", "campaign-default", "md2-heavenfall", "quests", "maps-default", "md2-hellscape", "zc-blackplague" ]
            },
            {
                id:"campaign-greenhorde",
                excludes:[],
                needs:[ "boss", "bridge-default-twoexits", "generator-campaign", "campaign-default", "md2-heavenfall", "quests", "maps-default", "md2-hellscape", "zc-greenhorde" ]
            }
        ],
        QUEST_CONFIGS=[
            {
                id:"maps-size-small",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            },
            // --- MD2: Rainbow Crossing
            {
                id:"maps-size-small-rainbowcrossing",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "md2-rainbowcrossing", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal-rainbowcrossing",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "md2-rainbowcrossing", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large-rainbowcrossing",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "md2-rainbowcrossing", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            },
            // --- MD2: Heavenfall
            {
                id:"maps-size-small-heavenfall",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "md2-heavenfall", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal-heavenfall",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "md2-heavenfall", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large-heavenfall",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "md2-heavenfall", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            },
            // --- ZC: Black Plague
            {
                id:"maps-size-small-zcblackplague",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "zc-blackplague", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal-zcblackplague",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "zc-blackplague", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large-zcblackplague",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "zc-blackplague", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            },
            // --- ZC: Green horde
            {
                id:"maps-size-small-zcgreenhorde",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "zc-greenhorde", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal-zcgreenhorde",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "zc-greenhorde", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large-zcgreenhorde",
                excludes:[],
                needs:[ "bridge-default-twoexits", "quests", "maps-default", "md2-hellscape", "zc-greenhorde", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            }
        ];

    let
        decodeElement = document.createElement('div'),
        resourcesDump;
    
    function createNode(into,type,className) {
        let
            node = document.createElement(type);

        if (className) node.className=className;
        into.appendChild(node);

        return node;
    }

    function createTileTo(to) {
        let
            node = createNode(to,"div");
        
        node.style.cursor = "default";
        node.style.border="1px solid #000";
        node.style.display="inline-block";
        node.style.backgroundColor = "#fff";

        return node;
    }

    function addCellToTile(tile) {
        let
            node = createNode(tile,"div"),
            innerNode = createNode(node,"div");
        
        node.style.lineHeight = node.style.width = node.style.height = "20px";
        node.style.fontSize = "10px";
        node.style.textAlign = "center";
        node.style.display = "inline-block";
        node.style.position = "relative";

        innerNode.style.position="absolute";
        innerNode.style.left = innerNode.style.right = innerNode.style.top = innerNode.style.bottom = "1px";

        return innerNode;
    }

    function countRooms(tile,x,y,doneMap) {
        if ((tile[y] && tile[y][x]) && (!doneMap[y] || !doneMap[y][x]) && tile[y][x].isRoom) {
            let
                size=1;
            if (!doneMap[y]) doneMap[y]=[];
            doneMap[y][x]=true;
            size+=countRooms(tile,x,y-1,doneMap);
            size+=countRooms(tile,x+1,y,doneMap);
            size+=countRooms(tile,x,y+1,doneMap);
            size+=countRooms(tile,x-1,y,doneMap);
            return size;
        } else return 0;
    }

    function addTag(list,tag) {
        if (list.indexOf(tag) == -1)
            list.push(tag);
    }

    function addTagsSequence(list,tag,value) {
        addTag(list,tag+value);
        for (let i=1;i<=value;i++)
            addTag(list,tag+i+"+");
    }

    function createErrorsNode(into) {
        let
            node = createNode(into,"div");

        node.style.padding = node.style.margin = "5px";
        return node;
    }

    function dumpErrors(node,list) {
        if (list.length) {
            node.style.border = "2px solid #f00";
            node.style.backgroundColor = "#f99";
            node.innerHTML="<ul><li>"+list.join("</li><li>")+"</li></ul>";
        } else {
            node.style.border = "2px solid #0f0";
            node.style.backgroundColor = "#9f9";
            node.innerHTML="Everything looks OK."
        }
    }

    function dumpResources() {
        resourcesDump = ModManager.dump();
    }

    function getAllResourcesTypes(ids) {
        let
            out = {};
        dumpResources();

        resourcesDump.forEach(package=>{
            package.content.forEach(item=>{
                if (ids.indexOf(item.type) != -1) {
                    if (Array.isArray(item.data)) {
                        if (!out[item.type]) out[item.type]=[];
                        item.data.forEach(element=>{
                            let copy = JSON.parse(JSON.stringify(element));
                            copy._package = package.id;
                            copy._packageData = package;
                            out[item.type].push(copy);
                        })
                    } else {
                        if (!out[item.type]) out[item.type]={};
                        for (let k in item.data)
                            out[item.type][k]=item.data[k];
                    }
                    
                }
            })
        });

        return out;
    }

    function decodeEntities(str) {
        if (typeof str == 'number')
            str = String(str);
        if (str && typeof str === 'string') {
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            decodeElement.innerHTML = str;
            str = decodeElement.textContent;
            decodeElement.textContent = '';
        }
        return str;
    }

    function addSentenceTokens(tokens,language,sentence) {
        if (!tokens[language]) tokens[language]={ warningCount:0, words:{} };
        decodeEntities(sentence)
            .toLowerCase()
            .replace(/<([^>]+)>/g," ")
            .replace(/{([^}]+)}/g," ")
            .replace(/[0-9]/g," ")
            .replace(/[&!?/.;,:\"()-+°]/g," ")
            .replace(/'s /g," ")
            .split(" ").forEach(m=>{
                if (m) {
                    if (!tokens[language].words[m]) {
                        let isWarning = WARNING_WORDS[language].indexOf(m) != -1;
                        if (isWarning) tokens[language].warningCount++;
                        tokens[language].words[m]={ isWarning:isWarning, entries:[] };
                    }
                    tokens[language].words[m].entries.push(sentence);
                }
            });
    }

    function checkLabel(errors,wordTokens,errorHeader,placeholders,set) {
        if (set.EN === undefined)
            errors.push(errorHeader,"EN language missing");
        for (let lang in set) {
            let
                okTag = "XXX",
                entry = set[lang];
            if (!Array.isArray(entry))
                entry = [entry];
            entry.forEach((argument,aid)=>{
                let
                    orgArgument = String(argument).replace(/<([^>]+)>/g,(m,m1)=>{
                        for (let i=0;i<ALLOWED_TAGS.length;i++) {
                            let allowedTag = ALLOWED_TAGS[i];
                            if (allowedTag instanceof RegExp) {
                                if (allowedTag.test(m1))
                                    return okTag;
                            } else if (allowedTag == m1)
                                return okTag;
                        }
                        errors.push(errorHeader+" L["+lang+"] O["+aid+"]: invalid tag &lt;"+m1+"&gt;");
                        return okTag;
                    }).replace(/{([^}]+)}/g,(m,m1)=>{
                        let
                            errorPHeader=errorHeader+" L["+lang+"] O["+aid+"]: ",
                            text = m1.split("@"),
                            parts = text[0].split(":");
                        if (!placeholders[parts[0]])
                            errors.push(errorPHeader+"unavailable placeholder "+parts[0]);
                        if (parts[1] && (ALLOWED_PLACEHOLDER_MODS.indexOf(parts[1]) == -1))
                            errors.push(errorPHeader+"invalid placeholder modifier '"+parts[1]+"'");
                        return okTag;
                    }).replace(/&([^;]+);/g,(m,m1)=>{
                        if (ALLOWED_ENTITIES[lang] && (ALLOWED_ENTITIES[lang].indexOf(m1) == -1))
                            errors.push(errorHeader+" L["+lang+"] O["+aid+"]: invalid entity for "+lang+": &amp;"+m1+";");
                        return okTag;
                    }),
                    checkArgument = orgArgument.replace(/([^0-9a-zA-Z() +/\-,.;:'!?_"]+)/g,function(m,m1){
                        return "<span style='background-color:#000;color:#fff'>["+m1+"]</span>";
                    });
                if (orgArgument != checkArgument)
                    errors.push(errorHeader+" L["+lang+"] O["+aid+"]: "+checkArgument);
                addSentenceTokens(wordTokens,lang,argument);
            })
        }
    }

    function questTesterAddToken(testResult,iteration,token,amount) {
        let
            id = token.id+(token.flipped ? "-flipped":"");
        if (!testResult.tokens[iteration]) testResult.tokens[iteration]={};
        if (!testResult.tokens[iteration][id]) testResult.tokens[iteration][id]=0;
        testResult.tokens[iteration][id] += amount === undefined ? 1 : amount;
        if (testResult.tokensIndex.indexOf(id) == -1) testResult.tokensIndex.push(id);
    }

    function questTesterAddCounter(testResult,iteration,id) {
        if (!testResult.counters[id]) testResult.counters[id]=0;
        testResult.counters[id]++;
    }

    function questTesterPreview(test,seed,into,from) {
        let
            backButton;
        into.innerHTML="";

        backButton = createNode(into,"input");
        backButton.type = "button";
        backButton.value = "<< Back";
        backButton.style.padding="10px";
        backButton.onclick=()=>{
            from.scrollIntoView();
        }
        createNode(into,"span").innerHTML = " - Seed: "+seed;
        Generator.generate(test.config,seed,{
            quest:test.quest
        },0,(resources,result)=>{
            QuestRenderer.render(resources,result,"EN",into);
            into.scrollIntoView();
        });
    }

    function runQuestTester(screen,tests,cb,results,test,testResult,iteration) {

        if (!results) results=[];
        if (!test)
            if (tests.length) {
                let logLine;

                test = tests.shift();
                logLine = tests.length+" test(s) left... (current: "+test.quest.by.EN+")";
                screen.innerHTML = logLine;
                console.log(logLine);
                iteration = 0;
                testResult = {
                    test:test,
                    seeds:[],
                    bridgeSeeds:[],
                    mergedRoomsSeeds:[],
                    counters:{},
                    tokensIndex:[],
                    tokens:[]
                };
            } else
                cb(results);

        if (test) {
            if (iteration == test.iterations) {
                results.push(testResult);
                runQuestTester(screen,tests,cb,results);
            } else {
                Generator.generate(test.config,0,{
                    quest:test.quest
                },0,(resources,result)=>{
                    questTesterAddCounter(testResult,iteration,result.map.placedTiles > result.quest.suggestedTilesCount ? "map-large" : result.map.placedTiles < result.quest.suggestedTilesCount ? "map-small" : "map-normal" )
                    if (result.map.hasBridge) {
                        testResult.bridgeSeeds.push(result.seed);
                        questTesterAddCounter(testResult,iteration,"hasBridge");
                    }
                    if (result.map.hasMergedRooms.length) {
                        testResult.mergedRoomsSeeds.push(result.seed);
                        questTesterAddCounter(testResult,iteration,"hasMergedRooms");
                    }
                    if (result.map.bridgeRemoved) questTesterAddCounter(testResult,iteration,"bridgeRemoved");
                    testResult.label = result.quest.by.EN;
                    testResult.roomsDefaults = result.mapConfig.roomsDefaults;
                    testResult.seeds.push(result.seed);
                    result.map.grid.forEach(row=>{
                        row.forEach(cell=>{
                            if (cell) {
                                cell.tokens.forEach(token=>{
                                    questTesterAddToken(testResult,iteration,token);
                                })
                            }
                        })
                    });
                    result.map.rooms.forEach(room=>{
                        if (room) {
                            let
                                mobs = 0;
                            room.cells.forEach(cell=>{
                                cell.tokens.forEach(token=>{
                                    if (token.id == "mob")
                                        mobs++;
                                })
                            });
                            questTesterAddToken(testResult,iteration,{ id:"ROOM-mobs-"+mobs });
                        }
                    });
                    questTesterAddToken(testResult,iteration,{ id:"ATTEMPTS" },result.attempt);
                    setTimeout(()=>{
                        runQuestTester(screen,tests,cb,results,test,testResult,iteration+1);
                    },1);
                });
            }
        }

    }

    function runCampaignTester(screen,tests,cb,results,test,testResult,iteration,campaign) {
        if (!results) results = [];
        if (!test)
            if (tests.length) {
                iteration = 0;
                test = tests.shift();
                testResult = {
                    campaign:test,
                    pages:[],
                    seeds:[]
                };
            } else
                cb(results);

        if (campaign) {
            campaign.page++;
            if (campaign.pages[campaign.page])
                Generator.generate(test.config,0,{
                    campaign:test.campaign,
                    campaignDebugQuest:DEBUG_QUEST
                },campaign,(resources,result)=>{
                    testResult.pages.push(result);
                    setTimeout(()=>{
                        runCampaignTester(screen,tests,cb,results,test,testResult,iteration,campaign);
                    },1);
                });
            else
                setTimeout(()=>{
                    runCampaignTester(screen,tests,cb,results,test,testResult,iteration+1);
                },1);
        } else if (test)
            if (iteration == test.iterations) {
                results.push(testResult);
                runCampaignTester(screen,tests,cb,results);
            } else {
                let
                    logLine = tests.length+" test(s) left... (current: "+test.campaign.label.EN+")";
                screen.innerHTML = logLine;
                console.log(logLine);
                Generator.generate(test.config,0,{
                    campaign:test.campaign,
                    campaignDebugQuest:DEBUG_QUEST
                },0,(resources,result)=>{
                    testResult.seeds.push(result.campaign.campaignSeed);
                    setTimeout(()=>{
                        runCampaignTester(screen,tests,cb,results,test,testResult,iteration,result.campaign);
                    },1);
                });
            }
    }

    function formatPercentage(value) {
        return (Math.floor(value*1000)/10)+"%";
    }

    function startQuestTester(testsSequence,resultsNode,previewNode,errors,cb) {
        runQuestTester(resultsNode,testsSequence,(results)=>{

            let
                resultsData = [];

            resultsNode.innerHTML="";

            results.forEach(result=>{

                let
                    resultRow = {
                        label:"["+result.test.config.id+"] "+result.label,
                        stats:"Sug.Tiles: "+result.test.quest.suggestedTilesCount+" | Risk:"+result.roomsDefaults.risk+" | Reward:"+result.roomsDefaults.reward,
                        counters:result.counters,
                        bridgeSeeds:result.bridgeSeeds,
                        mergedRoomsSeeds:result.mergedRoomsSeeds,
                        tokensResult:[]
                    };

                result.tokensIndex.sort();
                result.tokensIndex.forEach(token=>{
                    let
                        max, min,
                        minCount, maxCount,
                        minSeed, maxSeed,
                        notFound = 0,
                        count = 0,
                        critical = 0;
                        
                    result.tokens.forEach((test,id)=>{
                        let
                            amount = test[token];

                        if (!test[token]) {
                            amount = 0;
                            notFound++;
                        }

                        if ((max === undefined) || (amount > max)) {
                            maxSeed = result.seeds[id];
                            max = amount;
                            maxCount = 0;
                        }

                        if ((min === undefined) || (amount < min)) {
                            minSeed = result.seeds[id];
                            min = amount;
                            minCount = 0;
                        }

                        if (amount == max)
                            maxCount++;
                        if (amount == min)
                            minCount++;
                        count+=amount;
                    });

                    if (((token == "objective") || (token == "objective-flipped") || (token == "corruption") || (token == "time")) && (max != min))
                        critical = 20;
                    else if (notFound)
                        critical = 10;
                    else if (max - min > 3)
                        critical = 5;
                    else if (max == min)
                        critical = -1;

                    resultRow.tokensResult.push({
                        id:token,
                        test:result.test,
                        notFound:notFound,
                        notFoundPc:notFound ? notFound/result.tokens.length : 0,
                        critical:critical,
                        count:count,
                        avg:count/result.tokens.length,
                        max:max,
                        maxCount:maxCount,
                        maxCountPc:maxCount/result.tokens.length,
                        maxSeed:maxSeed,
                        min:min,
                        minCount:minCount,
                        minCountPc:minCount/result.tokens.length,
                        minSeed:minSeed
                    })
                });

                resultRow.tokensResult.sort((a,b)=>{
                    if (a.critical < b.critical) return 1;
                    else if (a.critical > b.critical) return -1;
                    else return 0;
                })

                resultsData.push(resultRow);
            });

            resultsData.forEach(resultRow=>{
                let
                    html="",
                    countersNode,
                    seedSelectorNode;
                
                createNode(resultsNode,"h3").innerHTML = resultRow.label;
                createNode(resultsNode,"span").innerHTML = resultRow.stats;

                countersNode = createNode(resultsNode,"div");
                countersNode.style.fontWeight = "bold";

                for (let k in resultRow.counters)
                    html+=k+":"+resultRow.counters[k]+" ("+formatPercentage(resultRow.counters[k]/TESTQUESTS_ITERATIONS)+") ";
                countersNode.innerHTML = html+" - ";

                seedSelectorNode =  createNode(countersNode,"select");
                createNode(seedSelectorNode,"option").innerHTML="---";


                resultRow.mergedRoomsSeeds.forEach(seed=>{
                    let
                        option = createNode(seedSelectorNode,"option");
                    option.value = seed;
                    option.innerHTML = "MERGED: "+seed
                });

                resultRow.bridgeSeeds.forEach(seed=>{
                    let
                        option = createNode(seedSelectorNode,"option");
                    option.value = seed;
                    option.innerHTML = "BRIDGE: "+seed
                });

                seedSelectorNode.onchange=()=>{
                    questTesterPreview(resultRow.tokensResult[0].test,seedSelectorNode.value,previewNode,seedSelectorNode);
                }

                resultRow.tokensResult.forEach(tokenResult=>{
                    let
                        rowNode = createNode(resultsNode,"div"),
                        avgStyle,
                        html,
                        button;

                    createNode(rowNode,"span").innerHTML = tokenResult.id+": ";

                    button = createNode(rowNode,"input");
                    button.type = "button";
                    button.value = tokenResult.min;
                    button.onclick = ()=>{
                        questTesterPreview(tokenResult.test,tokenResult.minSeed,previewNode,button);
                    }

                    createNode(rowNode,"span").innerHTML = formatPercentage(tokenResult.minCountPc)+" ";

                    createNode(rowNode,"span").innerHTML=" - ";

                    button = createNode(rowNode,"input");
                    button.type = "button";
                    button.value = tokenResult.max;
                    button.onclick = ()=>{
                        questTesterPreview(tokenResult.test,tokenResult.maxSeed,previewNode,button);
                    }

                    createNode(rowNode,"span").innerHTML = formatPercentage(tokenResult.maxCountPc)+" ";

                    if (tokenResult.avg <= 0.5)
                        avgStyle = "color:black";
                    else if (tokenResult.avg>=0.85)
                        avgStyle = "color:green;font-weight:bold";
                    else
                        avgStyle = "";

                    html=" Avg:<span style='"+avgStyle+"'>"+tokenResult.avg+"</span>"+(tokenResult.notFound?" (Not found:"+tokenResult.notFound+" - "+formatPercentage(tokenResult.notFoundPc)+")":"");

                    if (tokenResult.critical > 10) {
                        rowNode.style.color = "red";
                        rowNode.style.textDecoration = "underline";
                    } else if (tokenResult.critical > 0)
                        rowNode.style.color = "red";
                    else if (tokenResult.critical < 0)
                        rowNode.style.color = "green";
                    
                    createNode(rowNode,"span").innerHTML = html;
                })
            })
            cb();
        })
    }

    function startCampaignTester(testsSequence,resultsNode,previewNode,errors,cb) {
        runCampaignTester(resultsNode,testsSequence,(results)=>{

            resultsNode.innerHTML="Done.";

            console.log(results);

            cb();
        });
    }

    function addMapTag(tags,section,id,tag) {
        if (!tags[section]) tags[section]={};
        if (!tags[section][id]) tags[section][id]={};
        if (!tags[section][id][tag]) tags[section][id][tag]=0;
        tags[section][id][tag]++;
    }

    return {

        checkTiles:(into)=>{
            
            let
                errorsNode = createErrorsNode(into),
                errors = [],
                resources = getAllResourcesTypes([ "tiles" ]);

            resources.tiles.forEach(tile=>{
                let
                    errorHeader = "["+tile._package+"] "+tile.id+" from "+tile.from,
                    tileNode = createNode(into,"div"),
                    tileInfo = createNode(tileNode,"div");

                tileInfo.style.marginTop="30px";
                tileInfo.style.fontWeight="bold";
                tileInfo.innerHTML=errorHeader;
                    
                tile.sides.forEach(side=>{
                    let
                        errorHeaderSide = errorHeader+" side "+side.id,
                        sideContainerNode = createNode(tileNode,"div"),
                        sideInfo = createNode(sideContainerNode,"div"),
                        sideNode = createTileTo(sideContainerNode,"div"),
                        isOutdoor = side.skins.indexOf("outdoor") != -1,
                        hasHedges,
                        hasWater,
                        hasSolidWalls,
                        rows = side.angles[0].length,
                        cols = side.angles[0][0].length,
                        expectedTags = [ "any" ],
                        closedSides = [ 0, 0, 0, 0 ],
                        openSidesCount = 0,
                        roomsMap = [],
                        roomsCount = 0,
                        cellTypes = [],
                        allowedSkins = [],
                        deniedSkins = [],
                        deniedCells = [],
                        expectedSpecialRules = [],
                        cleanLabel = side.label.replace(/[\[\]]/g,"");
                    
                    sideContainerNode.style.marginLeft="30px";

                    side.angles[0].forEach((row,rowId)=>{

                        row.forEach((cell,colId)=>{
                            let
                                errorHeaderCell = errorHeaderSide + " Cell "+colId+","+rowId,
                                upperCell = side.angles[0][rowId-1] ? side.angles[0][rowId-1][colId] : 0,
                                lowerCell = side.angles[0][rowId+1] ? side.angles[0][rowId+1][colId] : 0,
                                rightCell = row[colId+1],
                                leftCell = row[colId-1],
                                label="",
                                title="",
                                cellNode = addCellToTile(sideNode);
                            
                            if (cell.type)
                                cell.type.forEach(type=>{
                                    if (type == "water") hasWater = true;
                                    if (cell.solidWalls)
                                        cell.solidWalls.forEach(wall=>{
                                            if (wall) hasSolidWalls = true;
                                        })
                                    label+=type.substr(0,2);
                                    title+=type+" ";
                                });

                            cellNode.innerHTML=label;
                            cellNode.title=title;
                            cellNode.style.backgroundColor=cell.isRoom ? "#f00" : cell.isBlocking ? "#ccc" : "#fff";

                            if ((rowId == 0) && (cell.isRoom || cell.isBlocking || (cell.isWalled && cell.walls[0]))) closedSides[0]++;
                            if ((colId == cols-1) && (cell.isRoom || cell.isBlocking || (cell.isWalled && cell.walls[1]))) closedSides[1]++;                            
                            if ((rowId == rows-1) && (cell.isRoom || cell.isBlocking || (cell.isWalled && cell.walls[2]))) closedSides[2]++;
                            if ((colId == 0) && (cell.isRoom || cell.isBlocking || (cell.isWalled && cell.walls[3]))) closedSides[3]++;

                            let
                                roomSize = countRooms(side.angles[0],colId,rowId,roomsMap);

                            if (roomSize) {
                                addTagsSequence(expectedTags,"roomSize",roomSize);
                                roomsCount++;
                            }

                            if (cell.hedges)
                                cell.hedges.forEach(hedge=>{
                                    if (hedge) hasHedges = true;
                                })

                            // --- Cell walls check
                            if (cell.walls[0]) {
                                if (!cell.isWalled && upperCell && !upperCell.walls[2])
                                    errors.push(errorHeaderCell+": mismatching wall on upper cell");
                                cellNode.style.borderTop=cell.solidWalls && cell.solidWalls[0] ? "2px solid #000" : "1px solid #000";
                            } else if (cell.hedges && cell.hedges[0]) {
                                cellNode.style.borderTop="1px solid #0F0";
                            }

                            if (cell.walls[1]) {
                                if (!cell.isWalled && rightCell && !rightCell.walls[3])
                                    errors.push(errorHeaderCell+": mismatching wall on right cell");
                                cellNode.style.borderRight=cell.solidWalls && cell.solidWalls[1] ? "2px solid #000" : "1px solid #000";
                            } else if (cell.hedges && cell.hedges[1]) {
                                cellNode.style.borderRight="1px solid #0F0";
                            }

                            if (cell.walls[2]) {
                                if (!cell.isWalled && lowerCell && !lowerCell.walls[0])
                                    errors.push(errorHeaderCell+": mismatching wall on lower cell");
                                cellNode.style.borderBottom=cell.solidWalls && cell.solidWalls[2] ? "2px solid #000" :  "1px solid #000";
                            } else if (cell.hedges && cell.hedges[2]) {
                                cellNode.style.borderBottom="1px solid #0F0";
                            }

                            if (cell.walls[3]) {
                                if (!cell.isWalled && leftCell && !leftCell.walls[1])
                                    errors.push(errorHeaderCell+": mismatching wall on left cell");
                                cellNode.style.borderLeft=cell.solidWalls && cell.solidWalls[3] ? "2px solid #000" : "1px solid #000";
                            } else if (cell.hedges && cell.hedges[3]) {
                                cellNode.style.borderLeft="1px solid #0F0";
                            }

                            if (cell.isRoom) {

                                if (!upperCell && !cell.walls[0])
                                    errors.push(errorHeaderCell+": missing wall on room top");
                                if (!rightCell && !cell.walls[1])
                                    errors.push(errorHeaderCell+": missing wall on room right");
                                if (!lowerCell && !cell.walls[2])
                                    errors.push(errorHeaderCell+": missing wall on room bottom");
                                if (!leftCell && !cell.walls[3])
                                    errors.push(errorHeaderCell+": missing wall on room left");

                                if (upperCell && !upperCell.isRoom && !cell.walls[0])
                                    errors.push(errorHeaderCell+": missing wall on room top");
                                if (rightCell && !rightCell.isRoom && !cell.walls[1])
                                    errors.push(errorHeaderCell+": missing wall on room right");
                                if (lowerCell && !lowerCell.isRoom && !cell.walls[2])
                                    errors.push(errorHeaderCell+": missing wall on room bottom");
                                if (leftCell && !leftCell.isRoom && !cell.walls[3])
                                    errors.push(errorHeaderCell+": missing wall on room left");

                                if (upperCell && upperCell.isRoom && cell.walls[0])
                                    errors.push(errorHeaderCell+": extra wall on room top");
                                if (rightCell && rightCell.isRoom && cell.walls[1])
                                    errors.push(errorHeaderCell+": extra wall on room right");
                                if (lowerCell && lowerCell.isRoom && cell.walls[2])
                                    errors.push(errorHeaderCell+": extra wall on room bottom");
                                if (leftCell && leftCell.isRoom && cell.walls[3])
                                    errors.push(errorHeaderCell+": extra wall on room left");

                            } else if (!cell.isBlocking) {
                                if (!cell.isWalled && !upperCell && cell.walls[0])
                                    errors.push(errorHeaderCell+": wrong wall on corridor top");
                                if (!cell.isWalled && !rightCell && cell.walls[1])
                                    errors.push(errorHeaderCell+": wrong wall on corridor right");
                                if (!cell.isWalled && !lowerCell && cell.walls[2])
                                    errors.push(errorHeaderCell+": wrong wall on corridor bottom");
                                if (!cell.isWalled && !leftCell && cell.walls[3])
                                    errors.push(errorHeaderCell+": wrong wall on corridor left");

                                if (!cell.isWalled && upperCell && (upperCell.isRoom || upperCell.isBlocking) && !cell.walls[0])
                                    errors.push(errorHeaderCell+": missing wall on corridor top");
                                if (!cell.isWalled && rightCell && (rightCell.isRoom || rightCell.isBlocking) && !cell.walls[1])
                                    errors.push(errorHeaderCell+": missing wall on corridor right");
                                if (!cell.isWalled && lowerCell && (lowerCell.isRoom || lowerCell.isBlocking) && !cell.walls[2])
                                    errors.push(errorHeaderCell+": missing wall on corridor bottom");
                                if (!cell.isWalled && leftCell && (leftCell.isRoom || leftCell.isBlocking) && !cell.walls[3])
                                    errors.push(errorHeaderCell+": missing wall on corridor left");

                                if (!cell.isWalled && upperCell && !(upperCell.isRoom || upperCell.isBlocking) && cell.walls[0])
                                    errors.push(errorHeaderCell+": extra wall on corridor top");
                                if (!cell.isWalled && rightCell && !(rightCell.isRoom || rightCell.isBlocking) && cell.walls[1])
                                    errors.push(errorHeaderCell+": extra wall on corridor right");
                                if (!cell.isWalled && lowerCell && !(lowerCell.isRoom || lowerCell.isBlocking) && cell.walls[2])
                                    errors.push(errorHeaderCell+": extra wall on corridor bottom");
                                if (!cell.isWalled && leftCell && !(leftCell.isRoom || leftCell.isBlocking) && cell.walls[3])
                                    errors.push(errorHeaderCell+": extra wall on corridor left");

                                if (cell.hedges) {

                                    if (cell.hedges[0] && upperCell && (!upperCell.hedges || !upperCell.hedges[2]))
                                        errors.push(errorHeaderCell+": hedges not matching on top");
                                    if (cell.hedges[1] && rightCell && (!rightCell.hedges || !rightCell.hedges[3]))
                                        errors.push(errorHeaderCell+": hedges not matching on right");
                                    if (cell.hedges[2] && lowerCell && (!lowerCell.hedges || !lowerCell.hedges[0]))
                                        errors.push(errorHeaderCell+": hedges not matching on bottom");
                                    if (cell.hedges[3] && leftCell && (!leftCell.hedges || !leftCell.hedges[1]))
                                        errors.push(errorHeaderCell+": hedges not matching on left");
                                }

                            } else {
                                if (!(cell.walls[0] && cell.walls[1] && cell.walls[2] && cell.walls[3]))
                                    errors.push(errorHeaderCell+": missing walls on a blocking cell");
                            }

                            // --- Cell type check
                            if (cell.type)
                                cell.type.forEach(type=>{
                                    if (ALLOWED_CELLTYPES.indexOf(type) == -1)
                                        errors.push(errorHeaderCell+": invalid cell type '"+type+"'");
                                    else if (cellTypes.indexOf(type) == -1)
                                        cellTypes.push(type);
                                });
                            else
                                errors.push(errorHeaderCell+": missing cell types");

                            // --- Cell outdoor check
                            if (isOutdoor)
                                if ((cell.type.indexOf("light")!= -1) && cell.isRoom)
                                    errors.push(errorHeaderCell+": outdoor light cell can't bee a room");
                                else if ((cell.type.indexOf("dark") != -1) && !cell.isRoom && !cell.isBlocking)
                                    errors.push(errorHeaderCell+": outdoor dark cell must be a room");
                                else if ((cell.type.indexOf("dark") == -1) && cell.isRoom)
                                    errors.push(errorHeaderCell+": outdoor room cell must be dark");
                                else if ((cell.type.indexOf("light") == -1) && (cell.type.indexOf("water") == -1) && !cell.isRoom && !cell.isBlocking)
                                    errors.push(errorHeaderCell+": outdoor street cell must be light or water");

                        });

                        createNode(sideNode,"br");
                    });

                    if (cellTypes.indexOf("lava") != -1) {
                        deniedCells.push("crystal");
                        deniedCells.push("light");
                        allowedSkins.push("lava");
                        deniedSkins.push("crystal");
                        deniedSkins.push("heaven");
                        deniedSkins.push("red");
                        deniedSkins.push("light");
                        expectedSpecialRules.push("noLydian");
                    } else if (cellTypes.indexOf("crystal") != -1) {
                        deniedCells.push("lava");
                        deniedCells.push("light");
                        allowedSkins.push("crystal");
                        deniedSkins.push("lava");
                        deniedSkins.push("heaven");
                        deniedSkins.push("red");
                        deniedSkins.push("light");
                        expectedSpecialRules.push("noLydian");
                    } else if (hasHedges) {
                        deniedCells.push("crystal");
                        deniedCells.push("lava");
                        deniedSkins.push("heaven");
                        deniedSkins.push("red");
                        deniedSkins.push("light");
                        allowedSkins.push("outdoor");
                        allowedSkins.push("village");
                        deniedSkins.push("lava");
                        deniedSkins.push("crystal");
                        expectedSpecialRules.push("noLydian");
                        expectedSpecialRules.push("zombicideHedges");
                        expectedSpecialRules.push("zombicideTiles");
                        if (hasWater) expectedSpecialRules.push("zombicideWater");
                        if (hasSolidWalls) expectedSpecialRules.push("zombicideSolidWalls");
                    } else if (isOutdoor) {
                        deniedCells.push("crystal");
                        deniedCells.push("lava");
                        deniedSkins.push("heaven");
                        deniedSkins.push("red");
                        deniedSkins.push("light");
                        allowedSkins.push("outdoor");
                        deniedSkins.push("lava");
                        deniedSkins.push("crystal");
                        expectedSpecialRules.push("noLydian");
                        expectedSpecialRules.push("zombicideTiles");
                        if (hasWater) expectedSpecialRules.push("zombicideWater");
                        if (hasSolidWalls) expectedSpecialRules.push("zombicideSolidWalls");
                    } else {
                        deniedCells.push("crystal");
                        deniedCells.push("lava");
                        allowedSkins.push("rainbow");
                        allowedSkins.push("heaven");
                        allowedSkins.push("red");
                        allowedSkins.push("light");
                        deniedSkins.push("outdoor");
                        deniedSkins.push("lava");
                        deniedSkins.push("crystal");
                    }

                    if (closedSides[0] < cols)
                        openSidesCount++;

                    if (closedSides[1] < rows)
                        openSidesCount++;

                    if (closedSides[2] < cols)
                        openSidesCount++;

                    if (closedSides[3] < rows)
                        openSidesCount++;

                    addTagsSequence(expectedTags,"openSides",openSidesCount);
                    addTagsSequence(expectedTags,"roomsCount",roomsCount);

                    // --- Extra rules check

                    if (expectedSpecialRules.length)
                        if (side.specialRules) {
                            expectedSpecialRules.forEach(rule=>{
                                if (side.specialRules.indexOf(rule) == -1)
                                    errors.push(errorHeaderSide+": expected extra rule "+rule);
                            })
                            side.specialRules.forEach(rule=>{
                                if (expectedSpecialRules.indexOf(rule) == -1)
                                    errors.push(errorHeaderSide+": unexpected extra rule "+rule);
                            })
                        } else
                            errors.push(errorHeaderSide+": expected extra rules "+expectedSpecialRules.join(", "));

                    // --- Tags check

                    expectedTags.forEach(tag=>{
                        let
                            pos = side.tags.indexOf(tag);
                        if (pos == -1)
                            errors.push(errorHeaderSide+": tag '"+tag+"' is missing.");
                    });

                    side.tags.forEach(tag=>{
                        let
                            pos = expectedTags.indexOf(tag);
                        if (pos == -1)
                            errors.push(errorHeaderSide+": tag '"+tag+"' is extra.");
                    });

                    // --- Cell types check

                    deniedCells.forEach(type=>{
                        if (cellTypes.indexOf(type) != -1)
                            errors.push(errorHeaderSide+": cell type '"+type+"' not allowed in this tile.");
                    });

                    // --- Skin check

                    if (side.skins)
                        side.skins.forEach(skin=>{
                            if (allowedSkins.indexOf(skin) == -1)
                                errors.push(errorHeaderSide+": skin '"+skin+"' not allowed for this tile (Allowed: "+allowedSkins.join(", ")+")");

                            if (deniedSkins.indexOf(skin) != -1)
                                errors.push(errorHeaderSide+": skin '"+skin+"' denied for this tile (Allowed: "+allowedSkins.join(", ")+")");
                        });
                    else
                        errors.push(errorHeaderSide+": missing skin");

                    // --- ID check

                    if (side.id != cleanLabel)
                        errors.push(errorHeaderSide+": mismatching ID '"+side.id+"' with label '"+side.label+"'");

                    if ((tile.id.length != side.id.length-1) || (side.id.indexOf(tile.id) != 0))
                        errors.push(errorHeaderSide+": mismatching side ID '"+side.id+"' with tile ID '"+tile.id+"'");

                    if ((tile.label.length != side.label.length-1) || (side.label.indexOf(tile.label) != 0))
                        errors.push(errorHeaderSide+": mismatching side label '"+side.id+"' with tile label '"+tile.id+"'");

                    sideInfo.innerHTML=side.id+" <input style='width:900px' value='\""+expectedTags.join("\", \"")+"\"'>"

                })

            })

            dumpErrors(errorsNode,errors);
        },

        checkQuests:(into)=>{
            
            let
                html = "",
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                errors = [],
                resources = getAllResourcesTypes([ "quests", "tokensAvailable", "symbols", "globalLabels", "challenges", "interface" ]),
                globalLabels = {},
                wordTokens = {},
                translations = {},
                translationExcludeOption;

            // Look for the untranslated exclusion option
            resources.interface.settings.forEach(option=>{
                option.entries.forEach(entry=>{
                    if (entry.languageExcludeTags)
                        translationExcludeOption = entry.languageExcludeTags;
                })
            })

            // Prepare global labels

            for (let k in resources.tokensAvailable)
                globalLabels["tokensCount."+k]=true;

            for (let k in resources.symbols)
                globalLabels["symbol."+k]=true;

            ALLOWED_PLACEHOLDERS.forEach(label=>{
                globalLabels[label]=true;
            });

            for (let k in resources.globalLabels)
                checkLabel(errors,wordTokens,"Global label "+k,globalLabels,resources.globalLabels[k]);

            // Check data

            resources.challenges.forEach((challenge,cid)=>{
                challenge.rules.forEach((rule,rid)=>{
                    let
                        errorRVHeader = "Challenge "+cid+" R"+(rid+1);

                    rule.name.forEach((set,sid)=>{
                        checkLabel(errors,wordTokens,errorRVHeader+" NAME"+(sid+1),globalLabels,set);
                    });

                    if (rule.summary)
                        rule.summary.forEach((set,sid)=>{
                            checkLabel(errors,wordTokens,errorRVHeader+" SUMMARY"+(sid+1),globalLabels,set);
                        });

                    if (rule.explanation)
                        rule.explanation.forEach((set,sid)=>{
                            checkLabel(errors,wordTokens,errorRVHeader+" EXPLAN"+(sid+1),globalLabels,set);
                        });

                })
            });

            resources.quests.forEach((quest,id)=>{

                let
                    errorHeader="["+quest._package+"] Quest "+(id+1);

                if (!translations[quest._package]) translations[quest._package] = { packageData:quest._packageData, translations:{} };
                for (let k in quest.by) {
                    if (!translations[quest._package].translations[k]) translations[quest._package].translations[k]=0;
                    translations[quest._package].translations[k]++;
                }    

                if (quest.by)
                    checkLabel(errors,wordTokens,errorHeader+" BY",0,quest.by);
                else
                    errors.push(errorHeader+" BY: Origin missing (by)");

                quest.versions.forEach((version,vid)=>{
                    let
                        errorVHeader = errorHeader+" V"+(vid+1);

                    version.labels.forEach((labelsVersion,lvid)=>{
                        let
                            errorLVId=errorVHeader+" LV"+(lvid+1);
                        
                        labelsVersion.forEach((set,sid)=>{
                            let
                                placeholders = {};
                            
                            for (let k in globalLabels)
                                placeholders[k]=true;

                            for (let k in set)
                                placeholders["label."+k]=true;

                            // Check this version labels

                            version.title.forEach((set,sid)=>{
                                checkLabel(errors,wordTokens,errorVHeader+" TITLE"+(sid+1),placeholders,set);
                            });
        
                            version.story.forEach((set,sid)=>{
                                checkLabel(errors,wordTokens,errorVHeader+" STORY"+(sid+1),placeholders,set);
                            });
        
                            if (version.objectivesHeader)
                                version.objectivesHeader.forEach((set,sid)=>{
                                    checkLabel(errors,wordTokens,errorVHeader+" OBJHEADER"+(sid+1),placeholders,set);
                                });

                            version.rules.forEach((rule,rid)=>{
                                rule.forEach((version,rvid)=>{
                                    let
                                        errorRVHeader = errorVHeader+" R"+(rid+1)+" V"+rvid;

                                    version.name.forEach((set,sid)=>{
                                        checkLabel(errors,wordTokens,errorRVHeader+" NAME"+(sid+1),placeholders,set);
                                    });

                                    if (version.summary)
                                        version.summary.forEach((set,sid)=>{
                                            checkLabel(errors,wordTokens,errorRVHeader+" SUMMARY"+(sid+1),placeholders,set);
                                        });

                                    if (version.explanation)
                                        version.explanation.forEach((set,sid)=>{
                                            checkLabel(errors,wordTokens,errorRVHeader+" EXPLAN"+(sid+1),placeholders,set);
                                        });

                                })
                            })

                            for (let label in set) {
                                set[label].forEach((option, oid)=>{
                                    checkLabel(errors,wordTokens,errorLVId+" S"+sid+" L["+label+"] O"+oid,placeholders,option);
                                })
                            }

                        });
                    });

                })
            });

            // Show stats

            html+="<h2>Translations</h2><ul>";
            for (let k in translations) {
                let total = translations[k].translations.EN;
                html+="<li><b>"+k+"</b><ul>";
                for (let l in resources.interface.supportedLanguages) {
                    let
                        count = translations[k].translations[l]||0,
                        prc = count/total;
                    if (prc > 1)
                        errors.push("Quest set "+k+": Invalid "+l+" percentage "+prc);
                    else if ((prc <1) && (translations[k].packageData.provides.indexOf(translationExcludeOption[l][0]) == -1))
                        errors.push("Quest set "+k+": missing provides tag "+translationExcludeOption[l][0]);
                    else if ((prc == 1) && (translations[k].packageData.provides.indexOf(translationExcludeOption[l][0]) != -1))
                        errors.push("Quest set "+k+": provides tag "+translationExcludeOption[l][0]+" not needed");
                    html+="<li>"+l+": "+formatPercentage(prc)+" ("+count+"/"+total+")</li>";
                }
                html+="</ul></li>";
            }
            html+="</ul>";

            let
                languageId = 0,
                entryId = 0;

            for (let k in wordTokens) {
                let
                    languageSetId = "language-"+languageId,
                    list = [];

                languageId++;
                    
                html+="<h2 style='cursor:pointer' onclick=\"document.getElementById('"+languageSetId+"').style.display=(document.getElementById('"+languageSetId+"').style.display == 'block' ? 'none' : 'block')\">"+k+(wordTokens[k].warningCount ? " <span style='color:red'>("+wordTokens[k].warningCount+")</span>" : "") + "</h2><ol id='"+languageSetId+"' style='display:none'>";
                for (let w in wordTokens[k].words)
                    list.push({ isWarning:wordTokens[k].words[w].isWarning, word:w, count:wordTokens[k].words[w].entries.length, entries:wordTokens[k].words[w].entries });
                list.sort((a,b)=>{
                    if (a.isWarning && !b.isWarning) return -1;
                    else if (!a.isWarning && b.isWarning) return 1;
                    else if (a.word < b.word) return -1;
                    else if (a.word > b.word) return 1;
                    else return 0;
                });
                list.forEach(word=>{
                    let
                        setId = "set-"+entryId;
                    entryId++;
                    html+="<li style='cursor:pointer"+(word.isWarning ? ";color:red" : "")+"' onclick=\"document.getElementById('"+setId+"').style.display=(document.getElementById('"+setId+"').style.display == 'block' ? 'none' : 'block')\">"+word.word+" ("+word.count+")<ul id='"+setId+"' style='display:none'>";
                    word.entries.forEach(entry=>{
                        html+="<li>"+entry+"</li>";
                    })
                    html+="</ul></li>";
                });
                html+="</ol>";
            }

            dumpErrors(errorsNode,errors);
            resultsNode.innerHTML=html;

        },

        testCampaign:(into)=>{
            let
                resources = ModManager.load({
                    needs:[ "quests", "generator-campaign" ]
                }),
                html = "",
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                errors = [],
                acts = [];

            for (let act=0;act<ACTS;act++) {
                acts[act] = [];
                for (let map=0;map<ACT_MAPS;map++) {
                    acts[act][map] = [];
                    resources.quests.forEach(quest=>{
                        let
                            ok = true,
                            entry = {
                                score:0,
                                quest:quest
                            };

                        if (!quest._tested) {
                            quest._tested = true;
                            quest._noCampaignData = false;
                            quest._sideQuests = [];
                            quest._campaignSpecificRules = false;
                            quest._endingOnly = quest.forActs && quest.forActs.length == 1 && quest.forActs[0] == 2 && quest.forMaps && quest.forMaps.length == 1 && quest.forMaps[0] == 2;
                            quest._rulesToFix = [];
                            quest.versions.forEach(version=>{
                                if (!version.campaign)
                                    quest._noCampaignData = true;
                                else if (version.campaign.sideQuests)
                                    version.campaign.sideQuests.forEach(sidequest=>{
                                        sidequest.tags.forEach(tagset=>{
                                            tagset.forEach(tag=>{
                                                if (quest._sideQuests.indexOf(tag) == -1)
                                                    quest._sideQuests.push(tag);
                                            })
                                        })
                                    });
                                version.rules.forEach(ruleset=>{
                                    ruleset.forEach(rule=>{
                                        
                                        if (rule.campaignExplanation || rule.campaignSummary)
                                            quest._campaignSpecificRules = true;

                                        if (
                                            rule.explanation && rule.explanation[0].EN.match(/level 5/i) ||
                                            (rule.campaignExplanation && rule.campaignExplanation.length && rule.campaignExplanation[0].EN.match(/label\.campaign[a-zA-Z]*Boss@/))
                                        )
                                            quest._isBoss = true;

                                        if (
                                            (
                                                rule.explanation &&
                                                (rule.explanation[0].EN.indexOf("XP") != -1)) &&
                                                !rule.explanation[0].EN.match(/expected XP/) &&
                                                (!rule.campaignExplanation || (
                                                    (rule.campaignExplanation[0].EN.indexOf("XP") != -1) &&
                                                    !rule.campaignExplanation[0].EN.match(/[aA]ll Heroes gets[0-9 ]+XP/) &&
                                                    !rule.campaignExplanation[0].EN.match(/without gaining XP/)
                                                )
                                            )
                                        )
                                            quest._rulesToFix.push([ rule.explanation[0].EN, rule.campaignExplanation ? rule.campaignExplanation[0].EN : 0 ]);

                                        if (
                                            (rule.explanation && rule.explanation[0].EN.match(/level 5/i)) &&
                                            (!rule.campaignExplanation || (
                                                rule.campaignExplanation[0].EN.match(/level 5/i) ||
                                                (
                                                    !rule.campaignExplanation[0].EN.match(/label\.campaignBoss@/) &&
                                                    !rule.campaignExplanation[0].EN.match(/label\.campaignEasyBoss@/)
                                                )
                                            ))
                                        )
                                            quest._rulesToFix.push([ rule.explanation[0].EN, rule.campaignExplanation ? rule.campaignExplanation[0].EN : 0 ]);

                                        if (
                                            (rule.summary && (rule.summary[0].EN.indexOf("XP") != -1)) &&
                                            (!rule.campaignSummary || (
                                                (rule.campaignSummary[0].EN.indexOf("XP") != -1)
                                            ))
                                        )
                                            quest._rulesToFix.push([ rule.summary[0].EN, rule.campaignSummary ? rule.campaignSummary[0].EN : 0 ]);

                                        if (
                                            (rule.summary && rule.summary[0].EN.match(/level 5/i)) &&
                                            (!rule.campaignSummary || (
                                                rule.campaignSummary[0].EN.match(/level 5/i) ||
                                                (
                                                    !rule.campaignSummary[0].EN.match(/label\.campaignBoss@/) &&
                                                    !rule.campaignSummary[0].EN.match(/label\.campaignEasyBoss@/)
                                                )
                                            ))
                                        )
                                            quest._rulesToFix.push([ rule.summary[0].EN, rule.campaignSummary ? rule.campaignSummary[0].EN : 0 ]);
                                    })
                                })

                            })
                        }

                        if (!quest._matches)
                            quest._matches = 0;

                        if (quest.forActs)
                            if (quest.forActs.indexOf(act) != -1) {
                                entry.matchAct = true;
                                entry.score++;
                            }
                            else
                                ok = false;

                        if (quest.forMaps)
                            if (quest.forMaps.indexOf(map) != -1) {
                                entry.matchMap = true;
                                entry.score++;
                            } else
                                ok = false;

                        if (ok) {
                            let
                                label = "";
                            if (entry.matchAct)
                                label+="<span style='color:green'>A</span> ";
                            else
                                label+="<span style='color:red'>A</span> ";
                            if (entry.matchMap)
                                label+="<span style='color:green'>M</span> ";
                            else
                                label+="<span style='color:red'>M</span> ";
                            entry.label = label;
                            acts[act][map].push(entry);
                            quest._matches++;
                        }
                    })
                };
            };

            for (let act=0;act<ACTS;act++) {
                html+="<h2>Act "+(act+1)+"</h2>";
                for (let map=0;map<ACT_MAPS;map++) {
                    acts[act][map].sort((a,b)=>{
                        if (a.score < b.score) return 1;
                        else if (a.score > b.score) return -1;
                        else if (a.label < b.label) return -1;
                        else if (a.label > b.label) return 1;
                        else return 0;
                    });
                    
                    html+="<h3>Map "+(map+1)+" ("+acts[act][map].length+")</h3><ul>";
                    acts[act][map].forEach(quest=>{
                        let
                            label = quest.label+" "+quest.quest.type+" - "+quest.quest.by.EN;
                        html+="<li>";
                        switch (quest.score) {
                            case 0:{
                                html+=label;
                                break;
                            }
                            case 1:{
                                html+="<u>"+label+"</u>";
                                break;
                            }
                            case 2:{
                                html+="<b>"+label+"</b>";
                                break;
                            }
                        }

                        if (quest.quest._isBoss)
                            html+=" <span style='background-color:purple;color:white'>BOSS</span>";

                        if (quest.quest._endingOnly)
                            html+=" <span style='background-color:cyan;color:white'>Ending</span>";

                        if (quest.quest._campaignSpecificRules)
                            html+=" <span style='background-color:blue;color:white'>Campaign rules</span>";

                        if (quest.quest._noCampaignData)
                            html += " <span style='color:red'>(No campaign data)</span>";
                        else
                            html += " <span style='color:white;background-color:"+(quest.quest._endingOnly ? "gray" : CAMPAIGN_SIDEQUEST_COUNT[quest.quest._sideQuests.length] || "green")+"'>"+quest.quest._sideQuests.length+" side quests ("+(quest.quest._sideQuests.join(", "))+")</span>";
                        
                        html+="</li>";
                    })

                    html+="</ul>";
                };

            };

            html+="<h2>Unused</h2><ul>";

            resources.quests.forEach(quest=>{
                if (!quest._matches)
                    html+="<li>"+quest.type+" - "+quest.by.EN+"</li>";
            });

            html+="</ul>";

            resources.quests.forEach(quest=>{
                let
                    questLabel = quest.type+" - "+quest.by.EN;


                if (quest._matches) {

                    let
                        isMap3Only = quest.forMaps && (quest.forMaps.length ==1) && (quest.forMaps[0] == 2),
                        isMap3 = !quest.forMaps || (quest.forMaps.indexOf(2) != -1);

                    if (quest._noCampaignData)
                        errors.push("Used quest <b>"+questLabel+"</b> is missing campaign data");
                    else {
                        
                        if (CAMPAIGN_SIDEQUEST_COUNT[quest._sideQuests.length] && !quest._endingOnly)
                            errors.push("Used quest <b>"+questLabel+"</b> has not enough side quests ("+quest._sideQuests.length+")");

                        if (!quest._noCampaignData && quest._rulesToFix.length) {
                            let
                                line="Quest <b>"+questLabel+"</b> rules may not have fixed for campaign.";
                            quest._rulesToFix.forEach(rule=>{
                                line+="<ul><li><b>Original:</b> "+rule[0]+"</li><li><b>Changed:</b> "+(rule[1] || "(Missing)")+"</li></ul>";
                            });
                            errors.push(line);
                        }
                        
                        if (quest._isBoss && !isMap3Only)
                            errors.push("Quest <b>"+questLabel+"</b> is BOSS, so it should be for map 3 only");
                        if (!quest._isBoss && isMap3)
                            errors.push("Quest <b>"+questLabel+"</b> is not BOSS, so it should avoid map 3");

                    }

                } else {
                    
                    if (!quest._noCampaignData)
                        errors.push("Unused quest <b>"+questLabel+"</b> has campaign data.");    
    
                }

            });

            resultsNode.innerHTML=html;
            dumpErrors(errorsNode,errors);

            console.log(acts);
            console.log(resources);
        },

        testCampaign:(into)=>{
            let
                resources = ModManager.load({
                    needs:[ "quests", "generator-campaign" ]
                }),
                html = "",
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                errors = [],
                acts = [];

            for (let act=0;act<ACTS;act++) {
                acts[act] = [];
                for (let map=0;map<ACT_MAPS;map++) {
                    acts[act][map] = [];
                    resources.quests.forEach(quest=>{
                        let
                            ok = true,
                            entry = {
                                score:0,
                                quest:quest
                            };

                        if (!quest._tested) {
                            quest._tested = true;
                            quest._noCampaignData = false;
                            quest._sideQuests = [];
                            quest._campaignSpecificRules = false;
                            quest._endingOnly = quest.forActs && quest.forActs.length == 1 && quest.forActs[0] == 2 && quest.forMaps && quest.forMaps.length == 1 && quest.forMaps[0] == 2;
                            quest._rulesToFix = [];
                            quest.versions.forEach(version=>{
                                if (!version.campaign)
                                    quest._noCampaignData = true;
                                else if (version.campaign.sideQuests)
                                    version.campaign.sideQuests.forEach(sidequest=>{
                                        sidequest.tags.forEach(tagset=>{
                                            tagset.forEach(tag=>{
                                                if (quest._sideQuests.indexOf(tag) == -1)
                                                    quest._sideQuests.push(tag);
                                            })
                                        })
                                    });
                                version.rules.forEach(ruleset=>{
                                    ruleset.forEach(rule=>{
                                        
                                        if (rule.campaignExplanation || rule.campaignSummary)
                                            quest._campaignSpecificRules = true;

                                        if (
                                            rule.explanation && rule.explanation[0].EN.match(/level 5/i) ||
                                            (rule.campaignExplanation && rule.campaignExplanation.length && rule.campaignExplanation[0].EN.match(/label\.campaign[a-zA-Z]*Boss@/))
                                        )
                                            quest._isBoss = true;

                                        if (
                                            (
                                                rule.explanation &&
                                                (rule.explanation[0].EN.indexOf("XP") != -1)) &&
                                                !rule.explanation[0].EN.match(/expected XP/) &&
                                                (!rule.campaignExplanation || (
                                                    (rule.campaignExplanation[0].EN.indexOf("XP") != -1) &&
                                                    !rule.campaignExplanation[0].EN.match(/[aA]ll Heroes gets[0-9 ]+XP/) &&
                                                    !rule.campaignExplanation[0].EN.match(/without gaining XP/)
                                                )
                                            )
                                        )
                                            quest._rulesToFix.push([ rule.explanation[0].EN, rule.campaignExplanation ? rule.campaignExplanation[0].EN : 0 ]);

                                        if (
                                            (rule.explanation && rule.explanation[0].EN.match(/level 5/i)) &&
                                            (!rule.campaignExplanation || (
                                                rule.campaignExplanation[0].EN.match(/level 5/i) ||
                                                (
                                                    !rule.campaignExplanation[0].EN.match(/label\.campaignBoss@/) &&
                                                    !rule.campaignExplanation[0].EN.match(/label\.campaignEasyBoss@/)
                                                )
                                            ))
                                        )
                                            quest._rulesToFix.push([ rule.explanation[0].EN, rule.campaignExplanation ? rule.campaignExplanation[0].EN : 0 ]);

                                        if (
                                            (rule.summary && (rule.summary[0].EN.indexOf("XP") != -1)) &&
                                            (!rule.campaignSummary || (
                                                (rule.campaignSummary[0].EN.indexOf("XP") != -1)
                                            ))
                                        )
                                            quest._rulesToFix.push([ rule.summary[0].EN, rule.campaignSummary ? rule.campaignSummary[0].EN : 0 ]);

                                        if (
                                            (rule.summary && rule.summary[0].EN.match(/level 5/i)) &&
                                            (!rule.campaignSummary || (
                                                rule.campaignSummary[0].EN.match(/level 5/i) ||
                                                (
                                                    !rule.campaignSummary[0].EN.match(/label\.campaignBoss@/) &&
                                                    !rule.campaignSummary[0].EN.match(/label\.campaignEasyBoss@/)
                                                )
                                            ))
                                        )
                                            quest._rulesToFix.push([ rule.summary[0].EN, rule.campaignSummary ? rule.campaignSummary[0].EN : 0 ]);
                                    })
                                })

                            })
                        }

                        if (!quest._matches)
                            quest._matches = 0;

                        if (quest.forActs)
                            if (quest.forActs.indexOf(act) != -1) {
                                entry.matchAct = true;
                                entry.score++;
                            }
                            else
                                ok = false;

                        if (quest.forMaps)
                            if (quest.forMaps.indexOf(map) != -1) {
                                entry.matchMap = true;
                                entry.score++;
                            } else
                                ok = false;

                        if (ok) {
                            let
                                label = "";
                            if (entry.matchAct)
                                label+="<span style='color:green'>A</span> ";
                            else
                                label+="<span style='color:red'>A</span> ";
                            if (entry.matchMap)
                                label+="<span style='color:green'>M</span> ";
                            else
                                label+="<span style='color:red'>M</span> ";
                            entry.label = label;
                            acts[act][map].push(entry);
                            quest._matches++;
                        }
                    })
                };
            };

            for (let act=0;act<ACTS;act++) {
                html+="<h2>Act "+(act+1)+"</h2>";
                for (let map=0;map<ACT_MAPS;map++) {
                    acts[act][map].sort((a,b)=>{
                        if (a.score < b.score) return 1;
                        else if (a.score > b.score) return -1;
                        else if (a.label < b.label) return -1;
                        else if (a.label > b.label) return 1;
                        else return 0;
                    });
                    
                    html+="<h3>Map "+(map+1)+" ("+acts[act][map].length+")</h3><ul>";
                    acts[act][map].forEach(quest=>{
                        let
                            label = quest.label+" "+quest.quest.type+" - "+quest.quest.by.EN;
                        html+="<li>";
                        switch (quest.score) {
                            case 0:{
                                html+=label;
                                break;
                            }
                            case 1:{
                                html+="<u>"+label+"</u>";
                                break;
                            }
                            case 2:{
                                html+="<b>"+label+"</b>";
                                break;
                            }
                        }

                        if (quest.quest._isBoss)
                            html+=" <span style='background-color:purple;color:white'>BOSS</span>";

                        if (quest.quest._endingOnly)
                            html+=" <span style='background-color:cyan;color:white'>Ending</span>";

                        if (quest.quest._campaignSpecificRules)
                            html+=" <span style='background-color:blue;color:white'>Campaign rules</span>";

                        if (quest.quest._noCampaignData)
                            html += " <span style='color:red'>(No campaign data)</span>";
                        else
                            html += " <span style='color:white;background-color:"+(quest.quest._endingOnly ? "gray" : CAMPAIGN_SIDEQUEST_COUNT[quest.quest._sideQuests.length] || "green")+"'>"+quest.quest._sideQuests.length+" side quests ("+(quest.quest._sideQuests.join(", "))+")</span>";
                        
                        html+="</li>";
                    })

                    html+="</ul>";
                };

            };

            html+="<h2>Unused</h2><ul>";

            resources.quests.forEach(quest=>{
                if (!quest._matches)
                    html+="<li>"+quest.type+" - "+quest.by.EN+"</li>";
            });

            html+="</ul>";

            resources.quests.forEach(quest=>{
                let
                    questLabel = quest.type+" - "+quest.by.EN;


                if (quest._matches) {

                    let
                        isMap3Only = quest.forMaps && (quest.forMaps.length ==1) && (quest.forMaps[0] == 2),
                        isMap3 = !quest.forMaps || (quest.forMaps.indexOf(2) != -1);

                    if (quest._noCampaignData)
                        errors.push("Used quest <b>"+questLabel+"</b> is missing campaign data");
                    else {
                        
                        if (CAMPAIGN_SIDEQUEST_COUNT[quest._sideQuests.length] && !quest._endingOnly)
                            errors.push("Used quest <b>"+questLabel+"</b> has not enough side quests ("+quest._sideQuests.length+")");

                        if (!quest._noCampaignData && quest._rulesToFix.length) {
                            let
                                line="Quest <b>"+questLabel+"</b> rules may not have fixed for campaign.";
                            quest._rulesToFix.forEach(rule=>{
                                line+="<ul><li><b>Original:</b> "+rule[0]+"</li><li><b>Changed:</b> "+(rule[1] || "(Missing)")+"</li></ul>";
                            });
                            errors.push(line);
                        }
                        
                        if (quest._isBoss && !isMap3Only)
                            errors.push("Quest <b>"+questLabel+"</b> is BOSS, so it should be for map 3 only");
                        if (!quest._isBoss && isMap3)
                            errors.push("Quest <b>"+questLabel+"</b> is not BOSS, so it should avoid map 3");

                    }

                } else {
                    
                    if (!quest._noCampaignData)
                        errors.push("Unused quest <b>"+questLabel+"</b> has campaign data.");    
    
                }

            });

            resultsNode.innerHTML=html;
            dumpErrors(errorsNode,errors);

            console.log(acts);
            console.log(resources);
        },

        testCampaignModules:(into)=>{
            let
                errorsNode = createErrorsNode(into),
                resources = ModManager.load({
                    needs:[ "quests", "generator-campaign" ]
                }),
                words = [],
                errors = [];

            function addReward(rewards,reward) {
                if (rewards.list.indexOf(reward) === -1)
                    rewards.list.push(reward);
                if (!rewards.map[reward])
                    rewards.map[reward] = 0;
                rewards.map[reward]++;
            }

            function renderMap(into,map,symbols,mapLayer) {
                let
                    row,
                    cell,
                    cellData,
                    table = createNode(into,"table");
                for (let y=0;y<3;y++) {
                    if (y == 0) {
                        row = createNode(table,"tr");
                        createNode(row,"td");
                        for (let x=0;x<map.length;x++)
                            createNode(row,"td").innerHTML = "Map "+(x+1);
                    }
                    row = createNode(table,"tr");
                    cell = createNode(row,"td");
                    cell.innerHTML = "Act "+(y+1);
                    for (let x=0;x<3;x++)  {
                        cellData = map[y] ? map[y][x] : 0;
                        cell = createNode(row,"td");
                        cell.style.border = "1px solid #000";
                        if (cellData) {
                            for (let k in symbols)
                                if (cellData[k]) {
                                    let
                                        span = createNode(cell,"span");
                                    span.style.marginRight = "5px";
                                    span.innerHTML = typeof symbols[k] === "object" ? symbols[k][cellData[k]] : symbols[k];
                                    span.title = k+": "+JSON.stringify(cellData[k]);
                                }
                        } else
                            cell.style.backgroundColor = "gray";
                    }
                    if (mapLayer && mapLayer[y]) {
                        cell = createNode(row,"td");
                        cell.style.backgroundColor = "#000";
                        cell.style.width = "10px";
                        for (let x=0;x<3;x++) {
                            cell = createNode(row,"td");
                            cell.style.border = "1px solid #000";
                            if (mapLayer[y][x])
                                cell.innerHTML = mapLayer[y][x].join(" ");
                            else
                                cell.style.backgroundColor = "gray";
                        }
                    }
                }
            }

            [
                {
                    name:"Reward models",
                    list:resources.campaignRewardModels,
                    evaluateQuests:true,
                    tables:[
                        {
                            name:"Main quests",
                            symbols:{
                                questRewardTags:"<span style='color:green'>[R]</span>",
                                challengeAsRule:"<span style='color:red'>[C]</span>"
                            }
                        },{
                            name:"Side quests",
                            symbols:{
                                challengeRewardTags:"<span style='color:red'>[Challenge]</span>",
                                sideQuestRewardTags:"<span style='color:yellow'>[Sidequest]</span>"
                            }
                        }
                    ]
                },{
                    name:"Crawling models",
                    list:resources.campaignCrawlingModels,
                    tables:[
                        {
                            name:"Crawl",
                            symbols:{
                                dungeonCrawling:{
                                    yes:"<span style='color:red'>[Hidden]</span>",
                                    no:"[Visible]"
                                }
                            }
                        }
                    ]
                },{
                    name:"Map size models",
                    list:resources.campaignMapModels,
                    tables:[
                        {
                            name:"Size",
                            symbols:{
                                mapSize:{
                                    large:"<span style='font-weight:bold'>LARGE</span>",
                                    small:"small"
                                }
                            }
                        }
                    ]
                },{
                    name:"Act models",
                    list:resources.campaignActModels,
                    tables:[
                        {
                            name:"Act",
                            symbols:{
                                place:"<span style='font-weight:bold'>Place</span>",
                                uniform:{
                                    yes:"<span style='color:green'>[Unform]</span>",
                                    no:"<span style='color:red'>[Multi]</span>"
                                }
                            }
                        }
                    ]
                },{
                    name:"Boss fight models",
                    list:resources.campaignBossFightModels,
                    tables:[
                        {
                            name:"Boss fight",
                            symbols:{
                                bossFight:"<span style='font-weight:bold'>Boss</span>",
                                bossFightRewardTags:"[R]",
                            }
                        }
                    ]
                }
            ].forEach(list=>{

                createNode(into,"h2").innerHTML = list.name;
                list.list.forEach(element=>{
                    let
                        mapLayer = [],
                        mapName = "<b>"+list.name+" - "+element.label.EN+"</b>";
                        map = [];
                    createNode(into,"h3").innerHTML = element.label.EN;

                    if (element.words) {
                        if (element.words.length == CAMPAIGN_NAME_LENGTH) {
                            element.words.forEach(list=>{
                                list.forEach(word=>{
                                    if (words.indexOf(word) == -1)
                                        words.push(word);
                                    else
                                        errors.push("Duplicated name <b>"+word+"</b> for "+mapName);
                                })
                            })
                        } else 
                            errors.push("Invalid words count for "+mapName);
                    } else
                        errors.push("Missing words for "+mapName);

                    element.models.forEach(model=>{
                        model.at.forEach(coord=>{
                            if (!map[coord.act]) map[coord.act]=[];
                            if (!map[coord.act][coord.map]) map[coord.act][coord.map]={};
                            if (model.flags.length !== 1)
                                errors.push("Invalid flags length for "+mapName);
                            model.flags.forEach(flagset=>{
                                for (let k in flagset)
                                    if (map[coord.act][coord.map][k])
                                        errors.push("Conflicting <b>"+k+"</b> key at <b>"+JSON.stringify(coord)+"</b> for "+mapName);
                                    else
                                        map[coord.act][coord.map][k] = flagset[k];
                            })
                        })
                    });

                    if (list.evaluateQuests) {
                        let
                            rewards = {list:[], map:{} };

                        if (map[2] && map[2][2] && (map[2][2].questRewardTags || map[2][2].challengeRewardTags || map[2][2].sideQuestRewardTags))
                            errors.push("No reward allowed on last map for "+mapName);
                        map.forEach((act,actId)=>{
                            if (!mapLayer[actId]) mapLayer[actId]=[];
                            act.forEach((map,mapId)=>{
                                if (!mapLayer[actId][mapId]) mapLayer[actId][mapId] = [];
                                if (map.questRewardTags) {
                                    map.questRewardTags.forEach(rewardSet=>{
                                        rewardSet.forEach(reward=>{
                                            mapLayer[actId][mapId].push("<span style='color:green'>"+reward+"</span>");
                                            addReward(rewards,reward);
                                        })
                                    })
                                }
                                if (map.sideQuestRewardTags) {
                                    map.sideQuestRewardTags.forEach(rewardSet=>{
                                        rewardSet.forEach(reward=>{
                                            mapLayer[actId][mapId].push("<span style='color:yellow'>"+reward+"</span>");
                                            addReward(rewards,reward);
                                        })
                                    })
                                }
                                if (map.challengeRewardTags) {
                                    map.challengeRewardTags.forEach(rewardSet=>{
                                        rewardSet.forEach(reward=>{
                                            mapLayer[actId][mapId].push("<span style='color:red'>"+reward+"</span>");
                                            addReward(rewards,reward);
                                        })
                                    })
                                }
                            })
                        });

                        resources.campaignRewards.forEach(reward=>{
                            let
                                obtain = false;
                            reward.tags.forEach(tag=>{
                                if (rewards.list.indexOf(tag) != -1)
                                    obtain = true;
                            });
                            if (!obtain)
                                errors.push("Item <b>"+reward.tags.join(", ")+"</b> ("+reward.description.EN+") can't be obtained in "+mapName);
                        });

                        for (let k in rewards.map)
                            if ((CAMPAIGN_ITEM_LIMITS[k] && rewards.map[k] > CAMPAIGN_ITEM_LIMITS[k]) || (!CAMPAIGN_ITEM_LIMITS[k] && (rewards.map[k]!=1)))
                                errors.push("Reward <b>"+k+"</b> is obtained too many times ("+rewards.map[k]+") in "+mapName);


                    }
                    list.tables.forEach(table=>{
                        createNode(into,"p").innerHTML = table.name;
                        renderMap(createNode(into,"div"),map,table.symbols,mapLayer);
                    })
                });

            });

            dumpErrors(errorsNode,errors);

        },

        testCampaigns:(into)=>{
            let
                errorsNode = createErrorsNode(into),
                buttonsNode = createNode(into,"div"),
                separatorNode = createNode(into,"hr"),
                resultsNode = createNode(into,"div"),
                previewNode = createNode(into,"div"),
                errors = [],
                resources = ModManager.load({
                    needs:[ "quests", "generator-campaign" ]
                });

            CAMPAIGN_CONFIGS.forEach(config=>{
                let
                    button = createNode(buttonsNode,"input");
                button.type = "button";
                button.value=config.id;
                button.onclick=()=>{

                    let
                        testsSequence = [],
                        resources = ModManager.load(config);

                    resources.campaignModels.forEach(model=>{
                        testsSequence.push({
                            config:config,
                            campaign:model,
                            iterations:TESTCAMPAIGNS_ITERATIONS
                        });
                    });

                    startCampaignTester(testsSequence,resultsNode,previewNode,errors,(results)=>{
                        buttonsNode.style.display = "block";
                        dumpErrors(errorsNode,errors);
                    });
                }

                
            });

            
        },

        testCampaignText:(into)=>{

            let
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                resources = getAllResourcesTypes([ "interface", "campaignModels" ]),
                text = "",
                errors = [];

            for (let k in resources.interface.supportedLanguages) {
                text+="<hr><h2>"+resources.interface.supportedLanguages[k]+"</h2>";
                resources.campaignModels.forEach(model=>{
                    text+="<h3>"+model.label.EN+"</h3>";
                    if (model.story) {
                        text+="<h4>Prologue</h4>";
                        model.story.forEach(row=>{
                            row.forEach(option=>{
                                text+=option[k];
                            })
                        })
                    }
                    if (model.introduction) {
                        text+="<h4>Beginning the first map</h4>";
                        model.introduction.forEach(row=>{
                            row.forEach(option=>{
                                text+=option[k];
                            })
                        })
                    }
                    model.pages.forEach(page=>{
                            if (page.progression) {
                                if (page.progression.story) {
                                    text+="<h4>End map</h4>";
                                    page.progression.story.forEach(row=>{
                                        row.forEach(option=>{
                                            text+=option[k];
                                        })
                                    })
                                }
                                if (page.progression.nextMissionStory) {
                                    text+="<h4>Beginning map</h4>";
                                    page.progression.nextMissionStory.forEach(row=>{
                                        row.forEach(option=>{
                                            text+=option[k];
                                        })
                                    })
                                }
                                if (page.progression.ending) {
                                    text+="<h4>Ending</h4>";
                                    page.progression.ending.forEach(row=>{
                                        row.forEach(option=>{
                                            text+=option[k];
                                        })
                                    })
                                }
                            }
                        })
                    })
            }

            resultsNode.innerHTML = text;
        },

        testBoss:(into)=>{
            
            let
                resources = ModManager.load({
                    needs:[ "boss" ]
                }),
                summaryHtml = "",
                oneshotHtml = "",
                campaignHtml = "",
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                errors = [],
                bossMap = [];

            oneshotHtml+="<h2>One-shot boss</h2>";
            campaignHtml = "<h2>Campaign boss</h2>";

            function numberToColor(number) {
                let
                    byte = Math.floor((number/100)*255);

                return "rgb("+byte+","+(255-byte)+",0)";
            }

            function summarizer(text) {
                let
                    tags = [];

                text.forEach(line=>{
                    line.replace(/\{([^}]+)\}/g,(m,m1)=>{
                        m1 = m1.replace(/@.*/,"").replace(/^[^.]+\./,"");
                        switch (m1) {
                            case "bossName":{
                                m1="(N)";
                                break;
                            }
                            case "bossHealth":{
                                m1="(H)";
                                break;
                            }
                            case "bossPhase2Health":{
                                m1="(H2)";
                                break;
                            }
                        }
                        tags.push(m1);
                    })
                })
            
                return tags;
            }

            // One-shot

            resources.bossList.forEach(boss=>{
                let
                    row = {
                        name:boss.title.EN,
                        health:{}
                    };
                oneshotHtml+="<h3>"+boss.title.EN+"</h3>"
                oneshotHtml+="<table border=1><tr><th>Level</th><th>Prep</th><th>Ph.1 HP</th><th>Prep</th><th>Ph.2 HP</th><th>Total</th></tr>";
                for (let k in boss.levels) {
                    let
                        totalHealth = 0,
                        label = "<b>"+boss.title.EN+"</b> Lv. <b>"+k+"</b>",
                        bossMode = boss.labels.bossMode;

                    oneshotHtml+="<tr><td>"+k+"</td><td>";
                    
                    if (!boss.levels[k].labels.bossModifier)
                        errors.push("Boss "+label+" is missing modifier text");
                    else {
                        let
                            summary = summarizer(boss.levels[k].labels.bossModifier.EN);
                        if (summary.indexOf("(H2)") != -1)
                            errors.push("Boss "+label+" has phase 2 health on phase 1 modifier text");
                        oneshotHtml+=summary.join(", ")+(bossMode ? " + "+bossMode.EN : "");
                    }
                    
                    oneshotHtml+="</td><td>";

                    if (boss.levels[k].labels.bossHealth) {
                        oneshotHtml+=boss.levels[k].labels.bossHealth.EN;
                        totalHealth += boss.levels[k].labels.bossHealth.EN;
                    } else {
                        oneshotHtml+="[!!]";
                        errors.push("Boss "+label+" is missing base health (bossHealth)");
                    }
                    oneshotHtml+="</td>";
                    if (boss.levels[k].labels.bossPhase2Health) {
                        if (!boss.levels[k].labels.bossPhase2Modifier) {
                            errors.push("Boss "+label+" is missing phase 2 modifier text (bossPhase2Modifier)");
                            oneshotHtml+="<td>[!!!]</td>";
                        } else {
                            let
                                summary = summarizer(boss.levels[k].labels.bossPhase2Modifier.EN);
                            if (summary.indexOf("(H)") != -1)
                                errors.push("Boss "+label+" has phase 1 health on phase 2 modifier text");
                            oneshotHtml+="<td>"+summary.join(", ")+"</td>";
                        }
                        if (boss.levels[k].labels.bossPhase2Health.EN < boss.levels[k].labels.bossHealth.EN)
                            errors.push("Boss "+label+" has phase 2 health less than phase 1 health");
                        oneshotHtml+="<td>"+boss.levels[k].labels.bossPhase2Health.EN+"</td>";
                        totalHealth += boss.levels[k].labels.bossPhase2Health.EN;
                    } else {
                        if (boss.levels[k].labels.bossPhase2Modifier)
                            errors.push("Boss "+label+" is missing phase 2 health (bossPhase2Health)");
                        oneshotHtml+="<td>-</td><td>-</td>";
                    }
                    oneshotHtml+="</td><td>"+totalHealth+"</td></tr>";
                    row.health[k]=totalHealth;
                }
                oneshotHtml+="</table>";
                bossMap.push(row);
            });

            // Campaign
            let
                globalStats = [];

            resources.bossList.forEach(boss=>{
                campaignHtml+="<h3>"+boss.title.EN+"</h3>";
                if (boss.campaign) {

                    campaignHtml+="<table border=1><tr><th>Act</th><th>Map</th><th>Level</th><th>HP</hp><th>Bonus HP</th><th>Total HP</th><th>Prep</th><th>Prep Ph.2</th></tr>";
                    let
                        stats = [];
                    for (let a=0;a<ACTS;a++)
                        for (let m=0;m<ACT_MAPS;m++) {
                            let
                                found = 0,
                                label = "<b>"+boss.title.EN+"</b> Act <b>"+a+"</b> Map <b>"+m+"</b>";
                            boss.campaign.forEach(row=>{
                                row.at.forEach(at=>{
                                    if ((at.act == a) && (at.map == m)) {
                                        found++;
                                        if (!stats[a]) stats[a]=[];
                                        if (!stats[a][m]) stats[a][m]=[];

                                        if (!globalStats[a]) globalStats[a]=[];
                                        if (!globalStats[a][m]) globalStats[a][m]=[];

                                        for (let l=1;l<=BOSS_LEVELS;l++) {
                                            if (boss.levels[l]) {
                                                let
                                                    total = 0,
                                                    bonus = 0,
                                                    prep1 = boss.levels[l].labels.bossModifier,
                                                    prep2 = boss.levels[l].labels.bossPhase2Modifier,
                                                    bossMode = boss.labels.bossMode;
                                                campaignHtml+="<tr><td>"+a+"</td><td>"+m+"</td><td>"+l+"</td>";
                                                if (boss.levels[l].labels.bossHealth)
                                                    total+=boss.levels[l].labels.bossHealth.EN;
                                                if (boss.levels[l].labels.bossPhase2Health)
                                                    total+=boss.levels[l].labels.bossPhase2Health.EN;
                                                campaignHtml+="<td>"+total+"</td>";
                                                if (row.mods) {
                                                    if (row.mods.labels) {
                                                        if (row.mods.labels.bossModifier)
                                                            if (prep1)
                                                                prep1 = row.mods.labels.bossModifier;
                                                            else
                                                                errors.push("Boss "+label+" is changing preparation but it has no preparation text");
                                                        if (row.mods.labels.bossPhase2Modifier)
                                                            if (prep2)
                                                                prep2 = row.mods.labels.bossPhase2Modifier;
                                                            else
                                                                errors.push("Boss "+label+" is changing phase 2 preparation but it has no preparation text");
                                                        if (row.mods.labels.bossMode)
                                                            bossMode = row.mods.labels.bossMode;
                                                    }
                                                    if (row.mods.labelsBonus) {
                                                        if (row.mods.labelsBonus.bossHealth)
                                                            bonus += row.mods.labelsBonus.bossHealth.EN;
                                                        if (row.mods.labelsBonus.bossPhase2Health) {
                                                            if (!boss.levels[l].labels.bossPhase2Health)
                                                                errors.push("Boss "+label+" is giving phase 2 bonus without phase 2 base health");
                                                            bonus += row.mods.labelsBonus.bossPhase2Health.EN;
                                                        }
                                                    }
                                                }
                                                campaignHtml+="<td>"+bonus+"</td>";
                                                total+=bonus;
                                                campaignHtml+="<td>"+total+"</td>";
                                                
                                                if (prep1)
                                                    campaignHtml+="<td>"+summarizer(prep1.EN).join(", ")+(bossMode ? " + "+bossMode.EN : "")+"</td>";
                                                else
                                                    campaignHtml+="<td></td>";

                                                if (prep2)
                                                    campaignHtml+="<td>"+summarizer(prep2.EN).join(", ")+"</td>";
                                                else
                                                    campaignHtml+="<td></td>";

                                                if (!stats[a][m][l]) stats[a][m][l]={};
                                                if (!globalStats[a][m][l]) globalStats[a][m][l]={};

                                                if ((stats[a][m][l].min === undefined) || (total < stats[a][m][l].min))
                                                    stats[a][m][l].min = total;
                                                if ((stats[a][m][l].max === undefined) || (total > stats[a][m][l].max))
                                                    stats[a][m][l].max = total;
                                                if ((globalStats[a][m][l].min === undefined) || (total < globalStats[a][m][l].min))
                                                    globalStats[a][m][l].min = total;
                                                if ((globalStats[a][m][l].max === undefined) || (total > globalStats[a][m][l].max))
                                                    globalStats[a][m][l].max = total;


                                            }
                                        }

                                        campaignHtml+="</tr>";
                                    }
                                });
                            });
                            if (found == 0)
                                errors.push("Boss "+label+" not found");
                            else if (found > 1)
                                errors.push("Boss "+label+" found too many times ("+found+")");
                        }
                    
                    campaignHtml+="</table>";

                    campaignHtml+="<table border=1><tr><th>Act</th><th>Map</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th></tr>";

                    for (let a=0;a<ACTS;a++)
                        for (let m=0;m<ACT_MAPS;m++) {
                            campaignHtml+="<tr><td>"+a+"</td><td>"+m+"</td>";
                            for (let l=1;l<=BOSS_LEVELS;l++) {
                                campaignHtml+="<td>";
                                if (stats[a] && stats[a][m] && stats[a][m][l])
                                    if (stats[a][m][l].min == stats[a][m][l].max)
                                        campaignHtml+=stats[a][m][l].min;
                                    else
                                        campaignHtml+=stats[a][m][l].min+" - "+stats[a][m][l].max;
                                else
                                    campaignHtml+="&nbsp;"
                                campaignHtml+="</td>";
                            }
                            campaignHtml+="</tr>";
                        }
                    campaignHtml+="</table>";
                
                } else
                    errors.push("Boss <b>"+boss.title.EN+"</b> is missing campaign data");

            });

            summaryHtml+="<h2>One-shot boss summary</h2>";
            summaryHtml+="<table border=1><tr><th>Level</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th></tr>";
            bossMap.forEach(row=>{
                summaryHtml+="<tr><td>"+row.name+"</td>";
                for (let k=1;k<=BOSS_LEVELS;k++)
                    if (row.health[k])
                        summaryHtml+="<td style='background-color:"+numberToColor(row.health[k])+"'>"+row.health[k]+"</td>";
                    else
                        summaryHtml+="<td>-</td>";
                summaryHtml+="</tr>";
            })
            summaryHtml+="</table>";


            summaryHtml+="<h2>Campaign boss summary</h2>";
            summaryHtml+="<table border=1><tr><th>Act</th><th>Map</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th></tr>";
            for (let a=0;a<ACTS;a++)
                for (let m=0;m<ACT_MAPS;m++) {
                    summaryHtml+="<tr><td>"+a+"</td><td>"+m+"</td>";
                    for (let l=1;l<=BOSS_LEVELS;l++) {
                        summaryHtml+="<td";
                        if (globalStats[a] && globalStats[a][m] && globalStats[a][m][l]) {
                            summaryHtml+=" style='background-color:"+numberToColor(globalStats[a][m][l].max)+"'>";
                            if (globalStats[a][m][l].min == globalStats[a][m][l].max)
                                summaryHtml+=globalStats[a][m][l].min;
                            else
                                summaryHtml+=globalStats[a][m][l].min+" - "+globalStats[a][m][l].max;
                        } else
                            summaryHtml+=">&nbsp;"
                        summaryHtml+="</td>";
                    }
                    summaryHtml+="</tr>";
                }
            summaryHtml+="</table>";
            
            resultsNode.innerHTML=summaryHtml+oneshotHtml+campaignHtml;
            dumpErrors(errorsNode,errors);

        },

        testQuestsBoss:(into)=>{
            
            let
                resources = ModManager.load({
                    needs:[ "quests", "generator-campaign" ]
                }),
                keepHtml = "",
                notKeepHtml = "",
                noPickHtml = "",
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                errors = [],
                mapmodQuests = {},
                requiresCampaignRule={
                    collectTime:true
                };

            function checkRegExps(str,reg) {
                for (let i=0;i<reg.length;i++) {
                    let
                        done = false,
                        newstr = str.replace(reg[i],(m,m1)=>{
                            done = true;
                            return "<span style='background-color:#ff0;margin:0 5px'>"+m1+"</span>";
                        })
                    if (done)
                        return newstr;
                }
                return false;
            }

            resources.campaignSideQuests.forEach(sidequest=>{
                if (sidequest.mods)
                    sidequest.tags.forEach(tag=>{
                        mapmodQuests[tag] = true;
                    })
            });

            resources.quests.forEach(quest=>{
                let
                    questLabel = quest.type+" - "+quest.by.EN;

                quest.versions.forEach(version=>{

                    let
                        questResult = {
                            mapModOnCampaign:false,
                            missingVictoryCondition:true,
                            requiresCampaignRule:false,
                            hasWrongEndCondition:[],
                            missingBoss:false,
                            bossPreparation:false,
                            campaignBossPreparation:false,
                            tokenRemoved:false,
                            isCollecting:false,
                            collectCounter:0
                        };

                    if (version.boss) {
                        questResult.bossPreparation = version.boss.preparation ? version.boss.preparation.EN : 0;
                        questResult.campaignBossPreparation = version.boss.campaignPreparation ? version.boss.campaignPreparation.EN : 0;
                    } else
                        questResult.missingBoss = true;

                    if (version.campaign && version.campaign.sideQuests)
                        version.campaign.sideQuests.forEach(quest=>{
                            if (quest.mods) {
                                questResult.isCollecting = "(due to sidequest map modifier)";
                                questResult.mapModOnCampaign = true;
                            }
                                
                            quest.tags.forEach(tagset=>{
                                tagset.forEach(tag=>{
                                    if (mapmodQuests[tag]) {
                                        questResult.isCollecting = "(due to related sidequest map modifier)";
                                        questResult.mapModOnCampaign = true;
                                    }
                                    if (requiresCampaignRule[tag])
                                        questResult.requiresCampaignRule = true;
                                })
                            })
                        })

                    version.rules.forEach(ruleset=>{
                        ruleset.forEach(rule=>{
                            
                            if (
                                rule.explanation &&
                                (
                                    (rule.explanation[0].EN.match(/questVictory/i)) &&
                                    (rule.explanation[0].IT.match(/questVictory/i))
                                )
                            )
                                questResult.missingVictoryCondition = false;

                            if (
                                rule.summary &&
                                (
                                    (rule.summary[0].EN.match(/questVictory/i)) &&
                                    (rule.summary[0].IT.match(/questVictory/i))
                                )
                            )
                                questResult.missingVictoryCondition = false;

                            if (
                                rule.explanation &&
                                (
                                    (rule.explanation[0].EN.match(/(?:^|\W)victory(?:$|\W)/i)) ||
                                    (rule.explanation[0].IT && rule.explanation[0].IT.match(/(?:^|\W)vittoria(?:$|\W)/i))
                                )
                            )
                                questResult.hasWrongEndCondition.push(rule.explanation[0].EN);

                            if (
                                rule.campaignExplanation &&
                                rule.campaignExplanation[0] &&
                                (
                                    (rule.campaignExplanation[0].EN.match(/(?:^|\W)victory(?:$|\W)/i)) ||
                                    (rule.campaignExplanation[0].IT && rule.campaignExplanation[0].IT.match(/(?:^|\W)vittoria(?:$|\W)/i))
                                )
                            )
                                questResult.hasWrongEndCondition.push(rule.campaignExplanation[0].EN);
                            
                            if (
                                rule.summary &&
                                (
                                    (rule.summary[0].EN.match(/(?:^|\W)victory(?:$|\W)/i)) ||
                                    (rule.summary[0].IT && rule.summary[0].IT.match(/(?:^|\W)vittoria(?:$|\W)/i))
                                )
                            )
                                questResult.hasWrongEndCondition.push(rule.summary[0].EN);

                            if (
                                rule.campaignSummary &&
                                rule.campaignSummary[0] &&
                                (
                                    (rule.campaignSummary[0].EN.match(/(?:^|\W)victory(?:$|\W)/i)) ||
                                    (rule.campaignSummary[0].IT && rule.campaignSummary[0].IT.match(/(?:^|\W)vittoria(?:$|\W)/i))
                                )
                            )
                                questResult.hasWrongEndCondition.push(rule.campaignSummary[0].EN);

                            if (rule.explanation) {

                                let
                                    match;
                                    
                                match = checkRegExps(rule.explanation[0].EN,[
                                    /(?:^|\W)(collect)(?:$|\W)/i,
                                    /(?:^|\W)(pick it up)(?:$|\W)/i,
                                    /(?:^|\W)(as an equipment card)(?:$|\W)/i,
                                    /(?:^|\W)(take this item)(?:$|\W)/i,
                                    /(?:^|\W)(token on [a-zA-Z]+ Hero Card)(?:$|\W)/i,
                                    /(?:^|\W)(Hero [a-zA-Z ]+ owns)(?:$|\W)/i
                                ]);

                                if (match) {
                                    console.log(questLabel,"++",rule.explanation[0].EN);
                                    questResult.collectCounter++;
                                    questResult.isCollecting = match;
                                }

                                match = checkRegExps(rule.explanation[0].EN,[
                                    /(?:^|\W)(remove the token)(?:$|\W)/i,
                                    /(?:^|\W)(removing the token)(?:$|\W)/i,
                                    /(?:^|\W)(remove it from the dungeon)(?:$|\W)/i,
                                    /(?:^|\W)(discards? the[a-zA-Z ]+token)(?:$|\W)/i,
                                    /(?:^|\W)(removes? the[a-zA-Z ]+token)(?:$|\W)/i,
                                    /(?:^|\W)(place [a-zA-Z ]+ tokens on the)(?:$|\W)/i,
                                    /(?:^|\W)(drop it)(?:$|\W)/i
                                ]);

                                if (match) {
                                    console.log(questLabel,"--",rule.explanation[0].EN);
                                    questResult.collectCounter--;
                                    questResult.tokenRemoved = match;
                                }
                            }

                        })
                    });

                    let
                        html="<h3>"+questLabel+"</h3>"+
                        "<li><b>Is Collecting:</b> "+questResult.isCollecting+"<ul>"+
                        "<li><b>Token removed:</b> "+(questResult.tokenRemoved || "NO")+"</li>"+
                        "<li><b>Pre-boss preparation:</b> "+(questResult.bossPreparation || "N/A")+"</li>"+
                        "<li><b>Campaign pre-boss preparation:</b> "+(questResult.campaignBossPreparation || "N/A")+"</li>"+
                        "</ul></li>";

                    if (questResult.isCollecting)
                        if (questResult.collectCounter>0)
                            keepHtml+=html;
                        else
                            notKeepHtml+=html;
                    else
                        noPickHtml += html;

                    if ((questResult.collectCounter>0) && !questResult.bossPreparation)
                        errors.push("Quest <b>"+questLabel+"</b> spawn collectible tokens that are not removed before boss");

                    if ((questResult.collectCounter<=0) && questResult.bossPreparation)
                        errors.push("Quest <b>"+questLabel+"</b> has collectible tokens that don't need to be removed before boss");

                    if (questResult.requiresCampaignRule && !questResult.campaignBossPreparation)
                        errors.push("Quest <b>"+questLabel+"</b> requires campaign-specific preparation");

                    if (questResult.missingBoss)
                        errors.push("Quest <b>"+questLabel+"</b> is missing one-shot boss data");
                    else {

                        if (questResult.missingVictoryCondition)
                            errors.push("Quest <b>"+questLabel+"</b> has no explicit victory conditions");

                        if (questResult.hasWrongEndCondition.length) {
                            let
                                line = "Quest <b>"+questLabel+"</b> has victory condition as text<ul>";
                            questResult.hasWrongEndCondition.forEach(subline=>{
                                line+="<li>"+subline+"</li>";
                            })
                            errors.push(line+"</ul>");
                        }

                    }

                })

            });

            resultsNode.innerHTML="<h2>Keep tokens</h2>"+keepHtml+"<hr><h2>Not keep tokens</h2>"+notKeepHtml+"<hr><h2>No pick</h2>"+noPickHtml;

            // This validator is quite approximative.
            // Enable errors dumping for debug purpose only.
            // dumpErrors(errorsNode,errors);

        },

        testQuests:(into)=>{

            let
                errorsNode = createErrorsNode(into),
                buttonsNode = createNode(into,"div"),
                separatorNode = createNode(into,"hr"),
                resultsNode = createNode(into,"div"),
                previewNode = createNode(into,"div"),
                errors = [];

            QUEST_CONFIGS.forEach(config=>{
                let
                    button = createNode(buttonsNode,"input");
                button.type = "button";
                button.value=config.id;
                button.onclick=()=>{

                    let
                        testsSequence = [],
                        resources = ModManager.load(config);

                    errors = [];
                    buttonsNode.style.display = "none";
                    resultsNode.innerHTML = "";
                    previewNode.innerHTML = "";

                    resources.quests.forEach(quest=>{
                        if (!DEBUG_QUEST || quest._debug)
                            testsSequence.push({
                                config:config,
                                quest:quest,
                                iterations:TESTQUESTS_ITERATIONS
                            })
                    });
                    startQuestTester(testsSequence,resultsNode,previewNode,errors,()=>{
                        buttonsNode.style.display = "block";
                        dumpErrors(errorsNode,errors);
                    })

                }

                
            });

            
        },

        testMapConfigs:(into)=>{

            let
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                errors = [],
                mapConfigIndex = [],
                allMapConfigs = [];

            QUEST_CONFIGS.forEach(config=>{
                let
                    errorHeader=config.id+": ",
                    resources = ModManager.load(config),
                    mapConfigs = {};
                
                resources.mapConfigs.forEach(config=>{
                    let
                        id = config.attribute+"/"+config.value;

                    if (mapConfigs[id])
                        errors.push(errorHeader+"Duplicated id "+id);
                    else
                        mapConfigs[id]=true;

                    if (mapConfigIndex.indexOf(id) == -1)
                        mapConfigIndex.push(id);

                    if (config.config.roomsContent) {

                        config.config.roomsContent.forEach((version,versionid)=>{

                            version.forEach((rooms,roomid)=>{
                                let
                                    isVisible = false,
                                    allVisible = true;

                                if (rooms.add) 
                                    rooms.add.forEach(set=>{
                                        set.forEach(tokens=>{
                                            if (tokens.tokens)
                                                tokens.tokens.forEach(token=>{
                                                    isVisible |= token.isVisible;
                                                    allVisible &= token.isVisible;
                                                })
                                        })
                                    })

                                if (isVisible && !allVisible)
                                    errors.push(errorHeader+" Some elements are visible and some are not on id "+id+" version "+versionid+" room "+roomid);
                            })

                        });

                    }

                });

                allMapConfigs.push(mapConfigs);
            });

            mapConfigIndex.sort();

            QUEST_CONFIGS.forEach((config,id)=>{
                let
                    errorHeader=config.id+": ";

                mapConfigIndex.forEach(configId=>{
                    if (!allMapConfigs[id][configId])
                        errors.push(errorHeader+"Missing id "+configId);
                })
            });

            dumpErrors(errorsNode,errors);
            resultsNode.innerHTML="<ul><li>"+mapConfigIndex.join("</li><li>")+"</li></ul>";

        },

        mapElementsIndex:(into)=>{
            let
                html = "<div style='font-size:12px'>Notes:<ul style='margin:0'><li>Make sure that gameModes requiring a room ID are on structures with the matcing tile with at least 1 room (like adding the roomsCount1+ requirement)</li></ul></div>",
                tags = {},
                errors = [],
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                resources = getAllResourcesTypes([ "mapConfigs" ]);

            resources.mapConfigs.forEach(mapConfig=>{
                let
                    id = mapConfig.attribute+"/"+mapConfig.value;
                switch (mapConfig.attribute) {
                    case "gameMode":{
                        // Rooms arrangement
                        if (mapConfig.config.roomsContent)
                            mapConfig.config.roomsContent.forEach(version=>{
                                version.forEach(room=>{
                                    if (room.atTileId)
                                        addMapTag(tags,"gameMode",id,"Requires room ID "+room.atTileId);
                                })
                            });
                        break;
                    }
                }
            });
            
            for (let k in tags) {
                html+="<h2>"+k+"</h2><ul>";
                for (let z in tags[k]) {
                    html+="<li>"+z+"<ul>";
                    for (let y in tags[k][z])
                        html+="<li>"+y+" ("+tags[k][z][y]+")</li>";
                    html+="</ul></li>";
                }
                html+="</ul>";
            }

            dumpErrors(errorsNode,errors);
            resultsNode.innerHTML=html;
        },

        generateSummary:(into,full)=>{
            const
                QUEST_HEADERS = [
                    {
                        id:[ "quests-hellscape" ],
                        title:"Adapted from **Hellscape**"
                    },{
                        id:[ "quests-hellscapewq" ],
                        title:"Adapted from **Hellscape (Web Quests)**"
                    },{
                        id:[ "quests-upgradepack" ],
                        title:"Adapted from **Upgrade pack**"
                    },{
                        id:[ "quests-rainbowcrossing", ],
                        title:"Adapted from **Rainbow Crossing**"
                    },{
                        id:[ "quests-darkbringerpack", ],
                        title:"Adapted from **Darkbringer Pack**"
                    },{
                        id:[ "quests-internet" ],
                        title:"Adapted **fan-made quests**"
                    },{
                        id:[ "quests-ravaged", ],
                        title:"Adapted from **Ravaged Mountains campaign**"
                    },{
                        id:[ "quests-mr", "quests-mr-ending" ],
                        title:"Massive Randomness 2 **original**"
                    }
                ];

            let
                text = "# Database\n\nThis is the list of what's into _Massive Randomness 2_.\n\n",
                errors = [],
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                resources = getAllResourcesTypes([ "quests", "interface", "campaignSideQuests", "campaignRewards", "campaignModels", "campaignActModels", "campaignMapModels", "campaignCrawlingModels", "campaignRewardModels", "campaignBossFightModels", "bossList" ]),
                questPackages = {},
                componentsList = [],
                components = {};

            text+="## Quests ("+resources.quests.length+" quests)\n\n";
            
            resources.quests.forEach(quest=>{
                let
                    questData = {};

                questData.quest = quest;

                if (!questPackages[quest._package])
                    questPackages[quest._package] = [];

                if (quest.by.EN.match(/inspired by/i))
                    questData.inspiredBy = quest.by.EN.match(/"([^"]+)"/)[1];
                
                if (quest.variants)
                    questData.variants = quest.variants.EN;

                if (quest.name)
                    questData.name = quest.name.EN;

                if (quest.objective)
                    questData.objective = quest.objective.EN;
                else
                    errors.push("Missing objective for quest <b>"+quest.by.EN+"</b> in package <b>"+quest._package+"</b>");

                questData.inCampaign = false;
                questData.sideQuests = [];

                quest.versions.forEach(version=>{

                    if (version.boss)
                        questData.boss = true;

                    if (version.campaign) {
                        questData.inCampaign = true;
                        if (version.campaign.sideQuests)
                            version.campaign.sideQuests.forEach(sidequest=>{
                                sidequest.tags.forEach(tagset=>{
                                    tagset.forEach(tag=>{
                                        if (questData.sideQuests.indexOf(tag) == -1)
                                            questData.sideQuests.push(tag);
                                    })
                                })
                            });
                        version.rules.forEach(ruleset=>{
                            ruleset.forEach(rule=>{
                                
                                if (rule.campaignExplanation || rule.campaignSummary)
                                    questData.campaignSpecificRules = true;
                            })
                        });
                    }
                })
                
                questPackages[quest._package].push(questData);
            });

            QUEST_HEADERS.forEach(header=>{
                let
                    list = [];

                text+=" * "+header.title+"\n";
                header.id.forEach(id=>{
                    if (questPackages[id]) {
                        questPackages[id].forEach(quest=>{
                            let
                                row = "   * "+(quest.name || quest.inspiredBy)+"\n";

                            if (full && quest.objective) row+="     *  "+quest.objective+"\n";
                            if (quest.variants) row+="     *  "+quest.variants+"\n";
                            if (quest.boss) row+="     *  Can include a boss fight.\n";
                            if (quest.inCampaign) {
                                if (quest.campaignSpecificRules)
                                    row+="     *  Includes campaign-specific rules variant.\n";
                                else
                                    row+="     *  Included in campaign mode.\n";
                                if (quest.sideQuests.length)
                                    row+="     *  "+quest.sideQuests.length+" campaign mode side quest"+(quest.sideQuests.length == 1 ? "" : "s")+".\n";
                            }

                            list.push(row);
                        });
                        questPackages[id] = 0;
                    } else
                        errors.push("Missing or reused quest package <b>"+id+"</b>");
                });
                list.sort();
                list.forEach(quest=>{
                    text += quest;
                })

            })

            for (let k in questPackages)
                if (questPackages[k])
                    errors.push("Unindexed quest package <b>"+k+"</b>");

            resources.interface.settings[0].entries.forEach(entry=>{
                if (!components[entry.label.EN]) {
                    componentsList.push(entry.label.EN);
                    components[entry.label.EN] = [];
                }
                components[entry.label.EN].push(entry.description.EN);
            })

            text+="\n## Components ("+componentsList.length+" boxes)\n\n";

            componentsList.forEach(component=>{
                text+=" * "+component+" _("+components[component].join(", ")+")_\n";
            })

            text+="\n## Boss fights\n\n";
            resources.bossList.forEach(boss=>{
                let
                    levels = 0;
                text+=" * "+boss.title.EN.replace(/^[^:]+: /,"")+"\n";
                /*
                for (let k in boss.levels)
                    levels++;
                if (levels > 1)
                    text+="   * "+levels+" levels\n"
                */
            });

            text+="\n## Map modifiers\n\n";
            text+=" * Bridge tile rules\n";
            text+=" * Small maps\n";
            text+=" * Large maps\n";
            text+=" * Interdimensional maps\n";

            text+="\n## Game variants\n\n";
            text+=" * Challenges _(adapted from anubys [Dungeon Skill Challenge](https://boardgamegeek.com/filepage/245223/dungeon-skills-challenge))_\n";
            text+=" * Dungeon Crawling Mode\n";

            text+="\n## Campaign mode\n\n";
            text+=" * "+resources.campaignSideQuests.length+" side quest types.\n";
            text+=" * "+resources.campaignModels.length+" campaign model.\n";
            text+=" * "+resources.campaignActModels.length+" campaign acts models.\n";
            text+=" * "+resources.campaignMapModels.length+" campaign map models.\n";
            text+=" * "+resources.campaignCrawlingModels.length+" campaign dungeon crawling models.\n";
            text+=" * "+resources.campaignBossFightModels.length+" campaign boss fight models.\n";
            text+=" * "+resources.campaignRewardModels.length+" campaign rewards models.\n";
            text+="   * "+resources.campaignRewards.length+" rewards.\n";
            
            dumpErrors(errorsNode,errors);
            resultsNode.innerHTML="<textarea cols=100 rows=50>"+text+"</textarea>";

        }

    }

})();        