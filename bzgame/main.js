var $gengduoButton = document.getElementById('gengduo-button'); //获取微型导航菜单栏ID
var $navTan = document.getElementById('navTan'); //弹出窗口
var $navTanClose = document.getElementById('navTan-close'); //弹出窗口关闭按钮
var $useButton = document.getElementById('use-button');  //用户登录按钮
var daojishi;

$gengduoButton.onclick = function () {//打开小型的导航菜单栏
    document.body.style.overflow = 'hidden'; //超出浏览器隐藏
    $navTan.style.display = 'block';  //隐藏浏览器的横条和竖条
    document.getElementById('navMix').setAttribute('style', 'display: -webkit-box; display: flex;'); //显示微型菜单栏
    //document.getElementById('regMix').style.display = 'none'; //隐藏注册界面
    //document.getElementById('loginMix').style.display = 'none';  //隐藏登录界面
    //document.getElementById('fogetMix').style.display = 'none'; //隐藏忘记密码界面
}

$useButton.onclick = function () {//打开用户登录弹出窗口
    eyeReload(); //重置眼睛的状态
    document.body.style.overflow = 'hidden'; //超出浏览器隐藏
    $navTan.style.display = 'block';  //隐藏浏览器的横条和竖条
    document.getElementById('loginMix').setAttribute('style', 'display: -webkit-box; display: flex;');  //显示登录界面
    document.getElementById('navMix').style.display = 'none';  //隐藏微型菜单栏（第一次点击需要隐藏）
    //document.getElementById('regMix').style.display = 'none';  //隐藏注册界面
    //document.getElementById('fogetMix').style.display = 'none'; //隐藏忘记密码界面

}
$navTanClose.onclick = function () {//关闭弹出窗口，隐藏所有弹出界面
    $navTan.style.display = 'none'; //隐藏弹出界面
    document.body.style.overflow = 'auto';  //恢复浏览器横条和竖条
    document.getElementById('navMix').style.display = 'none';  //隐藏微型菜单栏
    document.getElementById('regMix').style.display = 'none';  //隐藏注册界面
    document.getElementById('fogetMix').style.display = 'none'; //隐藏忘记密码界面
    document.getElementById('loginMix').style.display = 'none'; //隐藏登录界面
    document.getElementsByClassName('reg-phoneText')[0].disabled = true; //重置1号短信发送按钮
    document.getElementsByClassName('reg-phoneText')[1].disabled = true; //重置2号短信发送按钮

}

for (var i = 0; i < document.getElementsByClassName('reg-Now').length; i++) { //立即注册按钮单击事件，按钮不止一个，需要循环赋予
    document.getElementsByClassName('reg-Now')[i].onclick = function () { //单个编号按钮的事件
        eyeReload(); //重置眼睛的状态
        inputReload();  //重置输入框的状态
        sendMessageReload();  //重置短信发送按钮的状态 （必须）
        document.getElementById('regMix').setAttribute('style', 'display: -webkit-box; display: flex;'); //显示注册部分
        document.getElementById('loginMix').style.display = 'none'; //隐藏登录模块
        document.getElementById('fogetMix').style.display = 'none';  //隐藏忘记密码模块
    }
}
for (var i = 0; i < document.getElementsByClassName('login-Now').length; i++) { //立即登录按钮单击事件
    document.getElementsByClassName('login-Now')[i].onclick = function () { //单个编号按钮的事件
        eyeReload(); //重置眼睛的状态
        inputReload(); //重置输入框的状态
        sendMessageReload(); //重置短信发送按钮的状态 （必须）
        document.getElementById('loginMix').setAttribute('style', 'display: -webkit-box; display: flex;') //显示登录部分
        document.getElementById('regMix').style.display = 'none'; //隐藏注册和忘记密码部分
        document.getElementById('fogetMix').style.display = 'none'; //隐藏注册和忘记密码部分
    }
}

for (var i = 0; i < document.getElementsByClassName('fogetPasswords').length; i++) { //忘记密码按钮单击事件
    document.getElementsByClassName('fogetPasswords')[i].onclick = function () { //单个编号按钮的事件
        eyeReload();  //重置眼睛的状态
        inputReload(); //重置输入框的状态
        sendMessageReload(); //重置短信发送按钮的状态 （必须）
        document.getElementById('fogetMix').setAttribute('style', 'display: -webkit-box; display: flex;') //显示忘记密码部分
        document.getElementById('regMix').style.display = 'none'; //隐藏登录和注册
        document.getElementById('loginMix').style.display = 'none';
    }
}


