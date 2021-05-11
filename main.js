// importing miscalleneous things
import { progressBar } from './misc.js'
import { f_arrays_all } from './Arrays/fillTheBlank.js'
import { m_arrays_all } from './Arrays/matchCards.js'
import { s_arrays_all, randomWords } from './Arrays/structure.js'
import { t_arrays_all } from './Arrays/test.js'

getFromLocalStorage()

// States
let questionCount = 0
let currentTopic = ''
let currentExerciseType = ''
let currentExerciseArray = []

// Current exercise type arrays
let f_array = []
let m_array = []
let s_array = []
let t_array = []

// Already asked questions, shant ask them again
let f_asked = []
let m_asked = []
let s_asked = []
let t_asked = []

// References 
const exerciseContainer = document.querySelector('[exercise-container]')
const exercise = document.querySelector('[exercise]')
const startButtons = document.querySelectorAll('[start-btn]')
const instructions = document.querySelector('.exercise-instructions');
const roadMap = document.querySelector('[road-map]')
const header = document.querySelector('[header]')

// Exercise Footer Buttons
const footerButton = document.querySelector('.button-container')
const footerCheckBtn = document.querySelector('.front-btn')
const footerNextBtn = document.querySelector('.back-btn')

startButtons.forEach(button => button.addEventListener('click', () => {
  currentTopic = Number(button.getAttribute('level'))
  f_array = f_arrays_all[currentTopic]
  m_array = m_arrays_all[currentTopic]
  s_array = s_arrays_all[currentTopic]
  t_array = t_arrays_all[currentTopic]
  startExercise()
}))

// START THE EXERCISE AND BRING THE QUESTIONS

function startExercise() {
  document.body.innerHTML = ''
  document.body.append(exerciseContainer)
  exerciseContainer.style.display = 'flex'
  bringQuestion()
}

function bringQuestion() {
  exercise.style.animation = 'slide-in'
  exercise.style.animationDuration = '500ms'
  exerciseContainer.style.pointerEvents = 'auto'
  exercise.innerHTML = '' // jedes mal füllt es was anderes
  let randomType = Math.floor(Math.random() * 4)
  if (randomType === 0) { craeteFillTheBlank() }
  if (randomType === 1) { craeteMatchCards() }
  if (randomType === 2) { craeteStructure() }
  if (randomType === 3) { craeteTest() }
}

// CHECKING EXERCISES, CORRECT ANSWER AND FINISH EXERCISES

function checkExercise() {
  if (currentExerciseType === 'ex_filltheblank') {
    let input = document.querySelector('.f_blank').value
    let answer = input.replace(regex, "").trim().replace(/\s\s+/g, ' ');
    let expected = currentExerciseArray[1].replace(regex, "").trim().replace(/\s\s+/g, ' ');
    if (expected === answer) { correctAnswer() }
  }
  if (currentExerciseType === 'ex_structure') {
    let arr = []
    let blankdiv = document.querySelectorAll('[class="s_blank"] [class="s_word"]')
    Array.from(blankdiv).forEach(button => arr.push(button.innerText))
    if (currentExerciseArray.join() === arr.join()) { correctAnswer() }
  }
  if (currentExerciseType === 'ex_test') {
    let myAnswer = document.querySelector('.t_chosen')
    if (myAnswer.innerText === currentExerciseArray) {
      myAnswer.classList.add('t_correct')
      correctAnswer()
    }
  }
}

function correctAnswer() {
  questionCount++
  progressBar(questionCount)
  if (questionCount === 15) { footerNextBtn.innerText = 'Finish' }
  exerciseContainer.style.pointerEvents = 'none'
  footerButton.style.transform = 'rotateY(180deg)'
  footerNextBtn.style.pointerEvents = 'auto'
}

