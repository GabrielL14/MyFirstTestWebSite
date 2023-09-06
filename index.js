const http = require('http');
const fs = require('fs');
const path = require('path');
//const WSAPI = require('ws');

//const AWS = require('aws-sdk');
const script1 = require('./njs-script1');
//const s3 = new AWS.S3();

console.log("hello world i am a node js app in cyclic.");

let firstExecution = true;


const server = http.createServer((req, res) => {
    let url = req.url;
    let ip = req.socket.remoteAddress;
    if(url == "/"){
        if(!firstExecution){

        }
        
        
        
        console.log("\n\nip: ", ip, "-----------------------------------------------------------------------------");
        console.log(req.headers);
    }
    //console.log(req.method);
    //console.log(req.url);
    if(req.method == "GET"){
        let fileNameR = GetFileNameByPath(url);
        let fileName = fileNameR.fileName;
        let contentType = fileNameR.contentType;

        const headers = req.rawHeaders;
        
        
        fs.stat(fileName, (err, stats) => {
            if(err == null){
                if(stats.isFile()){
                    fs.readFile(fileName, (err, data) => {
                        if(err == null){
                            res.setHeader("Content-Type", contentType);
                            res.write(data);
                        }
                        else{
                            res.setHeader("Content-Type", "text/html");
                            res.write("<h1>ERROR TO READ FILE</h1>");
                            //console.log("ERROR TO READ FILE");
                        }
                        res.end();
                    })
                }
                else{
                    res.setHeader("Content-Type", "text/html");
                    res.write("<h1>ERROR ELEMENT IN NOT FILE</h1>");
                    //console.log("ERROR ELEMENT IS NOT FILE");
                    res.end();
                }
            }
            else{
                res.setHeader("Content-Type", "text/html");
                //console.log("ERROR FILE NOT FOUND");
                res.write("<h1>ERROR FILE NOT FOUND</h1>");
                res.end();
            }
        });
    }
    if(req.method == "POST"){
        req.on('data', (chunk) => {
            if(req.headers['content-type'] == "application/json"){
                console.log("post request: ", JSON.parse(chunk));
            }
            else{
                console.log(chunk);
            }
        })
        res.end();
    }
    firstExecution = false;
});
server.listen(8080);
//server.listen(3000);

function GetFileNameByPath(pathStr){
    let fileName = "";
    let contentType = "text/html";
    let ext = path.extname(pathStr);
    let baseName = path.basename(pathStr);
    let dirName = path.dirname(pathStr);
    if(ext == "" || ext == ".html"){
        contentType = "text/html";
    }
    if(ext == ".js"){
        contentType = "text/javascript";
    }
    if(ext == ".css"){
        contentType = "text/css";
    }
    if(ext == ".txt"){
        contentType = "text/plain";
    }
    if(ext == ".json"){
        contentType = "application/json";
    }


    if(baseName == "" || baseName == "index.html"){
        fileName = "index.html";
    }
    if(dirName == "/js"){
        fileName = "js/" + baseName;
    }
    if(dirName == "/css"){
        fileName = "css/" + baseName;
    }
    if(dirName == "/json"){
        fileName = "json/" + baseName;
    }

    return {
        fileName: fileName,
        contentType: contentType
    }
}
