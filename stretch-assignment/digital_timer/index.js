var secondTens = document.getElementById('secondTens'),
    secondOnes = document.getElementById('secondOnes'),
    colon = document.getElementById('colon'),
    msHundreds = document.getElementById('msHundreds'),
    msTens = document.getElementById('msTens');

secondTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;

function msTensFunc() {
    msTensInterator++;

    if (msTensInterator > 9) {
        msTensInterator = 0;
    }

    msTens.textContent = msTensInterator;
}

function msHundredsFunc() {
    msHundredsInterator++;

    if (msHundredsInterator > 9) {
        msHundredsInterator = 0;
    }

    msHundreds.textContent = msHundredsInterator;
}

function secondOnesFunc() {
    secondOnesInterator++;

    if (secondOnesInterator > 9) {
        secondOnesInterator = 0;
    }

    secondOnes.textContent = secondOnesInterator;
}

function secondTensFunc() {
    secondTensInterator++;

    secondTens.textContent = secondTensInterator;

    if (secondTensInterator === 1) {
        secondTens.textContent = 1;
        secondOnes.textContent = 0;
        msHundreds.textContent = 0;
        msTens.textContent = 0;

        document.querySelector('.digits').style.color = 'red';
        document.querySelector('#colon').style.color = 'black';

        clearInterval(timerOne);
        clearInterval(timerTwo);
        clearInterval(timerThree);
        clearInterval(timerFour);

        return;
    }

    console.log(secondTens.textContent);
}

var msTensInterator = 0;
var timerOne = setInterval(msTensFunc, 10);

var msHundredsInterator = 0;
var timerTwo = setInterval(msHundredsFunc, 100);

var secondOnesInterator = 0;
var timerThree = setInterval(secondOnesFunc, 1000);

var secondTensInterator = 0;
var timerFour = setInterval(secondTensFunc, 10000);
