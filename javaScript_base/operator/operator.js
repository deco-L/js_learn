let a = 1, b = 1;

let c = ++a;
let d = b++;

alert(c , d);

a = 2;

let x = 1 + (a *= 2);

alert(a);
alert(x);

x = "" + 1 + 0;
alert(x);
x = "" - 1 + 0;
alert(x);
x = true + false;
alert(x);
x = 6 / "3";
alert(x);
x = "2" * "3";
alert(x);
x = 4 + 5 + "px";
alert(x);
x = "$" + 4 + 5;
alert(x);
x = "4" - 2;
alert(x);
x = "4px" - 2;
alert(x);
x = 7 / 0;
alert(x);
x = " -9 " + 5;
alert(x);
x = " -9 " - 5;
alert(x);
x = null + 1;
alert(x);
x = undefined + 1;
alert(x);
x = " \t \n" - 2;
alert(x);

a = prompt("First number?", 1);
b = prompt("Second number?", 2);

alert(+a + +b);
