/*global $, alert, console*/

$(function () {
   
    'use strict';
    
    // Trigger Nice Scroll Plugin 
    
    $('html').niceScroll({
        
        cursorcolor: '#F7600e',
        cursorwidth: 10,
        cursorborderradius:0,
        cursorborder:'1px solid #F7600e'
        
    });
    
    // Change Header Height 
    
    $('.header').height($(window).height());
    
    // Scroll To Features
    
    $('.header .arrow i').click(function () {
        
        $('html , body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 1000);
    });
    
    $('.hire').click(function () {

        $('html , body').animate({
            
            scrollTop: $('.our-team').offset().top
            
        }, 1500);
        
    });    
    //Show Hidden Items form Our-work
    
    $('.show-more').click(function () {
       
        $('.item-hidden').toggleClass('hidden');
        

        if ($(this).text() === "SHOW LESS") {
            $(this).text("SHOW MORE");
        }else { 
     $(this).text("SHOW LESS"); 
  };     
    
    });
    
    // Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients () {

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    
    
    checkClients();

    $('.testim i').click(function () {
       
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100,function () {
                
               $(this).removeClass('active').next('.client').addClass('active').fadeIn(); 
                
                    checkClients();

            });
            
        } else {
            
            $('.testim .active').fadeOut(100,function () {
                
               $(this).removeClass('active').prev('.client').addClass('active').fadeIn(); 
                
                    checkClients();          
        });
            
        }
        
        
    });
});