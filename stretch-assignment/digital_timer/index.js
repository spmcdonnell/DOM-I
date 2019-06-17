var secondTens = document.getElementById('secondTens'),
    secondOnes = document.getElementById('secondOnes'),
    colon = document.getElementById('colon'),
    msHundreds = document.getElementById('msHundreds'),
    msTens = document.getElementById('msTens');

document.querySelector('#start').addEventListener('click', function() {
    document.querySelector('.digits').style.color = 'black';

    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;

    function msTensFunc() {
        msTensIterator++;

        if (msTensIterator > 9) {
            msTensIterator = 0;
        }

        msTens.textContent = msTensIterator;
    }

    function msHundredsFunc() {
        msHundredsIterator++;

        if (msHundredsIterator > 9) {
            msHundredsIterator = 0;
        }

        msHundreds.textContent = msHundredsIterator;
    }

    function secondOnesFunc() {
        secondOnesIterator++;

        if (secondOnesIterator > 9) {
            secondOnesIterator = 0;
        }

        secondOnes.textContent = secondOnesIterator;
    }

    function secondTensFunc() {
        secondTensIterator++;

        secondTens.textContent = secondTensIterator;

        if (secondTensIterator === 1) {
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

    var msTensIterator = 0;
    var timerOne = setInterval(msTensFunc, 10);

    var msHundredsIterator = 0;
    var timerTwo = setInterval(msHundredsFunc, 100);

    var secondOnesIterator = 0;
    var timerThree = setInterval(secondOnesFunc, 1000);

    var secondTensIterator = 0;
    var timerFour = setInterval(secondTensFunc, 10000);
});
