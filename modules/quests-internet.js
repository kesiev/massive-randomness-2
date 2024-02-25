ModManager.modules.push(function(){

    return [
            {

            id:"quests-internet",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-internet" ],
            label:{
                EN:"MD2 Fanmade quests inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            type:"armorToBoss",
                            by:{
                                IT:"Ispirato all'avventura di hugolink10/Zoju su BGG \"The Warrior of Light\"",
                                EN:"Inspired by hugolink10/Zoju quest on BGG \"The Warrior of Light\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                lightBad:[
                                                    {
                                                        IT:[ "L'Oscurit&agrave; &egrave; pi&ugrave; forte che mai."],
                                                        EN:[ "Darkness is stronger than ever." ]
                                                    },{
                                                        IT:[ "La Luce sembra averci abbandonato." ],
                                                        EN:[ "The Light seems to have abandoned us." ]
                                                    },{
                                                        IT:[ "Abbiamo ormai perso ogni speranza." ],
                                                        EN:[ "We have now lost all hope." ]
                                                    }
                                                ],
                                                veryBad:[
                                                    {
                                                        IT:[ "L'umanit&agrave; sta per perdere la guerra mentre le forze del male diventano sempre pi&ugrave; forti." ],
                                                        EN:[ "Mankind is about to lose the war as the forces of evil only grow stronger." ]
                                                    },{
                                                        IT:[ "Nessuno &egrave; riuscito a impedire l'arrivo del Grande Distruttore e nessuno potr&agrave; fermarlo." ],
                                                        EN:[ "Nobody managed to prevent the arrival of the Great Destroyer and no one will be able to stop it." ]
                                                    },{
                                                        IT:[ "L'alleanza con i Demoni &egrave; saltata e non riusciremo mai a sconfiggerli tutti." ],
                                                        EN:[ "The alliance with the Demons is broken and we will never be able to defeat them all." ]
                                                    }
                                                ],
                                                lastHope:[
                                                    {
                                                        IT:[ "L'ultima speranza che abbiamo &egrave; recuperare {label.equipment@0}" ],
                                                        EN:[ "The last hope is to recover {label.equipment@0}" ],
                                                    },{
                                                        IT:[ "Ci rimane una sola possibilit&agrave;: trovare {label.equipment@0}" ],
                                                        EN:[ "We only have one possibility left: find {label.equipment@0}" ],
                                                    },{
                                                        IT:[ "Ma non tutto &egrave; perduto: dobbiamo prendere {label.equipment@0}" ],
                                                        EN:[ "We only have one possibility left: we must take {label.equipment@0}" ],
                                                    }
                                                ],
                                                legend:[
                                                    {
                                                        IT:[ "che, secondo le antiche leggende, era destinato al Guerriero della Luce.", "il Guerriero della Luce" ],
                                                        EN:[ "for the Warrior of Light from legends old.", "the Warrior of Light" ]
                                                    },{
                                                        EN:[ "that the Sun gave to humans.", "the Gift of the Sun" ],
                                                        IT:[ "che il Sole ha donato agli umani.", "il Dono del Sole" ]
                                                    },{
                                                        EN:[ "which, as it has been said for centuries, is capable of devouring Shadows.", "the Shadow Eater" ],
                                                        IT:[ "che, si narra da secoli, sia in grado di divorare le Ombre.", "il Divoratore di Ombre" ]
                                                    }
                                                ],
                                                chosenOne:[
                                                    {
                                                        IT:[ "l'Eletto", "l'Eletto riceve" ],
                                                        EN:[ "the Chosen One", "the Chosen One receives" ]
                                                    },{
                                                        IT:[ "il Prescelto", "il Prescelto riceve" ],
                                                        EN:[ "the One", "the One receives" ]
                                                    },{
                                                        IT:[ "il Campione", "il Campione riceve" ],
                                                        EN:[ "the Champion", "the Champion receives" ]
                                                    }
                                                ],
                                                badGuy:[
                                                    {
                                                        IT:[ "il Guardiano del Male", "il Guardiano", "viene ucciso" ],
                                                        EN:[ "the Evil Warden", "the Warden", "is killed" ]
                                                    },{
                                                        IT:[ "la Buia Vedetta", "la Vedetta", "viene uccisa" ],
                                                        EN:[ "the Dark Lookout", "the Lookout", "is killed" ]
                                                    },{
                                                        IT:[ "il Custode Ombroso", "il Custode", "viene ucciso" ],
                                                        EN:[ "the Shadow Warden", "the Shadow Warden", "is killed" ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "dal santuario", "l'ingresso del santuario" ],
                                                        EN:[ "from the inner sanctum", "the sanctum entrance" ]
                                                    },{
                                                        IT:[ "dalla tomba", "l'ingresso della tomba" ],
                                                        EN:[ "from the tomb", "the tomb entrance" ]
                                                    },{
                                                        IT:[ "dalla cappella", "l'ingresso della cappella" ],
                                                        EN:[ "from the chapel", "the chapel entrance" ]
                                                    }
                                                ],
                                                equipment:[
                                                    {
                                                        IT:[ "il leggendario equipaggiamento del Flagello delle Ombre", "l'equipaggiamento", "del set del Flagello delle Ombre", "dal set del Flagello delle Ombre", "il set del Flagello delle Ombre", "parte dell'equipaggiamento" ],
                                                        EN:[ "the legendary Shadowbane equipment", "the equipment", "of the Shadowbane Set", "from the Shadowbane Set", "the Shadowbane Set", "piece of equipment" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.legend:capital@1}"
                                        },{
                                            EN:"{label.chosenOne:capital@0}"
                                        },{
                                            EN:"{label.place:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.lightBad@0} {label.veryBad@0} {label.lastHope@0} {label.legend@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.equipment:capital@4}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Recupera {label.equipment@1} {label.place@0}",
                                                        EN:"Recover {label.equipment@1} {label.place@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Eliminare {label.badGuy@1}",
                                                        EN:"Eliminate {label.badGuy@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.badGuy@0}",
                                                        EN:"Kill {label.badGuy@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire",
                                                        EN:"Escape"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uscire dal dungeon",
                                                        EN:"Exit the dungeon"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nemici Addestrati",
                                                        EN:"Trained Foes"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I Comandanti tirano anche un {symbol.blackDie} quando attaccano o difendono. I Mostri Erranti guadagnano +1{symbol.blackDie} in attacco o in difesa ogni 2 giocatori. (1-2 giocatori: +1{symbol.blackDie} , 3-4 giocatori: +2{symbol.blackDie} , 5-6 giocatori: +3{symbol.blackDie})",
                                                        EN:"Leaders also roll a {symbol.blackDie} when attacking or defending. Roaming Monsters gain +1{symbol.blackDie} on attacking or defending for every 2 players. (1-2 Players: +1{symbol.blackDie} , 3-4 players: +2{symbol.blackDie} , 5-6 players: +3{symbol.blackDie})"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.chosenOne:capital@0}",
                                                        EN:"{label.chosenOne:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Seleziona uno degli Eroi che sia {label.chosenOne@0}. Se {label.chosenOne@0} finisce KO, la Missione termina immediatamente con una sconfitta.<p>Cerca nei mazzi Tesori Rari e Tesori Epici ogni {label.equipment@5} {label.equipment@2}, rimuovile e tienile da parte.</p>",
                                                        EN:"Select one of the Heroes to be {label.chosenOne@0}. If {label.chosenOne@0} is KOed, the Quest immediately ends in defeat.<p>Search the Rare and Epic Treasure decks and remove every {label.equipment@5} {label.equipment@2} from the decks and set them aside.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Chiave",
                                                        EN:"The Key"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La porta contrassegnata da un contorno rosso rappresenta {label.place@1} e non pu&ograve; essere aperta a meno che gli Eroi non prendano la chiave, rappresentata dal segnalino Obiettivo con il lato colorato rivolto verso l'alto. Gli Eroi possono raccogliere la chiave utilizzando 1 PM. Tratta il segnalino Obiettivo con il lato colorato rivolto verso l'alto come una carta equipaggiamento negli scambi.",
                                                        EN:"The door marked with a red outline represents {label.place@1} and cannot be opened unless the Heroes grabs the key represented by the color-side-up Objective token. Heroes may collect the key using 1 MP. Treat the color-side-up Objective token as an equipment card for the purpose of trading."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Porta",
                                                        EN:"The Door"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe con la chiave pu&ograve; aprire la porta contrassegnata da un contorno rosso utilizzando 1 PM. Non pescare una carta Porta per quella Camera. Una volta aperta la porta, sostituisci il segnalino Corruzione {symbol.corruptionToken} con un Mostro Errante di livello 5 e gira il segnalino Obiettivo grigio sulla Tessera {tileLabel.fourth} sul suo lato colorato. Inoltre, tutti gli eroi ricevono immediatamente 2{symbol.frostToken}.",
                                                        EN:"A Hero with the key may open the door marked with a red outline using 1 MP. Do not draw a door card for that Chamber. Once that door is opened, replace the Corruption token {symbol.corruptionToken} for a level 5 Roaming Monster and flip the grayed Objective token on the {tileLabel.fourth} Tile to the color side up. Also, all heroes immediately receive 2{symbol.frostToken}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.equipment:capital@4}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se un qualsiasi eroe si trova nella stessa zona del segnalino Obiettivo con il lato colorato rivolto verso l'alto della Tessera {tileLabel.fourth}, rimuovi quel segnalino dal gioco e {label.chosenOne@1} ogni {label.equipment@5} {label.equipment@3} e la rispettiva arma di classe. Lui o lei pu&ograve; organizzare l'inventario gratuitamente.",
                                                        EN:"If any hero is at the same zone as the color-side-up Objective token on the {tileLabel.fourth} Tile, remove that token from the game and {label.chosenOne@1} every {label.equipment@5} {label.equipment@3} and its respective class weapon. He or She may organize the inventory for free."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.badGuy:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che {label.chosenOne@0} ha ricevuto {label.equipment@4}, gira il rimanente segnalino Obiettivo in grigio sulla Tessera {tileLabel.fifth} sul suo lato colorato e genera un Mostro Errante nella sua Zona: questo &egrave; {label.badGuy@0}.<p>{label.badGuy:capital@0} &egrave; un Mostro Errante di livello 5 con +15 Punti Vita. Ottiene anche +2{symbol.sword} quando attacca e +3{symbol.shield} quando difende. Inoltre, {label.badGuy@0} si attiva due volte nella Fase dei Nemici.</p>",
                                                        EN:"After {label.chosenOne@0} receives {label.equipment@4}, flip the remaining grayed Objective token on {tileLabel.fifth} Tile to the color side up and spawn a Roaming Monster in its Zone: this is {label.badGuy@0}.<p>{label.badGuy:capital@0} is a level 5 Roaming Monster with +15 Life Points. It also receives a +2{symbol.sword} when Attacking and a +3{symbol.shield} when defending. {label.badGuy:capital@0} also activates twice at the Enemy Phase.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga",
                                                        EN:"Escape"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta che {label.badGuy@0} {label.badGuy@2} e ogni Eroe si trova nella zona del segnalino Obiettivo con il lato colorato rivolto verso l'alto della Tessera {tileLabel.fifth} senza che ci siano nemici in quella zona, la Missione termina con la vittoria.",
                                                        EN:"Once {label.badGuy@0} {label.badGuy@2} and every hero is at the color-side-up Objective token zone on the {tileLabel.fifth} Tile and with no enemies in that zone, the Quest ends in victory."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "armorToBoss" ],
                                            gameMode: [ "armorToBoss" ],
                                            difficulty:[ "increasedLoot" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "armorToBoss" ],
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