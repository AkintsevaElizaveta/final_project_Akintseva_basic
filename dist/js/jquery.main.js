
$( document ).ready(function() {
    $(function() {
        $('.tabs__btn').click(function(){
            const tab_id = $(this).attr('href');

            $('.tabs__btn').removeClass('active');
            $('.tabs__content').removeClass('active');

            $(this).addClass('active');
            $(tab_id).addClass('active');
        })
    });
});