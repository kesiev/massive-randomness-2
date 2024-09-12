ModManager.modules.push(function(){

    return [
        {

            id:"challenges-default",
            needs:[ "md2-hellscape" ],
            provides:[ "challenges-default" ],
            label:{
                EN:"MD2 challenges default configurations"
            },
            content:[
                {
                    type:"challenges",
                    data:[
                        {
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Armatura Abissale",
                                            EN:"Abyssal Armor"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa:</span> +{symbol.blueDie}",
                                            EN:"Enemies have <span class='phase'>Defense:</span> +{symbol.blueDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Forza Abissale",
                                            EN:"Abyssal Strength"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Gregari ed i Comandanti hanno +1 Salute.",
                                            EN:"Minions and Leaders do have +1 Health."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Patto del Sangue",
                                            EN:"Blood Path"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span> {symbol.mana}: +{symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span> {symbol.mana}: +{symbol.fang}"
                                        }
                                    ]
                                }
                            ],
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Daghe Demoniache",
                                            EN:"Demon Daggers"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +{symbol.yellowDie}",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +{symbol.yellowDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Artigli Glaciali",
                                            EN:"Glacial Claws"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: +{symbol.frostToken} (una volta per round)",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: +{symbol.frostToken} (once per round)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Odio",
                                            EN:"Hatred"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Rilancia tutti i risultati vuoti su {symbol.blackDie}",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: Reroll all blank results on {symbol.blackDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Furia Infernale",
                                            EN:"Hell's Fury"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le armi nemiche contano come {symbol.rangeRanged} in aggiunta al loro tipo.",
                                            EN:"Enemy weapons count as {symbol.rangeRanged} in addition to its type."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"L'Ira dell'Inferno",
                                            EN:"Hell's Wrath"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le armi nemiche contano come {symbol.rangeMagic} in aggiunta al loro tipo.",
                                            EN:"Enemy weapons count as {symbol.rangeMagic} in addition to its type."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Lame Infernali",
                                            EN:"Inferno Blades"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: +{symbol.fireToken} (una volta per round)",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: +{symbol.fireToken} (once per round)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Mistura Velenosa",
                                            EN:"Poisonous Mixture"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span> {symbol.mana}: +1 {symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span> {symbol.mana}: +1 {symbol.fang}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Nessun Perdono",
                                            EN:"No Forgiveness"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Non utilizzare alcun segnalino Latore di Vita. Se un Eroe viene messo KO, la Missione termina con la sconfitta.",
                                            EN:"Do not use any Lifebringer tokens. If one Hero is KO'd, the Mission ends in defeat."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Debilitante",
                                            EN:"Debilitating Weakness"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando i gli Eroi attaccano i Nemici tirano 1 {symbol.yellowDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.yellowDie}."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Lame Demoniache",
                                            EN:"Demon Blades"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +1 {symbol.sword}",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +1 {symbol.sword}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Spade Demoniache",
                                            EN:"Demon Swords"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +1 {symbol.blackDie}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +1 {symbol.blackDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Vento Infernale",
                                            EN:"Hellish Wind"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Dopo questo attacco sposta l'eroe difensore di 1 Zona verso questo Nemico.",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: After this attack, move the defending hero 1 Zone toward this Enemy."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Pervasiva",
                                            EN:"Pervasive Weakness"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando attaccano i Nemici, gli Eroi tirano 1 {symbol.yellowDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.yellowDie}."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Mistura Velenosa 2",
                                            EN:"Poisonous Mixture 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +1 {symbol.scratch}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +1 {symbol.scratch}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Velocit&agrave; Innaturale",
                                            EN:"Unnatural Speed"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando si attivano, I Nemici hanno +1 Movimento.",
                                            EN:"When activating, Enemies have +1 Move action."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Ben Equipaggiati",
                                            EN:"Well Equipped"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le Orde sono generate sempre con un oggetto di livello superiore, se possibile.",
                                            EN:"Mobs always Spawn with an item from a higher tier, if possible."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Burrasca Abissale",
                                            EN:"Abyssal Gale"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Dopo questo attacco, sposta l'Eroe difensore di 1 Zona verso la Zona di Partenza degli Eroi.",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: After this attack, move the defending Hero 1 Zone toward the Hero starting space."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Burrasca Abissale",
                                            EN:"Abyssal Gale"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +{symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +{symbol.fang}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Debilitante 2",
                                            EN:"Debilitating Weakness 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando i gli Eroi attaccano i Nemici tirano 1 {symbol.orangeDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.orangeDie}."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Daghe Demoniache 2",
                                            EN:"Demon Daggers 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +{symbol.orangeDie}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +{symbol.orangeDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Assorbimento Energetico",
                                            EN:"Energy Drain"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa</span>: L'Eroe attaccante perde 1 {symbol.mana}",
                                            EN:"Enemies have <span class='phase'>Defense</span>: Attacking Hero loses 1 {symbol.mana}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Armatura Infernale",
                                            EN:"Hellish Armor"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa</span>: +{symbol.shield}",
                                            EN:"Enemies have <span class='phase'>Defense</span>: +{symbol.shield}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Evocazione delle Ombre",
                                            EN:"Shadow Summons"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +{symbol.purpleDie} ({symbol.face}: Aggiungi 1 Gregario a questa Orda / Questo Mostro Errante si cura di 5)",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +{symbol.purpleDie} ({symbol.face}: Add 1 Minion to this Mob / This Roaming Monster Heals 5)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Scivolata",
                                            EN:"Slink"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: Dopo il combattimento muovi questo Nemico di 1 Zona pi&ugrave; lontano dall'Eroe attaccante o difensore, se possibile (una volta per tiro).",
                                            EN:"Enemies have <span class='phase'>Combat</span>: After combat, move this Enemy 1 Zone away from the attacking or defending Hero, if possible (once per roll)."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Crescita Bloccata",
                                            EN:"Stopped Growth"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando sali di livello, non ottieni il beneficio +1 Salute massima o +1 Mana massimo. A meno che un'abilit&agrave; non indichi diversamente, la salute massima e il mana degli eroi sono i loro valori iniziali.",
                                            EN:"When leveling up, do not gain the +1 Max Health or +1 Max Mana benefit. Unless a skill states otherwise, Heroes' Max Health and Mana are their starting values."
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
