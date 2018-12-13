/**
 * Vong lap while do-while.
 */

// Bai 1:in ra cac so tu 1->10 su dung vong lap while.
function listInteger() {
	var i = 1;
	while (i <= 10) {
		document.write(i + "&nbsp");
		i++;
	}
}

// Bai 2:in ra cac so tu 1->10 su dung vong lap do-while.
function listInteger2() {
	var i = 1;
	do {
		document.write(i + "&nbsp");
		i++
	} while(i <= 10);
}