for (var i = 0; i < document.getElementsByClassName('navTan-regLogin-child-eye').length; i++) { //眼睛事件，包括点击，移入，移出
    eyeClick(i);
}

for (var i = 0; i < document.getElementsByClassName('reg-phoneText').length; i++) { //短信发送按钮事件 和 与之对应的手机号码输入框事件
    sendMessage(i);
}

function sendMessage(i) {
    var project = document.getElementsByClassName('reg-mobbileNumber')[i];
    var buttonBox = document.getElementsByClassName('reg-phoneText')[i];
    project.oninput = function () { //手机号码输入框文本改变事件
        if ((/^1[34578]\d{9}$/.test(project.value))) {
            buttonBox.style.backgroundColor = '#207f63';
            buttonBox.style.color = '#ffffff';
            buttonBox.disabled = false;
        } else {
            buttonBox.style.backgroundColor = '#303237';
            buttonBox.style.color = '#697081';
            buttonBox.disabled = true;
        }
    }
    buttonBox.onclick = function () {  //短信发送按钮单击事件
        //alert('短信发送成功,进入重新发送倒计时，按钮颜色恢复默认状态，其他事件也写这里');
        buttonBox.style.backgroundColor = '#303237';
        buttonBox.style.color = '#697081';
        buttonBox.disabled = true;
        var j = 6;
        buttonBox.innerHTML = j + ' 秒后重新发送';
        daojishi = setInterval(function () {
            j -= 1;
            if (j === 0) {
                clearInterval(daojishi);
                if ((/^1[34578]\d{9}$/.test(project.value))) {
                    buttonBox.style.backgroundColor = '#207f63';
                    buttonBox.style.color = '#ffffff';
                    buttonBox.innerHTML = '发送短信验证码';
                    buttonBox.disabled = false;
                } else {
                    buttonBox.style.backgroundColor = '#303237';
                    buttonBox.style.color = '#697081';
                    buttonBox.innerHTML = '发送短信验证码';
                }
            } else {
                buttonBox.innerHTML = j + ' 秒后重新发送';
            }
        }, 1000);
    }

    buttonBox.onmouseover = function () { //短信发送按钮移入
        if (this.disabled !== true) {
            buttonBox.style.backgroundColor = '#c39902';
        }
    }
    buttonBox.onmouseout = function () { //短信发送按钮移出
        if (this.disabled !== true) {
            buttonBox.style.backgroundColor = '#207f63';
        }
    }
}
function eyeReload() { //眼睛重载
    for (var i = 0; i < document.getElementsByClassName('navTan-regLogin-child-eye').length; i++) {
        document.getElementsByClassName('navTan-regLogin-child-eye')[i].style.backgroundImage = 'url(images/closeeye.svg)';
    }
}
function inputReload() { // 输入框重载
    var x = document.getElementsByClassName('inputBox-Main');
    for (var i = 0; i < x.length; i++) {
        x[i].value = '';
        x[i].parentNode.style.borderBottom = 'solid 1px #303237';
    }
}
function sendMessageReload() { //发送短信按钮重载
    for (var i = 0; i < document.getElementsByClassName('reg-mobbileNumber').length; i++) {
        document.getElementsByClassName('reg-phoneText')[i].style.backgroundColor = '#303237';
        document.getElementsByClassName('reg-phoneText')[i].style.color = '#697081';
        document.getElementsByClassName('reg-phoneText')[i].disabled = true;
    }
}

function eyeClick(i) { //眼睛操作事件
    project = document.getElementsByClassName('navTan-regLogin-child-eye');
    project[i].onclick = function () { //眼镜单击
        var backgstring = this.style.backgroundImage;
        var j = backgstring.indexOf('openeye');
        if (j !== -1) {
            document.getElementsByClassName('reg-passWold')[i].type = 'password';
            this.style.backgroundImage = 'url(images/closeeye-hover.svg)';
        } else {
            document.getElementsByClassName('reg-passWold')[i].type = 'text';
            this.style.backgroundImage = 'url(images/openeye.svg)';
        }

    }
    project[i].onmouseover = function () { //眼睛移入
        var backgstring = this.style.backgroundImage;
        var j = backgstring.indexOf('openeye');
        if (j === -1) {
            this.style.backgroundImage = 'url(images/closeeye-hover.svg)';
        }
    }
    project[i].onmouseout = function () { //眼睛移出
        var backgstring = this.style.backgroundImage;
        var j = backgstring.indexOf('openeye');
        if (j === -1) {
            this.style.backgroundImage = 'url(images/closeeye.svg)';
        }
    }
}

