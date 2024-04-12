function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var meal = document.querySelector('input[name="meal"]:checked');
    var foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    var comment = document.getElementById("comment").value;

    if (!username || !email || !meal || foodCheckboxes.length === 0 || !comment) {
        alert("Будь ласка, заповніть усі поля форми.");
        return;
    }

    var mealValue = meal ? meal.value : "не вказав";
    var foods = Array.from(foodCheckboxes).map(function(checkbox) {
        return checkbox.value;
    }).join(", ");

    var output = username + " (" + email + ") з’їв на " + mealValue + " " + foods + " та залишив такий коментар: \"" + comment + "\"";
    document.getElementById("output").innerText = output;
}

