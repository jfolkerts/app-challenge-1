const multiply = (x, y) => { return x * y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithMultiply = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#stories').checkValidity() && document.querySelector('#sketches').checkValidity()) {
    const i = parseInt(document.querySelector('#stories').value)
    const j = parseInt(document.querySelector('#sketches').value)
    const ans = `Your total number of sketches is ${multiply(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }
}


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'totalSketches') { updateWithMultiply(event) }
})
