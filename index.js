const animationDelay = 2;

function getSwitcher(index) {
    switch (index) {
        case 0:
            return [ ['left', 'main'], ['main', 'right'], ['right','left'] ];
        case 1:
            return [ ['main', 'right'], ['right', 'left'], ['left','main'] ];
        case 2:
            return [ ['right', 'left'], ['left', 'main'], ['main','right'] ];

    }
}

function move() {

    if (window.onthemove) {
        return;
    } else {
        window.onthemove = true;
    }

    window.count = window.count || 0;
    const leftCard = document.getElementById("left");
    const mainCard = document.getElementById("main");
    const rightCard = document.getElementById("right");

    const rotation = {
        '0': `left-to-main ${animationDelay}s`,
        '1': `main-to-right ${animationDelay}s`,
        '2': `right-to-left ${animationDelay}s`
    };


    leftCard.style.animation = rotation[window.count % 3];
    mainCard.style.animation = rotation[(window.count + 1) % 3];
    rightCard.style.animation = rotation[(window.count + 2) % 3];

    setTimeout(function() {

        const switcher = getSwitcher(window.count % 3);
        // left -> main
        leftCard.classList.remove('cards__card--' + switcher[0][0]);
        leftCard.classList.add("cards__card--"  + switcher[0][1]);

        // main -> right
        mainCard.classList.remove("cards__card--" + switcher[1][0]);
        mainCard.classList.add("cards__card--" + switcher[1][1]);

        // right -> left
        rightCard.classList.remove("cards__card--"  + switcher[2][0]);
        rightCard.classList.add("cards__card--" + switcher[2][1]);

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