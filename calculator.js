function calculateConversion(operation) {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var result;

    // Example: Convert meters to kilometers
    switch (operation) {
        case 'add':
            result = inputValue + inputValue;
            break;
        case 'subtract':
            result = inputValue - inputValue;
            break;
        case 'multiply':
            result = inputValue * inputValue;
            break;
        case 'divide':
            result = inputValue / inputValue;
            break;
        default:
            result = "Invalid operation";
            break;
    }

    document.getElementById('result').innerText = "Result: " + result;
}



