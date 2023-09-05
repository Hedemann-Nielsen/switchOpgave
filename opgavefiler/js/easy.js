let myAnswerInput = document.getElementById('InputOne');
let myAnswerButton = document.getElementById('answerButtonOne');

let myAnswerFeedbackElement = document.getElementById('answerFeedbackOne');



// opgave 1 og 2

myAnswerButton.addEventListener('click', (event) => {
    event.preventDefault();

    let number = parseInt(myAnswerInput.value);

    switch(number) {
        case 1:
            feedbackTekst = "Du har valgt 1"
            //console.log("Du har valgt: 1");
            break;
        case 2:
            feedbackTekst = "Du har valgt 2"
            //console.log("Du har valgt: 2");
            break;
        case 3:
            feedbackTekst = "Du har valgt 3"
            //console.log("Du har valgt: 3");
            break;
        case 4:
            feedbackTekst = "Du har valgt: 4";
            //console.log("Du har valgt: 4");
            break;
        case 5:
            feedbackTekst = "Du har valgt: 5";
            //console.log("Du har valgt: 5");
            break;
        default:
            feedbackTekst = "Du har indtastet et ugyldigt tal. Indtast et tal mellem 1 og 5."
            //console.log("Du har indtastet et ugyldigt tal. Indtast et tal mellem 1 og 5.");
    }
showMessage(feedbackTekst);
     
});
/* skriv evt en view funktion der viser om svaret er korrekt i myAnswerFeedbackElement, brug evt. innerHTML*/
 // view function
      function showMessage(feedbackTekst){
        myAnswerFeedbackElement.innerHTML=`<p>${feedbackTekst}</p>`;
    }


// opgave 3 og 4
 myAnswerInputTwo = document.getElementById('InputTwo');
 myAnswerButtonTwo = document.getElementById('answerButtonTwo');

 myAnswerFeedbackElementTwo = document.getElementById('answerFeedbackTwo');

 myAnswerButtonTwo.addEventListener('click', (event) => {
    event.preventDefault();
    
    //console.warn('opgave 3 og 4');
    /* din kode her.*/
    const month = parseInt(myAnswerInputTwo.value);

    switch(month) {
        case 1:
            feedbackTekst2 = "Januar";
            //console.log("Januar");
            break;
        case 2:
            feedbackTekst2 = "Februar";
            //console.log("Februar");
            break;
        case 3:
            feedbackTekst2 = "Marts";
            //console.log("Marts");
            break;
        case 4:
            feedbackTekst2 = "April";
            //console.log("April");
            break;
        case 5:
            feedbackTekst2 = "Maj";
            //console.log("Maj");
            break;
        case 6:
            feedbackTekst2 = "Juni";
            //console.log("Juni");
        case 7:
            feedbackTekst2 = "Juli";
            //console.log("Juli");
            break;
        case 8:
            feedbackTekst2 = "August";
            //console.log("August");
            break;
        case 9:
            feedbackTekst2 = "September";
            //console.log("September");
            break;
        case 10:
            feedbackTekst2 = "Oktober";
            //console.log("Oktober");
            break;
        case 11:
            feedbackTekst2 = "November";
            //console.log("November");
            break;
        case 12:
            feedbackTekst2 = "December";
            //console.log("December");
            break;
        default:
            feedbackTekst2 = "Du har ikke indtastet en gyldig måned"
            //console.log("Du har indtastet et ugyldigt tal. Indtast et tal mellem 1 og 12");
    }

    showMessage2(feedbackTekst2);
});

/* din view function her */
function showMessage2(feedbackTekst2){
    myAnswerFeedbackElementTwo.innerHTML=`<p>${feedbackTekst}</p>`;
};

// opgave 5
let myAnswerInputFive = document.getElementById('InputFive');
let myAnswerButtonFive = document.getElementById('answerButtonFive');

let myAnswerFeedbackElementFive = document.getElementById('answerFeedbackFive');


function workDays(text) {
  let day = text.toLowerCase();

  switch (day) {
    case "mandag":
    case "tirsdag":
    case "onsdag":
    case "torsdag":
    case "fredag":
      return "arbejdsdag";
    case "lørdag":
    case "søndag":
      return "weekenddag";
    default:
      return "ugyldig ugedag";
  }
}

function displayFeedback(text) {
  myAnswerFeedbackElementFive.innerText = text;
}

myAnswerButtonFive.addEventListener('click', (event) => {
  event.preventDefault();
  let userInput = myAnswerInputFive.value;
  let feedback = workDays(userInput);
  displayFeedback(feedback);
});
  



 /* din kode her.*/



/* din view function her */


