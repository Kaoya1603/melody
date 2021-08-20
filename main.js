$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down')
    var floorPath = $('.home-image path');
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var viewFlatsButton = $('.view-flats');
    var flatLink = $('.flat-link');
    var flats = $('.flats path');
    
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.floor').text(currentFloor);
    });

    modalCloseButton.on('click', toggleModal);

    floorPath.on('click', toggleModal);

    viewFlatsButton.on('click', toggleModal);

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.floor').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 3) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.floor').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    flatLink.on('mouseover', function () {
        flats.removeClass('current-flat');
        $(`[data-flat=${flatLink.attr('data-number')}]`).toggleClass('current-flat');
    });

    function toggleModal() {
        modal.toggleClass('is-open');
    }
});
            