const passwordCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',

  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '?', '/'
];
const passwordEl = document.getElementById("passwordElement")
let passwordLength = 10
let password = ""
const passHistoryUlEl = document.getElementById("password-history-ul-el")

function passwordLengthSet(length){
    passwordLength = length
}

function showPasswords(){
    generatePassword()
    passwordEl.textContent = password
    addPasswordToHistory()
}

function addPasswordToHistory(){
    passHistoryUlEl.innerHTML += `<li class="passHistoryList">${password}</li>`
}

function generatePassword(){
    password = ""
    let index = 0
    for(let characters = 0; characters < passwordLength; characters++){
        index = getRandomIndex()
        password += passwordCharacters[index]
    }
}

function getRandomIndex(){
    return Math.floor(Math.random()*passwordCharacters.length )
}


passwordEl.addEventListener("click",function(){
    if(password != ""){
        navigator.clipboard.writeText(password)
        alert("The password has been copied ")
    }
})