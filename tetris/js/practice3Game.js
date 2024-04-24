// 时间间隔
var waitTime = 500;
var Game = function () {
	//dom元素
	var gameDiv;
	var nextDiv;
	// 游戏分数
	var score = 0;
	var scoreDiv;

	var gameSelf = this;
	gameSelf.timer = null;

	// 游戏矩阵
	var gameData = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];
	// 当前方块
	var cur;
	// 下一个方块
	var next;
	// divs
	var nextDivs = [];
	var gameDivs = [];

	// 判断点是否合法
	var check = function (pos, x, y) {
		if (pos.x + x < 0) {
			return 0;
		} else if (pos.x + x >= gameData.length) {
			return 0;
		} else if (pos.y + y < 0) {
			return 0;
		} else if (pos.y + y >= gameData[0].length) {
			return 0;
		} else if (gameData[pos.x + x][pos.y + y] === 1) {
			return 0;
		} else {
			return 1;
		}
	};

	// 检测数据是否合法
	var isValid = function (pos, data) {
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[0].length; j++) {
				if (data[i][j] !== 0 && check(pos, i, j) !== 1) {
					return false;
				}
			}
		}
		return true;

	};


	// 清除数据
	var clearData = function () {
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				if (check(cur.origin, i, j) === 1) {
					gameData[cur.origin.x + i][cur.origin.y + j] = 0;
				}
			}
		}
	};

	// 设置数据
	var setData = function () {
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				if (check(cur.origin, i, j) === 1) {
					gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
				}
			}
		}
	};

	// 初始化DIV函数
	var initDiv = function (container, data, divs) {
		for (var i = 0; i < data.length; i++) {
			var div = [];
			var newNodeTr = document.createElement('div');
			newNodeTr.className = 'newNodeTr';
			for (var j = 0; j < data[0].length; j++) {
				var newNode = document.createElement('div');
				newNode.className = 'none';
				var newNodeChild = document.createElement('div');
				newNodeChild.className = 'newNodeChild';
				newNode.appendChild(newNodeChild);
				newNodeTr.appendChild(newNode);
				div.push(newNode);
			}
			container.appendChild(newNodeTr);
			divs.push(div);
		}
	};

	// 重置DIV
	var resetDiv = function () {
		while (document.getElementById('gameBox').childNodes.length > 0) {
			document.getElementById('gameBox').removeChild(document.getElementById('gameBox').lastChild);
		}
		while (document.getElementById('nextBox').childNodes.length > 0) {
			document.getElementById('nextBox').removeChild(document.getElementById('nextBox').lastChild);
		}
		document.getElementById('score').value = 0;
		document.getElementById('time').value = 0;
		document.getElementById('gameLeave').value = 1;
		waitTime = 500;
	};

	// 时间函数
	var timeChange = function () {
		var timeTemp = 0;
		var timeMS = 0;
		var timeSL = 0;
		var timeSR = 0;
		var timeM = 0;
		var timeChangeBody = setInterval(function () {
			var gameOver = checkGameOver();
			if (gameOver) {
				clearInterval(timeChangeBody);
				timeChangeBody = null;
				buttonStartBeDown = 2;
			} else if (buttonStartBeDown === 1){
				clearInterval(timeChangeBody);
				timeChangeBody = null;
				buttonStartBeDown = 0;
			} else {
				timeTemp ++;
				timeMS < 9 ? timeMS ++ : timeMS = 0 ;
				if (timeTemp % 10 === 0){
					timeSR ++ ;
					if (timeSR === 10) timeSR = 0;
				}
				if (timeTemp % 100 === 0){
					timeSL ++ ;
					if (timeSL === 6) timeSL = 0;
				}
				if (timeTemp % 600 === 0){
					timeM ++ ;
				}
				document.getElementById('time').value =timeM.toString() + ': ' + timeSL.toString() + timeSR + ': ' + timeMS;
			}
		}, 100);
	};

	// 刷新DIV函数
	var refreshDiv = function (data, divs) {
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[0].length; j++) {
				if (data[i][j] === 0) {
					divs[i][j].className = 'none';
					divs[i][j].childNodes[0].style.background = '#dddddd';
				} else if (data[i][j] === 1) {
					divs[i][j].className = 'done';
					divs[i][j].childNodes[0].style.background = '#1f1f1f';
				} else if (data[i][j] === 2) {
					divs[i][j].className = 'ing';
					divs[i][j].childNodes[0].style.background = '#ae0000';
				}

			}
		}
	};

	// 下移事件
	var Down = function () {
		if (cur.canDown(isValid)) {
			clearData();
			cur.Down();
			setData();
			refreshDiv(gameData, gameDivs);
			return true;
		} else {
			return false;
		}

	};

	// 左移事件
	var Left = function () {
		if (cur.canLeft(isValid)) {
			clearData();
			cur.Left();
			setData();
			refreshDiv(gameData, gameDivs);
		}

	};

	// 右移事件
	var Right = function () {
		if (cur.canRight(isValid)) {
			clearData();
			cur.Right();
			setData();
			refreshDiv(gameData, gameDivs);
		}

	};

	// 旋转
	var Rotate = function () {
		if (cur.canRotate(isValid)) {
			clearData();
			cur.Rotate();
			setData();
			refreshDiv(gameData, gameDivs);
		}

	};

	// 方块着陆事件
	var fixed = function () {
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				if (check(cur.origin, i, j)) {
					if (gameData[cur.origin.x + i][cur.origin.y + j] === 2) {
						gameData[cur.origin.x + i][cur.origin.y + j] = 1;
					}
				}
			}
		}
		refreshDiv(gameData, gameDivs)
	};

	// 加分
	var addScore = function (line) {
		var s = 0;
		switch (line) {
			case 1:
				s = 100;
				break;
			case 2:
				s = 400;
				break;
			case 3:
				s = 900;
				break;
			case 4:
				s = 1600;
				break;
			default:
				break;

		}
		score += s;
		scoreDiv.value = score;
		var $gameLeave = document.getElementById('gameLeave');
		if (scoreDiv.value < 2000) {
			$gameLeave.value = 1;
			waitTime = 500;
		} else if (scoreDiv.value < 5000) {
			$gameLeave.value = 2;
			waitTime = 300;
		} else if (scoreDiv.value < 10000) {
			$gameLeave.value = 3;
			waitTime = 200;
		} else if (scoreDiv.value < 20000) {
			$gameLeave.value = 4;
			waitTime = 100;
		} else if (scoreDiv.value < 40000) {
			$gameLeave.value = 5;
			waitTime = 100;
		} else {
			$gameLeave.value = 6;
			waitTime = 50;
		}
		clearInterval(gameSelf.timer);
		gameSelf.timer = setInterval(move, waitTime);
		if (score > document.getElementById('numMax').value) {
			document.getElementById('numMax').value = score;
		}
	};


	// 消行
	var checkClear = function () {
		var line = 0;
		for (var i = gameData.length - 1; i >= 0; i--) {
			var clear = true;
			for (var j = 0; j < gameData[0].length; j++) {
				if (gameData[i][j] !== 1) {
					clear = false;
					break;
				}
			}
			if (clear) {
				line++;
				for (var m = i; m > 0; m--) {
					for (var n = 0; n < gameData[0].length; n++) {
						gameData[m][n] = gameData[m - 1][n];
					}
				}
				for (var x = 0; x < gameData[0].length; x++) {
					gameData[0][x] = 0;
				}
				i++;
			}
		}
		return line;
	};

	// 使用下一个方块
	var performNext = function (type, dir) {
		cur = next;
		setData();
		next = SquareFactory.prototype.make(type, dir);
		refreshDiv(gameData, gameDivs);
		refreshDiv(next.data, nextDivs);
	};

	// 检查游戏结束
	var checkGameOver = function () {
		var gameOver = false;
		for (var i = 0; i < gameData[0].length; i++) {
			if (gameData[1][i] === 1) {
				gameOver = true;
			}
		}
		return gameOver;
	};

	// 初始化
	function init(dom, type, dir) {
		resetDiv();
		gameDiv = dom.gameBox;
		nextDiv = dom.nextBox;
		scoreDiv = dom.scoreDiv;
		next = SquareFactory.prototype.make(type, dir);
		initDiv(gameDiv, gameData, gameDivs);
		initDiv(nextDiv, next.data, nextDivs);
		refreshDiv(next.data, nextDivs);
		gameSelf.timer = setInterval(move, waitTime);
	}

	// 随机生成一个方块种类
	var generateType = function () {
		return Math.ceil(Math.random() * 7) - 1;
	};

	// 随机生成一个样式
	var generateDir = function () {
		return Math.ceil(Math.random() * 4) - 1;
	};


	// 游戏结束后
	var stop = function () {
		if (gameSelf.timer) {
			clearInterval(gameSelf.timer);
			gameSelf.timer = null;
		}
		document.onkeydown = null;
		var i = gameData.length - 1;
		setInterval(function () {
			for (var j = 0; j < gameData[0].length; j++) {
				gameData[i][j] = 1;
			}
			refreshDiv(gameData, gameDivs);
			i > 0 ? i-- : clearInterval(this);
		}, 50);
		var x = next.data.length - 1;
		setInterval(function () {
			for (var j = 0; j < next.data[0].length; j++) {
				next.data[x][j] = 1;
			}
			refreshDiv(next.data, nextDivs);
			x > 0 ? x-- : clearInterval(this);
		}, 200);
	};

	// 移动
	function move() {
		if (!Down()) {
			fixed();
			var line = checkClear();
			if (line) {
				addScore(line);
			}
			var gameOver = checkGameOver();
			if (gameOver) {
				stop();
			} else {
				performNext(generateType(), generateDir());
			}
		}
	}

	// 导出API
	this.init = init;
	this.Down = Down;
	this.Left = Left;
	this.Right = Right;
	this.Rotate = Rotate;
	this.fixed = fixed;
	this.performNext = performNext;
	this.checkClear = checkClear;
	this.checkGameOver = checkGameOver;
	this.timeChange = timeChange;
	this.addScore = addScore;
	this.fall = function () {
		while (Down()) ;
	}
};