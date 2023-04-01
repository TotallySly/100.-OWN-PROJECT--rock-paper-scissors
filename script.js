// A variable to get the body of the document.
const documentBody = document.body
// A variable to get the container of where the dark/light mode buttons are.
const toggleContrastMode = document.querySelector('.container__dark-mode-toggler-btns')
// A variable to get the dark mode button.
const turnOnDarkModeBtn = document.getElementById('turnOnDarkMode')
// A variable to get the light mode button.
const turnOnLightModeBtn = document.getElementById('turnOnLightMode')
// A variable to create a node list of all 'sections' with the '.--container class'.
const allContainers = document.querySelectorAll('section.--container')

function checkPrefersDarkMode() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        turnOnLightModeBtn.classList.remove('--hide-content')
        toggleContrastModeFunction()
    } else {
        turnOnLightModeBtn.classList.add('--hide-content')
        toggleContrastModeFunction()
    }
}

function toggleContrastModeFunction() {
    toggleContrastMode.addEventListener('click', () => {
        turnOnLightModeBtn.classList.toggle('--hide-content')
        addLightModeContrast()
    })
}

function addLightModeContrast() {
    allContainers.forEach((container) => {
        container.style.backgroundColor = '#d2d3db'
    })
}

checkPrefersDarkMode()

// darkModeToggler()
// // A function to toggle between light/dark mode
// function darkModeToggler() {
//     // An event listener that reacts to a mouse click.
//     toggleDarkMode.addEventListener('click', () => {
//         checkPrefersDarkMode()
//         // // Toggles between adding or removing the '--hide-content' class on the dark mode button.
//         // btnDarkMode.classList.toggle('--hide-content')
//         // // Toggles between adding or removing the '--dark-mode' class on the body.
//         // documentBody.classList.toggle('--dark-mode')
//         // // Toggles between adding or removing the '--hide-content' class on the light mode button.
//         // btnLightMode.classList.toggle('--hide-content')

//         // A for each method to iterate through the node list of all 'sections' that container the class of '--container'.
//         containersLightOrDarkMode.forEach((containerLightOrDarkMode) => {
//             // An If statement checking if the dark mode button contains the '--hide-content' class.
//             if (btnLightMode.classList.contains('--hide-content')) {
//                 // If it does, add the light mode background colour for the containers
//                 containerLightOrDarkMode.style.backgroundColor = '#484b6a'
//             } else {
//                 // else, add the dark mode background colour for the containers
//                 containerLightOrDarkMode.style.backgroundColor = '#d2d3db'
//             }
//         })
//     })
// }

/* 
    TODO
        1)  ADD DARK MODE CONTAINER BOXES TO THE DARK MODE TOGGLE!!!!!!
*/
