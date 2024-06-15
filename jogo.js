let executando = false;
let acertos = 0;

const startBotao = document.querySelector("#btn--start");
const numSortear = document.querySelector(".num--atual");

const placarVit = document.querySelector(".num--vit");
const placarDer = document.querySelector(".num--der");


startBotao.addEventListener("click", startGame)

function startGame(){
   
    if(executando){
        alert("O jogo já esta em Andamento...✔")
        return
    }else{
    
    numSortear.textContent = Math.floor(Math.random()*20+1)
    
    executando = true
  } 
}

function verificarResposta(palpite){
    let numAnterior = Number(numSortear.textContent)
    numSortear.textContent = Math.floor(Math.random()*20+1)
    let numNovo = numSortear.textContent;
    if(palpite === "alto" && numNovo > numAnterior){
        acertos++
        verificarVitoria();
   
} else if (palpite === "baixo" && numNovo < numAnterior) {
    acertos++
    verificarVitoria();
    
} else {
    gameOver();
}
}
function SortearNum() {
    return numSortear.textContent = Math.floor(Math.random()*20+1)
}
function verificarVitoria(){
    if(acertos >=3){
        executando = false;
        placarVit.textContent++
        numSortear.textContent = "";
        acertos = 0;
    }
}
function gameOver(){
    placarDer.textContent++
    executando = false;
    numSortear.textContent = "";
    acertos = 0;
}
