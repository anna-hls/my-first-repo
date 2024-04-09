let array = [];
for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100));
}
array.sort((a, b) => a - b);

const sortedArrayElement = document.createElement('div');
sortedArrayElement.textContent = 'Відсортований масив: ' + array.join(', ');
document.body.appendChild(sortedArrayElement);

const selectElement = document.createElement('select');
const optionValues = ['25px', '45px', '65px'];
optionValues.forEach(value => {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = value;
  selectElement.appendChild(option);
});
document.body.appendChild(selectElement);

const generateButton = document.createElement('button');
generateButton.textContent = 'Згенерувати';
document.body.appendChild(generateButton);

generateButton.addEventListener('click', () => {
  const divElement = document.createElement('div');
  divElement.style.backgroundColor = 'blue';
  divElement.style.width = '30px';
  divElement.style.height = selectElement.value;

  const moveLeftButton = document.createElement('button');
  moveLeftButton.textContent = 'Посунути вліво';
  moveLeftButton.addEventListener('click', () => {
    divElement.style.left = (parseInt(divElement.style.left) || 0) - 20 + 'px';
  });

  const moveRightButton = document.createElement('button');
  moveRightButton.textContent = 'Посунути вправо';
  moveRightButton.addEventListener('click', () => {
    divElement.style.left = (parseInt(divElement.style.left) || 0) + 20 + 'px';
  });

  document.body.appendChild(divElement);
  document.body.appendChild(moveLeftButton);
  document.body.appendChild(moveRightButton);
});
