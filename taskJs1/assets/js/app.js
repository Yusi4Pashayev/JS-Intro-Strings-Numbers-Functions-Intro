// calculation

document.getElementById("add").addEventListener("click", function () {
    calc(this.id);
});

document.getElementById("sub").addEventListener("click", function () {
    calc(this.id);
});

document.getElementById("multp").addEventListener("click", function () {
    calc(this.id);
});

document.getElementById("divide").addEventListener("click", function () {
    calc(this.id);
});


function calc(id) {
    var number1 = document.getElementById("first").value;
    var number2 = document.getElementById("second").value;

    if (isNaN(number1), isNaN(number2)) {
        document.getElementById("result").innerHTML = "Reqem daxil edin";
    }
    else if (id === "add") {
        add(number1, number2);
    }
    else if (id === "sub") {
        subtract(number1, number2);
    }
    else if (id === "multp") {
        multiply(number1, number2);
    }
    else if (id === "divide") {
        divide(number1, number2);
    }
}

function add(number1, number2) {
    var result = parseInt(number1) + parseInt(number2);
    document.getElementById("result").innerHTML = result;
}
function subtract(number1, number2) {
    var result = parseInt(number1) - parseInt(number2);
    document.getElementById("result").innerHTML = result;
}
function multiply(number1, number2) {
    var result = parseInt(number1) * parseInt(number2);
    document.getElementById("result").innerHTML = result;
}
function divide(number1, number2) {
    var result = parseInt(number1) / parseInt(number2);
    document.getElementById("result").innerHTML = result;
}


//change bg for time


var now = new Date();
var hour = now.getHours();

const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const bg = document.querySelector("#bg");

if (hour >= 6 && hour <= 19) {
    var diff = 100 / 14; //14 burda gunduz saatlarinin vaxti
    var position = diff * (hour - 6) + "%";  // 6 saat 6 dan gunduz basladigi ucun
    console.log(position);
    sun.style.left = position;
    alert("gunduz");
}
else {
    var diff = 100 / 10; //10 burda gece saatlarinin vaxti
    var position = diff * (hour < 6 ? hour + 3 : hour - 19) + "%"; // 3 20:00 dan sonra 23:00 a kimi olan hisse ucun. 19 burda  19:00 a kimi olan hisseni cixma ucun
    moon.style.left = position;
    bg.style.filter = "brightness(0.3)";
    alert("gece");
}

