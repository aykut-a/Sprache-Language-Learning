import { currentExerciseType, currentExerciseArray } from './main.js'

// Dark Mode (uses local storage)

let darkMode = localStorage.getItem('sprache-darkmode');

const darkModeButton = document.querySelector('.darkmode-toggle-btn')
darkModeButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('sprache-darkmode')
  if (darkMode !== 'enabled') { enableDarkMode() }
  else { disableDarkMode() }
})

function enableDarkMode() {
  document.body.classList.add('darkmode')
  localStorage.setItem('sprache-darkmode', 'enabled')
}

function disableDarkMode() {
  document.body.classList.remove('darkmode')
  localStorage.setItem('sprache-darkmode', null)
}

if (darkMode === 'enabled') {
  enableDarkMode();
}



// Progress Bar

const innerBar = document.querySelector('.inner-bar')

function progressBar(ratio) {
  if (ratio === 15) {
    innerBar.style.width = '100%'
    return
  }
  innerBar.style.width = `${(100 / 15) * (ratio)}%`
}



// Pop Up 

const allLevels = document.querySelectorAll('.circle')
allLevels.forEach(level => level.addEventListener('click', () => popUp(level)))

function popUp(level) {
  const popUp = level.nextElementSibling.nextElementSibling
  popUp.classList.add('open')
  popUp.style.animation = 'pop-scale-up 500ms'
  popUp.style.display = 'flex'
  document.addEventListener('mouseup', function popDown(e) {
    if (!popUp.contains(e.target) && popUp.classList.contains('open') && !level.contains(e.target)) {
      popUp.style.animation = 'pop-scale-down 500ms'
      popUp.classList.remove('open')
      setTimeout(() => { popUp.style.display = 'none' }, 500)
    }
  })
}



// Showing Solution in the Exercises 
const solutionButton = document.querySelector('[solution-btn]')
solutionButton.addEventListener('click', setSolution)
const overlay = document.querySelector('[overlay]')

let currentlyShowingSolution = false

function setSolution() {
  let solutionText = document.createElement('div')
  solutionText.classList.add('solution-text')
  if (currentExerciseType === 'ex_filltheblank') { solutionText.innerText = currentExerciseArray[1].split(' ').join(' ') }
  if (currentExerciseType === 'ex_structure') {
    solutionText.innerText = document.querySelector('.s_given').innerText + ' '
    solutionText.innerText += currentExerciseArray.join(' ')
  }
  if (currentExerciseType === 'ex_test') { solutionText.innerText = currentExerciseArray }
  if (currentExerciseType === 'ex_matching') {
    currentExerciseArray.forEach(pair => {
      const p = document.createElement('p')
      p.innerText = `${pair[1]}=${pair[0]}`
      solutionText.append(p)
    })
    solutionText.style.display = 'flex'
    solutionText.style.flexDirection = 'column'
  }
  displaySolution(solutionText)
  currentlyShowingSolution = true
  setTimeout(() => { currentlyShowingSolution = false }, 2500)
}


function displaySolution(element) {
  if (currentlyShowingSolution === true) { return }
  document.body.append(overlay)
  overlay.style.display = 'flex'
  overlay.append(element)
  element.style.animation = 'rotate-up'
  element.style.animationDuration = '500ms'
  setTimeout(() => {
    element.style.animation = 'rotate-down'
    element.style.animationDuration = '500ms'
  }, 2500)
  setTimeout(() => {
    overlay.style.display = 'none'
    overlay.removeChild(element)
  }, 3000)
}



export { enableDarkMode, disableDarkMode, progressBar, popUp, setSolution, displaySolution }