function finishExercise() {
  exerciseContainer.style.pointerEvents = 'auto'
  exercise.innerHTML = ''
  footerNextBtn.innerText = 'Next'
  document.body.innerHTML = ''
  document.body.append(header, roadMap)
  exerciseContainer.style.display = 'none'
  let level = document.querySelector(`[insertbefore="${currentTopic}"]`)
  f_asked = []
  m_asked = []
  s_asked = []
  t_asked = []
  updateMap(level)
}

// WHEN YOU FINISH AN EXERCISES, YOU PROGRESS ON THE GIVEN TOPIC

function updateMap(level) {
  let parent = level.parentElement
  let prev = level.previousElementSibling
  if (prev === null) {
    const twentyfive = document.createElement('div')
    classTheSpinners(twentyfive, 'twenty-five')
    parent.insertBefore(twentyfive, level)
    saveToLocalStorage(level)
    return
  }
  if (prev.classList.contains('twenty-five-percent')) {
    const fifty = document.createElement('div')
    classTheSpinners(fifty, 'fifty')
    parent.insertBefore(fifty, level)
    saveToLocalStorage(level)
    return
  }
  if (prev.classList.contains('fifty-percent')) {
    const seventyfive = document.createElement('div')
    classTheSpinners(seventyfive, 'seventy-five')
    parent.insertBefore(seventyfive, level)
    saveToLocalStorage(level)
    return
  }
  if (prev.classList.contains('seventy-five-percent')) {
    const onehundred = document.createElement('div')
    classTheSpinners(onehundred, 'one-hundred')
    parent.insertBefore(onehundred, level)
    saveToLocalStorage(level)
    return
  }
}

function classTheSpinners(spinner, percentage) {
  spinner.classList.add('spinner')
  spinner.classList.add(`${percentage}-percent`);
}

// DIFFERENT CLASSES FOR EACH TYPE OF EXERCISE

