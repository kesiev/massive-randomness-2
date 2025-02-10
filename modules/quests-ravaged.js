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
            id:"quests-ravaged",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-ravaged", "untranslated-fr" ],
            label:{
                EN:"Ravaged Mountains campaign inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forMaps:[2],
                            type:"collectBossAndExit",
                            objective:{
                                EN:"Collect a token, open the exit room, fight a boss, clear the final room and bring the token to the exit to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Ravaged Mountains \"Chuchotements Dans la Nuit\"",
                                EN:"Inspired by the Ravaged Mountains quest \"Chuchotements Dans la Nuit\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                see:[
                                                    {
                                                        IT:[ "I vostri occhi si sono posati su" ],
                                                        EN:[ "Your eyes have settled on" ]
                                                    },{
                                                        IT:[ "Superate le colline, appare" ],
                                                        EN:[ "Over the hills, it appears" ]
                                                    },{
                                                        IT:[ "Le grotte si aprono verso" ],
                                                        EN:[ "The caves open towards" ]
                                                    }
                                                ],
                                                horror:[
                                                    {
                                                        IT:[ "una nuova fossa comune" ],
                                                        EN:[ "a new mass grave" ]
                                                    },{
                                                        IT:[ "una catasta di cadaveri" ],
                                                        EN:[ "a pile of corpses" ]
                                                    },{
                                                        IT:[ "una piazza chiazzata di sangue" ],
                                                        EN:[ "a square stained with blood" ]
                                                    }
                                                ],
                                                already:[
                                                    {
                                                        IT:[ "Avete assistito a questo stesso spettacolo nelle vostre ultime 3 tappe:" ],
                                                        EN:[ "You have witnessed this same spectacle in your last 3 stops:" ]
                                                    },{
                                                        IT:[ "Sta succedendo fin troppo spesso:" ],
                                                        EN:[ "It is happening all too often:" ]
                                                    },{
                                                        IT:[ "Ancora una volta," ],
                                                        EN:[ "Once again," ]
                                                    }
                                                ],
                                                horrorDescription:[
                                                    {
                                                        IT:[ "uomini, donne e bambini, nessuno &egrave; sopravvissuto" ],
                                                        EN:[ "men, women, and children. No one survived" ]
                                                    },{
                                                        IT:[ "un massacro annunciato da un inquietante silenzio" ],
                                                        EN:[ "a massacre is announced by an eerie silence" ]
                                                    },{
                                                        IT:[ "innocenti uccisi senza alcun apparente motivo" ],
                                                        EN:[ "innocents are killed for no apparent reason" ]
                                                    }
                                                ],
                                                traces:[
                                                    {
                                                        IT:[ "Tutte le tracce indicano che", "le Tracce" ],
                                                        EN:[ "All traces indicate that", "the Traces" ]
                                                    },{
                                                        IT:[ "Una sottile scia di indizi suggerisce che", "la Scia" ],
                                                        EN:[ "A thin trail of clues suggests that", "the Trail" ]
                                                    },{
                                                        IT:[ "Dalle tracce sembra che", "i Segni" ],
                                                        EN:[ "From the traces, it seems that", "the Signs" ]
                                                    }
                                                ],
                                                what:[
                                                    {
                                                        IT:[ "le creature sono arrivate dalle montagne devastate", "Raggiungendole", "delle Creature" ],
                                                        EN:[ "the creatures have arrived from the devastated mountains", "Reaching them", "of the Creatures" ]
                                                    },{
                                                        IT:[ "i carnefici dovrebbero trovarsi poco distanti", "Raggiungendoli", "dei Carnefici" ],
                                                        EN:[ "the executioners should be not far away", "Reaching them", "of the Executioners" ]
                                                    },{
                                                        IT:[ "stavolta non siete lontani dagli assassini", "Raggiungendoli", "degli Assassini" ],
                                                        EN:[ "this time you are not far from the assassins", "Reaching them", "of the Assassins" ]
                                                    }
                                                ],
                                                reach:[
                                                    {
                                                        IT:[ "Andando li" ],
                                                        EN:[ "Going there" ]
                                                    },{
                                                        EN:[ "{label.what@1}" ]
                                                    },{
                                                        IT:[ "Ora finalmente" ],
                                                        EN:[ "Now finally" ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "potrete porre fine a questi massacri" ],
                                                        EN:[ "you can put an end to these massacres" ]
                                                    },{
                                                        IT:[ "potrete ottenere vendetta" ],
                                                        EN:[ "you can get revenge" ]
                                                    },{
                                                        IT:[ "potrete compiere la vostra missione" ],
                                                        EN:[ "you can complete your mission" ]
                                                    }
                                                ],
                                                info:[
                                                    {
                                                        IT:[ "le informazioni sui piani dell'Oscurit&agrave;", "le Informazioni" ],
                                                        EN:[ "the information on the Darkness plans", "the Information" ]
                                                    },{
                                                        IT:[ "la mappa dei prossimi obiettivi dell'Oscurit&agrave;", "la Mappa" ],
                                                        EN:[ "the map of the Darkness next objectives", "the Map" ]
                                                    },{
                                                        IT:[ "le prove", "le Prove" ],
                                                        EN:[ "the evidence", "the Evidence" ]
                                                    }
                                                ],
                                                collectAllItems:[
                                                    {
                                                        IT:[ "a eliminare tutte le tane", "raccogliendo tutti i segnalini Corruzione {symbol.corruptionToken}" ],
                                                        EN:[ "to eliminate all the nests", "collecting all the Corruption Tokens {symbol.corruptionToken}" ],
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.info:capital@1} {label.what@2}"
                                        },{
                                            EN:"{label.horror:capital@0}"
                                        },{
                                            EN:"{label.traces:capital@1} {label.what@2}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.see@0} {label.horror@0}. {label.already@0} {label.horrorDescription@0}. {label.traces@0} {label.what@0}. {label.reach@0} {label.target@0}."
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
                                                        IT:"Il Recupero",
                                                        EN:"The Recovery"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Recuperare {label.info@0}",
                                                        EN:"Recover {label.info@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Portare le informazioni all'uscita e completare un turno senza che rimangano Nemici nella stanza",
                                                        EN:"Take the information to the exit and complete a turn without any Enemies remaining in the room"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Tane",
                                                        EN:"The Nests"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe nella Zona di un segnalino Corruzione {symbol.corruptionToken} pu&ograve; spendere 1 azione per scartarlo e guadagnare 5 PE.",
                                                        EN:"A Hero in a Corruption token {symbol.corruptionToken} Zone can spend 1 action to discard it and gain 5 XP."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Un Eroe nella zona di un segnalino Corruzione {symbol.corruptionToken} pu&ograve; spendere 1 azione per scartarlo ed pescare un segnalino dal sacchetto dei Tesori.",
                                                        EN:"A Hero in a Corruption token {symbol.corruptionToken} Zone can spend 1 action to discard it and draw a token from the Treasure bag."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Informazioni",
                                                        EN:"The Information"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Il segnalino Obiettivo sul lato grigio rappresenta {label.info@0} che gli Eroi stanno cercando. Qualsiasi Eroe nella sua Zona pu&ograve; spendere 1 azione per raccoglierlo. Pu&ograve; essere scambiato come un oggetto.",
                                                        EN:"The Objective token on the gray side represents {label.info@0} the Heroes seek. Any Hero in its Zone can spend 1 action to pick it up. It can be exchanged as an item."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Sentinella",
                                                        EN:"The Sentinel"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta contrassegnata da un contorno rosso, dopo avendo risolto la carta Porta corrispondente, generare un Mostro Errante di livello 5 nella Zona contrassegnata dal segnalino Obiettivo grigio.",
                                                        EN:"When a Hero opens the door with the red outline, after resolving the corresponding Door card, spawn a level 5 Roaming Monster in the Zone marked with the gray Objective token."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT: "Quando un Eroe apre la porta contrassegnata da un contorno rosso, dopo avendo risolto la carta Porta corrispondente, generare {label.campaignBoss@0} nella Zona contrassegnata dal segnalino Obiettivo grigio.",
                                                        EN: "When a Hero opens the door with the red outline, after resolving the corresponding Door card, spawn {label.campaignBoss@0} in the Zone marked by the gray Objective token."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se l'Eroe che possiede il segnalino Obiettivo sul lato grigio termina il suo turno nella zona del segnalino Obiettivo sul lato colorato e la sua stanza non contiene alcun nemico {label.questVictory@0}.",
                                                        EN:"If the Hero with the Objective token on the gray side ends his turn in the zone of the Objective token on the colored side and its room does not contain any enemies {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToPrison-short" ],
                                            gameMode: [ "collectBossAndExit" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
                                        }
                                    ],
                                    campaign:{
                                        sideQuests:[
                                            { tags:[
                                                [ "visitAllRooms", "collectAllItems" ]
                                            ] }
                                        ]
                                    },
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Risolvere la questione una volta per tutte sconfiggendo {boss.bossBadName@0}",
                                                    EN:"Solve the issue once and for all by defeating {boss.bossBadName@0}"
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
                        },{
                            forMaps:[2],
                            type:"nestBossStealExit",
                            objective:{
                                EN:"Find nests, eliminate spawned strong enemies, unlock the boss room, collect a token and bring it to the exit to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Ravaged Mountains \"En Marchant Sur Des &OElig;ufs\"",
                                EN:"Inspired by the Ravaged Mountains quest \"En Marchant Sur Des &OElig;ufs\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                info:[
                                                    {
                                                        IT:[ "Le informazioni recuperate" ],
                                                        EN:[ "The recovered information", "is" ]
                                                    },{
                                                        IT:[ "Le pagine del libro trafugato" ],
                                                        EN:[ "The pages of the stolen book", "are" ]
                                                    },{
                                                        IT:[ "Le scritture sulla tavoletta" ],
                                                        EN:[ "The writings on the tablet", "are" ]
                                                    }
                                                ],
                                                locked:[
                                                    {
                                                        IT:[ "sono magicamente protette" ],
                                                        EN:[ "{label.info@1} magically protected" ]
                                                    },{
                                                        IT:[ "sono illeggibili" ],
                                                        EN:[ "{label.info@1} illegible" ]
                                                    },{
                                                        IT:[ "sembrano non avere senso" ],
                                                        EN:[ "{label.info@1} unreadable" ]
                                                    }
                                                ],
                                               cantRead:[
                                                    {
                                                        IT:[ "ed &egrave; impossibile per loro decifrarle", "grazie {label.artifact@1} potranno tradurle" ],
                                                        EN:[ "and they can't decipher them", "thanks {label.artifact@1} they could translate them" ]
                                                    },{
                                                        IT:[ "e gli Eroi non riescono a leggerle", "grazie {label.artifact@1} potranno decifrarle" ],
                                                        EN:[ "and the Heroes cannot read them", "thanks {label.artifact@1} they could decipher them" ]
                                                    },{
                                                        IT:[ "e non c'&egrave; modo di comprenderle", "grazie {label.artifact@1} potranno decodificarle" ],
                                                        EN:[ "and there is no way to understand them", "thanks {label.artifact@1} they could decode them" ]
                                                    }
                                                ],
                                                artifact:[
                                                    {
                                                        IT:[ "la Lente della Distorsione", "alla quale" ],
                                                        EN:[ "the Lens of Distortion", "to which" ]
                                                    },{
                                                        IT:[ "il Cifrario Arcano", "al quale" ],
                                                        EN:[ "the Arcane Cipher", "to which" ]
                                                    },{
                                                        IT:[ "l'Occhio Sapiente", "al quale" ],
                                                        EN:[ "the Wise Eye", "to which" ]
                                                    }
                                                ],
                                                informer:[
                                                    {
                                                        IT:[ "La sentinella sconfitta" ],
                                                        EN:[ "The defeated sentinel" ]
                                                    },{
                                                        IT:[ "Il sacerdote del tempio" ],
                                                        EN:[ "The temple priest" ]
                                                    },{
                                                        IT:[ "Il mago della Alta Torre" ],
                                                        EN:[ "The High Tower wizard" ]
                                                    }
                                                ],
                                                information:[
                                                    {
                                                        IT:[ "ha parlato loro dell'esistenza di un oggetto magico", "l'oggetto magico" ],
                                                        EN:[ "told them about the existence of a magical object", "the magical object" ]
                                                    },{
                                                        IT:[ "ha rivelato loro l'esistenza di un antico artefatto", "l'antico artefatto" ],
                                                        EN:[ "revealed to them the existence of an ancient artifact", "the ancient artifact" ]
                                                    },{
                                                        IT:[ "ha mormorato qualcosa circa un oggetto perduto", "l'oggetto perduto" ],
                                                        EN:[ "mumbled something about a lost object", "the lost object" ]
                                                    }
                                                ],
                                                learn:[
                                                    {
                                                        IT:[ "e conoscere meglio i punti di forza e di debolezza del nemico" ],
                                                        EN:[ "and learn more about the enemy's strengths and weaknesses" ]
                                                    },{
                                                        IT:[ "e scoprire dove avverr&agrave; il rituale" ],
                                                        EN:[ "and find out where the ritual would take place" ],
                                                    },{
                                                        IT:[ "e rivelare finalmente i piani dell'Oscurit&agrave;" ],
                                                        EN:[ "and finally reveal the plans of the Darkness" ]
                                                    }
                                                ],
                                                safe:[
                                                    {
                                                        IT:[ "Il fatto che sia tenuto al sicuro" ],
                                                        EN:[ "The fact that it is kept safe" ]
                                                    },{
                                                        IT:[ "Il fatto che sia nascosto" ],
                                                        EN:[ "The fact that it is hidden" ]
                                                    },{
                                                        IT:[ "Il fatto che sia custodito" ],
                                                        EN:[ "The fact that it is guarded" ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "in incubatore di Oscurit&agrave;" ],
                                                        EN:[ "in a Darkness incubator" ]
                                                    },{
                                                        IT:[ "nella tana del mostro che terrorizza la citt&agrave; da tempo" ],
                                                        EN:[ "in the lair of the monster that terrorizes the city for some time" ]
                                                    },{
                                                        IT:[ "nei pressi del prossimo obiettivo" ],
                                                        EN:[ "near the next objective" ]
                                                    }
                                                ],
                                                opportunity:[
                                                    {
                                                        IT:[ "permetterebbe agli Eroi di prendere due piccioni con una fava..." ],
                                                        EN:[ "would allow the Heroes to kill two birds with one stone..." ]
                                                    },{
                                                        IT:[ "non fa perdere agli Eroi altro tempo prezioso..." ],
                                                        EN:[ "does not waste the Heroes any more precious time..." ]
                                                    },{
                                                        IT:[ "mette subito gli Eroi in marcia..." ],
                                                        EN:[ "immediately gets the Heroes on the move..." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a rimuovere tutti i nidi", "rimuovendo {label.collectOptionalItems@3} nidi", "{tokensCount.corruption}" ],
                                                        EN:[ "to remove all the nests", "removing {label.collectOptionalItems@3} nests", "{tokensCount.corruption}"]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.artifact:capital@0}"
                                        },{
                                            EN:"{label.info:capital@0}"
                                        },{
                                            EN:"{label.information:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.info@0} {label.locked@0} {label.cantRead@0}. {label.informer@0} {label.information@0}, {label.artifact@0}, {label.cantRead@1} {label.learn@0}. {label.safe@0} {label.place@0} {label.opportunity@0}"
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
                                                        IT:"I Mostri",
                                                        EN:"The Monsters"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Eliminare i Mostri Erranti che escono da {label.collectOptionalItems@2} nidi",
                                                        EN:"Eliminate the Roaming Monsters that come out of {label.collectOptionalItems@2} nests"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"I Nidi",
                                                        EN:"The Nests"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Distruggere {label.collectOptionalItems@2} nidi",
                                                        EN:"Destroy {label.collectOptionalItems@2} nests"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.artifact@0} e raggiungere l'uscita",
                                                        EN:"Collect {label.artifact@0} and reach the exit"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Stanza Bloccata",
                                                        EN:"The Locked Room"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Gli Eroi non possono aprire la porta con il contorno rosso. I Nemici possono muoversi liberamente attraverso questa porta.",
                                                        EN:"Heroes cannot open the door with the red outline. Enemies can move freely through this door."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Nidi",
                                                        EN:"The Nests"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta di una stanza contenente un segnalino Corruzione {symbol.corruptionToken} non non pescare una carta Porta. Generare un Mostro Errante di un livello pi&ugrave; alto rispetto al livello del Dungeon nella zona del segnalino Corruzione {symbol.corruptionToken}. Un Eroe pu&ograve; spendere 1 PM per rimuovere il segnalino Corruzione e ogni Eroe guadagna 3 PE.",
                                                        EN:"When a Hero opens the door of a room containing a Corruption token {symbol.corruptionToken}, it doesn't draw a Door card. Spawn a Roaming Monster 1 level higher than the Dungeon level on the Corruption token {symbol.corruptionToken}  zone. A Hero can spend 1 MP to remove the Corruption token and each Hero gains 3 XP."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta di una stanza contenente un segnalino Corruzione {symbol.corruptionToken} non non pescare una carta Porta. Generare un Mostro Errante di un livello pi&ugrave; alto rispetto al livello del Dungeon nella zona del segnalino Corruzione {symbol.corruptionToken}. Un Eroe pu&ograve; spendere 1 PM per rimuovere il segnalino Corruzione.",
                                                        EN:"When a Hero opens the door of a room containing a Corruption token {symbol.corruptionToken}, it doesn't draw a Door card. Spawn a Roaming Monster 1 level higher than the Dungeon level on the Corruption token {symbol.corruptionToken} zone. A Hero can spend 1 MP to remove the Corruption token."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Liberare il Passaggio",
                                                        EN:"Clear the Passage"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta rimossi {label.collectOptionalItems@2} nidi, la porta con il contorno rosso pu&ograve; essere aperta normalmente. Generare un Mostro Errante di un livello pi&ugrave; alto rispetto al livello del Dungeon nella zona del segnalino Obiettivo sul lato grigio.",
                                                        EN:"Once {label.collectOptionalItems@2} nests have been removed, the door with the red outline can be opened normally. Spawn a Roaming Monster 1 level higher than the Dungeon level in the Objective token on the gray side Zone."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Protettore",
                                                        EN:"The Defender"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT: "Quando un Eroe apre la porta con il contorno rosso, non pescare una carta Porta ma generare un Mostro Errante di livello 5 nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN: "When a Hero opens the door with the red outline, do not draw a Door card but spawn a Level 5 Roaming Monster in the Objective marker on the gray side Zone."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT: "Quando un Eroe apre la porta con il contorno rosso, non pescare una carta Porta ma generare {label.campaignBoss@0} nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN: "When a Hero opens the door with the red outline, do not draw a Door card but spawn {label.campaignBoss@0} in the Objective marker on the gray side Zone."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.artifact:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe pu&ograve; spendere 1 PM per raccogliere il segnalino Obiettivo sul lato grigio come oggetto standard. Pu&ograve; essere scambiato normalmente con un altro Eroe.",
                                                        EN:"A Hero can spend 1 MP to pick up the Objective token on the gray side as a standard item. It can be exchanged normally with another Hero."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che il segnalino Obiettivo sul lato grigio &egrave; stato raccolto, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo sul lato colorato per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, {label.questVictory@0}.",
                                                        EN:"After the Objective token on the gray side has been picked up, any Hero can spend 1 MP in the Objective token on the colored side Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "towerDefense" ],
                                            gameMode: [ "nestBossStealExit" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "none" ],
                                            bridges:[ "none" ],
                                            corridors: [ "nestBossStealExit" ]
                                        }
                                    ],
                                    campaign:{
                                        sideQuests:[
                                            { tags:[
                                                [ "visitAllRooms", "collectOptionalItemsCorruption" ]
                                            ] }
                                        ]
                                    },
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Risolvere la questione una volta per tutte sconfiggendo {boss.bossBadName@0}",
                                                    EN:"Solve the issue once and for all by defeating {boss.bossBadName@0}"
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
                        },{
                            forMaps:[2],
                            type:"eliminateBuffBoss",
                            objective:{
                                EN:"Eliminate enemy buffs and beat the boss to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Ravaged Mountains \"Les Piliers Magiques\"",
                                EN:"Inspired by the Ravaged Mountains quest \"Les Piliers Magiques\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                enemy:[
                                                    {
                                                        IT:[ "Le forze dell'Oscurit&agrave;", "minacciose" ],
                                                        EN:[ "The forces of Darkness", "threatening" ]
                                                    },{
                                                        IT:[ "Le truppe nemiche" , "minacciose"],
                                                        EN:[ "The enemy troops" , "threatening"]
                                                    },{
                                                        IT:[ "Gli invasori", "minacciosi" ],
                                                        EN:[ "The invaders", "threatening" ]
                                                    }
                                                ],
                                                commander:[
                                                    {
                                                        IT:[ "il loro Comandante", "il Comandante", "abbatterlo" ],
                                                        EN:[ "their Commander", "the Commander", "taking him down" ]
                                                    },{
                                                        IT:[ "l'oscuro Assassino", "l'Assassino", "abbatterlo" ],
                                                        EN:[ "the dark Assassin", "the Assassin", "taking him down" ]
                                                    },{
                                                        IT:[ "il loro brutale Guerriero", "il Guerriero", "abbatterlo" ],
                                                        EN:[ "their brutal Warrior", "the Warrior", "taking him down" ]
                                                    }
                                                ],
                                                menace:[
                                                    {
                                                        IT:[ "stanno diventando sempre pi&ugrave; {label.enemy@1}" ],
                                                        EN:[ "are becoming more and more {label.enemy@1}" ]
                                                    },{
                                                        IT:[ "si stanno espandendo oltre i confini" ],
                                                        EN:[ "are expanding beyond the borders" ]
                                                    },{
                                                        IT:[ "sono fuori controllo" ],
                                                        EN:[ "are out of control" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "ma gli Eroi sono riusciti a scovare i loro servitori pi&ugrave; importanti" ],
                                                        EN:[ "but the Heroes managed to track down their most important servants" ]
                                                    },{
                                                        IT:[ "ma gli Eroi hanno scoperto il loro quartier generale" ],
                                                        EN:[ "but the Heroes discovered their headquarters" ]
                                                    },{
                                                        EN:[ "ma gli Eroi sono riusciti ad infiltrarsi tra loro file" ],
                                                        IT:[ "but the Heroes managed to infiltrate their lines" ]
                                                    }
                                                ],
                                                action:[
                                                    {
                                                        IT:[ "Sabotarli &egrave; fondamentale per rallentare i loro piani" ],
                                                        EN:[ "Sabotaging them is essential to slow down their plans" ]
                                                    },{
                                                        IT:[ "Devono cercare di rallentare la loro avanzata a tutti i costi" ],
                                                        EN:[ "They must try to slow down their advance at all costs" ]
                                                    },{
                                                        IT:[ "Possono finalmente colpirli nel loro punto debole" ],
                                                        EN:[ "They can finally strike them in their weak spot" ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "Il loro nascondiglio &egrave; attraversato da potenti correnti magiche..." ],
                                                        EN:[ "Their hideout is crossed by powerful magical flows..." ]
                                                    },{
                                                        IT:[ "Il loro covo &egrave; protetto da un potente incantesimo..." ],
                                                        EN:[ "Their lair is protected by a powerful spell..." ]
                                                    },{
                                                        IT:[ "Una misteriosa forza protegge l'intera area..." ],
                                                        EN:[ "A mysterious force protects the entire area..." ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "ma non c'&egrave; dubbio che {label.commander@0} si trovi nei dintorni!" ],
                                                        EN:[ "but there is no doubt that {label.commander@0} is nearby!" ]
                                                    },{
                                                        IT:[ "e questo vuol dire solo che {label.commander@0} si trova li!" ],
                                                        EN:[ "and that only means that {label.commander@0} is there!" ]
                                                    },{
                                                        IT:[ "di certo {label.commander@0} &egrave; di pattuglia!" ],
                                                        EN:[ "of course {label.commander@0} is on patrol!" ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "{label.commander:capital@2} non sar&agrave; facile" ],
                                                        EN:[ "{label.commander:capital@2} won't be easy" ]
                                                    },{
                                                        IT:[ "{label.commander:capital@2} sar&agrave; dura" ],
                                                        EN:[ "{label.commander:capital@2} won't be hard" ]
                                                    },{
                                                        IT:[ "{label.commander:capital@2} non sar&agrave; una passeggiata" ],
                                                        EN:[ "{label.commander:capital@2} is no walk in the park" ]
                                                    }
                                                ],
                                                advantage:[
                                                    {
                                                        IT:[ "ma infliggerebbe una grave battuta d'arresto ai preparativi del nemico." ],
                                                        EN:[ "but it would seriously set back the enemy's preparations." ]
                                                    },{
                                                        IT:[ "ma non possono tirarsi indietro proprio ora." ],
                                                        EN:[ "but they cannot back down now." ]
                                                    },{
                                                        IT:[ "ma &egrave; il momento di rispondere agli attacchi." ],
                                                        EN:[ "but it is time to respond to the attacks." ]
                                                    }
                                                ],
                                                go:[
                                                    {
                                                        IT:[ "Non c'&egrave; tempo da perdere!" ],
                                                        EN:[ "There is no time to waste!" ]
                                                    },{
                                                        IT:[ "Avanti!" ],
                                                        EN:[ "Forward!" ]
                                                    },{
                                                        IT:[ "Per il Regno!" ],
                                                        EN:[ "For the Kingdom!" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectAllItems:[
                                                    {
                                                        IT:[ "a eliminare tutte le tane", "raccogliendo tutti i segnalini Corruzione {symbol.corruptionToken}" ],
                                                        EN:[ "to eliminate all the nests", "collecting all the Corruption Tokens {symbol.corruptionToken}" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Le Colonne Magiche",
                                            EN:"The Magic Pillars"
                                        },{
                                            EN:"{label.commander:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.enemy@0} {label.menace@0} {label.but@0}. {label.action@0}. {label.place@0} {label.target@0} {label.mission@0} {label.advantage@0} {label.go@0}"
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
                                                        IT:"I Pilastri",
                                                        EN:"The Pillars"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Distruggere i pilastri magici",
                                                        EN:"Destroy the Magic Pillars"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.commander:capital@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.commander@1} e fuggire",
                                                        EN:"Kill {label.commander@1} and escape"
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
                                                        IT:"Generare un Mostro Errante di livello 5 nella Zona del segnalino Tempo {symbol.timeToken} e rimuovere il segnalino. Questo Mostro Errante &egrave; {label.commander@1} e inizier&agrave; ad attivarsi solo una volta aperta la porta con il contorno rosso. Non &egrave; influenzato dagli effetti delle carte Porta.",
                                                        EN:"Spawn a Level 5 Roaming Monster in the Time token Zone {symbol.timeToken} and remove the token. This Roaming Monster is {label.commander@1} and will only start activating once the red-outlined door is opened. It is not affected by the effects of Door cards."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Generare {label.campaignBoss@0} nella Zona del segnalino Tempo {symbol.timeToken}  e rimuovere il segnalino. Questo Mostro Errante &egrave; {label.commander@1} e inizier&agrave; ad attivarsi solo una volta aperta la porta con il contorno rosso. Non &egrave; influenzato dagli effetti delle carte Porta.",
                                                        EN:"Spawn {label.campaignBoss@0} in the Time token Zone {symbol.timeToken} and remove the token. This Roaming Monster is {label.commander@1} and will only start activating once the red-outlined door is opened. It is not affected by the effects of Door Cards."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Aree Magiche",
                                                        EN:"The Magic Zones"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"L'intero Dungeon &egrave; influenzato dalla magia che emana dai pilastri."+
                                                        "<p>Il pilastro situato sulla tessera {tileLabel.second} d&agrave; un bonus di 1 dado giallo {symbol.yellowDie} a tutti i Nemici che usano un'arma corpo corpo {symbol.rangeMelee}.</p>"+
                                                        "<p>Il pilastro situato sulla tessera {tileLabel.third} d&agrave; un bonus di 1 dado giallo {symbol.yellowDie} a tutti i Nemici che usano un'arma a distanza {symbol.rangeRanged}.</p>"+
                                                        "<p>Il pilastro situato sulla tessera {tileLabel.fourth} d&agrave; un bonus di 1 dado giallo {symbol.yellowDie} a tutti i Nemici che usano la magia {symbol.rangeMagic}.</p>"+
                                                        "<p>La magia di ogni pilastro influenza tutte le tessere del Dungeon e non solo quello su cui si trova il pilastro.</p>",
                                                        EN:"The entire Dungeon is affected by the magic emanating from the pillars."+
                                                        "<p>The pillar on the {tileLabel.second} tile gives a bonus of 1 yellow die {symbol.yellowDie} to all Enemies using a melee weapon {symbol.rangeMelee}.</p>"+
                                                        "<p>The pillar on the {tileLabel.third} tile gives a bonus of 1 yellow die {symbol.yellowDie} to all Enemies using a ranged weapon {symbol.rangeRanged}.</p>"+
                                                        "<p>The pillar on the {tileLabel.fourth} tile gives a bonus of 1 yellow die {symbol.yellowDie} to all Enemies that use magic {symbol.rangeMagic}.</p>"+
                                                        "<p>The magic of each pillar affects all tiles in the Dungeon, not just the one the pillar is on.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Eliminare i Pilastri",
                                                        EN:"Eliminate the Pillars"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni pilastro ha 6 PV, non ha difese e pu&ograve; essere attaccato come un nemico. Una volta distrutto, il pilastro viene rimosso dal tabellone di gioco e il suo effetto non si applica pi&ugrave;.",
                                                        EN:"Each pillar has 6 HP, no defenses, and can be attacked like an enemy. Once destroyed, the pillar is removed from the game board and its effect no longer applies."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Tane",
                                                        EN:"The Nests"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe nella Zona di un segnalino Corruzione {symbol.corruptionToken} pu&ograve; spendere 1 azione per scartarlo e guadagnare 5 PE.",
                                                        EN:"A Hero in a Corruption token {symbol.corruptionToken} Zone can spend 1 action to discard it and gain 5 XP."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Un Eroe nella zona di un segnalino Corruzione {symbol.corruptionToken} pu&ograve; spendere 1 azione per scartarlo ed pescare un segnalino dal sacchetto dei Tesori.",
                                                        EN:"A Hero in a Corruption token {symbol.corruptionToken} Zone can spend 1 action to discard it and draw a token from the Treasure bag."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta eliminato {label.commander@1}, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo sul lato colorato per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, {label.questVictory@0}.",
                                                        EN:"Once {label.commander@1} is eliminated, any Hero can spend 1 MP in the Objective marker on the colored side Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path-long" ],
                                            gameMode: [ "eliminateBuffBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "eliminateBuffBoss" ]
                                        }
                                    ],
                                    campaign:{
                                        sideQuests:[
                                            { tags:[
                                                [ "visitAllRooms", "collectAllItems" ]
                                            ] }
                                        ]
                                    },
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Risolvere la questione una volta per tutte sconfiggendo {boss.bossBadName@0}",
                                                    EN:"Solve the issue once and for all by defeating {boss.bossBadName@0}"
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
                        },{
                            forActs:[], // Uses large maps and one-shot level cap.
                            type:"cleanBuffBoss",
                            objective:{
                                EN:"Delivery 4 tokens to 2 destinations, beat the boss, and reach the exit to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Ravaged Mountains \"Les Ge&ocirc;les de Granit\"",
                                EN:"Inspired by the Ravaged Mountains quest \"Les Ge&ocirc;les de Granit\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                prisoners:[
                                                    {
                                                        IT:[ "L'Oscurit&agrave; ha molti nemici" ],
                                                        EN:[ "The Darkness has many enemies" ]
                                                    },{
                                                        IT:[ "In molti si oppongono al Male" ],
                                                        EN:[ "Many oppose Evil" ]
                                                    },{
                                                        IT:[ "Oltre a voi, molti altri Eroi si sono battuti contro l'Oscurit&agrave;" ],
                                                        EN:[ "Besides you, many other Heroes have fought against the Darkness" ]
                                                    }
                                                ],
                                                value:[
                                                    {
                                                        IT:[ "e alcuni valgono pi&ugrave; da vivi che da morti." ],
                                                        EN:[ "and some are worth more alive than dead." ]
                                                    },{
                                                        IT:[ "e alcuni di loro sono imprigionati e tenuti in vita come trofei." ],
                                                        EN:[ "and some of them are imprisoned and kept alive as trophies." ]
                                                    },{
                                                        IT:[ "e alcuni di loro sono stati catturati in attesa di essere giustiziati." ],
                                                        EN:[ "and some of them have been captured awaiting execution." ]
                                                    }
                                                ],
                                                discover:[
                                                    {
                                                        IT:[ "Gli Eroi hanno finalmente scoperto la posizione di una delle prigioni in cui sono tenuti." ],
                                                        EN:[ "The Heroes have finally discovered the location of one of the prisons where they are being held." ]
                                                    },{
                                                        IT:[ "Un informatore ha mostrato agli Eroi dove sono tenuti prigioneri." ],
                                                        EN:[ "An informant has shown the Heroes where the prisoners are." ]
                                                    },{
                                                        IT:[ "Una croce su una mappa costata cara indica una di quelle prigioni." ],
                                                        EN:[ "A cross on a costly map indicates one of those prisons." ]
                                                    }
                                                ],
                                                security:[
                                                    {
                                                        IT:[ "Purtroppo, per assicurarsi che non provino a fuggire, {label.keeper@0}" ],
                                                        EN:[ "Unfortunately, to ensure they don't try to escape, {label.keeper@0}" ]
                                                    },{
                                                        IT:[ "{label.keeper:capital@0} non possono permettersi che fuggano un'altra volta, per cui" ],
                                                        EN:[ "{label.keeper:capital@0} can't afford for them to escape again, so they" ]
                                                    },{
                                                        IT:[ "{label.keeper:capital@1} sono stati puniti per la loro ingenuit&agrave;, per cui stavolta" ],
                                                        EN:[ "{label.keeper:capital@1} have been punished for their naivety, so this time they" ]
                                                    }
                                                ],
                                                transform:[
                                                    {
                                                        IT:[ "hanno trasformato i prigionieri in statue di pietra." ],
                                                        EN:[ "have transformed the prisoners into stone statues." ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "Gli Eroi dovranno spezzare questo incantesimo e liberarli!" ],
                                                        EN:[ "The Heroes must break this spell and free them!" ]
                                                    },{
                                                        IT:[ "Gli Eroi dovranno trovare un modo per liberarli!" ],
                                                        EN:[ "The Heroes must find a way to free them!" ]
                                                    },{
                                                        IT:[ "Gli Eroi devono liberarli a tutti i costi!" ],
                                                        EN:[ "The Heroes must free them at all costs!" ]
                                                    }
                                                ],
                                                guardian:[
                                                    {
                                                        IT:[ "il Guardiano", "questo &egrave;", "eliminato" ],
                                                        EN:[ "the Guardian", "this is", "eliminated" ]
                                                    },{
                                                        IT:[ "la Sentinella", "questa &egrave;", "eliminata" ],
                                                        EN:[ "the Sentinel", "this is", "eliminated" ]
                                                    },{
                                                        IT:[ "la Vedetta", "questa &egrave;", "eliminata" ],
                                                        EN:[ "the Lookout", "this is", "eliminated" ]
                                                    }
                                                ],
                                                keeper:[
                                                    {
                                                        IT:[ "i Carcerieri", "molti Carcerieri" ],
                                                        EN:[ "the Jailers", "many Jailers" ]
                                                    },{
                                                        IT:[ "i Secondini", "molti Secondini" ],
                                                        EN:[ "the Prison Guards", "many Prison Guards" ]
                                                    },{
                                                        IT:[ "i Custodi", "molti Custodi" ],
                                                        EN:[ "the Keepers", "many Keepers" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Il Carcere di Granito",
                                            EN:"The Granite Prison"
                                        },{
                                            EN:"{label.keeper:capital@0}"
                                        },{
                                            EN:"{label.guardian:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.prisoners@0} {label.value@0} {label.discover@0} {label.security@0} {label.transform@0} {label.mission@0}"
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
                                                        IT:"Libera",
                                                        EN:"Free"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Liberare tutti i prigionieri pietrificati",
                                                        EN:"Free all the petrified prisoners"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Elimina",
                                                        EN:"Eliminate"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Eliminare {label.guardian@0} e fuggire",
                                                        EN:"Kill {label.guardian@0} and escape",
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
                                                        IT:"Posiziona 2 segnalini Salute su ciascun segnalino Obiettivo sul lato grigio.",
                                                        EN:"Place 2 Health tokens on each Objective token on the gray side."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Prigionieri",
                                                        EN:"The Prisoners"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ciascun segnalino Tempo {symbol.timeToken} rappresenta un prigioniero pietrificato. Qualsiasi Eroe nella sua Zona pu&ograve; spendere 1 azione per raccoglierlo. Pu&ograve; essere scambiato come un oggetto.",
                                                        EN:"Each Time token {symbol.timeToken} represents a petrified prisoner. Any Hero in its Zone can spend 1 action to pick it up. It can be exchanged like an item."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.keeper:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un Eroe apre una porta che conduce ad una Stanza contenente un segnalino Tempo {symbol.timeToken}, pescare normalmente la carta Porta. Oltre alle indicazioni su questa carta, generare un'Orda del livello attuale del Dungeon nella Zona del segnalino Tempo {symbol.timeToken}, anche per le stanze in cui la carta Porta indica l'assenza di nemici.",
                                                        EN:"When a Hero opens a door that leads to a Room containing a Time token {symbol.timeToken}, draw the Door card normally. In addition to the indications on this card, spawn a Horde of the current Dungeon level in the Time token {symbol.timeToken} Zone, even for rooms where the Door card indicates the absence of enemies."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Spezzare la Maledizione",
                                                        EN:"Break the Curse"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe con almeno un segnalino Tempo {symbol.timeToken} che si trova nella Zona di un segnalino Obiettivo sul lato grigio pu&ograve; spendere 1 azione per spezzare la maledizione di un prigioniero. Per farlo, rimuovere un segnalino Salute da quel segnalino Obiettivo sul lato grigio e scartare 1 segnalino Tempo {symbol.timeToken} dall'Eroe: questo indica che il prigioniero &egrave; stato liberato. Quando un segnalino Obiettivo sul lato grigio non ha pi&ugrave; alcun segnalino Salute viene scartato.",
                                                        EN:"A Hero with at least one Time token {symbol.timeToken} on an Objective token on the gray side Zone can spend 1 action to break one prisoner curse. To do so, remove a Health token from that Objective token on the gray side and discard 1 Time token {symbol.timeToken} from the Hero: this indicates that the prisoner has been freed. When an Objective token on the gray side has no Health tokens left, it is discarded."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Rinforzi",
                                                        EN:"Reinforcements"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta contrassegnata da un contorno rosso, genera 1 Mostro Errante del livello del Dungeon su ciascuno dei segnalini Corruzione {symbol.corruptionToken} e rimuovi i segnalini.",
                                                        EN:"When a Hero opens the door marked with a red outline, spawn 1 Dungeon level Roaming Monster on each Corruption token {symbol.corruptionToken} and remove the tokens."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.guardian:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando il secondo prigioniero viene liberato, generare un Mostro Errante di livello 5 nella Zona del segnalino Obiettivo sul lato colorato: {label.guardian@1} {label.guardian@0}.",
                                                        EN:"When the second prisoner is freed, spawn a level 5 Roaming Monster in the Objective token on the colored side Zone: {label.guardian@1} {label.guardian@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta {label.guardian@2} {label.guardian@0} e salvati tutti i prigionieri, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo sul lato colorato per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, {label.questVictory@0}.",
                                                        EN:"Once {label.guardian@0} is eliminated and all the prisoners are freed, any Hero can spend 1 MP in the Objective marker on the colored side Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "largeMaze" ],
                                            gameMode: [ "cleanBuffBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "cleanBuffBoss" ],
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
                                                    IT:"Risolvere la questione una volta per tutte sconfiggendo {boss.bossBadName@0}",
                                                    EN:"Solve the issue once and for all by defeating {boss.bossBadName@0}"
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
                        }
                    ]
                }
            ]
        }
    ]

});