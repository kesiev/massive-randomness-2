ModManager.modules.push(function(){

    const
        QUESTVICTORY={
            IT:[ "ha inizio lo Scontro con il Boss", "dare inizio allo Scontro con il Boss" ],
            EN:[ "the Boss Fight begins", "begin the Boss Fight" ]
        },
        HELLSCAPEMODE={
            IT:[ " (da MD2: Hellscape)"],
            EN:[ " (from MD2: Hellscape)"]
        },
        ONESHOTMODE={
            IT:[ " (Partita Autoconclusiva)"],
            EN:[ " (One-Shot)"]
        },
        CAMPAIGNMODE={
            IT:[ " (Modalit&agrave; campagna)"],
            EN:[ " (Campaign mode)"]
        },
        WEAKAT=[
            { act:0, map:0 },
            { act:0, map:1 }
        ],
        PLAINAT=[
            { act:0, map:2 },
            { act:1, map:0 }
        ],
        BOSSMODIFIER={
            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe." ],
            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero." ]
        },
        BOSSPHASE2MODIFIER={
            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossPhase2Health} PV per Eroe." ],
            EN:[ " In this fight, {boss.bossName@0} has {boss.bossPhase2Health} HP per Hero." ]
        }
        BOSSAT=[
            [ { act:1, map:1 } ],
            [ { act:1, map:2 } ],
            [ { act:2, map:0 } ],
            [ { act:2, map:1 } ],
            [ { act:2, map:2 } ]
        ],
        SINGLEPHASEBOSSWEAK=[
            { bossHealth:{ EN:-5 } },
            { bossHealth:{ EN:-5 } }
        ],
        DOUBLEPHASEBOSSWEAK=[
            { bossPhase2Health:{ EN:-5 } },
            { bossPhase2Health:{ EN:-5 } }
        ],
        SINGLEPHASEBOSSBONUS=[
            { bossHealth:{ EN:5 } },
            { bossHealth:{ EN:15 } },
            { bossHealth:{ EN:25 } },
            { bossHealth:{ EN:35 } },
            { bossHealth:{ EN:45 } },
        ],
        DOUBLEPHASEBOSSBONUS=[
            { bossHealth:{ EN:5 }, bossPhase2Health:{ EN:5 } },
            { bossHealth:{ EN:5 }, bossPhase2Health:{ EN:10 } },
            { bossHealth:{ EN:10 }, bossPhase2Health:{ EN:15 } },
            { bossHealth:{ EN:10 }, bossPhase2Health:{ EN:25 } },
            { bossHealth:{ EN:15 }, bossPhase2Health:{ EN:30 } },
        ],
        BOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:15 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:25 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:35 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:45 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        WEAKERBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:12 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:22 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:32 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:42 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        STRONGERBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:20 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:30 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:40 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:50 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        BASESINGLEPHASEBOSSCAMPAIGN=[
            {
                at:PLAINAT
            },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:SINGLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[0],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[1],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[2],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[3],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[4],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            }
        ],
        BASEDOUBLEPHASEBOSSCAMPAIGN=[
            { at:PLAINAT },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            }
        ],
        ADVANCEDSINGLEPHASEBOSSCAMPAIGN=[
            {
                at:PLAINAT
            },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:SINGLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[0],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[1],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[2],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[3],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[4],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            }
        ],
        ADVANCEDDOUBLEPHASEBOSSCAMPAIGN=[
            { at:PLAINAT },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            }
        ]

    return [
        {
            id:"boss",
            needs:[ ],
            provides:[ "boss" ],
            label:{
                EN:"Add boss fights."
            },
            content:[
                {
                    type:"bossLabels",
                    data:{
                        bossPreparation:{
                            IT:"Rimuovere tutte le Tessere, inclusi tutti i componenti collocati su di esse. {boss.bossTiles@0}, rimuovere il tracciato Oscurit&agrave; e collocate la plancia Boss {boss.bossDashboardName@0}{boss.bossMode@0} {boss.bossTiles@1}, con l'indicatore Oscurit&agrave; sulla casella pi&ugrave; a sinistra del tracciato Boss.",
                            EN:"Remove all Tiles, including all components placed on them. {boss.bossTiles@0}, remove the Darkness track, and place the {boss.bossDashboardName@0}{boss.bossMode@0} Boss dashboard {boss.bossTiles@1}, with the Darkness indicator on the leftmost space of the Boss track."
                        },
                        bossPhase2Preparation:{
                            IT:"riportare l'indicatore Oscurit&agrave; sulla casella pi&ugrave; a sinistra del tracciato Boss e rimuovere tutte le Ferite dal Boss",
                            EN:"move back the Darkness indicator on the leftmost space of the Boss track and remove all Wounds from the Boss"
                        },
                        bossModifier:{
                            IT:[ "", "" ],
                            EN:[ "", "" ]
                        },
                        bossPhase2Modifier:{
                            IT:[ "", "" ],
                            EN:[ "", "" ]
                        },
                        bossMode:{
                            IT:[ "" ],
                            EN:[ "" ]
                        },
                        heroPreparation:{
                            IT:"Gli Eroi recuperano tutta la Salute e il Mana, riportandoli ai loro valori massimi.",
                            EN:"Heroes recover all Health and Mana, returning them to their maximum values."
                        },
                        bossSideQuestValidation:{
                            IT:"<p>Verificare ora se la condizione della Missione Secondaria &egrave; stata verificata. Se si, la ricompensa della missione verr&agrave; ottenuta in caso di vittoria.</p>",
                            EN:"<p>Check now if the Side Quest condition has been met. If so, the mission reward will be obtained in case of victory.</p>",
                        },
                        bossChallengeValidation:{
                            IT:"<p>Se avete rispettato la regola della Sfida del Vecchio Rosso fino a questo punto, la ricompensa della sfida verr&agrave; ottenuta in caso di vittoria. Non &egrave; pi&ugrave; necessario rispettarla.</p>",
                            EN:"<p>If you have followed the Old Red Challenge rule up to this point, the challenge reward will be obtained if case of victory. It is no longer necessary to follow it.</p>"
                        },
                        bossMichaelPreparation:{
                            IT:[
                                "<p>Questo Scontro con il Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>La Liberazione dell'Arcangelo</b> nel manuale di Massive Darkness 2.</p>"
                            ],
                            EN:[
                                "<p>This Boss Fight follows the rules described in the Boss Fight section of the <b>Releasing Michael</b> quest in the Massive Darkness 2 rulebook.</p>"
                            ]
                        },
                        bossReaperPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Le Chiavi delle Anime</b> nel manuale di Massive Darkness 2.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Soul Keys</b> quest in the Massive Darkness 2 rulebook.</p>"
                            ]
                        },
                        bossBaalberithPreparation:{
                            IT:[
                                "<p>Questo Boss segue la preparazione e le regole descritte nella sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall. Posizionate 40 segnalini Salute invece di 70 segnalini Salute nella Zona del segnalino Obiettivo.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the preparation and the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook. Place 40 Health instead of 70 Health tokens in the Objective token Zone.</p>"
                            ]
                        },
                        bossBaaalberithPlainMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 1 {symbol.blackDie} e attacca con 2 {symbol.yellowDie} 1 {symbol.orangeDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 1 {symbol.blackDie}, and it attacks with 2 {symbol.yellowDie} 1 {symbol.orangeDie} 1 {symbol.blackDie}"
                            ]
                        },
                        bossBaalberithEnragedPreparation:{
                            IT:[
                                "<p>Questo Boss segue la preparazione e le regole descritte nella sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall. Generare il Mostro Errante Uriel sul portale dei Mostri Erranti e posizionate 40 segnalini Salute invece di 70 segnalini Salute nella Zona del segnalino Obiettivo.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the preparation and the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook. Spawn the Roaming Monster Uriel in the Roaming Monster Portal and place 40 Health instead of 70 Health tokens in the Objective token Zone.</p>"
                            ]
                        },
                        bossBaaalberithEnragedPlainMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 2 {symbol.blackDie} e attacca con 2 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 2 {symbol.blackDie}, and it attacks with 2 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.blackDie}"
                            ]
                        },
                        bossAbyssalDemonPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Cuore di Tenebra</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Heart of Darkness</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ]
                        },
                        bossAbyssalDemonOneShotMod:{
                            IT:[
                                "prelevare le carte Mostro Errante da far assimilare all'Emissario Oscuro dal mazzo di 2 ranghi al di sopra dell'attuale Livello del Dungeon o dal mazzo di Livello 5 se non disponibile"
                            ],
                            EN:[
                                "take the Roaming Monster cards to be assimilated by the Abyssal Demon from the deck 2 ranks above the current Dungeon Level or from the Level 5 deck if unavailable"
                            ]
                        },
                        bossAbyssalDemonCampaignMod:{
                            IT:[
                                "prelevare le carte Mostro Errante da far assimilare all'Emissario Oscuro dal mazzo di 2 ranghi al di sopra dell'attuale Livello del Dungeon o dal mazzo di Livello 10 se non disponibile"
                            ],
                            EN:[
                                "take the Roaming Monster cards to be assimilated by the Abyssal Demon from the deck 2 ranks above the current Dungeon Level or from the Level 10 deck if unavailable"
                            ]
                        },
                        heroHellephantPreparation:{
                            IT:"Gli Eroi recuperano tutta la Salute fino al valore massimo ma <b>scartano tutto il Mana</b>.",
                            EN:"Heroes recover all Health returning to its maximum value but <b>discard all Mana</b>."
                        },
                        bossHellephantPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>La Desolazione dell'Hellephant</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Desolation of the Hellephant</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ]
                        },
                        bossHellephantHardMods:{
                            IT:[
                                "si difende con 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 1 {symbol.yellowDie} 3 {symbol.orangeDie} 2 {symbol.redDie} 2 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 1 {symbol.yellowDie} 3 {symbol.orangeDie} 2 {symbol.redDie} 2 {symbol.blackDie}"
                            ]
                        },
                        bossCyclopsDuoPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Doppio Problema</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>Double Trouble</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ]
                        },
                        bossCyclopsDuoHardMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 4 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 4 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ]
                        },
                    }
                }
            ]
        },
        {
            id:"boss",
            needs:[ "md2-hellscape" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Hellscape boss fights."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:BOSSLEVELS,
                            campaign:BASESINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "michael" ],
                            title:{
                                IT:"Scontro con il Boss: Arcangelo Michele",
                                EN:"Boss Fight: Archangel Michael",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Arcangelo corrotto" ],
                                        EN:[ "the corrupted Archangel"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ]
                                },
                                bossName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, l'Arcangelo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Archangel, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:BASEDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "michael" ],
                            title:{
                                IT:"Scontro con il Boss: Arcangelo Michele Infuriato",
                                EN:"Boss Fight: Enraged Archangel Michael",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Arcangelo corrotto" ],
                                        EN:[ "the corrupted Archangel"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ]
                                },
                                bossName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere l'Arcangelo, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, l'Arcangelo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Archangel, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Archangel a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        },{
                            levels:BOSSLEVELS,
                            campaign:BASESINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "reaper" ],
                            title:{
                                IT:"Scontro con il Boss: Il Mietitore",
                                EN:"Boss Fight: The Reaper",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Il Mietitore" ],
                                        EN:[ "The Reaper"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8B</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8B di Hellscape", "accanto alla Tessera appena posizionata" ],
                                    EN:[ "Place the Hellscape Tile [A]8B", "next to the just placed tile" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ]
                                },
                                bossName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Il Mietitore {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>If the Heroes manage to defeat The Reaper, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:BASEDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "reaper" ],
                            title:{
                                IT:"Scontro con il Boss: Il Mietitore Infuriato",
                                EN:"Boss Fight: The Enraged Reaper",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Il Mietitore" ],
                                        EN:[ "The Reaper"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8B</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8B di Hellscape", "accanto alla Tessera appena posizionata" ],
                                    EN:[ "Place the Hellscape Tile [A]8B", "next to the just placed tile" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ]
                                },
                                bossName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere Il Mietitore, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, Il Mietitore {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Reaper, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Reaper a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        }
                    ]
                }
            ]
        },{
            id:"boss",
            needs:[ "md2-heavenfall" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Heavenfall boss fights."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:ADVANCEDSINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "baalberith" ],
                            title:{
                                IT:"Scontro con il Boss: Baalberith Alpha",
                                EN:"Boss Fight: Baalberith Alpha",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                },
                                bossMode:{
                                    IT:[ " (Lato Iniziale)" ],
                                    EN:[ " (Initial Side)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>Se gli Eroi riescono a infliggere abbastanza Ferite da uccidere, Baalberith <b>non viene girato sul lato Infuriato</b>, {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>If the Heroes deal enough Wounds to kill Baalberith <b>it's not flipped on the Enraged side</b>: {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        },{
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            tags:[ "baalberith" ],
                            campaign:ADVANCEDSINGLEPHASEBOSSCAMPAIGN,
                            title:{
                                IT:"Scontro con il Boss: Baalberith Infuriato",
                                EN:"Boss Fight: Enraged Baalberith",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                },
                                bossMode:{
                                    IT:[ " (Lato Infuriato)" ],
                                    EN:[ " (Enraged Side)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithEnragedPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Baalberith {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithEnragedPreparation@0}"+
                                    "<p>If the Heroes manage to defeat Baalberith, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:10 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ]
                                        },
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossPhase2Health} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossPhase2Health} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ]
                                        },
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossPhase2Health} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossPhase2Health} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:ADVANCEDDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "baalberith" ],
                            title:{
                                IT:"Scontro con il Boss: Baalberith",
                                EN:"Boss Fight: Baalberith",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                },
                                bossMode:{
                                    IT:[ " (Lato Iniziale)" ],
                                    EN:[ " (Initial Side)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>Se gli Eroi riescono a infliggere abbastanza Ferite da uccidere, Baalberith viene girato sul lato Infuriato secondo le regole della sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Baalberith {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>If the Heroes deal enough Wounds to kill Baalberith it is flipped on the Enraged side following the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat Baalberith, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack", "campaign-upgradepack-cyclopsduo" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack Cyclops Duo boss fight."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:WEAKERBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "cyclopsduo" ],
                            title:{
                                IT:"Scontro con il Boss: Duo di Ciclopi",
                                EN:"Boss Fight: Cyclops Duo",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "il Duo di Ciclopi" ],
                                        EN:[ "the Cyclops Duo"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD1)</i> <b>2V</b> e <b>4V</b>.",
                                EN:"Keep aside: <i>(from MD1)</i> <b>2V</b> and <b>4V</b>."
                            },
                            labels:{

                                IT:[
                                    "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Doppio Problema</b> del manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                                ],
                                EN:[
                                    "<p>This Boss follows the rules described in the Boss Fight section of the <b>Double Trouble</b> quest of the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                                ],
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 2V e 4V di Massive Darkness 1 ed i segnalini su di esse seguendo le indicazioni della missione <b>Doppio Problema</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 1 Tiles 2V and 4V and the tokens on them following the instructions in the <b>Double Trouble</b> mission of the Massive Darkness 2: Upgrade Pack manual", "next to the just placed tiles" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Duo di Ciclopi" ],
                                    EN:[ "Cyclops Duo" ]
                                },
                                bossName:{
                                    IT:[ "il Duo di Ciclopi" ],
                                    EN:[ "the Cyclops Duo" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCyclopsDuoPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, il duo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCyclopsDuoPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the duo, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack", "campaign-upgradepack-hellephant" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack Hellephant boss fight."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:STRONGERBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "hellephant" ],
                            title:{
                                IT:"Scontro con il Boss: Hellephant",
                                EN:"Boss Fight: Hellephant",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Hellephant" ],
                                        EN:[ "the Hellephant"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ]
                                },
                                bossName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, l'Hellephant {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Hellephant, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        },
                        {
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:20 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:20 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "hellephant" ],
                            title:{
                                IT:"Scontro con il Boss: Hellephant Infuriato",
                                EN:"Boss Fight: Enraged Hellephant",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Hellephant" ],
                                        EN:[ "the Hellephant"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ]
                                },
                                bossName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere l'Hellephant, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, l'Hellephant {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Hellephant, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Hellephant a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack MD1 boss fights."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        
                        {
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:[
                                {
                                    at:PLAINAT,
                                    mods:{
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "abyssaldemon" ],
                            title:{
                                IT:"Scontro con il Boss: Emissario Oscuro",
                                EN:"Boss Fight: Abyssal Demon",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Emissario Oscuro" ],
                                        EN:[ "the Abyssal Demon"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ]
                                },
                                bossMode:ONESHOTMODE,
                                bossDashboardName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ]
                                },
                                bossName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>Se gli Eroi riescono a scacciarlo, l'Emissario Oscuro {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        },
                        {
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        },
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        },
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:[
                                {
                                    at:PLAINAT,
                                    mods:{
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSWEAK[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossName@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossName@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                }
                            ],
                            tags:[ "abyssaldemon" ],
                            title:{
                                IT:"Scontro con il Boss: Emissario Oscuro Infuriato",
                                EN:"Boss Fight: Enraged Abyssal Demon",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Emissario Oscuro" ],
                                        EN:[ "the Abyssal Demon"]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ]
                                },
                                bossMode:ONESHOTMODE,
                                bossDashboardName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ]
                                },
                                bossName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>Se gli Eroi riescono a scacciare l'Emissario Oscuro, resister&agrave; al Portale: {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a scacciarlo una seconda volta, l'Emissario Oscuro {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon, it will resist the Portal: {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>"
                            }
                        }
                    ]
                }
            ]
        }
    ];

});