var secretNumber = parseInt(Math.random() * 1001)

while (secretNumber != guessNumber) {
    var guessNumber = prompt('Digite um número entre 0 e 1000')

  if(secretNumber == guessNumber){
    alert('Você acertou. Parabéns!')
  } else if(guessNumber < secretNumber){
    alert (`Errou. O número ${guessNumber} é menor que o número secreto`)
  }else if(guessNumber > secretNumber) {
    alert(`Errou. O número ${guessNumber} é maior que o número secreto`)
  }
}
