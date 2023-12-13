$(document).ready(() => {

    $('.hidden-text').slideUp();

    $(document).ready(function () {
        $('.open-text').on('click', function () {
            let hiddenText = $(this).closest('.app-item').find('.hidden-text');
            let allIcons = $('.open-text');

            // Close all other sections and update icons
            $('.app-item').not($(this).closest('.app-item')).find('.hidden-text').slideUp(300);
            allIcons.not(this).removeClass('fa-minus').addClass('fa-plus');

            // Toggle the clicked section and update its icon
            hiddenText.slideToggle(300);
            $(this).toggleClass('fa-plus fa-minus');
        });
    });
});