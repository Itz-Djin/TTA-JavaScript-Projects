function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}

document.getElementById("NaN_T").innerHTML = isNaN("Hello World!");
document.getElementById("NaN_F").innerHTML = isNaN('555');
document.write("<br>");
document.write(2E310);
document.write(-2E310);
