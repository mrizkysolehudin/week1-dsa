const reverseWords = (kalimat) => {
	let arrayKata = kalimat.split(" ");
	let reverseArrayKata = arrayKata.reverse();
	let kalimatTerbalik = reverseArrayKata.join(" ");

	console.log(kalimatTerbalik);
};

reverseWords("saya belajar js");
