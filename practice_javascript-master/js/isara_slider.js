$(function () {

    var slideWidth = $('.slide').outerWidth(); // .slideの幅を取得して代入
    var slideNum = $('.slide').length;  // .slideの数を取得して代入

    
var slideSetWidth = slideWidth * slideNum; // .slideの幅×数で求めた値を代入
$('.slideSet').css('width', slideSetWidth); // .slideSetのスタイルシートにwidth: slideSetWidthを指定

var slideSetWidth = slideWidth * slideNum; // .slideの幅×数で求めた値を代入
$('.slideSet').css('width', slideSetWidth);

$(".slideSet").animate({
    left: -slideWidth
});

var sliding = function() {
    $(".slideSet").animate({
        left: -slideWidth
    });
}

$(".slider-next").click(function(){
    sliding();
});

});
