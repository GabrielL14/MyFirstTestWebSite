class ClientJSRequestRawInfo{
    /**
     * 
     * @param {NavigatorRawInfo} navigatorRawInfo 
     * @param {ClientScreenInfo} screenInfo 
     */
    constructor(navigatorRawInfo, screenInfo){
        if(navigatorRawInfo instanceof NavigatorRawInfo && screenInfo instanceof ClientScreenInfo){
            this.navigatorRawInfo = navigatorRawInfo;
            this.screenInfo = screenInfo;
        }
        else{
            throw "error arguments type";
        }
    }

    IsEquals(rawInfo){
        if(rawInfo instanceof ClientJSRequestRawInfo){
            let e1 = this.navigatorRawInfo.IsEquals(rawInfo.navigatorRawInfo);
            let e2 = this.screenInfo.IsEquals(rawInfo.screenInfo);
            
            return e1 && e2;
        }
        else{
            throw "error arguments type";
        }
    }
}
class NavigatorRawInfo{
    constructor(userAgent, platform, language, languages){
        this.userAgent = userAgent;
        this.platform = platform;
        this.language = language;
        this.languages = languages;
        

    }

    IsEquals(rawInfo){
        if(rawInfo instanceof NavigatorRawInfo){
            let e1 = this.userAgent == rawInfo.userAgent;
            let e2 = this.platform == rawInfo.platform;
            let e3 = this.language == rawInfo.language;
            let e4 = this.languages == rawInfo.languages;

            return e1 && e2 && e3 && e4;
        }
        else{
            throw "error arguments type";
        }
    }
}
class ClientScreenInfo{
    constructor(width, height, availWidth, availHeight, colorDepth, pixelDepth){
        this.width = width;
        this.height = height;
        this.availWidth = availWidth;
        this.availHeight = availHeight;
        this.colorDepth = colorDepth;
        this.pixelDepth = pixelDepth;
    }

    IsEquals(screenInfo){
        if(screenInfo instanceof ClientScreenInfo){
            let e1 = this.width == screenInfo.width;
            let e2 = this.height == screenInfo.height;
            let e3 = this.availWidth == screenInfo.availWidth;
            let e4 = this.availHeight == screenInfo.availHeight;
            let e5 = this.colorDepth == screenInfo.colorDepth;
            let e6 = this.pixelDepth == screenInfo.pixelDepth;
            return e1 && e2 && e3 && e4 && e5 && e6;
        }
        else{
            throw "error arguments type";
        }
    }
}
class RequestRawInfo{
    /**
     * 
     * @param {string | undefined} method 
     * @param {string | undefined} userAgent 
     * @param {string | undefined} referer 
     * @param {string | undefined} origin 
     * @param {string | undefined} accept 
     * @param {string | undefined} acceptCharset 
     * @param {string | undefined} acceptEncoding 
     * @param {string | undefined} secFetchMode 
     * @param {string | undefined} cookie 
     */
    constructor(method, userAgent, referer, origin, accept, acceptCharset, acceptEncoding, secFetchMode, cookie){
        this.method = method;
        this.userAgent = userAgent;
        this.referer = referer;
        this.origin = origin;
        this.accept = accept;
        this.acceptCharset = acceptCharset;
        this.acceptEncoding = acceptEncoding;
        this.secFetchMode = secFetchMode;
        this.cookie = cookie;
    }

    /**
     * 
     * @param {string} method 
     * @param {ClientHeaders} headers 
     */
    MakeRawInfo(method, headers){
        if(typeof method == "string" && headers instanceof ClientHeaders){
            let userAgent = headers.GetHeader("user-agent");
            let referer = headers.GetHeader("referer");
            let origin = headers.GetHeader("origin");
            let accept = headers.GetHeader("accept");
            let acceptCharset = headers.GetHeader("accept-charset");
            let acceptEncoding = headers.GetHeader("accept-encoding");
            let secFetchMode = headers.GetHeader("sec-fetch-mode");
            let cookie = headers.GetHeader("cookie");
            return new RequestRawInfo(method, userAgent, referer, origin, accept, acceptCharset, acceptEncoding, secFetchMode, cookie);
        }
        else{
            throw "error arguments type";
        }
    }
}
class ClientHeader{
    constructor(name, value){
        if(typeof name == "string" && typeof value == "string"){
            this.name = name;
            this.value = value;
        }
        else{
            throw "error arguments type";
        }
    }
}
class ClientHeaders{
    /**
     * 
     * @param {ClientHeader[]} headers 
     */
    constructor(headers = []){
        if(headers instanceof Array){
            this.headers = headers;
        }
        else{
            throw "error arguments type";
        }
    }

    GetHeader(name){
        if(typeof name == "string"){
            let result = undefined;
            let count = this.headers.length;
            for(let i = 0; i < count; i += 1){
                let header = this.headers[i];
                if(name.toUpperCase() == header.name.toUpperCase()){
                    result = header.value;
                }
            }

            return result;
        }
        else{
            throw "error arguments type";
        }
    }
}
class ClientPageConnectionInfo{
    constructor(headers, requestRawInfo, urlPath){
        if(headers instanceof ClientHeaders && requestRawInfo instanceof RequestRawInfo, urlPath){
            this.headers = headers;
            this.requestRawInfo = requestRawInfo;
            this.urlPath = urlPath;
        }
        else{
            throw "error arguments type";
        }
    }
}
class ClientRequestInfo{
    /**
     * 
     * @param {ClientHeaders} headers 
     * @param {RequestRawInfo} rawInfo 
     * @param {string} urlPath 
     */
    constructor(headers, rawInfo, urlPath){
        if(headers instanceof Array && rawInfo instanceof RequestRawInfo && typeof urlPath == "string"){
            this.headers = headers;
            this.rawInfo = rawInfo;
            this.urlPath = urlPath;
        }
    }
}
class ClientInfo{
    /**
     * 
     * @param {string} name 
     * @param {string} remoteIp 
     * @param {string} ip 
     */
    constructor(name, remoteIp, ip){
        if(typeof name == "string" && typeof remoteIp == "string" && typeof ip == "string"){
            this.name = name;
            this.remoteIp = remoteIp;
            this.ip = ip;
            
        }
    }
}
class ClientInfos{
    constructor(){

    }
}





module.exports = {
    NavigatorRawInfo,
    RequestRawInfo,
    ClientPageConnectionInfo,
    ClientRequestInfo,
    ClientHeader,
    ClientHeaders,
    ClientInfo,
    ClientInfos,
};