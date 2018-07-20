/*移动时hover*/
$('#menu ul>li').hover(function(){
    $(this).children('ul').addClass('active');
},function(){
    $(this).children('ul').removeClass('active');
});

/*选中时*/
$('#menu ul>li').click(function(e){
    e.preventDefault();
    $(this).addClass('current').siblings().removeClass('current');
    location.href='';
});