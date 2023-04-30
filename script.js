const togglerBtn = document.querySelector('.container__dark-mode-toggler')
const darkModeBtn = document.getElementById('turnOnDarkMode')
const lightModeBtn = document.getElementById('turnOnLightMode')

togglerBtn.addEventListener('click', () => {
    lightModeBtn.classList.toggle('--hide-content')
    console.log('CLICK')
})
