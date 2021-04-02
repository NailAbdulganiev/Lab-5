function check() {
	let myMatrix = document.getElementById("input").value.split("\n");

	let size = myMatrix.length;
	var array = new Array(size);
	let tmpInt;

	let checked = 0;
	for (let i = 0; i < myMatrix.length; i++) {
		let split = myMatrix[i].split(" ").filter(elem => elem != false);

		array[i] = new Array(size);

		for (let j = 0; j < split.length; j++) {
			if (isNaN(split[j]) && split[j] != "i"){
				checked = 1;
			}
			else if (i == j) {
				array[i][j] = "0";
			}
			else {
				array[i][j] = split[j];
			}
		}

		if (split.length != myMatrix.length) {
			checked = 2;
		}
	}

	if (checked == 0) {
		for (let iter = 0; iter < myMatrix.length; iter++) {
	
			for (let i = 0; i < myMatrix.length; i++) {
				for (let j = 0; j < myMatrix.length; j++) {
					if ((array[i][iter]) < Infinity && (array[iter][j]) < Infinity) {
						tmpInt = parseInt(array[i][iter], 10) + parseInt(array[iter][j], 10);
						if (tmpInt < array[i][j] || array[i][j] == "i") {
							array[i][j] = tmpInt;
						}
					}
				}
			}
		}

		var result = "";
		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				if (!isNaN(array[i][j])) {
					result += "1 ";
				}
				else {
					result += "0 ";
				}
			}
			result += "\n";
		}
		document.getElementById("output").innerHTML = result;
	}
	else if (checked == 1){
		alert("В матрице могут быть только числа либо буква \"i\"!");
	}
	else {
		alert("Матрица должна быть квадратной!");
	}
}