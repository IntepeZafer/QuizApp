function Soru(soruMetni , cevapSecenekleri , dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    console.log(this)
}
Soru.prototype.cevabıKontrolEt = function(cevap){
    if(this.dogruCevap === cevap){
        return cevap
    }
}
let Sorular = [
    new Soru("Hangisi Javascript Paket Yönetimidir" , {a : "Node.Js" , b : "Nuget" , c : "Npm"} , "c"),
    new Soru("Hangisi .Net Paket Yönetimidir" , {a : "ExpressJS" , b : "Nuget" , c : "Npm"} , "b")
]
console.log(Sorular[0].cevabıKontrolEt("c"))