const container = document.querySelector(".container")
const data = () => [
  {imgSrc: './images/bachira.png', name: "bachira"},
  {imgSrc: './images/isagi.webp', name: "isagi"},
  {imgSrc: './images/nagi.png', name: "nagi"},
  {imgSrc: './images/bachira.png', name: "bachira"},
  {imgSrc: './images/isagi.webp', name: "isagi"},
  {imgSrc: './images/nagi.png', name: "nagi"},
  {imgSrc: './images/bachira.png', name: "bachira"},
  {imgSrc: './images/isagi.webp', name: "isagi"},
  {imgSrc: './images/nagi.png', name: "nagi"}
]

const random = ()=>{
  const carddata=data()
  carddata.sort(()=>Math.random() -0.5)
  return carddata
}

//generate cards
const cardgenerate=()=>{
  const carddata = random()
  carddata.forEach((item) => {
    console.log(item);
    const card = document.createElement('div')
    const back = document.createElement('img')
    const front = document.createElement('div')
    card.classList = "card"
    back.classList = "back"
    front.classList ="front"
    back.src= item.imgSrc
    card.setAttribute('name', item.name)
    container.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
    card.addEventListener('click',(t)=>{
      card.classList.toggle('flip')
      cardcheck(t)
    })
  });
}
const cardcheck = (t) => {
  const clicked = t.target
  const check = document.querySelectorAll(".check")
  clicked.classList.add('check')
  if (check.length===2) {
    if (check[0].getAttribute('name')===check[1].getAttribute('name')) {
      console.log("same")
      card.classList.remove('check')
      card.style.pointerEvent="none"
    } else {
      console.log('wrong')
      check.forEach((card) =>{
        card.classList.remove('check')
        setTimeout(() => card.classList.remove('flip'),1000);
      })
    }
  }
}
cardgenerate()




