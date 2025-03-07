$(document).ready(function(){

    // Function to check screen width and display alert
    function checkScreenWidth() {
        if (window.innerWidth <= 576) {
            alert("Turn your phone to play the game!");
        }
    }

    // Run the function when the page loads
    window.addEventListener("load", checkScreenWidth);

    // Run the function when the screen is resized (optional)
    window.addEventListener("resize", checkScreenWidth);

    //click play button to start the game , play button disapper 
    $( "#playButton" ).on( "click", function() {
        $( "#playButton" ).remove(); //This is used to start the game and hide the play button after the game begins.
    })




    var count = 0;  // Counter to track number of clicks
    var firstCard = null;  // Variable to store the first clicked card
    var secondCard = null; // Variable to store the second clicked card
    var countBlur = 0;//Tracks the number of matched pairs (used to determine when the game is won).



$('.card').on('click', function () {  //Attaches a click event listener to all elements with the class .card (the cards in the game).
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
        
        // Redirect to a new game when the "You Win" button is clicked
        $("#win").on("click", function () {
            window.location.reload(); // Reload the page to start a new game
            // OR redirect to a new game page:
            // window.location.href = 'play.html';
        });


    }


});

      
      

      






































});



// Prevent Double-Clicking the Same Card:

// Add a check to ensure the same card isn't clicked twice in a row.

// Disable Clicks During Flip Animation:

// Disable card clicks during the 1-second flip-back animation to prevent interference.

// Shuffle Cards:

// Add a shuffle function to randomize card positions at the start of the game.