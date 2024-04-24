document.getElementById('navPortrait').addEventListener('mouseenter', function () {
    this.style.border = 'solid 1px #e00606';
    this.style.cursor = 'pointer';

});
document.getElementById('navPortrait').addEventListener('mouseleave', function () {
    this.style.border = 'none';
});
for (var numIndex = 0; numIndex < document.getElementsByClassName('indexNav').length; numIndex++) {
    document.getElementsByClassName('indexNav')[numIndex]. onmousemove = function () {
        this.style.background = '#151515';
        this.childNodes[5].style.background = '#b83131';
    };
    document.getElementsByClassName('indexNav')[numIndex].onmouseout = function () {
        this.style.background = 'none';
        this.childNodes[5].style.background = 'none';
    };
}
for (var numIndex2 = 0; numIndex2 < document.getElementsByClassName('portraitTextButton').length; numIndex2++) {
    document.getElementsByClassName('portraitTextButton')[numIndex2]. onmousemove = function () {
        this.style.background = 'red';
    };
    document.getElementsByClassName('portraitTextButton')[numIndex2].onmouseout = function () {
        this.style.background = '#9f241b';
    };
}
