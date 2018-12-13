/* loop for */
// in ra cac so tu 1 den 10.
function listInteger() {
	for (var i = 1; i < 11; i++) {
		document.write(i+"&nbsp"); // &nbsp la ki tu khoang trang.
	}
}

// in ra cac so tu 10 den 0.
function listInteger2() {
	for (var i = 10; i >=0; i--) {
		document.write(i+"&nbsp");
	}
}

// in ra cac so tu 0->30 ma chia het cho 3.
function chiaHetChoBa() {
	for (var i = 0; i <= 30; i++) {
		if (i%3 == 0) {
			document.write(i + "&nbsp");
		}
	}
}