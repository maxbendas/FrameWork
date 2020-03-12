const list = glo('.list');

glo('#btn').on('click', () => {
  glo('h1').toggleClass('hide')
})

list.on('click', (event) => {
  event.target.textContent = 'hello'
  event.target.style.color = 'red'
})