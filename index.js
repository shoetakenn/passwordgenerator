const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
let errorMessage = document.getElementById("error-p")
let firstPassword = ""
let secondPassword = ""
let passwordLength = 15
function setSettings() {
    passwordLength = document.getElementById("password-length").value
    if (passwordLength >= 1 && passwordLength <= 100) {
        passwordLength = document.getElementById("password-length").value
        console.log("number of characters:" + passwordLength)
        errorMessage.textContent = ""
    } else {
        errorMessage.textContent = "Password length should only be 1-99 characters long"
    }
    
}
function generatePassword() {
    firstPassword = ""
    secondPassword = ""
    for (i = 0; i < passwordLength; i++) {
        let first = Math.floor(Math.random() * characters.length)
        let second = Math.floor(Math.random() * characters.length)
        firstPassword += characters[first]
        secondPassword += characters[second]
        passwordOneEl.textContent = firstPassword
        passwordTwoEl.textContent = secondPassword
    }
}

