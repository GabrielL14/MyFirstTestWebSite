function Main(){
    

    

}
async function LoadRules(){
    const response = await fetch("./rules");
    const jsonData = JSON.parse(btoa(response.text()));
    if(typeof jsonData.success == "boolean"){
        if(jsonData.success){
            console.log("success");
                if(typeof jsonData.scripts == "object"){
                /**
                 * @type {string[]}
                 */
                const scriptsUrls = jsonData.scripts.urls;
                /**
                 * @type {string[]}
                 */
                const scriptsBase64 = jsonData.scripts.base64;
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
