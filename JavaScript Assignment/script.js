//Multi used Variable.
let displayValueId;
var conf;
let message;
let result;



/* ***Text rotation*** */
var startRo;
var stopRo;

function rotate (){
    let lex = 'lexicon';
    displayValueId = document.getElementById('textRotation');
    
     startRo = setInterval(function () {
        lex = lex.substr(-1) + lex.substr(0, lex.length - 1);
        displayValueId.innerHTML = lex;
    }, 1000);
}

function stopRotate(){
    clearInterval(startRo);
}





/* **** Guessing number**** */

let rand;
let match = "God Work!";
let unmatch = "Not Matched!";
let loop = true;





function random(){
     
    rand = Math.round(Math.random() * 9 + 1);
    displayValueId = document.getElementById('display');
    
    conf = confirm('Are you ready!');
    if (conf == true) {

        message = "A random number has been generated";
        
    }
    else {
        message = ("Once you be ready refresh the page and come back to guess the number!");
    }
    displayValueId.innerHTML = message;
    displayValueId.innerHTML = message;

    let showGuess = document.getElementById('hide');
    if(conf == true){
        showGuess.classList.remove('hide');

    }
    else{
        false
    }
    
};   





    
    
/* function ready (){

    //Daynamic Elements:
    let guessPara = document.createElement('p');
    guessPara.innerText = "Now Click on Guess to start";
    document.getElementById('random').appendChild(guessPara);
    let guessButton = document.createElement('button');
    document.getElementById("random").appendChild(guessButton).id = 'guessbutton';
    guessButton.innerText = 'Guess!';
    guessButton.onclick = function () { guess() };

};
     */


    
 function guess() {

    // let DivGuess = document.createElement('div');
    // document.getElementById("random").appendChild(DivGuess).id ="guess"; 

    displayValueId = document.getElementById('guess');
    while (loop) {
        let input = prompt("Now enter number between 1 - 10");
        if (input == rand) {
            alert('Good Work!');
            displayValueId.innerHTML = match;
            loop = false;
        }
        else if (input != null) {

            alert('Not matched"!!\nTry again enter a number or Cancel for exit!');
            displayValueId.innerHTML = unmatch;

        }

        else {
            alert("You hit cancel to exit");
            displayValueId.innerHTML = 'Good Bye!';
            loop = false;
        }

    };

};










/* ***Christmas Day*** */

function Christmas(){

    displayValueId = document.getElementById('date');
    let ChristmasDay = new Date(2021, 11, 25);
    
    let currentday = new Date();
    if (currentday > ChristmasDay){
        ChristmasDay.setFullYear(ChristmasDay.getFullYear()+1)
    }
     
    let left = ChristmasDay.getTime() - currentday.getTime();
     result = Math.round(left /(1000*60*60*24));
    
    displayValueId.innerHTML = "The Christmas day on: " + ChristmasDay.toDateString()+
    "<br>" +result+ " days left until Christmas.";

};











/* ***Adding Py*** */

function addingPy (){
    displayValueId = document.getElementById('text');
    
    let value = document.getElementById('textField').value;
    
    if (value.substr(0, 2) == 'Py'){

        displayValueId.innerHTML = value;

    }
    
    else {displayValueId.innerHTML = "Py" + value};
};










/* ***Nearest to 100***  */

function closeTo100(){

    displayValueId = document.getElementById('result');

    let value1 = parseInt(document.getElementById('num1').value);
    let value2 = parseInt(document.getElementById('num2').value);
    
    let num1 = Math.abs(value1 - 100); //using Mth.abs() in case the given value over 100.
    let num2 = Math.abs(value2 - 100);//using Mth.abs() in case the given value over 100.
    
    const result = " Is nearest to 100.";
    if(num1 < num2){
        displayValueId.innerHTML =  '<span class=numResult>' +value1+ '</span>' + result;

    }
    else if(num2 < num1){
        displayValueId.innerHTML = '<span class=numResult>' + value2 + '</span>'+ result;
    }
    
    else{
        alert("Erorr! try again with another values");
    }

}
