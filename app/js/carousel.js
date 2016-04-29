jQuery(document).ready(function($) {
    $('.productcard__carousel_thumbnail_item').on('click', function(){
        var src = $(this).children('img').attr('src');
        $('.productcard__carousel_main_img').children('img').attr('src', src);
    });
});