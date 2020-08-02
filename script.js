// Assignment Code
var generateBtn = document.querySelector("#generate");

//create all the elements inside of list
var list = [
  { a: "abcdefghijklmnopqrstuvwxyz",  b: ''},
  { a: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",  b:'' },
  { a: "0123456789",  b: ''},
  { a: '!"#$%&\'\()*+,-./:;<=>?@[]^_`{|}~', b: ''},
];

//create all the questions inside of criteria
var criteria = [
  { q: 'Do you want lowercase in it?'},
  { q: 'Do you want uppercase in it?'},
  { q: 'Do you want numbers in it?'},
  { q: 'Do you want special characters in it?'},
];


function generatePassword() {
  //popout the window to ask the length that user wants
  var usr_passwordLength = prompt("Choose your length of password, at least 8 characters and no more than 128 characters.");
  //if click cancel, will return that user dont want a password
  if (usr_passwordLength === null){
    return password = 'You do not want a password.'; 
  }
  //after user enter an input, we need to declear the input is valid or not
  //first, we use isNaN to confirm is it not a number
  //then, set the password range between 8 to 128
  while ( isNaN(parseInt(usr_passwordLength)) || parseInt(usr_passwordLength) < 8 || 128 < parseInt(usr_passwordLength)) {
    alert("Not match the requirement.");
    //if the input is not in range and not a number,it will popout again to ask user enter the length
    usr_passwordLength = prompt("Choose your length of password, at least 8 characters and no more than 128 characters.");
    //if click cancel, will return that user dont want a password
    if (usr_passwordLength === null){
      return password = 'You do not want a password.'; 
    }
  }
  //use for loop to ask user all the criteria
  for (var i = 0; i < criteria.length; i++) {
    var usr_choice = confirm(criteria[i].q);
    //storage the user choice to b:'' which is inside of list
    list[i].b = usr_choice;
  }
  //let password star with empty
  var password ='';
  //when the length of password is less than the length of user needs
  while(password.length < usr_passwordLength){
    for (var i = 0; i < list.length; i++){
      //if the user chioce is true, and the length of password is less than the length of user needs
      if (list[i].b === true && password.length < usr_passwordLength){
        // it will random choose a index of the array
        var randomChoose = Math.floor(Math.random() * list[i].a.length);   
        //put that array into password
        password += list[i].a[randomChoose];
      }
    }
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);