ModManager.modules.push(function(){

    return [
        {
            id:"campaign-default",
            needs:[ ],
            provides:[ "campaign-hidespoilers" ],
            label:{
                EN:"Hide spoilers on campaigns"
            },
            content:[
                {
                    type:"campaignGeneratorFlags",
                    data:{
                        hideSpoilers:true
                    }
                }
            ]
        },
        {
                id:"campaign-default",
                needs:[ ],
                provides:[ "campaign-default", "generator-campaign" ],
                label:{
                    EN:"Default data for campaigns"
                },
                content:[
                    {
                        type:"globalLabels",
                        data:{
                            campaignFooter:{
                                IT:"{campaign.name} &dash; Missioni",
                                EN:"{campaign.name} &dash; Missions",
                            },
                            campaignIndex:{
                                IT:"Indice",
                                EN:"Index"
                            },
                            campaignPage:{
                                IT:"Parte {campaign.page}/{campaign.pages}",
                                EN:"Part {campaign.page}/{campaign.pages}"
                            },
                            campaignMode:{
                                IT:"Modalit&agrave; Campagna",
                                EN:"Campaign Mode"
                            },
                            campaignPreparationTitle:{
                                EN:"Setup",
                                IT:"Preparazione"
                            },
                            campaignPreparation:{
                                EN:"Players must follow the preparation and Campaign rules described in <i>Massive Darkness 2: Heavenfall</i>. Each Mission lists any specific changes, special rules, and Campaign progression instructions.",
                                IT:"I giocatori devono seguire la preparazione e le regole della Campagna descritte in <i>Massive Darkness 2: Heavenfall</i>. Ogni Missione elenca eventuali cambiamenti specifici, regole speciali e istruzioni di progressione della Campagna."
                            },
                            campaignIndexTitle:{
                                EN:"Index",
                                IT:"Indice"
                            },
                            campaignIntroductionTitle:{
                                EN:"Introduction",
                                IT:"Introduzione"
                            },
                            campaignIndexFooter:{
                                EN:"{campaign.name} &dash; Rules",
                                IT:"{campaign.name} &dash; Regole"
                            },
                            campaignProgress:{
                                IT:"Progressione della Campagna",
                                EN:"Campaign Progress"
                            },
                            campaignNextMission:{
                                IT:"Prossima Missione:",
                                EN:"Next Mission:"
                            },
                            campaignVictoryCase:{
                                IT:"In caso di vittoria:",
                                EN:"In case of victory:"
                            },
                            campaignCongratulations:{
                                IT:"Congratulazioni!",
                                EN:"Congratulations!"
                            },
                            campaignAchievements:{
                                IT:"Traguardi",
                                EN:"Achievements"
                            },
                            campaignChallenge:{
                                IT:"Sfida del Vecchio Rosso",
                                EN:"The Red Old One Challenge"
                            },
                            campaignChallengeExplanation:{
                                IT:"Eroi, siete disposti a dimostrare il vostro valore ed accettare la mia sfida?",
                                EN:"Heroes, are you willing to prove your worth and accept my challenge?"
                            },
                            campaignChallengeReward:{
                                IT:"<b>Ricompensa (solo in caso di vittoria):</b>",
                                EN:"<b>Reward (only in case of victory):</b>"
                            },
                            campaignQuestPhase:{
                                IT:"Fase della Missione",
                                EN:"Quest phase"
                            },
                            campaignQuestPhaseDescription:{
                                IT:"<ul>"+
                                    "<li><b>Missioni Secondarie</b>: Alcune Missioni hanno una Missione secondaria elencata nella loro descrizione. Gli Eroi ottengono le ricompense delle Missioni Secondarie quando vincono la Missione corrente e completano anche la condizione della Missione Secondaria. Non ottengono le ricompense se la Missione termina con una sconfitta.</li>"+
                                    "<li><b>Le sfide del Vecchio Rosso</b>: Alcune Missioni hanno una sfida del Vecchio Rosso elencata nella loro descrizione. Gli eroi ottengono la ricompensa della sfida giocando la Missione corrente seguendo le regole della sfida e vincendo. Non ottengono le ricompense se la Missione termina con una sconfitta.</li>",
                                EN:"<ul>"+
                                    "<li><b>Side Quests</b>: Some Quests have a Side Quest listed in their description. Heroes claim the Side Quest rewards when they win the current Quest and also complete the Side Quest's condition. They do not claim the rewards if the Quest ends in defeat.</li>"+
                                    "<li><b>The Red Old One Challenges</b>: Some Quests have a Red Old One Challenge listed in their description. Heroes claim the challenge reward when they play the current Quest following the challenge rules and win. They do not claim the rewards if the Quest ends in defeat.</li>"
                            },
                            sideQuest:{
                                IT:"Missione Secondaria",
                                EN:"Side Quest"
                            },
                            sideQuestCondition:{
                                IT:"<b>Condizione:</b>",
                                EN:"<b>Condition:</b>"
                            },
                            sideQuestReward:{
                                IT:"<b>Ricompensa (solo in caso di vittoria):</b>",
                                EN:"<b>Reward (only in case of victory):</b>"
                            }
                        }
                    },{
                        type:"campaignLabels",
                        data:{
                            campaignBoss:{
                                IT:[
                                    "un Mostro Errante casuale di 2 ranghi al di sopra del rango di Mostro Errante attuale o un Mostro Errante di Livello 10 se non disponibile (esempio: se doveste pescare un Livello 3-4, pesca un Livello 6-7)",
                                    "Mostri Erranti casuali di 2 ranghi al di sopra del rango di Mostro Errante attuale o",
                                    "Mostri Erranti di Livello 10 se non disponibile (esempio: se doveste pescare un Livello 3-4, pesca un Livello 6-7)"
                                ],
                                EN:[
                                    "a Roaming Monster 2 ranks above the current Roaming Monster rank or a Level 10 Roaming Monster if not available (example: if you were to draw a Level 3-4, draw a Level 6-7)",
                                    "random Roaming Monsters 2 ranks above the current Roaming Monster rank or",
                                    "Level 10 Roaming Monsters if not available (example: if you were to draw a Level 3-4, draw a Level 6-7)"
                                ]
                            },
                            campaignEasyBoss:{
                                IT:[
                                    "un Mostro Errante casuale di 1 rango al di sopra del Livello del Dungeon <b>di partenza</b> o un Mostro Errante di Livello 10 se non disponibile (esempio: se il Livello del Dungeon di partenza era 3-4, generate un Mostro Errante di Livello 5)"
                                ],
                                EN:[
                                    "a Roaming Monster 1 rank above the Dungeon <b>starting</b> Level or a Level 10 Roaming Monster if not available (example: if the Dungeon stating Level was 3-4, generate a Level 5 Roaming Monster)"
                                ]
                            }
                        }
                    },{
                        type:"campaignCode",
                        data:[
                            {
                                code:{
                                    actionSameTime:(result)=>{
                                        return result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>1);
                                    },
                                    collectOptionalItems:(result)=>{
                                        if (result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>2)) {
                                            let
                                                allCollect = result.map.usedTokens.objective,
                                                leastCollect = Math.floor(allCollect*0.75),
                                                labels = result.labels["label.collectOptionalItems"];
                                            for (let k in labels) {
                                                labels[k][2] = leastCollect;
                                                labels[k][3] = allCollect;
                                            }
                                            return true;
                                        } else return false;
                                    },
                                    collectLessItems:(result)=>{
                                        if (result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>2)) {
                                            let
                                                allCollect = result.map.usedTokens.objective,
                                                leastCollect = Math.floor(allCollect*0.5),
                                                labels = result.labels["label.collectLessItems"];
                                            for (let k in labels)
                                                labels[k][2] = leastCollect;
                                            return true;
                                        } else return false;
                                    }
                                }
                            }
                        ]
                    },{
                        type:"campaignSideQuests",
                        data:[
                            {
                                tags:[ "visitAllRooms" ],
                                name:[
                                    {
                                        IT:"Guarda ovunque!",
                                        EN:"Look everywhere!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Forse, esplorando tutto il dungeon, troveremo qualcosa di utile!",
                                        EN:"Maybe, by exploring the entire dungeon, we will find something useful!"
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Rivelare <b>tutte</b> le Camere.",
                                        EN:"Reveal <b>all</b> the Rooms.",
                                    }
                                ]
                            },{
                                tags:[ "collectMoreItems" ],
                                name:[
                                    {
                                        IT:"Fare scorta!",
                                        EN:"Stock up!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a raccogliere pi&ugrave; {label.collectMoreItems@1} possono farne qualcosa di utile.",
                                        EN:"If the Heroes manage to collect more {label.collectMoreItems@1} they can do something useful with them."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione raccogliendo almeno {label.collectMoreItems@0} {label.collectMoreItems@2}.",
                                        EN:"Complete the Mission by collecting at least {label.collectMoreItems@0} {label.collectMoreItems@2}."
                                    }
                                ]
                            },{
                                tags:[ "collectAllItems" ],
                                name:[
                                    {
                                        IT:"Non lasciare nulla indietro!",
                                        EN:"Don't leave anything behind!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectAllItems@0} riusciranno ad avvantaggiarsi.",
                                        EN:"If the Heroes manage {label.collectAllItems@0} they will be able to gain an advantage."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectAllItems@1}.",
                                        EN:"Complete the Mission {label.collectAllItems@1}."
                                    }
                                ]
                            },{
                                tags:[ "collectOptionalItems" ],
                                if:"collectOptionalItems",
                                mods:[ "extraObjectives" ],
                                name:[
                                    {
                                        IT:"Non lasciare nulla indietro!",
                                        EN:"Don't leave anything behind!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectOptionalItems@0} riusciranno ad avvantaggiarsi.",
                                        EN:"If the Heroes manage {label.collectOptionalItems@0} they will be able to gain an advantage."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectOptionalItems@1}.",
                                        EN:"Complete the Mission {label.collectOptionalItems@1}."
                                    }
                                ]
                            },{
                                tags:[ "collectLessItems" ],
                                if:"collectLessItems",
                                name:[
                                    {
                                        IT:"Non sprecare nulla!",
                                        EN:"Don't waste anything!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectLessItems@0} avranno pi&ugrave; energie per trovare qualcosa di utile.",
                                        EN:"If the Heroes manage {label.collectLessItems@0} they will have more energy to find something useful."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectLessItems@1}.",
                                        EN:"Complete the Mission {label.collectLessItems@1}."
                                    }
                                ]
                            },{
                                tags:[ "actionSameTime" ],
                                if:"actionSameTime",
                                name:[
                                    {
                                        IT:"Sincronia!",
                                        EN:"Synchrony!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a collaborare e sincronizzarsi possono risparmiare tempo e guadagnare qualcosa di utile.",
                                        EN:"If Heroes manage to collaborate and synchronize they can save time and earn something useful."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"{label.actionSameTime@0} nello stesso round.",
                                        EN:"{label.actionSameTime@0} in the same round."
                                    }
                                ]
                            },{
                                tags:[ "eliminateEnemy" ],
                                name:[
                                    {
                                        IT:"Che la caccia abbia inizio!",
                                        EN:"Let the hunt begin!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Uno degli Eroi grida: &laquo;Lasciateli a me!&raquo;, gettandosi a capofitto nella mischia...",
                                        EN:"One of the Heroes shouts: &laquo;Leave them to me!&raquo;, throwing himself into the fray..."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Uno stesso Eroe deve uccidere {label.eliminateEnemy@0}.",
                                        EN:"The same Hero must kill {label.eliminateEnemy@0}."
                                    }
                                ]
                            },{
                                tags:[ "noLifebringer"],
                                name:[
                                    {
                                        IT:"Eroi immortali!",
                                        EN:"Immortal heroes!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"&Egrave; una questione di onore: nessun Eroe deve cadere!",
                                        EN:"It's a question of honor: no Hero must fall!"
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Non usare nessun segnalino Latore di Vita durante questa Missione.",
                                        EN:"Do not use any Lifebringer tokens during this Mission."
                                    }
                                ]
                            },{
                                tags:[ "keepItem"],
                                name:[
                                    {
                                        IT:"Non si tocca!",
                                        EN:"Don't touch it!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se l'Eroe che possiede {label.keepItem@0}, pu&ograve; lasciare ai compagni pi&ugrave; tempo per cercare meglio nei dintorni.",
                                        EN:"If the Hero with {label.keepItem@0}, it can give its companions more time to search the surroundings."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Non scambiare {label.keepItem@1} durante questa Missione.",
                                        EN:"Do not trade {label.keepItem@1} during this Mission."
                                    }
                                ]
                            },{
                                tags:[ "roundLimit" ],
                                name:[
                                    {
                                        IT:"Il tempo stringe!",
                                        EN:"Time is running out!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Gli Eroi devono sbrigarsi! Se riescono a risparmiare tempo possono usarlo per cercare qualcosa di utile.",
                                        EN:"The Heroes must hurry! If they can save time they can look for something useful."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Terminare la Missione prima della fine del round {label.roundLimit@0}.",
                                        EN:"Finish the Mission before the end of the round {label.roundLimit@0}."
                                    }
                                ]
                            },{
                                tags:[ "riskyInvestigation" ],
                                name:[
                                    {
                                        IT:"Sta tramando qualcosa!",
                                        EN:"It's up to something!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Gli Eroi devono scoprire il colpevole prima che riesca ad avvisare i suoi complici.",
                                        EN:"The Heroes must discover the culprit before it can warn its accomplices."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Terminare la Missione interrogando {label.riskyInvestigation@0} personaggi o meno.",
                                        EN:"Finish the Mission by interrogating {label.riskyInvestigation@0} characters or less."
                                    }
                                ]
                            },{
                                tags:[ "noDamage" ],
                                name:[
                                    {
                                        IT:"Intoccabile!",
                                        EN:"Untouchable!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a mantenere {label.noDamage@0} in salvo, forse possono ottenere qualcosa in cambio.",
                                        EN:"If the Heroes can keep {label.noDamage@0} safe, they may can get something in return."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"{label.noDamage:capital@1} non subisce nessuna Ferita durante la Missione.",
                                        EN:"{label.noDamage:capital@1} does not suffer any Wounds during the Mission."
                                    }
                                ]
                            },{
                                tags:[ "noDoor" ],
                                name:[
                                    {
                                        IT:"Una questione d'orgoglio!",
                                        EN:"A matter of pride!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"&laquo;Ci vediamo al punto stabilito!&raquo; gli Eroi si salutano poi con un cenno del capo.",
                                        EN:"&laquo;See you at the agreed point!&raquo; the Heroes then greet each other with a nod."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Ogni Eroe usa {label.noDoor@0}.",
                                        EN:"All Heroes only uses {label.noDoor@0}."
                                    }
                                ]
                            },{
                                tags:[ "spareItem" ],
                                name:[
                                    {
                                        IT:"Nessuno spreco!",
                                        EN:"No waste!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi {label.spareItem@0} possono farci qualcosa di utile.",
                                        EN:"If the Heroes {label.spareItem@0} they can do something useful with it."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Fare in modo che {label.spareItem@1}.",
                                        EN:"Make sure that {label.spareItem@1}."
                                    }
                                ]
                            },{
                                tags:[ "noInfection" ],
                                name:[
                                    {
                                        IT:"Nessun contagio!",
                                        EN:"No contagion!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.noInfection@0} forse possono risparmiare tempo e cercare qualcosa di utile nei dintorni.",
                                        EN:"If the Heroes can {label.noInfection@0} maybe they can save some time and search for something useful nearby."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.noInfection@1}.",
                                        EN:"Complete the Mission {label.noInfection@1}."
                                    }
                                ]
                            },{
                                tags:[ "noTraps" ],
                                name:[
                                    {
                                        IT:"Mettere in sicurezza!",
                                        EN:"Make it safe!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.noTraps@0}, forse possono chiedere una ricompensa.",
                                        EN:"If the Heroes manage to {label.noTraps@0}, perhaps they can claim a reward."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.noTraps@1}.",
                                        EN:"Complete the Mission {label.noTraps@1}."
                                    }
                                ]
                            },{
                                tags:[ "collectTime" ],
                                name:[
                                    {
                                        IT:"Tempo prezioso!",
                                        EN:"Precious time!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.collectTime@0}, forse possono sfruttarlo per cercare in giro.",
                                        EN:"If the Heroes manage to {label.collectTime@0}, maybe they can use it to search around."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectTime@1}.",
                                        EN:"Complete the Mission {label.collectTime@1}."
                                    }
                                ]
                            },{
                                tags:[ "teamwork" ],
                                name:[
                                    {
                                        IT:"Lavoro di squadra!",
                                        EN:"Teamwork!"
                                    }
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.teamwork@0}, dovrebbero avere pi&ugrave; tempo per guardarsi in giro...",
                                        EN:"If the Heroes manage to {label.teamwork@0}, they should have more time to look around..."
                                    }
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.teamwork@1}.",
                                        EN:"Complete the Mission {label.teamwork@1}."
                                    }
                                ]
                            }
                        ]
                    },{
                        type:"campaignRewards",
                        data:[
                            {
                                tags:[ "loot", "item", "itemQuality1" ],
                                description:{
                                    IT:"Pesca 1 carta dal  mazzo degli Oggetti dell'Orda corrispondente all'attuale Livello del Dungeon.",
                                    EN:"Draw 1 card from the Horde Item deck corresponding to the current Dungeon Level."
                                }
                            },{
                                tags:[ "loot", "item", "itemQuality2" ],
                                description:{
                                    IT:"Pesca 1 segnalino Tesoro dal sacchetto dei Tesori e pesca 1 carta oggetto Tesoro dal mazzo corrispondente.",
                                    EN:"Draw 1 Treasure token from the Treasure bag and draw 1 Treasure card from the corresponding deck."
                                }
                            },{
                                tags:[ "loot", "item", "itemQuality3" ],
                                description:{
                                    IT:"Pesca 2 segnalini Tesoro dal sacchetto dei Tesori, scegline uno e pesca 1 carta oggetto Tesoro dal mazzo corrispondente.",
                                    EN:"Draw 2 Treasure tokens from the Treasure bag, choose one, and draw 1 Treasure card from the corresponding deck."
                                }
                            },{
                                tags:[ "loot", "companion", "companionQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 17 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 17."
                                }
                            },{
                                tags:[ "loot", "companion", "companionQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 2 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 2."
                                }
                            },{
                                tags:[ "loot", "companion", "companionQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 24 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 24."
                                }
                            },
                            {
                                tags:[ "loot", "relic", "relicQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 11 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 11."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 26 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 26."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 21 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 21."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 8 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 8."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 25 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 25."
                                }
                            },{
                                tags:[ "loot", "relic", "relicQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 14 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 14."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 16 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 16."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 19 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 19."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 9 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 9."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 13 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 13."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 18 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 18."
                                }
                            },{
                                tags:[ "loot", "skill", "skillQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 23 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 23."
                                }
                            },{
                                tags:[ "loot", "placeImprovement", "placeImprovementA" ],
                                description:{
                                    IT:"Pesca la carta Campagna 22 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 22."
                                }
                            }
                            /*,{
                                // TODO Summoner ability (unsupported)
                                tags:[ "loot", "companionPower", "companionPowerQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 10 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 10."
                                }
                            }*/
                        ]
                    }
                ]
        },
        {
            id:"campaign",
            needs:[ ],
            provides:[ "generator-campaign" ],
            label:{
                EN:"Generates a campaign"
            },
            content:[
                {
                    type:"campaignProtectedNeeds",
                    data:[
                        "bridge-default-twoexits",
                        "bridge-default-fourexits",
                        "quests-mr-ending"
                    ]
                },
                {
                    type:"campaignFlags",
                    data:[
                        {
                            id:"place",
                            values:{
                                hellscape:{
                                    onlyNeeds:[ "md2-hellscape" ]
                                }
                            }
                        },
                        {
                            id:"mapSize",
                            default:"normal",
                            values:{
                                small:{
                                    needs:[ "maps-size-small" ],
                                    notNeeds:[ "maps-size-normal", "maps-size-large" ]
                                },
                                normal:{
                                    needs:[ "maps-size-normal" ],
                                    notNeeds:[ "maps-size-small", "maps-size-large" ]
                                },
                                large:{
                                    needs:[ "maps-size-large" ],
                                    notNeeds:[ "maps-size-normal", "maps-size-small" ]
                                }
                            }
                        },
                        {
                            id:"uniform",
                            default:"yes",
                            values:{
                                yes:{
                                    notNeeds:[ "maps-default-notuniform" ],
                                    needs:[ "maps-default-uniform" ],
                                },
                                no:{
                                    needs:[ "maps-default-notuniform" ]
                                }
                            }
                        },
                        {
                            id:"challenges",
                            default:"no",
                            values:{
                                yes:{
                                    needs:[ "challenges-default" ]
                                },
                                no:{
                                    notNeeds:[ "challenges-default" ]
                                }
                            }
                        },
                        {
                            id:"dungeonCrawling",
                            default:"no",
                            values:{
                                yes:{
                                    needs:[ "gamemode-dungeoncrawling" ]
                                },
                                no:{
                                    notNeeds:[ "gamemode-dungeoncrawling" ]
                                }
                            }
                        },
                        {
                            id:"defaults",
                            values:{
                                yes:{
                                    needs:[  "md2-hellscape", "quests", "maps-default", "campaign-default" ],
                                    notExclude:[ "generator-campaign" ]
                                }
                            }
                        }
                    ]
                },{
                    type:"campaignModels",
                    data:[
                        {
                            label:{
                                EN:"3-acts linear campaign"
                            },
                            story:[
                                [
                                    {
                                        IT:"Un vecchio incappucciato dalla barba rossa &egrave; apparso in citt&agrave;, trascinandosi per il mercato con il suo lungo bastone nodoso. ",
                                        EN:"A hooded old man with a red beard appeared in the city, dragging himself through the market with his long, gnarled stick. "
                                    }
                                ],[
                                    {
                                        IT:"La notte successiva, un misterioso portale oscuro &egrave; stato trovato aperto poco fuori dalle mura. ",
                                        EN:"The next night, a mysterious dark portal was found open just outside the walls. "
                                    }
                                ],[
                                    {
                                        IT:"Per gli Eroi &egrave; tempo di indagare di nuovo...",
                                        EN:"It's time for the Heroes to investigate again..."
                                    }
                                ]
                            ],
                            introduction:[
                                [
                                    {
                                        EN:"<p>As soon as the Heroes approach the portal, a whirlwind of light sucks them inside. Time and Space shatter. Something in their hearts breaks.</p>",
                                        IT:"<p>Non appena gli Eroi si avvicinano al portale, un turbine di luce li risucchia al suo interno. Il Tempo e lo Spazio si frantumano. Qualcosa nel loro cuore si spezza.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>Then they open their eyes again. Everything around them is all too familiar... Yet different. Are they living a dream?</p>",
                                        IT:"<p>Poi riaprono gli occhi. Tutto intorno &egrave; fin troppo familiare... Eppure diverso. Stanno vivendo un sogno?</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>A hoarse old man's voice echoes in their heads. He seems to clear his throat, and then recite... <i>(Go to <span class='gotopage' page='1'></span>)</i></p>",
                                        IT:"<p>Una voce grave da anziano rimbomba nella loro testa. Sembra schiarirsi la voce, per poi recitare... <i>(Andare a <span class='gotopage' page='1'></span>)</i></p>"
                                    }
                                ]
                            ],
                            achievementsCondition:{
                                IT:"<p>Durante la Fase Citt&agrave;, i giocatori controllano se hanno raggiunto gli obiettivi della Campagna, se ce ne sono. Ottengono la loro ricompensa la prima volta che ogni condizione viene soddisfatta. In questa Campagna sono i seguenti:</p>",
                                EN:"<p>During the Town Phase, players check if they have accomplished the Campaign achievements, if any. They gain their reward the first time each condition is met. In this Campaign they are the following:</p>"
                            },
                            achievements:[
                                {
                                    condition:{
                                        IT:"Completare 3 Missioni Secondarie",
                                        EN:"Complete 3 Side Quests"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 1 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 1"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Interagire con il Vicolo del Gioco d'Azzardo 4 volte",
                                        EN:"Interact with the Gambling Alley 4 times"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 3 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 3"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Durante la Fase della Citt&agrave;, scartare 5 carte Pozione dal nome diverso simultaneamente, senza ottenere nessun effetto",
                                        EN:"During the Town Phase, discard 5 Potion cards with different names at once, with no effect"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 4 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 4"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Ottenere il Potere Maggiore del Set Portatore di Oscurit&agrave; (4+ parti)",
                                        EN:"Obtain the Greater Power of the Darkbringer Set (4+ parts)"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"L'Eroe con il potere Maggiore ottiene la carta Campagna 5 di Heavenfall",
                                                EN:"The Hero with the Greater power gains Heavenfall Campaign card 5"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Ottenere il Potere Maggiore del Set Fuoco Infernale (4+ parti)",
                                        EN:"Obtain the Greater Power of the Hellfire Set (4+ parts)"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"L'eroe con il potere Maggiore ottiene la carta Campagna 6 di Heavenfall",
                                                EN:"The Hero with the Greater power gains Heavenfall Campaign card 6"
                                            }
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Perdere la stessa Missione 2 volte (questo Traguardo pu&ograve; essere completato in qualsiasi momento, anche fuori dalla fase citt&agrave;)",
                                        EN:"Lose the same Quest 2 times (this Achievement may be accomplished at any moment, even out of the Town Phase)"
                                    },
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 7 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 7"
                                            }
                                        }
                                    ]
                                }
                            ],
                            pages:[
                                {
                                    type:"cover",
                                    name:{
                                        IT:"Copertina",
                                        EN:"Cover"
                                    }
                                },{
                                    type:"map",
                                    act:0,
                                    map:0,
                                    name:{
                                        IT:"Atto I &dash; Missione A",
                                        EN:"Act I &dash; Mission A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Eccoli qua!&raquo; grida qualcuno da lontano. Una piccola pattuglia di guardie cittadine si avvicina agli Eroi.</p>",
                                                    EN:"<p>&laquo;Here they are!&raquo; someone shouts from afar. A small patrol of city guards approaches the Heroes.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Il portale oscuro si trova all'ingresso ovest! Seguiteci!&raquo; la voce delle guardie sparisce pian piano, coperta dal brusio del mercato. Come &egrave; possibile che gli Eroi si trovassero nuovamente in citt&agrave;?</p>",
                                                    EN:"<p>&laquo;The dark portal is at the western entrance! Follow us!&raquo; the voices of the guards slowly disappear, covered by the buzz of the market. How is it possible that the Heroes found themselves in the city again?</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Aggiungere 3 segnalini Tesoro Raro al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Add 3 Rare Treasure tokens to the Treasure bag."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Il capo delle guardie si ferma a una ventina di passi dal vortice sospeso a mezz'aria, nei pressi dell'ingresso ovest della citt&agrave;. &laquo;Eccolo.&raquo; dice con un filo di voce.</p>",
                                                    EN:"<p>The guard leader stops about twenty steps from the vortex suspended in mid-air, near the western entrance to the city. &laquo;There it is.&raquo; he says in a thread of a voice.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi si avviano verso il portale quando il capo delle guardie aggiunge: &laquo;Se non tornate entro tre ore, mander&ograve; i miei uomini a cercarvi. Fate attenzione!&raquo;</p>",
                                                    EN:"<p>The Heroes head toward the portal when the chief guard adds, &laquo;If you don't return within three hours, I'll send my men after you. Be careful!&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Risucchiati uno a uno dal misterioso portale, gli Eroi viaggiano per qualche secondo, per riaprire poi gli occhi... in un nuovo ricordo?</p>",
                                                    EN:"<p>Sucked one by one into the mysterious portal, the Heroes travel for a few seconds, only to reopen their eyes... to a new memory?</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='2'></span>.",
                                                EN:"Go to <span class='gotopage' page='2'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    act:0,
                                    map:1,
                                    name:{
                                        IT:"Atto I &dash; Missione B",
                                        EN:"Act I &dash; Mission B"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Non basta ancora. Mi serve ancora pi&ugrave; entropia...&raquo; una familiare voce da anziano diventa sempre pi&ugrave; acuta, per diventare un fischio.</p>",
                                                    EN:"<p>&laquo;It's still not enough. I need even more entropy...&raquo; a familiar old man's voice becomes increasingly high-pitched, becoming a whistle.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi riprendono i sensi. &laquo;Ah!&raquo; esclama il capo delle guardie. &laquo;Stavo per raggiungervi al mercato ma vedo che avete trovato il portale da soli!&raquo; aggiunge con un sorriso sollevato.</p>",
                                                    EN:"<p>The Heroes regain their senses. &laquo;Ah!&raquo; exclaims the guards leader. &laquo;I was about to meet you at the market, but I see you found the portal on your own!&raquo; he adds with a relieved smile.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi si guardano tra di loro smarriti mentre il portale si chiude dietro le loro spalle. Il tempo sta andando in frantumi. Non c'&egrave; un attimo da perdere.</p>",
                                                    EN:"<p>The Heroes look at each other in bewilderment as the portal closes behind them. Time is falling apart. There is not a moment to lose.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Comune e aggiungere 1 segnalino Tesoro Raro.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Common Treasure tokens and add 1 Rare Treasure token."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>La notte successiva l'intera citt&agrave; viene svegliata da un terribile ruggito.</p>",
                                                    EN:"<p>The next night, the entire city is awakened by a terrible roar.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Proviene dal portale, apertosi nuovamente presso l'ingresso ovest della citt&agrave;. Qualcosa di terribile sta attendendo gli Eroi. Non perdono tempo e, con un balzo, si gettano nuovamente nell'ignoto.</p>",
                                                    EN:"<p>It comes from the portal, which had opened again at the western entrance to the city. Something terrible is waiting for the Heroes. They waste no time and, with a leap, throw themselves again into the unknown.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='3'></span>.",
                                                EN:"Go to <span class='gotopage' page='3'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    act:0,
                                    map:2,
                                    name:{
                                        IT:"Atto I &dash; Missione C",
                                        EN:"Act I &dash; Mission C"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Un forte fischio rimbomba nelle orecchie. Gli Eroi riaprono gli occhi in un letto della taverna cittadina, ancora immersa nella notte fonda.</p>",
                                                    EN:"<p>A loud whistle rings in their ears. The Heroes wake up in a bed in the town tavern, still deep in the night.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Il gruppo si riunisce d'urgenza davanti all'ingresso ovest della citt&agrave;. Ad attenderli c'&egrave; un vecchio sorridente, dalla barba rossa. &laquo;Ecco i famosi Eroi! Posso invitarvi per una partita a dadi?&raquo;</p>",
                                                    EN:"<p>The group urgently gathers in front of the city's west entrance. A smiling old man with a red beard awaits them. &laquo;Here are the famous Heroes! May I invite you for a game of dice?&raquo;</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 13 PE</li><li>3-4 Eroi: 17 PE</li><li>5-6 Eroi: 21 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 13 XP</li><li>3-4 Heroes: 17 XP</li ><li>5-6 Heroes: 21 XP</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 3 segnalini Tesoro Comune e aggiungere 2 segnalino Tesoro Epico.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 3 Common Treasure tokens and add 2 Epic Treasure tokens."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Sei tu il responsabile, maledetto!&raquo; esclama uno degli Eroi. Il vecchio rotea i dadi tra le dita, con un sorriso mite sul viso.</p>",
                                                    EN:"<p>&laquo;You're the one responsible, damn you!&raquo; exclaims one of the Heroes. The old man rolls the dice between his fingers, with a gentle smile.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Suvvia. So bene che vi state divertendo!&raquo; sussurra tra s&eacute; e s&eacute; il vecchio. Il gruppo di Eroi gli &egrave; addosso in un lampo, ma un nuovo portale oscuro si apre d'un tratto, trascinandoli per l'ennesima volta in un tempo sconosciuto.</p>",
                                                    EN:"<p>&laquo;Come on. I know you're having fun!&raquo; the old man whispers to himself. The group of Heroes is upon him in a flash, but a new dark portal suddenly opens, dragging them once again into an unknown time.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='4'></span>.",
                                                EN:"Go to <span class='gotopage' page='4'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    act:1,
                                    map:0,
                                    name:{
                                        IT:"Atto II &dash; Missione A",
                                        EN:"Act II &dash; Mission A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Questa volta non c'&egrave; alcun fischio. Solo un lento applauso. &laquo;Ottimo lavoro, Eroi!&raquo; il vecchio dalla barba rossa spunta da un cunicolo, con lo sguardo pieno di orgoglio.</p>",
                                                    EN:"<p>This time, there is no whistle. Just a slow round of applause. &laquo;Good job, Heroes!&raquo; the old man with a red beard emerges from a tunnel, his gaze full of pride.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Cosa ci sta accadendo? Dove siamo?&raquo; chiede uno degli Eroi piegato sulla sua arma, senza fiato e confuso.</p>",
                                                    EN:"<p>&laquo;What is happening to us? Where are we?&raquo; asks one of the Heroes, bent over his weapon, breathless and confused.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Oh! Oh!&raquo; esclama il vecchio, sorridendo ed estraendo una fiala rossa dalla larga manica della sua tunica. &laquo;Bevi questa pozione curativa. Vi racconter&ograve; tutto strada facendo.&raquo;. Quindi, con passo lento, il vecchio rosso si allontana.</p>",
                                                    EN:"<p>&laquo;Oh! Oh!&raquo; exclaims the old man, smiling and taking a red vial from the wide sleeve of his tunic. &laquo;Drink this healing potion. I will tell you all about it on the way.&raquo;. Then, with a slow pace, the old red man walks away.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 8 PE</li><li>3-4 Eroi: 12 PE</li><li>5-6 Eroi: 16 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 8 XP</li><li>3-4 Heroes: 12 XP</li ><li>5-6 Heroes: 16 XP</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 3 segnalini Tesoro Comune e aggiungere 2 segnalino Tesoro Epico.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 3 Common Treasure tokens and add 2 Epic Treasure tokens."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Il vecchio dalla barba rossa sta mescolando un profumato stufato in un paiolo, allestito nel mezzo di una vallata verdeggiante. &laquo;Abbiamo bisogno del vostro aiuto, Eroi.&raquo; dice, sorseggiando il brodo.</p>",
                                                    EN:"<p>The old man with a red beard is stirring a fragrant stew in a pot set up in the middle of a green valley. &laquo;We need your help, Heroes.&raquo; he says, sipping the broth.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Con gesti lenti e precisi, il vecchio riempie un piatto per ogni Eroe. &laquo;Mangiate.&raquo; esorta l'anziano. Quando il cucchiaio sfiora le labbra degli Eroi, un nuovo strano ricordo li rapisce...</p>",
                                                    EN:"<p>With slow, precise gestures, the old man fills a plate for each Hero. &laquo;Eat.&raquo; the old man urges. When the spoon touches the Heroes' lips, a new, strange memory captures them...</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='5'></span>.",
                                                EN:"Go to <span class='gotopage' page='5'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    act:1,
                                    map:1,
                                    name:{
                                        IT:"Atto II &dash; Missione B",
                                        EN:"Act II &dash; Mission B"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Gli Eroi gonfiano il petto pieni di orgoglio. Non si sono mai sentiti cos&igrave; vivi! Hanno vinto e salvato il mondo ancora una volta!</p>",
                                                    EN:"<p>The Heroes puff out their chests with pride. They have never felt so alive! They have won and saved the world once again!</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;&Egrave; di questo che abbiamo bisogno. Di Eroi senza paura.&raquo; il vecchio bisbiglia chino dietro un cumulo di rocce.</p>",
                                                    EN:"<p>&laquo;This is what we need. Heroes without fear.&raquo; the old man whispers, bent over a pile of rocks.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Uno degli Eroi sorprende il vecchio alle spalle, ignaro di essere osservato. Con un guizzo ne blocca i polsi e chiede &laquo;Chi sarebbero questi 'noi', maledetto vecchio?&raquo;</p>",
                                                    EN:"<p>One of the Heroes surprises the old man from behind, unaware that he is being watched. With a jump, it locks his wrists and asks &laquo;Who are these 'us', damn old man?&raquo;</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Comune, aggiungere 2 segnalino Tesoro Epico e 2 segnalini Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Common Treasure tokens, add 2 Epic Treasure tokens, and 2 Legendary Treasure tokens."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Chiuso nella cella cittadina da diversi giorni, il vecchio dalla barba rossa non ha ancora detto nemmeno una parola. Gli Eroi, nel frattempo, brancolano nel buio.</p>",
                                                    EN:"<p>Locked up in the city jail for several days, the old man with a red beard has not said a single word. The Heroes, meanwhile, are groping in the dark.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>La citt&agrave; somiglia a quella che conoscono ma ponti, negozi e santuari sono in posizioni differenti da quelle che ricordano.</p>",
                                                    EN:"<p>The city resembles the one they know, but the bridges, shops, and shrines are in different locations than they remember.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Un giorno, un ragazzino dai piedi scalzi si avvicina agli Eroi, con un messaggio indirizzato a loro. Gli Eroi srotolano la pergamena e, con loro sorpresa, leggono...</p>",
                                                    EN:"<p>One day, a barefoot boy approaches the Heroes, with a message addressed to them. The Heroes unroll the scroll and, to their surprise, read...</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='6'></span>.",
                                                EN:"Go to <span class='gotopage' page='6'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    act:1,
                                    map:2,
                                    name:{
                                        IT:"Atto II &dash; Missione C",
                                        EN:"Act II &dash; Mission C"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Questa pergamena... Parla di noi.&raquo; dice uno degli Eroi confuso. &laquo;Ma non ricordo nulla di questa avventura... E cosa sono queste tessere e segnalini?&raquo; continua.</p>",
                                                    EN:"<p>&laquo;This scroll... It speaks of us.&raquo; says one of the Heroes confused. &laquo;But I don't remember anything about this adventure... And what are these tiles and tokens?&raquo; it continues.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Portiamola al vecchio.&raquo; risponde un compagno. &laquo;Dobbiamo farlo parlare.&raquo;. Il gruppo s'incammina verso la prigione cittadina.</p>",
                                                    EN:"<p>&laquo;Let's take it to the old man.&raquo; replies a companion. &laquo;We have to make him talk.&raquo;. The group heads towards the city prison.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalino Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and add 1 Legendary Treasure token."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;&Egrave; accaduto, quindi.&raquo; esclama pensieroso il vecchio. &laquo;Si &egrave; messa in moto.&raquo;</p>",
                                                    EN:"<p>&laquo;It happened, then.&raquo; the old man exclaims thoughtfully. &laquo;It started moving.&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Di chi parli, vecchio?&raquo; ribatte nervoso uno degli Eroi. &laquo;Siamo stufi dei tuoi misteri!&raquo;</p>",
                                                    EN:"<p>&laquo;Who are you talking about, old man?&raquo; one of the Heroes replies nervously. &laquo;We are tired of your mysteries!&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Lo vedrete con i vostri occhi, Eroi!&raquo; un piccolo dardo punge il collo degli Eroi, che cadono in un sonno apparentemente senza fine...</p>",
                                                    EN:"<p>&laquo;You will see it with your own eyes, Heroes!&raquo; a small dart pricks the Heroes' necks, and they fall into a seemingly endless sleep...</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='7'></span>.",
                                                EN:"Go to <span class='gotopage' page='7'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    act:2,
                                    map:0,
                                    name:{
                                        IT:"Atto III &dash; Missione A",
                                        EN:"Act III &dash; Mission A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Nulla di tutto questo ha senso, amici.&raquo; sussurra pensieroso uno degli Eroe. &laquo;Sembra che...&raquo;</p>",
                                                    EN:"<p>&laquo;None of this makes sense, friends.&raquo; one of the Heroes whispers thoughtfully. &laquo;It seems that...&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;...che il caso stia muovendo il vostro destino.&raquo; con un colpo violento del bastone a terra, il vecchio rosso sveglia gli Eroi.</p>",
                                                    EN:"<p>&laquo;...that chance is moving your destiny.&raquo; with a violent blow of the stick on the ground, the old red man wakes the Heroes.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Ora che ha mostrato il suo volto, non c'&egrave; tempo da perdere.&raquo; i gesti nell'aria del vecchio formano un cubo di luce. &laquo;Dovete eliminarla.&raquo;</p>",
                                                    EN:"<p>&laquo;Now that she has shown her face, there is no time to waste.&raquo; the old man's gestures in the air form a cube of light. &laquo;You must eliminate her.&raquo;</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            },
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalino Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and add 1 Legendary Treasure token."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;La Casualit&agrave; Massiccia?&raquo; chiede uno degli Eroi, poggiato a una colonna.</p>",
                                                    EN:"<p>&laquo;The Massive Randomness?&raquo; asks one of the Heroes, leaning against a column.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Esattamente. Una creatura di puro caos, che tiene imprigionato questo mondo da secoli.&raquo; risponde il vecchio, dando una boccata a una lunga pipa.</p>",
                                                    EN:"<p>&laquo;Exactly. A creature of pure chaos, holding this world captive for centuries.&raquo; the old man replies, taking a puff on a long pipe.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Portaci da lei. &Egrave; arrivato il momento di porre fine al suo maleficio.&raquo; dice l'Eroe, slanciandosi verso di lui.</p>",
                                                    EN:"<p>&laquo;Take us to him. It is time to end his curse.&raquo; says the Hero, rushing toward him.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Oh, certamente!&raquo; risponde il vecchio. &laquo;Ma vi manca un'ultima avventura!&raquo;. Cosa succede?!</p>",
                                                    EN:"<p>&laquo;Oh, certainly!&raquo; replies the old man. &laquo;But there is one last adventure for you!&raquo;. What's going on?!</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='8'></span>.",
                                                EN:"Go to <span class='gotopage' page='8'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    act:2,
                                    map:1,
                                    name:{
                                        IT:"Atto III &dash; Missione B",
                                        EN:"Act III &dash; Mission B"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Gli Eroi si distribuiscono i punti esperienza tra loro. Riflettono sull'arma pi&ugrave; adeguata. Meglio tirare due dadi arancio o un dado rosso?</p>",
                                                    EN:"<p>The Heroes distribute the experience points among themselves. They think about the most suitable weapon. Is it better to roll two orange dice or one red die?</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi non sanno pi&ugrave; chi sono.</p>",
                                                    EN:"<p>The Heroes no longer know who they are.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Incontreranno la Casualit&agrave; Massiccia?</p>",
                                                    EN:"<p>Will they encounter the Massive Randomness?</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Fate un bel respiro, Giocatori.&raquo; vi sussurra il vecchio. &laquo;Se il mio rituale ha avuto successo, state per incontrare la Casualit&agrave; Massiccia.&raquo;</p>",
                                                    EN:"<p>&laquo;Take a deep breath, Players.&raquo; the old man whispers to you. &laquo;If my ritual was successful, you are about to meet the Massive Randomness.&raquo;</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Ma potrei sbagliarmi! Ormai ho una certa et&agrave;!&raquo; continua sghignazzando. &laquo;Spero comunque di rivedervi.&raquo; sussurra ancora. &laquo;E non dimenticate di portare la vostra voglia di giocare con voi!&raquo;.</p>",
                                                    EN:"<p>&laquo;But I could be wrong! I'm getting on in years!&raquo; he says, snickering. &laquo;I hope to see you again, though.&raquo; he whispers again. &laquo;And don't forget to bring your desire to play with you!&raquo;.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='9'></span>.",
                                                EN:"Go to <span class='gotopage' page='9'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    act:2,
                                    map:2,
                                    name:{
                                        IT:"Atto III &dash; Missione C",
                                        EN:"Act III &dash; Mission C"
                                    },
                                    progression:{
                                        ending:[
                                            [
                                                {
                                                    IT:"<p>Il vecchio rosso si dissolve nel nulla, dimenticato da tutti. Lo ha fatto con un grido? Lo ha fatto in silenzio? Nessuno lo sa veramente.</p>",
                                                    EN:"<p>The red old man dissolves into nothingness, forgotten by all. Did he do it with a scream? Did he do it in silence? No one knows.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Il caos continua a osservarvi da dietro l'oscuro portale, sfidandovi con presunzione. Ma voi lo affrontate ogni giorno. E lo affronterete ancora e ancora. Un brivido di orgoglio vi attraversa la schiena.</p>",
                                                    EN:"<p>Chaos continues to watch from behind the dark portal, challenging you with presumption. But you face it every day. And you will face it again and again. A shiver of pride runs down your spine.</p>"
                                                }
                                            ],[
                                                {
                                                    IT:"<p>Avete vinto!</p>",
                                                    EN:"<p>You win!</p>"
                                                }
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },{
                    type:"campaignActModels",
                    data:[
                        {
                            label:{
                                EN:"From uniform to interdimensional."
                            },
                            words:[
                                [
                                    "dimension",
                                    "side",
                                    "plan"
                                ],[
                                    "shatter",
                                    "breaker",
                                    "scar"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        {
                                            place:"hellscape",
                                            uniform:"yes"
                                        }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"yes" }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"no" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All uniform."
                            },
                            words:[
                                [
                                    "world",
                                    "land",
                                    "earth"
                                ],[
                                    "still",
                                    "hold",
                                    "stand"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        {
                                            place:"hellscape",
                                            uniform:"yes"
                                        }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"yes" }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"campaignMapModels",
                    data:[
                        {
                            label:{
                                EN:"Variable map size."
                            },
                            words:[
                                [
                                    "quest",
                                    "cruise",
                                    "hunt"
                                ],[
                                    "venture",
                                    "run",
                                    "seek"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { mapSize:"small" }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Normal-sized maps."
                            },
                            words:[
                                [
                                    "plain",
                                    "old",
                                    "flat"
                                ],[
                                    "cross",
                                    "even",
                                    "cast"
                                ]
                            ],
                            
                            models:[]
                        },{
                            label:{
                                EN:"Larger mid-maps."
                            },
                            words:[
                                [
                                    "chrono",
                                    "time",
                                    "point"
                                ],[
                                    "sand",
                                    "pass",
                                    "grow"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:1 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Start small, ends large."
                            },
                            words:[
                                [
                                    "ascent",
                                    "raise",
                                    "climax"
                                ],[
                                    "lift",
                                    "climb",
                                    "rise"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"small" }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"campaignCrawlingModels",
                    data:[
                        {
                            label:{
                                EN:"Hidden on last quests."
                            },
                            words:[
                                [
                                    "dungeon"
                                ],[
                                    "crawl"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { dungeonCrawling:"yes" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All hidden."
                            },
                            words:[
                                [
                                    "unknown"
                                ],[
                                    "blind"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { dungeonCrawling:"yes" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All visible."
                            },
                            words:[
                                [
                                    "sight"
                                ],[
                                    "light"
                                ]
                            ],
                            models:[]
                        }
                    ]
                },{
                    type:"campaignRewardModels",
                    data:[
                        {
                            label:{
                                EN:"Gain relic/skill after bosses. Gain a companion halfway."
                            },
                            words:[
                                [
                                    "travel",
                                    "ride",
                                    "road"
                                ],[
                                    "flow",
                                    "slide",
                                    "drive"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality2", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2", "skillQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3", "skillQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "companion" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Challenge every mid-map."
                            },
                            words:[
                                [
                                    "challenge"
                                ],[
                                    "front"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "skillQuality2", "companionQuality1", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"A challenge on every boss."
                            },
                            words:[
                                [
                                    "leader"
                                ],[
                                    "lead"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "skillQuality2", "companionQuality1", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1 }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"A fixed challenge on every mid-map."
                            },
                            words:[
                                [
                                    "hell"
                                ],[
                                    "burn"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "skillQuality1", "companionQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "skillQuality2", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "relicQuality3", "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

});