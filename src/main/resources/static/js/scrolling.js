// Code for changing active link on clicking
let buttons = $("#nav-main .my-navbar-nav .my-nav-link");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";
    });
}

// Code for changing active link on Scrolling
$(window).scroll(function () {
    let distance = $(window).scrollTop();
    $('.page-section').each(function (i) {

        if ($(this).position().top
            <= distance + 250) {

            $('.my-navbar-nav a.active')
                .removeClass('active');

            $('.my-navbar-nav a').eq(i)
                .addClass('active');
        }
    });
}).scroll();

// For smooth scrolling on clicking
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});