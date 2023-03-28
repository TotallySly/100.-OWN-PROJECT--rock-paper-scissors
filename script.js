const documentBody = document.body
const darkModeToggler = document.querySelector('.container--dark-mode-btns')
const darkModeBtn = document.getElementById('darkModeBtn')
const lightModeBtn = document.getElementById('lightModeBtn')

const darkModeContainers = document.querySelectorAll('div.--container')

darkModeToggler.addEventListener('click', () => {
    darkModeBtn.classList.toggle('--hide-content')
    documentBody.classList.toggle('--dark-mode')
    lightModeBtn.classList.toggle('--hide-content')

    darkModeContainers.forEach((darkModeContainer) => {
        darkModeContainer.classList.add('--dark-mode-container')
    })
})

/* 
    TODO
        1)  ADD DARK MODE CONTAINER BOXES TO THE DARK MODE TOGGLE!!!!!!
*/
