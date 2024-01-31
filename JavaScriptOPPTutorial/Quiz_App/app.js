const btn_start = document.querySelector(".btn-start");

function Soru(soruMetni , cevapSecenekleri , dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-) Hangisi Js Paket Yönetimidir ?" , {a : "Node.Js" , b : "Typescript" , c : "Npm" , } , "a"),
    new Soru("2-) Hangisi .Net Paket Yönetimidir ?" , {a : "Node.Js" , b : "Nudget" , c : "Npm" , } , "b")
];
function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
};

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex]
}

const quiz = new Quiz(sorular);

btn_start.addEventListener("click" , () => {
    if(quiz.sorular.length != quiz.soruIndex){
        console.log(quiz.soruGetir())
        quiz.soruIndex += 1
    }else{
        console.log("Soru Bitti")
    }
})