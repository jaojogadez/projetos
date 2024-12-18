/* TIMER 1*/
let timerInterval;
const display = document.getElementById("timer")
let timeLeft = 10 * 60 // tempo do temporizador
const updateTimer = () =>{
    let minutes = Math.floor(timeLeft / 60) // var correspondente aos minutos Math.floor é usado para arredondadar o resultado da divisão para um inteiro
    let seconds = timeLeft % 60 // var correspondente aos segundos
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    const formatTimer = `${minutes}:${seconds}`
    display.textContent = formatTimer
    if(timeLeft === 0 ){
      display.textContent = "Tempo esgotado!"
      clearInterval(timerInterval)
    }
    else{
      timeLeft--
    }
}
timeInterval = setInterval(updateTimer, 1000)
updateTimer()

/* TIMER 2 -> Usando Date.now() para corrigir atraso de processamento */ 
const clock = document.getElementById("timer-2")
let tempoRestante = 10 * 60000
let intervalo;
let ultimoTempo = Date.now()

const atualizarTempo = () => {
    let tempoAgora = Date.now()
    let tempoDecorrido = tempoAgora - ultimoTempo
    ultimoTempo = tempoAgora

    tempoRestante -= tempoDecorrido

    let minutos = Math.floor(tempoRestante / 60000)
    let segundos = Math.floor((tempoRestante % 60000)/1000)
    let milisegundos = tempoRestante % 1000

    minutos = minutos < 10 ? `0${minutos}` : minutos
    segundos = segundos < 10 ? `0${segundos}` : segundos 
    milisegundos = milisegundos < 100 ? `0${milisegundos}` : milisegundos < 10 ? `0${milisegundos}` : milisegundos

    let timerFormatado = `${minutos}:${segundos}:${milisegundos}`
    clock.textContent = timerFormatado
    if(tempoRestante <= 0){
      clock.textContent = "O tempo acabou!"
      clearInterval(intervalo)
    }
}
intervalo = setInterval(atualizarTempo, 10)
atualizarTempo()

/* TIMER 3 */
const clock2 = document.getElementById("timer-3");
let tempoRestante2 = 10 * 60000;
let intervalo2;

const atualizarTempo2 = () => {
  let minutos = Math.floor(tempoRestante2 / 60000);
  let segundos = Math.floor((tempoRestante2 % 60000) / 1000);
  let milisegundos = tempoRestante2 % 1000;

  minutos = minutos < 10 ? `0${minutos}` : minutos;
  segundos = segundos < 10 ? `0${segundos}` : segundos;
  milisegundos = milisegundos < 100 ? `0${milisegundos}` : milisegundos < 10 ? `0${milisegundos}` : milisegundos;

  let timerFormatado = `${minutos}:${segundos}:${milisegundos}`;
  clock2.textContent = timerFormatado;

  if (tempoRestante2 <= 0) {
    clock2.textContent = "O tempo acabou!";
    clearInterval(intervalo2);
  } else {
    tempoRestante2--;
  }
};
intervalo2 = setInterval(atualizarTempo2, 1);
atualizarTempo2();
