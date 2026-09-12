$(function() {




    // 大团队
    var mySwiper = new Swiper('.s6-c .swiper-container', {
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.s6c-dot',
            type: "progressbar",
        },
        navigation: {
            prevEl: '.s6c-prev',
            nextEl: '.s6c-next',
        },
        slidesPerView: 3.75,
        // centeredSlides: true,
        loop: true,
        scrollbarHide: false,
        scrollbarDraggable: true,
        scrollbarSnapOnRelease: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            421: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            701: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            921: {
                slidesPerView: 3.9,
                spaceBetween: 40,
            },
            1025: {
                slidesPerView: 3.8,
                spaceBetween: 40,
            },
        }
    });


    // 大项目
    var mySwiper = new Swiper('.s7-c .swiper-container', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.s7c-prev',
            nextEl: '.s7c-next',
        },
        pagination: {
            el: '.s7c-dot',
            clickable: true,
        },
        slidesPerView: 4,
        // centeredSlides: true,
        loop: true,
        scrollbarHide: false,
        scrollbarDraggable: true,
        scrollbarSnapOnRelease: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            420: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            620: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            921: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }
    });


    // 大工程

    // 1. 默认给第一个li添加on类
    // $('.list li:first').addClass('on');

    // 2. 鼠标移入li
    $('.s8-c li').mouseenter(function() {
        // 先移除所有li的on，再给当前li添加
        $('.s8-c li').removeClass('on');
        $(this).addClass('on');
    });


    // 大工程手机

    var mySwiper = new Swiper(".s8-mob .swiper-container", {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        slidesPerView: 1.4,
        spaceBetween: 20,


    });

    // 大成果：3D Coverflow 舞台轮播
    var mySwiper = new Swiper('.keyan .swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        speed: 780,
        slidesPerView: 'auto',
        spaceBetween: 18,
        coverflowEffect: {
            rotate: 32,
            stretch: -36,
            depth: 260,
            modifier: 1.15,
            slideShadows: false
        },
        autoplay: {
            delay: 4200,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.keyan-next',
            prevEl: '.keyan-prev',
        },
        pagination: {
            el: '.keyan-dot',
            clickable: true,
        },
        breakpoints: {
            320: {
                spaceBetween: 10,
                coverflowEffect: {
                    rotate: 16,
                    stretch: 0,
                    depth: 120,
                    modifier: 1,
                    slideShadows: false
                }
            },
            768: {
                spaceBetween: 16,
                coverflowEffect: {
                    rotate: 24,
                    stretch: -20,
                    depth: 180,
                    modifier: 1.05,
                    slideShadows: false
                }
            },
            1100: {
                spaceBetween: 18,
                coverflowEffect: {
                    rotate: 32,
                    stretch: -36,
                    depth: 260,
                    modifier: 1.15,
                    slideShadows: false
                }
            }
        }
    });



    // 获奖印鉴横向滚动由 CSS animation 承担；此处仅兜底旧 .text2
    const text2 = document.querySelector('.text2');
    if (text2 && text2.querySelector('.scroll-inner')) {
        const inner = text2.querySelector('.scroll-inner');
        let timer = null;
        const speed = 1;

        function scrollUp() {
            text2.scrollTop += speed;
            if (text2.scrollTop >= inner.offsetHeight - text2.clientHeight) {
                text2.scrollTop = 0;
            }
        }

        function startScroll() {
            clearInterval(timer);
            timer = setInterval(scrollUp, 30);
        }

        function stopScroll() {
            clearInterval(timer);
        }

        startScroll();
        text2.addEventListener('mouseenter', stopScroll);
        text2.addEventListener('mouseleave', startScroll);
    }



})