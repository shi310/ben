var $proImg = document.getElementsByClassName('promotionBox-child-right-huodongImg');
window.onresize = function () {
    proImgAuto ();
}
window.onload = function () {
    proImgAuto ();
}

function proImgAuto () {
    for (var i = 0; i < $proImg.length; i++) {
        if (window.innerWidth < 750) {
            var offerWidth = getComputedStyle($proImg[i], false)['width'];
            var j = parseInt(offerWidth) / 2.6666666;
            $proImg[i].style.height = j + 'px';
        } else {
            $proImg[i].style.height = '180px';
        }
    }
}