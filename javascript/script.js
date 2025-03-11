const container = document.querySelector('.container')
const live = document.querySelector('span')
const paragraph = document.getElementById('para')
const restart = document.querySelector('button')
let livesCount = 8

live.textContent = livesCount

// Card data
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

// Shuffle cards
const random = () => {
  const cardData = data()
  return cardData.sort(() => Math.random() - 0.5)
}

// Generate cards
const cardGenerate = () => {
  container.innerHTML = '' // Clear previous cards
  const cardData = random()
  cardData.forEach((item) => {
    const card = document.createElement('div')
    const back = document.createElement('img')
    const front = document.createElement('div')
    card.classList.add('card')
    back.classList.add('back')
    front.classList.add('front')
    back.src = item.imgSrc
    card.setAttribute('name', item.name)
    container.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
    card.addEventListener('click', (t) => {
      if (!card.classList.contains('flip')) {
        card.classList.add('check', 'flip')
        cardCheck()
      }
    })
  })
}

// Card checking logic
const cardCheck = () => {
  const checkCards = document.querySelectorAll('.check')
  if (checkCards.length === 2) {
    const [card1, card2] = checkCards
    if (card1.getAttribute('name') === card2.getAttribute('name')) {
      checkCards.forEach((card) => card.classList.remove('check'))
    } else {
      setTimeout(() => {
        checkCards.forEach((card) => {
          card.classList.remove('check', 'flip')
        })
      }, 1000)
      livesCount--
      live.textContent = livesCount
      if (livesCount === 0) {
        gameOver('"Your ego wasn’t strong enough this time... Train harder!" 💢`')
      }
    }
  }
  setTimeout(() => {
    if (document.querySelectorAll('.flip').length === 12) {
      gameOver('"You’ve devoured your rivals and claimed victory!" 🏆')
    }
  }, 500)
}

// Game over handling
const gameOver = (message) => {
  container.style.display = 'none'
  paragraph.style.display = 'flex'
  paragraph.textContent = message
}

// Reset the game
const reset = () => {
  livesCount = 8
  live.textContent = livesCount
  paragraph.style.display = 'none'
  container.style.display = 'grid'
  cardGenerate()
}

// Restart button event listener
restart.addEventListener('click', reset)

// Initial card generation
cardGenerate()
