function showPhoto() {
  document.getElementById('authorInfo').style.display="block";
}


function hidePhoto() {
  document.getElementById('authorInfo').style.display="none";
}
function countWords() {
  var textInput = document.getElementById('textInput').value;
  

  if (!textInput.trim()) {
    document.getElementById('wordCountResult').innerText = 'Кількість слів: 0';
    return; 
  }
  
  
  let words = textInput.split(/\s+/);
  
 
  let wordCount = words.length;
  
 
  document.getElementById('wordCountResult').innerText = 'Кількість слів: ' + wordCount;
}

function generatePassword() {
  let passwordLength = document.getElementById('passwordLength').value;

  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '0123456789';
  let symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  let allCharacters = letters + numbers + symbols;
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
  }

  document.getElementById('passwordResult').innerText = 'Згенерований пароль: ' + password;
}
;
