$(document).ready(function () {


    $('#projects-nav').on("click", function (event) {
        
        event.preventDefault();
       console.log("test");
    
        $('html,body').animate({
                scrollTop: $(".container").offset().top},
                'slow');

        });

        $('#contact-nav').on("click", function (event) {
        
            event.preventDefault();
           console.log("test");
        
            $('html,body').animate({
                    scrollTop: $("#contact-container").offset().top},
                    'slow');
    
            });

            window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
             });
         


    

    

        

