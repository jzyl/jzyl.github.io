var num=0;
/*按左箭头左移*/
var leftFn=function(){
        $('.flexslider .slides li').eq(num).stop().fadeOut();
        num--;
        if(num<0){
            num=0;
        }
        $('.flexslider .slides li').eq(num).stop().fadeIn();
        $('.sliderBtn li').eq(num).addClass('current').siblings().removeClass('current');
};
/*按右箭头右移*/
var rightFn=function(){
        $('.flexslider .slides li').eq(num).stop().fadeOut();
        num++;
        if(num>3){
            num=3;
        }
        $('.flexslider .slides li').eq(num).stop().fadeIn();
        $('.sliderBtn li').eq(num).addClass('current').siblings().removeClass('current');
};
/*鼠标点击*/
$('.leftBtn').click(function(e){
    console.log(1);
    leftFn();
});
$('.rightBtn').click(function(e){
    console.log(2);
    rightFn();
});
/*点击小图标*/
$('.sliderBtn li').click(function(e){
    $('.flexslider .slides li').eq(num).stop().fadeOut();
    num=$(this).index();
    $('.flexslider .slides li').eq(num).stop().fadeIn();
    $('.sliderBtn li').eq(num).addClass('current').siblings().removeClass('current');
});