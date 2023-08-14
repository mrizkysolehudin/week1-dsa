const palindrom = (string) => {
	let arrayHuruf = [...string];
	let balikkanArrayHuruf = arrayHuruf.reverse();
	let stringTerbalik = balikkanArrayHuruf.join("");

	if (string === stringTerbalik) {
		console.log("string palindrom");
	} else {
		console.log("string bukan palindrom");
	}
};

palindrom("malama");
palindrom("malam");
