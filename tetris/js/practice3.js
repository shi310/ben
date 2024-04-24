var local = new Local();
	local.start();
var buttonStartBeDown = 0;
var buttonPause = true;
document.getElementById('buttonStart').onclick = function () {
	buttonStartBeDown === 2 ? buttonStartBeDown = 0 : buttonStartBeDown = 1;
	local.start();
};
document.getElementById('buttonPause').onclick = function () {
	buttonPause = !buttonPause;
	buttonPause ? this.value = '暂停' : this.value = '继续';
};