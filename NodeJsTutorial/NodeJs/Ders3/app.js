'use strict'
const http = require("http");
const fsModule = require("fs");

const server = http.createServer((Request , Response) => {
    if(Request.url == "/NodeJs/Ders3/"){
        fsModule.readFile("index.html" , (error , html) => {
            Response.writeHead(200 , {"Content-Type" : "text/html"});
            Response.write();
            Response.end();
        });
    }else if(Request.url == "/NodeJs/Ders3/Hakkimizda/"){
        fsModule.readFile("Hakkimizda.html" , (error , html) => {
            Response.writeHead(200 , {"Content-Type" : "text/html"});
            Response.write();
            Response.end();
        });
    }else if(Request.url == "/NodeJs/Ders3/Blog"){
        fsModule.readFile("Blog.html" , (error , html) => {
            Response.writeHead(200 , {"Content-Type" : "text/html"});
            Response.write();
            Response.end();
        });
    }
})
server.listen(3000);
console.log("Bağlantı Başarılı");