function setExcerciseClasses(type) {
  let currentClass = exercise.classList[0]
  exercise.classList.remove(currentClass)
  exercise.classList.add(type)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// THE INSTRUCTIONS HANDLING 

function setInstructions(type) {
  instructions.style.animation = 'rotate-out 300ms'
  let inner
  setTimeout(() => {
    if (type === 'ex_structure') { inner = 'Please build the sentence using the words below.' }
    if (type === 'ex_filltheblank') { inner = 'Please translate the sentence.' }
    if (type === 'ex_matching') { inner = 'Please match the words.' }
    if (type === 'ex_test') { inner = 'Please choose the correct word to fill the gap.' }
    instructions.innerText = inner
    instructions.style.animation = 'rotate-in 300ms'
  }, 300)
  setTimeout(() => {
    instructions.style.animation = 'none'
  }, 600)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TEST EXERCISES

function craeteTest() {
  let random = Number(Math.floor(Math.random() * (t_array.length - 1)))
  if (t_asked.includes(random)) {
    bringQuestion()
    return
  }
  t_asked.push(random)

  currentExerciseArray = `${t_array[random][3][0]}`
  let Array = t_array[random]
  currentExerciseType = 'ex_test'
  setExcerciseClasses(currentExerciseType)
  setInstructions(currentExerciseType)

  const originSentence = document.createElement('p')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const t_blank = document.createElement('p')
  const options = document.createElement('div')
  const question = document.createElement('div')

  originSentence.innerText = Array[0]
  p1.innerText = Array[1]
  p2.innerText = Array[2]
  t_blank.classList.add('t_blank')
  question.classList.add('t_question')
  options.classList.add('t_options')
  Array[3].sort(() => 0.5 - Math.random())

  question.append(p1, t_blank, p2)
  exercise.append(originSentence, question, options)
  Array[3].forEach(option => setT_Options(option))
}

function setT_Options(option) {
  const t_option = document.createElement('button')
  t_option.innerText = `${option}`
  t_option.classList.add('t_option')
  document.querySelector('.t_options').append(t_option)
  t_option.addEventListener('click', () => {
    document.querySelectorAll('.t_option').forEach(option => {
      option.classList.remove('t_chosen')
    })
    t_option.classList.add('t_chosen')
  })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FILL THE BLANK EXERCISES

function craeteFillTheBlank() {
  let random = Number(Math.floor(Math.random() * (f_array.length - 1)))
  if (f_asked.includes(random)) {
    bringQuestion()
    return
  }
  f_asked.push(random)
  currentExerciseArray = f_array[random]
  let Array = f_array[random]
  currentExerciseType = 'ex_filltheblank'
  setExcerciseClasses(currentExerciseType)
  setInstructions(currentExerciseType)
  const originSentence = document.createElement('p')
  originSentence.classList.add('f_origin-sentence')
  originSentence.innerText = Array[0]
  const f_blank = document.createElement('textarea')
  f_blank.setAttribute('rows', 10)
  f_blank.setAttribute('cols', 60)
  f_blank.classList.add('f_blank')
  exercise.append(originSentence, f_blank)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MATCH THE CARDS EXERCISES

function craeteMatchCards() {
  let random = Number(Math.floor(Math.random() * (m_array.length - 1)))
  if (m_asked.includes(random)) {
    bringQuestion()
    return
  }
  m_asked.push(random)
  currentExerciseArray = m_array[random]
  let Array = m_array[random]
  currentExerciseType = 'ex_matching'
  setExcerciseClasses(currentExerciseType)
  setInstructions(currentExerciseType)
  const english = document.createElement('div')
  const german = document.createElement('div')
  english.classList.add('m_word-container')
  german.classList.add('m_word-container')
  for (let a = 0; a < 2; a++) {
    Array.sort(() => 0.5 - Math.random())
    for (let i = 0; i < Array.length; i++) {
      const card = document.createElement('div')
      card.classList.add('m_matchCard')
      card.innerText = Array[i][a]
      card.setAttribute('cardId', `${Array[i][2]}`)
      if (a === 0) { german.append(card) }
      if (a === 1) { english.append(card) }
    }
  }
  exercise.append(english, german)
  const allCards = document.querySelectorAll('.m_matchCard')
  allCards.forEach(card => { card.addEventListener('click', () => pickCard(card)) })
}

let wonCards = []
let twoCards = []

function pickCard(card) {
  if (wonCards.includes(card)) { return }
  if (twoCards.includes(card)) {
    card.classList.remove('m_chosenCard')
    twoCards.pop()
    return
  }
  twoCards.push(card)
  card.classList.add('m_chosenCard')
  if (twoCards.length === 2 && twoCards[1].getAttribute('cardId') === twoCards[0].getAttribute('cardId')) {
    twoCards.forEach(card => { card.removeEventListener('click', () => pickCard(card)) })
    twoCards.forEach(card => { card.classList.add('m_wonCard') })
    twoCards.forEach(card => { card.classList.remove('m_chosenCard') })
    twoCards.forEach(card => { wonCards.push(card) })
    twoCards = []
  }
  if (twoCards.length === 2 && twoCards[1].getAttribute('cardId') !== twoCards[0].getAttribute('cardId')) {
    twoCards.forEach(card => {
      card.style.animation = 'red-pulse 1000ms'
      setTimeout(() => { card.style.animation = 'none' }, 1000)
    })
    twoCards.forEach(card => { card.classList.remove('m_chosenCard') })
    twoCards = []
  }
  if (wonCards.length === 10) {
    correctAnswer()
    wonCards = []
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STRUCTURE EXERCISES

function craeteStructure() {
  let random = Number(Math.floor(Math.random() * (s_array.length - 1)))
  if (s_asked.includes(random)) {
    bringQuestion()
    return
  }
  s_asked.push(random)
  let Array = s_array[random]
  currentExerciseType = 'ex_structure'
  currentExerciseArray = Array[2].join(' ').split(' ')
  setExcerciseClasses(currentExerciseType)
  setInstructions(currentExerciseType)
  const originSentence = document.createElement('p')
  originSentence.classList.add('s_originsentence')
  originSentence.innerText = Array[0]
  const sGiven = document.createElement('p')
  sGiven.innerText = Array[1]
  sGiven.classList.add('s_given')
  const blankDiv = document.createElement('div')
  const usableWords = document.createElement('div')
  blankDiv.classList.add('s_blank')
  usableWords.classList.add('usable-words')
  blankDiv.append(sGiven)
  exercise.append(originSentence, blankDiv, usableWords)
  if (Array[2].length < 7) {
    let random1 = Math.floor(Math.random() * randomWords[currentTopic].length)
    let random2 = Math.floor(Math.random() * randomWords[currentTopic].length)
    Array[2].push(randomWords[currentTopic][random1], randomWords[currentTopic][random2])
  }
  Array[2].sort(() => 0.5 - Math.random())
  for (let i = 0; i < Array[2].length; i++) {
    setStructureWords(Array[2][i], i)
  }
}

function setStructureWords(wort, number) {
  const word = document.createElement('button')
  const wordCapsule = document.createElement('div')
  word.classList.add('s_word')
  wordCapsule.classList.add('word-capsule')
  word.setAttribute('wordId', number)
  wordCapsule.setAttribute('capsuleId', number)
  word.innerText = wort
  wordCapsule.append(word)
  const capsuleContainer = document.querySelector('.usable-words')
  capsuleContainer.append(wordCapsule)
  wordCapsule.style.width = `${word.offsetWidth - 1}px`
  wordCapsule.style.height = `${word.offsetHeight}px`
  word.addEventListener('click', () => appendWord(word))
}

function appendWord(word) {
  animateWord(word)
  let wordCapsule = word.parentElement
  if (word.getAttribute('wordId') === wordCapsule.getAttribute('capsuleid')) {
    const whereTo = document.querySelector('.s_blank')
    whereTo.append(word)
    return
  }
  else {
    const wordId = word.getAttribute('wordId')
    const whereTo = document.querySelector(`[capsuleid='${wordId}']`)
    whereTo.append(word)
    return
  }
}

function animateWord(word) {
  word.style.animation = 'scaleup 500ms ease-in-out'
  setTimeout(() => { word.style.animation = 'none' }, 500)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHECK AND FINISH BUTTONS (WHICH ARE BEHIND ONE ANOTHER)

footerCheckBtn.addEventListener('click', () => { checkExercise() })

footerNextBtn.addEventListener('click', () => {
  footerButton.style.transform = 'rotateY(360deg)'
  footerNextBtn.style.pointerEvents = 'none'
  if (footerNextBtn.innerText === 'FINISH') {
    finishExercise()
    return
  }
  exercise.style.animation = 'slide-out'
  exercise.style.animationDuration = '500ms'
  setTimeout(bringQuestion, 500)
})

const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOCAL STORAGE HANDLING, progress on the levels 

function saveToLocalStorage(level) {
  let spracheLevelArray = localStorage.getItem('spracheLevelArray') || [0, 0, 0, 0, 0, 0, 0]
  if (typeof (spracheLevelArray) === 'string') { spracheLevelArray = JSON.parse(spracheLevelArray) }
  let levelNumber = Number(level.getAttribute('insertbefore'))
  let parent = level.parentElement
  let currentProgress = (parent.querySelectorAll('.spinner').length) - 1
  spracheLevelArray[levelNumber] = currentProgress
  localStorage.setItem('spracheLevelArray', JSON.stringify(spracheLevelArray))
}

function getFromLocalStorage() {
  let retrievedArray = localStorage.getItem('spracheLevelArray') || []
  if (retrievedArray.length !== 0) { retrievedArray = JSON.parse(retrievedArray) }
  for (let i = 0; i < retrievedArray.length; i++) {
    let level = document.querySelector(`[insertbefore="${i}"]`)
    for (let a = 0; a < retrievedArray[i]; a++) {
      updateMap(level)
    }
  }
}

export { currentExerciseType, currentExerciseArray, questionCount }
