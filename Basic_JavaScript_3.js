function myAddition() {
    var addStuffTogether = 5 + 10 + 15 + 20;
    document.getElementById("Math").innerHTML = "5 + 10 + 15 + 20 = " + addStuffTogether;
}

function mySubtraction() {
    var subtractStuffTogether = 3 - 6 - 9;
    document.getElementById("Howl").innerHTML = "3 - 6 - 9 = " + subtractStuffTogether;
}

function myMultiplication() {
    var multiplyStuffTogether = 8 * 8;
    document.getElementById("Zoom").innerHTML = "8 * 8 = " + multiplyStuffTogether;
}

function myModulus() {
    var modulieStuffTogether = 98 % 5;
    document.getElementById("Pow").innerHTML = "98 % 5 = " + modulieStuffTogether;
}

function myIncrement() {
    var incrementStuffTogether = 4
    incrementStuffTogether++;
    document.getElementById("Bam").innerHTML = "4++ = " + incrementStuffTogether;
}

function myDecrement() {
    var decrementStuffTogether = 7;
    decrementStuffTogether--;
    document.getElementById("Thwack").innerHTML = "7-- = " + decrementStuffTogether;
}

function myRandom() {
    var randomizeStuffTogether = window.alert(Math.random());
    document.getElementById("Jump").innerHTML = "The random number = " + randomizeStuffTogether;
}