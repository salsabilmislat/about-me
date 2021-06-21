'use strict';

let username = prompt('Type your name please');
//console.log(username);
alert('welcome to our site ' + username + '  My name is salsabil nice to meet you');



let age = Number(prompt('Can you guess my age ?'));
if (age == 25) {
    alert('your are corect, I am 25 years old ');
    //console.log('your are corect, I am 25 years old ');
}
else {
    alert('That is not right ')
}



let language = prompt('Do I speak more than one language ?');

switch (language.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Good job😉 that is right i could speak three languages');
        //console.log('Good job😉 that is right i could speak three languages');
        break;
    case 'no':
    case 'n':
        alert('That is oaky, you can git it next time. i do speak more than one');
        //console.log('That is oaky, you can git it next time. i do speak more than one');
        break;
}




let china = prompt('Do I Think that chinese language is the most hard lang. In the world ?');
//console.log(china);
function programing() {
    if (china == "yes") {
        alert('your are corect, it\'s hard to learn it. But in time you will love it ');
    }
    else if (china == "no") {
        alert(' unfortunately, I Do. Because it will take too much time and effort to learn it ');
    }
    else {
        alert('Retype your Answer please  ' + username)
    }
}

programing();


let visit = prompt('Do you think that i visited china ?');

switch (visit.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('That is right, i have been there for one year. and i really enjoy it.');
        //console.log('That is right i have been there for one year. and i really enjoy it.');
        break;
    case 'no':
    case 'n':
        alert('That is not right, i have been there for one year.');
        //console.log('That is not right, i have been there for one year.');
        break;

}

        let capitalcity = prompt("Do you know the name of china capital city?")
        switch (capitalcity.toLowerCase()) {
            case 'yes':
            case 'y':
                alert(username + '  Good job😉 beijing is china\'s capital city ')
                //console.log('Good job😉 beijing is china\'s capital city');
                break;
            case 'no':
            case 'n':
                alert(username + ' Here is the answer.... beijing is china\'s capital city ')
                //console.log('Here is the answer.... beijing is china\'s capital city');
                break;

        }
