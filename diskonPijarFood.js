const PijarFood = (harga, voucher, jarak = 2, pajak = false) => {
	let diskonPromo = 0;
	let biayaAntar = jarak <= 2 ? 5_000 : 5_000 + (jarak - 2) * 3_000;
	let biayaPajak = pajak ? harga * 0.05 : 0;

	let promo;
	if (voucher === "PIJARFOOD5" && harga >= 50_000) {
		promo = harga * 0.5;
		diskonPromo = promo >= 50_000 ? 50_000 : promo;
	} else if (voucher === "DITRAKTIRPIJAR" && harga >= 25_000) {
		promo = harga * 0.6;
		diskonPromo = promo >= 25_000 ? 30_000 : promo;
	}

	let total = harga + biayaAntar - diskonPromo + biayaPajak;

	return {
		harga: harga,
		potongan: diskonPromo,
		biayaAntar,
		pajak: biayaPajak,
		subtotal: total,
	};
};
console.log(PijarFood(75_000, "PIJARFOOD5", 1, true));
