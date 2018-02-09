(function () {
    $(window)
        .on('load', function () {
            $('.loader').fadeOut();
            $('.page-loader')
                .delay(350)
                .fadeOut('slow');
        });

    $(document).ready(function () {
        var homeSection = $('.home-section');
        buildHomeSection(homeSection);

        function buildHomeSection(homeSection) {
            if (homeSection.length > 0) {
                if (homeSection.hasClass('home-full-height')) {
                    homeSection.height($(window).height());
                } else {
                    homeSection.height($(window).height() * 0.85);
                }
            }
        }

        var module = $('.home-section');
        module.each(function (i) {
            if ($(this).attr('data-background')) {
                $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
            }
        });

        var countDownDate = new Date("Feb 31, 2018 12:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document
                .getElementById("countdown")
                .innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document
                    .getElementById("countdown")
                    .innerHTML = "We are LIVE!";
            }
        }, 1000);
    });

})(jQuery);