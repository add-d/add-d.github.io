$(function() {


       // 返回顶部
    $('#backTop').click(function() {
        $(window).scrollTop(0);
    })


       var mySwiper = new Swiper(".ban_box .swiper-container", {
        loop: true,
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        //     // autoplay: true,
        // },

        pagination: {
            el: '.ban-dot',
            clickable: true,
        },
        navigation: {
            prevEl: '.ban-prev',
            nextEl: '.ban-next',
        },

    });



    //首页移动端导航
    $(".list_box_nav_mobile>li i").click(function() {
        $(this).parents(".list_box_nav_mobile>li").find(".list").slideToggle();
        $(this).parents(".list_box_nav_mobile>li").toggleClass("on1");
        $(this)
            .parents(".list_box_nav_mobile>li")
            .siblings()
            .find(".list")
            .slideUp();
        $(this).parents(".list_box_nav_mobile>li").siblings().removeClass("on1");
    });

    $("#nav_btn_box").click(function() {
        $("#nav_btn_box .point").toggleClass("on");
        $("#nav_btn_box").toggleClass("on");
        $("#m_nav").toggleClass("act");
        $(".nav_mask").fadeToggle();
    });

    $(".nav_mask").click(function() {
        $("#nav_btn_box .point").removeClass("on");
        $("#nav_btn_box").removeClass("on");
        $(this).fadeToggle();
        $(".nav_btn_box").removeClass("act");
        $("#m_nav").removeClass("act");
    });

    $("#m_nav .close").click(function() {
        $("#nav_btn_box .point").removeClass("on");
        $("#nav_btn_box").removeClass("on");
        $(".nav_btn_box").removeClass("act");
        $("#m_nav").removeClass("act");
        $(".nav_mask").fadeOut();
    });



    // 搜索已移除

    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.head').addClass('on')
        } else {
            $('.head').removeClass('on')
        }
    })

});