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




    // 成果推广：滚动里程轨 + 指针光域（整图展示，无条带裁剪）
    (function initS4EditorialMotion() {
        var root = document.querySelector('[data-s4-motion]');
        if (!root) return;

        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var head = root.querySelector('.s4-ed__head');
        var chapters = Array.prototype.slice.call(root.querySelectorAll('.s4-ed__chapter'));
        var railKm = root.querySelector('.s4-ed__rail-km');
        var railFill = root.querySelector('.s4-ed__rail-track i');
        var ticking = false;

        chapters.forEach(function (chapter) {
            if (!reduce) {
                chapter.addEventListener('pointermove', function (e) {
                    var rect = chapter.getBoundingClientRect();
                    var x = ((e.clientX - rect.left) / rect.width) * 100;
                    var y = ((e.clientY - rect.top) / rect.height) * 100;
                    chapter.style.setProperty('--mx', x.toFixed(2) + '%');
                    chapter.style.setProperty('--my', y.toFixed(2) + '%');
                    chapter.style.setProperty('--tilt-x', ((y - 50) / 50 * -3).toFixed(2) + 'deg');
                    chapter.style.setProperty('--tilt-y', ((x - 50) / 50 * 4).toFixed(2) + 'deg');
                });
                chapter.addEventListener('pointerleave', function () {
                    chapter.style.setProperty('--tilt-x', '0deg');
                    chapter.style.setProperty('--tilt-y', '0deg');
                });
            }
        });

        function chapterProgress(el) {
            var rect = el.getBoundingClientRect();
            var vh = window.innerHeight || document.documentElement.clientHeight;
            var start = vh * 0.92;
            var end = vh * 0.18;
            var p = (start - rect.top) / (start - end);
            return Math.max(0, Math.min(1, p));
        }

        function updateScrollMotion() {
            ticking = false;
            var bestIdx = 0;
            var bestScore = -1;
            chapters.forEach(function (chapter, idx) {
                var p = chapterProgress(chapter);
                chapter.style.setProperty('--p', p.toFixed(3));
                var rect = chapter.getBoundingClientRect();
                var mid = rect.top + rect.height * 0.5;
                var score = 1 - Math.abs(mid - window.innerHeight * 0.45) / window.innerHeight;
                if (score > bestScore) { bestScore = score; bestIdx = idx; }
            });
            chapters.forEach(function (chapter, idx) {
                chapter.classList.toggle('is-focus', idx === bestIdx);
            });
            if (railKm) {
                var km = chapters[bestIdx].getAttribute('data-km') || ('0' + (bestIdx + 1)).slice(-2);
                if (railKm.textContent !== km) {
                    railKm.classList.remove('is-tick');
                    void railKm.offsetWidth;
                    railKm.textContent = km;
                    railKm.classList.add('is-tick');
                }
            }
            if (railFill) {
                railFill.style.transform = 'scaleY(' + ((bestIdx + 1) / chapters.length).toFixed(3) + ')';
            }
        }

        function onScroll() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateScrollMotion);
        }

        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) entry.target.classList.add('is-in');
                });
            }, { threshold: 0.22, rootMargin: '0px 0px -8% 0px' });
            if (head) io.observe(head);
            chapters.forEach(function (chapter) { io.observe(chapter); });
        } else {
            if (head) head.classList.add('is-in');
            chapters.forEach(function (chapter) { chapter.classList.add('is-in'); });
        }

        if (reduce) {
            if (head) head.classList.add('is-in');
            chapters.forEach(function (chapter) { chapter.classList.add('is-in'); });
            if (railFill) railFill.style.transform = 'scaleY(1)';
            return;
        }

        updateScrollMotion();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
    })();


})