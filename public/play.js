$(document).ready(function(){


    //click play button to start the game , play button disapper 
    $( "#playButton" ).on( "click", function() {
        $( "#playButton" ).remove();
    })



    // $(".card").on("click",function(){
    //     $(this).find(".back-face").remove();
    //   });


    var count = 0;  // Counter to track number of clicks
    var firstCard = null;  // Variable to store the first clicked card
    var secondCard = null; // Variable to store the second clicked card
    var countBlur = 0;
    // $('.card').click(function () {
    //     count += 1;

    //     if (count == 2) {
    //         $(this).find(".front-face").()   

    //     }
    // });



$('.card').on('click', function () {
    count += 1;  // Increment click count
    
    // Find the front and back faces of the clicked card
    var frontFace = $(this).find('.front-face');
    var backFace = $(this).find('.back-face');
    
    // If it's the first card clicked, store it
    if (count === 1) {
        firstCard = $(this);
        frontFace.show();  //show front face 
        backFace.hide(); //hide back face
    }
    
    // If it's the second card clicked
    if (count === 2) {
        secondCard = $(this);
        frontFace.show(); 
        backFace.hide();

        // Compare the cards (using the alt attribute of the front faces)
        if (firstCard.find('.front-face').attr('src') === secondCard.find('.front-face').attr('src')) {
            countBlur += 1;
                // Check if all pairs are matched
            if (countBlur === 6) {
                $("#win").css('display', 'block'); // Show the "You Win" message
            }
            // If they match, leave the front faces visible and back faces hidden
            firstCard.find('.front-face').show();
            secondCard.find('.front-face').show();
            firstCard.find('.back-face').hide(); // Hide back face for matched cards
            secondCard.find('.back-face').hide(); // Hide back face for matched cards

            setTimeout(function () {
                firstCard.find('.front-face').addClass("blurIt");
                secondCard.find('.front-face').addClass("blurIt");
            }, 500);
        } else {
            // If they don't match, flip them back over after 1 second
            setTimeout(function () {
                firstCard.find('.front-face').hide();
                secondCard.find('.front-face').hide();
                firstCard.find('.back-face').show();
                secondCard.find('.back-face').show();
            }, 1000);  // Flip back after 1 second
        }
        
        count = 0;  // Reset the count after checking two cards


    }


});

      
      

      






































});