ModManager.modules.push(function(){

    return [
        {
            id:"quests-mr",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-mr", "untranslated-fr" ],
            label:{
                EN:"Original Massive Randomness 2 quest models"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        masterMode:[
                            {
                                priority:30,
                                type:"rule",
                                classNames:[ "printOnly" ],
                                name:{
                                    IT:"Modalit&agrave; Master",
                                    EN:"Master Mode"
                                },
                                explanation:{
                                    IT:"Questa Missione contiene delle informazioni segrete che non devono essere conosciute dai giocatori, per cui dovrebbe essere letta da qualcuno che non partecipa alla partita: il Master.",
                                    EN:"This Mission contains secret information that must not be known to the players, so it should be read by someone who is not participating in the game: the Master."
                                }
                            }
                        ]
                    }
                },{
                    type:"quests",
                    data:[
                        {
                            type:"investigation",
                            by:{
                                IT:"Di KesieV",
                                EN:"By KesieV"
                            },
                            suggestedTilesCount:5,
                            code:{
                                onQuestFinalize:(questGenerator,resources,result,questVersion,questLabels)=>{
                                
                                    let
                                        labels = questLabels[0],
                                        culprit = Math.floor(questGenerator.random(2)),
                                        culpritLabels = labels.suspected[culprit],
                                        culpritId = culpritLabels.EN[0],
                                        testimonyLabels = labels.suspected[(culprit+1)%2],
                                        testimonyId = testimonyLabels.EN[0],
                                        charactersLabels = labels.suspected.concat(labels.informers),
                                        charactersCount = charactersLabels.length,
                                        isTruth = questGenerator.random(2)>1;

                                    questGenerator.shuffle(charactersLabels);

                                    for (let i=0;i<charactersCount;i++) {

                                        let
                                            previousCharacterLabels = charactersLabels[i-1],
                                            characterLabels = charactersLabels[i],
                                            characterId = characterLabels.EN[0],
                                            sentenceId = "testimony."+characterId;

                                        switch (i) {
                                            case 0:{
                                                // The Accuser
                                                if (characterId == culpritId) {
                                                    // To self
                                                    if (isTruth)
                                                        result.labels[sentenceId]=questGenerator.pickRandomElementValue(labels.culpritSelf);
                                                    else
                                                        result.labels[sentenceId]=Labels.solveLabel(
                                                            questGenerator.pickRandomElementValue(labels.culpritOther),
                                                            { who:testimonyLabels }
                                                        );
                                                } else {
                                                    // To other
                                                    if (isTruth)
                                                        result.labels[sentenceId]=Labels.solveLabel(
                                                            questGenerator.pickRandomElementValue(labels.culpritOther),
                                                            { who:culpritLabels }
                                                        );
                                                    else
                                                        result.labels[sentenceId]=Labels.solveLabel(
                                                            questGenerator.pickRandomElementValue(labels.innocentOther),
                                                            { who:culpritLabels }
                                                        );
                                                }
                                                break;
                                            }
                                            case charactersCount-1:{
                                                if (isTruth)
                                                    result.labels[sentenceId]=Labels.solveLabel(
                                                        questGenerator.pickRandomElementValue(labels.trueOther),
                                                        { who:previousCharacterLabels }
                                                    );
                                                else
                                                    result.labels[sentenceId]=Labels.solveLabel(
                                                        questGenerator.pickRandomElementValue(labels.lieOther),
                                                        { who:previousCharacterLabels }
                                                    );
                                                break;
                                            }
                                            default:{
                                                if (questGenerator.random(2)>1)
                                                    result.labels[sentenceId]=Labels.solveLabel(
                                                        questGenerator.pickRandomElementValue(labels.trueOther),
                                                        { who:previousCharacterLabels }
                                                    );
                                                else {
                                                    isTruth = !isTruth;
                                                    result.labels[sentenceId]=Labels.solveLabel(
                                                        questGenerator.pickRandomElementValue(labels.lieOther),
                                                        { who:previousCharacterLabels }
                                                    );
                                                }
                                                break;
                                            }
                                        }

                                    }

                                    result.labels["ending."+culpritId]=questGenerator.pickRandomElementValue(labels.goodEnding);
                                    result.labels["ending."+testimonyId]=questGenerator.pickRandomElementValue(labels.badEnding);

                                },
                            },
                            versions:[
                                {
                                    specialRules:[ "masterMode" ],
                                    labels:[
                                        [
                                            {
                                                suspected:[
                                                    {
                                                        IT: [ "corruptionLord", "il Signore della Corruzione" ],
                                                        EN: [ "corruptionLord", "the Corruption Lord" ]
                                                    },{
                                                        IT: [ "timeLord", "il Signore del Tempo" ],
                                                        EN: [ "timeLord", "the Time Lord" ]
                                                    }
                                                ],
                                                informers:[
                                                    {
                                                        IT: [ "corruptionLordServant", "il Servitore della Corruzione" ],
                                                        EN: [ "corruptionLordServant", "the Corruption Servant" ]
                                                    },{
                                                        IT: [ "timeLordServant", "il Servitore del Tempo" ],
                                                        EN: [ "timeLordServant", "the Time Servant" ]
                                                    }
                                                ],
                                                culpritSelf:[
                                                    { IT:"Sono io il colpevole!", EN: "I'm the culprit!" },
                                                    { IT:"Ci sono io dietro tutto questo!", EN: "I'm behind all this!" },
                                                    { IT:"Sono stato io!", EN: "It was me!" },
                                                    { IT:"Avanti, sono stato io!", EN: "Come on, it was me!" },
                                                ],
                                                culpritOther:[
                                                    { IT: "Quello che andrebbe punito &egrave; {who@1}!", EN: "The one to be punished is {who@1}!" },
                                                    { IT: "C'&egrave; {who@1} dietro tutto questo!", EN: "There is {who@1} behind all this!" },
                                                    { IT:"{who:capital@1} &egrave; colui che stai cercando.", EN: "{who:capital@1} is the one you are looking for." },
                                                    { IT:"So chi stai cercando: &egrave; {who@1}.", EN: "I've the who you want: {who@1}." }
                                                ],
                                                innocentSelf:[
                                                    { IT:"Sono innocente!", EN: "I'm innocent!" },
                                                    { IT:"Non sono stato io!", EN: "It's not my fault!" },
                                                    { IT:"Non sono il colplevole!", EN: "I'm not the culprit!" },
                                                ],
                                                innocentOther:[
                                                    { IT:"{who:capital@1} non &egrave; colpevole!", EN: "{who:capital@1} is not guilty!" },
                                                    { IT:"{who:capital@1} non ha fatto nulla.", EN: "{who:capital@1} is not at fault." },
                                                    { IT:"{who:capital@1} non &egrave; quello che stai cercando.", EN: "{who:capital@1} is not your target." },
                                                    { IT:"Non pu&ograve; essere stato {who@1}.", EN: "It couldn't have been {who@1}." }
                                                ],
                                                lieOther:[
                                                    { IT:"{who:capital@1} sta mentendo!", EN: "{who:capital@1} is lying!" },
                                                    { IT:"{who:capital@1} &egrave; uno sporco bugiardo!", EN: "{who:capital@1} is a dirty liar!" },
                                                    { IT:"{who:capital@1} non merita fiducia...", EN: "Don't trust {who@1}..." },
                                                    { IT:"{who:capital@1} dice bugie...", EN: "{who:capital@1} tells lies..." },
                                                ],
                                                trueOther:[
                                                    { IT:"{who:capital@1} dice la verit&agrave;.", EN: "{who:capital@1} is telling the truth." },
                                                    { IT:"{who:capital@1} &egrave; sincero.", EN: "{who:capital@1} is sincere." },
                                                    { IT:"{who:capital@1} non dice bugie.", EN: "{who:capital@1} is not telling lies." }
                                                ],
                                                goodEnding:[
                                                    { IT:"Gli dei della Giustizia vi sorridono. Avete agito bene. La Missione termina con la vittoria.", EN: "The gods of Justice smile upon you. You did well. The Mission ends in victory." },
                                                    { IT:"Ben fatto, eroi. Anche questa volta avete trionfato e, con voi, la giustizia. La Missione termina con la vittoria.", EN: "Well done, heroes. You triumphed again and the justice with you. The Mission ends in victory." },
                                                    { IT:"Il sacrificio &egrave; stato inevitabile, ma giustizia &egrave; stata fatta. La Missione termina con la vittoria.", EN: "The sacrifice was inevitable, but justice has been done. The Mission ends in victory." },
                                                ],
                                                badEnding:[
                                                    { IT:"Il Lord si accascia a terra con un grande tonfo ma, dentro di voi, sentite che qualcosa non non va. La Missione termina con la sconfitta.", EN: "The Lord collapses to the ground with a great thud but, inside, you feel that something is wrong. The Mission ends in defeat." },
                                                    { IT:"Avete preso una decisione e affrontato eroicamente le conseguenze. Ma sar&agrave; stata davvero quella giusta? La Missione termina con la sconfitta.", EN: "You made a decision and heroically faced the consequences. But was it the right one? The Mission ends in defeat." },
                                                    { IT:"{label.goodEnding}.. o forse no?", EN: "{label.goodEnding}.. or maybe not?" },
                                                ],
                                                crime:[
                                                    {
                                                        IT:[ "L'assassino della regina" ],
                                                        EN:[ "The queen's assassin" ]
                                                    },{
                                                        IT:[ "Il rapitore del principe" ],
                                                        EN:[ "The kidnapper of the prince" ]
                                                    },{
                                                        IT:[ "L'assassino del re" ],
                                                        EN:[ "The king's assassin" ]
                                                    }
                                                ],
                                                escape:[
                                                    {
                                                        IT:[ "&egrave; riuscito a fuggire senza lasciare alcun testimone." ],
                                                        EN:[ "managed to escape without leaving any witnesses." ]
                                                    },{
                                                        IT:[ "&egrave; riuscito a sparire senza lasciare alcuna traccia." ],
                                                        EN:[ "managed to disappear without leaving any trace." ]
                                                    },{
                                                        IT:[ "ha colpito e nessuno &egrave; riuscito a vederlo." ],
                                                        EN:[ "hit and no one could see it." ]
                                                    }
                                                ],
                                                advantage:[
                                                    {
                                                        IT:[ "Solo il Signore della Corruzione ed il Signore del Tempo potrebbero trarre vantaggio da questa crisi," ],
                                                        EN:[ "Only the Corruption Lord and the Time Lord could benefit from this crisis," ]
                                                    },{
                                                        IT:[ "I maggiori sospettati sono il Signore della Corruzione ed il Signore del Tempo," ],
                                                        EN:[ "The main suspects are the Corruption Lord and the Time Lord," ]
                                                    },{
                                                        IT:[ "Il Signore della Corruzione ed il Signore del Tempo... possono essere stati solo loro" ],
                                                        EN:[ "The Corruption Lord and the Time Lord... it could only have been them" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "ma la situazione politica del regno &egrave; tesa e non possiamo permetterci di commettere errori." ],
                                                        EN:[ "but the political situation in the kingdom is tense and we cannot afford to make mistakes." ]
                                                    },{
                                                        IT:[ "ma, se accusiamo la persona sbagliata, l'intero regno potrebbe pagarne le conseguenze." ],
                                                        EN:[ "but, if we accuse the wrong person, the entire kingdom could suffer the consequences." ]
                                                    },{
                                                        IT:[ "ma chi sar&agrave; il colpevole? Non possiamo permetterci di sbagliare." ],
                                                        EN:[ "but who will be the culprit? We cannot afford to make mistakes." ]
                                                    }
                                                ],
                                                invite:[
                                                    {
                                                        IT:[ "I Signori sono disposti a collaborare e ci hanno invitato" ],
                                                        EN:[ "The Lords are willing to collaborate and have invited us" ]
                                                    },{
                                                        IT:[ "Inaspettatamente, i Signori ci hanno invitato" ],
                                                        EN:[ "Unexpectedly, the Lords invited us" ]
                                                    },{
                                                        IT:[ "Un messaggero ci ha consegnato una lettera sgualcita: i Signori ci attendono" ],
                                                        EN:[ "A messenger gave us a crumpled letter: the Lords await us" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT:[ "in una remota segreta per parlarne..." ],
                                                        EN:[ "in a remote dungeon to talk about it..." ]
                                                    },{
                                                        IT:[ "in un luogo remoto, per poter risolvere la questione..." ],
                                                        EN:[ "in a remote place, to resolve the issue..." ]
                                                    },{
                                                        IT:[ "in un posto nascosto, per discuterne..." ],
                                                        EN:[ "in a hidden place, to discuss it..." ]
                                                    }
                                                ],
                                                destinationBut:[
                                                    {
                                                        IT:[ "ma sappiamo bene che il colpevole prover&agrave; ad eliminarci prima che le indagini siano terminate." ],
                                                        EN:[ "but we know well that the culprit will try to eliminate us before the investigation is finished." ]
                                                    },{
                                                        IT:[ "ma il colpevole prover&agrave; a eliminarci molto prima. Ne siamo certi." ],
                                                        EN:[ "but the culprit will try to eliminate us much sooner. We are certain of it." ]
                                                    },{
                                                        IT:[ "ma non sar&agrave; facile. Il colpevole prover&agrave; a farci fuori il prima possibile." ],
                                                        EN:[ "but it won't be easy. The culprit will try to take us out as soon as possible." ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "Dobbiamo fare in fretta e non commettere errori." ],
                                                        EN:[ "We have to hurry and not make mistakes." ]
                                                    },{
                                                        IT:[ "Dobbiamo indagare e risolvere la questione. E molto velocemente." ],
                                                        EN:[ "We need to investigate and resolve this matter. And very quickly." ]
                                                    },{
                                                        IT:[ "Non abbiamo scelta. Dobbiamo risolvere la questione velocemente." ],
                                                        EN:[ "We have no choice. We need to resolve this issue quickly." ]
                                                    }
                                                ]

                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"I Due Signori",
                                            EN:"The Two Lords"
                                        },{
                                            IT:"L'Indagine",
                                            EN:"The Investigation"
                                        },{
                                            IT:"Il Colpevole",
                                            EN:"The Culprit"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.crime@0} {label.escape@0} {label.advantage@0} {label.but@0} {label.invite@0} {label.destination@0} {label.destinationBut@0} {label.target@0}"
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
                                                        IT:"Investigazione",
                                                        EN:"Investigate"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Interrogare almeno un Signore",
                                                        EN:"Interview at least one Lord"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Punizione",
                                                        EN:"Punish"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Accusare un Signore ed eliminalo",
                                                        EN:"Accuse a Lord and eliminate it"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Il Momento della Verit&agrave;",
                                                        EN:"Time of the Truth"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Leggere l'epilogo",
                                                        EN:"Read the epilogue"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione",
                                                        EN:"Preparation"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Sulla mappa, sposta i segnalini Tempo {symbol.timeToken} e i segnalini Corruzione {symbol.corruptionToken} sopra i segnalini Obiettivo nella stessa Zona.<p>Pesca 1 Mostro Errante di Livello 5, mettilo da parte e aggiungi un segnalino Corruzione {symbol.corruptionToken} su di esso: questo &egrave; il Signore della Corruzione. Pesca un altro Mostro Errante di livello 5, mettilo da parte e aggiungi un segnalino Tempo {symbol.timeToken} su di esso: questo &egrave; il Signore del Tempo. Quindi, rimuovi dal gioco tutte le carte corrispondenti ai 2 Signori nei mazzi dei Mostri Erranti.</p>",
                                                        EN:"On the map, move the Time tokens {symbol.timeToken} and the Corruption tokens {symbol.corruptionToken} on top of the Objective tokens in the same Zone.<p>Draw 1 Level 5 Roaming Monster, set it apart, and add a Corruption token {symbol.corruptionToken} on it: this is the Corruption Lord. Draw another Level 5 Roaming Monster, set it apart, and add a Time token {symbol.timeToken} on it: this is the Time Lord. Then, remove from the game all of the cards matching the 2 Lords from the Roaming Monster decks.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Due Signori",
                                                        EN:"The Two Lords"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questo dungeon si trovano il Signore della Corruzione, contrassegnato dal segnalino Obiettivo colorato con un segnalino Corruzione {symbol.corruptionToken} su di esso, e il Signore del Tempo, contrassegnato dal segnalino Obiettivo colorato con un segnalino Tempo {symbol.timeToken} su di esso. Gli eroi potranno interagire con i Signori, interrogandoli o accusandoli <i>(Vedi sotto)</i>.",
                                                        EN:"In this dungeon, there are the Corruption Lord, marked by the colored Objective token with a Corruption token {symbol.corruptionToken} on it, and the Time Lord, marked by the colored Objective token with a Time token {symbol.timeToken} on it. The heroes will be able to interact with the Lords, interrogating them or accusing them <i>(See below)</i>."
                                                    }
                                                ]
                                            }
                                        ],[
                                           {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Fedeli Servitori",
                                                        EN:"The Faithful Servants"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questo dungeon si trovano anche i Servitori dei Signori: il Servitore della Corruzione, contrassegnato dal segnalino Obiettivo grigio con un segnalino Corruzione {symbol.corruptionToken} su di esso, e il Servitore del Tempo, contrassegnato dal segnalino Obiettivo grigio con un segnalino Tempo {symbol.timeToken} su di esso. Gli eroi potranno interagire i Servitori per interrogarli.",
                                                        EN:"In this dungeon there also are the Lord's Servants: the Corruption Servant, marked by the gray Objective token with a Corruption token {symbol.corruptionToken} on it, and the Time Servant, marked by the gray Objective token with a Time token {symbol.timeToken} on it. The heroes will be able to interact with Servants to interrogate them."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                        IT:"L'Interrogatorio",
                                                        EN:"The Interrogation"
                                                     }
                                                 ],
                                                 explanation:[
                                                    {
                                                        IT:"Qualsiasi eroe nella stessa Zona di un personaggio (un segnalino Obiettivo grigio o colorato) pu&ograve; spendere 1 azione per interrogarlo. <span class='displayonly'>Per leggere la sua testimonianza, seleziona il testo nascosto qui sotto per rivelarlo.</span><span class='printonly'>Poi il Master legge il testo relativo:</span>"+
                                                        "<p><b>Il Signore della Corruzione (segnalino Obiettivo colorato +{symbol.corruptionToken}) dice:</b> <span class='hiddentext'>\"{testimony.corruptionLord}\"</p></span>"+
                                                        "<p><b>Il Servitore della Corruzione (segnalino obiettivo grigio +{symbol.corruptionToken}) dice:</b> <span class='hiddentext'>\"{testimony.corruptionLordServant}\"</p></span>"+
                                                        "<p><b>Il Signore del Tempo (segnalino Obiettivo colorato con +{symbol.timeToken}) dice:</b> <span class='hiddentext'>\"{testimony.timeLord}\"</p></span>"+
                                                        "<p><b>Il Servitore del Tempo (segnalino Obiettivo grigio con +{symbol.timeToken}) dice:</b> <span class='hiddentext'>\"{testimony.timeLordServant}\"</p></span>",
                                                         EN:"Any hero in the same Zone of a character (a gray or colored Objective token) can spend 1 action to interrogate it. <span class='displayonly'>To read their testimony, select the hidden text below to reveal it.</span><span class='printonly'>Then, the Master read the related text:</span>"+
                                                         "<p><b>The Corruption Lord (colored Objective token +{symbol.corruptionToken}) says:</b> <span class='hiddentext'>\"{testimony.corruptionLord}\"</p></span>"+
                                                         "<p><b>The Corruption Servant (gray Objective token +{symbol.corruptionToken}) says:</b> <span class='hiddentext'>\"{testimony.corruptionLordServant}\"</p></span>"+
                                                         "<p><b>The Time Lord (colored Objective token with +{symbol.timeToken}) says:</b> <span class='hiddentext'>\"{testimony.timeLord}\"</p></span>"+
                                                         "<p><b>The Time Servant (gray Objective token with +{symbol.timeToken}) says:</b> <span class='hiddentext'>\"{testimony.timeLordServant}\"</p></span>"
                                                    }
                                                 ]
                                             }
                                         ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                        IT:"L'Accusa",
                                                        EN:"The Accusation"
                                                     }
                                                 ],
                                                 explanation:[
                                                    {
                                                        IT:"Qualsiasi eroe nella stessa Zona di un Signore (un segnalino Obiettivo colorato) pu&ograve; spendere 1 azione per accusarlo. Genera su quella zona il Mostro Errante messo a parte durante la preparazione con il segnalino Tempo/Corruzione corrispondente: i Signori sono molto orgogliosi e, una volta accusati, combatteranno fino alla morte! Rimuovi tutti i segnalini Obiettivo dalla mappa, compresi i segnalini Tempo e Corruzione sopra di essi, e scarta l'altro Mostro Errante messo da parte durante la preparazione.",
                                                        EN:"Any hero in the same Zone of a Lord (a colored Objective token) can spend 1 action to accuse it. Spawn on that Zone the Roaming Monster you set apart during preparation with the matching Time/Corruption token: the Lords are very proud and, once accused, they will fight to the death! Remove all of the Objective tokens from the map, including the Time and Corruption tokens on top of them, and discard the other Roaming Monster you set apart during preparation."
                                                    }
                                                 ]
                                             }
                                         ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                    {
                                                        IT:"Epilogo",
                                                        EN:"Epilogue"
                                                    }
                                                 ],
                                                 explanation:[
                                                    {
                                                        IT:"Dopo aver eliminato il Signore accusato, la Missione termina."+
                                                        "<p><b>Se hai eliminato il Signore della Corruzione {symbol.corruptionToken}, <span class='displayonly'>seleziona e leggi questo testo:</span><span class='printonly'>il Master legge questo testo:</span></b> <span class='hiddentext'>{ending.corruptionLord}</span></p>"+
                                                        "<p><b>Se hai eliminato il Signore del Tempo {symbol.timeToken}, <span class='displayonly'>seleziona e leggi questo testo:</span><span class='printonly'>il Master legge questo testo:</span></b> <span class='hiddentext'>{ending.timeLord}</span></p>",
                                                        EN:"After eliminating the accused Lord, the Mission ends."+
                                                        "<p><b>If you eliminated the Corruption Lord {symbol.corruptionToken}, <span class='displayonly'>select and read this text:</span><span class='printonly'>the Master read this text:</b> <span class='hiddentext'>{ending.corruptionLord}</span></p>"+
                                                        "<p><b>If you eliminated the Time Lord {symbol.timeToken}, <span class='displayonly'>select and read this text:</span><span class='printonly'>the Master read this text:</b> <span class='hiddentext'>{ending.timeLord}</span></p>"
                                                    }
                                                 ]
                                             }
                                         ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roaming-large" ],
                                            gameMode: [ "investigation" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id:"quests-mr-ending",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-mr-ending", "untranslated-fr" ],
            label:{
                EN:"Massive Randomness 2 ending quest"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        noPrintMode:[
                            {
                                priority:30,
                                type:"rule",
                                classNames:[ "printOnly" ],
                                name:{
                                    IT:"Solo Digitale",
                                    EN:"Digital Only"
                                },
                                explanation:{
                                    IT:"Questa Missione &egrave; stata pensata per essere giocata unicamente nella sua versione digitale. Puoi comunque giocarla nella sua versione cartacea ma assicurati che sia letta via via da qualcuno che non partecipa alla partita e che ne mantenga i segreti.",
                                    EN:"This Mission is was designed to be played only in its digital version. You can still play it in its paper version but make sure it is read gradually by someone who is not participating in the game and who keeps its secrets."
                                }
                            }
                        ]
                    }
                },{
                    type:"quests",
                    data:[
                        {
                            type:"massiveRandomness",
                            by:{
                                IT:"Di KesieV",
                                EN:"By KesieV"
                            },
                            suggestedTilesCount:4,
                            code:{
                                onQuestFinalize:(questGenerator,resources,result,questVersion,questLabels)=>{
                                
                                    let
                                        labels = questLabels[0],
                                        orders = labels.orders[0].EN;

                                    questGenerator.shuffle(labels.tokens);
                                    questGenerator.shuffle(orders);

                                    result.labels["token.order1"]=labels.tokens[0];
                                    result.labels["action.order1"]=questGenerator.pickRandomElementValue(labels[orders[0]]);

                                    result.labels["token.order2"]=labels.tokens[1];
                                    result.labels["action.order2"]=questGenerator.pickRandomElementValue(labels[orders[1]]);

                                    result.labels["token.order3"]=labels.tokens[2];
                                    result.labels["action.order3"]=questGenerator.pickRandomElementValue(labels[orders[2]]);

                                    result.labels["token.order4"]=labels.tokens[3];

                                },
                            },
                            versions:[
                                {
                                    specialRules:[ "noPrintMode" ],
                                    specialClass:[ "massiverandomness" ],
                                    labels:[
                                        [
                                            {
                                                creditsBy:[ { EN:"<a target=_blank href='https://www.kesiev.com/'>KesieV</a>" } ],
                                                thankDungeonSkills:[ {
                                                    EN:
                                                        "<a target=_blank href='https://boardgamegeek.com/user/anubys'>anubys</a>"
                                                } ],
                                                thankIdeas:[ {
                                                    EN:
                                                        "<a target=_blank href='http://www.linearkey.net/'>Bianca</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/DummySphere'>DummySphere</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/kaarol116'>kaarol116</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Metalzoic'>Metalzoic</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Rasczak'>Rasczak</a>"
                                                } ],
                                                thank:[ {
                                                    EN:
                                                        "<a target=_blank href='https://boardgamegeek.com/user/0rom3'>0rom3</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Allman'>Allman</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Dr%20Houserules'>Dr Houserules</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/franzaudio'>Franz Audio</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/GrandKhan44'>GrandKhan44</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Joabqm'>Joabqm</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/Metalzoic'>Metalzoic</a>, "+
                                                        "<a target=_blank href='https://boardgamegeek.com/user/spinal3000'>spinal3000</a>"
                                                } ],
                                                welcome:[
                                                    {
                                                        IT: "Eccomi.",
                                                        EN: "Here I am."
                                                    },{
                                                        IT: "Preparati a soccombere, mortale!",
                                                        EN: "Prepare to succumb, mortal!"
                                                    },{
                                                        IT: "Siamo arrivati alla fine, dunque.",
                                                        EN: "We have reached the end, then."
                                                    }
                                                ],
                                                tokens:[
                                                    {
                                                        IT:[ "il segnalino Corruzione {symbol.corruptionToken}", "sulla Zona del segnalino Corruzione {symbol.corruptionToken}" ],
                                                        EN:[ "the Corruption token {symbol.corruptionToken}", "on the Corruption token {symbol.corruptionToken} Zone" ]
                                                    },{
                                                        IT:[ "il segnalino Tempo {symbol.timeToken}", "sulla Zona del segnalino Tempo {symbol.timeToken}" ],
                                                        EN:[ "the Time token {symbol.timeToken}", "on the Time token {symbol.timeToken} Zone"]
                                                    },{
                                                        IT:[ "il segnalino Obiettivo colorato", "sulla Zona del segnalino Obiettivo colorato" ],
                                                        EN:[ "the colored Objective token" , "on the colored Objective token Zone" ]
                                                    },{
                                                        IT:[ "il segnalino Obiettivo grigio", "sulla Zona del segnalino Obiettivo grigio" ],
                                                        EN:[ "the grey Objective token", "on the grey Objective token Zone" ]
                                                    }
                                                ],
                                                orders:[
                                                    { EN:[ "ordersSpawners", "ordersTurnModifiers", "ordersAdvantages", "ordersElemental", "ordersNothing" ]}
                                                ],
                                                ordersElemental:[
                                                    {
                                                        IT:[ "Tutti gli Eroi ricevono 1{symbol.frostToken}." ],
                                                        EN:[ "All Heroes receive 1{symbol.frostToken}." ]
                                                    },{
                                                        IT:[ "Tutti gli Eroi ricevono 1{symbol.fireToken}." ],
                                                        EN:[ "All Heroes receive 1{symbol.fireToken}." ]
                                                    },{
                                                        IT:[ "Tira il dado a 6 facce.<ul><li><b>Se esce 1-3:</b> tutti gli Eroi ricevono 1{symbol.frostToken}.</li><li><b>Se esce 4-6:</b> tutti gli Eroi ricevono 1{symbol.fireToken}.</li></ul>" ],
                                                        EN:[ "Roll the 6-sided dice.<ul><li><b>If 1-3 is rolled:</b> all Heroes receive 1{symbol.frostToken}.</li><li><b>If 4-6 is rolled:</b> all Heroes receive 1{symbol.fireToken}.</li></ul>"]
                                                    }
                                                ],
                                                ordersSpawners:[
                                                    {
                                                        IT:[ "Genera un Mostro Errante in questa Zona." ],
                                                        EN:[ "Spawn a Roaming Monster in this Zone."]
                                                    },{
                                                        IT:[ "Genera un'orda in questa Zona." ],
                                                        EN:[ "Spawn a mob in this Zone."]
                                                    },{
                                                        IT:[ "Tira il dado a 6 facce.<ul><li><b>Se esce 1-3:</b> genera un Mostro Errante in questa Zona.</li><li><b>Se esce 4-6:</b> genera un'Orda in questa Zona.</li></ul>" ],
                                                        EN:[ "Roll the 6-sided dice.<ul><li><b>If 1-3 is rolled:</b> spawn a Roaming Monster in this Zone</li><li><b>If 4-6 is rolled:</b> spawn a mob in this Zone</li></ul>"]
                                                    }
                                                ],
                                                ordersTurnModifiers:[
                                                    {
                                                        IT:[ "Il turno dell'Eroe termina." ],
                                                        EN:[ "The Hero Turn ends."]
                                                    },{
                                                        IT:[ "L'Eroe pu&ograve; effettuare un'azione extra." ],
                                                        EN:[ "The Hero may perform an extra action."]
                                                    }
                                                ],
                                                ordersAdvantages:[
                                                    {
                                                        IT:[ "Poi rimuovere un qualsiasi gregario da un'orda sulla mappa senza guadagnare alcun PE." ],
                                                        EN:[ "You may remove 1 minion from a mob on the map without gaining any XP."]
                                                    },{
                                                        IT:[ "Tutti gli Eroi guadagnano 2 PV." ],
                                                        EN:[ "All Heroes gain 2 HP."]
                                                    },{
                                                        IT:[ "Tutti gli Eroi guadagnano 2 PE." ],
                                                        EN:[ "All Heroes gain 2 XP."]
                                                    },{
                                                        IT:[ "Tutti gli Eroi guadagnano 2 Mana." ],
                                                        EN:[ "All Heroes gain 2 Mana."]
                                                    },{
                                                        IT:[ "Tira il dado a 6 facce.<ul><li><b>Se esce 1-3:</b> tutti gli Eroi guadagnano 2 Mana</li><li><b>Se esce 4-6:</b> tutti gli Eroi guadagnano 2 PV</li></ul>" ],
                                                        EN:[ "Roll the 6-sided dice.<ul><li><b>If 1-3 is rolled:</b> all Heroes gain 2 Mana</li><li><b>If 4-6 is rolled:</b> all Heroes gain 2 HP</li></ul>"]
                                                    }
                                                ],
                                                ordersNothing:[
                                                    {
                                                        IT:[ "<i>Continua pure, mio piccolo Eroe.</i>" ],
                                                        EN:[ "<i>Go on, my little Hero.</i>" ]
                                                    },{
                                                        IT:[ "<i>Ben fatto. Ben fatto.</i>" ],
                                                        EN:[ "<i>Well done. Well done.</i>" ]
                                                    },{
                                                        IT:[ "<i>Ora puoi andare, piccoletto.</i>" ],
                                                        EN:[ "<i>You can go now, little guy.</i>" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Casualita' Massiccia",
                                            EN:"Massive Randomness"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"Un'antica pergamena ha rivelato la tremenda verit&agrave; agli eroi: non sono altro che pedine intrappolate in un gioco fatto di cartone e plastica, che il caos costringe a ripetersi in eterno. Una mappa sul retro indica un luogo preciso del regno, dove trovare il crudele architetto di questo mondo. Senza pi&ugrave; nulla da perdere, gli eroi partono per la loro ultima spedizione: eliminare la Casualit&agrave; Massiccia e liberarsi per l'eternit&agrave;.",
                                            EN:"An ancient scroll has revealed the terrible truth to the heroes: they are nothing more than pawns trapped in a game made of cardboard and plastic, which chaos forces to repeat itself forever. A map on the back indicates a specific location in the kingdom, where to find the cruel architect of this world. With nothing left to lose, the heroes set out on their final expedition: to eliminate the Massive Randomness and free themselves for eternity."
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
                                                        IT:"Gli Ordini del Caos",
                                                        EN:"The Orders of Chaos"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Seguire i 4 ordini della Casualit&agrave; Massiccia",
                                                        EN:"Follow the 4 orders of the Massive Randomness"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"La Casualit&agrave; Massiccia",
                                                        EN:"The Massive Randomness"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Incontrare la Casualit&agrave; Massiccia ed eliminarla",
                                                        EN:"Meet the Massive Randomness and eliminate it"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"L'Epilogo",
                                                        EN:"The Epilogue"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Leggere l'epilogo",
                                                        EN:"Read the epilogue"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione",
                                                        EN:"Preparation"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Pesca 3 Mostri Erranti di Livello 5 a faccia in gi&ugrave;, fanne un mazzo e mettilo da parte. Poi metti sul mazzo un classico dado a 6 facce, <i>l'Emblema del mio Essere Eterno e Caotico.</i></p><p><i>Sono la Casualit&agrave; Massiccia e questo &egrave; il mio mondo.</i></p><p><i>Da ora in poi ti piegherai ai miei ordini senza fare domande. Leggerai solo se ti dar&ograve; il permesso di farlo.</i></p>",
                                                        EN:"Draw 3 Level 5 Roaming Monsters face down, make a deck, and set it aside. Then, place a classic 6-sided die on the deck, <i>the Emblem of my Eternal and Chaotic Being.</i></p><p><i>I am the Massive Randomness and this is my world.</i></p><p><i>From now on you will bend to my orders without asking questions. You will only read if I permit you to do so.</i></p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Primo Ordine",
                                                        EN:"The First Order"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe che si trova {token.order1@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order1@0}. {action.order1@0} Ora svela il testo del Secondo Ordine.</span>",
                                                        EN:"A Hero standing {token.order1@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order1@0}. {action.order1@0} Now reveal the Second Order text.</span>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Secondo Ordine",
                                                        EN:"The Second Order"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"<span class='hiddentext'>Un Eroe che si trova {token.order2@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order2@0}. {action.order2@0} Ora svela il testo del Terzo Ordine.</span></span>",
                                                        EN:"<span class='hiddentext'>A Hero standing {token.order2@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order2@0}. {action.order2@0} Now reveal the Third Order text.</span>"
                                                    }
                                                ]
                                            }
                                        ],[
                                           {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Terzo Ordine",
                                                        EN:"The Third Order"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"<span class='hiddentext'>Un Eroe che si trova {token.order3@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <span class='hiddentext'>Rimuovi {token.order3@0}. {action.order3@0} Ora svela il testo del Quarto Ordine.</span></span>",
                                                        EN:"<span class='hiddentext'>A Hero standing {token.order3@1} can spend 1 action to reveal the following text: <span class='hiddentext'>Remove {token.order3@0}. {action.order3@0} Now reveal the Fourth Order text.</span>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                         IT:"Il Quarto Ordine",
                                                         EN:"The Fourth Order"
                                                     }
                                                 ],
                                                 explanation:[
                                                     {
                                                         IT:"<span class='hiddentext'>Un Eroe che si trova {token.order4@1} pu&ograve; spendere 1 azione per svelare il seguente testo: <i>{label.welcome}</i> Svela il testo La Casualit&agrave; Massiccia <i>e affrontami</i>.</span></span>",
                                                         EN:"<span class='hiddentext'>A Hero standing {token.order4@1} can spend 1 action to reveal the following text: <i>{label.welcome}</i> Reveal The Massive Randomness text <i>and face me</i>.</span></span>"
                                                     }
                                                 ]
                                             }
                                         ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                         IT:"La Casualit&agrave; Massiccia",
                                                         EN:"The Massive Randomness"
                                                     }
                                                 ],
                                                 explanation:[
                                                     {
                                                        IT:"<span class='hiddentext'>Scopri e metti in fila le 3 carte Mostri Erranti tenute da parte: queste sono le Incarnazioni del Caos. Rimuovi dal gioco i Mostri Erranti corrispondenti alle Incarnazioni del Caos senza guadagnare PE, se presenti. Cerca nel mazzo dei Mostri Erranti e nei suoi scarti le carte corrispondenti alle Incarnazioni del Caos e rimettile nella scatola. Infine, tira il dado a 6 facce:<ul>"+
                                                        "<li><b>Se esce 1-2:</b> evoca il primo Mostro Errante tra le Incarnazioni del Caos {token.order4@1} e lascia il dado sulla sua carta</li>"+
                                                        "<li><b>Se esce 3-4:</b> evoca il secondo Mostro Errante tra le Incarnazioni del Caos {token.order4@1} e lascia il dado sulla sua carta</li>"+
                                                        "<li><b>Se esce 5-6:</b> evoca il terzo Mostro Errante tra le Incarnazioni del Caos {token.order4@1} e lascia il dado sulla sua carta</li>"+
                                                        "</ul>"+
                                                        "Rimuovi infine {token.order4@0}.<p>Il dado a 6 facce indica sempre la carta dell'Incarnazione del Caos attualmente in gioco che pu&ograve; essere affrontata dagli Eroi. Le Incarnazioni del Caos considerano un giocatore in meno per il calcolo della loro Salute totale (con un minimo di 1 giocatore) e accumulano e risolvono ogni segnalino sulla propria carta individualmente (inclusi i segnalini Gelo {symbol.frostToken}, Fuoco {symbol.fireToken} e Salute).</p>"+
                                                        "<p>Prima dell'inizio di ogni Fase degli Eroi, se la miniatura dell'attuale Incarnazione del Caos &egrave; sulla mappa, tira il dado a 6 facce:</p><ul>"+
                                                        "<li><b>Se esce 1-2:</b> rimuovi dalla mappa la miniatura dell'attuale Incarnazione del Caos, sostituiscila con quella del primo Mostro Errante tra le Incarnazioni del Caos e lascia il dado sulla sua carta</li>"+
                                                        "<li><b>Se esce 3-4:</b> rimuovi dalla mappa la miniatura dell'attuale Incarnazione del Caos, sostituiscila con quella del secondo Mostro Errante tra le Incarnazioni del Caos e lascia il dado sulla sua carta</li>"+
                                                        "<li><b>Se esce 5-6:</b> rimuovi dalla mappa la miniatura dell'attuale Incarnazione del Caos, sostituiscila con quella del terzo Mostro Errante tra le Incarnazioni del Caos e lascia il dado sulla sua carta</li>"+
                                                        "</ul>"+
                                                        "Quando una qualsiasi delle Incarnazioni del Caos viene sconfitta, svela e leggi L'Epilogo.</span>",
                                                        EN:"<span class='hiddentext'>Unveil and line up the 3 Roaming Monster cards kept aside: these are the Incarnations of Chaos. Remove the Roaming Monsters corresponding to the Incarnations of Chaos from the game without gaining XP, if any. Search the Roaming Monsters deck and its discard pile for the cards matching the Incarnations of Chaos and return them to the box. Finally, roll the 6-sided die:<ul>"+
                                                        "<li><b>If 1-2 is rolled:</b> summon the first Roaming Monster among the Incarnations of Chaos {token.order4@1} and leave the die on its card</li>"+
                                                        "<li><b>If 3-4 is rolled:</b> summon the second Roaming Monster among the Incarnations of Chaos {token.order4@1} and leave the die on its card</li>"+
                                                        "<li><b>If 5-6 is rolled:</b> summon the third Roaming Monster among the Incarnations of Chaos {token.order4@1} and leave the die on its card</li>"+
                                                        "</ul>"+
                                                        "Finally, remove {token.order4@0}.<p>The 6-sided die always indicates the current Incarnation of Chaos in play that can be faced by the Heroes. The Incarnations of Chaos consider one less player for their total Health (with a minimum of 1 player) and collect and resolve each token on their card individually (including Frost {symbol.frostToken}, Fire {symbol.fireToken}, and Health tokens).</p>"+
                                                        "<p>Before the start of each Hero Phase, if the current Incarnation of Chaos miniature is on the map, roll the 6-sided die:</p><ul>"+
                                                        "<li><b>If 1-2 is rolled:</b> remove the current Incarnation of Chaos miniature from the map, replace it with that of the first Roaming Monster among the Incarnations of Chaos, and leave the die on its card</b></li>"+
                                                        "<li><b>If 3-4 is rolled:</b> remove the current Incarnation of Chaos miniature from the map, replace it with that of the second Roaming Monster among the Incarnations of Chaos, and leave the die on its card</b></li>"+
                                                        "<li><b>If 5-6 is rolled:</b> remove the current Incarnation of Chaos miniature from the map, replace it with that of the third Roaming Monster among the Incarnations of Chaos, and leave the die on its card</b></li>"+
                                                        "</ul>"+
                                                        "When one of the Incarnations of Chaos is defeated, reveal and read the Epilogue.</span>",
                                                     }
                                                 ]
                                             }
                                         ],[
                                            {
                                                 type:"rule",
                                                 name:[
                                                     {
                                                         IT:"L'Epilogo",
                                                         EN:"The Epilogue"
                                                     }
                                                 ],
                                                 explanation:[
                                                     {
                                                         IT:"<span class='hiddentext'>Il mondo si sgretola attorno agli eroi. Rimetti nella scatola tutti i componenti di gioco, lasciando da parte il dado a 6 facce. Poi svela questo testo: <span class='hiddentext'><p>Tira il dado a 6 facce un'ultima volta. <i>Non ti lascer&ograve; scappare cos&igrave; facilmente.</i></p><ul>"+
                                                         "<li><b>Se esce 1-3:</b> <span class='hiddentext'>la Missione termina con una vittoria</li>"+
                                                         "<li><b>Se esce 4-6:</b> <span class='hiddentext'>la Missione termina con una vittoria</li>"+
                                                         "</ul>Poi svela questo testo: <span class='hiddentext'>Gli eroi si svegliano d'improvviso, distesi sul duro letto di una familiare e buia locanda. Si guardano l'un l'altro, confusi e allarmati. E' stato tutto un brutto sogno... oppure no?"+
                                                         "<p class='credits'>Grazie per aver giocato a <b>Massive Randomness 2</b><br>Un generatore casuale di avventure one-shot per Massive Darkness 2!</p>"+
                                                         "<p class='credits'><b>Di:</b> {label.creditsBy}</p>"+
                                                         "<p class='credits'>Grazie a Alex Olteanu e Marco Portugal per aver progettato quell'esperienza alla Diablo della quale avevo bisogno da tanto tempo!</p>"+
                                                         "<p class='credits'>Grazie a {label.thankDungeonSkills} per aver creato il modulo <a target=_blank href='https://boardgamegeek.com/filepage/245223/dungeon-skills-challenge'>Dungeon Skills Challenge</a>.</p>"+
                                                         "<p class='credits'><b>Grazie per aver condiviso le loro idee a:</b> {label.thankIdeas}</p>"+
                                                         "<p class='credits'><b>Grazie a:</b> {label.thank}</p>"+
                                                         "</span></span></span>",
                                                         EN:"<span class='hiddentext'>The world crumbles around the heroes. Put all the game components back in the box, leaving the 6-sided die aside. Then reveal this text: <span class='hiddentext'><p>Roll the 6-sided die one last time. <i>I won't let you get away that easily.</i></p><ul>"+
                                                         "<li><b>If 1-3 is rolled:</b> <span class='hiddentext'>the Mission ends in victory</li>"+
                                                         "<li><b>If 4-6 is rolled:</b> <span class='hiddentext'>the Mission ends in victory</li>"+
                                                         "</ul>Then reveal this text: <span class='hiddentext'>The heroes suddenly wake up, lying on the hard bed of a familiar, dark inn. They look at each other, confused and alarmed. Was it all a bad dream... or wasn't it?"+
                                                         "<p class='credits'>Thank you for playing <b>Massive Randomness 2</b><br>A Massive Darkness 2 one-shot quest random generator!</p>"+
                                                         "<p class='credits'><b>By:</b> {label.creditsBy}</p>"+
                                                         "<p class='credits'>Thanks to Alex Olteanu and Marco Portugal for designing that tabletop Diablo-esque experience I needed for long time!</p>"+
                                                         "<p class='credits'>Thanks to {label.thankDungeonSkills} for creating the <a target=_blank href='https://boardgamegeek.com/filepage/245223/dungeon-skills-challenge'>Dungeon Skills Challenge</a> module.</p>"+
                                                         "<p class='credits'><b>Thanks for sharing their ideas to:</b> {label.thankIdeas}</p>"+
                                                         "<p class='credits'><b>Thanks to:</b> {label.thank}</p>"+
                                                         "</span></span></span>"
                                                     }
                                                 ]
                                             }
                                         ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "arena" ],
                                            gameMode: [ "massiveRandomness" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
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