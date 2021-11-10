Array.prototype.myUnshiftMethod = function (element1) {
	for (i = this.length - 1; i >= 0; --i) {
		this[i + 1] = this[i];
	}
	return (arr[0] = element1);
};

let arr = [12, 34, 35, 17, 14, 24];
arr.myUnshiftMethod(28);
console.log(arr);
