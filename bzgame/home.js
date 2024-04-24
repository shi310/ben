document.getElementById('rep-nex-Box-left').onclick = function () {
    //首先判断 div 的背景图片 以及 窗口大小
    event.stopPropagation();//阻止触发父元素的点击事件
    var $bannerMain = document.getElementById('banner-main');
    if ($bannerMain.style.backgroundImage.indexOf('banner-2') !== -1) {
        if (window.innerWidth < 750){
            $bannerMain.style.backgroundImage = 'url(images/banner-1-phone.png)';
        } else {
            $bannerMain.style.backgroundImage = 'url(images/banner-1.jpg)';
        }
    } else if ($bannerMain.style.backgroundImage.indexOf('banner-3') !== -1) {
        if (window.innerWidth < 750){
            $bannerMain.style.backgroundImage = 'url(images/banner-2-phone.png)';
        } else {
            $bannerMain.style.backgroundImage = 'url(images/banner-2.jpg)';
        }
    }else if ($bannerMain.style.backgroundImage.indexOf('banner-4') !== -1) {
        if ( window.innerWidth < 750){
            $bannerMain.style.backgroundImage = 'url(images/banner-3-phone.png)';
        } else {
            $bannerMain.style.backgroundImage = 'url(images/banner-3.jpg)';
        }
    } else {
        if (window.innerWidth < 750){
            $bannerMain.style.backgroundImage = 'url(images/banner-4-phone.png)';
        } else {
            $bannerMain.style.backgroundImage = 'url(images/banner-4.jpg)';
        }
    }
}
document.getElementById('rep-nex-Box-right').onclick = function () {
    //首先判断 div 的背景图片 以及 窗口大小
    event.stopPropagation();//阻止触发父元素的点击事件
    var $bannerMain = document.getElementById('banner-main');
    if ($bannerMain.style.backgroundImage.indexOf('banner-2') !== -1) {
        if (window.innerWidth < 750){
            $bannerMain.style.backgroundImage = 'url(images/banner-3-phone.png)';
        } else {
            $bannerMain.style.backgroundImage = 'url(images/banner-3.jpg)';
        }
    } else if ($bannerMain.style.backgroundImage.indexOf('banner-3') !== -1) {
        if (window.innerWidth < 750){
            $bannerMain.style.backgroundImage = 'url(images/banner-4-phone.png)';
        } else {
            $bannerMain.style.backgroundImage = 'url(images/banner-4.jpg)';
        }
    }else if ($bannerMain.style.backgroundImage.indexOf('banner-4') !== -1) {
        if ( window.innerWidth < 750){
            $bannerMain.style.backgroundImage = 'url(images/banner-1-phone.png)';
        } else {
            $bannerMain.style.backgroundImage = 'url(images/banner-1.jpg)';
        }
    } else {
        if (window.innerWidth < 750){
            $bannerMain.style.backgroundImage = 'url(images/banner-2-phone.png)';
        } else {
            $bannerMain.style.backgroundImage = 'url(images/banner-2.jpg)';
        }
    }
}

window.onresize = function () { //细化窗口适应事件，更改不同窗口下的banner背景
    var $bannerMain = document.getElementById('banner-main');
    if (window.innerWidth < 750){
        if ($bannerMain.style.backgroundImage.indexOf('banner-1') !== -1) {
            $bannerMain.style.backgroundImage = 'url(images/banner-1-phone.png)';
        } else if ($bannerMain.style.backgroundImage.indexOf('banner-2') !== -1) {
            $bannerMain.style.backgroundImage = 'url(images/banner-2-phone.png)';
        } else if ($bannerMain.style.backgroundImage.indexOf('banner-3') !== -1) {
            $bannerMain.style.backgroundImage = 'url(images/banner-3-phone.png)';
        } else if ($bannerMain.style.backgroundImage.indexOf('banner-4') !== -1) {
            $bannerMain.style.backgroundImage = 'url(images/banner-4-phone.png)';
        }
    } else {
        if ($bannerMain.style.backgroundImage.indexOf('banner-1') !== -1) {
            $bannerMain.style.backgroundImage = 'url(images/banner-1.jpg)';
        } else if ($bannerMain.style.backgroundImage.indexOf('banner-2') !== -1) {
            $bannerMain.style.backgroundImage = 'url(images/banner-2.jpg)';
        } else if ($bannerMain.style.backgroundImage.indexOf('banner-3') !== -1) {
            $bannerMain.style.backgroundImage = 'url(images/banner-3.jpg)';
        } else if ($bannerMain.style.backgroundImage.indexOf('banner-4') !== -1) {
            $bannerMain.style.backgroundImage = 'url(images/banner-4.jpg)';
        }
    }
    zixunVideoImg ();
}
function zixunVideoImg () {
    var $zixunVideoBox = document.getElementsByClassName('zixun-videos-child-imgBox');
    for (var i = 0; i < $zixunVideoBox.length; i++) {
        var offerWidth = getComputedStyle($zixunVideoBox[i], false)['width'];
        var offerHight = getComputedStyle($zixunVideoBox[i], false)['height'];
        var offerWidth1= getComputedStyle($zixunVideoBox[i].childNodes[1], false)['width'];
        var offerHight1 = getComputedStyle($zixunVideoBox[i].childNodes[1], false)['height'];
        if (offerWidth > offerWidth1){
            $zixunVideoBox[i].childNodes[1].setAttribute('style','width: 100%; height: auto;');
        } else if (offerHight > offerHight1) {
            $zixunVideoBox[i].childNodes[1].setAttribute('style','width: auto; height: 100%;');
        }
    }
}
document.getElementById('banner-main').addEventListener('click', function () {
    if (this.style.backgroundImage.indexOf('banner-2') !== -1) {
        window.location.href = "https://www.baidu.com";
    } else if (this.style.backgroundImage.indexOf('banner-3') !== -1) {
        window.location.href = "https://www.taobao.com";
    } else if (this.style.backgroundImage.indexOf('banner-4') !== -1) {
        window.location.href = "https://www.163.com";
    } else {
        window.location.href = "https://www.adobe.com";
    }
});

function changeZixun (e) {
    switch (e.innerHTML){
        case "新闻":
            changeZixunReload ();
            document.getElementById('zixun-news').setAttribute('style', 'display: -webkit-box; display: flex;');
            break;
        case "视频":
            changeZixunReload ();
            document.getElementById('zixun-videos').setAttribute('style', 'display: -webkit-box; display: flex;');
            zixunVideoImg ();
            break;
        case "图集":
            changeZixunReload ();
            document.getElementById('zixun-photos').setAttribute('style', 'display: -webkit-box; display: flex;');
            break;
        case "专题":
            changeZixunReload ();
            document.getElementById('zixun-topic').setAttribute('style', 'display: -webkit-box; display: flex;');
            break;
    }
}

function changeZixunReload () {
    document.getElementById('zixun-news').setAttribute('style', 'display: none;');
    document.getElementById('zixun-videos').setAttribute('style', 'display: none;');
    document.getElementById('zixun-photos').setAttribute('style', 'display: none;');
    document.getElementById('zixun-topic').setAttribute('style', 'display: none;');
}