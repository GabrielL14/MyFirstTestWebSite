const http = require('http');
const fs = require('fs');
const path = require('path');
console.log("hello world i am a node js app in cyclic.");


const server = http.createServer((req, res) => {
    let url = req.url;
    let ip = req.socket.remoteAddress;
    console.log("ip: ", ip);
    let fileNameR = GetFileNameByPath(url);
    let fileName = fileNameR.fileName;
    let contentType = fileNameR.contentType;
    fs.stat(fileName, (err, stats) => {
        if(err == null){
            if(stats.isFile()){
                fs.readFile(fileName, (err, data) => {
                    if(err == null){
                        res.write(data);
                    }
                    else{
                        res.write("<h1>ERROR TO READ FILE</h1>");
                        console.log("ERROR TO READ FILE");
                    }
                    res.end();
                })
            }
            else{
                res.write("<h1>ERROR ELEMENT IN NOT FILE</h1>");
                console.log("ERROR ELEMENT IS NOT FILE");
                res.end();
            }
        }
        else{
            console.log("ERROR FILE NOT FOUND");
            res.write("<h1>ERROR FILE NOT FOUND</h1>");
            res.end();
        }
    });
});


function GetFileNameByPath(pathStr){
    let fileName = "";
    let contentType = "text/html";
    let ext = path.extname(pathStr);
    let baseName = path.basename(pathStr);
    if(ext == "" || ext == ".html"){
        contentType = "text/html";
    }
    if(ext == ".js"){
        contentType == "text/javascript";
    }
    if(ext == ".css"){
        contentType == "text/css";
    }
    if(ext == ".txt"){
        contentType == "text/plain";
    }
    if(ext == ".json"){
        contentType == "application/json";
    }


    if(pathStr == "/"){
        fileName == "index.html";
    }

    return {
        fileName: fileName,
        contentType: contentType
    }
}

server.listen(3000);