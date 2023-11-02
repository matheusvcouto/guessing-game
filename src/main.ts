function handleClick(event: Event) {
  event.preventDefault()

  const input = document.querySelector('#input') as HTMLInputElement
  const { value } = input
  const IntValue = parseInt(value)

  if (!value || IntValue < 1 || IntValue > 10) {
    return alert('Digite algum número de 1 a 10')
  }

  console.log(value)
}