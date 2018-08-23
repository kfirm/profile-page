
var animationDelay = 2;

function move() {

    if (window.onthemove) {
        return;
    } else {
        window.onthemove = true;
    }

    window.count = window.count || 0;
    var card0 = document.getElementById("card0");
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");

    var rotation = {
        '0': `move-20-30 ${animationDelay}s`,
        '1': `move-30-40 ${animationDelay}s`,
        '2': `move-40-20 ${animationDelay}s`
    };


    card0.style.animation = rotation[window.count % 3];
    card1.style.animation = rotation[(window.count + 1) % 3];
    card2.style.animation = rotation[(window.count + 2) % 3];

    setTimeout(function() {
        // 0 to 1
        card0.classList.remove("card--" + window.count % 3);
        card0.classList.add("card--" + (window.count + 1) % 3);

        // 1 to 2
        card1.classList.remove("card--" + (window.count + 1) % 3);
        card1.classList.add("card--" + (window.count + 2) % 3);

        // 2 to 0
        card2.classList.remove("card--" + (window.count + 2) % 3);
        card2.classList.add("card--" + (window.count + 3) % 3);

        card0.style.animation = "";
        card1.style.animation = "";
        card2.style.animation = "";

        window.count += 1;
        window.onthemove = false;

    }, animationDelay * 1000);
}