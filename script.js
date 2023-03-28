const bodyDocument = document.body
const darkModeContainer = document.querySelector('.container--dark-mode-btns')
const darkModeBtn = document.getElementById('darkModeBtn')
const lightModeBtn = document.getElementById('lightModeBtn')

darkModeContainer.addEventListener('click', () => {
    darkModeBtn.classList.toggle('--hide-content')
    bodyDocument.classList.toggle('--dark-mode')
    lightModeBtn.classList.toggle('--hide-content')
})
