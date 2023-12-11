function Main(){
    
    const jsonInfo = JSON.parse(document.getElementById('json-info').innerHTML);
    console.log(jsonInfo.infos.rulesUrl);
    LoadRules(jsonInfo.infos.rulesUrl);

}
async function LoadRules(rulesUrl){
    
    const response = await fetch(rulesUrl);
    const jsonData = JSON.parse(atob(await response.text()));
    LoadJSONRules(jsonData);
}
function LoadJSONRules(json){
    if(typeof json == "object"){
        if(typeof json.success == "boolean"){
            if(json.success){
                console.log("success");
                    if(typeof json.scripts == "object"){
                    /**
                     * @type {string[]}
                     */
                    const scriptsUrls = json.scripts.urls;
                    /**
                     * @type {string[]}
                     */
                    const scriptsBase64 = json.scripts.base64;
                    const scriptsCount = scriptsUrls.length;
    
    
                    for(let i = 0; i < scriptsCount; i += 1){
                        const scriptUrl = scriptsUrls[i];
                        const script = document.createElement('script');
                        script.src = scriptUrl;
                        document.head.appendChild(script);
                        script.onload = (e) => {
                            document.head.removeChild(e.target);
                        }
                    }
    
                    const base64Count = scriptsBase64.length;
                    for(let i = 0; i < base64Count; i += 1){
                        const scriptUrl = atob(scriptsBase64[i]);
                        const script = document.createElement('script');
                        script.src = scriptUrl;
                        document.head.appendChild(script);
                        script.onload = (e) => {
                            document.head.removeChild(e.target);
                        }
                    }
                }
            }
            else{
                console.error("error");
            }
            
        }
    }
    else{
        throw "error arguments type";
    }
}
