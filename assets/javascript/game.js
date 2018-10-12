
$(document).ready(function () {

    // Game counters
    var yourScore = 0;
    var winCount = 0;
    var loseCount = 0;
    var targetScore = 0;
    var blueCrystal;
    var greenCrystal;
    var redCrystal;
    var yellowCrystal;

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

        console.log(blueCrystal, greenCrystal, redCrystal, yellowCrystal);
    }

    // Set Win-Lose function
    function win() {
        winCount++;
        $("#win-score").text(winCount);

    }

    function lose() {
        loseCount++;
        $("#lose-score").text(loseCount);
    }

    startGame();

    // Add the onclick event for crystal 
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