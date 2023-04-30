const togglerBtn = document.querySelector('.container__dark-mode-toggler')

const toggleModeBtn = document.getElementById('turnOnLightMode')
const documentBody = document.querySelector('body')

const containers = document.querySelectorAll('div')

togglerBtn.addEventListener('click', () => {
    toggleModeBtn.classList.toggle('--hide-content')
    documentBody.classList.toggle('--body--light-mode')
    documentBody.classList.toggle('--body--dark-mode')
    console.log('CLICK')

    containers.forEach((container) => {
        container.classList.toggle('--container--light-mode')
        container.classList.toggle('--container--dark-mode')
        container.classList.toggle('--font--light-mode')
        container.classList.toggle('--font--dark-mode')
    })
})

// TODO ---- FIGURE OUT HOW TO CHANGE THE FONT COLOUR FOR DARK MODE
