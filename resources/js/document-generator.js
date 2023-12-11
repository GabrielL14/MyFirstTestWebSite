function GeneratePortableDocument(title, originId, styleCode = "", scriptsLinks = [], scriptsCodes = [], infos = {}){
    if(typeof title == "string" && typeof styleCode == "string" && scriptsLinks instanceof Array && scriptsCodes instanceof Array && typeof originId == "string" && typeof infos == "object"){
        const dom = document.implementation.createHTMLDocument("title");

        const style = document.createElement('style');
        style.innerHTML = styleCode;
        dom.head.appendChild(style);

        const jsonInfoScript = document.createElement('script');
        jsonInfoScript.id = "json-info";
        jsonInfoScript.innerHTML = JSON.stringify({timestamp: Date.now(), originId: originId});
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
            if(typeof scriptCode == "script"){
                script.innerHTML = scriptCode;
                dom.body.appendChild(script);

            }
            else{
                throw "error element value type";
            }
            

        }

        const h1 = document.createElement('h1');
        h1.innerHTML = "Hello World. I am a document";
        h1.style = "color: aqua; font-size: 100px;";

        dom.body.appendChild(h1);


        return dom;
    }
    else{
        throw "error arguments type";
    }
}
function DocumentToUrlDataBase64(dom){
    if(dom instanceof Document){
        const domStr = "<!DOCTYPE html>" + dom.documentElement.outerHTML;
        return "data:text/html;base64," + btoa(domStr);
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
    return GeneratePortableDocument("HTML Document", "doc-1", '', ["http://192.168.0.160:8080/js/document-generator.js", "http://192.168.0.160:8080/js/inject.js"], [], {prop1:"str1", prop2: "str2"});
}


