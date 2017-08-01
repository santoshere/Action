$(document).ready(function () {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
        
    });
    
    // Nice scroll library
    $("html").niceScroll({
        
        cursorcolor: "dodgerblue",
        cursorwidth: "10px",
        scrollspeed: 100,
    });
    
    
    
      
    
    $(window).scroll(function () {
    
        if ($(this).scrollTop() >= 700) {
            
            $(".scroll-up").fadeIn(700);
            
        } else {
            
            $(".scroll-up").fadeOut(700);
        }
    });
    
    $(".scroll-up").click(function () {

        $("body").animate({scrollTop: 0}, 800);
    });
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 50) {
            
            $("nav").addClass("navbar-fixed");
        } else{
            
             $("nav").removeClass("navbar-fixed");
        }
});
    
});  
    
   // screen loading


$(window).on("load", function () {
    
    "use strict";
    
    $("body").css("overflow", "auto");
    
    $(".screen-loading").fadeOut(1500);
    
    
    $(".btn-two").click(function () {
        
        

        $("body").animate({scrollTop: 2100}, 600);
    });
});


    
   