const passwordCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',

  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '?', '/'
];
const passwordLeftEl = document.getElementById("passwordLeftElement")
const passwordRightEl = document.getElementById("passwordRightElement")
let passwordLength = 8

function showPasswords(){
    let passwordLeft = generatePassword()
    let passwordRight = generatePassword()
    passwordLeftEl.textContent = passwordLeft
    passwordRightEl.textContent = passwordRight
}

function generatePassword(){
    let index = 0
    let password = ""
    for(let characters = 0; characters < passwordLength; characters++){
        index = getRandomIndex()
        password += passwordCharacters[index]
    }
    return password
}

function getRandomIndex(){
    return Math.floor(Math.random()*passwordCharacters.length )
}