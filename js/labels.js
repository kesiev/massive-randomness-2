Labels=(function(){
        
    function wrap(flags,key,text) {
        if (flags.debugRender)
            return "<span style='color:#f00; border:1px solid #f00;display:inline-block' title=\""+key+"\">"+text+"</span>";
        else
            return text;
    }

    function simpleSolve(out,language,values) {
        return out.replace(/\{([^}]+)\}/g,(m,m1)=>{
            let
                text = m1.split("@"),
                parts = text[0].split(":");
            if (values[parts[0]] !== undefined) {
                let
                    subOut = values[parts[0]][language];
                if (text[1])
                    subOut = subOut[text[1]];
                if (parts[1] == "capital")
                    return subOut[0].toUpperCase()+subOut.substr(1,subOut.length);
                else
                    return subOut;
            } else
                return wrap(flags,m1,"{???}");
        });
    }

    function solveLabel(label,values) {
        let
            out = {};
        for (let k in label)
            if (typeof label[k] === "string")
                out[k] = simpleSolve(label[k],k,values);
            else
                out[k] = label[k].map(v=>simpleSolve(v,k,values));
        return out;
    }

    function getLabelNumber(result,language,part) {
        let
            parts = part.split("-"),
            out = part;
        if (result.labels[parts[0]]) {
            out = result.labels[parts[0]];
            if (out[language])
                out=out[language];
            else if (out.EN)
                out=out.EN;
            if (parts[1])
                out=out[parts[1]];
            out=simpleSolve(out+"",language,result.labels);
        }
        return parseFloat(out);
    }

    function getLabel(flags,resources,result,language,label,index) {
        let
            out;
        if (label[language])
            out=label[language];
        else if (label.EN)
            out=label.EN;
        else
            out=label;
        if (result) {
            if (index !== undefined)
                out = out[index];
            out = String(out);
            return out.replace(/\{([^}]+)\}/g,(m,m1)=>{
                let
                    text = m1.split("@"),
                    parts = text[0].split(":");
                if (result.labels[parts[0]] !== undefined) {
                    let
                        subOut = getLabel(flags,resources,result,language,result.labels[parts[0]], text[1]);
                    switch (parts[1]) {
                        case "capital":{
                            return wrap(flags,m1,subOut[0].toUpperCase()+subOut.substr(1,subOut.length));
                            break;
                        }
                        case "split":{
                            let
                                debug = String(subOut),
                                value = parseFloat(subOut),
                                delta = 0,
                                add = 0,
                                by = getLabelNumber(result,language,parts[2]);
                            debug+=" / ("+by+" ["+parts[2]+"]"
                            if (parts[3]) {
                                delta=getLabelNumber(result,language,parts[3]);
                                debug+=(delta<0?"-":"+")+delta+" ["+parts[3]+"]";
                            }
                            debug+=") ";
                            if (parts[4]) {
                                add=getLabelNumber(result,language,parts[4]);
                                debug+=(add<0?"-":"+")+add+" ["+parts[4]+"]";
                            }
                            debug+=" = ";
                            value=Math.floor(value/(by+delta))+add;
                            debug+=value;
                            if (value<=1)
                                value = 1;
                            return wrap(flags,m1,flags.debugRender ? debug : value);
                            break;
                        }
                        default:{
                            return wrap(flags,m1,subOut);
                        }
                    }
                } else
                    return wrap(flags,m1,"{???}");
            });
        } else return wrap(flags,"?","[???]");
    }

    return {

        solveLabel:(label,values)=>{
            return solveLabel(label,values);
        },
        getLabel:(flags,resources,result,language,label,index)=>{
            return getLabel(flags,resources,result,language,label,index);
        }

    }

})();        