const questionInput = document.getElementById ("question");
const answerInput = document.getElementById ("answer");

const ask = function(){
    let pregunta =  questionInput.value;
    if (pregunta){
        let respuesta = magicBall();
        answerInput.value = respuesta;  
    } else {
        answerInput.value = "No puedo responder a eso"
    }
    
}

const magicBall = function(){
let randomNumber = Math.floor(Math.random() * 8);
let = eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'Si'
    break;
  case 1:
    eightBall = 'Esta decidido'
    break;
  case 2:
    eightBall = 'Prueba preguntando de nuevo'
    break;
  case 3:
   eightBall = 'No puedo predecir ahora'
    break;
  case 4:
    eightBall = 'Probablemente'
    break;
  case 5:
    eightBall = 'Mis fuentes dicen que no'
    break;
  case 6:
    eightBall = 'No se ve bien'
    break;
  case 7:
    eightBall = 'airou nou man XD'
    break;
}
return eightBall;
}