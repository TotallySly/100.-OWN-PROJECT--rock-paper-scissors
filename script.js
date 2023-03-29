// A variable to get the body of the document
const documentBody = document.body
// A variable to get the body of the document
const toggleDarkMode = document.querySelector('.container__dark-mode-toggler-btns')
const btnDarkMode = document.getElementById('btnDarkMode')
const btnLightMode = document.getElementById('btnLightMode')

const containersDarkMode = document.querySelectorAll('div.--container')

toggleDarkMode.addEventListener('click', () => {
    btnDarkMode.classList.toggle('--hide-content')
    documentBody.classList.toggle('--dark-mode')
    btnLightMode.classList.toggle('--hide-content')

    containersDarkMode.forEach((containerDarkMode) => {
        if (btnLightMode.classList.contains('--hide-content')) {
            containerDarkMode.style.backgroundColor = 'rgba(45, 42, 35, 1)'
            console.log('true')
        } else {
            containerDarkMode.style.backgroundColor = 'rgba(127, 126, 124, 1)'
            console.log('false')
        }
    })
})

/* 
    TODO
        1)  ADD DARK MODE CONTAINER BOXES TO THE DARK MODE TOGGLE!!!!!!
*/
