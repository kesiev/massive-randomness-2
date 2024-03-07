ModManager.modules.push(function(){

    return [
            {

            id:"quests-upgradepack",
            needs:[ "quests-default", "md2-upgradepack" ],
            provides:[ "quests", "quests-upgradepack" ],
            label:{
                EN:"MD2 Upgrade pack inspired quest models"
            },
            content:[
            {
                    type:"quests",
                    data:[
                        {
                            type:"keyToBoss",
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Il Tesoro dell'Immondo\"",
                                EN:"Inspired by the Upgrade Pack quest \"The Fiend's Treasure\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                imprisonedBy:[
                                                    {
                                                        IT:[ "Il Mago della Vallata", "Ha bisogno di proseguire il suo viaggio e ha chiesto agli Eroi di aiutarlo ad", "riuscito" ],
                                                        EN:[ "The Wizard of the Valley", "He needs to continue his journey and has asked the Heroes to help him", "manage" ]
                                                    },{
                                                        IT:[ "La Guardia Cittadina", "&Egrave; fuggito di corsa non appena ha potuto ed ha lasciato agli eroi il compito di", "riuscita" ],
                                                        EN:[ "The City Guard", "He ran away as fast as he could and left the heroes", "manage" ]
                                                    },{
                                                        IT:[ "Una giovane guerriero", "Il ragazzo &egrave; sopravvissuto per miracolo... ma ora tocca agli Eroi", "riuscito" ],
                                                        EN:[ "A young warrior", "The boy miraculously survived... but now it's the Heroes' turn", "manage" ]
                                                    }

                                                ],
                                                prisonAction:[
                                                    {
                                                        IT:[ "ha rinchiuso" ],
                                                        EN:[ "locked up" ]
                                                    },{
                                                        IT:[ "ha intrappolato" ],
                                                        EN:[ "trapped" ]
                                                    },{
                                                        IT:[ "ha imprigionato" ],
                                                        EN:[ "imprisoned" ]
                                                    }
                                                ],
                                                prison:[
                                                    {
                                                        IT:[ "in una stanza all'interno del dungeon che stava esplorando", "Chiavi", "le", "Chiavi Nascoste", "&egrave; chiusa a chiave", "essere raccolte", "state raccolte" ],
                                                        EN:[ "in a room inside the dungeon he was exploring", "Keys", "the", "Hidden Keys", "is locked", "collected", "collected" ]
                                                    },{
                                                        IT:[ "in un cerchio magico di una stanza delle segrete che stava pattugliando", "Sigilli", "i", "Sigilli Magici", "&egrave; sigillata dalla magia", "essere raccolti", "stati raccolti" ],
                                                        EN:[ "in a magic circle of a dungeon room he was patrolling", "Seals", "the", "Magic Seals", "is sealed by magic", "collected", "collected" ]
                                                    },{
                                                        IT:[ "in una delle prigioni del dungeon", "Leve", "le", "Leve di Sicurezza", "&egrave; bloccata da un meccanismo", "essere tirate", "state tirate" ],
                                                        EN:[ "in one of the prisons of the dungeon", "Levers", "the", "Safety Levers", "it is blocked by a mechanism", "pulled", "pulled" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "ma non &egrave; {label.imprisonedBy@2} a {label.prisoner@5}." ],
                                                        EN:[ "but it didn't {label.imprisonedBy@2} to {label.prisoner@5}." ]
                                                    },{
                                                        IT:[ "ma non &egrave; {label.imprisonedBy@2} a liberarsene." ],
                                                        EN:[ "but it didn't {label.imprisonedBy@2} to get rid of it." ]
                                                    },{
                                                        IT:[ "e non &egrave; {label.imprisonedBy@2} a fare altro." ],
                                                        EN:[ "and it didn't {label.imprisonedBy@2} to do anything else." ]
                                                    }
                                                ],
                                                prisoner:[
                                                    {
                                                        IT:[ "Creatura Corrotta", "una Creatura Corrotta", "la Creatura Corrotta", "la Camera della Creatura Corrotta", "della Camera della Creatura Corrotta", "ucciderla", "rinchiusa", "attaccata", "bersagliata", "Questa &egrave; la Creatura Corrotta." ],
                                                        EN:[ "Corrupted Creature", "a Corrupted Creature", "the Corrupted Creature", "the Chamber of the Corrupted Creature", "of the Chamber of the Corrupted Creature", "kill it", "locked-up", "attacked", "targeted ", "This is the Corrupted Creature." ]
                                                    },{
                                                        IT:[ "Essere Oscuro", "un Essere Oscuro", "l'Essere Oscuro", "la Camera dell'Essere Oscuro", "della Camera dell'Essere Oscuro", "ucciderlo", "rinchiuso", "attaccato", "bersagliato", "Questo &egrave; l'Essere Oscuro." ],
                                                        EN:[ "Dark Being", "a Dark Being", "the Dark Being", "the Chamber of the Dark Being", "of the Chamber of the Dark Being", "kill him", "locked-up", "attacked" , "targeted", "This is the Dark Being." ]
                                                    },{
                                                        IT:[ "Entit&agrave; Spezzata", "un'Entit&agrave; Spezzata", "l'Entit&agrave; Spezzata", "la Camera dell'Entit&agrave; Spezzata", "della Camera dell'Entit&agrave; Spezzata", "ucciderla", "rinchiusa", "attaccata", "bersagliata", "Questa &egrave; l'Entit&agrave; Spezzata." ],
                                                        EN:[ "Broken Entity", "a Broken Entity", "the Broken Entity", "the Chamber of the Broken Entity", "of the Chamber of the Broken Entity", "kill it", "locked-up", "attacked", "targeted", "This is the Broken Entity." ]
                                                    }
                                                ],
                                                heroTask:[
                                                    {
                                                        IT:[ "uccidere {label.prisoner@2}." ],
                                                        EN:[ "to kill {label.prisoner@2}." ]
                                                    },{
                                                        IT:[ "eliminare {label.prisoner@2}." ],
                                                        EN:[ "to eliminate {label.prisoner@2}." ]
                                                    },{
                                                        IT:[ "togliere di mezzo {label.prisoner@2}." ],
                                                        EN:[ "to get rid of {label.prisoner@2}." ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.prisoner:capital@2}"
                                        },{
                                            EN:"{label.prisoner:capital@3}"
                                        },{
                                            EN:"{label.prison:capital@2} {label.prison:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.imprisonedBy@0} {label.prisonAction@0} {label.prisoner@1} {label.prison@0} {label.but@0} {label.imprisonedBy@1} {label.heroTask@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.prison@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Trovare {label.prison@2} {tokensCount.objective} {label.prison@1}",
                                                        EN:"Find {label.prison@2} {tokensCount.objective} {label.prison@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Scatenare il Mostro",
                                                        EN:"Unleash the Monster"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.prison@2} {label.prison@1} per aprire la porta dell'ultima Camera",
                                                        EN:"Use {label.prison@2} {label.prison@1} to open the door to the final Chamber"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere il Mostro",
                                                        EN:"Kill the Monster"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.prisoner@2} {label.prisoner@6}",
                                                        EN:"Kill the {label.prisoner@6} {label.prisoner@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Preparation"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Generare un Mostro Errante di Livello 5 nella Zona indicata dal segnalino Corruzione {symbol.corruptionToken} (rimuovere tutte le altre carte di quel mostro dagli altri mazzi dei Mostri Erranti). {label.prisoner@9} Rimuovere poi il segnalino Corruzione.",
                                                        EN:"Spawn a random Level 5 Roaming Monster in the Zone indicated by the Corruption token {symbol.corruptionToken} (remove all other cards of that monster from other Roaming Monster decks). {label.prisoner@9} Then remove the Corruption token."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.prisoner:capital@2} {label.prisoner:capital@6}",
                                                        EN:"The {label.prisoner:capital@6} {label.prisoner@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT: "{label.prisoner:capital@3} {label.prison@4}. Pu&ograve; essere aperta soltanto una volta che {label.prison@2} {tokensCount.objective} {label.prison@1} sono {label.prison@6}. {label.prisoner:capital@2} non si attiva finch&eacute; la sua Camera non viene aperta. {label.prisoner:capital@2} non pu&ograve; essere {label.prisoner@7} o {label.prisoner@8} da alcuna capacit&agrave; o effetto finch&eacute; {label.prisoner@3} non viene aperta.",
                                                        EN: "{label.prisoner:capital@3} {label.prison@4}. It can only be opened once {label.prison@2} {tokensCount.objective} {label.prison@1} are {label.prison@6}. {label.prisoner:capital@2} does not activate until its Chamber is opened. {label.prisoner:capital@2} cannot be {label.prisoner@7} or {label.prisoner@8} by any ability or effect until {label.prisoner@3} is opened."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.prison@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.prison:capital@2} {label.prison@1} sono rappresentate dai segnalini Obiettivo. Possono {label.prison@5} spendendo 1 PM. Un Eroe che raccoglie un segnalino Obiettivo ottiene 5 PE e scarta il segnalino. Una volta che {label.prison@2} {tokensCount.objective} {label.prison@1} sono {label.prison@6}, la porta speciale {label.prisoner@4} pu&ograve; essere aperta da qualsiasi Eroe.",
                                                        EN:"{label.prison:capital@2} {label.prison@1} are represented by Objective tokens. They can be {label.prison@5} by spending 1 MP. The Hero who collects an Objective token gains 5 XP and discards the token. Once {label.prison@2} {tokensCount.objective} {label.prison@1} are {label.prison@6}, the special door {label.prisoner@4} can be opened by any Hero."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToPrison" ],
                                            gameMode: [ "unlockAndBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ]
                                }
                            ]
                        },{
                            type:"fallingDungeon",
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Tamburi di Guerra dei Goblin\"",
                                EN:"Inspired by the Upgrade Pack quest \"Goblin War Drums\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                risky:[
                                                    {
                                                        IT:[ "Sapevamo che sarebbe stato molto rischioso," ],
                                                        EN:[ "We knew it would be very risky," ]
                                                    },{
                                                        IT:[ "Ci avevano avvisato che sarebbe stato pericoloso avventurarci," ],
                                                        EN:[ "They warned us that it would be dangerous to venture," ]
                                                    },{
                                                        IT:[ "Il Saggio ci aveva pregato di non andare," ],
                                                        EN:[ "The Wise had begged us not to go," ]
                                                    }
                                                ],
                                                necessary:[
                                                    {
                                                        IT:[ "ma era necessario farlo" ],
                                                        EN:[ "but it was necessary" ]
                                                    },{
                                                        IT:[ "ma non avevamo alcuna scelta" ],
                                                        EN:[ "but we had no choice" ]
                                                    },{
                                                        IT:[ "ma il contratto parlava chiaro" ],
                                                        EN:[ "but the contract was clear" ]
                                                    }
                                                ],
                                                task:[
                                                    {
                                                        IT:[ "dovevamo esplorare il malvagio rifugio", "nel dungeon", "da cui" ],
                                                        EN:[ "we had to explore the evil refuge", "in the dungeon", "from which" ]
                                                    },{
                                                        IT:[ "dovevamo addentrarci nella cava dietro la cascata", "nelle grotte", "dalla quale" ],
                                                        EN:[ "we had to enter the quarry behind the waterfall", "into the caves", "from which" ]
                                                    },{
                                                        IT:[ "il nostro compito era esplorare le vecchie segrete", "nei tunnel", "dalle quali" ],
                                                        EN:[ "our task was to explore the old dungeons", "in the tunnels", "from which" ]
                                                    }
                                                ],
                                                why:[
                                                    {
                                                        IT:[ "{label.task@2} proveniva l'eco senza sosta dei tamburi di guerra." ],
                                                        EN:[ "{label.task@2} came the ceaseless echo of war drums." ]
                                                    },{
                                                        IT:[ "{label.task@2} avevamo sentito quelle grida disperate." ],
                                                        EN:[ "{label.task@2} we had heard those desperate cries." ]
                                                    },{
                                                        IT:[ "{label.task@2} sarebbe iniziata l'invasione degli Oscuri." ],
                                                        EN:[ "{label.task@2} the invasion of the dark Ones would begin." ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "Mostro Sentinella", "il", "Questa &egrave; la Sentinella." ],
                                                        EN:[ "Monster Sentinel", "the", "This is the Sentinel." ]
                                                    },{
                                                        IT:[ "Creatura Guardiana", "la", "Questa &egrave; la Creatura Guardiana." ],
                                                        EN:[ "Guardian Creature", "the", "This is the Guardian Creature." ]
                                                    },{
                                                        IT:[ "Antico Custode", "l'", "Questo &egrave; l'Antico Custode." ],
                                                        EN:[ "Old Keeper", "the", "This is the Old Keeper." ]
                                                    }    
                                                ],
                                                suspect:[
                                                    {
                                                        IT:[ "Ma appena messo piede {label.task@1}" ],
                                                        EN:[ "But as soon as we set foot {label.task@1}" ]
                                                    },{
                                                        IT:[ "Dopo pochi passi {label.task@1}" ],
                                                        EN:[ "After a few steps {label.task@1}," ]
                                                    },{
                                                        IT:[ "Passati pochi minuti {label.task@1}" ],
                                                        EN:[ "A few minutes passed {label.task@1}" ]
                                                    }
                                                ],
                                                then:[
                                                    {
                                                        IT:[ "avevamo capito che qualcosa non quadrava..." ],
                                                        EN:[ "we understood that something wasn't right..." ]
                                                    },{
                                                        IT:[ "il terreno dietro di noi ha cominciato a cedere..." ],
                                                        EN:[ "the ground behind us began to give way..." ]
                                                    },{
                                                        IT:[ "uno stridio assordante &egrave; emerso dalle sue profondit&agrave;..." ],
                                                        EN:[ "a deafening screech emerged from its depths..." ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.enemy@1} {label.enemy@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.risky@0} {label.necessary@0}: {label.task@0} {label.why@0} {label.suspect@0} {label.then@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere la Guardia",
                                                        EN:"Kill the Guard"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.enemy@1} {label.enemy@0}",
                                                        EN:"Kill {label.enemy@1} {label.enemy@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire dal Dungeon Pericolante",
                                                        EN:"Escape the Unstable Dungeon"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Fuggire attraverso l'uscita con tutti gli Eroi prima che il Dungeon crolli (spendendo 1 PM nella Zona del segnalino Obiettivo grigio)",
                                                        EN:"Escape through the exit with all Heroes before the Dungeon collapses (spending 1 MP in the gray Objective token Zone)"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Setup"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Collocare i segnalini Clessidra {symbol.timeToken} sulla 4&deg;, 6&deg; e 9&deg; casella del tracciato Oscurit&agrave;. Collocare inoltre un segnalino sulla freccia alla fine del tracciato.",
                                                        EN:"Place the Time tokens {symbol.timeToken} on the 4th, 6th, and 9th Darkness track spaces. Also, place a token on the arrow at the end of the track."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Ora Fatale",
                                                        EN:"Fatal Hour"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando il tracciato Oscurit&agrave; viene girato sul retro, collocare il segnalino Clessidra che si trovava sulla freccia sulla seconda casella.",
                                                        EN:"When the Darkness track is flipped onto its back, place the Hourglass token that was on the arrow in the second space."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Dungeon Pericolante",
                                                        EN:"Unstable Dungeon"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che il tracciato Oscurit&agrave; raggiunge un numero con un segnalino Clessidra, scartarlo e rimuovere dalla mappa la Tessera pi&ugrave; lontana dal segnalino Obiettivo grigio, uccidendo ogni Nemico e ogni Eroe che si trovano su di essa. Queste uccisioni non forniscono alcun PE. Le Tessere vengono distrutte nell'ordine seguente:"+
                                                        "<ul><li><b>Round 4</b>: {tileLabel.first}</li>"+
                                                        "<li><b>Round 6</b>: {tileLabel.second}</li>"+
                                                        "<li><b>Round 9</b>: {tileLabel.third}</li>"+
                                                        "<li><b>Round 11</b>: {tileLabel.fourth}</li></ul>",
                                                        EN:"Every time the Darkness track reaches a number with a Time token, discard it and remove the tile furthest from the gray Objective token from the map, killing every Enemy and every Hero on it. These kills do not provide any XP. Tiles are destroyed in the following order: "+
                                                        "<ul><li><b>Round 4</b>: {tileLabel.first}</li>"+
                                                        "<li><b>Round 6</b>: {tileLabel.second}</li>"+
                                                        "<li><b>Round 9</b>: {tileLabel.third}</li>"+
                                                        "<li><b>Round 11</b>: {tileLabel.fourth}</li></ul>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nessuno Resta Indietro",
                                                        EN:"No One is Left Behind"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se un qualsiasi Eroe viene ucciso dal crollo delle Tessere, la Missione termina con una sconfitta.",
                                                        EN:"If any Hero is killed by the collapse of the Tiles, the Mission ends in defeat."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un qualsiasi Eroe si muove per la prima volta nella Zona con il segnalino Obiettivo con il lato colorato a faccia in su, scartare il segnalino e generare un Mostro Errante di Livello 5 sul Portale dei Mostri Erranti. {label.enemy@2}",
                                                        EN:"When any Hero moves into the Zone with the Objective token with the colored side up for the first time, discard the token and spawn a Level 5 Roaming Monster on the Roaming Monster Portal. {label.enemy@2}"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "fallingDungeon" ],
                                            gameMode: [ "fallingDungeon" ],
                                            difficulty:[ "increasedLoot" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "fallingDungeon" ],
                                        }
                                    ]
                                }
                            ]
                        },{
                            type:"collectAndBoss",
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"La Caverna dei Cristalli\"",
                                EN:"Inspired by the Upgrade Pack quest \"Crystal Cave\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                when:[
                                                    {
                                                        IT:[ "Non appena gli eroi si avvicinano alle colline," ],
                                                        EN:[ "When the heroes approach the hills," ]
                                                    },{
                                                        IT:[ "Appena gli eroi escono dalla foresta," ],
                                                        EN:[ "As soon as the heroes emerge from the forest," ]
                                                    },{
                                                        IT:[ "Appena gli eroi scendono dalla nave," ],
                                                        EN:[ "As soon as the heroes get off the ship," ]
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[ "sentono il vociare dei contadini," ],
                                                        EN:[ "they hear the voices of the farmers," ]
                                                    },{
                                                        IT:[ "sentono il ridere dei bambini," ],
                                                        EN:[ "they hear the laughter of children," ]
                                                    },{
                                                        IT:[ "sentono il chiacchiericcio dei paesani," ],
                                                        EN:[ "they hear the chatter of the villagers," ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "che per&ograve; sembra corrotto e deformato:" ],
                                                        EN:[ "which however seems corrupted and deformed:" ]
                                                    },{
                                                        IT:[ "ma sembra continuare a ripetersi come una cupa cantilena:" ],
                                                        EN:[ "but it seems to keep repeating itself like a dark chant:" ]
                                                    },{
                                                        IT:[ "ma sembra rallentare sempre pi&ugrave;, trasformandosi in un fastidioso stridio:" ],
                                                        EN:[ "but it seems to slow down more and more, turning into an annoying screech:" ]
                                                    }
                                                ],
                                                exception:[
                                                    {
                                                        IT:[ "&egrave; il canto dei servi dell'Oscurit&agrave;." ],
                                                        EN:[ "it is the song of the servants of Darkness." ]
                                                    },{
                                                        IT:[ "&egrave; il grido dei Mostri Corrotti." ],
                                                        EN:[ "it is the cry of the Corrupted Monsters." ]
                                                    },{
                                                        IT:[ "&egrave; il lamento delle Bestie Sanguinarie." ],
                                                        EN:[ "it is the lament of the Blood Beasts." ]
                                                    }
                                                ],
                                                what:[
                                                    {
                                                        IT:[ "Il loro fetore non tarda a farsi sentire." ],
                                                        EN:[ "Their stench is not long in making itself felt." ]
                                                    },{
                                                        IT:[ "L'odore del sangue e del fango riempie l'aria." ],
                                                        EN:[ "The smell of blood and mud fills the air." ]
                                                    },{
                                                        IT:[ "Un lezzo pungente e nauseante arriva da poco lontano." ],
                                                        EN:[ "A pungent and nauseating stench comes from not far away." ]
                                                    }
                                                ],
                                                now:[
                                                    {
                                                        IT:[ "&Egrave; giunto il momento che gli eroi si uniscano al coro, con" ],
                                                        EN:[ "It's time for the heroes to join the chorus, with" ]
                                                    },{
                                                        IT:[ "Gli eroi sono pronti a portare la loro musica," ],
                                                        EN:[ "The heroes are ready to bring their music," ]
                                                    },{
                                                        IT:[ "Ma gli eroi conoscono solo una melodia," ],
                                                        EN:[ "But heroes only know one melody," ]
                                                    }
                                                ],
                                                opposing:[
                                                    {
                                                        IT:[ "un canto di lame e di coraggio" ],
                                                        EN:[ "a song of blades and courage" ]
                                                    },{
                                                        IT:[ "l'eterno tamburo della giustizia" ],
                                                        EN:[ "the eternal drum of justice" ]
                                                    },{
                                                        IT:[ "l'incessante tamburo della giustizia" ],
                                                        EN:[ "the incessant drum of justice" ]
                                                    }
                                                ],
                                                compose:[
                                                    {
                                                        IT:[ "parti di un Artefatto Magico", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of a Magical Artifact", "to place it", "Let's Build It!" ]
                                                    },{
                                                        IT:[ "parti di un Sigillo Arcano", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of an Arcane Seal", "to place it", "Let's Build It!" ]
                                                    },{
                                                        IT:[ "parti di un Amuleto Puro", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of a Pure Amulet", "to place it", "Let's Build It!" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "il Mostro", "del Mostro", "del mostro" ],
                                                        EN:[ "the Monster", "of the Monster", "of the monster" ]
                                                    },{
                                                        IT:[ "la Creatura", "della Creatura", "della creatura" ],
                                                        EN:[ "the Creature", "of the Creature", "of the creature" ]
                                                    },{
                                                        IT:[ "la Bestia", "della Bestia", "della bestia" ],
                                                        EN:[ "the Beast", "of the Beast", "of the beast" ]
                                                    }
                                                ],
                                                base:[
                                                    {
                                                        IT:[ "la Tana", "la tana contaminata {label.enemy@2}", "della tana", "Tana {label.enemy:capital@1}", "essere purificata", "per purificarla", "in cima alla tana", "La Tana {label.enemy:capital@2}" ],
                                                        EN:[ "the Burrow", "the contaminated lair {label.enemy@2}", "of the lair", "Lair {label.enemy@1}", "be purified", "to purify it", "at the top of the den", "The Lair {label.enemy@2}"  ]
                                                    },{
                                                        IT:[ "il Rifugio", "il rifugio maledetto {label.enemy@2}", "del rifugio", "Rifugio {label.enemy:capital@1}", "essere liberato", "per liberarlo", "in cima al rifugio", "Il Rifugio {label.enemy:capital@2}" ],
                                                        EN:[ "the Refuge", "the cursed refuge {label.enemy@2}", "of the refuge", "Refuge {label.enemy:capital@1}", "be freed", "to free it", "on top of the refuge", "The Refuge {label.enemy:capital@2}" ],
                                                    },{
                                                        IT:[ "il Nascondiglio", "il nascondiglio {label.enemy@2}", "del nascondiglio", "Nascondiglio {label.enemy:capital@1}", "essere distrutto", "per distruggerlo", "in cima al nascondiglio", "Il Nascondiglio {label.enemy:capital@2}" ],
                                                        EN:[ "the Hideout", "the hideout {label.enemy@2}", "of the hideout", "Hideout {label.enemy:capital@1}", "be destroyed", "to destroy it", "on top of the hideout", "The Hideout {label.enemy:capital@2}" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.base:capital@7}"
                                        },{
                                            EN:"{label.enemy:capital@0}"
                                        },{
                                            EN:"{label.opposing:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.when@0} {label.event@0} {label.but@0} {label.exception@0} {label.what@0} {label.now@0} {label.opposing@0}!"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi in qualsiasi ordine:",
                                            EN:"Complete the objectives in any order:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere {label.enemy@0}",
                                                        EN:"Kill {label.enemy@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere il Mostro Errante che viene generato sul segnalino Obiettivo sul lato grigio",
                                                        EN:"Kill the Roaming Monster that spawns on the Objective token on the gray side"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Purificare {label.base@0}",
                                                        EN:"Purify {label.base@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Collocare i {tokensCount.objective} segnalini Obiettivo con il lato colorato a faccia in su nella Zona con il segnalino Obiettivo sul lato grigio",
                                                        EN:"Place the {tokensCount.objective} Objective tokens with the colored side up in the Zone of the Objective token on the gray side"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.base@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Zona con il segnalino Obiettivo sul lato grigio rappresenta {label.base@1} e deve {label.base@4}. Quando questa Camera viene rivelata, dopo avere risolto la carta Porta, generare un Mostro Errante di Livello 5 nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN:"The Zone with the Objective token on the gray side represents {label.base@1} and must {label.base@4}. When this Chamber is revealed, after resolving the Door card, spawn a Level 5 Roaming Monster in the Zone of the Objective token on the gray side."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.compose@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano le {tokensCount.objective} {label.compose@0} che devono essere unite all'entrata {label.base@2} {label.base@5}. Un qualsiasi Eroe che si trovi nella Zona di un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 PM per raccoglierlo. I segnalini Obiettivo con il lato colorato a faccia in su possono essere scambiati come fossero oggetti. Un qualsiasi Eroe che trasporta un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 azione nella Zona della del segnalino Obiettivo sul lato grigio {label.compose@1} {label.base@6}.",
                                                        EN:"Objective tokens with the colored side up represent the {tokensCount.objective} {label.compose@0} that must be composed near the entry {label.base@2} {label.base@5}. Any Hero who is in the Zone of an Objective token with the colored side up can spend 1 MP to pick it up. Objective tokens with the colored side up can be exchanged as if they were objects. Any Hero carrying an Objective token with the colored side up can spend 1 action in the Zone of the Objective token on the gray side {label.compose@1} {label.base@6}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "collectAndDeliver-small" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
                                        }
                                    ]
                                }
                            ]
                        },{
                            type:"capture",
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Smarriti nella Musica\"",
                                EN:"Inspired by the Upgrade Pack quest \"Lost in the Music\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                investigation:[
                                                    {
                                                        IT:[ "Gli eroi hanno smentito le voci secondo cui", "Voci" ],
                                                        EN:[ "The heroes denied the rumors that it was", "Voices" ]
                                                    },{
                                                        IT:[ "Gli eroi hanno scoperto la verit&agrave;: non", "Scoperte" ],
                                                        EN:[ "The heroes discovered the truth: it wasn't", "Discoveries" ]
                                                    },{
                                                        IT:[ "Era una bugia. Gli eroi avevano scoperto che non", "Bugie" ],
                                                        EN:[ "It was a lie. The heroes had discovered that it wasn't", "Lies" ]
                                                    }
                                                ],
                                                clue:[
                                                    {
                                                        IT:[ "erano stati i contadini a dar fuoco al porto.", "agli Incendiari" ],
                                                        EN:[ "the farmers who set fire to the port.", "to the Arsonists" ]
                                                    },{
                                                        IT:[ "erano stati i ladri ad assaltare la carovana dei mercanti.", "ai Furfanti" ],
                                                        EN:[ "the thieves who attacked the merchants' caravan.", "to the Scoundrels" ]
                                                    },{
                                                        IT:[ "erano state le guardie a saccheggiare i villaggi.", "ai Saccheggiatori" ],
                                                        EN:[ "the guards who sacked the villages.", "to the Looters" ]
                                                    }
                                                ],
                                                consequence1:[
                                                    {
                                                        IT:[ "Le indagini erano durate settimane e ora" ],
                                                        EN:[ "The investigations had lasted weeks and now" ]
                                                    },{
                                                        IT:[ "Non &egrave; stato facile scoprirlo e ora" ],
                                                        EN:[ "It was not easy to find out and now" ]
                                                    },{
                                                        IT:[ "Per scoprirlo, hanno dovuto vagare senza sosta per mesi. Ora" ],
                                                        EN:[ "To find out, they had to wander non-stop for months and hours. Now" ]
                                                    }
                                                ],
                                                consequence2:[
                                                    {
                                                        IT:[ "si sentono esausti." ],
                                                        EN:[ "they feel exhausted." ]
                                                    },{
                                                        IT:[ "sono quasi senza forze." ],
                                                        EN:[ "they are almost powerless." ]
                                                    },{
                                                        IT:[ "servirebbe una lunga pausa." ],
                                                        EN:[ "a long break would be needed." ]
                                                    }
                                                ],
                                                recover:[
                                                    {
                                                        IT:[ "Ma non c'&egrave; tempo da perdere:" ],
                                                        EN:[ "But there is no time to waste:" ]
                                                    },{
                                                        IT:[ "Ma non possono mollare ora:" ],
                                                        EN:[ "But they can't give up now:" ]
                                                    },{
                                                        IT:[ "Ma manca un ultimo sforzo:" ],
                                                        EN:[ "But one last effort is missing:" ]
                                                    }
                                                ],
                                                newPlace:[
                                                    {
                                                        IT:[ "hanno trovato finalmente i mostri responsabili." ],
                                                        EN:[ "they have finally found the responsible monsters." ]
                                                    },{
                                                        IT:[ "hanno scoperto il nascondiglio dei responsabili." ],
                                                        EN:[ "they discovered the hideout of those responsible." ]
                                                    },{
                                                        IT:[ "i veri responsabili si nascondevano poco lontano." ],
                                                        EN:[ "the real culprits were hiding not far away." ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "Prenderanno a calci gli agenti del male,", "Calci" ],
                                                        EN:[ "They will kick the agents of evil,", "Kicks" ]
                                                    },{
                                                        IT:[ "&Egrave; arrivato il momento di impartirgli una bella lezione,", "Lezioni" ],
                                                        EN:[ "The time has come to teach him a good lesson,", "Lessons" ]
                                                    },{
                                                        IT:[ "Faranno passare ai colpevoli brutto quarto d'ora,", "Dolori" ],
                                                        EN:[ "They will give the guilty a hard time,", "Pain" ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "per poi interrogarli.", "Interrogatori" ],
                                                        EN:[ "and then question them.", "Interrogations" ]
                                                    },{
                                                        IT:[ "per chiedergli poi spiegazioni.", "Spiegazioni" ],
                                                        EN:[ "to then ask him for explanations.", "Explanations" ]
                                                    },{
                                                        IT:[ "per scambiare poi quattro chiacchiere con loro.", "Chiacchierate" ],
                                                        EN:[ "to then have a chat with them.", "Chat" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"{label.mission@1} e {label.objective@1}",
                                            EN:"{label.mission@1} and {label.objective@1}",
                                        },{
                                            IT:"{label.investigation@1} e {label.mission@1}",
                                            EN:"{label.investigation@1} and {label.mission@1}",
                                        },{
                                            EN:"{label.mission@1} {label.clue@1}",
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.investigation@0} {label.clue@0} {label.consequence1@0} {label.consequence2@0} {label.recover@0} {label.newPlace@0} {label.mission@0} {label.objective@0}"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Raduniamoli",
                                                        EN:"Gather Them",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Catturare 3 Mostri Erranti <i>(Vedi Regole Speciali)</i>",
                                                        EN:"Capture 3 Roaming Monsters <i>(See Special Rules)</i>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri a Non Finire",
                                                        EN:"Never Ending Monsters"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"All'inizio di ogni Fase dell'Oscurit&agrave;, se ci sono segnalini Corruzione {symbol.corruptionToken} disponibili, tirare 1{symbol.yellowDie}. Se si ottiene almeno un risultato {symbol.mana}, generare 1 Mostro Errante su 1 dei segnalini Corruzione disponibili (a scelta dei giocatori). Dopo che un Mostro Errante &egrave; stato generato in questo modo, girare il segnalino Corruzione mostrando il lato Tempo {symbol.timeToken}. Questo segnalino Corruzione non sar&agrave; pi&ugrave; disponibile per la generazione.<p>Se all'inizio di una Fase dell'Oscurit&agrave; non ci sono segnalini Corruzione disponibili e ci sono meno di 2 Mostri Erranti nel Dungeon, girare a tutti i segnalini Tempo sul lato Corruzione.",
                                                        EN:"At the start of each Darkness Phase, if there are {symbol.corruptionToken} Corruption tokens available, roll 1{symbol.yellowDie}. If you roll at least one {symbol.mana} result, spawn 1 Roaming Monster on 1 of the available Corruption tokens (players' choice). After a Roaming Monster is spawned in this way, flip the Corruption token to the Time {symbol.timeToken} side. This Corruption token will no longer be available for generation.<p>If at the start of a Darkness Phase, there are no Corruption tokens available and there are fewer than 2 Roaming Monsters in the Dungeon, flip all Time tokens to their Corruption side."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Una Rete",
                                                        EN:"The Net"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ciascun segnalino Obiettivo sul lato colorato rappresenta una Rete che pu&ograve; essere usata per catturare un Mostro Errante (vedere sotto). Un qualsiasi Eroe che si trovi nella Zona di una Rete pu&ograve; spendere 1 PM per raccoglierla. L'Eroe che lo fa ottiene 5 PE. Le Reti possono essere scambiate come fossero oggetti.",
                                                        EN:"Each Objective token on the colored side represents a Net that can be used to capture a Roaming Monster (see below). Any Hero who is in the Zone of a Net can spend 1 MP to collect it. The Hero who does so gains 5 XP. Nets can be exchanged as if they were items."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Catturare un Mostro",
                                                        EN:"Capture a Monster"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe in possesso di una Rete (segnalino Obiettivo sul lato colorato) pu&ograve; tentare di catturare un Mostro Errante che si trovi nella sua Zona spendendo 1 azione e tirando 2{symbol.orangeDie}. Se il numero di {symbol.sword} ottenuti &egrave; pari o superiore alla Salute rimanente del Mostro Errante, quel mostro &egrave; catturato. Rimuoverlo dal Dungeon e scartare la Rete usata; l'Eroe che lo ha catturato ottiene i PE e le ricompense previste come se avesse ucciso il Mostro Errante. Se il tentativo di cattura fallisce, la Rete non viene scartata.",
                                                        EN:"A Hero in possession of a Net (Objective token on the colored side) can attempt to capture a Roaming Monster that is in his Zone by spending 1 action and rolling 2{symbol.orangeDie}. If the number of {symbol.sword} obtained is equal to or greater than the Roaming Monster's remaining Health, that monster is captured. Remove it from the Dungeon and discard the used Net; the Hero who captured it gains the expected XP and rewards as if he had killed the Roaming Monster. If the capture attempt fails, the Net is not discarded."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roaming-large" ],
                                            gameMode: [ "capture" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "capture" ],
                                        }
                                    ]
                                }
                            ]
                        },{
                            type:"collect",
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Discesa agli Inferi\"",
                                EN:"Inspired by the Upgrade Pack quest \"Stairway to Hell\""
                            },
                            suggestedTilesCount:6,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                onlyThing:[
                                                    {
                                                        IT:[ "C'&egrave; solo una cosa da fare:" ],
                                                        EN:[ "There's only one thing to do:" ]
                                                    },{
                                                        IT:[ "&Egrave; arrivato il momento: ora dovranno" ],
                                                        EN:[ "The time has come: now they will have to" ]
                                                    },{
                                                        IT:[ "Non rimane altro che" ],
                                                        EN:[ "There's nothing left but to" ]
                                                    }
                                                ],
                                                break:[
                                                    {
                                                        IT:[ "sabotare il rituale" ],
                                                        EN:[ "sabotage the ritual" ]
                                                    },{
                                                        IT:[ "interrompere la cerimonia" ],
                                                        EN:[ "interrupt the ceremony" ]
                                                    },{
                                                        IT:[ "porre fine all'evocazione" ],
                                                        EN:[ "put an end to the summoning" ]
                                                    }
                                                ],
                                                and:[
                                                    {
                                                        IT:[ "e uccidere chiunque sia tanto stupido da mettersi sulla loro strada." ],
                                                        EN:[ "and kill anyone stupid enough to get in their way." ]
                                                    },{
                                                        IT:[ "eliminando chiunque provi a fermarli." ],
                                                        EN:[ "and eliminate anyone who tries to stop them." ]
                                                    },{
                                                        IT:[ "senza fermarsi davanti a nulla." ],
                                                        EN:[ "without stopping at anything." ]
                                                    }
                                                ],
                                                close:[
                                                    {
                                                        IT:[ "{label.enemies:capital@0} si sono rinchiusi in una camera." ],
                                                        EN:[ "{label.enemies:capital@0} locked themselves in a room." ]
                                                    },{
                                                        IT:[ "{label.enemies:capital@0} si sono barricati da qualche parte." ],
                                                        EN:[ "{label.enemies:capital@0} barricaded themselves somewhere." ]
                                                    },{
                                                        IT:[ "{label.enemies:capital@0} si trovano in una stanza sigillata." ],
                                                        EN:[ "{label.enemies:capital@0} are in a sealed room." ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "Gli eroi dovranno {label.lock@1} che impediscono loro di entrare" ],
                                                        EN:[ "The heroes will have to {label.lock@1} that prevent them from entering" ]
                                                    },{
                                                        IT:[ "Gli eroi dovranno trovare un modo per {label.lock@1}" ],
                                                        EN:[ "The heroes will have to find a way to {label.lock@1}" ]
                                                    },{
                                                        IT:[ "Gli eroi dovranno {label.lock@1}" ],
                                                        EN:[ "The heroes will have to {label.lock@1}" ]
                                                    }
                                                ],
                                                end:[
                                                    {
                                                        IT:[ "e porre fine a tutto questo una volta per tutte." ],
                                                        EN:[ "and put an end to all this once and for all." ]
                                                    },{
                                                        IT:[ "e concludere la loro lunga avventura." ],
                                                        EN:[ "and end their long adventure." ]
                                                    },{
                                                        IT:[ "e risolvere il problema alla radice." ],
                                                        EN:[ "and solve the root of the problem." ]
                                                    }
                                                ],
                                                learn:[
                                                    {
                                                        IT:[ "Presto l'Oscurit&agrave; capir&agrave; che" ],
                                                        EN:[ "Soon the Darkness will understand that" ]
                                                    },{
                                                        IT:[ "Il Male imparer&agrave; presto che" ],
                                                        EN:[ "Evil will learn soon that" ]
                                                    },{
                                                        IT:[ "I loro nemici impareranno a loro spese che" ],
                                                        EN:[ "Their enemies will learn to their cost that" ]
                                                    }
                                                ],
                                                lesson:[
                                                    {
                                                        IT:[ "gli Eroi sono pi&ugrave; pericolosi di quello che sembra." ],
                                                        EN:[ "the Heroes are more dangerous than they seem." ]
                                                    },{
                                                        IT:[ "anche il Bene sa mostrare i denti." ],
                                                        EN:[ "even the Good knows how to show its teeth." ]
                                                    },{
                                                        IT:[ "prendersela con i pi&ugrave; deboli non paga mai." ],
                                                        EN:[ "picking on the weakest never pays." ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "gli sciamani", "gli Sciamani" ],
                                                        EN:[ "the shamans", "the Shamans" ]
                                                    },{
                                                        IT:[ "i sacerdoti", "i Sacerdoti" ],
                                                        EN:[ "the priests", "the Priests" ]
                                                    },{
                                                        IT:[ "gli adepti", "gli Adepti" ],
                                                        EN:[ "the followers", "the Followers" ]
                                                    }
                                                ],
                                                collect:[
                                                    {
                                                        IT:[ "Gemme", "Trovare le Gemme", "Gemma" ],
                                                        EN:[ "Gems", "Finding the Gems", "Gem" ]
                                                    },{
                                                        IT:[ "Sfere", "Trovare le Sfere", "Sfere" ],
                                                        EN:[ "Spheres", "Finding the Spheres", "Sphere" ]
                                                    },{
                                                        IT:[ "Chiavi", "Trovare le Chiavi", "Chiavi" ],
                                                        EN:[ "Keys", "Finding the Keys", "Key" ]
                                                    }
                                                ],
                                                doors:[
                                                    {
                                                        IT:[ "delle Porte di Cristallo", "le Porte di Cristallo", "Porte di Cristallo" ],
                                                        EN:[ "of the Crystal Doors", "the Crystal Doors", "Crystal Doors" ]
                                                    },{
                                                        IT:[ "delle Porte Sigillate", "le Porte Sigillate", "Porte Sigillate" ],
                                                        EN:[ "of the Sealed Doors", "the Sealed Doors", "Sealed Doors" ]
                                                    },{
                                                        IT:[ "delle Porte d'Argento", "le Porte d'Argento", "Porte d'Argento" ],
                                                        EN:[ "of the Silver Doors", "the Silver Doors", "Silver Doors" ]
                                                    }
                                                ],
                                                lock:[
                                                    {
                                                        IT:[ "sono sigillate magicamente", "distruggerne le serrature incantate" ],
                                                        EN:[ "are magically sealed", "destroy the enchanted locks" ]
                                                    },{
                                                        IT:[ "sono bloccate da dei meccanisimi", "sbloccarne i meccanismi" ],
                                                        EN:[ "are blocked by some mechanism", "unlock the mechanisms" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.doors:capital@1}"
                                        },{
                                            EN:"{label.enemies:capital@1}"
                                        },{
                                            EN:"{label.break:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.onlyThing@0} {label.break@0} {label.and@0} {label.close@0} {label.mission@0} {label.end@0} {label.learn@0} {label.lesson@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemies@1}",
                                                        EN:"Defeat {label.enemies@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere entrambi i Mostri Erranti che vengono generati sui segnalini Obiettivo",
                                                        EN:"Kill both Roaming Monsters that spawn on Objective tokens"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.doors@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le 2 porte chiuse a chiave (contrassegnate in rosso) sulla mappa {label.lock@0}. Non possono essere aperte finch&eacute; gli Eroi non riescono a prelevare 4 {label.collect@0} <i>(vedere sotto)</i>.",
                                                        EN:"The 2 locked doors (marked in red) on the map {label.lock@0}. They cannot be opened until the Heroes manage to collect 4 {label.collect@0} <i>(see below)</i>."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.collect@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che un Eroe ha ucciso un Comandante o un Mostro Errante, tirare 1{symbol.blackDie}. Con un risultato di {symbol.fang} gli Eroi trovano 1 {label.collect@2}. Con un risultato di {symbol.fang}+{symbol.scratch}, gli Eroi trovano 2 {label.collect@0}. Altrimenti, non accade nulla. Una volta raccolte 4 {label.collect@0}, smettere di prelevarle.",
                                                        EN:"After a Hero kills a Leader or a Roaming Monster, roll 1{symbol.blackDie}. On a roll of {symbol.fang} the Heroes find 1 {label.collect@2}. On a roll of {symbol.fang}+{symbol.scratch}, the Heroes find 2 {label.collect@0}. Otherwise, nothing happens. Once you collect 4 {label.collect@0}, stop collecting them."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemies:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando 1 {label.doors@0} si apre, aprire entrambe {label.doors@1} e non pescare una carta Porta. Generare semplicemente 2 Mostri Erranti di Livello 5, 1 su ognuno dei 2 segnalini Obiettivo. Questi Mostri Erranti sono pi&ugrave; difficili da sconfiggere. Possiedono il doppio dell'ammontare di Salute indicato.",
                                                        EN:"When 1 {label.doors@0} is opened, open both {label.doors@1} and do not draw a Door card. Simply spawn 2 Level 5 Roaming Monsters, 1 on each of the 2 Objective tokens. These Roaming Monsters are harder to defeat. They have double the indicated amount of Health."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze-huge" ],
                                            gameMode: [ "doubleBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "huge" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "doubleBoss" ],
                                        }
                                    ]
                                }
                            ]
                        },{
                            type:"towerDefense",
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Il Labirinto dell'Oscurit&agrave;\"",
                                EN:"Inspired by the Upgrade Pack quest \"Maze of Darkness\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                item:[
                                                    {
                                                        IT:[ "potenti artefatti", "il forziere pieno di artefatti", "l'Artefatto", "Caccia all'Artefatto" ],
                                                        EN:[ "powerful artifacts", "the chest full of artifacts", "the Artifact", "Artifact Hunt" ]
                                                    },{
                                                        IT:[ "gemme magiche", "la cassa piena di gemme magiche", "la Gemma", "Caccia alla Gemma" ],
                                                        EN:[ "magic gems", "the chest full of magic gems", "the Gem", "Gem Hunt" ]
                                                    },{
                                                        IT:[ "pergamene arcane", "la sacca piena di pergamene arcane", "la Pergamena", "Caccia alla Pergamena" ],
                                                        EN:[ "arcane scrolls", "the bag full of arcane scrolls", "the Scroll", "Scroll Hunt" ]
                                                    }
                                                ],
                                                barrier:[
                                                    {
                                                        IT:[ "Barriere Magiche", "sono Barriere Magiche", "le Barriere Magiche", "ogni Barriera", "una Barriera", "alla Barriera", "una Barriera Magica", "la Barriera pi&ugrave; vicina", "la Barriera", "verso di essa" ],
                                                        EN:[ "Magic Barriers", "are Magic Barriers", "Magic Barriers", "each Barrier", "a Barrier", "on the Barrier", "a Magic Barrier", "the closest Barrier", "the Barrier", "toward it" ]
                                                    },{
                                                        IT:[ "Piloni Protettivi", "sono Piloni Protettivi", "i Piloni Protettivi", "ogni Pilone", "un Pilone", "al Pilone", "un Pilone Protettivo", "il Pilone pi&ugrave; vicino", "il Pilone", "verso di esso" ],
                                                        EN:[ "Protective Pylons", "are Protective Pylons", "Protective Pylons", "each Pylon", "a Pylon", "on the Pylon", "a Protective Pylon", "the closest Pylon", "the Pylon", "toward it" ]
                                                    },{
                                                        IT:[ "Torrette Difensive", "sono Torrette Difensive", "le Torrette Difensive", "ogni Torretta", "una Torretta", "alla Torretta", "una Torretta Difensiva", "la Torretta pi&ugrave; vicina", "la Torretta", "verso di essa" ],
                                                        EN:[ "Defensive Turrets", "are Defensive Turrets", "Defensive Turrets", "each Turret", "a Turret", "on the Turret", "a Defensive Turret", "the closest Turret", "the Turret", "toward it" ]
                                                    }
                                                ],
                                                interference:[
                                                    {
                                                        IT:[ "Sembra che le forze dell'Oscurit&agrave; alla fine siano venute a sapere delle interferenze degli eroi." ],
                                                        EN:[ "It seems that the forces of Darkness eventually learned of the heroes' interference." ]
                                                    },{
                                                        IT:[ "I piani degli eroi sono stati scoperti." ],
                                                        EN:[ "The heroes' plans have been exposed." ]
                                                    },{
                                                        IT:[ "Gli eroi avevano un piano ben preciso ma non sono stati abbastanza scrupolosi nel mantenerlo segreto." ],
                                                        EN:[ "The heroes had a very specific plan but they were not scrupulous enough in keeping it secret." ]
                                                    }
                                                ],
                                                purpose:[
                                                    {
                                                        IT:[ "Sapendo che gli eroi stanno accumulando {label.item@0}," ],
                                                        EN:[ "Knowing that the heroes are amassing {label.item@0}," ]
                                                    },{
                                                        IT:[ "Per qualche motivo, gli eroi sono alla ricerca di {label.item@0} per cui"],
                                                        EN:[ "The heroes are looking for {label.item@0} for some reason, so"]
                                                    },{
                                                        IT:[ "Qualcuno ha visto gli eroi mentre facevano domande su dove trovare {label.item@0} e" ],
                                                        EN:[ "Someone saw the heroes asking questions about where to find {label.item@0} and" ]
                                                    }
                                                ],
                                                trap:[
                                                    {
                                                        IT:[ "i nemici hanno trovato un modo per attirarli in trappola con l'inganno!" ],
                                                        EN:[ "the enemies have found a way to lure them into a trap by deception!" ]
                                                    },{
                                                        IT:[ "i nemici sono riusciti ad attirarli nella loro trappola mortale!" ],
                                                        EN:[ "the enemies managed to lure them into their deadly trap!" ]
                                                    },{
                                                        IT:[ "i nemici hanno organizzato una trappola per attirarli nel bel mezzo del loro territorio!" ],
                                                        EN:[ "the enemies have set up a trap to lure them into the middle of their territory!" ]
                                                    }
                                                ],
                                                onlyWay:[
                                                    {
                                                        IT:[ "C'&egrave; un solo modo per fuggirne:" ],
                                                        EN:[ "There is only one way to escape:" ]
                                                    },{
                                                        IT:[ "Ormai non possono pi&ugrave; fuggire. Devono"],
                                                        EN:[ "Now they can no longer escape. They have to" ]
                                                    },{
                                                        IT:[ "Non hanno alcuno scampo. Per sopravvivere devono" ],
                                                        EN:[ "They have no escape. To survive they must" ]
                                                    }
                                                ],
                                                survive:[
                                                    {
                                                        IT:[ "sopravvivere a questa battaglia e proteggere {label.item@1}!" ],
                                                        EN:[ "survive this battle and protect {label.item@1}!" ]
                                                    },{
                                                        IT:[ "proteggere {label.item@1} senza lasciarci la pelle!" ],
                                                        EN:[ "protect {label.item@1} without killing us!" ]
                                                    },{
                                                        IT:[ "rimanere vivi e difendere {label.item@1}!" ],
                                                        EN:[ "stay alive and defend {label.item@1}!" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                           EN:"{label.item:capital@3}"
                                        },{
                                            EN:"{label.barrier:capital@2}"
                                        },{
                                            EN:"{label.item:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.interference@0} {label.purpose@0} {label.trap@0} {label.onlyWay@0} {label.survive@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Proteggere {label.item@2}",
                                                        EN:"Defend {label.item@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Se c'&egrave; un Nemico nella Zona con il segnalino Obiettivo sul lato colorato all'inizio della Fase dei Nemici, la Missione termina con una sconfitta",
                                                        EN:"If there is an Enemy in the Zone with the Objective token on its colored side at the start of the Enemy Phase, the Mission ends in defeat"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere tutti i Nemici",
                                                        EN:"Eliminate all Enemies",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Una volta che i Nemici hanno smesso di generarsi, uccidere tutti i Nemici per vincere la Missione",
                                                        EN:"Once Enemies stop spawning, kill all Enemies to win the Mission"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Preparation"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Collocare il segnalino Tesoro Raro, che solitamente si aggiunge nel 4&deg; round, nel sacchetto dei Tesori. Quando il tracciato Oscurit&agrave; raggiunge il 4&deg; round, evitare semplicemente di aggiungere il segnalino Tesoro Raro (collocare un segnalino Clessidra sopra l'icona Tesoro Raro sul tracciato Oscurit&agrave; come promemoria). Aggiungere i segnalini Tesoro al 6&deg; e 8&deg; round come di norma."+
                                                        "<p>Generare 1 Orda su ognuno dei 4 Portali. Collocare in ognuna delle Zone delle Camere della Tessera centrale ({tileLabel.first}) un ammontare di segnalini Tesoro estratti dal sacchetto in base al numero dei giocatori:</p>"+
                                                        "<ul>"+
                                                        "<li>1-2 Eroi: 1 segnalino Tesoro per Zona</li>"+
                                                        "<li>3-4 Eroi: 2 segnalini Tesoro per Zona</li>"+
                                                        "<li>5-6 Eroi: 3 segnalini Tesoro per Zona</li>"+
                                                        "</ul>"+
                                                        "<p>Collocare i segnalini Corruzione sulla 2&deg;, 4&deg;, 6&deg; e 8&deg; casella del tracciato Oscurit&agrave;. Collocare, inoltre, un segnalino Generazione sulla 3&deg;, 7&deg; e 9&deg; casella del tracciato Oscurit&agrave;.",
                                                        EN:"Place the Rare Treasure token, which is usually added in the 4th round, into the Treasure bag. When the Darkness track reaches the 4th round, simply do not add the Rare Treasure token (place an Hourglass token over the Rare Treasure icon on the Darkness track as a reminder.) Add Treasure tokens on the 6th and 8th rounds as normal."+
                                                        "<p>Generate 1 Horde on each of the 4 Portals. Place an amount of Treasure tokens drawn from the bag based on the number of players in each of the Chamber Zones of the central tile ({tileLabel.first}):</p> "+
                                                        "<ul>"+
                                                        "<li>1-2 Heroes: 1 Treasure token per Zone</li>"+
                                                        "<li>3-4 Heroes: 2 Treasure tokens per Zone</li>"+
                                                        "<li>5-6 Heroes: 3 Treasure tokens per Zone</li>"+
                                                        "</ul>"+
                                                        "<p>Place the Corruption tokens on the 2nd, 4th, 6th, and 8th spaces of the Darkness track. Additionally, place a Spawn token on the 3rd, 7th, and 9th spaces of the Darkness track.",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nessun Rinforzo Extra",
                                                        EN:"No Extra Reinforcement"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ignorare tutte le capacit&agrave; o gli effetti dei Nemici che generano Orde extra o Mostri Erranti extra.",
                                                        EN:"Ignore any Enemy abilities or effects that generate extra Mobs or extra Roaming Monsters."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Ondate di Nemici",
                                                        EN:"Enemy Waves"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Per questa Missione, ignorare qualsiasi generazione dal tracciato Oscurit&agrave;. Invece, ogni volta che il tracciato Oscurit&agrave; raggiunge una casella con un segnalino, scartare quel segnalino e risolvere l'effetto corrispondente:"+
                                                        "<ul>"+
                                                        "<li><b>Segnalino Corruzione:</b> Generare 1 Mostro Errante sul Portale dei Mostri Erranti. Fatto questo, scambiare la posizione del Portale dei Mostri Erranti con il Portale successivo in senso orario. Il Portale dei Mostri Erranti passa alle Tessere seguenti:"+
                                                        "<ul>"+
                                                        "<li>Round 2: {tileLabel.second}</li>"+
                                                        "<li>Round 4: {tileLabel.third}</li>"+
                                                        "<li>Round 6: {tileLabel.fourth}</li>"+
                                                        "<li>Round 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Segnalino Generazione:</b> Generare 1 Orda su ognuno dei 4 Portali. Collocare in ognuna delle Zone delle Camere della Tessera centrale ({tileLabel.first}) un ammontare di segnalini Tesoro estratti dal sacchetto in base al numero degli Eroi:"+
                                                        "<ul>"+
                                                        "<li><b>1-2 Eroi:</b> 1 segnalino Tesoro per Zona</li>"+
                                                        "<li><b>3-4 Eroi:</b> 2 segnalini Tesoro per Zona</li>"+
                                                        "<li><b>5-6 Eroi:</b> 3 segnalini Tesoro per Zona</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "</ul>",
                                                        EN:"For this Mission, ignore any spawns from the Darkness track. Instead, whenever the Darkness track reaches a space with a marker, discard that marker and resolve the corresponding effect:"+
                                                        "<ul>"+
                                                        "<li><b>Corruption Token:</b> Spawn 1 Roaming Monster on the Roaming Monster Portal. Once this is done, swap the location of the Roaming Monster Portal with the next Portal clockwise. The Roaming Monster Portal switches to the following tiles:"+
                                                        "<ul>"+
                                                        "<li>Round 2: {tileLabel.second}</li>"+
                                                        "<li>Round 4: {tileLabel.third}</li>"+
                                                        "<li>Round 6: {tileLabel.fourth}</li>"+
                                                        "<li>Round 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Spawn Token:</b> Spawn 1 Horde on each of the 4 Portals. Place an amount of Treasure tokens taken from the bag in each of the Chamber Zones of the central tile ({tileLabel.first}) based on the number of Heroes:"+
                                                        "<ul>"+
                                                        "<li><b>1-2 Heroes:</b> 1 Treasure token per Zone</li>"+
                                                        "<li><b>3-4 Heroes:</b> 2 Treasure tokens per Zone</li>"+
                                                        "<li><b>5-6 Heroes:</b> 3 Treasure tokens per Zone</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "</ul>",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.barrier@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato grigio {label.barrier@1} che bloccano i Nemici e impediscono loro di lasciare quella Zona. I Nemici bersagliano {label.barrier@2} come se bersagliassero gli Eroi, e {label.barrier@3} possiede 5 Salute. Ogni volta che un Nemico attacca {label.barrier@4}, non tirare i dadi come in un combattimento regolare. Infliggere invece 1 Ferita {label.barrier@5}.",
                                                        EN:"The Objective tokens on the gray side {label.barrier@1} that block Enemies and prevent them from leaving that Zone. Enemies target le Barriere Magiche {label.barrier@2} as if they were targeting Heroes, and {label.barrier@3} has 5 Health. Whenever an Enemy attacks {label.barrier@4}, do not roll dice as in regular combat. Instead, inflict 1 Wound {label.barrier@5}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.item@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questa Missione, invece dell'attivazione regolare, tutti i Nemici, inclusi i Mostri Erranti, devono seguire un comportamento diverso. Effettuano 2 azioni. Per ogni azione, controllare le condizioni seguenti. Se la prima viene soddisfatta, effettuare quella. Altrimenti, passare alla condizione successiva, finch&eacute; non se ne soddisfa una."+
                                                        "<ul>"+
                                                        "<li><b>Se c'&egrave; {label.barrier@6} tra il Nemico e il segnalino Obiettivo sul lato colorato:</b> Il Nemico considera {label.barrier@7} come suo bersaglio per attaccare o muoversi. Questo significa che pu&ograve; attaccare {label.barrier@8}, se si trova a gittata. Altrimenti si muove di 1 Zona {label.barrier@9} (ignorando eventuali Eroi).</li>"+
                                                        "<li><b>Se c'&egrave; almeno 1 Eroe tra il Nemico e il segnalino Obiettivo sul lato colorato:</b> Il Nemico considera l'Eroe pi&ugrave; vicino come suo bersaglio per attaccare o muoversi.</li>"+
                                                        "<li><b>Altrimenti:</b> Il Nemico si muove di 1 Zona verso il segnalino Obiettivo sul lato colorato."+
                                                        "</ul>"+
                                                        "<p>Se, all'inizio della Fase dei Nemici, c'&egrave; un Nemico nella Zona del segnalino Obiettivo sul lato colorato, la Missione termina con una sconfitta.</p>",
                                                        EN:"In this Mission, instead of the regular activation, all Enemies, including Roaming Monsters, must follow a different behavior. They perform 2 actions. For each action, check the following conditions. If the first one is met, perform that one. Otherwise, move on to the next condition until one is satisfied."+
                                                        "<ul>"+
                                                        "<li><b>If there is {label.barrier@6} between the Enemy and the Objective token on the colored side:</b> The Enemy treats {label.barrier@7} as its target to attack or move. This means it can attack {label.barrier@8}, if within range. Otherwise, move 1 Zone {label.barrier@9} (ignoring any Heroes).</li>"+
                                                        "<li><b>If there is at least 1 Hero between the Enemy and the Objective token on the colored side:</b> The Enemy treats the closest Hero as its target to attack or move.</li>" +
                                                        "<li><b>Otherwise:</b> The Enemy moves 1 Zone toward the Objective marker on the colored side."+
                                                        "</ul>"+
                                                        "<p>If, at the start of the Enemy Phase, there is an Enemy in the Zone of the Objective marker on the colored side, the Mission ends in defeat.</p>"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "towerDefense" ],
                                            gameMode: [ "towerDefense" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "none" ],
                                            bridges:[ "none" ],
                                            corridors: [ "towerDefense" ],
                                        }
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