ModManager.modules.push(function(){

    return [
        {

            id:"interface",
            needs:[ ],
            provides:[ "interface" ],
            label:{
                EN:"Massive Randomness 2 UI configuration"
            },
            content:[
                {
                    type:"interface",
                    data:{
                        settings:[
                            {
                                type:"includeExclude",
                                isMandatory:true,
                                title:{
                                    IT:"Materiali disponibili",
                                    EN:"Available components"
                                },
                                entries:[
                                    {
                                        code:"A",
                                        isMandatory:true,
                                        isDefault:true,
                                        label:{
                                            IT:"Massive Darkness 2: Hellscape",
                                            EN:"Massive Darkness 2: Hellscape"
                                        },
                                        description:{
                                            IT:"La scatola base del gioco",
                                            EN:"The game core box"
                                        },
                                        tags:[ "md2-hellscape" ]
                                    },{
                                        code:"C",
                                        label:{
                                            IT:"Massive Darkness 2: Heavenfall",
                                            EN:"Massive Darkness 2: Heavenfall"
                                        },
                                        description:{
                                            IT:"Una modalit&agrave; campagna per Massive Darkness 2",
                                            EN:"A campaign mode for Massive Darkness 2"
                                        },
                                        tags:[ "md2-heavenfall" ]
                                    },{
                                        code:"B",
                                        label:{
                                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                                            EN:"Massive Darkness: A Quest of Crystal & Lava"
                                        },
                                        description:{
                                            IT:"6 tessere cristalli/lava",
                                            EN:"6 crystal/lava tiles"
                                        },
                                        tags:[ "md2-crystallava-cl" ]
                                    },{
                                        code:"b",
                                        label:{
                                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                                            EN:"Massive Darkness: A Quest of Crystal & Lava"
                                        },
                                        description:{
                                            IT:"9 tessere del pack di aggiornamento",
                                            EN:"9 upgrade pack tiles"
                                        },
                                        tags:[ "md2-crystallava-up" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Grandezza delle mappa",
                                    EN:"Map size"
                                },
                                entries:[
                                    {
                                        code:"0",
                                        label:{
                                            IT:"Piccola",
                                            EN:"Small"
                                        },
                                        description:{
                                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in meno rispetto a quelle suggerite.",
                                            EN:"If possible, the quest map has 1 fewer tile than suggested."
                                        },
                                        tags:[ "maps-size-small" ]
                                    },{
                                        code:"1",
                                        isDefault:true,
                                        label:{
                                            IT:"Normale",
                                            EN:"Normal"
                                        },
                                        description:{
                                            IT:"La mappa dell'avventura ha il numero suggerito di tessere.",
                                            EN:"The adventure map has the suggested number of tiles."
                                        },
                                        tags:[ "maps-size-normal" ]
                                    },{
                                        code:"2",
                                        label:{
                                            IT:"Grande",
                                            EN:"Large"
                                        },
                                        description:{
                                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in pi&ugrave; rispetto a quelle suggerite.",
                                            EN:"If possible, the quest map has 1 more tile than suggested."
                                        },
                                        tags:[ "maps-size-large" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Stile della mappa",
                                    EN:"Map style"
                                },
                                entries:[
                                    {
                                        code:"Z",
                                        isDefault:true,
                                        label:{
                                            IT:"Uniforme",
                                            EN:"Uniform"
                                        },
                                        description:{
                                            IT:"Tutte le tessere della mappa mostrano la stessa ambientazione.",
                                            EN:"All tiles on the map show the same setting.",
                                        },
                                        tags:[ "maps-default-uniform" ]
                                    },{
                                        code:"z",
                                        label:{
                                            IT:"Interdimensionale",
                                            EN:"Interdimensional"
                                        },
                                        description:{
                                            IT:"Le tessere sulla mappa possono mostrare ambientazioni diverse. Aumenta la variet&agrave; di struttura a scapito dell'estetica.",
                                            EN:"The map tiles can show different environments. Increase layout variety to the detriment of aesthetics.",
                                        },
                                        tags:[ "maps-default-notuniform" ]
                                    }
                                ]
                            },{
                                type:"includeExclude",
                                title:{
                                    IT:"Extra",
                                    EN:"Extras"
                                },
                                entries:[
                                    {
                                        code:"X",
                                        label:{
                                            IT:"Sfide",
                                            EN:"Challenges"
                                        },
                                        description:{
                                            IT:"Aggiunge all'avventura delle sfide extra, che potrai decidere se accettare o meno.",
                                            EN:"It adds extra challenges to the adventure, you can decide whether to accept or not.",
                                        },
                                        tags:[ "challenges-default" ]
                                    },
                                    {
                                        code:"Y",
                                        label:{
                                            IT:"Modalit&agrave; Esplorazione",
                                            EN:"Dungeon Crawling Mode"
                                        },
                                        description:{
                                            IT:"Il contenuto delle Camere &egrave; nascosto e viene mostrato quando vengono rivelate.",
                                            EN:"The content of the Chambers is hidden and is shown when they are revealed.",
                                        },
                                        tags:[ "gamemode-dungeoncrawling" ]
                                    },
                                    {
                                        code:"W",
                                        label:{
                                            IT:"Escludi avventure non tradotte",
                                            EN:"Exclude untranslated quests",
                                            FR:"Exclure les qu&#xEA;tes non traduites"

                                        },
                                        description:{
                                            IT:"Non vengono generate le avventure non disponibili nella lingua selezionata.",
                                            EN:"Adventures not available in the selected language are not generated.",
                                            FR:"Les aventures non disponibles dans la langue s&#xE9;lectionn&#xE9;e ne sont pas g&#xE9;n&#xE9;r&#xE9;es."
                                        },
                                        languageExcludeTags:{
                                            IT:[ "untranslated-it" ],
                                            EN:[ "untranslated-en" ],
                                            FR:[ "untranslated-fr" ]
                                        }
                                    },
                                    {
                                        isButton:true,
                                        isInstallerButton:true,
                                        label:{
                                            IT:"Installa",
                                            EN:"Install"
                                        },
                                        description:{
                                            IT:"Permette di usare Massive Randomness 2 offline.",
                                            EN:"Allows you to use Massive Randomness 2 offline."
                                        }
                                    }
                                ]
                            }
                        ],
                        supportedLanguages:{
                            EN:"English",
                            IT:"Italiano",
                            FR:"Fran&#xE7;ais"
                        },
                        labels:{                            
                            toolName:{
                                IT:"Massive Randomness 2",
                                EN:"Massive Randomness 2"
                            },
                            toolDescription:{
                                IT:"Un generatore casuale di avventure one-shot per Massive Darkness 2",
                                EN:"A Massive Darkness 2 one-shot quest random generator"
                            },
                            footer:{
                                IT:"Meglio su Firefox/Chrome - {toolName} - {toolVersion} - &copy; 2024 by KesieV - Sorgenti su <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>",
                                EN:"Best on Firefox/Chrome - {toolName} - {toolVersion} - &copy; 2024 by KesieV - Sources at <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>"
                            },
                            notice:{
                                EN:"Massive Darkness 2 and all related properties are owned by CMON Global Limited",
                                IT:"Massive Darkness 2 e tutte le relative propriet&agrave; sono marchi registrati CMON Global Limited"
                            },
                            wait:{
                                IT:"Sto preparando l'avventura...",
                                EN:"Please wait..."
                            },
                            tooltipNewQuest:{
                                IT:"Genera una nuova avventura",
                                EN:"Generate a new quest"
                            },
                            tooltipSettings:{
                                IT:"Impostazioni",
                                EN:"Settings"
                            },
                            languageUnavailable:{
                                IT:"Questa avventura non &egrave; disponibile in italiano. Puoi escludere le avventure non tradotte dalle opzioni.",
                                EN:"This adventure is not available in English. You can exclude untranslated adventures from the options.",
                                FR:"Cette aventure n&#x27;est pas disponible en fran&#xE7;ais. Vous pouvez exclure les aventures non traduites des options."
                            },
                            questUnavailable:{
                                IT:"Spiacente. Questa avventura non &egrave; disponibile.",
                                EN:"Sorry. This adventure is not available.",
                                FR:"D&#xE9;sol&#xE9;. Cette aventure n&#x27;est pas disponible."
                            }
                        }
                    }
                }
            ]
        }
    ]

});
