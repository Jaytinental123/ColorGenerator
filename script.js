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
    firstHex.style.color = getContrastColor(hexCodeOne);

    secondColorBox.style.backgroundColor = hexCodeTwo
    secondHex.textContent = hexCodeTwo
    secondHex.style.color = getContrastColor(hexCodeTwo);

    thirdColorBox.style.backgroundColor = hexCodeThree
    thirdHex.textContent = hexCodeThree
    thirdHex.style.color = getContrastColor(hexCodeThree);

    fourthColorBox.style.backgroundColor = hexCodeFour
    fourthHex.textContent = hexCodeFour
    fourthHex.style.color = getContrastColor(hexCodeFour);

    fifthColorBox.style.backgroundColor = hexCodeFive
    fifthHex.textContent = hexCodeFive
    fifthHex.style.color = getContrastColor(hexCodeFive);
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


function getContrastColor(hexColor) {
    let r = parseInt(hexColor.substring(1, 3), 16); 
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);

    let brightness = (r * 0.299) + (g * 0.587) + (b * 0.114); 

    if (brightness > 128) {
        return "#000000";  
    } else {
        return "#FFFFFF"; 
    }
}