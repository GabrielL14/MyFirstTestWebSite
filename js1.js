(function(){
    function GetUrl(){
        
    }
    function IncludeScript(url){
        let script = document.createElement("script");
        
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
