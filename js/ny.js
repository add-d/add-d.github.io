// 左侧侧导航
$(function() {
    $('.menu-link').click(function(e) {
        e.preventDefault();
        var $item = $(this).closest('.menu-item');
        $item.toggleClass('open');
        $item.siblings().removeClass('open');
    });
});



// 内页手机二级导航
$(function() {
    var windoww = $(window).width();
    $('.sp_nav').click(function() {
        $('.sp_nav').toggleClass('sp_nav_se');
        $('.sjj_nav').toggleClass('nav_show');
    });

    $('.sjj_nav ul li i').click(function() {
        $(this).parent().children('ul').slideToggle().parent().siblings().children('ul').slideUp();
        $(this).toggleClass('sjj_nav_i_se');
        $(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
    });

    $('.sjj_nav ul li').click(function() {
        $('.sjj_nav ul li').removeClass("grey");
        $(this).addClass("grey")
    });


    $('.sp_nav_xjb').html('<svg t="1496193951932" class="icon" style="" viewBox="0 0 1024 1024" version="x.x" xmlns="http://www.w3.org/2000/svg" p-id="995" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"> <path d="M768.468 428.876l-84.723-84.723-170.711 170.711-170.711-170.711-84.723 84.723 170.711 170.711-0.092 0.091 84.723 84.724 0.092-0.092 0.092 0.092 84.723-84.724-0.092-0.091z" p-id="996"></path></svg>');

});