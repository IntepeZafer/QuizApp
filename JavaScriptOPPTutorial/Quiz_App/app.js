// Elemanların Tanımlandığı Kısım
const btn_start = document.querySelector(".btn_Start");
const quiz_box = document.querySelector(".quiz-box");
const question_text = document.querySelector(".question-text");
const option_list = document.querySelector(".option_list");
const next_btn = document.querySelector(".next-btn");
const over = document.querySelector(".over");

// Consructor Kısmının Oluşturulduğu Alan
function Soru(soruMetni , cevapSecenekleri , dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

// Soru Property Kısmının Diğer Sıflar Tarafından Miras Alması İçin Oluşturulan Kısım
Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

// Sorular Adında Bir Dizi Oluşturuldu Ve İçine Nesneler Eklendi
let sorular = [
    new Soru("1-) Hangisi Js Paket Yönetimidir ?" , {A : "Node.Js" , B : "Typescript" , C : "Npm" , D : "Css"} , "A"),
    new Soru("2-) Hangisi .Net Paket Yönetimidir ?" , {A : "Node.Js" , B : "Nudget" , C : "Npm" , D : "Html"} , "B"),
    new Soru("3-) Hangisi Bir Programlama Dili Değildir ?" , {A : "Node.Js" , B : "Java" , C : "C#" , D : "Html"} , "D")
];

// Quiz Adında Bir Fonksiyon Oluşturul Ve Sorular Listesinden Referans ALıyor
function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
};

// Quiz Property Oluşturuldu Ve Diğer Sınıflardan Miras Alması İçin Oluşturulan Kısım
Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex]
}

// quiz adında bir nesne oluşturuldu ve aldığı değer sorular listesi 
const quiz = new Quiz(sorular);

// button'a click event tanımlandı amacı ise tıklandığı zaman sorular listesi kadar soru getirecek ve index değerini arttıracak
btn_start.addEventListener("click" , () => {
    quiz_box.classList.add("active")
    btn_start.style.display = "none";
    soruGoster(quiz.soruGetir());
}) // click olduğunda sorular listesinin eleman sayısı quiz'in index değerine eşit değil ise soruGetir property yapısı miras alıyor ve soru adında değişkene kayır ediliyor sonra oradan gelen index değeri soruGoster fonksiyonuna gönderiliyor

// Soruların Ekrana Basılma İşlemi
function soruGoster(soru){
    let questions = `<span>${soru.soruMetni}</span>`;
    let option = '';
    for(let cevap in soru.cevapSecenekleri){
        option += `
            <div class="option">
                <span><b>${cevap}</b> : ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `;
    }
    question_text.innerHTML = questions;
    option_list.innerHTML = option;
    
}
next_btn.addEventListener("click" , () => {
    if(quiz.sorular.length != quiz.soruIndex + 1){
        let soru = quiz.soruGetir();
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
    }else{
        quiz_box.style.display = "none";
        over.style.opacity = "1";
    }
})