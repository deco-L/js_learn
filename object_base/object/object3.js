function input_sum(salary) {
	let sum;

	sum = 0;
	for (let people in salary)
	{
		alert(salary[people]);
		sum += salary[people];
	}
	return sum;
}

let empty = {};

alert(input_sum(empty));

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

alert(input_sum(salaries));