// A variable to get the body of the document.
const documentBody = document.body
// A variable to get the container of where the dark/light mode buttons are.
const toggleDarkMode = document.querySelector('.container__dark-mode-toggler-btns')
// A variable to get the dark mode button.
const btnDarkMode = document.getElementById('btnDarkMode')
// A variable to get the light mode button.
const btnLightMode = document.getElementById('btnLightMode')
// A variable to create a node list of all 'sections' with the '.--container class'.
const containersLightOrDarkMode = document.querySelectorAll('section.--container')

function checkPrefersDarkMode() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        btnLightMode.classList.add('--hide-content')
        btnDarkMode.classList.remove('--hide-content')
        documentBody.classList.toggle('--dark-mode')
    } else {
        btnLightMode.classList.remove('--hide-content')
        btnDarkMode.classList.add('--hide-content')
        documentBody.classList.toggle('--dark-mode')
    }
}

function darkModeToggler() {
    if (btnDarkMode.classList.contains('--hide-content')) {
        toggleDarkMode.addEventListener('click', () => {
            // btnDarkMode.classList.add('--hide-content')
            // btnLightMode.classList.remove('--hide-content')
            btnDarkMode.classList.toggle('--hide-content')
            btnLightMode.classList.toggle('--hide-content')
        })
    } else {
        // btnDarkMode.classList.add('--hide-content')
        // btnLightMode.classList.remove('--hide-content')
        btnDarkMode.classList.toggle('--hide-content')
        btnLightMode.classList.toggle('--hide-content')
    }
}

checkPrefersDarkMode()
darkModeToggler()
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

// function checkPrefersDarkMode() {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         btnLightMode.classList.remove('--hide-content')
//         btnDarkMode.classList.add('--hide-content')
//         documentBody.classList.toggle('--dark-mode')
//     } else {
//         btnLightMode.classList.add('--hide-content')
//         btnDarkMode.classList.remove('--hide-content')
//         documentBody.classList.toggle('--dark-mode')
//     }
// }

// darkModeToggler()
// checkPrefersDarkMode()

/* 
    TODO
        1)  ADD DARK MODE CONTAINER BOXES TO THE DARK MODE TOGGLE!!!!!!
*/
