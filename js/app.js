$(document).ready(function(){
    console.log("It works");
    var tweetText = "Does the Shadow Caste exist? Dark Age finally answered and you will never believe what they found.";
    tweetText = 'https://twitter.com/intent/tweet?hashtags=DarkAge,theydontreallyexist,gencon2016&text=' + encodeURIComponent(tweetText);
    $('.twitter-share-button').attr('href', tweetText);
    console.log(tweetText);


    $('.ion-social-twitter').click(function(){
    });

    $('.ion-social-facebook').click(function(){
    });

    $('.ion-social-instagram').click(function(){
        alert("Instagram");
    });

    // Add smooth scrolling to all links
    $(".nav").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });


});
