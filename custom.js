/* Scroll Left */
const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {

    if (window.innerWidth <= 600) {

    } else {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    }

});

/* Cool Animated Cursor */
$(document).ready(function () {
    // jquery.serialcursor initialisation
    $('#serialcursor').serialcursor();
});