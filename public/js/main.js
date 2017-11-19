$(document).ready(function(){
    $('.select-box').on('click', function() {
        if ($(this).find('.select-box__dropdown').hasClass('is-active')){
            $('.select-box').find('.select-box__dropdown').removeClass('is-active');
        }
        else {
            $('.select-box').find('.select-box__dropdown').removeClass('is-active');
            $(this).find('.select-box__dropdown').addClass('is-active');
        }
    });
    $('.select-box__dropdown').each(function(){
        $(this).find('li').on('click', function(){
            var textVal = $(this).text();
            $(this).parent().prev('.select-box__content').find('.select-box__text').text(textVal);
        });
    });
});