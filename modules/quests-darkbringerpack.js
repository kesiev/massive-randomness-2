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
            id:"quests-darkbringerpack",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-darkbringerpack", "untranslated-fr" ],
            label:{
                 EN:"MD2: Darkbringer Pack inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forMaps:[2],
                            type:"poisonousEnemies",
                            objective:{
                                EN:"Collect tokens to make the boss vulnerable and beat it to win."
                            },
                            by:{
                                IT:"Ispirato all'avventura di MD2 Darkbringer Pack \"The Scorpion King\"",
                                EN:"Inspired by the MD2 Darkbringer Pack quest \"The Scorpion King\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                guardian:[
                                                    {
                                                        IT:[ "il Guardiano", "dal Guardiano", "&egrave; stato corrotto", "affrontarlo", "fermarlo", "combatterlo" ],
                                                        EN:[ "the Guardian", "by the Guardian", "has been corrupted", "face it", "stop it", "fighting it", "facing it" ]
                                                    },{
                                                        IT:[ "la Sentinella", "dalla Sentinella", "&egrave; stata corrotta", "affrontarla", "fermarla", "combatterla" ],
                                                        EN:[ "the Sentinel", "by the Sentinel", "has been corrupted", "face it", "stop it", "fighting it", "facing it" ]
                                                    },{
                                                        IT:[ "l'Oscuro", "dall'Oscuro", "&egrave; stato corrotto", "affrontarlo", "fermarlo", "combatterlo" ],
                                                        EN:[ "the Dark One", "by the Dark One", "has been corrupted", "face it", "stop it", "fighting it", "facing it" ]
                                                    }
                                                ],
                                                corruption:[
                                                    {
                                                        IT:[ "{label.guardian@2} oltre oltre ogni limite dagli" ],
                                                        EN:[ "{label.guardian@2} beyond beyond all limits by the" ]
                                                    },{
                                                        IT:[ "non ha resistito al controllo degli" ],
                                                        EN:[ "has not resisted the control of the" ]
                                                    },{
                                                        IT:[ "&egrave; sotto il controllo degli" ],
                                                        EN:[ "is under the control of the" ]
                                                    }
                                                ],
                                                by:[
                                                    {
                                                        IT:[ "Inferi" ],
                                                        EN:[ "Underworld" ]
                                                    },{
                                                        IT:[ "Abissi" ],
                                                        EN:[ "Deep" ]
                                                    },{
                                                        IT:[ "Arcani" ],
                                                        EN:[ "Arcane" ]
                                                    }
                                                ],
                                                then:[
                                                    {
                                                        IT:[ "e ha cominciato scatenarsi per tutto il Regno" ],
                                                        EN:[ "and it has begun to rage across the Kingdom" ]
                                                    },{
                                                        IT:[ "e la sua ira si sta abbattendo sull'intero Regno" ],
                                                        EN:[ "and its wrath is falling upon the entire Kingdom" ]
                                                    },{
                                                        IT:[ "e sta colpendo senza piet&agrave; ogni regione del Regno" ],
                                                        EN:[ "and it is mercilessly striking every region of the Kingdom" ]
                                                    }
                                                ],
                                                unstoppable:[
                                                    {
                                                        IT:[ "E' diventata una macchina inarrestabile..." ],
                                                        EN:[ "It has become an unstoppable machine..." ]
                                                    },{
                                                        IT:[ "Sembra non esserci alcun modo per {label.guardian@4}, ma forse..." ],
                                                        EN:[ "There seems to be no way to {label.guardian@4}, but maybe..." ]
                                                    },{
                                                        IT:[ "Nessuno ha il coraggio di {label.guardian@3}. Ma gli Eroi non possono tirarsi indietro..." ],
                                                        EN:[ "No one is brave enough to {label.guardian@3}. But the Heroes cannot back down..." ]
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        IT:[ "{label.guardian:capital@5} nella sua stessa tana", "Nella Sua Stessa Tana" ],
                                                        EN:[ "{label.guardian:capital@5} in his own lair", "Into the Lair" ]
                                                    },{
                                                        IT:[ "{label.guardian:capital@3} nel suo stesso nascondiglio", "Nel Suo Stesso Nascondiglio" ],
                                                        EN:[ "{label.guardian:capital@6} in his own hideout", "Into the Hideout" ]
                                                    },{
                                                        IT:[ "Un attacco diretto", "Un attacco diretto" ],
                                                        EN:[ "A direct attack", "A direct attack" ]
                                                    }
                                                ],
                                                effect:[
                                                    {
                                                        IT:[ "&egrave; l'unico modo per porre fine al suo dominio crudele" ],
                                                        EN:[ "is the only way to end his cruel rule" ]
                                                    },{
                                                        IT:[ "&egrave; l'unico modo per mettere la parola fine all'influsso mortale" ],
                                                        EN:[ "is the only way to put an end to the deadly influence" ]
                                                    },{
                                                        IT:[ "&egrave; l'unica soluzione. Gli Eroi devono arginare la mal&igrave;a" ],
                                                        EN:[ "is the only solution. The Heroes must stem the evil" ]
                                                    }
                                                ],
                                                effect2:[
                                                    {
                                                        IT:[ "che sta cominciando a corrompere le terre circostanti." ],
                                                        EN:[ "that is beginning to corrupt the surrounding lands." ]
                                                    },{
                                                        IT:[ "che sta avvelenando giorno dopo giorno i cittadini." ],
                                                        EN:[ "that is poisoning the citizens day by day." ]
                                                    },{
                                                        IT:[ "che sta flagellando la regione da fin troppo tempo." ],
                                                        EN:[ "that has been plaguing the region for far too long." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a eliminare tutte le Orde Corrotte", "eliminando {label.collectOptionalItems@3} Orde Corrotte", "{tokensCount.corruption}" ],
                                                        EN:[ "to eliminate all the Corrupted Mobs", "eliminating {label.collectOptionalItems@3} Corrupted Mobs", "{tokensCount.corruption}"]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.guardian:capital@0}"
                                        },{
                                            EN:"The {label.by:capital@0} Influence",
                                            IT:"L'Influenza Degli {label.by:capital@0}",
                                        },{
                                            EN:"{label.plan:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.guardian:capital@0} {label.corruption@0} {label.by@0} {label.then@0}. {label.unstoppable@0} {label.plan@0} {label.effect@0} {label.effect2@0}"
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
                                                        IT:"Porre Fine alla Minaccia Corrotta",
                                                        EN:"End the Corrupted Threat"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Elimina {label.collectOptionalItems@2} Orde Corrotte",
                                                        EN:"Eliminate {label.collectOptionalItems@2} Corrupted Mobs",
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.guardian@0}",
                                                        EN:"Defeat {label.guardian@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Elimina {label.guardian@0}",
                                                        EN:"Eliminate {label.guardian@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Orde Corrotte",
                                                        EN:"The Corrupted Mobs"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:
                                                            "I segnalini Corruzione {symbol.corruptionToken} nelle Stanze rappresentano {label.collectOptionalItems@2} Orde che sono state corrotte {label.guardian@1}. Quando un Eroe rivela una Stanza contenente un segnalino Corruzione {symbol.corruptionToken}, dopo aver risolto la carta Porta, genera un'Orda nella Zona del segnalino Corruzione {symbol.corruptionToken} e posiziona quel segnalino sulla carta dell'Orda."+
                                                            "<p>Un'Orda con un segnalino Corruzione {symbol.corruptionToken} &egrave; un'Orda Corrotta. Possiede la seguente abilit&agrave; in aggiunta a qualsiasi altra: <span class='phase'>Combattimento</span>: +1{symbol.scratch}</p>"+
                                                            "<p>Quando un'Orda Corrotta viene eliminata, ogni eroe guadagna 8 PE al posto dei soliti 2 PE.</p>",
                                                        EN:
                                                            "Corruption tokens {symbol.corruptionToken} in Rooms represent {label.collectOptionalItems@2} Mobs that have been corrupted {label.guardian@1}. When a Hero reveals a Room containing a Corruption token {symbol.corruptionToken}, after resolving the Door card, spawn a Mob in the Corruption token {symbol.corruptionToken} Zone and place that token on the Mob card."+
                                                            "<p>A Mob with a Corruption token {symbol.corruptionToken} is a Corrupted Mob. It has the following ability in addition to any others: <span class='phase'>Combat</span>: +1{symbol.scratch}</p>"+
                                                            "<p>When a Corrupted Mob is eliminated, each Hero gains 8 XP instead of the usual 2 XP.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:
                                                            "I segnalini Corruzione {symbol.corruptionToken} nelle Stanze rappresentano {label.collectOptionalItems@2} Orde che sono state corrotte {label.guardian@1}. Quando un Eroe rivela una Stanza contenente un segnalino Corruzione {symbol.corruptionToken}, dopo aver risolto la carta Porta, genera un'Orda nella Zona del segnalino Corruzione {symbol.corruptionToken} e posiziona quel segnalino sulla carta dell'Orda."+
                                                            "<p>Un'Orda con un segnalino Corruzione {symbol.corruptionToken} &egrave; un'Orda Corrotta. Possiede la seguente abilit&agrave; in aggiunta a qualsiasi altra: <span class='phase'>Combattimento</span>: +1{symbol.scratch}</p>",
                                                        EN:
                                                            "Corruption tokens {symbol.corruptionToken} in Rooms represent {label.collectOptionalItems@2} Mobs that have been corrupted {label.guardian@1}. When a Hero reveals a Room containing a Corruption token {symbol.corruptionToken}, after resolving the Door card, spawn a Mob in the Zone of the Corruption token {symbol.corruptionToken} and place that token on the Mob card."+
                                                            "<p>A Mob with a Corruption token {symbol.corruptionToken} is a Corrupted Mob. It has the following ability in addition to any others: <span class='phase'>Combat</span>: +1{symbol.scratch}</p>"
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
                                                        IT:"La porta contrassegnata da un contorno rosso pu&ograve; essere aperta solo dopo aver eliminato {label.collectOptionalItems@2} Orde Corrotte. Non risolvere la carta Porta quando viene aperta, generare invece un Mostro Errante di livello 5 nella Zona contrassegnata dal segnalino Obiettivo grigio e rimuovere il segnalino: questo &egrave; {label.guardian@0}. Se gli Eroi sconfiggono {label.guardian@0} {label.questVictory@0}.",
                                                        EN:"The door marked with a red outline can only be opened after eliminating {label.collectOptionalItems@2} Corrupted Mobs. Do not resolve the Door card when it is opened, spawn a level 5 Roaming Monster in the gray Objective token Zone instead, and remove the token: this is {label.guardian@0}. If the Heroes defeat {label.guardian@0} {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"La porta contrassegnata da un contorno rosso pu&ograve; essere aperta solo dopo aver eliminato {label.collectOptionalItems@2} Orde Corrotte. Non risolvere la carta Porta quando viene aperta, generare invece {label.campaignBoss@0} nella Zona contrassegnata dal segnalino Obiettivo grigio e rimuovere il segnalino: questo &egrave; {label.guardian@0}. Se gli eroi sconfiggono {label.guardian@0} {label.questVictory@0}.",
                                                        EN:"The door marked with a red outline can only be opened after eliminating {label.collectOptionalItems@2} Corrupted Mobs. Do not resolve the Door card when it is opened, spawn {label.campaignBoss@0} in the gray Objective token Zone instead, and remove the token: this is {label.guardian@0}. If the Heroes defeat {label.guardian@0} {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode: [ "removeCorruption" ],
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
                        }
                    ]
                }
            ]
        }
    ]

});