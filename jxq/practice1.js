var $bodyTD = document.getElementsByClassName('bodyTD');
var $result = document.getElementById('resultInput');
var numResult = 0; //最终结果
var toResult = true;  //运算与否
var strResult = ''; //运算符
var numClear = false; //数字清零
var resultClear = false; //结果清零
//手机端布局
document.getElementsByClassName('bodyTR')[4].style.background = '#ff4f3b';
if (/Android|webOS|iPhone|iPod|BlackBerry/.test(navigator.userAgent)) {
    document.getElementById('indexHead').style.height = '60px';
    document.getElementById('indexHeadRight').style.marginRight = '10px';
    document.getElementById('navPortrait').style = 'width:30px; height:30px; border-radius: 15px';
    document.getElementById('Portrait').style = 'width:30px; height:30px';
    document.getElementById('indexLogo').style.marginLeft = '10px';
    document.getElementById('indexLogo').style.height = '60px';
    document.getElementById('Logo').height = '60';
    document.getElementById('resultBox').style.height = '80px';
    document.getElementById('resultBox').style.width = '100%';
    document.getElementById('bodyTable').style.width = '95%';
	document.getElementById('bodyTable').style.marginTop = '3%';
	document.getElementById('bodyTable').style.marginBottom = '3%';
    document.getElementById('indexFeet').style.height = '120px';
    $result.style.font = '30px bold 微软雅黑';
    $result.style.paddingRight = '10px';
    document.getElementsByClassName('indexNav')[0].style.marginLeft = '15px';
    for (var i = 0; i < document.getElementsByClassName('indexNav').length; i++) {
        document.getElementsByClassName('indexNav')[i].style.width = '50px';
        document.getElementsByClassName('indexNav')[i].style.font = '12px 微软雅黑';

    }
    for (var j = 0; j < document.getElementsByClassName('bodyTR').length; j++) {
        document.getElementsByClassName('bodyTR')[j].style.height = '80px';
    }
    for (var x = 0; x < $bodyTD.length; x++) {
        $bodyTD[x].style.width = '24.7%';
        $bodyTD[x].style.height = '80px';
    }

} else {
    document.getElementById('navPortrait').addEventListener('mouseenter', function () {
        this.style.border = 'solid 1px #e00606';
        this.style.cursor = 'pointer';

    });
    document.getElementById('navPortrait').addEventListener('mouseleave', function () {
        this.style.border = 'none';
    });
    for (var numIndex = 0; numIndex < document.getElementsByClassName('indexNav').length; numIndex++) {
        document.getElementsByClassName('indexNav')[numIndex].onmouseover = function () {
            this.style.background = '#151515';
            this.childNodes[5].style.background = '#b83131';
        };
        document.getElementsByClassName('indexNav')[numIndex].onmouseout = function () {
            this.style.background = 'none';
            this.childNodes[5].style.background = 'none';
        };
    }
    document.getElementById('portraitTextButton').addEventListener('mouseenter', function () {
        this.style.background = 'red';

    });
    document.getElementById('portraitTextButton').addEventListener('mouseleave', function () {
        this.style.background = '#9f241b';

    });

}
var numTDE = [0, 1, 2, 3, 7, 11, 15, 19];
for (var numIndexJ = 0; numIndexJ < numTDE.length; numIndexJ++) {
    $bodyTD[numTDE[numIndexJ]].style.background = '#eeeeee';
    $bodyTD[19].style.background = '#ff4f3b';
    $bodyTD[numTDE[numIndexJ]].onmouseover = function () {
        if (this.innerHTML !== '=') {
            this.style.background = '#cccccc';
            this.style.color = '#ffffff';
        } else {
            this.style.background = '#db4136';
        }
    };

    $bodyTD[numTDE[numIndexJ]].onmouseout = function () {
        if (this.innerHTML !== '=') {
            this.style.background = '#eeeeee';
            this.style.color = '#000000';
        } else {
            this.style.background = '#ff4f3b';
        }

    };
    $bodyTD[numTDE[numIndexJ]].onmousedown = function () {
        this.style.background = '#ff8b31';
        this.style.color = '#ffffff';
        switch (this.innerHTML) {
            case '+':
            case '-':
            case '×':
            case '÷':
                if (resultClear === true){
                    toResult = true;
                    resultClear = false;
                    strResult = this.innerHTML;
                    $result.value = /[+-]/.test(this.innerHTML) ? 0 : 1;
                }
                if (toResult === true) {
                    resultFunction();
                }
                toResult = false;
                numClear = true;
                strResult = this.innerHTML;
                break;
            case '=':
                resultFunction();
                resultClear = true;
                if (numClear = true) {
                    toResult = false
                }
                break;
            case 'C':
                numResult = 0; //最终结果
                toResult = true;  //运算与否
                strResult = ''; //运算符
                numClear = false; //数字清零
                resultClear = false; //结果清零
                $result.value = 0;
                break;
            case '%':
                numResult = $result.value / 100;
                break;
            case '√':
                numResult = Math.sqrt($result.value);
                break;
        }
        $result.value = numResult;
    };
}

var numTDF = [4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18];
for (var numIndexF = 0; numIndexF < numTDF.length; numIndexF++) {
    $bodyTD[numTDF[numIndexF]].style.background = '#ffffff';
    $bodyTD[17].style.background = '#eeeeee';
    $bodyTD[numTDF[numIndexF]].onmouseover = function () {
        if (this.innerHTML !== '←') {
            this.style.background = '#eeeeee';
            this.style.color = '#000000';
        } else {
            this.style.background = '#cccccc';
            this.style.color = '#ffffff';
        }
    };
    $bodyTD[numTDF[numIndexF]].onmouseout = function () {
        if (this.innerHTML !== '←') {
            this.style.background = '#ffffff';
            this.style.color = '#000000';
        } else {
            this.style.background = '#eeeeee';
            this.style.color = '#000000';
        }
    };
    $bodyTD[numTDF[numIndexF]].onmousedown = function () {
        this.style.background = '#ff8b31';
        this.style.color = '#ffffff';
        switch (this.innerHTML){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (numClear !== false) {
                    numClear = false;
                    $result.value = this.innerHTML;
                } else if ($result.value === '0'){
                    $result.value = this.innerHTML;
                } else {
                    $result.value += this.innerHTML;
                }
                resultClearFunction();
                break;
            case '.':
                if (numClear !== false) {
                    numClear = false;
                    $result.value = '0.';
                    if (resultClear === true) {
                        numResult = 0;
                        strResult = '';
                        resultClear = false;
                    }
                }
                if (!/[.]/.test($result.value)){
                    $result.value += ".";
                    resultClearFunction();
                }
                break;
            case '←':
                numClear = false;
                $result.value = $result.value.length === 1 ? '0' : $result.value.slice(0,$result.value.length-1);
                resultClearFunction();
                break;
        }
        toResult = true;
    };
}

function resultFunction() {
    switch (strResult) {
        case '':
            numResult = Number($result.value);
            break;
        case '+':
            numResult += Number($result.value);
            break;
        case '-':
            numResult -= Number($result.value);

            break;
        case '×':
            numResult *= Number($result.value);
            break;
        case '÷':
            numResult = $result.value !== '0' ? numResult / Number($result.value) : 0;
            break;
    }
}
function resultClearFunction() {
    if (resultClear === true) {
        numResult = 0;
        strResult = '';
        resultClear = false;
    }
}