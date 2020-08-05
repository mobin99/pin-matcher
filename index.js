//random number generator function
document.querySelector('.generate-btn').addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById('pinGenerateField').value = randomNumber;

    document.querySelector('.submit-btn').disabled = false;
    document.getElementById('numOfTry').innerText = 3;
    document.getElementById('userInputField').value = '';
    document.querySelector('.submit-btn').style.backgroundColor = '#495BC3';


    // Message hidden section
    document.getElementById('failure-message').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';
})

// pin Number typing Function

function number(num) {
    document.getElementById('userInputField').value += num;
    document.getElementById('failure-message').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';
}

//   Input number backspace or remove function

function clearInputField() {
    document.getElementById('userInputField').value = '';
}
function removeLastDigit() {
    const number = document.getElementById('userInputField').value;
    document.getElementById('userInputField').value = number.substring(0, number.length - 1);
}


// validation pin generator function
document.querySelector('.submit-btn').addEventListener('click', function () {
    const requiredPin = document.getElementById('pinGenerateField').value;
    const userPin = document.getElementById('userInputField').value;
    if (requiredPin == '') {
        alert('Generate your pin first');
    }
    else if (requiredPin === userPin) {
        document.getElementById('success-message').style.display = 'block';
    }
    else {
        document.getElementById('failure-message').style.display = 'block';
        document.getElementById('numOfTry').innerText--;
        if ('0' === document.getElementById('numOfTry').innerText) {
            document.querySelector('.submit-btn') .disabled = true;
            document.querySelector('.submit-btn').style.backgroundColor = "red";
            document.getElementById('failure-message').innerText = "❌ No more try left, Secret door is blocked";
            
        }
    }
})