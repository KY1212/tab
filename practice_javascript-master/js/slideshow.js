$(function(){

    $(".slider").each(function (){
    
        var $container = $(this),
        $button = $container.find('.button'),
        $slider = $(".button").find("img"),
        slideCount = $slider.length,
        currentIndex = 0,
        $slideGroup = $container.find('.slider'),
        $nav = $container.find('.button');

        function updateNav () {
            var $navPrev = $nav.find('.prev'), 
            $navNext = $nav.find('.next');

            if (currentIndex === 0) {
                $navPrev.addClass('disabled');
            } else {
                $navPrev.removeClass('disabled');
            }

            if (currentIndex === slideCount - 1) {
                $navNext.addClass('disabled');
            } else {
                $navNext.removeClass('disabled');
            }
            // // 現在のスライドのインジケーターを無効に
            // $indicator.find('a').removeClass('active')
            //     .eq(currentIndex).addClass('active');
        }

        function goToSlide (index) {
            // $slideGroup.animate({ left: - 100 * index + '%' });
            currentIndex = index;
            updateNav();
        }

        $nav.on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });

        $(".button .prev").on("click", function(event){
            var index = $(".slide").index(currentIndex);
            alert(index);
            $(".slide").removeClass("active").eq(currentIndex).addClass("active");
        });

        $(".button .next").on("click", function(event){
            var index = $(".slide").index(currentIndex);
            alert(index);
            $(".slide").removeClass("active").eq(currentIndex).addClass("active");
        });

    });
});