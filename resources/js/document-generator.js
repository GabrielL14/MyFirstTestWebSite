function GeneratePortableDocument(title, originId, styleCode = "", scriptsLinks = [], scriptsCodes = [], infos = {}){
    if(typeof title == "string" && typeof styleCode == "string" && scriptsLinks instanceof Array && scriptsCodes instanceof Array && typeof originId == "string" && typeof infos == "object"){
        const dom = document.implementation.createHTMLDocument("title");

        const style = document.createElement('style');
        style.innerHTML = styleCode;
        dom.head.appendChild(style);

        const jsonInfoScript = document.createElement('script');
        jsonInfoScript.id = "json-info";
        jsonInfoScript.innerHTML = JSON.stringify({timestamp: Date.now(), originId: originId, infos: infos});
        jsonInfoScript.type = "application/json";

        dom.head.appendChild(jsonInfoScript);

        const scriptsLinksCount = scriptsLinks.length;
        for(let i = 0; i < scriptsLinksCount; i += 1){
            const script = document.createElement("script");
            const scriptLink = scriptsLinks[i];
            if(typeof scriptLink == "string"){
                script.src = scriptLink;
                dom.head.appendChild(script);
            }
            else{
                throw "error element value type";
            }
        }
        const scriptsCodesCount = scriptsCodes.length;
        for(let i = 0; i < scriptsCodesCount; i += 1){
            const script = document.createElement("script");
            const scriptCode = scriptsCodes[i];
            if(typeof scriptCode == "string"){
                script.innerHTML = scriptCode;
                dom.body.appendChild(script);

            }
            else{
                throw "error element value type";
            }
            

        }


        return dom;
    }
    else{
        throw "error arguments type";
    }
}
function DocumentToUrlData(dom, toBase64){
    if(dom instanceof Document && typeof toBase64 == "boolean"){
        const domStr = "<!DOCTYPE html>" + dom.documentElement.outerHTML;
        let result = "data:text/html," + domStr;
        if(toBase64){
            result = "data:text/html;base64," + btoa(domStr);
        }
        return result;
    }
    else{
        throw "error arguments type";
    }
}
function DownloadDocument(dom){
    if(dom instanceof Document){

        const domStr = "<!DOCTYPE html>" + dom.documentElement.outerHTML;
        const blob = new Blob([domStr], {type:"text/html"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "document.html";
        a.click();
        URL.revokeObjectURL(url);
    }
    else{
        throw "error arguments type";
    }
}
function DownloadText(fileName, text){
    if(typeof fileName == "string" && typeof text == "string"){
        const blob = new Blob([text], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();

        URL.revokeObjectURL(url);
    }
    else{
        throw "Error arguments type";
    }
}

function GenerateDocument1(){
    return GeneratePortableDocument("HTML Document", "doc-1", '', ["http://" + location.host + "/js/document-generator.js", "http://" + location.host + "/js/inject.js"], [], {prop1:"str1", prop2: "str2"});
}
function GenerateDocument2(){
    const dataMainScriptSrc = "http://" + location.host + "/js/url-data-main.js";
    const rulesUrl = "http://" + location.host + "/rules";
    const result = GeneratePortableDocument("HTML Document", "doc-2", '', [dataMainScriptSrc], ['Main();'], {rulesUrl});
    
    return result;
}


