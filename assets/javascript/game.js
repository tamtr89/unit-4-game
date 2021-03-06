
$(document).ready(function () {

    // Game counters
    var yourScore = 0;
    var winCount = 0;
    var loseCount = 0;
    var targetScore = 0;
    var blueCrystal = [];
    var greenCrystal = [];
    var redCrystal = [];
    var yellowCrystal = [];

    // Background Audio
    var soundElement = document.createElement("audio");
    soundElement.setAttribute("src", "assets/candy_crush_sound3.mp3")


    function randomNumber() {
        // The random number shown at the start of the game between 19 - 120.
        targetScore = Math.floor(Math.random() * 101) + 19;

        // Each crystal should have a random hidden value between 1 - 12.
        blueCrystal = Math.floor(Math.random() * 11) + 1;
        greenCrystal = Math.floor(Math.random() * 11) + 1;
        redCrystal = Math.floor(Math.random() * 11) + 1;
        yellowCrystal = Math.floor(Math.random() * 11) + 1;
    }


    // Game logic
    function startGame() {
        randomNumber();
        yourScore = 0;
        // Declaration Variables
        $("#target-score").text(targetScore);
        $("#your-score").text(yourScore);
        $("#blue").attr("data-crystalvalue", blueCrystal);
        $("#green").attr("data-crystalvalue", greenCrystal);
        $("#red").attr("data-crystalvalue", redCrystal)
        $("#yellow").attr("data-crystalvalue", yellowCrystal);
        $("#win-score").text(winCount);
        $("#lose-score").text(loseCount);
        // Crystal Images
        $("#blue").attr("src", "assets/images/bluecrystal.png");
        $("#green").attr("src", "assets/images/greencrystal.png");
        $("#red").attr("src", "assets/images/redcrystal.png");
        $("#yellow").attr("src", "assets/images/yellowcrystal.png");

        console.log(blueCrystal, greenCrystal, redCrystal, yellowCrystal);
    }

    // Set Win-Lose function
    function win() {
        $(".crystal-images").attr("src", "assets/images/win.png");
        winCount++;
        $("#win-score").text(winCount);
        alert("You WIN, Click reset button to play again!")
    }

    function lose() {
        $(".crystal-images").attr("src", "assets/images/lose.png");
        loseCount++;
        $("#lose-score").text(loseCount);
        alert("You LOSE! Click reset to try again!")
    }
    startGame();


    // Hover crystals 

    $(".crystal-images").hover(function () {
        $(this).css({ opacity: 0.5 });
    },
        function () {
            $(this).css({ opacity: 1 })
        });




    //move this into its own click function. 
    console.log("SOUNDS: ", soundElement);
    soundElement.play();

    // Theme Button
    $(".theme-button").on("click", function () {
        soundElement.play();
    });
    $(".pause-button").on("click", function () {
        soundElement.pause();
    });


    // Add the onclick function for crystal, adding value to crystal-images
    $(".crystal-images").on("click", function () {

        if (yourScore >= targetScore) {
            return;
        }

        var crystalValue = $(this).attr("data-crystalValue");
        crystalValue = parseInt(crystalValue);
        yourScore += crystalValue;
        $("#your-score").text(yourScore);

        if (yourScore === targetScore) {
            win();
        } else if (yourScore > targetScore) {
            lose();
        }
    });

    $(".btn").on("click", function () {
        startGame();
    });
});