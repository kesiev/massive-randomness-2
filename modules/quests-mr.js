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
                },
                {
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
                                                        EN:[ "to a remote dungeon to talk about it..." ]
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