ModManager.modules.push(function(){

    return [
            {

            id:"quests-default",
            needs:[ ],
            provides:[ "quests-default" ],
            label:{
                EN:"MD2 quest generator default data"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        objectives:{
                            IT:"Obiettivi della missione",
                            EN:"Quest objectives"
                        },
                        specialRules:{
                            IT:"Regole speciali",
                            EN:"Quest special rules"
                        },
                        challenges:{
                            IT:"Sfide",
                            EN:"Challenges"
                        },
                        challengesExplanation:{
                            IT:"Se sei in cerca di pericolo e gloria puoi affrontare questa avventura seguendo una o pi&ugrave; di queste regole aggiuntive:",
                            EN:"If you are seeking danger and glory you can tackle this adventure by following one or more of these additional rules:"
                        },
                        requiredTiles:{
                            IT:"Tessere richieste",
                            EN:"Tiles needed"
                        },
                        upTo:{
                            IT:"Fino a",
                            EN:"Up to"
                        },
                        lootRatio:{
                            IT:"I segnalini Bottino vanno collocati in base al numero di Eroi:",
                            EN:"Loot tokens are placed according to the number of Heroes:"
                        },
                        questHeader:{
                            IT:"Avventura One-Shot:",
                            EN:"One-Shot Quest:"
                        },
                        questFooter:{
                            IT:"Massive Randomness 2 - Avventura One-Shot",
                            EN:"Massive Randomness 2 - One Shot Quest"
                        }
                    }
                }
            ]
        }
    ]

});