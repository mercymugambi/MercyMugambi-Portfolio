$(function () {

    'use strict';

    $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
            
        });

        var $grid = $('.grid').isotope({
            // options options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
        

        // images have loaded

    });

    //Image Light Box Popup
    $('.image-link').magnificPopup({type:'image'});

    //Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    

});

