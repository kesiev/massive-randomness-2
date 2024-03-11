ModManager.modules.push(function(){

    return [
            {

            id:"quests-hellscapewq",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-hellscapewq", "untranslated-fr" ],
            label:{
                EN:"MD2 Hellscape Web Quest inspired quest models"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            type:"collect",
                            by:{
                                IT:"Ispirato alla Web Quest \"The Cure\"",
                                EN:"Inspired by the Web Quest \"The Cure\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                asIf:[
                                                    {
                                                        IT:[ "Come se tutto ci&ograve; che ha causato non bastasse," ],
                                                        EN:[ "As if everything it brought was not enough," ]
                                                    },{
                                                        IT:[ "Dopo aver distrutto la maggior parte dei villaggi circostanti," ],
                                                        EN:[ "After destroying most of the surrounding villages," ]
                                                    },{
                                                        IT:[ "La sua sete di distruzione &egrave; implacabile e" ],
                                                        EN:[ "His thirst for destruction is relentless and" ]
                                                    }
                                                ],
                                                problem:[
                                                    {
                                                        IT:[ "La Maledizione opera in modi misteriosi e nefasti.", "ora la Maledizione sta consumando le persone dall'interno attraverso una nuova malattia", "La Maledizione Nefasta", "dalla", "Piaga della Maledizione", "La Maledizione si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The Curse works in mysterious and nefarious ways.", "now the Curse is consuming people from the inside through a new plague", "The Nefarious Curse", "by the", "Plague of the Curse", "The Curse Spreads", "of the", "Plague" ]
                                                    },{
                                                        IT:[ "La Melma Nera sembra essere inarrestabile.", "ora ha diffuso una terribile malattia, in grado di consumare qualsiasi essere vivente pochi giorni", "La Malattia della Melma Nera", "dalla", "Malattia della Melma Nera", "La Malattia si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The Black Slime seems to be unstoppable.", "now it has spread a terrible disease, capable of consuming any living being within a few days", "The Disease of the Black Slime", "by the", "Disease of the Black Slime", "The Disease Spreads", "of the", "Disease"]
                                                    },{
                                                        IT:[ "Gli alchimisti hanno perso il controllo della terribile Radice Maligna che stavano studiando.", "ora sta portando una malattia mortale nei villaggi e nelle citt&agrave;, capace di consumare ogni essere vivente", "La Malattia Maligna", "dalla", "Malattia Maligna", "La Malattia si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The alchemists have lost control of the terrible Evil Root they were studying.", "it is now bringing a deadly disease to villages and cities, capable of consuming every living being", "The Evil Disease", "by the" , "Malignant Disease", "The Disease Spreads", "of the", "Disease" ]
                                                    }
                                                ],
                                                alsoUs:[
                                                    {
                                                        IT:[ "- e gli Eroi non fanno eccezione!" ],
                                                        EN:[ "- and the Heroes are no exception!" ]
                                                    },{
                                                        IT:[ "- inclusi gli Eroi!" ],
                                                        EN:[ "- including Heroes!" ]
                                                    },{
                                                        IT:[ "- inclusi noi!" ],
                                                        EN:[ "- including us!" ]
                                                    }
                                                ],
                                                however:[
                                                    {
                                                        IT:[ "Tuttavia," ],
                                                        EN:[ "However," ]
                                                    },{
                                                        IT:[ "Ma non tutto &egrave; perduto... Si dice in giro che" ],
                                                        EN:[ "But all is not lost... Word on the street is that" ]
                                                    },{
                                                        IT:[ "Ma," ],
                                                        EN:[ "But," ]
                                                    }
                                                ],
                                                where:[
                                                    {
                                                        IT:[ "nel profondo di un sotterraneo creduto perduto," ],
                                                        EN:[ "deep down in a believed-to-be-lost dungeon," ]
                                                    },{
                                                        IT:[ "in un antico tempio," ],
                                                        EN:[ "in an ancient temple," ]
                                                    },{
                                                        IT:[ "sul luogo di un oscuro rituale," ],
                                                        EN:[ "to the site of a dark ritual," ]
                                                    }
                                                ],
                                                cure:[
                                                    {
                                                        IT:[ "sembra che uno stregone abbia lasciato una sorta di cura.", "Cura", "la", "nella Zona della Cura", "cura" ],
                                                        EN:[ "a sorcerer seems to have left behind some sort of cure.", "Cure", "the", "in the Cure's Zone", "cure" ]
                                                    },{
                                                        IT:[ "sembra che un cultista abbia dimenticato una qualche pozione curativa.", "Pozione", "la", "nella Zona della Pozione", "pozione" ],
                                                        EN:[ "it seems like a cultist forgot some healing potion.", "Potion", "the", "in the Potion's Zone", "potion" ]
                                                    },{
                                                        IT:[ "pare sia stata abbandonata una fiala contenente una cura miracolosa.", "Fiala", "la", "nella Zona della Fiala", "fiala" ],
                                                        EN:[ "it seems a vial containing a miracle cure has been abandoned.", "Vial", "the", "in the Vial's Zone", "vial" ]
                                                    }
                                                ],
                                                whatToDo:[
                                                    {
                                                        IT:[ "Il piano sembra semplice:" ],
                                                        EN:[ "The plan seems simple:" ]
                                                    },{
                                                        IT:[ "Non dobbiamo fare altro da fare che" ],
                                                        EN:[ "All we have to do is" ]
                                                    },{
                                                        IT:[ "Il nostro obiettivo &egrave; chiaro:" ],
                                                        EN:[ "Our goal is clear:" ]
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        IT:[ "prendere {label.cure@2} {label.cure@4} e scappare!" ],
                                                        EN:[ "grab {label.cure@2} {label.cure@4} and leave!" ]
                                                    },{
                                                        IT:[ "trovare {label.cure@2} {label.cure@4} sopravvivere fino all'uscita!" ],
                                                        EN:[ "find {label.cure@2} {label.cure@4} survive to the exit!" ]
                                                    },{
                                                        IT:[ "raggiungere l'uscita del Dungeon con {label.cure@2} {label.cure@4} in mano e tutti interi!" ],
                                                        EN:[ "reach the exit of the Dungeon with {label.cure@2} {label.cure@4} in hand and in one piece!" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.cure:capital@2} {label.cure@1}"
                                        },{
                                            EN:"{label.problem@2}"
                                        },{
                                            EN:"{label.problem@5}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.problem@0} {label.asIf@0} {label.problem@1} {label.alsoUs@0} {label.however@0} {label.where@0} {label.cure@0} {label.whatToDo@0} {label.plan@0}"
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
                                                        IT:"Cercare e Proteggere {label.cure@2} {label.cure@1}",
                                                        EN:"Find and Protect {label.cure@2} {label.cure@1}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogli {label.cure@2} {label.cure@1} e non farti mettere KO mentre la trasporti",
                                                        EN:"Pick up {label.cure@2} {label.cure@1} and don't get KO'd while carrying it"
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
                                                        IT:"Tutti gli Eroi devono uscire dal Dungeon",
                                                        EN:"All Heroes must exit the Dungeon"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.problem@2}",
                                                        EN:"{label.problem@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Prima di iniziare la partita, i giocatori scelgono 1 Eroe che verr&agrave; infettato {label.problem@3} {label.problem@4}. Posiziona un segnalino {symbol.corruptionToken} sulla Plancia di quell'Eroe per contrassegnarlo. Gli Eroi Infetti subiscono 1 Ferita all'inizio di ogni loro turno.",
                                                        EN:"Before starting the game, players choose 1 Hero to start infected {label.problem@3} {label.problem@4}. Place a {symbol.corruptionToken} token on that Hero's dashboard to mark this. Infected Heroes take 1 Wound at the start of each of their turns."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.problem@5}",
                                                        EN:"{label.problem@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Alla fine del turno di qualsiasi Eroe, se c'&egrave; almeno un Eroe infetto che condivide una Zona con Eroi non infetti, anche quegli Eroi non infetti vengono infettati {label.problem@3} {label.problem@4} (posizionare 1 gettone {symbol.corruptionToken} sulla loro Plancia dell'Eroe per indicarlo), e da ora in poi subiscono anche loro gli effetti {label.problem@6} {label.problem@7}.",
                                                        EN:"At the end of any Hero's turn, if there is at least one infected Hero sharing a Zone with non-infected Heroes, those non-infected Heroes also become infected {label.problem@3} {label.problem@4} (place 1{symbol.corruptionToken} token on their Hero's Dashboard to mark this), and from now on they suffer the Plague's effects as well."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.cure:capital@2} {label.cure@1}...",
                                                        EN:"{label.cure:capital@2} {label.cure@1}..."
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.cure@2} {label.cure@1}. Qualsiasi Eroe che si trova {label.cure@3} pu&ograve; spendere 1 MP per raccoglierla e guadagnare immediatamente 5 PE. {label.cure:capital@2} {label.cure@1} pu&ograve; essere scambiata come un oggetto.",
                                                        EN:"The color-side-up Objective tokens represent {label.cure@2} {label.cure@1}. Any Hero standing {label.cure@3} may spend 1 MP to pick it up and immediately gain 5 XP. {label.cure:capital@2} {label.cure@1} may be traded as an item."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"...&egrave; Fragile",
                                                        EN:"...is Fragile"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se un Eroe viene messo KO mentre trasporta {label.cure@2} {label.cure@1}, la Missione termina con la sconfitta.",
                                                        EN:"If a Hero is KO'd while carrying {label.cure@2} {label.cure@1}, the Mission ends in defeat."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga!",
                                                        EN:"Escape!"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che {label.cure@2} {label.cure@1} &egrave; stata raccolta, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo grigio per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, la Missione termina con la vittoria.",
                                                        EN:"After {label.cure@2} {label.cure@1} has been picked up, any Hero may spend 1 MP in the gray Objective token Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, the Mission ends in victory."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRooms" ],
                                            gameMode: [ "theCure" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "noBridges" ],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type:"collect",
                            by:{
                                IT:"Ispirato alla Web Quest \"Ruthless Leaders\"",
                                EN:"Inspired by the Web Quest \"Ruthless Leaders\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                cause:[
                                                    {
                                                        IT:[ "Sappiamo che l'Oscurit&agrave;", "Oscura", "Oscuri" ],
                                                        EN:[ "We know that the Darkness", "Dark", "Dark" ]
                                                    },{
                                                        IT:[ "I Sacerdoti raccontano che l'Antico Monolite", "Arcana", "Arcani" ],
                                                        EN:[ "The Priests say that the Ancient Monolith", "Arcane", "Arcane" ]
                                                    },{
                                                        IT:[ "Lo abbiamo visto troppe volte. La Piaga Nera", "Corrotta", "Corrotti" ],
                                                        EN:[ "We've seen it too many times. The Black Plague", "Corrupted", "Corrupted" ]
                                                    }
                                                ],
                                                effect:[
                                                    {
                                                        IT:[ "ha il potere di corrompere e trasformare chiunque tocchi in mostri malvagi." ],
                                                        EN:[ "has the power to corrupt and transform anyone it touches into evil monsters." ]
                                                    },{
                                                        IT:[ "riesce a impadronirsi delle anime, trasformando ogni essere vivente in belve senza senno." ],
                                                        EN:[ "manages to take over souls, transforming every living being into a senseless beast." ]
                                                    },{
                                                        IT:[ "si nutre del senno dei viventi, lasciando solo un guscio vuoto." ],
                                                        EN:[ "feeds on the wisdom of the living, leaving only an empty shell." ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Ma alcune creature sembrano nate malvagie, quindi diventano ancora pi&ugrave; crudeli e brutali.", "Progenie" ],
                                                        EN:[ "But some creatures just seem to be born evil, so they become even more cruel and brutal.", "Spawn" ]
                                                    },{
                                                        IT:[ "Ma alcune creature ne hanno un piccolo frammento nel cuore, diventando creature spietate.", "Ferita" ],
                                                        EN:[ "But some creatures have a small fragment of it in their hearts, becoming ruthless creatures.", "Wound" ]
                                                    },{
                                                        IT:[ "Ma alcune creature riescono a mantenere il controllo di se stessi, diventando freddi e sadici assassini.", "Coscienza" ],
                                                        EN:[ "But some creatures manage to maintain control of themselves, becoming cold and sadistic killers.", "Consciousness" ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "&egrave; qui che si possono trovare questi spietati portatori di morte", "Portatori" ],
                                                        EN:[ "It is here that these ruthless bringers of death can be found,", "Bringers" ]
                                                    },{
                                                        IT:[ "Qu&igrave; si radunano questi terribili assassini", "Assassini" ],
                                                        EN:[ "Here these terrible murderers gather,", "Murderers" ]
                                                    },{
                                                        IT:[ "Questo &egrave; il covo di questi orribili criminali", "Criminali" ],
                                                        EN:[ "Here these terrible criminals gather,", "Criminals" ]
                                                    }
                                                ],
                                                doing:[
                                                    {
                                                        IT:[ "alla guida dei loro servitori." ],
                                                        EN:[ "leading their minions around." ]
                                                    },{
                                                        IT:[ "seguiti dai loro di sottoposti." ],
                                                        EN:[ "followed by their subordinates." ]
                                                    },{
                                                        IT:[ "circondati dai loro fedeli gregari." ],
                                                        EN:[ "surrounded by their faithful followers." ]
                                                    }
                                                ],
                                                evaluate:[
                                                    {
                                                        IT:[ "Saranno pure un po' pi&ugrave; forti," ],
                                                        EN:[ "They might be a bit stronger," ]
                                                    },{
                                                        IT:[ "Possono fare molta paura..." ],
                                                        EN:[ "They can be very scary..." ]
                                                    },{
                                                        IT:[ "Sembrano difficili da eliminare," ],
                                                        EN:[ "They seem difficult to eliminate," ]
                                                    }
                                                ],
                                                come:[
                                                    {
                                                        IT:[ "ma arriveremo preparati ad affrontarli." ],
                                                        EN:[ "but we will come prepared for them." ]
                                                    },{
                                                        IT:[ "ma noi non saremo certo da meno." ],
                                                        EN:[ "but we will certainly not be outdone." ]
                                                    },{
                                                        IT:[ "ma sapremo dare filo da torcere." ],
                                                        EN:[ "but we will be able to give them a hard time." ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"La {label.but:capital@1} {label.cause:capital@1}",
                                            EN:"The {label.cause:capital@1} {label.but:capital@1}"
                                        },{
                                            IT:"{label.enemies:capital@1} {label.cause:capital@2}",
                                            EN:"{label.cause:capital@2} {label.enemies:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.cause@0} {label.effect@0} {label.but@0} {label.enemies@0} {label.doing@0} {label.evaluate@0} {label.come@0}"
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
                                                        IT:"Sconfiggere i Comandanti",
                                                        EN:"Defeat the Leaders"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere 2 Comandanti di livello 5",
                                                        EN:"Kill 2 Level 5 Leaders"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Inizio Rapido",
                                                        EN:"Jumpstart"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Tutti gli eroi iniziano con 5 PE. Prima del primo round, esegui una Fase di Avanzamento, quindi gli eroi iniziano la prima Fase degli Eroi al livello 2.",
                                                        EN:"All Heroes start with 5 XP. Before the first round, perform a Level Up Phase, so Heroes start the 1st Hero Phase at Level 2."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Comandanti Spietati",
                                                        EN:"Ruthless Leaders"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I Comandanti di questo Dungeon sono pi&ugrave; brutali del solito. Invece del normale ammontare di Salute, i Comandanti ne hanno il doppio. Inoltre, se possibile, i Comandanti tirano sempre +1{symbol.blackDie} in difesa e in attacco. Quando un Comandante viene ucciso, ogni Eroe guadagna 4 PE, invece dei soliti 2 PE.",
                                                        EN:"The Leaders of this Dungeon are more brutal than usual. Instead of their regular Health, Leaders have twice the amount of Health. Also, if possible, Leaders always roll +1{symbol.blackDie} to defense and attack. When a Leader is killed, each Hero gains 4 XP, instead of the usual 2 XP."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roaming" ],
                                            gameMode: [ "arena" ],
                                            difficulty:[ "hard" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "square" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "noBridges" ],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type:"collect",
                            by:{
                                IT:"Ispirato alla Web Quest \"Into the Flames of Hell\"",
                                EN:"Inspired by the Web Quest \"Into the Flames of Hell\""
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                hazard:[
                                                    {
                                                        IT:[
                                                            "fire", "{symbol.fireToken}"," Gli eroi tirano {symbol.orangeDie} invece di {symbol.yellowDie} durante la risoluzione del {symbol.fireToken}.",
                                                            "il Signore Ardente", "La stanza del Signore Ardente", "L'influsso del Signore Ardente",
                                                            "il Dominatore del Fuoco", "La stanza del Dominatore del Fuoco", "Il Dominio del Fuoco",
                                                            "il Demone Fiammeggiante", "La stanza del Demone Fiammeggiante", "L'influsso Fiammeggiante",
                                                            "dalle fiamme", "in fiamme", "le fiamme si allarghino su tutta la capitale", "il fuoco",
                                                            "divorando ogni cosa", "al caldo", "a respirare",
                                                            "di quelle fiamme", "di Fuoco",
                                                            "Braceri", "Bracere", "il Fuoco",
                                                            "va a Fuoco",
                                                            "Estinguere", "Estinguere"
                                                        ],
                                                        EN:[
                                                            "fire", "{symbol.fireToken}", " Heroes roll {symbol.orangeDie} instead of {symbol.yellowDie} when resolving {symbol.fireToken}.",
                                                            "the Fiery Lord", "the Fiery Lord's Chamber", "The Fiery Lord's Presence",
                                                            "the Firebender", "The Firebender's Room", "Firebending",
                                                            "the Flaming Demon", "The Flaming Demon's Room", "The Flaming Influence",
                                                            "by flames", "on fire", "the flames from spreading throughout the capital", "the fire",
                                                            "devouring everything", "to the heat", "breathe",
                                                            "of those scorching flames", "Fire",
                                                            "Braziers", "Brazier", "the Fire",
                                                            "is on Fire",
                                                            "extinguish", "Quench",
                                                            "a"
                                                        ]
                                                    },{
                                                        IT:[
                                                            "frost", "{symbol.frostToken}","",
                                                            "il Signore del Gelo", "La stanza del Signore del Gelo", "L'influsso del Signore del Gelo",
                                                            "il Dominatore Gelido", "La stanza del Dominatore Gelido", "Il Dominio del Gelo",
                                                            "il Demone Gelido", "La stanza del Demone Gelido", "L'influsso Gelido",
                                                            "dal gelo", "nella morsa del ghiaccio", "il ghiaccio invada la capitale", "il ghiaccio",
                                                            "immobilizzando ogni cosa", "al gelo", "a muoversi",
                                                            "di quel gelo", "di Ghiaccio",
                                                            "Cumuli di Ghiaccio", "Cumulo di Ghiaccio", "il Ghiaccio",
                                                            "&egrave; Ghiacciato",
                                                            "frantumare", "Frantumare"
                                                        ],
                                                        EN:[
                                                            "frost", "{symbol.frostToken}","",
                                                            "the Frost Lord", "the Frost Lord's Chamber", "The Frost Lord's Presence",
                                                            "the Frostbender", "The Frostbender's room", "Frostbending",
                                                            "the Frost Demon", "The Frost Demon's Room", "The Frosting Influence",
                                                            "by frost", "in the grip of the ice", "the ice invades the capital", "the ice",
                                                            "immobilizing everything", "to the freeze", "to move",
                                                            "of that frost", "Ice",
                                                            "Heaps of Ice", "Heap of Ice", "the Ice",
                                                            "is Frozen",
                                                            "shatter", "Shatter",
                                                            "an"
                                                        ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "Gli angoli pi&ugrave; oscuri dell'Aldil&agrave; sono consumati {label.hazard@12}.", "Per continuare la loro incursione nell'Aldil&agrave;," ],
                                                        EN:[ "The darkest corners of Afterlife are consumed {label.hazard@12}.", "To continue their incursion on Afterlife," ]
                                                    },{
                                                        IT:[ "Il tempio al centro della citt&agrave; &egrave; {label.hazard@13}.", "Per evitare che {label.hazard@14}," ],
                                                        EN:[ "The temple in the center of the city is {label.hazard@13}.", "To prevent {label.hazard@14}," ]
                                                    },{
                                                        IT:[ "I rintocchi di una campana echeggiano per i corridoi. In un attimo, il dungeon &egrave; invaso {label.hazard@12}.", "Prima che gli Eroi possano fuggire," ],
                                                        EN:[ "The tolling of a bell echoes through the corridors. In an instant, the dungeon is engulfed {label.hazard@12}.", "Before the Heroes can escape," ]
                                                    }
                                                ],
                                                flames:[
                                                    {
                                                        IT:[ "{label.hazard:capital@15} corre lungo i corridoi e le pareti." ],
                                                        EN:[ "{label.hazard:capital@15} runs along the corridors and walls." ]
                                                    },{
                                                        IT:[ "{label.hazard:capital@15} sembra serpeggiare ovunque, {label.hazard@16}." ],
                                                        EN:[ "{label.hazard:capital@15} seems to snake everywhere, {label.hazard@16}." ]
                                                    },{
                                                        IT:[ "{label.hazard:capital@15} sta inghiottendo ogni cosa senza piet&agrave;." ],
                                                        EN:[ "{label.hazard:capital@15} is consuming everything with no mercy." ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "Le creature dell'Oscurit&agrave; sono abituate {label.hazard@17}," ],
                                                        EN:[ "Creatures from Darkness are used {label.hazard@17}," ]
                                                    },{
                                                        IT:[ "Un incantesimo di protezione difende i mostri," ],
                                                        EN:[ "A protection spell defends the monsters," ]
                                                    },{
                                                        IT:[ "I nemici sembrano non subire alcun effetto," ],
                                                        EN:[ "Enemies appear to be unaffected," ]
                                                    }
                                                ],
                                                suffer:[
                                                    {
                                                        IT:[ "ma gli Eroi resistono a fatica." ],
                                                        EN:[ "but the Heroes barely resist." ]
                                                    },{
                                                        IT:[ "ma gli Eroi riescono a malapena {label.hazard@18}." ],
                                                        EN:[ "but the Heroes can barely {label.hazard@18}." ]
                                                    },{
                                                        IT:[ "ma gli Eroi sono invece in gran difficolt&agrave;." ],
                                                        EN:[ "but the Heroes are instead in great difficulty." ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "gli Eroi devono sconfiggere la fonte {label.hazard@19}" ],
                                                        EN:[ "the Heroes must defeat the source {label.hazard@19}" ]
                                                    },{
                                                        IT:[ "gli Eroi devono eliminare il responsabile" ],
                                                        EN:[ "the Heroes must eliminate the person responsible" ]
                                                    },{
                                                        IT:[ "gli Eroi devono affrontare chi ha causato tutto questo" ],
                                                        EN:[ "the Heroes must face who caused all this" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "{label.hazard@3}", "{label.hazard@4}", "{label.hazard@5}" ],
                                                        EN:[ "{label.hazard@3}", "{label.hazard@4}", "{label.hazard@5}" ]
                                                    },{
                                                        IT:[ "{label.hazard@6}", "{label.hazard@7}", "{label.hazard@8}" ],
                                                        EN:[ "{label.hazard@6}", "{label.hazard@7}", "{label.hazard@8}" ]
                                                    },{
                                                        IT:[ "{label.hazard@9}", "{label.hazard@10}", "{label.hazard@11}" ],
                                                        EN:[ "{label.hazard@9}", "{label.hazard@10}", "{label.hazard@11}" ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "{label.hazard@21}", "{label.hazard@22}", "i", "il", "tutti i", "un", "quel" ],
                                                        EN:[ "{label.hazard@21}", "{label.hazard@22}", "the", "the", "all", "a", "that" ]
                                                    },{
                                                        IT:[ "Fontane {label.hazard@20}", "Fontana {label.hazard@20}", "le", "la", "tutte le", "una", "quella" ],
                                                        EN:[ "{label.hazard@20} Fountains", "{label.hazard@20} Fountain", "the", "the", "all", "{label.hazard@27}", "that" ]
                                                    },{
                                                        IT:[ "Pozzi {label.hazard@20}", "Pozzo {label.hazard@20}", "i", "il", "tutti i", "un", "quel" ],
                                                        EN:[ "{label.hazard@20} Pits", "{label.hazard@20} Pit", "the", "the", "all", "{label.hazard@27}", "that" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.target@2} {label.target@0}"
                                        },{
                                            EN:"{label.enemy:capital@0}"
                                        },{
                                            EN:"{label.target:capital@2} {tokensCount.objective} {label.target@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.place@0} {label.flames@0} {label.enemies@0} {label.suffer@0} {label.place@1} {label.objective@0}: {label.enemy@0}."
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
                                                        IT:"{label.hazard:capital@25} {label.target@2} {label.target@0}",
                                                        EN:"{label.hazard:capital@25} {label.target@2} {label.target@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.hazard@26} {label.target@4} {label.target@0} nel Dungeon",
                                                        EN:"{label.hazard@26} {label.target@4} {label.target@0} in the Dungeon"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemy@0}",
                                                        EN:"Defeat {label.enemy@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.enemy@0}",
                                                        EN:"Kill {label.enemy@0}"
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
                                                        IT:"Evoca un Mostro Errante di livello 5 sul segnalino Corruzione {symbol.corruptionToken} e rimuovi il segnalino. Rimuovi le sue carte dagli altri mazzi dei Mostri Erranti.",
                                                        EN:"Spawn a Level 5 Roaming Monster on the Corruption token {symbol.corruptionToken} and remove the token. Remove its cards on the other Roaming Monster decks."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.enemy:capital@0} non si attiva e non pu&ograve; essere bersaglio di alcun attacco, capacit&agrave; o abilit&agrave; e n&eacute; subire Ferite finch&eacute; la sua Camera non viene rivelata.",
                                                        EN:"{label.enemy:capital@0} does not activate and cannot be the target of any attack, skill, or ability, nor take Wounds until its Chamber has been revealed."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I nemici non subiscono {label.hazard@1}. Se un nemico avrebbe dovuto prendere un segnalino {label.hazard@1}, scartalo.{label.hazard@2}",
                                                        EN:"Enemies don't take {label.hazard@1}. If an Enemy would take a {label.hazard@1} token, discard that token instead.{label.hazard@2}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.hazard:capital@25} {label.hazard@23}",
                                                        EN:"{label.hazard:capital@25} {label.hazard@23}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo rappresentano {label.target@2} {label.target@0}. Qualsiasi Eroe in una Zona con un segnalino Obiettivo pu&ograve; spendere un'azione per {label.hazard@25} {label.target@6} {label.target@1}, rimuovendo il segnalino dal Dungeon.",
                                                        EN:"Objective tokens represent {label.target@2} {label.target@0}. Any Hero in a Zone with an Objective token can spend one action to {label.hazard@25} {label.target@6} {label.target@1}, removing the token from the Dungeon."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Questo Dungeon {label.hazard@24}",
                                                        EN:"This Dungeon {label.hazard@24}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che un Eroe entra in una Zona con uno o pi&ugrave; segnalini {label.hazard@1}, rimuovete quei segnalini. Poi quell'Eroe prende un pari numero di segnalini {label.hazard@1}. Se un eroe termina il suo turno nel raggio di {symbol.rangeMagic} da {label.target@5} {label.target@1}, prende 1 {label.hazard@1}.",
                                                        EN:"Whenever a Hero enters a Zone with one or more {label.hazard@1} token, remove that tokens. Then that Hero takes the same amount of {label.hazard@1} tokens. If a Hero ends their turn in {symbol.rangeMagic} range from {label.target@5} {label.target@1}, they take 1 {label.hazard@1}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom-small" ],
                                            gameMode: [ "elementalLord" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "elemental" ],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type:"collect",
                            by:{
                                IT:"Ispirato alla Web Quest \"Diabolic Challenge\"",
                                EN:"Inspired by the Web Quest \"Diabolic Challenge\""
                            },
                            suggestedTilesCount:6,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                discover:[
                                                    {
                                                        IT:[ "Dopo aver passato l'intera vita sul campo di battaglia abbiamo finalmente scoperto come porre fine a questa infinita spirale di violenza.", "L'Ultima Spira" ],
                                                        EN:[ "After spending our entire lives on the battlefield we have finally discovered how to put an end to this endless spiral of violence.", "The Last Spire" ],
                                                    },{
                                                        IT:[ "Abbiamo chiuso gli occhi alla verit&agrave; per troppo tempo, per paura di doverla affrontare.", "Aprire gli Occhi" ],
                                                        EN:[ "We have closed our eyes to the truth for too long, for fear of having to face it.", "Opened Eyes" ],
                                                    },{
                                                        IT:[ "Le parole dell'Oracolo continuavano a rimbalzarci per la testa. Ormai sapevamo la verit&agrave;.", "La Verit&agrave;" ],
                                                        EN:[ "The Oracle's words kept bouncing around our heads. By now we knew the truth.", "The Truth" ],
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[
                                                            "Una dinastia millenaria di generali oscuri e sanguinari trama nell'ombra affinch&eacute; questa guerra non abbia mai fine, inviando senza sosta i loro eserciti nelle nostre citt&agrave; per piegarci al loro volere.",
                                                            "i", "Generali", "Stendardi del Sangue", "che indeboliscono i soldati alleati che combattono nelle citt&agrave;", "lo Stendardo"
                                                        ],
                                                        EN:[
                                                            "A thousand-year-old dynasty of dark and bloodthirsty generals plots in the shadows to ensure this war never ends, relentlessly sending their armies into our cities to bend us to their will.",
                                                            "the", "Generals", "Blood Banners", "which weaken allied soldiers fighting in the cities", "the Banner"
                                                        ],
                                                    },{
                                                        IT:[
                                                            "I nostri nemici si erano nascosti in una grotta naturale formatasi proprio vicino il villaggio, dal quale inviavano in un attimo e senza sosta le loro truppe di mostri sanguinari.",
                                                            "gli", "Strateghi", "Mappe dei Tunnel", "usate dai nemici per invadere il villaggio", "la Mappa"
                                                        ],
                                                        EN:[
                                                            "Our enemies were hiding in a natural cave formed right near the village, from which they sent their troops of bloodthirsty monsters in an instant and without stopping.",
                                                            "the", "Strategists", "Tunnel Maps", "used by enemies to invade the village", "the Map"
                                                        ],
                                                    },{
                                                        IT:[
                                                            "Alla nascita, siamo stati maledetti dalla setta degli Sciamani a una vita di sangue e metallo. Siamo stati derubati della pace e della felicit&agrave; e la vita ci ha trasformato in inarrestabili macchine da guerra.",
                                                            "i", "Gran Sciamani", "Radici del Male", "che si nutrono dell'ira degli Eroi", "la Radice"
                                                        ],
                                                        EN:[
                                                            "At birth, we were cursed by the Shamans to a life of blood and metal. We have been robbed of peace and happiness and life has turned us into unstoppable war machines.",
                                                            "the", "Great Shamans", "Roots of Evil", "who feed on the wrath of the Heroes", "the Root"
                                                        ],
                                                    }
                                                ],
                                                pray:[
                                                    {
                                                        IT:[ "Possa la Luce proteggerci," ],
                                                        EN:[ "May the Light protect us," ],
                                                    },{
                                                        IT:[ "Che la Giustizia guidi la nostra mano," ],
                                                        EN:[ "May Justice guide our hands," ],
                                                    },{
                                                        IT:[ "Per loro non ci sar&agrave; un nuovo giorno," ],
                                                        EN:[ "For them there will be no new day," ],
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        IT:[ "perch&eacute; oggi porremo fine a tutto questo" ],
                                                        EN:[ "because today we will put an end to all this" ],
                                                    },{
                                                        IT:[ "perch&eacute; oggi risolveremo la questione una volta per tutte" ],
                                                        EN:[ "because today we will resolve the issue once and for all" ],
                                                    },{
                                                        IT:[ "perch&eacute; risolveremo il problema alla radice" ],
                                                        EN:[ "because we will solve the problem at the root" ],
                                                    }
                                                ],
                                                action:[
                                                    {
                                                        IT:[ "cercando i responsabili e distruggendoli!" ],
                                                        EN:[ "seeking the leaders and destroying them!" ],
                                                    },{
                                                        IT:[ "eliminandoli!" ],
                                                        EN:[ "eliminating them!" ],
                                                    },{
                                                        IT:[ "spazzando via chiunque ci sia dietro!" ],
                                                        EN:[ "wiping out whoever is behind it!" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.event:capital@1} {label.event@2}"
                                        },{
                                            EN:"{label.event:capital@3}"
                                        },{
                                            EN:"{label.discover@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.discover@0} {label.event@0} {label.pray@0} {label.plan@0} {label.action@0}"
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
                                                        IT:"Sconfiggere {label.event@1} {label.event@2}",
                                                        EN:"Defeat {label.event@1} {label.event@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Eliminare 2 Mostri Erranti di livello 5",
                                                        EN:"Kill 2 Level 5 Roaming Monsters"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.event@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo rappresentano {label.event@3} {label.event@4}. Qualsiasi Eroe che si trova nella Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.event@5} (rimuovere il segnalino dal Dungeon), poi ogni Eroe guadagna 5 PE.",
                                                        EN:"Objective tokens represent {label.event@3} {label.event@4}. Any Hero standing in an Objective token's Zone may spend 1 action to destroy {label.event@5} (remove the token from the Dungeon), then each Hero gains 5 XP."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "largeMaze" ],
                                            gameMode: [ "largeTargets" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "largeMaze" ],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type:"collect",
                            by:{
                                IT:"Ispirato alla Web Quest \"Hardcore Trial\"",
                                EN:"Inspired by the Web Quest \"Hardcore Trial\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                situation:[
                                                    {
                                                        IT: [ "Tutto &egrave; andato in malora." ],
                                                        EN: [ "Everything has gone to hell." ]
                                                    },{
                                                        IT: [ "Ecco la nostra solita sfortuna." ],
                                                        EN: [ "That's our usual bad luck." ]
                                                    },{
                                                        IT: [ "Maledizione!" ],
                                                        EN: [ "Damn!" ]
                                                    }
                                                ],
                                                encore1:[
                                                    {
                                                        IT:[ "Chi pensava che fosse finita avrebbe fatto meglio a ripensarci." ],
                                                        EN:[ "Anyone who thought it was over had better think again." ]
                                                    },{
                                                        IT:[ "Avremmo dovuto dare retta a quella Veggente!" ],
                                                        EN:[ "We should have listened to that Seer!" ]
                                                    },{
                                                        IT:[ "Tutta colpa di quella vecchia Mappa Maledetta!" ],
                                                        EN:[ "It's all the fault of that old Cursed Map!" ]
                                                    }
                                                ],
                                                blocked1:[
                                                    {
                                                        IT:[ "Siamo bloccati qui, nel profondo di questo luogo infernale," ],
                                                        EN:[ "We're stuck here, deep down in this infernal place," ]
                                                    },{
                                                        IT:[ "Ci siamo persi in queste segrete," ],
                                                        EN:[ "We got lost in these dungeons," ]
                                                    },{
                                                        IT:[ "Eccoci nel freddo e nel buio," ],
                                                        EN:[ "Here we are in the cold and in the dark," ]
                                                    }
                                                ],
                                                blocked2:[
                                                    {
                                                        IT:[ "dove la nostra luce brilla a fatica e l'Oscurit&agrave; nasconde le sue bestie pi&ugrave; temibili." ],
                                                        EN:[ "where our light can hardly shine and the Darkness keeps its greatest beasts armed to the teeth." ]
                                                    },{
                                                        IT:[ "pronti per diventare cibo per le bestie che si aggirano per questo labirinto." ],
                                                        EN:[ "ready to become food for the beasts that roam this labyrinth." ]
                                                    },{
                                                        IT:[ "a combattere le nostre paure con le poche forze rimaste." ],
                                                        EN:[ "to fight our fears with the little strength left." ]
                                                    }
                                                ],
                                                encore2:[
                                                    {
                                                        IT:[ "Gi&agrave;... sta per mettersi male quaggi&ugrave;." ],
                                                        EN:[ "Yeah, it's about to get ugly down here." ]
                                                    },{
                                                        IT:[ "Non eravamo pronti ad affrontare tutto questo..." ],
                                                        EN:[ "We weren't ready to face all this..." ]
                                                    },{
                                                        IT:[ "Ma non c'&egrave; tempo per rimuginare." ],
                                                        EN:[ "But there's no time to brood." ]
                                                    }
                                                ],
                                                better:[
                                                    {
                                                        IT:[ "Sar&agrave; meglio {label.passage@0} {label.passage@1} {label.passage@2} che abbiamo trovato... e in fretta!" ],
                                                        EN:[ "We'd better {label.passage@0} {label.passage@1} {label.passage@2} we've found... and fast!" ]
                                                    },{
                                                        IT:[ "Dobbiamo sbrigarci a {label.passage@0} {label.passage@1} {label.passage@2}!" ],
                                                        EN:[ "We have to hurry to {label.passage@0} {label.passage@1} {label.passage@2}!" ]
                                                    },{
                                                        IT:[ "Possiamo solo provare a {label.passage@0} {label.passage@1} {label.passage@2}... Non c'&egrave; tempo da perdere!" ],
                                                        EN:[ "We can only try to {label.passage@0} {label.passage@1} {label.passage@2}... There is no time to lose!" ]
                                                    }
                                                ],
                                                passage:[
                                                    {
                                                        IT:[ "sbloccare", "quel", "passaggio segreto", "Passaggio Segreto", "il", "un", "nella Zona del Passaggio Segreto", "&egrave; bloccato", "attraverso di esso", "Per aprirlo", "&egrave; aperto", "aprire", "situato" ],
                                                        EN:[ "unlock", "that", "secret passage", "Secret Passage", "the", "a", "in the Secret Passage Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ]
                                                    },{
                                                        IT:[ "sbloccare", "quella", "botola nascosta", "Botola Nascosta", "la", "una", "nella Zona della Botola Nascosta", "&egrave; bloccata", "attraverso di essa", "Per aprirla", "&egrave; aperta", "aprire", "situata" ],
                                                        EN:[ "unlock", "that", "hidden trap door", "Hidden Trap Door", "the", "a", "in the Hidden Trap Door Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ]
                                                    },{
                                                        IT:[ "sbloccare", "quel", "passaggio per le fogne", "Passaggio per le Fogne", "il", "un", "nella Zona del Passaggio per le Fogne", "&egrave; bloccato", "attraverso di esso", "Per aprirlo", "&egrave; aperto", "aprire", "situato" ],
                                                        EN:[ "unlock", "that", "passage through the sewers", "Passage through the Sewers", "the", "a", "in the Passage through the Sewers Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ]
                                                    }
                                                ],
                                                door:[
                                                    {
                                                        IT:[ "Porta di Pietra", "Porte di Pietra", "la", "le", "vengono sbloccate", "sono bloccate", "e possono essere aperte", "sbloccare" ],
                                                        EN:[ "Stone Door", "Stone Doors", "the", "the", "get unlocked", "are locked", "and may be opened", "unlock" ]
                                                    },{
                                                        IT:[ "Muro di Fuoco", "Muri di Fuoco", "il", "i", "vengono disattivati", "non possono essere attraversate", "diventando porte che possono essere aperte", "disattivare" ],
                                                        EN:[ "Fire Wall", "Fire Walls", "the", "the", "get deactivated", "can't be passed", "become doors that can be opened", "deactivate" ]
                                                    },{
                                                        IT:[ "Sbarre di Metallo", "Sbarre di Metallo", "le", "le", "vengono abbassate", "non possono essere attraversate", "diventando porte che possono essere aperte", "disattivare" ],
                                                        EN:[ "Metal Bars", "Metal Bars", "the", "the", "are lowered", "can't be passed", "become doors that can be opened", "deactivate" ]
                                                    }
                                                ],
                                                key:[
                                                    {
                                                        IT:[ "Chiave di Pietra", "Chiavi di Pietra", "la", "le", "in una zona con una Chiave di Pietra", "di una", "per usarla", "per raccoglierla" ],
                                                        EN:[ "Keystone", "Keystones", "the", "the", "in a Zone with a Keystone", "a", "to use it", "to pick it up" ]
                                                    },{
                                                        IT:[ "Gemma Cromata", "Gemme Cromate", "la", "le", "in una zona con una Gemma Cromata", "di una", "per usarla", "per raccoglierla" ],
                                                        EN:[ "Chrome Gem", "Chrome Gems", "the", "the", "in a Zone with a Chrome Gem", "a", "to use it", "to pick it up" ]
                                                    },{
                                                        IT:[ "Pezzo del Puzzle", "Pezzi del Puzzle", "il", "i", "in una zona con un Pezzo del Puzzle", "di un", "per usarlo", "per raccoglierlo" ],
                                                        EN:[ "Puzzle Piece", "Puzzle Pieces", "the", "the", "in a Zone with a Puzzle Piece", "a", "to use it", "to pick it up" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.key:capital@3} {label.key:capital@1}"
                                        },{
                                            EN:"{label.passage:capital@1} {label.passage@3}"
                                        },{
                                            EN:"{label.door:capital@3} {label.door@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.situation@0} {label.encore1@0} {label.blocked1@0} {label.blocked2@0} {label.encore2@0} {label.better@0}"
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
                                                        IT:"{label.door:capital@7} {label.door@3} {label.door@1}",
                                                        EN:"{label.door:capital@7} {label.door@3} {label.door@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Rivelare tutte le Camere nella tessera iniziale ({tileLabel.first})",
                                                        EN:"Reveal all Chambers in the starting Tile ({tileLabel.first})"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Collezionare {label.key@3} {label.key@1}",
                                                        EN:"Collect {label.key@3} {label.key@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.key@3} {label.key@1}",
                                                        EN:"Pick up {label.key@3} {label.key@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"{label.passage:capital@11} {label.passage@4} {label.passage@3}",
                                                        EN:"{label.passage:capital@11} {label.passage@4} {label.passage@3}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.key@3} {label.key@1} nei luoghi indicati",
                                                        EN:"Use {label.key@3} {label.key@1} in the indicated locations"
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
                                                        IT:"Scappare attraverso {label.passage@4} {label.passage@3}",
                                                        EN:"Escape through {label.passage@4} {label.passage@3}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Rinforzi dell'Oscurit&agrave;",
                                                        EN:"Reinforcements of Darkness"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni segnalino Corruzione {symbol.corruptionToken} rappresenta una Zona di generazione dei Mostri Errante e non &egrave; influenzato dalle carte Porta. Quando la sua Camera viene rivelata, oltre alla generazione regolare, generare un Mostro Errante nella Zona dei gettoni Corruzione, quindi scartare il segnalino.",
                                                        EN:"Each Corruption token {symbol.corruptionToken} represents a Roaming Monster spawn Zone and is not affected by Door cards. When its Chamber is revealed, in addition to the regular spawn, spawn a Roaming Monster in the Corruption token Zone, then discard the token."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.door:capital@3} {label.door@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le porte contrassegnate da un contorno rosso rappresentano {label.door@3} {label.door@1}. Queste porte {label.door@5}. Non appena tutte le Camere nella Tessera iniziale ({tileLabel.first}) sono state rivelate, {label.door@3} {label.door@1} {label.door@4} {label.door@6} come solito.",
                                                        EN:"The doors marked with a red outline represent {label.door@3} {label.door@1}. These doors {label.door@5}. As soon as all Chambers in the starting Tile ({tileLabel.first}) have been revealed, {label.door@3} {label.door@1} {label.door@4} and {label.door@6} as usual."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.key:capital@3} {label.key@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.key@3} {label.key@1}. Qualsiasi Eroe che si trova {label.key@4} pu&ograve; spendere 1 PM {label.key@7}.",
                                                        EN:"The color-side-up Objective tokens represent {label.key@3} {label.key@1}. Any Hero standing {label.key@4} may spend 1 MP {label.key@7}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.passage:capital@4} {label.passage@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"C'&egrave; {label.passage@5} {label.passage@3} che conduce fuori da questo Dungeon, {label.passage@12} nella Zona con il segnalino Tempo {symbol.timeToken} in una Camera della Tessera iniziale ({tileLabel.first}), ma {label.passage@7}. {label.passage@9}, gli Eroi devono usare {label.key@3} {label.key@1} nei posti corretti, indicate dai segnalini Obiettivo grigi. Per farlo, un qualsiasi Eroe in possesso {label.key@5} {label.key@0} e che si trova in una zona con un segnalino obiettivo grigio, pu&ograve; spendere 1 PM {label.key@6} (scartare sia il segnalino Obiettivo sul lato grigio che quello sul lato colorato). Non appena tutti i segnalini Obiettivo grigi sono stati rimossi, {label.passage@4} {label.passage@3} {label.passage@10}.",
                                                        EN:"There is {label.passage@5} {label.passage@3} that leads out of this Dungeon, {label.passage@12} in the Zone with the Time token {symbol.timeToken} of a Chamber of the starting Tile ({tileLabel.first}), but {label.passage@7}. {label.passage@9}, the Heroes must use {label.key@3} {label.key@1} in the correct locations, indicated by the gray Objective tokens. To do so, any Hero holding {label.key@5} {label.key@0} and standing in a gray Objective token Zone may spend 1 MP {label.key@6} (discard both gray and color-side-up Objective tokens). As soon as all gray Objective tokens have been removed, {label.passage@4} {label.passage@3} {label.passage@10}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"Escape"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta che {label.passage@4} {label.passage@3} {label.passage@10}, qualsiasi Eroe che si trova {label.passage@6} pu&ograve; fuggire {label.passage@8} spendendo 1 PM. Una volta che tutti gli Eroi sono fuggiti, la Missione termina con una vittoria.",
                                                        EN:"Once {label.passage@4} {label.passage@3} {label.passage@10}, any Hero standing {label.passage@6} may escape {label.passage@8} by spending 1 MP. Once all Heroes have escaped, the Mission ends in victory."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "unlockAndEscape" ],
                                            gameMode: [ "unlockAndEscape" ],
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
                        {
                            type:"defuse",
                            by:{
                                IT:"Ispirato alla Web Quest \"Glacial Inferno\"",
                                EN:"Inspired by the Web Quest \"Glacial Inferno\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                hazard:[
                                                    {
                                                        IT:[ "frost", "{symbol.frostToken}", "di ghiaccio...", "ghiacciato", "glaciale", "Trappole di Ghiaccio", "incubo ghiacciato", "Corruzione del Gelo", "scongelare", "ghiacciati", "rompere il ghiaccio", "ghiacciate", "glaciali" ],
                                                        EN:[ "frost", "{symbol.frostToken}", "of ice...", "frozen", "glacial", "Ice Traps", "frost nightmare", "Ice Corruption", "unfreeze", "frozen", "break the ice", "frozen", "glacial" ]
                                                    },{
                                                        IT:[ "fire", "{symbol.fireToken}", "di fuoco...", "ardente", "fiammeggiante", "Trappole di Fuoco" , "incubo fiammeggiante", "Corruzione del Fuoco", "estinguere", "ardenti", "estinguere il fuoco", "ardenti", "fiammeggianti" ],
                                                        EN:[ "fire", "{symbol.fireToken}", "of fire...", "burning", "flaming", "Fire Traps" , "burning nightmare", "Fire Corruption", "extinguish", "burning", "extinguish the fire", "burning", "flaming" ]
                                                    }
                                                ],
                                                time:[
                                                    {
                                                        IT:[ "Ora che l'Oscurit&agrave; &egrave; stata contenuta e sconfitta,"],
                                                        EN:[ "With Darkness contained and defeated," ]
                                                    },{
                                                        IT:[ "La missione &egrave; compiuta e"],
                                                        EN:[ "The mission is accomplished and" ]
                                                    },{
                                                        IT:[ "Tutto &egrave; andato a rotoli e"],
                                                        EN:[ "Everything is gone to pieces and" ]
                                                    }
                                                ],
                                                placeLeave:[
                                                    {
                                                        IT:[ "gli Eroi devono abbandonare l'Inferno", "Inferno", "Inferno", "dall'Inferno" ],
                                                        EN:[ "the Heroes now must leave Hell", "Hell", "Inferno", "the Hell" ]
                                                    },{
                                                        IT:[ "gli Eroi devono fuggire dal Labirinto", "Labirinto", "Dedalo", "dal Labirinto" ],
                                                        EN:[ "the Heroes must escape from the Maze", "Maze", "Labyrinth", "the Labyrinth" ]
                                                    },{
                                                        IT:[ "gli Eroi devono svignarsela dal Tempio", "Tempio", "Cattetrale", "dal Tempio" ],
                                                        EN:[ "the Heroes must escape from the Temple", "Temple", "Cathedral", "the Temple" ]
                                                    }
                                                ],
                                                placeThrough:[
                                                    {
                                                        IT:[ "attraverso un angolo dimenticato e {label.hazard@4} di questo posto." ],
                                                        EN:[ "through a forgotten and {label.hazard@3} corner of this place." ]
                                                    },{
                                                        IT:[ "attraversando i suoi corridoi, ora {label.hazard@9}." ],
                                                        EN:[ "crossing its corridors, now {label.hazard@9}." ]
                                                    },{
                                                        IT:[ "superando le sue {label.hazard@5}." ],
                                                        EN:[ "surpassing its {label.hazard@5}." ]
                                                    }
                                                ],
                                                exitPlace:[
                                                    {
                                                        IT:[ "L'uscita si nasconde dietro" ],
                                                        EN:[ "The exit lies behind" ]
                                                    },{
                                                        IT:[ "Tra gli Eroi e la libert&agrave; si ergono" ],
                                                        EN:[ "Between the Heroes and freedom stands" ]
                                                    },{
                                                        IT:[ "Ad attenderli ci sono" ],
                                                        EN:[ "Waiting for them, there are" ]
                                                    }
                                                ],
                                                exitAppearance:[
                                                    {
                                                        IT:[ "decine e decine di strati" ],
                                                        EN:[ "dozen of layers" ]
                                                    },{
                                                        IT:[ "muri invalicabili" ],
                                                        EN:[ "impassable walls" ]
                                                    },{
                                                        IT:[ "imponenti colonne" ],
                                                        EN:[ "imposing columns" ]
                                                    }
                                                ],
                                                holes:[
                                                    {
                                                        IT:[ "i Geyser", "geyser", "il Geyser", "un Geyser", "i", "{label.hazard@9}", "riattivato" ],
                                                        EN:[ "the Geysers", "geysers", "the Geyser", "a Geyser" ]
                                                    },{
                                                        IT:[ "gli Interruttori", "interruttori", "l'Interruttore", "un Interruttore", "i", "{label.hazard@9}", "riattivato" ],
                                                        EN:[ "the Switches", "switches", "the Switch", "a Switch" ]
                                                    },{
                                                        IT:[ "le Leve", "leve", "la Leva", "una Leva", "le", "{label.hazard@11}", "riattivata" ],
                                                        EN:[ "the Lever", "levers", "the Lever", "a Lever" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"{label.placeLeave@2} {label.hazard@4}",
                                            EN:"{label.hazard@4} {label.placeLeave@2}"
                                        },{
                                            IT:"{label.holes:capital@0} {label.holes:capital@5}",
                                            EN:"{label.hazard@9} {label.holes:capital@1}"
                                        },{
                                            IT:"Fuga {label.placeLeave:capital@3}",
                                            EN:"Escape From {label.placeLeave:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.time@0} {label.placeLeave@0} {label.placeThrough@0} {label.exitPlace@0} {label.exitAppearance@0} {label.hazard@2}"
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
                                                        EN:"{label.hazard:capital@8} {label.holes@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Riattivare {label.holes@4} {tokensCount.objective} {label.holes:capital@1} {label.holes:capital@5}",
                                                        EN:"Activate the {tokensCount.objective} {label.hazard:capital@9} {label.holes:capital@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire {label.placeLeave@3} {label.hazard:capital@3}",
                                                        EN:"Escape the {label.hazard:capital@3} {label.placeLeave@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Fuggire con tutti gli Eroi",
                                                        EN:"Escape with all Heroes"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.hazard@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, posiziona 1 segnalino {label.hazard@1} su ciascuna Trappola con Spuntoni nel Dungeon. Oltre all'effetto della Trappola con Spuntoni, l'Eroe che l'ha attivata prende il segnalino {label.hazard@1} (anche non ha subito alcuna ferita).",
                                                        EN:"During Setup, place 1{label.hazard@1} token on each Spike Trap in the Dungeon. In addition to the Spike Trap effect, the Hero who activated it takes the {label.hazard@1} token (even if they took no Wounds)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.holes:capital@1} {label.holes:capital@5}",
                                                        EN:"{label.hazard:capital@11} {label.holes:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato verso l'alto rappresentano {label.holes@3} {label.hazard:capital@3}. Qualsiasi Eroe che si trova in una Zona con questi segnalini Obiettivo pu&ograve; spendere 1 azione per {label.hazard@10} e riattivare {label.holes@2}. Quando {label.holes@3} viene {label.holes@6}, rimuovi il segnalino dal Dungeon e ogni Eroe guadagna 5 PE.",
                                                        EN:"The color-side-up Objective tokens represent {label.hazard:capital@3} {label.holes:capital@1}. Any Hero standing in a Zone with these Objective tokens may spend 1 action to {label.hazard@10} and awake {label.holes@2}. When {label.holes@3} is awakened, remove the token from the Dungeon and each Hero gains 5 XP."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Porte {label.hazard:capital@11}",
                                                        EN:"{label.hazard:capital@11} Doors"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le porte con il bordo rosso non possono essere aperte finch&eacute; non rimane solo 1 segnalino Obiettivo con il lato colorato rivolto verso l'alto nel Dungeon. Non appena nel Dungeon rimane solo 1 segnalino Obiettivo con il lato colorato rivolto verso l'alto, le porte possono essere aperte normalmente.",
                                                        EN:"The doors with a red border can't be opened until there is just 1 color-side-up Objective token left on the Dungeon. As soon as there is just 1 color-side-up Objective token left on the Dungeon the doors can be opened as usual."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri {label.hazard:capital@12}",
                                                        EN:"{label.hazard:capital@12} Monsters"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I mostri sembrano essersi adattati a questo {label.hazard@6}. Durante questa Missione, segui queste regole speciali per i nemici:<ul>"+
                                                        "<li>I nemici non possono prendere segnalini {label.hazard@1}.</li>"+
                                                        "<li>Quando generi un Nemico, posiziona 1 segnalino {label.hazard@1} sulla sua arma o sulla sua statistica dei dadi di Attacco. La prima volta che un Nemico infligge 1 o pi&ugrave; Ferite a un Eroe, quell'Eroe prende il segnalino {label.hazard@1} di quel Nemico.</li>"+
                                                        "</ul>",
                                                        EN:"Monsters seem to have adapted themselves to this {label.hazard@6}. During this Mission, follow these special rules for Enemies:<ul>"+
                                                        "<li>Enemies can't take {label.hazard@1} tokens.</li>"+
                                                        "<li>When spawning an Enemy, place 1{label.hazard@1} token on its weapon or Attack dice stat. The first time an Enemy deals 1 or more Wounds to a Hero, that Hero takes this Enemy's {label.hazard@1} token.</li>"+
                                                        "</ul>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.hazard@7}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando la Camera con il token {symbol.corruptionToken} viene rivelata, genera un Mostro Errante nella Zona del segnalino {symbol.corruptionToken}, quindi rimuovi il segnalino dal Dungeon. Non pescare una carta Porta per questa Camera, ma genera le Orde come di solito.",
                                                        EN:"When the Chamber with the {symbol.corruptionToken} token is revealed, spawn a Roaming Monster in the {symbol.corruptionToken} token Zone, then remove the token from the Dungeon. Do not draw a Door card for this Chamber, but spawn Mobs as usual."
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
                                                        IT:"Qualsiasi Eroe nella Zona del segnalino Obiettivo grigio pu&ograve; spendere 1 PM per uscire dal Dungeon. Una volta che tutti gli Eroi sono usciti, la Missione termina con la vittoria.",
                                                        EN:"Any Hero on the gray Objective token Zone may spend 1 MP to exit the Dungeon. Once all Heroes have exited, the Mission ends in victory."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom" ],
                                            gameMode: [ "adventureAndBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "elementalTrapExit" ],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type:"shards",
                            by:{
                                IT:"Ispirato alla Web Quest \"Heaven's Secret Door\"",
                                EN:"Inspired by the Web Quest \"Heaven's Secret Door\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                purpose:[
                                                    {
                                                        IT:[ "Gli eroi stavano cercando un modo per tornare in superficie quando" ],
                                                        EN:[ "As the heroes try to find their way to the surface," ]
                                                    },{
                                                        IT:[ "Gli eroi erano caduti in trappola e non avevamo via di scampo, ma ad un tratto" ],
                                                        EN:[ "The heroes had fallen into a trap and they had no escape, but suddenly" ]
                                                    },{
                                                        IT:[ "Il ponte che dava verso l'uscita era crollato e per gli eroi non c'era via di scampo. Ma, d'improvviso," ],
                                                        EN:[ "The bridge leading to the exit had collapsed and there was no escape for the heroes. But, suddenly," ]
                                                    }
                                                ],
                                                gate:[
                                                    {
                                                        IT:[ "un portale apparve di fronte a loro."],
                                                        EN:[ "a portal appeared in front of them." ]
                                                    },{
                                                        IT:[ "un'ombra apparve dietro una grata."],
                                                        EN:[ "a portal appeared in front of them." ]
                                                    },{
                                                        IT:[ "videro qualcosa muoversi dietro le macerie di un passaggio crollato."],
                                                        EN:[ "they saw something move behind the rubble of a collapsed passage." ]
                                                    }
                                                ],
                                                missionVoiceEvent:[
                                                    {
                                                        IT:[ "Presto! Non c'&egrave; tempo da perdere!"],
                                                        EN:[ "Quickly! There is no time!" ]
                                                    },{
                                                        IT:[ "Hey, voi! Ascoltatemi!"],
                                                        EN:[ "Hey, you! Listen to me!" ]
                                                    },{
                                                        IT:[ "Vi ho trovato, finalmente! Ascoltate!"],
                                                        EN:[ "I found you, finally! Listen!" ]
                                                    }
                                                ],
                                                missionVoicePassage:[
                                                    {
                                                        IT:[ "Sto cercando di aprire questo passaggio perch&egrave; voi possiate raggiungerci!" ],
                                                        EN:[ "I'm trying to open this passage so you can reach us!" ]
                                                    },{
                                                        IT:[ "Prover&ograve; ad aprire questo passaggio e farvi uscire da qui!" ],
                                                        EN:[ "I'll try to open this passage and get you out of here!" ]
                                                    },{
                                                        IT:[ "Cercher&ograve; di aprire questo passaggio per voi..." ],
                                                        EN:[ "I'll try to open this passage for you..." ]
                                                    }
                                                ],
                                                missionVoicePlot:[
                                                    {
                                                        IT:[ "Ma ho bisogno del vostro aiuto per ricomporre {label.artifact@1}, ora in frantumi." ],
                                                        EN:[ "But I will need your help to reforge {label.artifact@1} that has had {label.shard@6} and pieces scattered." ]
                                                    },{
                                                        IT:[ "Ma non lo far&ograve; senza nulla in cambio. Portatemi {label.artifact@1}... dovrete ricostruirlo riunendo {label.shard@6}!" ],
                                                        EN:[ "But I won't do it with nothing in return. Bring me {label.artifact@1}... you'll have to rebuild it from {label.shard@6}!" ]
                                                    },{
                                                        IT:[ "Ma ho bisogno che prima voi riuniate {label.shard@1} per ricomporre {label.artifact@1}!" ],
                                                        EN:[ "But I need you to collect {label.shard@1} to rebuild {label.artifact@1} first!" ]
                                                    }
                                                ],
                                                missionVoice:[
                                                    {
                                                        IT:[ "Dall'altra parte sentirono una voce: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoicePlot@0}\""],
                                                        EN:[ "From the other side, they hear a voice: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoicePlot@0}\"" ]
                                                    },{
                                                        IT:[ "Qualcuno dall'altra parte bisbigli&ograve;: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoicePlot@0}\""],
                                                        EN:[ "Someone on the other end whispered: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoicePlot@0}\"" ]
                                                    },{
                                                        IT:[ "Poco dopo, sentirono una voce: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoicePlot@0}\""],
                                                        EN:[ "Shortly after, they heard a voice: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoicePlot@0}\"" ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        EN:[ "{label.missionVoice@0}" ]
                                                    }
                                                ],
                                                artifact:[
                                                    {
                                                        IT:[ "l'Artefatto", "l'Artefatto Etereo", "l'artefatto", "dell'artefatto distrutto", "viene forgiato" ],
                                                        EN:[ "the Artifact", "the Ethereal Artifact", "the Ethereal Artifact", "the artifact", "of the destroyed artifact", "is forged" ]
                                                    },{
                                                        IT:[ "il Pendente", "il Pendente di Giada", "il pendente", "del pendente distrutto", "viene forgiato" ],
                                                        EN:[ "the Pendant", "the Jade Pendant", "the pendant", "of the destroyed pendant", "is forged" ]
                                                    },{
                                                        IT:[ "la Gemma", "la Gemma Scarlatta", "la gemma", "della gemma frantumata", "viene forgiata" ],
                                                        EN:[ "the Gem", "the Scarlet Gem", "the gem", "of the broken gem", "is forged" ]
                                                    }
                                                ],
                                                shard:[
                                                    {
                                                        IT:[ "Frammenti Arcani", "i Frammenti Arcani", "1 Frammento", "10 Frammenti", "10 Frammenti Arcani", "i Frammenti", "i suoi frammenti", "possono essere raccolti", "Frammenti Spezzati", "i Frammenti Spezzati" ],
                                                        EN:[ "Arcane Shards", "the Arcane Shards", "1 Shard", "10 Shards", "10 Sacred Shards", "the Shards", "its shards", "can be collected", "Broken Pieces", "the Broken Pieces" ]
                                                    },{
                                                        IT:[ "Schegge Solari", "le Schegge Solari", "1 Scheggia", "10 Schegge", "10 Schegge Solari", "le Schegge", "le sue schegge", "possono essere raccolte", "Schegge Cadute", "le Schegge Cadute" ],
                                                        EN:[ "Solar Shards", "the Solar Shards", "1 Shard", "10 Shards", "10 Solar Shards", "the Shards", "its shards", "can be collected", "Fallen Shards", "the Fallen Shards" ]
                                                    },{
                                                        IT:[ "Scaglia Ambrata", "le Scaglie Ambrate", "1 Scaglia", "10 Scaglie", "10 Scaglie Ambrate", "le Scaglie", "le sue scaglie", "possono essere raccolte", "Scaglie Perdute", "le Scaglie Perdute" ],
                                                        EN:[ "Amber Scale", "the Amber Scales", "1 Scale", "10 Scales", "10 Amber Scales", "the Scales", "its scales", "can be collected", "Lost Scales", "the Lost Scales" ]
                                                    }
                                                ],
                                                forge:[
                                                    {
                                                        IT:[ "Forgia Magica", "la Zona della Forgia Magica", "la Forgia Magica", "Forgia del Fuoco Magico", "sulla Zona della Forgia Magica", "sulla Forgia Magica" ],
                                                        EN:[ "Magic Forge", "the Magic Forge Zone", "the Magic Forge", "Forge with Magic Fire", "on the Magic Forge Zone", "on the Magic Forge" ]
                                                    },{
                                                        IT:[ "Forgia Leggendaria", "la Zona della Forgia Leggendaria", "la Forgia Leggendaria", "Forgia del Fuoco Leggendario", "sulla Zona della Forgia Leggendaria", "sulla Forgia Leggendaria" ],
                                                        EN:[ "Legendary Forge", "the Legendary Forge Zone", "the Legendary Forge", "Forge with the Fire of the Legends", "on the Legendary Forge Zone", "on the Legendary Forge" ]
                                                    },{
                                                        IT:[ "Forgia Dimenticata", "la Zona della Forgia Dimenticata", "la Forgia Dimenticata", "Forgia del Fuoco Dimenticato", "sulla Zona della Forgia Dimenticata", "sulla Forgia Dimenticata" ],
                                                        EN:[ "Forgotten Forge", "the Forgotten Forge Zone", "the Forgotten Forge", "Forge with the Forgotten Fire", "on the Forgotten Forge Zone", "on the Forgotten Forge" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.shard:capital@1}"
                                        },{
                                            EN:"{label.forge:capital@2}"
                                        },{
                                            EN:"{label.artifact:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.purpose@0} {label.gate@0} {label.mission@0}"
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
                                                        EN:"{label.shard@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere almeno {label.shard@4}",
                                                        EN:"Collect at least {label.shard@4}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.forge@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.shard@5} per forgiare {label.artifact@0} tramite {label.forge@2}",
                                                        EN:"Use {label.shard@5} to forge {label.artifact@0} at the {label.forge@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.shard@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.shard:capital@1} {label.shard@7} dai nemici. Ogni volta che un Eroe uccide un Mostro Errante o un Generale, lancia 2{symbol.blackDie}. Per ogni {symbol.fang} risultante, gli Eroi guadagnano {label.shard@2}. Posiziona dei segnalini Salute {label.forge@5} per tenere traccia dei frammenti raccolti.",
                                                        EN:"{label.shard:capital@1} {label.shard@7} from the Enemies. Every time a Hero kills a Roaming Monster or a Leader, they roll 2{symbol.blackDie}. For each {symbol.fang} rolled, the Heroes gain {label.shard@2}. Place Health tokens {label.forge@5} to keep track of the collected Shards."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.shard@8}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato colorato rappresentano {label.shard@9}, che sono le parti pi&ugrave; grandi {label.artifact@3}. Qualsiasi Eroe che si trova in una Zona con un segnalino Obiettivo sul lato colorato pu&ograve; spendere 1 azione per scartare il segnalino Obiettivo e raccogliere {label.shard@2}.",
                                                        EN:"Color-side-up Objective tokens represent {label.shard@9}, which are the biggest parts {label.artifact@3}. Any Hero standing on a color-side-up Objective token Zone may spend 1 action to discard the Objective token and collect {label.shard@2}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.forge:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Zona con un gettone Obiettivo grigio &egrave; {label.forge@1}. Una volta che gli Eroi hanno raccolto collettivamente almeno {label.shard@3}, qualsiasi Eroe {label.forge@4} pu&ograve; spendere 1 azione per Forgiare {label.artifact@1}. Non appena {label.artifact@2} {label.artifact@4}, la Missione termina con la vittoria.",
                                                        EN:"The Zone with a gray Objective token is {label.forge@1}. Once the Heroes collectively gathered at least {label.shard@3}, any Hero standing {label.forge@4} may spend 1 action to Forge {label.artifact@1}. As soon as {label.artifact@2} {label.artifact@4}, the Mission ends in victory."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom" ],
                                            gameMode: [ "collectAndForge" ],
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
                        {
                            type:"corruption",
                            by:{
                                IT:"Ispirato alla Web Quest \"Hello, Darkness!\"",
                                EN:"Inspired by the Web Quest \"Hello, Darkness!\""
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                from:[
                                                    {
                                                        IT:[ "Gli Eroi hanno trovato un portale in grado di trasportarli", "i portali", "un portale come questo" ],
                                                        EN:[ "The Heroes have found a portal that leads", "portals", "such portals" ]
                                                    },{
                                                        IT:[ "Gli Eroi stringevano in mano la Pergamena Arcana che li avrebbe portati", "le Pergamene Arcane", "una pergamena come questa" ],
                                                        EN:[ "The Heroes held in their hands the Arcane Scroll that would bring them", "Arcane Scrolls", "such scrolls" ]
                                                    },{
                                                        IT:[ "La Mappa Oscura indicava il passaggio li avrebbe portati", "le Mappe Oscure", "una mappa come questa" ],
                                                        EN:[ "The Dark Map indicated the passage would take them", "Dark Maps", "such maps" ]
                                                    }
                                                ],
                                                to:[
                                                    {
                                                        IT:[ "all'interno del castello, direttamente dalle profondit&agrave; della foresta." ],
                                                        EN:[ "straight to the castle directly from the depths of the woods." ]
                                                    },{
                                                        IT:[ "nelle segrete della torre del mago." ],
                                                        EN:[ "to the dungeon of the wizard's tower." ]
                                                    },{
                                                        IT:[ "alla loro ultima battaglia." ],
                                                        EN:[ "to their last battle." ]
                                                    }
                                                ],
                                                forWho:[
                                                    {
                                                        IT:[ "Ma gli uomini normali non potrebbero usare {label.from@2}," ],
                                                        EN:[ "An ordinary man could not use {label.from@2}," ]
                                                    },{
                                                        IT:[ "Ma solo poche creature sono in grado di domare {label.from@2}," ],
                                                        EN:[ "But only a few creatures can tame {label.from@2}," ]
                                                    },{
                                                        IT:[ "Ma nessun essere umano riuscirebbe a resistere a {label.from@2}," ],
                                                        EN:[ "But no human being could resist {label.from@2}," ]
                                                    }
                                                ],
                                                if:[
                                                    {
                                                        IT:[ "perch&eacute; riuscirebbe a corrompere la sua anima fino al midollo."],
                                                        EN:[ "for it would corrupt their soul to the core." ]
                                                    },{
                                                        IT:[ "perch&eacute; ne risucchierebbe la vita in un attimo."],
                                                        EN:[ "for it would drain the life out of them in an instant." ]
                                                    },{
                                                        IT:[ "perch&eacute; ne trasformerebbe il corpo in pietra."],
                                                        EN:[ "for it would turn his body into stone." ]
                                                    }
                                                ],
                                                luck1:[
                                                    {
                                                        IT:[ "Fortunatamente, {label.specialOne@1} fa parte del gruppo," ],
                                                        EN:[ "Luckily, the party has {label.specialOne@1} amongst them," ]
                                                    },{
                                                        IT:[ "Ma {label.specialOne@1} fa parte del gruppo," ],
                                                        EN:[ "But {label.specialOne@1} is part of the party," ]
                                                    },{
                                                        IT:[ "Alla spedizione partecipa anche {label.specialOne@1}," ],
                                                        EN:[ "{label.specialOne:capital@1} also participates in the expedition," ]
                                                    }
                                                ],
                                                luck2:[
                                                    {
                                                        IT:[ "e {label.specialOne@0} sono in grado di manipolare e controllare {label.from@1}." ],
                                                        EN:[ "and {label.specialOne@0} can manipulate {label.from@1} to do their bidding." ]
                                                    },{
                                                        IT:[ "e {label.specialOne@0} sanno molto bene come controllare {label.from@1}." ],
                                                        EN:[ "and {label.specialOne@0} know very well how to control {label.from@1}." ]
                                                    },{
                                                        IT:[ "e {label.specialOne@0} studiano {label.from@1} da secoli." ],
                                                        EN:[ "and {label.specialOne@0} have been studying {label.from@1} for centuries." ]
                                                    }
                                                ],
                                                specialOne:[
                                                    {
                                                        IT:[ "i Mezzi Demoni", "un Mezzo Demone", "l'Eroe Mezzo Demone", "Assorbire l'Oscurit&agrave;", "Portare a 7 il Potere Oscuro", "Potere Oscuro", "il \"Mezzo Demone\"", "dall'oscurit&agrave;", "il suo Potere Oscuro", "le fonti di Energia Oscura", "", "distruggerlo", "Assorbire l'Oscurit&agrave;", "Cumuli di Oscurit&agrave;", "il suo Potere Oscuro arriva a 7", "rappresentate" ],
                                                        EN:[ "Half-Demons", "a Half-Demon", "the Half-Demon Hero", "Absorb Darkness", "Reach 7 Darkness Power", "Darkness Power", "the \"Half-Demon\"", "from the Darkness", "their Darkness Power", "sources of Dark Energy", "", "destroy it", "Absorbing Darkness", "Beacons of Darkness", "Darkness Power reaches 7", "represented" ]
                                                    },{
                                                        IT:[ "i Figli del Bosco", "un Figlio del Bosco", "l'Eroe Figlio del Bosco", "Assorbire lo Spirito", "Portare a 7 lo Spirito Arboreo", "Spirito Arboreo", "il \"Figlio del Bosco\"", "dalle ombre", "il suo Spirito Arboreo", "le radici dello Spirito Arboreo", "", "raccoglierla", "Assorbire lo Spirito", "Radici dello Spirito", "il suo Spirito Arboreo arriva a 7", "rappresentate" ],
                                                        EN:[ "the Children of the Woods", "a Child of the Woods", "the Child of the Woods Hero", "Absorb the Spirit", "Reach 7 Arboreal Spirit", "Arboreal Spirit", "the \"Child of the Woods \"", "from the shadows", "his Arboreal Spirit", "the roots of the Arboreal Spirit", "", "harvest it", "Absorb the Spirit", "Roots of the Spirit", "his Arboreal Spirit reaches 7", "represented" ]
                                                    },{
                                                        IT:[ "gli Adepti del Cielo", "un Adepto del Cielo", "l'Eroe Adepto del Cielo", "Assorbire l'Essenza", "Portare a 7 l'Essenza Notturna", "Essenza Notturna", "l'\"Adepto del Cielo\"", "della notte", "la sua Essenza Notturna", "i globi di Essenza Notturna", "", "frantumarlo", "Assorbire l'Essenza Notturna", "Globi di Essenza Notturna", "la sua Essenza Notturna arriva a 7", "rappresentati" ],
                                                        EN:[ "the Sky Adepts", "a Sky Adept", "the Sky Adept Hero", "Absorb the Essence", "Reach 7 Night Essence", "Night Essence", "the \"Sky Adept\"", "from the night", "his Night Essence", "the orbs of Night Essence", "", "shatter it", "Absorb the Night Essence", "Orbs of Night Essence", "Night Essence reaches 7", "represented" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.from:capital@1}"
                                        },{
                                            EN:"{label.specialOne:capital@0}"
                                        },{
                                            EN:"{label.specialOne:capital@5}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.from@0} {label.to@0} {label.forWho@0} {label.if@0} {label.luck1@0} {label.luck2@0}"
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
                                                        EN:"{label.specialOne@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"{label.specialOne@4}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Scegli un Eroe che sia {label.specialOne@6}. Sar&agrave; in grado di assorbire l'energia {label.specialOne@7}. Ogni volta che un Eroe elimina un Generale o un Mostro Errante che si trova in una Zona di Ombra, {label.specialOne@2} subisce 1 ferita e fa avanzare di 1 {label.specialOne@8} (posiziona 1 segnalino {symbol.corruptionToken} sulla sua carta Eroe).",
                                                        EN:"Choose a Hero to be {label.specialOne@6}. They can absorb the energy {label.specialOne@7}. Every time any Hero kills a Leader or a Roaming Monster that is in a Shadow Zone, {label.specialOne@2} takes 1 Wound and advances {label.specialOne@8} by 1 (place 1{symbol.corruptionToken} token on their Hero Card)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@13}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.specialOne:capital@9} sono {label.specialOne@15} dai gettoni Obiettivo. Quando si trova in una Zona con un segnalino Obiettivo, {label.specialOne@2} pu&ograve; spendere 1 azione per {label.specialOne@11}. Subisce 1 Ferita e aumenta {label.specialOne@8} di 1 (posiziona 1 segnalino {symbol.corruptionToken} sulla sua Carta Eroe).",
                                                        EN:"{label.specialOne:capital@9} are {label.specialOne@15} by Objective tokens. When standing in a Zone with an Objective token, {label.specialOne@2} may spend 1 action to {label.specialOne@11}. They take 1 Wound and advance {label.specialOne@8} by 1 (place 1{symbol.corruptionToken} token on their Hero Card)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@12}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.specialOne@2} ha 7 gettoni Corruzione ({label.specialOne@14}), la Missione termina con la vittoria.",
                                                        EN:"As soon as {label.specialOne@2} has 7 Corruption tokens ({label.specialOne@14}), the Mission ends in victory."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode: [ "targetsSmall" ],
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