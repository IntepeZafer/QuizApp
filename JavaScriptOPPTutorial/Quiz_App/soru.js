'use strict'

function Soru(soruMetni , cevapSecenekleri , dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-) Hangisi Js Paket Yönetimidir ?" , {A : "Node.Js" , B : "Typescript" , C : "Npm" , D : "Css"} , "A"),
    new Soru("2-) Hangisi .Net Paket Yönetimidir ?" , {A : "Node.Js" , B : "Nudget" , C : "Npm" , D : "Html"} , "B"),
    new Soru("3-) Hangisi Bir Programlama Dili Değildir ?" , {A : "Node.Js" , B : "Java" , C : "C#" , D : "Html"} , "D")
];