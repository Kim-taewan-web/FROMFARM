$(function () {
    $('.event1').click(function () {
        $('.pop1').fadeIn();//show();
        $('.pop2, .pop3').fadeOut();//hide();
    });
    $('.event2').click(function () {
        $('.pop2').fadeIn();//show();
        $('.pop1, .pop3').fadeOut();//hide();
    });
    $('.event3').click(function () {
        $('.pop3').fadeIn();//show();
        $('.pop1, .pop2').fadeOut();//hide();
    });

    $('.color2 a:nth-child(1)').click(function () {
        $('.cow1').fadeIn();//show();
        $('.cow1').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });

    $('.color2 a:nth-child(2)').click(function () {
        $('.cow').fadeIn();//show();
        $('.cow').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });
    $('.color2 a:nth-child(3)').click(function () {
        $('.cow2').fadeIn();//show();
        $('.cow2').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });
    $('.color2 a:nth-child(4)').click(function () {
        $('.cow3').fadeIn();//show();
        $('.cow3').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });
    $('.color2 a:nth-child(5)').click(function () {
        $('.cow4').fadeIn();//show();
        $('.cow4').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });
    $('.color2 a:nth-child(6)').click(function () {
        $('.cow5').fadeIn();//show();
        $('.cow5').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });
    $('.color2 a:nth-child(7)').click(function () {
        $('.cow6').fadeIn();//show();
        $('.cow6').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });
    $('.color2 a:nth-child(8)').click(function () {
        $('.cow7').fadeIn();//show();
        $('.cow7').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });
    $('.color2 a:nth-child(9)').click(function () {
        $('.cow8').fadeIn();//show();
        $('.cow8').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });
    $('.color2 a:nth-child(10)').click(function () {
        $('.cow9').fadeIn();//show();
        $('.cow9').siblings('a').fadeOut();
        $('.color_inner_inner>img').removeClass('on');
    });

    $('.color2 a:nth-child(12)').click(function () {
        $('.color_inner_inner>img').addClass('on');//show();
        $('.color_inner_inner a').fadeOut();
    });


    /* 이벤트 페이지*/

    $('.con1 li:nth-child(1) a').click(function () {
        $('.popup1').fadeIn();//show();
    });
    $('.popup1 a').click(function () {
        $('.popup1').fadeOut();//hide();
    });
    $('.con1 li:nth-child(2) a').click(function () {
        $('.popup2').fadeIn();//show();
    });
    $('.popup2 a').click(function () {
        $('.popup2').fadeOut();//hide();
    });
    $('.con1 li:nth-child(3) a').click(function () {
        $('.popup1').fadeIn();//show();
    });
    $('.popup1 a').click(function () {
        $('.popup1').fadeOut();//hide();
    });
    $('.con1 li:nth-child(4) a').click(function () {
        $('.popup2').fadeIn();//show();
    });
    $('.popup2 a').click(function () {
        $('.popup2').fadeOut();//hide();
    });
});

