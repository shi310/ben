var $moveBotton = document.getElementById('move-botton');
var $moveFather = document.getElementById('move-father');
var $moveMain = document.getElementById('move-main');
var $opationBox = document.getElementsByClassName('opation-left');

window.onload = function () {
    $moveBotton.onmouseover = function () {
        styleChange($moveMain, function () { styleChange($moveMain, function () { styleChange($moveMain, 'none', 500, 'width') }, 400, 'height') }, 0, 'marginLeft', 20, 'opacity', 400, 'width');
    }
    $moveFather.onmouseleave = function () {
        styleChange($moveMain, function () { styleChange($moveMain, function () { styleChange($moveMain, 'none', -200, 'marginLeft', 100, 'opacity', 200, 'width') }, 200, 'height') }, 400, 'width');
    }
    for (var i = 0; i < $opationBox.length; i++) {
        $opationBox[i].onmouseover = function () {
            styleChange(this, 'none', 800, 'width', 10, 'opacity');
        }
        $opationBox[i].onmouseleave = function () {
            styleChange(this, 'none', 200, 'width', 100, 'opacity');
        }
    }
}
function styleChange(object, againMove, iTaget, styleName, iTaget2, styleName2, iTaget3, styleName3) { //封装动画函数，可传入三个属性的动画，耗时最长的放第一个位置
    clearInterval(object.timer); //初始化时间戳
    object.timer = setInterval(function () {
        //读取属性的当前值----------------------------------------------------
        var offerStyle = getComputedStyle(object, false)[styleName];
        offerStyle = styleName === 'opacity' ? offerStyle * 100 : parseInt(offerStyle);
        var offerStyle2 = getComputedStyle(object, false)[styleName2];
        offerStyle2 = styleName2 === 'opacity' ? offerStyle2 * 100 : parseInt(offerStyle2);
        var offerStyle3 = getComputedStyle(object, false)[styleName3];
        offerStyle3 = styleName3 === 'opacity' ? offerStyle3 * 100 : parseInt(offerStyle3);

        var speed = (iTaget - offerStyle) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        var speed2 = (iTaget2 - offerStyle2) / 10;
        speed2 = speed2 > 0 ? Math.ceil(speed2) : Math.floor(speed2);
        var speed3 = (iTaget3 - offerStyle3) / 10;
        speed3 = speed3 > 0 ? Math.ceil(speed3) : Math.floor(speed3);
        //-------------------------------------------------------------------
        if (offerStyle === iTaget) { //达到目标值，这里只取第一个属性作为目标
            clearInterval(object.timer) //停止动画
            if (againMove !== 'none') { againMove(); }
        } else {
            if (styleName === 'opacity') { //判断第一个属性，如果属性是透明度，则数值除以100
                object.style[styleName] = (offerStyle + speed) / 100;
            } else { //判断第一个属性，如果不是透明度，则按下面规则处理
                object.style[styleName] = offerStyle + speed + 'px';
            }
            if (styleName2 === 'opacity') {
                object.style[styleName2] = (offerStyle2 + speed2) / 100;
            } else {
                object.style[styleName2] = offerStyle2 + speed2 + 'px';
            }
            if (styleName3 === 'opacity') {
                object.style[styleName3] = (offerStyle3 + speed3) / 100;
            } else {
                object.style[styleName3] = offerStyle3 + speed3 + 'px';
            }

        }
    }, 30);

}