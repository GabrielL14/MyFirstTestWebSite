(function(){
    function ToStrAddress(str){
        return 
    }
    function GetUrl(){
        
    }
    function IncludeScript(src){
        let script = document.createElement("script");
        script.src = src;
        document.head.appendChild(script);
    }
    function SetPage(dom){
        document.open();
        document.write("");
        document.close();
        document.head = dom.head;
        document.body = dom.body;
    }
    
    var url = new URL(location.href);
    var entries = url.searchParams.entries;
})()
