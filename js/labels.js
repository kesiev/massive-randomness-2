Labels=(function(){
        
    function wrap(flags,key,text) {
        if (flags.debugRender)
            return "<span style='color:#f00; border:1px solid #f00;display:inline-block' title=\""+key+"\">"+text+"</span>";
        else
            return text;
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
                    if (parts[1] == "capital")
                        return wrap(flags,m1,subOut[0].toUpperCase()+subOut.substr(1,subOut.length));
                    else
                        return wrap(flags,m1,subOut);
                } else
                    return wrap(flags,m1,"{???}");
            });
        } else return wrap(flags,"?","[???]");
    }

    return {

        getLabel:(flags,resources,result,language,label,index)=>{
            return getLabel(flags,resources,result,language,label,index);
        }

    }

})();        