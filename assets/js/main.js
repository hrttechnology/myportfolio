(function($) {
    'use strict';

    $(window).on('load', function() {
        //==========preloder===========
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    })

    $(document).ready(function() {
        $('#sidebar').on('click', function() {
            $('.sidebar-overlay').addClass('active');
        });
        $(".sidebar-overlay").on("click", function(e) {
            if ($(e.target).is(".sidebar-overlay *") === false) {
                $(this).removeClass("active");
            }
        });
        $('.sidebar-close').on('click', function() {
            $('.sidebar-overlay').removeClass('active');
        });

        var section_menu = $(".section-btn");
        $(section_menu).on('click', function() {
            var section_id = $(this).attr('data-section');

            $("#" + section_id).addClass("active");
            $('.header').slideUp();

            $('#about .os-viewport').on('scroll', function() {
                setTimeout(function() {
                    $(".odometer").each(function() {
                        $(this).html($(this).attr("data-count"));
                    });
                });
            });

        });

        $('.section-btn[data-section=about]').on('click', function() {
            function animateElements() {
                $('.circle-progressbar').each(function() {
                    var elementPos = $(this).offset().top;
                    var topOfWindow = $(window).scrollTop();
                    var percent = $(this).find('.circle').attr('data-percent');
                    var percentage = parseInt(percent, 10) / parseInt(100, 10);
                    var animate = $(this).data('animate');
                    var size = $(this).width();
                    var thickness = $(this).find('.circle').attr('data-thick');
                    if ($(window).width() <= 1199) {
                        var thickness = $(this).find('.circle').attr('data-thick') / 1.5;
                    }
                    if ($(window).width() <= 991) {
                        var thickness = $(this).find('.circle').attr('data-thick') / 3;
                    }
                    if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                        $(this).data('animate', true);
                        $(this).find('.circle').circleProgress({
                            startAngle: -Math.PI / 2,
                            value: percent / 100,
                            size: size,
                            thickness: thickness,
                            emptyFill: "rgba(0,0,0, .2)",
                            fill: {
                                gradient: ["#CB26B6", "#F8B127"]
                            },
                            lineCap: "round",
                        }).on('circle-animation-progress', function(event, progress, stepValue) {
                            $(this).find('.percent').text((stepValue * 100).toFixed() + "%");
                        }).stop();
                    }
                });
            }
            animateElements();
        });

        var panelCose = $(".panel-close-btn");
        $(panelCose).on('click', function() {
            var section_id = $(this).attr('data-close');
            $("#" + section_id).removeClass("active").find('.os-viewport').animate({
                scrollTop: 0
            }, 'slow');
            $('.header').slideDown();
        });

        $(".section-panel").overlayScrollbars({});

        $('.filter-btn').on('click', function() {
            var ourTarget = $(this).attr('data-filter');

            $(this).addClass('active');
            $(this).siblings().removeClass('active');

            if (ourTarget == 'all') {
                $('.portfolio-row').children('.custom-col').show(150);
                $('.portfolio-row').children('.empty-msg').removeClass('active');
            } else {
                $('.portfolio-row').children('.custom-col:not(.' + ourTarget + ')').hide(150);
                $('.portfolio-row').children('.custom-col.' + ourTarget).show(150);

                if ($('.portfolio-row').children('.custom-col').hasClass(ourTarget) <= 0) {
                    $('.portfolio-row').children('.empty-msg').addClass('active');
                } else {
                    $('.portfolio-row').children('.empty-msg').removeClass('active');
                }
            }
            return false;
        });

        $('.testimonial-slider').slick({
            autoplay: true,
            autoplaySpeed: 2500,
            prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="fa-regular fa-left-long"></i></button>',
            nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="fa-regular fa-right-long"></i></button>',
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 1000,
            fade: true,
            responsive: [{
                    breakpoint: 700,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });

        $('.faq-header').on('click', function() {
            $(this).find('.icon').html('<i class="fa-light fa-minus"></i>');
            $(this).parent().siblings().find('.icon').html('<i class="fa-light fa-plus"></i>');
            $(this).siblings('.faq-body').slideDown();
            $(this).parent().siblings().find('.faq-body').slideUp();
        });

        $('.my-select').niceSelect();

        $(".gallery-content .single-img button").on("click", (function() {
            var i = $(this).parents(".single-img").find("img").attr("src");
            $(".image-lightbox-panel").addClass("active");
            $(".lightbox-image").attr("src", i);
            $("body").css("overflow", "hidden");
        }));
        $(".image-lightbox-panel").on("click", (function(i) {
            !1 === $(i.target).is(".lightbox-image") && ($(this).removeClass("active"),
                $("body").css("overflow", "auto"))
        }));

    });
}(jQuery));