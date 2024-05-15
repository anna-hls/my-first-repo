document.addEventListener("DOMContentLoaded", function () {
    const contentElement = document.getElementById('content');
    contentElement.style.display = 'none';
    contentElement.style.border = '2px solid #ccc';
    contentElement.style.padding = '10px';
    contentElement.style.marginTop = '10px';

    const buttons = {
        'add': () => calculate('add'),
        'sub': () => calculate('sub'),
        'mul': () => calculate('mul'),
        'div': () => calculate('div'),
        'log': () => calculate('log'),
        'sin': () => calculate('sin'),
        'tan': () => calculate('tan')
    };

    for (let [id, handler] of Object.entries(buttons)) {
        document.getElementById(`${id}-button`).addEventListener('click', handler);
    }
});

function fetchData(operation) {
    fetch(`${operation}.json`)
        .then(response => response.json())
        .then(data => {
            let helpContent;
            if (['log', 'sin', 'tan'].includes(operation)) {
                helpContent = `
                    <h3>${data.name}</h3>
                    <img src="${data.image_name}" alt="${data.name}">
                    <p>${data.description}</p>
                `;
            } else {
                helpContent = `<h2>${data.name}</h2><p>${data.description}</p>`;
            }
            displayContent(helpContent);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayContent(content) {
    const contentElement = document.getElementById('content');
    contentElement.style.display = 'block';
    contentElement.innerHTML = content;
}

function displayResult(message) {
    document.getElementById('res').innerText = `Result: ${message}`;
}

function calculate(operation) {
    const op1 = parseFloat(document.getElementById('op1').value);
    const op2 = parseFloat(document.getElementById('op2').value);
    let result;

    switch(operation) {
        case 'add':
            result = op1 + op2;
            break;
        case 'sub':
            result = op1 - op2;
            break;
        case 'mul':
            result = op1 * op2;
            break;
        case 'div':
            if (op2 !== 0) {
                result = op1 / op2;
            } else {
                displayResult('operand 2 is equal to 0');
                return;
            }
            break;
        case 'log':
            if (op1 <= 0) {
                displayResult('operand 1 is less or equal to  0');
                return;
            }
            result = Math.log(op1);
            fetchData('log');
            break;
        case 'sin':
            result = Math.sin(op1);
            fetchData('sin');
            break;
        case 'tan':
            result = Math.tan(op1);
            fetchData('tan');
            break;
        default:
            result = 'Invalid operation';
    }

    if (!['log', 'sin', 'tan'].includes(operation)) {
        document.getElementById('content').style.display = 'none';
    }

    displayResult(result);
}
