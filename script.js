// A variable to get the body of the document
const documentBody = document.body
// A variable to get the body of the document
const toggleDarkMode = document.querySelector('.container__dark-mode-toggler-btns')
const btnDarkMode = document.getElementById('btnDarkMode')
const btnLightMode = document.getElementById('btnLightMode')

const containersDarkMode = document.querySelectorAll('div.--container')

function darkModeToggler() {
    toggleDarkMode.addEventListener('click', () => {
        btnDarkMode.classList.toggle('--hide-content')
        documentBody.classList.toggle('--dark-mode')
        btnLightMode.classList.toggle('--hide-content')

        containersDarkMode.forEach((containerDarkMode) => {
            if (btnLightMode.classList.contains('--hide-content')) {
                containerDarkMode.style.backgroundColor = '#d2d3db'
            } else {
                containerDarkMode.style.backgroundColor = '#484b6a'
            }
        })
    })
}

darkModeToggler()

/* 
    TODO
        1)  ADD DARK MODE CONTAINER BOXES TO THE DARK MODE TOGGLE!!!!!!
*/
