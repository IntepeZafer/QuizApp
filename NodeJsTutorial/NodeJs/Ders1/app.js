let http = require("http");
let server = http.createServer((request , response) => {
    // Request.Url İle Serverdan Gelen Url İsteiğini Konsolda Görüntülüyor // request.method ile Get Veya Set Durumınu Konsola Yazıyor
    console.log(request.url , request.method);
    // Response.StatusCode İle Status Durumunu Konsola Basıyor
    console.log(response.statusCode);
    // Tarayıcıya Giden İsteği Sonlandırır
    response.setHeader("Content-Type" , "text/html")
    response.statusMessage = "OK"; // status Sonrası Dönen Mesaj
    response.write("<h1>Ana Sayfa</h1>") // Bağlantı Başarılı Sonrası Görüntülecek Olan Mesaj
    response.end();
});
// Server 3000'Port Üzerinden Çalışıyor
server.listen(3000);
console.log("Http Server Port 3000 Listenner")
// 200 Ok == Başarılı
// 400 Bad == Bağlantı Yok
// 404 Not Found == Sayfa Bulunamadı
// 500 Server Error == Sunucu Hata Verdi