const http = require('http');
const fs = require('fs');
const path = require('path');
//const WSAPI = require('ws');

//const AWS = require('aws-sdk');
const script1 = require('./njs-script1');
//const s3 = new AWS.S3();

console.log("hello world i am a node js app in cyclic.");

let firstExecution = true;

/**
 * 
 * @param {string} fileName 
 * @param {(infoType: string, status: number, data: Buffer | null)} fileCallback 
 */
function ReadFile(fileName, fileCallback){
    fs.stat(fileName, (err, stats) => {
        if(err == null){
            if(stats.isFile()){
                fs.readFile(fileName, (err, data) => {
                    if(err == null){
                        fileCallback("success", 200, data);
                    }
                    else{
                        fileCallback("read-file-error", 404, null);
                    }
                });
                
            }
            else{
                fileCallback("is-not-file", 404, null);
            }
        }
        else{
            fileCallback("resource-not-exist", 404, null);
        }
    })
}
/**
 * 
 * @param {string} fileName 
 * @param {(status: number, data: Buffer)} fileCallback 
 */
function ReadResource(fileName, fileCallback){
    ReadFile("resources/" + fileName, fileCallback);
}

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
        let isResource = true;
        if(url == "/rules"){
            isResource = false;
            ReadFile("datas/json/rules.json", (infoType, statusCode, data) => {
                const jsonError = {success: false};
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                if(data != null){
                    res.write(data.toString("base64"));
                }
                else{
                    res.write(Buffer.from(JSON.stringify(jsonError)).toString("base64"));
                }
                res.end();
                console.log("dfgfd");
            })
        }
        if(isResource){
            console.log(fileName);
            ReadResource(fileName, (infoType, status, data) => {
                res.statusCode = status;
                const errorHtml = `<!DOCTYPE html>
                <html>
                    <head>
                        <title>Resource Not Found</title>
                        <style>
                        body{
                            height: 100vh;
                            background-color: black;
                        }
                        .message-parent{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                        }
                        .message{
                            color: red;
                            text-align: center;
                        }
                        .message > h1{
                            font-size: 100px;
                        }
                        .message > p{
                            font-size: 40px;
                        }
                        </style>
                    </head>
                    <body>
                        <div class = "message-parent">
                            <div class = "message">
                                <h1>Error To Found This Resource</h1>
                                <p>${infoType}</p>
                            </siv>
                        </div>
                    </body>
                </html>
                `
                if(data != null){
                    res.setHeader("Content-Type", contentType);
                    res.write(data);
                }
                else{
                    res.setHeader("Content-Type", "text/html");
                    res.write(errorHtml)
                }
                res.end();
            });
        }
    }
    if(req.method == "POST"){
        req.on('data', (chunk) => {
            if(req.headers['content-type'] == "application/json"){
                console.log("POST");
                console.log("post request: ", JSON.parse(chunk));
            }
            else{
                
            }
        })
        res.end();
    }
    firstExecution = false;
});
server.listen(8080);
//server.listen(3000);

function GetFileNameByPath(pathStr){
    if(typeof pathStr == "string"){
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
        if(ext == ".svg"){
            contentType = "image/svg+xml";
        }
        if(ext == ".png"){
            contentType = "image/png";
        }
        if(ext == ".jpeg"){
            contentType = "image/jpeg";
        }
        if(ext == ".txt"){
            contentType = "text/plain";
        }
        if(ext == ".json"){
            contentType = "application/json";
        }



        fileName = pathStr.slice(1, pathStr.length);
        if(baseName == ""){
            fileName = "index.html";
        }
        return {
            fileName: fileName,
            contentType: contentType
        }
    }
    else{
        throw "error arguments type";
    }
}
