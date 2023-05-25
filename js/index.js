console.log("Hello, world!");



// button function

$(".myButton").hover(mouseOn, mouseNotOn);

function mouseOn() { console.log("button working!");
    $(this).addClass("buttonHoverOn");    
    $(this).removeClass("buttonHoveroff"); 
}

function mouseNotOn() {
    $(this).addClass("buttonHoveroff");
    $(this).removeClass("buttonHoverOn"); 

}

$(".myButton").on("mousedown",function() {
    $(this).addClass("mousedown");
    $(this).removeClass("mouseup");
    console.log("mousedown")
});

$(".myButton").on("mouseup",function() {
    $(this).addClass("mouseup");
    $(this).removeClass("mousedown");
    console.log("mouseup")
});



// Menu Navigation

// Links

// $(".menuItem").hover(mouseOn, mouseNotOn);


$(".menuItem").on("mousedown",function() {
    $(this).addClass("mousedownMenuItem");
 
    console.log("mousedown")
});

$(".menuItem").on("mouseup",function() {
   
    $(this).removeClass("mousedownMenuItem");
    console.log("mouseup")
});


// Portfolio link


$("#portfolio").on("mousedown", function() {
   
    $(this).addClass("portfolioMouseDown");
    console.log("mousedown");
  });

  $("#portfolio").on("mouseup", function() {
    $(this).removeClass("portfolioMouseDown");
    console.log("mouseup");
  });




$(document).ready(function() {
    $('.toggle-header').click(function() {
      var currentItem = $(this).parent();
  
      // Check if the clicked item is already active
      if (!currentItem.hasClass('active')) {
        // Remove active class from all other items
        $('.toggle-item').removeClass('active');
      }
  
      // Toggle the active class for the clicked item
      currentItem.toggleClass('active');
    });
  });


  $(document).ready(function() {
    $('#toggleButton').click(function() {
      $('.mySkills').toggleClass('expand');
      if ($('.mySkills').hasClass('expand')) {
        $('#toggleButtonLess').show();
        $(this).hide();
      } else {
        $('#toggleButtonLess').hide();
        $(this).show();
      }
    });
  
    $('#toggleButtonLess').click(function() {
      $('.mySkills').toggleClass('expand');
      $('#toggleButtonLess').hide();
      $('#toggleButton').show();
    });
    
    // Initially hide the "View Less" button
    $('#toggleButtonLess').hide();
  });
  

//   menu 

