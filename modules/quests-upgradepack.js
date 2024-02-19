ModManager.modules.push(function(){

    return [
            {

            id:"quests-upgradepack",
            needs:[ "quests-default", "md2-upgradepack", "challenges-default" ],
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
                                                        IT:[ "La Guardia Cittadina", "E' fuggito di corsa non appena ha potuto ed ha lasciato agli eroi il compito di", "riuscita" ],
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
                            type:"collect",
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
                                                        IT:[ "che però sembra corrotto e deformato:" ],
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
                                                        IT:[ "&egrave; il canto dei servi dell’Oscurità." ],
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
                                                        IT:[ "È giunto il momento che gli eroi si uniscano al coro, con" ],
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
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano le {tokensCount.objective} {label.compose@0} che devono essere unite all’entrata {label.base@2} {label.base@5}. Un qualsiasi Eroe che si trovi nella Zona di un segnalino Obiettivo con il lato colorato a faccia in su può spendere 1 PM per raccoglierlo. I segnalini Obiettivo con il lato colorato a faccia in su possono essere scambiati come fossero oggetti. Un qualsiasi Eroe che trasporta un segnalino Obiettivo con il lato colorato a faccia in su può spendere 1 azione nella Zona della del segnalino Obiettivo sul lato grigio {label.compose@1} {label.base@6}.",
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
                        },
                    ]
                }
            ]
        }
    ]

});