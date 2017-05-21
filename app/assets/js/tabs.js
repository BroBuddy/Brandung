$(function() {

    /* RANDOM TAB AT PAGELOAD */

    var trandom = true;
    //var trandom = false;

    if (trandom) {

        var tsize = $('.tabs__link').length;
        var tstart = Math.floor((Math.random() * tsize) + 1);

        $('.tabs__link:nth-child(' + tstart + ')').addClass('current');

        var tid = $('.tabs__link:nth-child(' + tstart + ')').attr('data-tab');
        $("#" + tid).addClass('current');

    } else {

        $('.tabs__link:first').addClass('current');
        $('.content:first').addClass('current');

    }

    /* SWITCHING TABS BY CLICKING */

    $('.tabs__link').click(function(e) {

        e.preventDefault();

        var tid = $(this).attr('data-tab');

        if(!$(this).hasClass('current')) {

            $('.tabs__link').removeClass('current');
            $('.content').removeClass('current');

            $(this).addClass('current');
            $("#" + tid).addClass('current');

        }

    });

});