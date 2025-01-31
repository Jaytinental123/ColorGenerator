const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`, `D`, `E`, `F`]
let button = document.getElementById(`button`)
let firstHex = document.getElementById(`first-hex`)
let secondHex = document.getElementById(`second-hex`)
let thirdHex = document.getElementById(`third-hex`)
let fourthHex = document.getElementById(`fourth-hex`)
let fifthHex = document.getElementById(`fifth-hex`)
let reset = document.getElementById(`reset-btn`)
let hamburger = document.getElementById(`hamburger`)
let hiddenMenu = document.getElementById(`hidden-menu`)

let firstColorBox = document.getElementById(`first-color-box`)
let secondColorBox = document.getElementById(`second-color-box`)
let thirdColorBox = document.getElementById(`third-color-box`)
let fourthColorBox = document.getElementById(`fourth-color-box`)
let fifthColorBox = document.getElementById(`fifth-color-box`)


function genRandomNumber() {
  let randomNumber = Math.floor( Math.random() * hexadecimalNumberSystem.length)
  return randomNumber

}
console.log(genRandomNumber());



button.addEventListener("click", function (event) {
    event.preventDefault()
    let hexCodeOne = `#`
    let hexCodeTwo = `#`
    let hexCodeThree = `#`
    let hexCodeFour = `#`
    let hexCodeFive = `#`

    for (let x = 0; x < 6; x++) {
        hexCodeOne += hexadecimalNumberSystem[genRandomNumber()];
        console.log(hexCodeOne); 
    }
    for (let x = 0; x < 6; x++) {
        hexCodeTwo += hexadecimalNumberSystem[genRandomNumber()];
        console.log(hexCodeTwo); 
    }
    for (let x = 0; x < 6; x++) {
        hexCodeThree += hexadecimalNumberSystem[genRandomNumber()];
        console.log(hexCodeThree); 
    }
    for (let x = 0; x < 6; x++) {
        hexCodeFour += hexadecimalNumberSystem[genRandomNumber()];
        console.log(hexCodeFour); 
    }
    for (let x = 0; x < 6; x++) {
        hexCodeFive += hexadecimalNumberSystem[genRandomNumber()];
        console.log(hexCodeFive); 
    }

    firstColorBox.style.backgroundColor = hexCodeOne
    firstHex.textContent = hexCodeOne

    secondColorBox.style.backgroundColor = hexCodeTwo
    secondHex.textContent = hexCodeTwo

    thirdColorBox.style.backgroundColor = hexCodeThree
    thirdHex.textContent = hexCodeThree

    fourthColorBox.style.backgroundColor = hexCodeFour
    fourthHex.textContent = hexCodeFour

    fifthColorBox.style.backgroundColor = hexCodeFive
    fifthHex.textContent = hexCodeFive
})

reset.addEventListener("click", function (event) {
    event.preventDefault()
    let defaultColor = `#DDDDDD`

    firstColorBox.style.backgroundColor = defaultColor
    firstHex.textContent = defaultColor

    secondColorBox.style.backgroundColor = defaultColor
    secondHex.textContent = defaultColor

    thirdColorBox.style.backgroundColor = defaultColor
    thirdHex.textContent = defaultColor

    fourthColorBox.style.backgroundColor = defaultColor
    fourthHex.textContent = defaultColor

    fifthColorBox.style.backgroundColor = defaultColor
    fifthHex.textContent = defaultColor
})




hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked!");
    hiddenMenu.classList.toggle('show-menu');  
});