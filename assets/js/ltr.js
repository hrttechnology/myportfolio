(function($) {
    'use strict';
    $(document).ready(function() {

        var shapeModeChecked = localStorage.getItem('shapeModeChecked');
        if (shapeModeChecked) {
            $('#shapeChange').prop('checked', true);
            $('#shapeChange').siblings('label').text('Switch to Classic mode');
            $('link#sharpMode').attr('href', 'assets/css/style-sharp.css');
        }
        $('#shapeChange').on('change', function() {
            if ($(this).is(':checked')) {
                $(this).siblings('label').text('Switch to Classic mode');
                $('link#sharpMode').attr('href', 'assets/css/style-sharp.css');
                localStorage.setItem('shapeModeChecked', true);
            } else {
                $(this).siblings('label').text('Switch to Sharp mode');
                $('link#sharpMode').attr('href', '#');
                localStorage.removeItem('shapeModeChecked');
            }
        });

        var themeModeChecked = localStorage.getItem('themeModeChecked');
        if (themeModeChecked) {
            $('#themeChange').prop('checked', true);
            $('#themeChange').siblings('label').text('Switch to Light mode');
            $('link#darkMode').attr('href', 'assets/css/style-dark.css');
            $('#logo').attr('src', 'assets/images/logo-2.png');
        }
        $('#themeChange').on('change', function() {
            if ($(this).is(':checked')) {
                $(this).siblings('label').text('Switch to Light mode');
                $('link#darkMode').attr('href', 'assets/css/style-dark.css');
                $('#logo').attr('src', 'assets/images/logo-2.png');
                localStorage.setItem('themeModeChecked', true);
            } else {
                $(this).siblings('label').text('Switch to Dark mode');
                $('link#darkMode').attr('href', '#');
                $('#logo').attr('src', 'assets/images/logo.png');
                localStorage.removeItem('themeModeChecked');
            }
        });

        $('.client-slider').slick({
            slidesToShow: 5,
            autoplaySpeed: 2000,
            arrows: false,
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 1000,
            responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    });
}(jQuery));