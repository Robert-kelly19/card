const container = document.querySelector('.container')
const live = document.querySelector('span')
const paragraph = document.getElementById('para')
const resart = document.querySelector('button')
let livescount = 8
live.textContent = livescount
const data = () => [
  { imgSrc: './images/bachira.png', name: 'bachira' },
  { imgSrc: './images/isagi.webp', name: 'isagi' },
  { imgSrc: './images/nagi.png', name: 'nagi' },
  { imgSrc: './images/bachira.png', name: 'bachira' },
  { imgSrc: './images/isagi.webp', name: 'isagi' },
  { imgSrc: './images/nagi.png', name: 'nagi' },
  { imgSrc: './images/ego.png', name: 'ego' },
  { imgSrc: './images/chigiri.webp', name: 'chigiri' },
  { imgSrc: './images/chigiri.webp', name: 'chigiri' },
  { imgSrc: './images/kunigami.png', name: 'kunigami' },
  { imgSrc: './images/kunigami.png', name: 'kunigami' },
  { imgSrc: './images/ego.png', name: 'ego' }
]

const random = () => {
  const carddata = data()
  carddata.sort(() => Math.random() - 0.5)
  return carddata
}

//  generate cards
const cardgenerate = () => {
  const carddata = random()
  carddata.forEach((item) => {
    console.log(item)
    const card = document.createElement('div')
    const back = document.createElement('img')
    const front = document.createElement('div')
    card.classList = 'card'
    back.classList = 'back'
    front.classList = 'front'
    back.src = item.imgSrc
    card.setAttribute('name', item.name)
    container.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
    card.addEventListener('click', (t) => {
      card.classList.add('check')
      card.classList.toggle('flip')
      cardcheck(t)
    })
  })
}
const cardcheck = (t) => {
  const clicked = t.target
  clicked.classList.add('top')
  const top = document.querySelectorAll('.top')
  setTimeout(() => {
    if (top.length === 12) {
      paragraph.style.display = 'flex'
      container.style.display = 'none'
      paragraph.innerHTML = '🎊congratulations🎉'
      paragraph.style.textAlign = 'center'
    }
  }, 1000)
  const check = document.querySelectorAll('.check')
  if (check.length === 2) {
    if (check[0].getAttribute('name') === check[1].getAttribute('name')) {
      check.forEach((card) => {
        card.classList.remove('check')
      })
    } else {
      check.forEach((card) => {
        card.classList.remove('check')
        setTimeout(() => card.classList.remove('flip'), 1000)
      })
      livescount--
      live.textContent = livescount
      if (livescount === 0) {
        container.style.display = 'none'
        paragraph.style.display = 'flex'
        paragraph.innerHTML = 'sorry you lose please resart the game'
      }
    }
  }
}
const reset = () => {
  const data = random()
  const card = document.querySelectorAll('.card')
  data.forEach((item, index) => {
    card[index].classList.remove('flip')
  })
}

resart.addEventListener('click', () => {
  reset()
  if (paragraph.style.display === 'flex') {
    paragraph.style.display = 'none'
    container.style.display = 'grid'
  }
  livescount = 8
  live.textContent = livescount
  window.location.reload()
})
cardgenerate()
