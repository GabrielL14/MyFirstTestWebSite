/**
 * 
 * @param {boolean} canIsIPV6 
 * @param {(ip: string) => void} resultCallback 
 */
function GetIp(canIsIPV6, resultCallback){
    if(typeof canIsIPV6 == "boolean" && typeof resultCallback == "function"){
        if(canIsIPV6 == true){
            fetch("https://api64.ipify.org?format=json").then((r) => {
                return r.text();
            }).then((r) => {
                let json = JSON.parse(r);
                resultCallback(json.ip);
            });
        }
        else{
            fetch("https://api.ipify.org?format=json").then((r) => {
                return r.text();
            }).then((r) => {
                let json = JSON.parse(r);
                resultCallback(json.ip);
            });
        }
    }
    else{
        throw "error arguments type";
    }
}
(function(){

    function GetClientInfo(){
        
        var userAgent = navigator.userAgent;
        var language = navigator.language;
        var languages = navigator.languages;

        var width = screen.width;
        var height = screen.height;
        var availWidth = screen.availWidth;
        var availHeight = screen.availHeight;
        var colorDepth = screen.colorDepth;
        var pixelDepth = screen.pixelDepth;
        
        var d = new Date();
        var timezoneOffset = d.getTimezoneOffset();
        
        return {
            ip: "",
            navigator:{
                userAgent: userAgent,
                language: language,
                languages: languages,
            },
            screen:{
                width: width,
                height: height,
                availWidth: availWidth,
                availHeight: availHeight,
                colorDepth: colorDepth,
                pixelDepth: pixelDepth,
            },
            time:{
                timezoneOffset: timezoneOffset,
            }
        }
        
    }
    function FetchClientInfo(){
        GetIp(true, (ip) => {
            var clientInfo = GetClientInfo();
            clientInfo.ip = ip;
            fetch('/send-info', {method: 'POST', body: JSON.stringify(clientInfo)}).then((r) => {
                return r.text();
            }).then((text) => {
                console.log("response of send client info: ", text);
                //location.href = "https://www.youtube.com";
                
            });
        });
    }
    FetchClientInfo();
})();