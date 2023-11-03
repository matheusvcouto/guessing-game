
const screen1 = document.querySelector('#screen1') as HTMLDivElement
const screen2 = document.querySelector('#screen2') as HTMLDivElement
const screenReseult = document.querySelector('#result') as HTMLParagraphElement

function handleClick(event: Event) {
  event.preventDefault()

  const input = document.querySelector('#input') as HTMLInputElement

  // const { value } = input
  const value = parseInt(input.value)

  if (!value || value < 1 || value > 10) {
    return alert('Digite algum número de 1 a 10')
  }

  const randomNuber = Math.round(Math.random() * 10)
  const result: boolean = value === randomNuber

  screen1.classList.add('hidden')
  screen2.classList.remove('hidden')

  if (result == true) {
    screenReseult.innerText = `Parabens você acertou!`
  } else {
    screenReseult.innerText = `Você errou, seu numero: ${value} o numero correto ${randomNuber}`
  }
  


  console.log(value, randomNuber)
}


function playAgain(e: Event) {
  e.preventDefault()

  console.log('clickakcsas ')
  screen1.classList.toggle('hidden')
  screen2.classList.toggle('hidden')

}