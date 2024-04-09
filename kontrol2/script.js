window.onload = function() {
    var array = [];
    for (var i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * 100));
    array.sort(function(a, b) {
        return a - b;
    });

    var sortedArray = document.createElement('p');
    sortedArray.textContent = 'Відсортований масив: ' + array.join(', ');
    document.body.insertBefore(sortedArray, document.getElementById('elementContainer'));

    var container = document.getElementById('elementContainer');
    var moveLeftBtn = document.createElement('button');
    moveLeftBtn.textContent = 'Посунути вліво';
    moveLeftBtn.onclick = function() {
        moveElement(-20);
    };
    container.appendChild(moveLeftBtn);

    var moveRightBtn = document.createElement('button');
    moveRightBtn.textContent = 'Посунути вправо';
    moveRightBtn.onclick = function() {
        moveElement(20);
    };
    container.appendChild(moveRightBtn);
};

function generateElement() {
    var height = document.getElementById('heightSelect').value;
    var element = document.createElement('div');
    element.style.backgroundColor = 'blue';
    element.style.width = '30px';
    element.style.height = height + 'px';
    document.getElementById('elementContainer').appendChild(element);
}

function moveElement(offset) {
    var element = document.querySelector('#elementContainer > div');
    if (element) {
        var currentLeft = parseInt(element.style.left) || 0;
        element.style.left = (currentLeft + offset) + 'px';
    }
}
