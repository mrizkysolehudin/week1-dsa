const divideAndSort = (bilangan) => {
	const arrayAngka = bilangan.toString().split("0");
	const sortAngka = arrayAngka.map((item) =>
		parseInt(item.split("").sort().join("")),
	);

	const hasil = parseInt(sortAngka.join(""));
	return hasil;
};

console.log(divideAndSort(5956560159466056));
// 55566914566956;
