let array = [];

for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100));
}

array.sort((a, b) => b - a);
document.write("<p>Відсортований масив: " + array.join(", ") + "</p>");

function generateDiv() {
    let dimensions = document.getElementById("dimensions").value;
    let div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = dimensions + "px";
    div.style.backgroundColor = "red";
    document.body.appendChild(div);

    let moveUpBtn = document.createElement("button");
    moveUpBtn.textContent = "Посунути уверх";
    moveUpBtn.onclick = moveUp;
    document.body.appendChild(moveUpBtn);

    let moveDownBtn = document.createElement("button");
    moveDownBtn.textContent = "Посунути вниз";
    moveDownBtn.onclick = moveDown;
    document.body.appendChild(moveDownBtn);
}

function moveUp() {
    let div = document.querySelector("div");
    let currentTop = parseInt(div.style.top) || 0;
    div.style.top = (currentTop - 20) + "px";
}

function moveDown() {
    let div = document.querySelector("div");
    let currentTop = parseInt(div.style.top) || 0;
    div.style.top = (currentTop + 20) + "px";
}
