// This function recive a tag and class name of element to whill created
// and returns a new element with this params
function newElement(tagName, className) {
  const element = document.createElement(tagName)
  element.className = className
  return element
}

// This function will create a new barrier
// it's very important to remember that we have a two different barriers
// where the upper barrier starts with a trunk and ends with edge, 
// and a bottom barrier starts with edge and ends with trunk
// taking top orientation
function Barrier (reverse = false) {
  this.element = newElement ('div', 'barrier') //Look the first function in action

  const edge = newElement('div', 'edge')
  const trunk = newElement('div', 'trunk')

  this.element.appendChild(reverse ? trunk : edge) // using ternary operator, if reverse = false make a trunk, else make a edge
  this.element.appendChild(reverse ? edge : trunk)

  this.setHeight = height => trunk.style.height = `${height}px`
}

// // Testing w Barrier function
// const b = new Barrier(true) // This barrier initiate on the top
// b.setHeight(50);
// document.querySelector('[wm-flappy]').appendChild(b.element)


// This function will create a pair of barriers
function pairOfBarrier(height, passageSize, xPosition) {
  
  // Create a new div in the DOM
  this.element = newElement('div', 'pair-of-barriers');

  // Create a pair of barriers in the div 'pair-of-barriers'
  this.upper = new Barrier(true)
  this.lower = new Barrier(false)

  // Insert any barrier in your position
  this.element.appendChild(this.upper.element)
  this.element.appendChild(this.lower.element)

  // Drawing the passage position
  this.drawPassagePosition = () => {
    const upperHeight = Math.random() * (height - passageSize)
    const lowerHeight = height - passageSize - upperHeight
    this.upper.setHeight(upperHeight)
    this.lower.setHeight(lowerHeight)
  }

  this.getXPosition = () => parseInt(this.element.style.left.split('px')[0]);
  this.setXPosition = xPosition => this.element.style.left = `${xPosition}px`
  this.getWidth = () => this.element.clientWidth

  this.drawPassagePosition()
  this.setXPosition(xPosition)

}

// // Testing a drawPassagePosition function
// const b = new pairOfBarrier(700, 200, 490)
// document.querySelector('[wm-flappy]').appendChild(b.element)

 // Now we start to animate the game, beginning with the barriers
 // A below function will create four pairs of barriers containing a fixed interval btween
 function Barriers(height, passageSize, width, interval, notifyScore) {
   this.pairs = [
     new pairOfBarrier(height, passageSize, width),
     new pairOfBarrier(height, passageSize, width + interval),
     new pairOfBarrier(height, passageSize, width + interval * 2),
     new pairOfBarrier(height, passageSize, width + interval * 3) 
   ]


   // To not use many resources and turn down the performace of the game, we will let's
   // replay the pairs of barreirs created, by reacalculating the pasagePosition only
   // for this, when teh pair of barriers cross de end of div in left, we put the pair of barriers
   // at the final position after the last pair of barriers in game. 
   const xDisplacement = 3
   this.animate = () => {
     this.pairs.forEach(pair => {
      pair.setXPosition(pair.getXPosition() - xDisplacement)

      if(pair.getXPosition() < -pair.getWidth()) {
        pair.setXPosition(pair.getXPosition() + interval * this.pairs.length)
        pair.drawPassagePosition()
      }

      const mid = width / 2
      const crossMid = pair.getXPosition() + xDisplacement >= mid && pair.getXPosition < mid
      if (crossMid) {
        notifyScore()
      }
     })
   }
 }

 // Testing the animate of barriers
 const barriers = new Barriers(700, 200, 1200, 400)
 const gameArea = document.querySelector('[wm-flappy]')
 barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))
 setInterval(() => {
   barriers.animate()
 }, 20)