'use strict'

let http = require("http");
let server = http.createServer((request , response) => {
    response.setHeader(200 , {"Content-Type" : "text/html"})
    if(request.url == "/"){
        response.write("<h1>Ana Sayfa</h1>")
    }else if(request.url == "/Hakkımızda"){
        response.write("<h1>Hakkımızda Sayfası</h1>")
    }else if(request.url == "/Urunler"){
        response.write("<h1>Ürünler Sayfası</h1>")
    }
    response.end();
})
server.listen(3000);
console.log("Bağlantı Başarılı")