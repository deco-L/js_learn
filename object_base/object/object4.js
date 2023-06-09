function multiplyNumeric(obj) {
	for (let key in obj)
	{
		if (typeof(obj[key]) == 'number')
			obj[key] *= 2;
	}
	return (obj)
}

function isalert(obj) {
	for (let key in obj)
		alert(obj[key]);
}

let menu = {
	width: 200,
	heigth: 300,
	title: "My menu"
};

multiplyNumeric(menu);

isalert(menu);