'use strict';

let username = prompt('Type your name please');
//console.log(username);
alert('welcome to our site ' + username + '  My name is salsabil nice to meet you');
let score = 0;
let age = Number(prompt('Can you guess my age ?'));

function question1() {
    if (age == 25) {
        alert('your are correct, I am 25 years old ');
        //console.log('your are correct, I am 25 years old ');
        score++;
    }
    else {
        alert('That is not right ')
    }
}
question1();
function question2() {

    let language = prompt('Do I speak more than one language ?', 'answer with yes or no plz');

    switch (language.toLowerCase()) {
        case 'yes':
        case 'y':
            alert('Good job😉 that is right i could speak three languages');
            //console.log('Good job😉 that is right i could speak three languages');
            score++;
            break;
        case 'no':
        case 'n':
            alert('That is okay, you can git it next time. i do speak more than one');
            //console.log('That is okay, you can git it next time. i do speak more than one');
            break;
    }
}

question2();

let china = prompt('Do I Think that chinese language is the most hard lang. In the world ?', 'answer with yes or no plz');
//console.log(china);
function question3() {
    if (china.toLocaleLowerCase() == "yes" || china.toLocaleLowerCase() === 'y') {
        alert('your are correct, it\'s hard to learn it. But in time you will love it ');
        score++;
    }
    else if (china.toLocaleLowerCase == "no" || china.toLocaleLowerCase() === 'n') {
        alert(' unfortunately, I Do. Because it will take too much time and effort to learn it ');
    }
    //else {
    // alert('Retype your Answer please  ' + username)
    //}
}


question3();

function question4() {

let visit = prompt('Do you think that i visited china ?', 'answer with yes or no plz');

switch (visit.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('That is right, i have been there for one year. and i really enjoy it.');
        //console.log('That is right i have been there for one year. and i really enjoy it.');
        score++;
        break;
    case 'no':
    case 'n':
        alert('That is not right, i have been there for one year.');
        //console.log('That is not right, i have been there for one year.');
        break;

}
}
question4 ();
function question5 (){
let City = prompt("Do you know the name of china capital city?", 'answer with yes or no plz');
switch (City.toLowerCase()) {
    case 'yes':
    case 'y':
        alert(username + '  Good job😉 beijing is china\'s capital city ');
        //console.log('Good job😉 beijing is china\'s capital city');
        score++;
        break;
    case 'no':
    case 'n':
        alert(username + ' Here is the answer.... beijing is china\'s capital city ');
        //console.log('Here is the answer.... beijing is china\'s capital city');
        break;

}
}
question5();
function question6() {
let guess = 1;
while (guess <= 4) {
    let guessNumber = Number(prompt('let\'s play Guess a number game?' + ' Be carful you only got 4 chances', 'The answer would be between 1-20'));
    if (guessNumber == 12) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
        score++;
        break;
    } else if (guessNumber > 12) {
        guess++;
        alert("The number that you enter is too hight");

    }
    else {
        guess++;
        alert("The number that you enter is too low");
    }

}
alert(" The correct answer was 12");
//console.log(guessNumber);
} 
question6();
function question7(){
let food = ['kabsa', 'maqloba', 'fried chicken', 'pizza', "burger"];
for (let i = 0; i < 6; i++) {
    let foodInput = prompt('let\'s play Guess my favorites food  game?', ' Be carful you only got 6 chances');
    for (let h = 0; h < food.length; h++) {
        if (foodInput == food[h]) {

            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT It was one of my favorites food ");
            score++;
            i = 7;
            break;
        }
    }
}
alert("The correct answer must be one of my favorites food list Kabsa, Maqloba, Fried chicken and pizza");
}
question7();
alert('Great Job ' + username + ' and your score is ' + score);




//let F = ['kabsa', 'maqloba', 'fried chicken', 'pizza', "burger"];
//let chances = 1;
//while (chances <= 6) {
//let Food = prompt('let\'s play Guess my favorites food  game?', ' Be carful you only got 6 chances');
//for (let i = 0; i < F.length; i++) {
//if (Food == F[i]) {

// alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT It was one of This list Kabsa, Maqloba, Fried chicken and pizza ");
// score++;
// chances = 7;
// break;
// }
// else {


//}
//}
// chances++;
// alert("That is not on of my favorites food list! try again");

//}

//console.log("end");
