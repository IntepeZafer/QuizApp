'use strict'

function UI(){
    this.btn_start = document.querySelector(".btn_Start"),
    this.quiz_box = document.querySelector(".quiz-box"),
    this.question_text = document.querySelector(".question-text"),
    this.option_list = document.querySelector(".option_list"),
    this.next_btn = document.querySelector(".next-btn"),
    this.over = document.querySelector(".over"),
    this.option = document.querySelectorAll(".option"),
    this.correct = `<div class="icon"><i class="fas fa-check"></i></div>
    </div>`,
    this.incorrect = `<div class="icon"><i class="fas fa-times"></i></div>
    </div>`,
    this.score_text = document.querySelector(".score_text"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.time_text = document.querySelector(".time_text p"),
    this.time_second = document.querySelector(".time-second p")
}

UI.prototype.soruGoster = function(soru){
    let questions = `<span>${soru.soruMetni}</span>`;
    let option = '';
    for(let cevap in soru.cevapSecenekleri){
        option += `
            <div class="option">
                <span><b>${cevap}</b> : ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `;
    };

    this.question_text.innerHTML = questions;
    this.option_list.innerHTML = option;
    const options = this.option_list.querySelectorAll(".option");
    for(let opt of options){
        opt.setAttribute("onclick" , "optionSelected(this)");
    };
};

UI.prototype.soruSayisiGosgter = function(soruSirasi , toplamSoru){
    let tag = ` <span class="badge bg-warning"><b>Soru Sayısı: </b>${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz-box .card-footer .qustion_index").innerHTML = tag;
};

UI.prototype.skoruGoster = function(toplamSoru , dogruCevap){
    let tag = `
        <p>Toplam ${toplamSoru} Sorudan ${dogruCevap} Doğru Cevabınız Var</p>
    `;
    this.score_text.innerHTML = tag;
}