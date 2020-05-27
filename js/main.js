jQuery(document).ready(function ($) {
    $(document).ready(function () {
        $(document).delegate('.open', 'click', function (event) {
            $('#main').css({opacity: 0.1});
            $('.close').css({display: 'block'});
            $(this).addClass('oppenned');
            event.stopPropagation();
        })
        $(document).delegate('body', 'click', function (event) {
            $('#main').css({ opacity: 1 });
            $('.close').css({ display: 'none' });
            $('.open').removeClass('oppenned');
        })
        $(document).delegate('a[title="About"]', 'click', function (event) {
            $('#main').css({ opacity: 1 });
            $('.close').css({ display: 'none' });
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        })
        $(document).delegate('.close', 'click', function (event) {
            $('#main').css({ opacity: 1 });
            $('.close').css({ display: 'none' });
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        });
    });

});