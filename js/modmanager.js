ModManager=(function() {

    let
        isLoaded=false,
        modulesData=[];

    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }        

    function initialize() {
        if (!isLoaded) {
            isLoaded=true;
            ModManager.modules.forEach(loader=>{
                let
                    loaded = loader();
                loaded.forEach(data=>{
                    modulesData.push(data);
                })
            });
        }
    }

    return {
        dump:()=>{
            initialize();
            return modulesData;
        },
        load:(rules)=>{

            let
                toLoad = rules.needs || [],
                excludes = rules.excludes || [],
                processed = [],
                bundle = {};

            initialize();

            while (toLoad.length) {

                let
                    loading = toLoad;
                toLoad = [];

                modulesData.forEach((data,id)=>{
                    if (processed[id] === undefined) {

                        // Check if the module is banned or must be loaded

                        let
                            banned = false,
                            toBeLoaded = false;
                            
                        data.provides.forEach(provided=>{
                            if (excludes.indexOf(provided) != -1)
                                banned=true;
                            else if (loading.indexOf(provided) != -1)
                                toBeLoaded = true;
                        });

                        // Modules may be banned also if requiring an excluded tag

                        if (!banned)
                            data.needs.forEach(need=>{
                                if (excludes.indexOf(need) != -1)
                                    banned=true;
                            });
                            
                        if (banned)
                            processed[id]=false;
                        else if (toBeLoaded) {

                            // Check if the module must be loaded

                            processed[id]=true;

                            data.content.forEach(content=>{
                                let
                                    type = content.type;
                                if (Array.isArray(content.data)) {
                                    if (!bundle[type]) bundle[type]=[];
                                    content.data.forEach(element=>{
                                        bundle[type].push(clone(element));
                                    })
                                } else {
                                    if (!bundle[type]) bundle[type]={};
                                    for (let k in content.data)
                                        bundle[type][k]=clone(content.data[k]);
                                }
                            })

                            data.needs.forEach(tag=>{
                                toLoad.push(tag);
                            })

                        }

                    }
                });
            
            }

            return bundle;
        }
    }
})();

ModManager.modules = [];