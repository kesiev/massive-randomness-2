ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                IT:[ "la Missione termina con una vittoria", "terminare la Missione con una vittoria" ],
                EN:[ "the Mission ends with a victory", "end the Mission with a victory" ]
            }
        ],
        BOSSBEAT = [
            {
                IT:[ "viene eliminato", "viene eliminata" ],
                EN:[ "it is eliminated", "it is eliminated" ]
            }
        ];

    return [
        {
            id:"quests-hellscape",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-hellscape", "untranslated-fr" ],
            label:{
                EN:"MD2: Hellscape inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[2],
                            type:"finalBoss",
                            objective:{
                                EN:"Separated Heroes must gather to a zone and beat a Roaming Monster to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Hellscape\"",
                                EN:"Inspired by the Hellscape quest \"Hellscape\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                problem:[
                                                    {
                                                        IT:[ "Qualcosa &egrave; andato storto con l'ultimo portale! Ci siamo persi e" ],
                                                        EN:[ "Something went wrong with the last portal! We got lost and" ]
                                                    },{
                                                        IT:[ "Non ricordiamo cosa sia successo. Appena abbiamo riaperto gli occhi ci siamo accorti che" ],
                                                        EN:[ "We don't remember what happened. As soon as we reopened our eyes we realized that" ]
                                                    },{
                                                        IT:[ "Quella di separarci nella foresta non &egrave; stata una buona idea..." ],
                                                        EN:[ "Separating us in the forest wasn't a good idea..." ]
                                                    }
                                                ],
                                                lost:[
                                                    {
                                                        IT:[ "ora siamo separati gli uni dagli altri!", "Separati!" ],
                                                        EN:[ "we are now separated from each other!", "Separated!" ]
                                                    },{
                                                        IT:[ "qualche forza misteriosa deve averci separato!", "La Forza Misteriosa" ],
                                                        EN:[ "some mysterious force must have separated us!", "The Mysterious Force" ]
                                                    },{
                                                        IT:[ "non capiamo dove siamo finiti!", "Dove siamo finiti?" ],
                                                        EN:[ "we don't understand where we ended up!", "Where have we ended up?" ]
                                                    }
                                                ],
                                                guard:[
                                                    {
                                                        IT:[ "C'&egrave; un Mostro Errante che fa la guardia all'unica via d'uscita" ],
                                                        EN:[ "There is a Roaming Monster guarding the only way out" ]
                                                    },{
                                                        IT:[ "Si narra che da queste parti si trovi una tremenda creaturea" ],
                                                        EN:[ "It is said that in these parts there is a terrible creature" ]
                                                    },{
                                                        IT:[ "Qualcosa di terribile si aggira tra queste mura" ],
                                                        EN:[ "Something terrible is lurking within these walls" ]
                                                    }
                                                ],
                                                avoid:[
                                                    {
                                                        IT:[ "e non possiamo rischiare che ci segua." ],
                                                        EN:[ "and we can't risk him following us." ]
                                                    },{
                                                        IT:[ "e non abbiamo altra scelta che affrontarla." ],
                                                        EN:[ "and we have no choice but to face it." ]
                                                    },{
                                                        IT:[ "e potrebbe essere l'obiettivo che cercavamo da tempo." ],
                                                        EN:[ "and it could be the goal we've been looking for for some time." ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "Dobbiamo riunirci e sopprimere il mostro" ],
                                                        EN:[ "We must gather and eliminate the monster" ],
                                                    },{
                                                        IT:[ "Dovremo affrontare una durissima battaglia" ],
                                                        EN:[ "We will have to face a very tough battle" ]
                                                    },{
                                                        IT:[ "Non possiamo farcela da soli... Dobbiamo ritrovarci" ],
                                                        EN:[ "We can't do it alone... We have to reunite" ]
                                                    }
                                                ],
                                                goal:[
                                                    {
                                                        IT:[ "prima di tornare a casa!" ],
                                                        EN:[ "before going home!" ]
                                                    },{
                                                        IT:[ "per poter porre fine a tutto questo!" ],
                                                        EN:[ "to be able to put an end to all this!" ]
                                                    },{
                                                        IT:[ "o per il Regno non ci sar&agrave; speranza!" ],
                                                        EN:[ "or there will be no hope for the Kingdom!" ]
                                                    }
                                                ],
                                                gate:[
                                                    {
                                                        IT:[ "Portale Arcano", "Portali Arcani", "i", "un", "il suo portale", "unicamente il proprio portale" ],
                                                        EN:[ "Arcane Portal", "Arcane Portals", "the", "an", "his portal", "their own portal only" ]
                                                    },{
                                                        IT:[ "Teletrasporto", "Teletrasporti", "i", "un", "il suo teletrasporto", "unicamente il proprio teletrasporto" ],
                                                        EN:[ "Teleporter", "Teleporters", "the", "a", "his teleporter", "their own teleporter only" ]
                                                    },{
                                                        IT:[ "Specchio Incantato", "Specchi Incantati", "gli", "uno", "il suo specchio", "unicamente il proprio specchio" ],
                                                        EN:[ "Enchanted Mirror", "Enchanted Mirrors", "the", "an", "his mirror", "their own mirror only" ]
                                                    }
                                                ],
                                                cliffhanger:[
                                                    {
                                                        IT:[ "L'Interferenza Oscura" ],
                                                        EN:[ "The Dark Interference" ]
                                                    },{
                                                        IT:[ "Il Combattimento Finale" ],
                                                        EN:[ "The Final Battle" ]
                                                    },{
                                                        IT:[ "L'Ultima Prova" ],
                                                        EN:[ "The Last Challenge" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noDoor:[
                                                    {
                                                        IT:[ "{label.gate@5}" ],
                                                        EN:[ "{label.gate@5}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.cliffhanger@0}"
                                        },{
                                            EN:"{label.gate:capital@2} {label.gate:capital@1}"
                                        },{
                                            EN:"{label.lost:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.problem@0} {label.lost@0} {label.guard@0} {label.avoid@0} {label.objective@0} {label.goal@0}"
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
                                                        IT:"L'Adunanza",
                                                        EN:"The Gathering"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Tutti gli Eroi devono raggiungere la Tessera {tileLabel.center}",
                                                        EN:"All Heroes must reach the {tileLabel.center} tile"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere il Mostro",
                                                        EN:"Defeating the Monster"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Sconfiggere il Mostro Errante Finale",
                                                        EN:"Defeating the Final Roaming Monster"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Separati",
                                                        EN:"Separated"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questa Missione, gli Eroi partono separati e ogni giocatore deve collocare il proprio Eroe in una Zona di Partenza diversa. In una partita a 5 o 6 Eroi, 1 o 2 Zone di Partenza possono contenere un massimo di 2 Eroi. A tutti i fini (facendo eccezione per il Mostro Errante Finale), considerate la Missione come se soltanto 2 Eroi stessero giocando.<p>In una partita a meno di 4 Eroi, rimuovete abbastanza Tessere in modo che restino solo la Tessera del Boss ({tileLabel.center}) pi&ugrave; 1 Tessera per Eroe. Non rimuovete la tessera {tileLabel.first}.</p>",
                                                        EN:"In this Mission, the Heroes start separately and each player must place their Hero in a different Starting Zone. In a game with 5 or 6 Heroes, 1 or 2 Starting Zones can contain a maximum of 2 Heroes. For any purposes (except for the Final Roaming Monster), treat the Mission as if only 2 Heroes were playing.<p>In a game with fewer than 4 Heroes, remove enough Tiles so that only the Boss Tile remains ({tileLabel.center}) plus 1 Tile per Hero. Do not remove the {tileLabel.first} tile.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nota",
                                                        EN:"Note"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le Orde vengono generate soltanto con 2 Gregari e il proprio Comandante e i Mostri Erranti hanno la Salute equivalente solo a 2 Eroi.",
                                                        EN:"The Hordes are only generated with 2 Minions and their Leader and the Roaming Monsters have the equivalent Health of only 2 Heroes."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.gate@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT: "Le tessere non sono collegate in questa Missione ed &egrave; possibile accedervi soltanto usando {label.gate@2} {label.gate@1} rappresentati dai segnalini Obiettivo, che per&ograve; sono disattivati."+
                                                            "<p>{label.gate:capital@3} {label.gate@0} si attiva immediatamente ed il suo segnalino Obiettivo viene girato sul suo lato colorato dopo che la sua Tessera corrispondente &egrave; rimasta priva di Nemici e tutte le Camere sono state rivelate.</p>"+
                                                            "Qualsiasi Eroe che ha attivato {label.gate@4} pu&ograve; spendere 1 PM mentre si trova in una Zona con un segnalino Obiettivo di qualsiasi colore per muoversi fino a una qualsiasi altra zona con un segnalino Obiettivo di qualsiasi colore.",
                                                        EN: "The tiles are not connected in this Mission and can only be accessed using {label.gate@2} {label.gate@1} represented by the Objective tokens, which however are deactivated."+
                                                        "<p>{label.gate:capital@3} {label.gate@0} activates immediately and its Objective token is flipped to its colored side after its corresponding tile remains have no Enemies and all Chambers are been revealed.</p>"+
                                                        "Any Hero who has activated {label.gate@4} can spend 1 MP while in a Zone with an Objective token of any color to move to any other zone with an Objective token of any color."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.cliffhanger@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando aprite la porte con il bordo rosso sulla Tessera {tileLabel.center} non risolvete carte Porta, rimuovete il segnalino Corruzione {symbol.corruptionToken} e generate un Mostro Errante di Livello 5 nella sua zona.<p>Pescate carte dal mazzo degli Oggetti dell'Orda di Livello 5 finch&eacute; non rivelate un'arma con lo stesso tipo di attacco del Mostro Errante. Assegnate quell'arma al Mostro Errante, aggiungendo i dadi dell'arma alla riserva di dadi di Attacco del Mostro Errante.</p><p>Quando il Mostro Errante viene sconfitto {label.questVictory@0}.</p>",
                                                        EN:"When you open the door with the red outline on the {tileLabel.center} tile, do not resolve Door cards, remove the Corruption token {symbol.corruptionToken}, and generate a Level 5 Roaming Monster in its area.<p>Draw cards from the Level 5 Horde Items deck until you reveal a weapon with the same attack type as the Roaming Monster. Equip that weapon to the Roaming Monster, adding the weapon's dice to the Roaming Monster's Attack dice pool.</p><p>When the Roaming Monster is defeated {label.questVictory@0}.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando aprite la porte con il bordo rosso sulla Tessera {tileLabel.center} non risolvete carte Porta, rimuovete il segnalino Corruzione {symbol.corruptionToken} e generate {label.campaignBoss@0} nella sua zona.<p>Pescate carte dal mazzo degli Oggetti dell'Orda corrispondente al suo rango finch&eacute; non rivelate un'arma con lo stesso tipo di attacco del Mostro Errante. Assegnate quell'arma al Mostro Errante, aggiungendo i dadi dell'arma alla riserva di dadi di Attacco del Mostro Errante.</p><p>Quando il Mostro Errante viene sconfitto {label.questVictory@0}.</p>",
                                                        EN:"When you open the door with the red outline on the {tileLabel.center} tile, do not resolve Door cards, remove the Corruption token {symbol.corruptionToken}, and generate {label.campaignBoss@0} in its area.<p>Draw cards from the Horde Items deck matching its rank until you reveal a weapon with the same attack type as the Roaming Monster. Equip that weapon to the Roaming Monster, adding the weapon's dice to the Roaming Monster's Attack dice pool.</p><p>When the Roaming Monster is defeated {label.questVictory@0}.</p>"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "cross" ],
                                            gameMode: [ "cross" ],
                                            difficulty:[ "none" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio: [ "same" ],
                                            corridors: [ "cross" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noDoor" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Finire il combattimento in sospeso contro {boss.bossBadName@0}",
                                                    EN:"Finish the pending fight against {boss.bossBadName@0}"
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[2,3],
                            forMaps:[0,1],
                            type:"xpAndDeliver",
                            objective:{
                                EN:"Collect resources from map tokens or a fixed amount depending on the eliminated enemy type. Reach a resource quota and perform an action on a zone to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Collezionista di Anime\"",
                                EN:"Inspired by the Hellscape quest \"The Soul Collector\"",
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                gate:[
                                                    {
                                                        IT:[ "i", "cancelli", "che portano",  "sono sbarrati da", "il", "cancello", "Zona del Cancello" ],
                                                        EN:[ "the", "gates", "leading", "are barred by", "the", "gate", "Zone of the Gate" ]
                                                    },{
                                                        IT:[ "i", "portali", "che conducono", "sono tenuti ben saldi da", "il", "portale", "Zona del Portale" ],
                                                        EN:[ "the", "portals", "leading", "are held firmly by", "the", "portal", "Zone of the Portal" ]
                                                    },{
                                                        IT:[ "il", "ponte", "che ci permetterebbe di proseguire", "&egrave; bloccato da", "il", "ponte", "Zona del Ponte" ],
                                                        EN:[ "the", "bridge", "that would allow us to continue", "is blocked by", "the", "bridge", "Zone of the Bridge" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT:[ "alla", "Valle degli Spiriti", "entrare nella", "nella" ],
                                                        EN:[ "to the", "Spirit Valley", "enter into", "in the" ]
                                                    },{
                                                        IT:[ "verso la", "Capitale degli Antichi", "entrare nella", "nella" ],
                                                        EN:[ "towards the", "Capital of the Ancients", "enter the", "in the" ],
                                                    },{
                                                        IT:[ "verso le", "Scogliere Tempestose", "raggiungere le", "sulle" ],
                                                        EN:[ "toward the", "Stormy Cliffs", "reach the", "on the" ],
                                                    }
                                                ],
                                                block:[
                                                    {
                                                        IT:[ "un'Interdizione Demoniaca", "deve essere disattivata con un'offerta in Anime...", "Ma raccogliere qualcosa di effimero come un'anima pu&ograve; essere un'impresa complicata...", "raccogliere", "le", "anime", "anima", "le", "Prigioni delle Anime", "delle", "di" , "l'Interdizione", "dalla", "distruzione", "distrutto", "distruggerli", "distrutti", "a distruggere", "distruggendo", "tutte le" ],
                                                        EN:[ "a Demonic Ward", "must be deactivated with an offering in Souls...", "But collecting something as ephemeral as a soul can be a tricky business...", "collect", "the", "souls", "soul", "the", "Souls Prisons", "of", "of", "the Interdiction", "from the", "destruction", "destroyed", "destroy them", "destroyed", "to destroy", "destroying", "all the" ]
                                                    },{
                                                        IT:[ "un Grande Guardiano", "deve essere convinto del nostro eroismo...", "Ma dimostrarlo potrebbe essere molto pericoloso...", "raccogliere", "i", "trofei", "trofeo", "le", "Icone del Male", "dei", "di" , "il Custode", "dalla", "distruzione", "distrutte", "distruggerle", "distrutte", "a distruggere", "distruggendo", "tutte le" ],
                                                        EN:[ "a Great Guardian", "must be convinced of our heroism...", "But proving it could be very dangerous...", "collect", "the", "trophies", "trophy", "the", "Icons of Evil", "of", "of", "the Keeper", "from the", "destruction", "destroyed", "destroy them", "destroyed", "to destroy", "destroying", "all the" ]
                                                    },{
                                                        IT:[ "una Guardia Corrotta", "deve essere convinta a collaborare con un bel sacco di monete...", "Ma trovare dell'oro, da queste parti, pu&ograve; costarci la vita...", "raccogliere", "le", "monete", "moneta", "i", "Forzieri", "delle", "di" , "la Guardia", "dall'", "apertura", "aperto", "aprirli", "aperti", "ad aprire", "aprendo", "tutti i" ],
                                                        EN:[ "a Corrupt Guard", "must be convinced to collaborate with a nice bag of coins...", "But finding gold in these parts can cost us our lives...", "collect" , "the", "coins", "coin", "the", "Chests", "of", "of" , "the Guard", "from the", "opening", "open", "open them" , "opened", "to open", "opening", "all the" ]
                                                    }
                                                ],
                                                toGoOn:[
                                                    {
                                                        IT:[ "Per arrivare a destinazione," ],
                                                        EN:[ "To get to your destination," ]
                                                    },{
                                                        IT:[ "Per poter proseguire," ],
                                                        EN:[ "To continue," ]
                                                    },{
                                                        IT:[ "Se vogliamo proseguire il nostro viaggio" ],
                                                        EN:[ "If we want to continue our journey" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectMoreItems:[
                                                    {
                                                        IT:[ 15, "{label.block:capital@5}", "{label.block:capital@5} per ogni Eroe" ],
                                                        EN:[ 15, "{label.block:capital@5}", "{label.block:capital@5} for each Hero" ]
                                                    }
                                                ],
                                                collectAllItems:[
                                                    {
                                                        IT:[ "{label.block@17} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}" ],
                                                        EN:[ "{label.block@17} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}"],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Il Collezionista {label.block@10} {label.block:capital@5}",
                                            EN:"The {label.block:capital@5} Collector"
                                        },{
                                            EN:"{label.block:capital@4} {label.block:capital@5}"
                                        },{
                                            EN:"{label.block:capital@7} {label.block:capital@8}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.gate:capital@0} {label.gate@1} {label.gate@2} {label.destination@0} {label.destination@1} {label.gate@3} {label.block@0}. {label.toGoOn@0} {label.block@11} {label.block@1} {label.block@2}"
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
                                                        EN:"{label.block:capital@3} {label.block@4} {label.block:capital@5}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere 10 {label.block:capital@5} per ogni Eroe",
                                                        EN:"Collect 10 {label.block:capital@5} for each Hero"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.destination:capital@2} {label.destination@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Gli Eroi devono uscire dal Dungeon attraverso {label.gate@4} {label.gate:capital@5}",
                                                        EN:"Heroes must exit the Dungeon through {label.gate@4} {label.gate:capital@5}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block:capital@3} {label.block@4} {label.block:capital@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.block:capital@4} {label.block:capital@5} provengono dall'uccisione dei Nemici e {label.block@12} {label.block@13} dei segnalini Obiettivo. Gli Eroi raccolgono 1 {label.block:capital@6} per ogni Gregario o Comandante ucciso da un Eroe. Ogni Mostro Errante conferisce agli Eroi 3 {label.block:capital@5} quando viene ucciso. I segnalini Obiettivo rappresentano {label.block@7} {label.block@8} e conferiscono 5 {label.block:capital@5} quando {label.block@16}. Collocate i segnalini Salute sulla {label.gate@6} (indicata dal segnalino Obiettivo grigio) per tenere il conto {label.block@9} {label.block:capital@5} che avete raccolto.",
                                                        EN:"{label.block:capital@4} {label.block:capital@5} come from killing Enemies and {label.block@12} {label.block@13} of the Objective tokens. Heroes collect 1 {label.block:capital@6} for each Minion or Leader killed by a Hero. Each Roaming Monster grants Heroes 3 {label.block:capital@5} when killed. Objective tokens represent {label.block@7} {label.block@8} and grant 5 {label.block:capital@5} when {label.block@16}. Place Health tokens on the {label.gate@6} (indicated by the gray Objective token) to hold the account {label.block@9} {label.block:capital@5} that you have raised."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block@8}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. L'Eroe che l'ha {label.block@14} ottiene 5 PE e gli Eroi raccolgono 5 {label.block:capital@5}.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Hero who has {label.block@14} it gets 5 XP and the Heroes collect 5 {label.block:capital@5}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. Gli Eroi raccolgono 5 {label.block:capital@5} e ogni Eroe ottiene 5 PE.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Heroes collect 5 {label.block:capital@5} and all Heroes gets 5 XP."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. Gli Eroi raccolgono 5 {label.block:capital@5} e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} PE.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Heroes collect 5 {label.block:capital@5} and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} XP."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.destination:capital@2} {label.destination@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena gli Eroi possiedono un totale di 10 {label.block:capital@5} per Eroe, possono uscire dal Dungeon attraverso {label.gate@4} {label.gate:capital@5}: un Eroe che si trova nella {label.gate@6} pu&ograve; spendere 1 PM per uscire dal Dungeon. Non appena tutti gli Eroi sono usciti dal Dungeon, {label.questVictory@0}.",
                                                        EN:"As soon as the Heroes have a total of 10 {label.block:capital@5} per Hero, they can exit the Dungeon through {label.gate@4} {label.gate:capital@5}: a Hero in the {label.gate@6} can spend 1 MP to exit the Dungeon. As soon as all Heroes have exited the Dungeon, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom", "roamingToRoom" ],
                                            gameMode: [ "xpAndDeliver" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectMoreItems", "collectAllItems" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, che attende gli Eroi {label.destination@3} {label.destination@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, waiting the Heroes {label.destination@3} {label.destination@1}",
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[0],
                            forMaps:[0,1],
                            type:"collect",
                            objective:{
                                EN:"Collect all tokens and perform an action on a zone to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Via per Hellscape\"",
                                EN:"Inspired by the Hellscape quest \"Highway to Hellscape\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                reason:[
                                                    { 
                                                        IT:"La proliferazione dei portali attorno la capitale lascia credere",
                                                        EN:"The proliferation of portals around the capital suggests"
                                                    },{
                                                        IT:"I misteriosi rapimenti accaduti nei villaggi vicini suggeriscono",
                                                        EN:"The mysterious kidnappings that occurred in the nearby villages suggest"
                                                    },{
                                                        IT:"Gli incendi scoppiati misteriosamente nelle foreste suggeriscono",
                                                        EN:"The fires that mysteriously broke out in the forests suggest"
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:"sia stato commesso qualche orrendo sacrificio",
                                                        EN:"some horrendous sacrifice has been committed"
                                                    },{
                                                        IT:"si stia diffondendo un traffico illegale",
                                                        EN:"illegal trafficking is spreading"
                                                    },{
                                                        IT:"ci sia sotto qualcosa di losco",
                                                        EN:"there's something fishy going on"
                                                    }
                                                ],
                                                planb:[
                                                    {
                                                        IT:"Non possiamo fare niente al riguardo, ma forse potremmo trarre vantaggio dalla situazione.",
                                                        EN:"We can't do anything about it, but maybe we could take advantage of the situation."
                                                    },{
                                                        IT:"Nessuno &egrave; disposto a rischiare per porre fine alla questione. Eccetto noi.",
                                                        EN:"No one is willing to take risks to put an end to the matter. Except us."
                                                    },{
                                                        IT:"Bisogna fare qualcosa. E in fretta.",
                                                        EN:"Something must be done. And quickly."
                                                    }
                                                ],
                                                solution:[
                                                    {
                                                        IT:[
                                                            "c'&egrave; qualcosa che ci potrebbe condurre al Regno Oscuro",
                                                            "Potremmo portare la battaglia a casa del nemico stavolta",
                                                            "Entrare nel Regno Oscuro",
                                                            "Oscurit&agrave; Rivelata",
                                                            "Attraversare"
                                                        ],
                                                        EN:[
                                                            "there is something that could lead to the Dark Realm",
                                                            "We could bring the fight to our enemies home this time",
                                                            "Entering the Darkness",
                                                            "Revealed Darkness",
                                                            "Enter"
                                                        ]
                                                    },{
                                                        IT:[
                                                            "potremmo trovare qualche indizio",
                                                            "Riusciremmo finalmente incastrare i responsabili una volta per tutte",
                                                            "Entrare nel nascondiglio",
                                                            "Nascondiglio Rivelato",
                                                            "Entrare attraverso"
                                                        ],
                                                        EN:[
                                                            "there is something that could lead to the Hell Realm",
                                                            "We could finally be able to stop those responsible once and for all",
                                                            "Entering the Hideout",
                                                            "Revealed Hideout",
                                                            "Enter"
                                                        ]
                                                    },{
                                                        IT:[
                                                            "potremmo scoprire la verit&agrave;",
                                                            "Potremmo svelare il mistero",
                                                            "Scoprire la Verit&agrave;",
                                                            "Verit&agrave; Rivelata",
                                                            "Analizzare"
                                                        ],
                                                        EN:[
                                                            "we could discover the truth",
                                                            "We could reveal this mystery",
                                                            "Uncovering the Truth",
                                                            "Truth Revealed",
                                                            "Investigate"
                                                        ]
                                                    }
                                                ],
                                                block:[
                                                    {
                                                        IT:"il Cancello",
                                                        EN:"the Gate"
                                                    },{
                                                        IT:"il Passaggio",
                                                        EN:"the Passage"
                                                    },{
                                                        IT:"l'Inferriata",
                                                        EN:"the Railing"
                                                    }
                                                ],
                                                unblock:[
                                                    {
                                                        IT:[ "interruttore", "interruttori", "gli interruttori sono rappresentati", "attivare", "attivare almeno", "ad attivare tutti gli", "attivando" ],
                                                        EN:[ "switch", "switches", "the switches are represented", "activate", "activate at least", "to activate all the", "activating" ],
                                                    },{
                                                        IT:[ "candela", "candele", "le candele sono rappresentate", "accendere", "accendere almeno", "ad accendere tutte le", "accendendo" ],
                                                        EN:[ "candle", "candles", "the candles are represented", "light", "light at least", "to light all the", "lighting" ],
                                                    },{
                                                        IT:[ "leva", "leve", "le leve sono rappresentate", "tirare", "tirare almeno", "a tirare tutte le", "tirando" ],
                                                        EN:[ "lever", "levers", "the levers are represented", "pull", "pull at least", "to pull all the", "pulling" ]
                                                    }
                                                ],
                                                escapeTo:[
                                                    {
                                                        IT:[ "il portale", "Il Portale" ],
                                                        EN:[ "the portal", "The Portal" ]
                                                    },{
                                                        IT:[ "la botola", "Il Passaggio" ],
                                                        EN:[ "the trapdoor", "The Passage" ]
                                                    },{
                                                        IT:[ "la galleria", "La Galleria" ],
                                                        EN:[ "the tunnel", "The Tunnel" ]
                                                    }
                                                ],
                                                crazy:[
                                                    {
                                                        IT:[ "per quanto l'idea possa sembrare folle." ],
                                                        EN:[ "as crazy as it may sound."]
                                                    },{
                                                        IT:[ "anche se potrebbe costarci caro." ],
                                                        EN:[ "even if it could cost us dearly."]
                                                    },{
                                                        IT:[ "anche se non crediamo ci sia molta altra scelta." ],
                                                        EN:[ "although we don't think there is much choice."]
                                                    }
                                                ],
                                                somewhere:[
                                                    {
                                                        IT:[ "Forse da queste parti" ],
                                                        EN:[ "Maybe around here," ]
                                                    },{
                                                        IT:[ "Siamo sicuri che qui in giro" ],
                                                        EN:[ "We're sure around here" ]
                                                    },{
                                                        IT:[ "Ci &egrave; stato detto che qui intorno" ],
                                                        EN:[ "We've been told that around here" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                actionSameTime:[
                                                    {
                                                        IT:[ "{label.unblock:capital@4} 2 {label.unblock@1}" ],
                                                        EN:[ "{label.unblock:capital@4} 2 {label.unblock@1}" ]
                                                    }
                                                ],
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "{label.unblock@5} {label.unblock@1}", "{label.unblock@6} {label.collectOptionalItems@3} {label.unblock@1}", "{tokensCount.objective}" ],
                                                        EN:[ "{label.unblock@5} {label.unblock@1}", "{label.unblock@6} {label.collectOptionalItems@3} {label.unblock@1}", "{tokensCount.objective}"]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.solution:capital@2}"
                                        },{
                                            IT:"{label.escapeTo:capital@0} Dietro {label.block:capital}",
                                            EN:"{label.escapeTo:capital@0} Behind {label.block:capital}"
                                        },{
                                            EN:"{label.solution:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.reason} che {label.event}. {label.planb} {label.somewhere@0} {label.solution@0}. {label.solution@1}, {label.crazy@0}",
                                            EN:"{label.reason} that {label.event}. {label.planb} {label.somewhere@0} {label.solution@0}. {label.solution@1}, {label.crazy@0}"
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
                                                        IT:"Aprire {label.block}",
                                                        EN:"Open {label.block}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.unblock:capital@3} {label.collectOptionalItems@2} {label.unblock@1}",
                                                        EN:"{label.unblock:capital@3} {label.collectOptionalItems@2} {label.unblock@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.solution@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.solution@4} {label.escapeTo@0}",
                                                        EN:"{label.solution@4} {label.escapeTo@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block:capital}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.block:capital} (la porta con il bordo rosso) consente ai Nemici di passare: i Nemici possono muoversi liberamente attraverso questa porta. Al fine di aprire {label.block}, gli Eroi devono {label.unblock@3} {label.collectOptionalItems@2} {label.unblock@1}. {label.block:capital} blocca la Linea di Vista.",
                                                        EN:"{label.block:capital} (the door with the red outline) allows the Enemies to pass through: Enemies can move freely through this door. To open {label.block}, Heroes must {label.unblock@3} {label.collectOptionalItems@2} {label.unblock@1}. {label.block:capital} blocks the Line of Sight.",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Aprire {label.block}",
                                                        EN:"Open {label.block}",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo e rimuoverlo dal Dungeon. L'Eroe che lo fa ottiene 3 PE.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token and remove it from the Dungeon. The Hero who does so gains 3 XP."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo e rimuoverlo dal Dungeon.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token and remove it from the Dungeon."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo per rimuoverlo dal Dungeon e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token, remove it from the Dungeon, and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.solution@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.collectOptionalItems@2} segnalini Obiettivo con il lato colorato a faccia in su vengono rimossi, {label.block} si apre. Girare il segnalino Porta evidenziato con il bordo rosso sul lato aperto e rivelare la Camera come di consueto.",
                                                        EN:"As soon as {label.collectOptionalItems@2} Objective tokens with the colored side up are removed, {label.block} opens. Flip the Door token highlighted with the red outline to its open side and reveal the Chamber as normal."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.solution@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Qualsiasi Eroe sulla Zona contrassegnata dal segnalino Obiettivo grigio pu&ograve; spendere 1 PM per uscire dal Dungeon. Una volta che tutti gli Eroi sono usciti, {label.questVictory@0}.",
                                                        EN:"Any Hero in the Area marked with the gray Objective token can spend 1 MP to exit the Dungeon. Once all the Heroes have exited, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "unlockAndActivate" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectOptionalItems", "actionSameTime" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare Colui Che Attende Oltre {label.escapeTo@1}",
                                                    EN:"Eliminate The One Who Waits Beyond {label.escapeTo@1}",
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[1,2],
                            forMaps:[2],
                            type:"tyrant",
                            objective:{
                                EN:"Use an item to make a Roaming Monster vulnerable and eliminate it to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Bestia dell'Orrore\"",
                                EN:"Inspired by the Hellscape quest \"The Horror Beast\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                incipit:[
                                                    {
                                                        IT:[ "Secondo molte leggende," ],
                                                        EN:[ "According to the legends," ]
                                                    },{
                                                        IT:[ "Abbiamo scoperto che" ],
                                                        EN:[ "We discovered that" ]
                                                    },{
                                                        IT:[ "In citt&agrave; si dice che" ],
                                                        EN:[ "In the city, it is said that" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT: [ "una", "Bestia Arcana", "la", "Bestia", "della", "sulla", "alla", "ucciderla", "ucciderla", "uccisa" ],
                                                        EN: [ "an", "Arcane Beast", "the", "Beast", "the", "on the", "on the", "killing it", "kill it", "killed" ]
                                                    },{
                                                        IT: [ "una", "Creatura Corrotta", "la", "Creatura", "della", "sulla", "alla", "ucciderla", "ucciderla", "uccisa" ],
                                                        EN: [ "a", "Corrupted Creature", "the", "Creature", "the", "on the", "on the", "killing it", "kill it", "killed" ]
                                                    },{
                                                        IT: [ "un", "Essere Perduto", "l'", "Essere", "dell'", "sull'", "all'", "ucciderlo", "ucciderlo", "ucciso" ],
                                                        EN: [ "a", "Lost Being", "the", "Being", "the", "on the", "on the", "killing it", "kill it", "killed" ]
                                                    }
                                                ],
                                                doing:[
                                                    {
                                                        IT:[ "si aggira nei meandri del Regno Oscuro" ],
                                                        EN:[ "wanders in the depths of the Dark Realm" ]
                                                    },{
                                                        IT:[ "ha cominciato a cacciare nei foreste dei dintorni" ],
                                                        EN:[ "began hunting in the surrounding forests" ]
                                                    },{
                                                        IT:[ "si sta pericolosamente avvicinando al villaggio" ],
                                                        EN:[ "is getting dangerously close to the village" ]
                                                    }
                                                ],
                                                impossible:[
                                                    {
                                                        IT:[ "non esiste alcun mezzo mortale in grado di {label.enemy@7}" ],
                                                        EN:[ "there is no mortal means capable of {label.enemy@7}" ]
                                                    },{
                                                        IT:[ "non sembra esistere alcun modo per {label.enemy@8}" ],
                                                        EN:[ "there doesn't seem to be any way to {label.enemy@8}" ]
                                                    },{
                                                        IT:[ "sembra essere invulnerabile" ],
                                                        EN:[ "appears to be invulnerable" ]
                                                    }
                                                ],
                                                fear:[
                                                    {
                                                        IT:[ "si tiene alla larga da alcune aree del suo territorio" ],
                                                        EN:[ "stays away from some areas of its territory" ]
                                                    },{
                                                        IT:[ "sembra fugga da alcune aree" ],
                                                        EN:[ "seemed to escape from some areas" ]
                                                    },{
                                                        IT:[ "sta evitando alcune zone specifiche" ],
                                                        EN:[ "avoids some specific areas" ]
                                                    },
                                                ],
                                                investigate:[
                                                    {
                                                        IT:[ "Indagando, abbiamo scoperto che queste aree sono disseminate di" ],
                                                        EN:[ "Upon investigation, we discovered that these areas are littered with" ]
                                                    },{
                                                        IT:[ "In queste aree, alcune pattuglie hanno trovato mucchi di" ],
                                                        EN:[ "There, some patrols found piles of" ]
                                                    },{
                                                        IT:[ "Queste zone sono rinomate per avere una grande concentrazione di" ],
                                                        EN:[ "These areas are renowned for having a large concentration of" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Anche se non abbiamo tempo per risolvere l'enigma della loro presenza" ],
                                                        EN:[ "Even if we don't have time to solve the riddle of their presence" ]
                                                    },{
                                                        IT:[ "I Saggi stanno indagando sulla questione ma non abbiamo tempo da pedere" ],
                                                        EN:[ "The Sages are investigating the matter but we have no time to waste" ]
                                                    },{
                                                        IT:[ "Non abbiamo abbastanza tempo per scoprire il motivo" ],
                                                        EN:[ "We don't have enough time to find out why" ]
                                                    }
                                                ],
                                                item:[
                                                    {
                                                        IT:[ "Piuma Angeliche", "Piume Angeliche", "le", "una", "forse possiamo usare questi resti per indebolire la creatura" ],
                                                        EN:[ "Angelic Feather", "Angelic Feathers", "the", "an", "perhaps we can use these remains to weaken the hideous creature" ]
                                                    },{
                                                        IT:[ "Scaglia Draconiche", "Scaglie Draconiche", "le", "una", "forse possiamo usarle a nostro vantaggio" ],
                                                        EN:[ "Draconic Scale", "Draconic Scales", "the", "a", "perhaps we can use them to our advantage" ]
                                                    },{
                                                        IT:[ "Pietra Cinerea", "Pietre Cineree", "le", "una", "forse possiamo incendiarle per rendere vulnerabile la creature" ],
                                                        EN:[ "Ashen Stone", "Ashen Stones", "the", "an", "perhaps we can set them on fire to make the creature vulnerable" ]
                                                    }
                                                ],
                                                luckily:[
                                                    {
                                                        IT:[ "Fortunatamente," ],
                                                        EN:[ "Luckily," ]
                                                    },{
                                                        IT:[ "Ma non tutto &egrave; perduto:" ],
                                                        EN:[ "But not everything is lost:" ]
                                                    },{
                                                        IT:[ "I ranger, per&ograve;, hanno scoperto uno strano comportamento:" ],
                                                        EN:[ "The rangers, however, discovered strange behavior:" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectLessItems:[
                                                    {
                                                        IT:[ "a usare meno {label.item@1}", "collocando solo {label.collectLessItems@2} {label.item@1}" ],
                                                        EN:[ "to place less {label.item@1}", "placing {label.collectLessItems@2} {label.item@1} only" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.enemy@2} {label.enemy@3} dell'Orrore",
                                            EN: "The Horror {label.enemy@3}"
                                        },{
                                            EN: "{label.item@2} {label.item@1}"
                                        },{
                                            IT: "{label.enemy@2} {label.enemy@3} e {label.item@2} {label.item@1}",
                                            EN: "{label.enemy@2} {label.enemy@3} and {label.item@2} {label.item@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.incipit@0} {label.enemy@0} {label.enemy@1} {label.doing@0} e {label.impossible@0}. {label.luckily@0} {label.enemy@2} {label.enemy@3} {label.fear@0}. {label.investigate@0} {label.item@1}! {label.but@0}, {label.item@4}.",
                                            EN:"{label.incipit@0} {label.enemy@0} {label.enemy@1} {label.doing@0} and {label.impossible@0}. {label.luckily@0} {label.enemy@2} {label.enemy@3} {label.fear@0}. {label.investigate@0} {label.item@1}! {label.but@0}, {label.item@4}.",
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
                                                        IT:"Sconfiggere {label.enemy@2} {label.enemy@3}",
                                                        EN:"Defeat {label.enemy@2} {label.enemy@3}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.item@2} {label.item@1} per rendere {label.enemy@2} {label.enemy@3} vulnerabile, e poi ucciderla.",
                                                        EN:"Use {label.item@2} {label.item@1} to make {label.enemy@2} {label.enemy@3} vulnerable, and then kill it."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy:capital@2} {label.enemy@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, generate un Mostro Errante casuale di Livello 5 nella Zona indicata: si tratta {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} viene attivata normalmente durante ogni Fase dei Nemici, ma &egrave; invulnerabile: non pu&ograve; essere bersagliata da nessun attacco, abilit&agrave; o capacit&agrave; e non pu&ograve; subire Ferite.",
                                                        EN:"During setup, spawn a random Level 5 Roaming Monster in the indicated Area: it is {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is activated normally during each Enemy Phase, but is invulnerable: it cannot be targeted by any attack, ability, or capability and cannot suffer Wounds."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Durante la preparazione, generate {label.campaignBoss@0} nella Zona indicata: si tratta {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} viene attivata normalmente durante ogni Fase dei Nemici, ma &egrave; invulnerabile: non pu&ograve; essere bersagliata da nessun attacco, abilit&agrave; o capacit&agrave; e non pu&ograve; subire Ferite.",
                                                        EN:"During setup, spawn {label.campaignBoss@0} in the indicated Area: it is {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is activated normally during each Enemy Phase, but is invulnerable: it cannot be targeted by any attack, ability, or capability and cannot suffer Wounds."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.item@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.item:capital@2} {label.item:capital@1} sono rappresentate dai segnalini Obiettivo. Qualsiasi Eroe che si trovi in una Zona con un segnalino Obiettivo pu&ograve; spendere 1 PM per interagire con quel segnalino e raccoglierlo (un Eroe pu&ograve; trasportarne pi&ugrave; di 1). Un Eroe che trasporta {label.item@3} {label.item@0} mentre si trova nella Zona {label.enemy@4} {label.enemy@3} pu&ograve; spendere 1 PM per collocare 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} &egrave; vulnerabile fintanto che su di essa c'&egrave; {label.item@3} {label.item@0}: gli Eroi possono attaccarla, usare le abilit&agrave; e le capacit&agrave; e infliggere Ferite {label.enemy@6} {label.enemy@3}. All'inizio di ogni round, rimuovete tutte {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, che diventa di nuovo invulnerabile.",
                                                        EN:"{label.item:capital@2} {label.item:capital@1} are represented by Objective tokens. Any Hero in a Zone with an Objective token can spend 1 MP to interact with that token and collect it (a Hero can carry more than 1). A Hero carrying {label.item@3} {label.item@0} while in {label.enemy@4} {label.enemy@3} Zone can spend 1 MP to place 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is vulnerable as long as there is {label.item@3} {label.item@0}: Heroes can attack it, use skills and abilities, and inflict Wounds {label.enemy@6} {label.enemy@3}. At the start of each round, remove all {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, which becomes invulnerable again."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.item:capital@2} {label.item:capital@1} sono rappresentate dai segnalini Obiettivo. Qualsiasi Eroe che si trovi in una Zona con un segnalino Obiettivo pu&ograve; spendere 1 PM per interagire con quel segnalino, raccoglierlo (un Eroe pu&ograve; trasportarne pi&ugrave; di 1) e Tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Un Eroe che trasporta {label.item@3} {label.item@0} mentre si trova nella Zona {label.enemy@4} {label.enemy@3} pu&ograve; spendere 1 PM per collocare 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} &egrave; vulnerabile fintanto che su di essa c'&egrave; {label.item@3} {label.item@0}: gli Eroi possono attaccarla, usare le abilit&agrave; e le capacit&agrave; e infliggere Ferite {label.enemy@6} {label.enemy@3}. All'inizio di ogni round, rimuovete tutte {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, che diventa di nuovo invulnerabile.",
                                                        EN:"{label.item:capital@2} {label.item:capital@1} are represented by Objective tokens. Any Hero in a Zone with an Objective token can spend 1 MP to interact with that token, collect it (a Hero can carry more than 1), and All Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. A Hero carrying {label.item@3} {label.item@0} while in {label.enemy@4} {label.enemy@3} Zone can spend 1 MP to place 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is vulnerable as long as there is {label.item@3} {label.item@0}: Heroes can attack it, use skills and abilities, and inflict Wounds {label.enemy@6} {label.enemy@3}. At the start of each round, remove all {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, which becomes invulnerable again."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemy@2} {label.enemy@3}",
                                                        EN:"Defeat {label.enemy@2} {label.enemy@3}",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.enemy@2} {label.enemy@3} viene {label.enemy@9}, {label.questVictory@0}.",
                                                        EN:"As soon as {label.enemy@2} {label.enemy@3} is {label.enemy@9}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path" ],
                                            gameMode: [ "targets" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "tyrant" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectLessItems" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, mandante {label.enemy@4} {label.enemy@3}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.enemy@4} {label.enemy@3} instigator",
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[1],
                            type:"hunt",
                            objective:{
                                EN:"Eliminate all special Roaming Monsters to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Labirinto Infernale\"",
                                EN:"Inspired by the Hellscape quest \"Hellish Maze\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                incipit:[
                                                    {
                                                        IT:[ "Stando alle leggende," ],
                                                        EN:[ "According to legends,"]
                                                    },{
                                                        IT:[ "Si narra che" ],
                                                        EN:[ "It is said that"]
                                                    },{
                                                        IT:[ "Nei testi sacri si dice che" ],
                                                        EN:[ "In the sacred texts, it is said that"]
                                                    }
                                                ],
                                                monsters:[
                                                    {
                                                        IT:[ "le", "Bestie Oscure", "delle", "le", "delle" ],
                                                        EN:[ "the", "Dark Beasts", "of the", "the", "of the" ]
                                                    },{
                                                        IT:[ "gli", "Esseri Corrotti", "degli", "i", "dei" ],
                                                        EN:[ "the", "Corrupted Ones", "of the", "the", "of the" ]
                                                    },{
                                                        IT:[ "gli", "Eroi Caduti", "degli", "i", "dei" ],
                                                        EN:[ "the", "Fallen Heroes", "of the", "the", "of the" ]
                                                    }
                                                ],
                                                roamingWay:[
                                                    {
                                                        IT:[ "vagano per" ],
                                                        EN:[ "wander" ]
                                                    },{
                                                        IT:[ "pattugliano" ],
                                                        EN:[ "patrol" ]
                                                    },{
                                                        IT:[ "controllano" ],
                                                        EN:[ "control" ]
                                                    }
                                                ],
                                                roamingPlace:[
                                                    {
                                                        IT:[ "un angolo oscuro del", "Reame della Morte" ],
                                                        EN:[ "in a dark corner of the", "Death Realm" ],
                                                    },{
                                                        IT:[ "le stanze delle", "Segrete Proibite" ],
                                                        EN:[ "the rooms of the", "Forbidden Dungeons" ],
                                                    },{
                                                        IT:[ "i corridoi del", "Chiostro Maledetto" ],
                                                        EN:[ "among the corridors of the", "Cursed Cloister" ],
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "Si dice che chiunque riesca a sconfiggerle tutte" ],
                                                        EN:[ "It is said that anyone who can defeat them all" ]
                                                    },{
                                                        IT:[ "Nessuno &egrave; mai riuscito a sconfiggerle tutte ma, nei testi antichi, si racconta che chi riuscir&agrave; a sconfiggerle" ],
                                                        EN:[ "No one has ever managed to defeat them all but, in ancient texts, it is said that those who will be able to defeat them all" ]
                                                    },{
                                                        IT:[ "Chi riuscir&agrave; a porre fine alla loro tormento" ],
                                                        EN:[ "Those who will be able to put an end to their torment" ]
                                                    }
                                                ],
                                                prize:[
                                                    {
                                                        IT:[ "ricever&agrave; in dono un potere supremo" ],
                                                        EN:[ "will receive a gift of supreme power" ]
                                                    },{
                                                        IT:[ "sar&agrave; premiato con grandi fortune" ],
                                                        EN:[ "will be rewarded with great fortunes" ]
                                                    },{
                                                        IT:[ "sar&agrave; benedetto dagli dei" ],
                                                        EN:[ "will be blessed by the gods" ]
                                                    }
                                                ],
                                                mystery:[
                                                    {
                                                        IT:[ "Ovviamente qui niente &egrave; mai quello che sembra..." ],
                                                        EN:[ "Obviously, nothing here is ever what it seems..." ],
                                                    },{
                                                        IT:[ "Ma, di sicuro, non sar&agrave; cos&igrave; semplice..." ],
                                                        EN:[ "But it certainly won't be that simple..." ],
                                                    },{
                                                        IT:[ "Ma sembra tutto troppo semplice per essere vero..." ],
                                                        EN:[ "But it all seems too simple to be true..." ],
                                                    }
                                                ],
                                                maze:[
                                                    {
                                                        IT:[ "Il Labirinto", "i passaggi magici", "Il Labirinto Incantato", "Magia" ],
                                                        EN:[ "The Maze", "the magic passages", "The Enchanted Maze", "Magic" ]
                                                    },{
                                                        IT:[ "Le Segrete", "i teletrasporti", "Le Segrete Sconnesse", "Teletrasporti" ],
                                                        EN:[ "The Dungeons", "the teleporters", "The Disconnected Dungeons", "Teleports" ]
                                                    },{
                                                        IT:[ "I Piani", "le scale", "Il Palazzo", "Scale" ],
                                                        EN:[ "The Floors", "the stairs", "The Palace", "Stairs" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                eliminateEnemy:[
                                                    {
                                                        IT:[ "2 o pi&ugrave; {label.monsters@1}" ],
                                                        EN:[ "2 or more {label.monsters@1}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.maze@2}"
                                        },{
                                            EN: "{label.monsters:capital@0} {label.monsters:capital@1}"
                                        },{
                                            EN: "{label.roamingPlace:capital@0} {label.roamingPlace:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.incipit@0} {label.monsters@3} {tokensCount.corruption} {label.monsters@1} {label.roamingWay@0} {label.roamingPlace@0} {label.roamingPlace@1}. {label.objective@0} {label.prize@0}. {label.mystery@0}"
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
                                                        IT:"Uccidere {label.monsters@0} {label.monsters@1}",
                                                        EN:"Kill {label.monsters@0} {label.monsters@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere i {tokensCount.corruption} Mostri Erranti Speciali",
                                                        EN:"Kill the {tokensCount.corruption} Special Roaming Monsters"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.monsters:capital@0} {label.monsters:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che una delle Camere con un segnalino Corruzione {symbol.corruptionToken} viene rivelata, in aggiunta ai consueti passi di rivelazione di una Camera, generate anche un Mostro Errante nella Zona indicata dal segnalino Corruzione in quella Camera. Questo Mostro Errante &egrave; 1 {label.monsters@2} {label.monsters@1}. Una volta che tutte e {tokensCount.corruption} {label.monsters@0} {label.monsters@1} sono state uccise, {label.questVictory@0}.",
                                                        EN:"Whenever one of the Chambers with a Corruption token {symbol.corruptionToken} is revealed, in addition to the usual steps of revealing a Chamber, you also spawn a Roaming Monster in the Zone indicated by the Corruption token in that Chamber. This Roaming Monster is 1 {label.monsters@2} {label.monsters@1}. Once all {tokensCount.corruption} {label.monsters@1} have been killed, {label.questVictory@0}."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni volta che una delle Camere con un segnalino Corruzione {symbol.corruptionToken} viene rivelata, in aggiunta ai consueti passi di rivelazione di una Camera, generate anche un Mostro Errante nella Zona indicata dal segnalino Corruzione in quella Camera. Questo Mostro Errante &egrave; 1 {label.monsters@2} {label.monsters@1} e, quando viene sconfitto, tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.corruption} PE. Una volta che tutte e {tokensCount.corruption} {label.monsters@0} {label.monsters@1} sono state uccise, {label.questVictory@0}.",
                                                        EN:"Whenever one of the Chambers with a Corruption token {symbol.corruptionToken} is revealed, in addition to the usual steps of revealing a Chamber, you also spawn a Roaming Monster in the Zone indicated by the Corruption token in that Chamber. This Roaming Monster is 1 {label.monsters@2} {label.monsters@1}. When it is defeated all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.corruption} XP. Once all {tokensCount.corruption} {label.monsters@1} have been killed, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.maze@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le tessere non sono collegate in questa Missione ed &egrave; possibile accedervi soltanto usando {label.maze@1} rappresentati dai segnalini Obiettivo. Qualsiasi Eroe pu&ograve; spendere 1 PM mentre si trova in una Zona con un segnalino Obiettivo per muoversi fino a una qualsiasi altra zona con un segnalino Obiettivo.",
                                                        EN:"The tiles are not linked in this Mission and can only be accessed using {label.maze@1} represented by Objective tokens. Any Hero can spend 1 MP while in a Zone with an Objective token to move to any other area with an Objective token.",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri e {label.maze@3}",
                                                        EN:"Monsters and {label.maze@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Anche le Orde e i Mostri Erranti possono usare {label.maze@1}. Durante la Fase dei Nemici, se non ci sono Eroi su una Tessera, qualsiasi Orda e Mostro Errante su quella Tessera si muove verso la Zona pi&ugrave; vicina con un segnalino Obiettivo. Tutte le Zone con i segnalini Obiettivo sono considerate adiacenti l'una all'altra per le Orde e i Mostri Erranti (ma non permettono Linea di Vista dall'una all'altra).",
                                                        EN:"Mobs and Roaming Monsters can also use {label.maze@1}. During the Enemies Phase, if there are no Heroes on a tile, any Mob and Roaming Monsters on that tile move to the nearest Zone with an Objective token. All Zones with Objective tokens are considered adjacent to each other for Mobs and Roaming Monsters (but do not allow Line of Sight from one to the other).",
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "magicMaze" ],
                                            gameMode: [ "magicMazeHunt" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "square" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "magicMaze" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "eliminateEnemy" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, Signore {label.monsters@4} {tokensCount.corruption} {label.monsters@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, Master {label.monsters@4} {tokensCount.corruption} {label.monsters@1}",
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[0,1],
                            forMaps:[0,1],
                            type:"relay",
                            objective:{
                                EN:"Use a cursed weapon to break some elements to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Spada Maledetta\"",
                                EN:"Inspired by the Hellscape quest \"The Cursed Sword\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                weapon:[
                                                    {
                                                        IT:[ "la Spada Maledetta", "alla Spada Maledetta", "nel mazzo dei Tesori Comuni", "lo Spadone Davvero Enorme", "la Spada", "Arma Maledetta", "la tiene per s&eacute;" ],
                                                        EN:[ "the Cursed Sword", "the Cursed Sword", "in the Common Treasure deck", "the Big Freakin' Greatsword", "the Sword", "Cursed Weapon", "keeps it to himself" ]
                                                    }
                                                ],
                                                toBreak:[
                                                    {
                                                        IT:[ "i", "Cristalli del Vuoto", "un", "Cristallo del Vuoto", "intaccarli", "rimuovendolo", "scalfirli" ],
                                                        EN:[ "the", "Void Crystals", "the", "Void Crystals" ]
                                                    },{
                                                        IT:[ "i", "Monoliti dell'Odio", "un", "Monolite dell'Odio", "intaccarli", "rimuovendolo", "scalfirli" ],
                                                        EN:[ "the", "Monoliths of Hatred", "the", "Monolith of Hatred" ]
                                                    },{
                                                        IT:[ "le", "Statue della Morte", "una", "Statua della Morte", "intaccarle", "rimuovendola", "scalfirle" ],
                                                        EN:[ "the", "Statues of Death", "the", "Statue of Death" ]
                                                    }
                                                ],
                                                purpose:[
                                                    {
                                                        IT:[ "indeboliremo il legame tra il Reame Oscuro e il nostro mondo" ],
                                                        EN:[ "we will weaken the bond between the Dark Realm and our world" ]
                                                    },{
                                                        IT:[ "impediremo al Grande Antico di tornare sulla Terra" ],
                                                        EN:[ "we will prevent the Great Old One from returning to Earth" ]
                                                    },{
                                                        IT:[ "porremo fine alla piaga che tiene in ginocchio il regno da troppo tempo" ],
                                                        EN:[ "we will put an end to the plague that has brought the kingdom to its knees for too long" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Ma c'&egrave; soltanto un artefatto che riesce quanto meno a {label.toBreak@4}, ed &egrave; maledetto" ],
                                                        EN:[ "But there's only one artifact that can at least affect them, and it's cursed" ]
                                                    },{
                                                        IT:[ "Ma l'unico modo per {label.toBreak@6} &egrave; impugnando un'{label.weapon@5}" ],
                                                        EN:[ "But the only way to defeat them is by holding a {label.weapon@5}" ]
                                                    },{
                                                        IT:[ "Purtroppo, il solo artefatto in grado di {label.toBreak@6} potrebbe ucciderci tutti" ],
                                                        EN:[ "Unfortunately, the one artifact that may help us also could kill us all" ]
                                                    }
                                                ],
                                                consequence:[
                                                    {
                                                        IT:[ "chiunque lo impugni troppo a lungo soccomber&agrave;!", "ogni forza dell'Eroe verr&agrave; prosciugata" ],
                                                        EN:[ "anyone who holds it for too long will succumb!", "all the Hero's strength will be drained" ]
                                                    },{
                                                        IT:[ "chiunque ne faccia uso per troppo tempo perder&agrave; la sua anima!", "l'arma reclamer&agrave; l'anima dell'Eroe" ],
                                                        EN:[ "anyone who uses it for too long will lose their soul!", "the weapon will claim the Hero's soul" ]
                                                    },{
                                                        IT:[ "di chi ne abbia fatto uso per troppo tempo si dice rimanga soltanto un mucchio di cenere!", "il corpo dell'Eroe verr&agrave; ridotto in polvere" ],
                                                        EN:[ "of those who have held it for too long, it is said that only a pile of ashes remains!", "the Hero's body will be reduced to dust" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                keepItem:[
                                                    {
                                                        IT:[ "{label.weapon@0} {label.weapon@6}", "{label.weapon@0}" ],
                                                        EN:[ "{label.weapon@0} {label.weapon@6}", "{label.weapon@0}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.weapon@0}"
                                        },{
                                            EN:"{label.toBreak@0} {label.toBreak@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"Distruggendo {label.toBreak@0} {label.toBreak@1} {label.purpose@0}. {label.but@0}: {label.consequence@0}",
                                            EN:"Breaking {label.toBreak@0} {label.toBreak@1} {label.purpose@0}. {label.but@0}: {label.consequence@0}"
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
                                                        IT:"Distruggere {label.toBreak@0} {label.toBreak@1}",
                                                        EN:"Destroy {label.toBreak@0} {label.toBreak@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.weapon@0} per distruggere {label.toBreak@0} {tokensCount.objective} {label.toBreak@1}",
                                                        EN:"Use {label.weapon@0} to destroy {label.toBreak@0} {tokensCount.objective} {label.toBreak@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Condividere il Fardello",
                                                        EN:"Sharing the Burden"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Non consentire {label.weapon@1} di sconfiggere nessun Eroe",
                                                        EN:"Don't allow {label.weapon@1} to defeat any Hero"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.weapon:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, cercate {label.weapon@2} {label.weapon@3} e scegliete un Eroe che prenda questo oggetto come sua arma di partenza al posto di un'arma regolare: questa &egrave; {label.weapon@0}.",
                                                        EN:"During setup, look for {label.weapon@2} {label.weapon@3} and choose a Hero to take this item as his starting weapon instead of a regular weapon: this is {label.weapon@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Durante la preparazione, pescate la carta Campagna 20 di Heavenfall e scegliete un Eroe che prenda questo oggetto come sua arma: questa &egrave; {label.weapon@0}.",
                                                        EN:"During setup, draw the Heavenfall Campaign card 20 and choose a Hero to take this item as his weapon: this is {label.weapon@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Condividere il Fardello",
                                                        EN:"Sharing the Burden"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe che impugna {label.weapon@0} subisce all'inizio di ogni Fase degli Eroi un ammontare di Ferite che dipende da quanto a lungo ha impugnato {label.weapon@4}.<p>Queste Ferite si applicano prima che qualsiasi segnalino Latore di Vita abbia effetto:</p><ul>"+
                                                        "<li><b>1&deg; round</b>: 1 Ferita</li>"+
                                                        "<li><b>2&deg; round consecutivo</b>: 2 Ferite</li>"+
                                                        "<li><b>3&deg; round consecutivo</b>: 3 Ferite</li>"+
                                                        "<li><b>4&deg; round consecutivo</b>: Sconfitta! Se un Eroe inizia il suo 4&deg; round consecutivo impugnando {label.weapon@0}, {label.consequence@1} e la Missione termina con una sconfitta.</li>"+
                                                        "</ul><p>Usate i segnalini Corruzione {symbol.corruptionToken} per tenere il conto del numero di round in cui un singolo Eroe ha impugnato {label.weapon@0}. Non appena un Eroe passa {label.weapon@0} a un altro Eroe attraverso un'azione di Scambiare, scartate i segnalini e ricominciate da capo il conteggio. {label.weapon:capital@0} non pu&ograve; essere custodita nell'Inventario di un Eroe.</p>",
                                                        EN:"A Hero holding {label.weapon@0} suffers a number of Wounds at the start of each Hero Phase depending on how long he has held {label.weapon@4}.<p>These Wounds apply before any Lifebringer token takes effect:</p><ul>"+
                                                        "<li><b>1st round</b>: 1 Wound</li>"+
                                                        "<li><b>2nd consecutive round</b>: 2 Wounds</li>"+
                                                        "<li><b>3rd consecutive round</b>: 3 Wounds</li>"+
                                                        "<li><b>4th consecutive round</b>: Defeated! If a Hero begins his 4th consecutive round holding {label.weapon@0}, {label.consequence@1} and the Mission ends in defeat.</li>"+
                                                        "</ul><p>Use Corruption tokens {symbol.corruptionToken} to keep track of the number of rounds a single Hero has wielded {label.weapon@0}. As soon as a Hero passes {label.weapon@0} to another Hero through a Trade action, discard the tokens and start counting again. {label.weapon:capital@0} cannot be stored in a Hero's Inventory.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Distruggere {label.toBreak@0} {label.toBreak@1}",
                                                        EN:"Destroy {label.toBreak@0} {label.toBreak@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon e ottenendo 5 PE. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon and gaining 5 XP. Once all tokens have been removed, {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon. Once all tokens have been removed, {label.questVictory@0}."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon e tutti gli Eroi ottengono {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Once all tokens have been removed, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Potere della Distruzione",
                                                        EN:"The Power of Destruction"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.weapon:capital@0} si fa pi&ugrave; forte man mano che {label.toBreak@0} {label.toBreak@1} vengono distrutti. {label.weapon:capital@0} ottiene i dadi di Attacco seguenti in base al numero di segnalini Obiettivo che sono stati rimossi dal Dungeon:<ul>"+
                                                        "<li>1 Segnalino: +1 {symbol.yellowDie}</li>"+
                                                        "<li>2 Segnalino: +2 {symbol.yellowDie}</li>"+
                                                        "<li>3 Segnalino: +2 {symbol.yellowDie} +1 {symbol.orangeDie}</li>"+
                                                        "<li>4 Segnalino: +2 {symbol.yellowDie} +2 {symbol.orangeDie}</li>"+
                                                        "</ul>",
                                                        EN:"{label.weapon:capital@0} grows stronger as {label.toBreak@0} {label.toBreak@1} are destroyed. {label.weapon:capital@0} gains the following Attack dice based on the number of Objective tokens that were removed from the Dungeon:<ul>"+
                                                        "<li>1 Token: +1 {symbol.yellowDie}</li>"+
                                                        "<li>2 Tokens: +2 {symbol.yellowDie}</li>"+
                                                        "<li>3 Tokens: +2 {symbol.yellowDie} +1 {symbol.orangeDie}</li>"+
                                                        "<li>4 Tokens: +2 {symbol.yellowDie} +2 {symbol.orangeDie}</li>"+
                                                        "</ul>"
                                                    }
                                                ],
                                                campaignExplanation:[]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"In Solitario",
                                                        EN:"Single Player rules"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"L'Eroe non subisce Ferite cumulative (subisce invece 1 Ferita per round). L'Eroe non viene sconfitto se impugna {label.weapon@0} per 4 round consecutivi e pu&ograve; scegliere di usare qualsiasi arma di partenza come \"{label.weapon@5}\".",
                                                        EN:"The Hero suffers no cumulative Wounds (instead he suffers 1 Wound per round). The Hero is not defeated if he holds {label.weapon@0} for 4 consecutive rounds and can choose to use any starting weapon as a \"{label.weapon@5}\"."
                                                    }
                                                ],
                                                campaignExplanation:[]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode: [ "targets" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            rewards:[
                                                {
                                                    IT:"Rimettere la carta Campagna 20 di Heavenfall con le altre carte Missione e pescare 1 carta dal mazzo dei Tesori Epici.",
                                                    EN:"Put the Heavenfall Campaign card 20 back with the other Mission cards and draw 1 card from the Epic Treasures deck."
                                                }
                                            ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noLifebringer", "keepItem" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        preparation:{
                                            IT:"<p>Da adesso in poi {label.weapon@0} si comporta come un'arma regolare. L'Eroe che la impugna pu&ograve; rimuoverla o sostituirla con un'altra arma nel proprio inventario prima dello Scontro con il Boss.</p>",
                                            EN:"<p>From now on {label.weapon@0} behaves like a regular weapon. The Hero who wields it can remove it or replace it with another weapon in their inventory before the Boss Fight.</p>"
                                        },
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, che ha creato {label.weapon@0}",
                                                    EN:"Eliminate {boss.bossBadName@0}, creator of {label.weapon@0}",
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[1],
                            type:"escort",
                            objective:{
                                EN:"Escort an NPC to a zone to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Passaggio\"",
                                EN:"Inspired by the Hellscape quest \"The Passage\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                escorting:[
                                                    {
                                                        IT:[ "un evocatore", "l'evocatore", "l'Evocatore", "Statistiche dell'Evocatore", "un sacerdote" ],
                                                        EN:[ "a summoner", "the summoner", "the Summoner", "Summoner Statistics", "a priest" ]
                                                    },
                                                    {
                                                        IT:[ "un incantatore", "l'incantatore", "l'Incantatore", "Statistiche dell'Incantatore", "un mago" ],
                                                        EN:[ "an enchanter", "the enchanter", "the Enchanter", "Enchanter Statistics", "a wizard" ],
                                                    },
                                                    {
                                                        IT:[ "un apprendista mago", "l'apprendista mago", "l'Apprendista", "Statistiche dell'Apprendista Mago", "qualcuno disposto a rischiare" ],
                                                        EN:[ "an apprentice wizard", "the apprentice wizard", "the Apprentice", "Apprentice Statistics", "someone willing to take a risk" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT:[ "inferno", "all'Inferno", "laggi&ugrave;" ],
                                                        EN:[ "hell", "the Hell", "into the depths" ]
                                                    },
                                                    {
                                                        IT:[ "aldil&egrave;", "nell'Aldil&agrave;", "oltre" ],
                                                        EN:[ "afterlife", "the Afterlife", "beyond life" ]
                                                    },
                                                    {
                                                        IT:[ "segrete", "nelle Segrete", "la sotto" ],
                                                        EN:[ "dungeon", "the Dungeon", "down there" ]
                                                    }
                                                ],
                                                door:[
                                                    {
                                                        IT:[ "al Varco", "il Varco", "Zona del Varco", "del Varco", "nel Varco", "incanala con successo l'energia del Varco", "usare l'energia del portale" ],
                                                        EN:[ "to the Rift", "the Rift", "Zone of the Rift", "of the Rift", "the Rift", "channel the Rift energy", "use the Rift energy" ]
                                                    },
                                                    {
                                                        IT:[ "al Cancello", "il Cancello", "Zona del Cancello", "del Cancello", "nel Cancello", "rimuovere la maledizione dal Cancello", "annullarne l'incantesimo" ],
                                                        EN:[ "to the Gate", "the Gate", "Zone of the Gate", "of the Gate", "the Gate", "lift the Gate's curse", "remove its curse" ]
                                                    },
                                                    {
                                                        IT:[ "al Passaggio", "il Passaggio", "Zona del Passaggio", "del Passaggio", "nel Passaggio", "rivelare la posizione del Passaggio", "svelarne la posizione esatta" ],
                                                        EN:[ "to the Passage", "the Passage", "Zone of the Passage", "of the Passage", "the Passage", "reveal the Passage position", "discover its exact position" ]
                                                    }
                                                ],
                                                intro1:[
                                                    {
                                                        IT:[ "Erano giorni che cercavamo informazioni su come infiltrarci {label.destination@1}." ],
                                                        EN:[ "We had been looking for information on how to infiltrate {label.destination@1} for days." ]
                                                    },
                                                    {
                                                        IT:[ "Sapevamo dove fosse {label.door@1} ma non conoscevamo alcun modo per {label.door@6}." ],
                                                        EN:[ "We knew where {label.door@1} was but we didn't know any way to {label.door@6}." ]
                                                    },
                                                    {
                                                        IT:[ "Non c'era altro modo. Ci serviva l'aiuto di {label.escorting@4}..." ],
                                                        EN:[ "There was no other way. We needed the help of {label.escorting@4}..." ]
                                                    }
                                                ],
                                                intro2:[
                                                    {
                                                        IT:[ "In una piccola casa nei boschi vicini viveva" ],
                                                        EN:[ "In a small house in the nearby woods, there lived" ]
                                                    },
                                                    {
                                                        IT:[ "In un vicolo nascosto del borgo abitava" ],
                                                        EN:[ "In a hidden alley of the village, there lived" ]
                                                    },
                                                    {
                                                        IT:[ "Lungo la via verso il mercato incrociammo" ],
                                                        EN:[ "On the way to the market, we came across" ]
                                                    }
                                                ],
                                                lead:[
                                                    {
                                                        IT:[ "per aiutarci a proseguire il nostro viaggio" ],
                                                        EN:[ "to help us continue our journey" ]
                                                    },{
                                                        IT:[ "per poterlo attraversare" ],
                                                        EN:[ "to be able to pass it" ]
                                                    },{
                                                        IT:[ "per condurci alla nostra destinazione finale" ],
                                                        EN:[ "to lead us to our final destination" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noDamage:[
                                                    {
                                                        IT:[ "{label.escorting@2}", "{label.escorting:capital@2}" ],
                                                        EN:[ "{label.escorting@2}", "{label.escorting:capital@2}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.door:capital@1}"
                                        },
                                        {
                                            IT: "Scorta {label.destination:capital@1}",
                                            EN: "Escort to {label.destination:capital@1}"
                                        },
                                        {
                                            EN: "{label.escorting:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.intro1@0} {label.intro2@0} {label.escorting@0} disposto a portarci fino {label.door@0} e {label.door@6} {label.lead@0}. Dobbiamo solo mantenere in vita {label.escorting@1} durante il cammino che ci porter&agrave; {label.destination@2}...",
                                            EN:"{label.intro1@0} {label.intro2@0} {label.escorting@0} who was willing to take us {label.door@0} and {label.door@6} {label.lead@0}. We just have to keep {label.escorting@1} alive during the journey that will take us {label.destination@2}...",
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
                                                        IT:"Proteggere {label.escorting@2}",
                                                        EN:"Protect {label.escorting@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Mantenere {label.escorting@2} in vita finch&eacute; non raggiunge {label.door@1}",
                                                        EN:"Keep {label.escorting@2} alive until it reaches {label.door@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Entrare {label.destination@1}",
                                                        EN:"Enter {label.destination@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Entrare attraverso {label.door@1}",
                                                        EN:"Enter through {label.door@1}",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Chi &egrave; questo?",
                                                        EN:"Who's that?"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, prendete una miniatura Eroe inutilizzata che rappresenti {label.escorting@2} e collocatela nella Zona di Partenza degli Eroi (senza assegnargli una base). Se non rimane nessuna miniatura Eroe disponibile, usate invece un segnalino Obiettivo grigio per rappresentare {label.escorting@2}.",
                                                        EN:"During setup, take an unused Hero miniature representing {label.escorting@2} and place it in the Hero Starting Zone (without assigning it a base). If there are no available Hero figures left, use a gray Objective token to represent {label.escorting@2} instead."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.escorting:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"A partire dal secondo round, all'inizio di ogni Fase degli Eroi, {label.escorting@2} si muove di 2 Zone verso la porta dal bordo rosso, seguendo sempre il percorso pi&ugrave; breve. {label.escorting:capital@2} non pu&ograve; aprire le Porte. {label.escorting:capital@2} non pu&ograve; mai uscire da una Zona dove ci sono dei Nemici. {label.escorting:capital@2} &egrave; considerato un Eroe ai fini di stabilire se pu&ograve; essere bersagliato da Eroi e Nemici, ma non pu&ograve; effettuare nessuna azione oltre a muoversi nel modo descritto sopra. Non pu&ograve; impugnare oggetti.",
                                                        EN:"Starting from the second round, at the start of each Hero Phase, {label.escorting@2} moves 2 Zones toward the red-edged door, always following the shortest path. {label.escorting:capital@2} cannot open the Doors. {label.escorting:capital@2} cannot never leave a Zone containing Enemies. {label.escorting:capital@2} is considered a Hero when determining whether he can be targeted by Heroes and Enemies, but cannot take any other action than moving as described above. It cannot hold objects."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.door:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.escorting:capital@2} raggiunge la zona con la porta dal bordo rosso, se &egrave; chiusa, termina il suo movimento e apre la porta. Rivelate la Camera come di consueto. Se la porta &egrave; aperta, {label.escorting:capital@2} continua il suo movimento verso {label.door@1}, rappresentato dal segnalino Obiettivo.",
                                                        EN:"As soon as {label.escorting:capital@2} reaches the area with the red-edged door, if it is closed, ends its movement and opens the door. Reveal the Chamber as normal. If the door is open, {label.escorting:capital@2} continues its movement towards {label.door@1}, represented by the Objective token."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Entrare {label.destination@1}",
                                                        EN:"Enter {label.destination@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.escorting:capital@2} raggiunge la {label.door@2}, {label.door@5}. Girate il segnalino Obiettivo e rimuovete {label.escorting@2} dal Dungeon. Fatto questo, qualsiasi Eroe pu&ograve; spendere 1 PM nella {label.door@2} per uscire dal Dungeon. Non appena tutti gli Eroi sono entrati {label.door@4}, {label.questVictory@0}.",
                                                        EN:"As soon as {label.escorting:capital@2} reaches the {label.door@2}, {label.door@5}. Flip the Objective token and remove {label.escorting@2} from the Dungeon. Once this is done, any Hero can spend 1 MP in the {label.door@2} to exit the Dungeon. As soon as all Heroes have entered {label.door@4}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.escorting@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Salute 8, Difesa: 2 {symbol.blueDie}",
                                                        EN:"Health 8, Defense: 2 {symbol.blueDie}"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "escort" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],    
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noDamage" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, in attesa oltre {label.door@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, waiting beyond {label.door@1}",
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[0],
                            type:"collect",
                            objective:{
                                EN:"Collect items and bring them to a zone to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"L'Artefatto Demoniaco\"",
                                EN:"Inspired by the Hellscape quest \"The Demon Artifact\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                object:[
                                                    {
                                                        IT: [ "l'artefatto", "gli artefatti", "artefatti", "artefatto", "forgiare", "degli artefatti" ],
                                                        EN: [ "the artifact", "the artifacts", "artifacts", "artifact", "forge", "of the artifacts" ]
                                                    },{
                                                        IT: [ "il cristallo", "i cristalli", "cristalli", "cristallo", "ricomporre", "dei cristallo" ],
                                                        EN: [ "the crystal", "the crystals", "crystals", "crystal", "recompose", "of the crystals" ]
                                                    },{
                                                        IT: [ "il sigillo", "i sigilli", "sigilli", "sigillo", "comporre", "dei sigilli" ],
                                                        EN: [ "the seal", "the seals", "seals", "seal", "compose", "of the seals" ]
                                                    }
                                                ],
                                                objectCategory:[
                                                    {
                                                        IT: "impugna una di queste reliquie",
                                                        EN: "hold one of these relics"
                                                    },{
                                                        IT: "stringe uno di questi oggetti arcani",
                                                        EN: "hold one of these arcane items"
                                                    },{
                                                        IT: "ne possiede uno",
                                                        EN: "own one of them"
                                                    }
                                                ],
                                                realm:[
                                                    {
                                                        IT: "Il Reame Oscuro",
                                                        EN: "The Dark Realm"
                                                    },{
                                                        IT: "La Rocca Abbandonata",
                                                        EN: "The Abandoned Fortress"
                                                    },{
                                                        IT: "La Torre Demoniaca",
                                                        EN: "The Demon Tower"
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT: "nasconde nelle sue profondit&agrave; {label.amount} {label.object@2}",
                                                        EN: "hides {label.amount} {label.object@2} in its dark depths"
                                                    },{
                                                        IT: "custodisce nelle sue segrete abbandonate {label.amount} {label.object@2}",
                                                        EN: "keeps {label.amount} {label.object@2} in its abandoned dungeons"
                                                    },{
                                                        IT: "cela nei suoi meandri {label.amount} {label.object@2}",
                                                        EN: "hides {label.amount} {label.object@2} in its meanders"
                                                    }
                                                ],
                                                amount:[
                                                    {
                                                        IT: "moltissimi",
                                                        EN: "many"
                                                    },{
                                                        IT: "rarissimi",
                                                        EN: "very rare"
                                                    },{
                                                        IT: "potentissimi",
                                                        EN: "very powerful"
                                                    }
                                                ],
                                                attribute:[
                                                    {
                                                        IT: [ "demoniaco", "demoniaci" ],
                                                        EN: [ "demoniac", "demoniac" ]
                                                    },{
                                                        IT: [ "maledetto", "maledetti" ],
                                                        EN: [ "cursed", "cursed" ]
                                                    },{
                                                        IT: [ "mortale", "mortali" ],
                                                        EN: [ "deadly", "deadly" ]
                                                    }
                                                ],
                                                power:[
                                                    {
                                                        IT: [ "di un potere indicibile", "potere indicibile" ],
                                                        EN: [ "unspeakable powers", "unspeakable powers" ],
                                                    },{
                                                        IT: [ "di poteri divini", "poteri divini" ],
                                                        EN: [ "godly powers", "godly powers" ],
                                                    },{
                                                        IT: [ "del Sacro Dono", "Il Sacro Dono" ],
                                                        EN: [ "the Sacred Gift", "the Sacred Gift" ],
                                                    }
                                                ],
                                                risk:[
                                                    {
                                                        IT: "di trasformarsi lentamente in un demone",
                                                        EN: "slowly transforming into a demon"
                                                    },{
                                                        IT: "di perdere pian piano la sua umanit&agrave;",
                                                        EN: "slowly losing his humanity"
                                                    },{
                                                        IT: "di accorciare inesorabilmente la durata della propria vita",
                                                        EN: "inexorably shortening his lifespan"
                                                    }
                                                ],
                                                part:[
                                                    {
                                                        IT: [ "frammento", "tutti", "i", "frammenti", "rappresentati", "stati raccolti", "Zona del Frammento" ],
                                                        EN: [ "fragment", "", "", "", "", "fragments", "Fragment's Zone"]
                                                    },{
                                                        IT: [ "componente", "tutti", "i", "componenti", "rappresentati", "stati raccolti", "Zona del Componente" ],
                                                        EN: [ "component", "", "", "", "", "components", "Component's Zone"]
                                                    },{
                                                        IT: [ "parte", "tutte", "le", "parti", "rappresentate", "state raccolte", "Zona della Parte" ],
                                                        EN: [ "part", "", "", "", "", "parts", "Part's Zone"]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT: [ "{label.object@4} {label.object@0} nella Forgia Corrotta", "Zona della Forgia Corrotta", "Forgiarli nel Fuoco Oscuro" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Corrupted Forge", "Corrupted Forge Zone", "Forge it in the Dark Fire" ]
                                                    },{
                                                        IT: [ "{label.object@4} {label.object@0} nella Sacra Fonte", "Zona della Sacra Fonte", "Ricongiungerli nella Sacra Fonte" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Sacred Source", "Sacred Source Zone", "Reunite them in the Sacred Source" ]
                                                    },{
                                                        IT: [ "{label.object@4} {label.object@0} nella Pressa Dorata", "Zona della Pressa Dorata", "Ricomporli nella Pressa Dorata" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Golden Press", "Golden Press Zone", "Reassemble them in the Golden Press" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccogliere {label.part@1} {label.part@2} {label.part@3}", "raccogliendo {label.collectOptionalItems@3} {label.part@3}", "{tokensCount.objective}" ],
                                                        EN:[ "to collect all the {label.part@5}", "collecting {label.collectOptionalItems@3} {label.part@5}", "{tokensCount.objective}"]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.object:capital@0} {label.attribute:capital@0}",
                                            EN: "The {label.attribute:capital@0} {label.object:capital@3}"
                                        },{
                                            EN: "{label.power:capital@1}"
                                        },{
                                            IT: "{label.realm} e {label.object:capital@0}",
                                            EN: "{label.realm} and {label.object:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.realm} {label.place}. Colui che {label.objectCategory} sar&agrave; il detentore {label.power@0}, ma rischia {label.risk}!",
                                            EN:"{label.realm} {label.place}. Those who {label.objectCategory} will get {label.power@0}, but it risks {label.risk}!",
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
                                                        IT:"Raccogliere {label.part@2} {label.part:capital@3}",
                                                        EN:"Collect the {label.part:capital@5}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.part@1} e {label.collectOptionalItems@2} {label.part@2} {label.part:capital@3} nel Dungeon",
                                                        EN:"Collect all the {label.collectOptionalItems@2} {label.part:capital@5} in the Dungeon",
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Raccogliere {label.collectOptionalItems@2} {label.part:capital@3} nel Dungeon",
                                                        EN:"Collect {label.collectOptionalItems@2} {label.part:capital@5} in the Dungeon",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo. L'Eroe che lo fa ottiene 5 PE.",
                                                        EN:"The Objective tokens with the colored side up can be exchanged as if they were objects. Any Hero carrying an Objective token with the colored side up represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up and immediately gain 5 XP."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo.",
                                                        EN:"The Objective tokens with the colored side up can be exchanged as if they were objects. Any Hero carrying an Objective token with the colored side up represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"The Objective tokens with the colored side up can be exchanged as if they were objects. Any Hero carrying an Objective token with the colored side up represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"{label.destination@2}",
                                                        EN:"{label.destination@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.part@1} e {label.collectOptionalItems@2} {label.part@2} {label.part:capital@3} per {label.destination@0}",
                                                        EN:"Use the {label.collectOptionalItems@2} {label.part:capital@5} to {label.destination@0}",
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Usare {label.part@2} {label.collectOptionalItems@2} {label.part:capital@3} per {label.destination@0}",
                                                        EN:"Use the {label.collectOptionalItems@2} {label.part:capital@5} to {label.destination@0}",
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando {label.part@1} {label.part@2} {label.part:capital@3} sono {label.part@5}, se tutti gli Eroi che possiedono almeno 1 {label.part:capital@0} si trovano nella {label.destination@1} (rappresentata dal segnalino Obiettivo grigio), un qualsiasi Eroe nella stessa Zona pu&ograve; spendere 1 azione per {label.object@4} {label.object@1} e {label.questVictory@1}.",
                                                        EN:"When all of the {label.part:capital@5} have been collected, if all the Heroes with at least 1 {label.part:capital@0} are in the {label.destination@1} (the gray side-up Objective token), any Hero in that Zone may spend 1 action to {label.object@4} {label.object@0} and {label.questVictory@1}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando {label.part@2} {label.collectOptionalItems@2} {label.part:capital@3} sono {label.part@5}, se tutti gli Eroi che possiedono almeno 1 {label.part:capital@0} si trovano nella {label.destination@1} (rappresentata dal segnalino Obiettivo grigio), un qualsiasi Eroe nella stessa Zona pu&ograve; spendere 1 azione per {label.object@4} {label.object@1} e {label.questVictory@1}.",
                                                        EN:"When the {label.collectOptionalItems@2} {label.part:capital@5} have been collected, if all the Heroes with at least 1 {label.part:capital@0} are in the {label.destination@1} (the gray side-up Objective token), any Hero in that Zone may spend 1 action to {label.object@4} {label.object@0} and {label.questVictory@1}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom", "roamingToRoom" ],
                                            gameMode: [ "collectAndDeliver" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                            { tags:[
                                                [ "visitAllRooms", "collectOptionalItems" ]
                                            ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, guardiano del potere {label.object@5}",
                                                    EN:"Eliminate {boss.bossBadName@0}, guardian {label.object@5} power",
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[2,3],
                            forMaps:[0,1],
                            type:"collecttimed",
                            objective:{
                                EN:"Collect items within the time limit and reach a zone to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Le Chiavi delle Anime\"",
                                EN:"Inspired by the Hellscape quest \"The Soul Keys\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                intro:[
                                                    {
                                                        IT:[ "A quanto pare, &egrave;" ],
                                                        EN:[ "Apparently, it is" ]
                                                    },{
                                                        IT:[ "Non ci sono dubbi: &egrave;" ],
                                                        EN:[ "There is no doubt about it: it is" ],
                                                    },{
                                                        IT:[ "Finalmente lo abbiamo scoperto. &Egrave;" ],
                                                        EN:[ "We finally found out. It is" ]
                                                    }
                                                ],
                                                culprit:[
                                                    {
                                                        IT:[ "la Morte", "la", "l'", "incarnata" ],
                                                        EN:[ "the Death", "the", "the", "embodied" ]
                                                    },{
                                                        IT:[ "il Male", "il", "l'", "incarnato" ],
                                                        EN:[ "the Evil", "the", "the", "embodied" ]
                                                    },{
                                                        IT:[ "la Pestilenza", "la", "l'", "incarnata" ],
                                                        EN:[ "the Pestilence", "the", "the", "embodied" ]
                                                    }
                                                ],
                                                culpritBody:[
                                                    {
                                                        IT:[ "in persona" ],
                                                        EN:[ "in person" ]
                                                    },{
                                                        IT:[ "in carne ed ossa" ],
                                                        EN:[ "in flesh and blood" ]
                                                    },{
                                                        IT:[ "{label.culprit@3}" ],
                                                        EN:[ "{label.culprit@3}" ]
                                                    }
                                                ],
                                                culpritOf:[
                                                    {
                                                        IT:[ "{label.culprit@1} responsabile" ],
                                                        EN:[ "responsible for" ]
                                                    },{
                                                        IT:[ "{label.culprit@2}origine" ],
                                                        EN:[ "the origin of" ]
                                                    },{
                                                        IT:[ "{label.culprit@1} causa" ],
                                                        EN:[ "the cause of" ]
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[ "di questa nuova Oscurit&agrave;" ],
                                                        EN:[ "this new Darkness" ]
                                                    },{
                                                        IT:[ "di questa ondata di omicidi" ],
                                                        EN:[ "this wave of murders" ]
                                                    },{
                                                        IT:[ "di queste recenti sparizioni" ],
                                                        EN:[ "these recent kidnappings" ]
                                                    }
                                                ],
                                                chance:[
                                                    {
                                                        IT:[ "Ma &egrave; possibile raggiungere" ],
                                                        EN:[ "But is it possible to reach" ]
                                                    },{
                                                        IT:[ "&Egrave; davvero possibile incontrare" ],
                                                        EN:[ "It is truly possible to meet" ]
                                                    },{
                                                        IT:[ "Ma dove si sta nascondendo" ],
                                                        EN:[ "But where is it hiding" ]
                                                    }
                                                ],
                                                discover:[
                                                    {
                                                        IT:[ "C'&egrave; solo un modo per scoprirlo." ],
                                                        EN:[ "There's only one way to find out." ]
                                                    },{
                                                        IT:[ "Qualcuno dice di aver scoperto un modo..." ],
                                                        EN:[ "Someone says they've discovered a way..." ]
                                                    },{
                                                        IT:[ "Esiste un modo..." ],
                                                        EN:[ "There is a way..." ]
                                                    }
                                                ],
                                                item:[
                                                    {
                                                        IT:[ "le", "Chiavi", "una", "Chiave", "1 sola Chiave" ],
                                                        EN:[ "the", "Keys", "one", "Key", "1 single Key"]
                                                    },{
                                                        IT:[ "le", "Schegge", "una", "Scheggia", "1 sola Scheggia" ],
                                                        EN:[ "the", "Shards", "one", "Shard", "1 single Shard"]
                                                    },{
                                                        IT:[ "i", "Frammenti", "un", "Frammento", "1 solo Frammento" ],
                                                        EN:[ "the", "Fragments", "one", "Fragment", "1 single Fragment"]
                                                    }
                                                ],
                                                itemOf:[
                                                    {
                                                        IT:[ "delle Anime", "dell'Anima" ],
                                                        EN:[ "Soul", "of Soul"]
                                                    },{
                                                        IT:[ "della Luce", "della Luce" ],
                                                        EN:[ "Light", "of Light"]
                                                    },{
                                                        IT:[ "delle Ombre", "dell'Ombra" ],
                                                        EN:[ "Shadow", "of Shadow"]
                                                    }
                                                ],
                                                exit:[
                                                    {
                                                        IT:[ "il Passaggio", "del Passaggio", "dal Passaggio" ],
                                                        EN:[ "the Passage", "Passage", "from the Passage" ]
                                                    },{
                                                        IT:[ "il Portale", "del Portale", "dal Portale" ],
                                                        EN:[ "the Portal", "Portal", "from the Portal" ]
                                                    },{
                                                        IT:[ "il Cancello", "del Cancello", "dal Cancello" ],
                                                        EN:[ "the Gate", "Gate", "from the Gate" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectTime:[
                                                    {
                                                        IT:[ "risparmiare tempo", "raccogliendo collettivamente 3 segnalini Tempo o pi&ugrave;" ],
                                                        EN:[ "spare some time", "collectively collecting 3 Time tokens or more" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.item:capital@0} {label.item@1} {label.itemOf@0}",
                                            EN: "{label.item:capital@0} {label.itemOf@0} {label.item@1}"
                                        },{
                                            IT: "{label.culprit:capital@0} {label.culpritBody@0}",
                                            EN: "{label.culprit:capital@0} {label.culpritBody@0}"
                                        },{
                                            IT: "{label.item:capital@0} {label.item:capital@1} e {label.exit@0}",
                                            EN: "{label.item:capital@0} {label.item:capital@1} and {label.exit@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.intro@0} {label.culprit@0} {label.culpritBody@0}, {label.culpritOf@0} {label.event@0}. {label.chance@0} {label.culprit@0}? {label.discover@0}",
                                            EN:"{label.intro@0} {label.culprit@0} {label.culpritBody@0}, {label.culpritOf@0} {label.event@0}. {label.chance@0} {label.culprit@0}? {label.discover@0}"
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
                                                        IT:"Raccogliere {label.item@0} {label.item@1} {label.itemOf@0}",
                                                        EN:"Collect {label.item@0} {label.itemOf@0} {label.item@1}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.item@0} {label.item@1} prima che svaniscano",
                                                        EN:"Collect {label.item@0} {label.item@1} before they vanish",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire {label.exit@2}",
                                                        EN:"Escape {label.exit@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uscire dal Dungeon attraverso {label.exit@0}",
                                                        EN:"Exit the Dungeon via {label.exit@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.exit:capital@0}",
                                                        EN:"{label.exit:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Camera {label.exit@1} &egrave; accessibile soltanto attraverso la porta dal bordo rosso. Questa porta &egrave; chiusa a chiave e pu&ograve; essere aperta solo quando gli Eroi possiedono collettivamente {label.item@0} {tokensCount.objective} {label.item@1} {label.itemOf@0} per accedere alla Camera. Un Eroe che si trova nella zona {label.exit@1} (il segnalino Obiettivo grigio) pu&ograve; spendere 1 PM per uscire dal Dungeon. Non appena tutti gli Eroi sono usciti dal Dungeon, {label.questVictory@0}.",
                                                        EN:"The {label.exit@1} Chamber is only accessible through the red-bordered door. This door is locked and can only be opened when the Heroes collectively own {label.item@0} {tokensCount.objective} {label.itemOf@0} {label.item@1} to access the Chamber. A Hero in the {label.exit@1} area (the gray Objective token) can spend 1 MP to exit the Dungeon. As soon as all Heroes have exited the Dungeon, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Tempo Stringe",
                                                        EN:"Time is Running Out"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, collocate i segnalini Tempo su ogni segnalino Obiettivo nella stessa Zona. Durante ogni Fase dell'Oscurit&agrave;, rimuovete 1 segnalino Tempo da ogni segnalino Obiettivo. Se in un qualsiasi momento i giocatori devono rimuovere un segnalino da un segnalino Obiettivo e non ne rimane nessuno, esso scompare e la Missione termina con una sconfitta.",
                                                        EN:"During setup, place Time tokens on each Objective token in the same Zone. During each Darkness Phase, remove 1 Time token from each Objective token. If at any time players must remove a token from an Objective token and none remains, it disappears and the Mission ends in defeat."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Raccogliere {label.item@0} {label.item@1} {label.itemOf@0}",
                                                        EN:"Collect {label.item@0} {label.itemOf@0} {label.item@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla. Ogni volta che {label.item@2} {label.item@3} {label.itemOf@1} viene raccolta, i segnalini Tempo su di esso vengono rimossi e ogni Eroe ottiene 8 PE. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up. Each time {label.item@2} {label.itemOf@0} {label.item@3} is picked up, the Time tokens are removed and all Heroes gain 8 XP. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla insieme ai suoi segnalini Tempo rimasti. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up with its remaining Time tokens. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla insieme ai suoi segnalini Tempo rimasti e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up with its remaining Time tokens and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Piani Eterei",
                                                        EN:"Ethereal Planes"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I nemici possono liberamente muoversi attraverso le porte anche se sono chiuse. Le porte chiuse bloccano comunque la Linea di Vista.",
                                                        EN:"Enemies can freely move through doors even if they are closed. Closed doors still block the Line of Sight."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "collectTimed" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectTime" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, {label.culprit@0} {label.culpritBody@0}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.culprit@0} {label.culpritBody@0}",
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>"
                                        },
                                        campaignPreparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo e Tempo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective and Time tokens from the Heroes' inventories.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});