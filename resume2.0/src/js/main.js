$(function() {

    $('.page').css('height', $(window).height());

    $(window).resize(function() {
        $('.page').css('height', $(window).height());
    })



    $('html,body').animate({
        'scrollTop': 0
    });

    var scrollpage = function(a, c) {
        delta = a;

        if (delta == -1) {
            //console.log($(this).scrollTop());

            next_nav_li = $('.cnav .selected').next();

        } else if (delta == 1) {

            next_nav_li = $('.cnav .selected').prev();

        }

        if (next_nav_li.size() < 1) {
            return false;
        }
        next_page = $(next_nav_li.find('a').attr('href'));

        /*��ǰҳ���active��ʽ*/
        $('.page').removeClass('active');
        next_page.addClass('active');
        $('.active img').addClass('animated rollIn');
        $('.active img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function function_name(argument) {
            $('.active img').removeClass('animated rollIn');
        });
        $('html,body').stop().animate({
            'scrollTop': next_page.offset().top
        }, 'normal', 'swing', function() {

            $('.cnav li').removeClass('selected');
            next_nav_li.addClass('selected');

            if (!next_nav_li.hasClass('hide')) {
                $('.cnav li').removeClass('navCurr');
                next_nav_li.addClass('navCurr');
            }

        });
    }

    var i = !1;
    !
        $('body').mousewheel(function(event, delta) {


            if (!$('html,body').is(":animated") && !i) {
                i = !0,
                setTimeout(function() {
                        i = !1
                    },
                    'normal');

                scrollpage(delta, null);

            }


        });


    $('.cnav li, .naver li').click(function() {
        $('html,body').stop().animate({
            'scrollTop': $($(this).find('a').attr('href')).offset().top
        }, 'slow', 'swing');

        $('.cnav li').removeClass('navCurr').eq($(this).index()).addClass('navCurr');
        $('.cnav li').removeClass('selected').eq($(this).index()).addClass('selected');

        $('.page').removeClass('active');
        $($(this).find('a').attr('href')).addClass('active');
        $('.active img').addClass('animated rollIn');
        $('.active img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function function_name(argument) {
            $('.active img').removeClass('animated rollIn');
        });

    });

    $('#btnDown').click(function() {
        open("http://www.vastskycc.com/resume.doc");
    });


    // console.log('我妈突然让我写个简历,太突然了,所以这个很简陋，有机会会做的更好看点')
});