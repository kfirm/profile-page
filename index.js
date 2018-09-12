
var animationDelay = 2;

function move() {

    if (window.onthemove) {
        return;
    } else {
        window.onthemove = true;
    }

    window.count = window.count || 0;
    var leftCard = document.getElementById("left");
    var mainCard = document.getElementById("main");
    var rightCard = document.getElementById("right");

    var rotation = {
        '0': `move-20-30 ${animationDelay}s`,
        '1': `move-30-40 ${animationDelay}s`,
        '2': `move-40-20 ${animationDelay}s`
    };


    leftCard.style.animation = rotation[window.count % 3];
    mainCard.style.animation = rotation[(window.count + 1) % 3];
    rightCard.style.animation = rotation[(window.count + 2) % 3];

    setTimeout(function() {
        // // left -> main
        // card0.classList.remove("card--left");
        // card0.classList.add("card--main");

        // // main -> right
        // card1.classList.remove("card--main");
        // card1.classList.add("card--right");

        // // right -> left
        // card2.classList.remove("card--right");
        // card2.classList.add("card--left");

        // 0 to 1
        leftCard.classList.remove("card--" + window.count % 3);
        leftCard.classList.add("card--" + (window.count + 1) % 3);

        // 1 to 2
        mainCard.classList.remove("card--" + (window.count + 1) % 3);
        mainCard.classList.add("card--" + (window.count + 2) % 3);

        // 2 to 0
        rightCard.classList.remove("card--" + (window.count + 2) % 3);
        rightCard.classList.add("card--" + (window.count + 3) % 3);


        leftCard.style.animation = "";
        mainCard.style.animation = "";
        rightCard.style.animation = "";

        window.count += 1;
        window.onthemove = false;

    }, animationDelay * 1000);
}

function moveLeft() {
    window.count = window.count - 1;
    move();
}