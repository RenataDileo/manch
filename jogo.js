let executando = false;
const startBotao = document.querySelector("#btn--start");
const numeroSortear = document.querySelector(".num--atual");


startBotao.addEventListener("click", startGame)

function startGame(){
   
    if(executando){
        alert("O jogo já esta em Andamento...✔")
        return
    }else{
    
    numeroSortear.textContent = Math.floor(Math.random()*20+1)
    
    executando = true
  } 
}
function verificarResposta(palpite){
    alert(`O palpite foi ${palpite}`)
}
