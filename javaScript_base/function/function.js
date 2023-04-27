function min(a, b)
{
	return (a < b) ? a : b;
}

alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));
alert(min(a, b));
alert(min('a', 'b'));
alert(min('a', 1));
alert(min('0', 1));
alert(min('', 1));

function pow(a, b)
{
	let number;

	number = 1;
	if (a == 0)
	while (b-- > 0)
		number *= number * a;

	return number;
}

alert(pow(3, 4));
alert(pow(0, 0));
alert(pow(0, 3));