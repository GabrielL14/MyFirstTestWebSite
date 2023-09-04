class NavigatorRawInfo{
    constructor(userAgent, platform, language, languages){
        this.userAgent = userAgent;
        this.platform = platform;
        this.language = language;
        this.languages = languages;

    }
}
class RequestRawInfo{
    /**
     * 
     * @param {string} userAgent 
     */
    constructor(userAgent){
        this.userAgent = userAgent;
    }
}
class ClientInfo{
    constructor(name, remoteIp, ip, navigatorRawInfo){
        if(typeof name == "string" && typeof remoteIp == "string" && typeof ip == "string"){
            this.name = name;
            this.remoteIp = remoteIp;
            this.ip = ip;
            
        }
    }
}





module.exports = {NavigatorRawInfo, RequestRawInfo, ClientInfo};