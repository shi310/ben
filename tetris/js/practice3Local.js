var Local = function () {
	// 游戏对象
	var game;

	// 绑定键盘事件
	var bindKdyEvent = function () {
		document.onkeydown = function (e) {
			if (e.keyCode === 38) { // UP
				game.Rotate();

			} else if (e.keyCode === 39) { // Right
				game.Right();

			} else if (e.keyCode === 40) { // Down
				game.Down();

			} else if (e.keyCode === 37) { // Left
				game.Left();

			} else if (e.keyCode === 32) { // Space
				game.fall();
			}
		};

		document.getElementById('buttonUp').onclick = function () {
			game.Rotate();
		};
		document.getElementById('buttonRotate').onclick = function () {
			game.Rotate();
		};
		document.getElementById('buttonLeft').onclick = function () {
			game.Left();
		};
		document.getElementById('buttonDown').onclick = function () {
			game.fall();
		};
		document.getElementById('buttonRight').onclick = function () {
			game.Right();
		};
	};

	// 随机生成一个方块种类
	var generateType = function () {
		return Math.ceil(Math.random() * 7) - 1;
	};

	// 随机生成一个样式
	var generateDir = function () {
		return Math.ceil(Math.random() * 4) - 1;
	};

	//开始
	function start() {
		var dom = {
			gameBox: document.getElementById('gameBox'),
			nextBox: document.getElementById('nextBox'),
			scoreDiv: document.getElementById('score')

		};
		game = new Game();
		game.init(dom, generateType(), generateDir());
		bindKdyEvent();
		game.performNext(generateType(), generateDir());
		game.timeChange();
	}

	// 导出API
	this.start = start;
};
