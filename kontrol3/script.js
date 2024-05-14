// Функція для отримання даних з файлу та відображення їх на сторінці
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

// Функція для відображення контенту на сторінці
function displayContent(content) {
    const contentElement = document.getElementById('content');
    contentElement.style.display = 'block';
    contentElement.innerHTML = content;
}

// Функція для виконання арифметичних операцій
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
            if(op2 !== 0) {
                result = op1 / op2;
            } else {
                displayContent('Result: operand 2 is equal to 0');
                return;
            }
            break;
        case 'log':
            if (op1 <= 0) {
                displayContent('Result: operand 1 is less or equal to 0');
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
    document.getElementById('res').innerText = `Result: ${result}`;
}

// Додавання обробників подій для кнопок
document.getElementById('add-button').addEventListener('click', () => calculate('add'));
document
