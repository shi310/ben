document.getElementById('iconZixun').onclick = function () {
    document.getElementById('P4_Tan').style.display = 'flex';
    document.body.style.overflow = 'hidden';
};
document.getElementById('iconClose').onclick = function () {
    document.getElementById('P4_Tan').style.display = 'none';
    document.body.style.overflowY = 'auto';
};

// var $lianxiText = document.getElementsByClassName('lianxiText');
// var $lianxiTextBox = document.getElementsByClassName('lianxiTextBox');
// var Timer = null;

// for (var i = 0; i < $lianxiText.length; i++) {
//     $lianxiText[i].onclick = function () {
//         var Brother = this.nextSibling.nextSibling;
//         for (var j = 0; j < $lianxiTextBox.length; j++) {
//             hiddenHeight($lianxiTextBox[j]);
//         }
//         Brother.style.display = 'flex';
//         showHeight(Brother);
//     }
// }

// function showHeight(tempHeight) {
//     var i = tempHeight;
//     clearInterval(Timer);
//     Timer = setInterval(function () {
//         if (i.offsetHeight < 270) {
//             i.style.height = i.offsetHeight + 10 + 'px';
//         } else {
//             clearInterval(Timer);
//         }
//     }, 20)
// }
// function hiddenHeight(tempHeight) {
//     var i = tempHeight;
//     clearInterval(Timer);
//     Timer = setInterval(function () {
//         if (i.offsetHeight > 0) {
//             i.style.height = i.offsetHeight - 10 + 'px';
//         } else {
//             i.style.display = 'none';
//             i.style.height = 0;
//             clearInterval(Timer);
//         }
//     }, 20)
// }