for (i = 0; i < document.getElementsByClassName('button-headLogin').length; i++) {
    document.getElementsByClassName('button-headLogin')[i].onclick = function () {
        document.getElementById('PCLoginMain').setAttribute('style', 'display: -webkit-box; display: flex;');
        document.getElementById('loginMix1').setAttribute('style', 'display: -webkit-box; display: flex;');
    }
}

document.getElementById('navTan-close1').onclick = function () {
    document.getElementById('PCLoginMain').style.display = 'none';
    document.getElementById('regMix1').style.display = 'none';  //隐藏注册界面
    document.getElementById('fogetMix1').style.display = 'none'; //隐藏忘记密码界面
    document.getElementById('loginMix1').style.display = 'none'; //隐藏登录界面
    document.getElementsByClassName('reg-phoneText')[2].disabled = true; //重置1号短信发送按钮
    document.getElementsByClassName('reg-phoneText')[3].disabled = true; //重置2号短信发送按钮
}

//PC 的注册 / 登录 / 忘记密码 事件 --------------------------------------------------------------------------------------------
for (var i = 0; i < document.getElementsByClassName('reg-Now2').length; i++) { //立即注册按钮单击事件，按钮不止一个，需要循环赋予
    document.getElementsByClassName('reg-Now2')[i].onclick = function () { //单个编号按钮的事件
        eyeReload(); //重置眼睛的状态
        inputReload();  //重置输入框的状态
        sendMessageReload();  //重置短信发送按钮的状态 （必须）
        document.getElementById('regMix1').setAttribute('style', 'display: -webkit-box; display: flex;'); //显示注册部分
        document.getElementById('loginMix1').style.display = 'none'; //隐藏登录模块
        document.getElementById('fogetMix1').style.display = 'none';  //隐藏忘记密码模块
    }
}
for (var i = 0; i < document.getElementsByClassName('login-Now2').length; i++) { //立即登录按钮单击事件
    document.getElementsByClassName('login-Now2')[i].onclick = function () { //单个编号按钮的事件
        eyeReload(); //重置眼睛的状态
        inputReload(); //重置输入框的状态
        sendMessageReload(); //重置短信发送按钮的状态 （必须）
        document.getElementById('loginMix1').setAttribute('style', 'display: -webkit-box; display: flex;') //显示登录部分
        document.getElementById('regMix1').style.display = 'none'; //隐藏注册和忘记密码部分
        document.getElementById('fogetMix1').style.display = 'none'; //隐藏注册和忘记密码部分
    }
}

for (var i = 0; i < document.getElementsByClassName('fogetPasswords2').length; i++) { //忘记密码按钮单击事件
    document.getElementsByClassName('fogetPasswords2')[i].onclick = function () { //单个编号按钮的事件
        eyeReload();  //重置眼睛的状态
        inputReload(); //重置输入框的状态
        sendMessageReload(); //重置短信发送按钮的状态 （必须）
        document.getElementById('fogetMix1').setAttribute('style', 'display: -webkit-box; display: flex;') //显示忘记密码部分
        document.getElementById('regMix1').style.display = 'none'; //隐藏登录和注册
        document.getElementById('loginMix1').style.display = 'none';
    }
}
//PC 的注册 / 登录 / 忘记密码 事件 ---------------------------------------------------------------------------------------------
document.getElementById('theReg').onclick = function () {
    document.getElementById('PCLoginMain').setAttribute('style', 'display: -webkit-box; display: flex;');
    document.getElementById('loginMix1').style.display = 'none';
    document.getElementById('regMix1').setAttribute('style', 'display: -webkit-box; display: flex;');
}
document.getElementById('theForget').onclick = function () {
    document.getElementById('PCLoginMain').setAttribute('style', 'display: -webkit-box; display: flex;');
    document.getElementById('loginMix1').style.display = 'none';
    document.getElementById('fogetMix1').setAttribute('style', 'display: -webkit-box; display: flex;');
}

for (var i = 0; i < document.getElementsByClassName('inputBox-Main').length; i++) {
    var projectBen = document.getElementsByClassName('inputBox-Main')[i];
    projectBen.onfocus = function () {
        this.parentNode.style.borderBottom = 'solid 1px #03fcb3';
    }
    projectBen.onblur = function () {
        if (this.value.length === 0) {
            this.parentNode.style.borderBottom = 'solid 1px #303237';
        }
    }
}