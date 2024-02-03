'use strict';
const quiz = new Quiz(sorular);
const ui = new UI();


ui.btn_start.addEventListener("click" , function(){
    ui.quiz_box.classList.add("active");
    ui.btn_start.style.display = "none";
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiGosgter(quiz.soruIndex + 1 , quiz.sorular.length);
    ui.next_btn.classList.add("nonShow")
    startTimer(10);
});

ui.next_btn.addEventListener("click" , function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex += 1;
        clearInterval(counter);
        startTimer(10);
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiGosgter(quiz.soruIndex + 1 , quiz.sorular.length);
        ui.next_btn.classList.remove("active")
    }else{
        clearInterval(counter);
        ui.quiz_box.classList.remove("active")
        ui.over.classList.add("active");
        ui.skoruGoster(quiz.sorular.length , quiz.dogruCevapSayisi);
    };
});

function optionSelected(option){
    clearInterval(counter);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1;
        console.log(quiz.dogruCevapSayisi)
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend" , ui.correct);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend" , ui.incorrect);
    }
    for(let i=0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.style.display = "block";
};

ui.btn_quit.addEventListener("click" , function(){
    window.location.reload();
});

ui.btn_replay.addEventListener("click" , function(){    
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.over.classList.remove("active");
});
let counter;
function startTimer(time){
    counter = setInterval(timer , 1000);
    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            ui.time_text.textContent = "Süre Doldu";
            let cevap = quiz.soruGetir().dogruCevap;
            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend" , ui.correct);
                }
                option.classList.add("disabled");
            }
            ui.next_btn.classList.remove("nonShow");
            ui.next_btn.classList.add("show")
        }
    }
}