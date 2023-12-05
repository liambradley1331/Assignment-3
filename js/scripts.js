var red = $("#Red")
var wall = $("#Wall")
var star = $("#Star")
var maze = $("#Maze")
var restart = $("#Restart")
var gameOver = $("#gameOver")
var def = $("#default")
var nervous = $("#nervous")
var enraged = $("#enraged")
var ludicrousrage = $("#ludicrousrage")
var orb0 = $("#orb0")
var orb1 = $("#orb1")
var orb2 = $("#orb2")
var orb3 = $("#orb3")
var shield = $("#Shield")
var nicetry = $("#nicetry")
var swag = $("#swag")
var dub = $("#dub")

var intro = $("#intro")
var lost = $("#lost")
var collosalLoss = $("#collosalLoss")
var winning = $("#winning")
var won = $("#won")
var sweating = $("#sweating")

var quotes = ["This game is scarier than slenderguy", "so far this is actually better than elden ring", "Remind me in the comments to redye my moustache after this video comes out", "AAAAAAAAAAAAAAAAAAAAAA (loud volume)", "i should've made another pokemon smash or pass instead of playing this", "[CLOSED CAPTIONING NOT PROVIDED IN YOUR COUNTRY]"]

dub.hide();

swag.hide();
restart.hide();
gameOver.hide();
nervous.hide();
enraged.hide();
nicetry.hide();
ludicrousrage.hide();
lost.hide();
collosalLoss.hide();
winning.hide();
won.hide();
sweating.hide();

wall.on("mouseover", function () {
    console.log("hovering");
    maze.hide();
    gameOver.show();
    restart.show();
    def.hide();
    nervous.hide();
    enraged.show();
    orb0.show();
    orb1.show();
    orb2.show();
    orb3.show();
    swag.hide();
    intro.hide();
    sweating.hide();
    lost.show();
})


red.on("mouseover", function () {
    console.log("working");
    intro.hide();
    
    if (def.is(":visible")) {
    nervous.show();
    def.hide();
    } else if (nervous.is(":visible")) {
        nervous.hide();
        def.show();
    }
})

red.on("mouseover", function newQuote() {
    var randomnum = Math.floor(Math.random() * quotes.length)
    document.getElementById('sweating').innerHTML = quotes[randomnum]
    console.log("random quote");
    sweating.show();
})




shield.on("mouseover", function () {
    console.log("working");

    maze.hide();
    nicetry.show();
    restart.show();
    def.hide();
    nervous.hide();
    ludicrousrage.show();
    intro.hide();
    sweating.hide();
    collosalLoss.show();
    orb0.show();
    orb1.show();
    orb2.show();
    orb3.show();
})

star.on("mouseover", function () {
    console.log("pointing");
    star.css("cursor", "pointer");
})

star.on("click", function () {
    console.log("clicked");
    maze.hide();
    gameOver.hide();
    restart.hide();
    def.hide();
    enraged.hide();
    sweating.hide();
    swag.hide();
    nervous.hide();
    dub.show();
    
    restart.show();
    winning.hide();
    won.show();

})

restart.on("mouseover", function () {
    console.log("pointing");
    restart.css("cursor", "pointer");
})

restart.on("click", function () {
    console.log("clicked");
    maze.show();
    gameOver.hide();
    restart.hide();
    def.show();
    enraged.hide();
    nicetry.hide();
    ludicrousrage.hide();
    lost.hide();
    nervous.hide();
    sweating.hide();
    collosalLoss.hide();
    won.hide();
    intro.show();
    dub.hide();
   

})

orb0.on("mouseover", function () {
    console.log("pointing");
    orb0.css("cursor", "pointer");
})

orb1.on("mouseover", function () {
    console.log("pointing");
    orb1.css("cursor", "pointer");
})

orb2.on("mouseover", function () {
    console.log("pointing");
    orb2.css("cursor", "pointer");
})

orb3.on("mouseover", function () {
    console.log("pointing");
    orb3.css("cursor", "pointer");
})

forb0 = false;
forb1 = false;
forb2 = false;
forb3 = false;

orb0.on("click", function () {
    orb0.hide();
    forb0 = true;
    if (forb0 == true && forb1 == true && forb2 == true && forb3 == true) {
        def.hide();
        swag.show();
        shield.hide();
        intro.hide();
        sweating.hide();
        nervous.hide();
        winning.show();
    }
})

orb1.on("click", function () {
    orb1.hide();
    forb1 = true;
    if (forb0 == true && forb1 == true && forb2 == true && forb3 == true) {
        def.hide();
        swag.show();
        shield.hide();
        intro.hide();
        sweating.hide();
        nervous.hide();
        winning.show();
    }
})

orb2.on("click", function () {
    orb2.hide();
    forb2 = true;
    if (forb0 == true && forb1 == true && forb2 == true && forb3 == true) {
        def.hide();
        swag.show();
        shield.hide();
        intro.hide();
        sweating.hide();
        nervous.hide();
        winning.show();
    }
})

orb3.on("click", function () {
    orb3.hide();
    forb3 = true;
    if (forb0 == true && forb1 == true && forb2 == true && forb3 == true) {
        def.hide();
        swag.show();
        shield.hide();
        intro.hide();
        sweating.hide();
        nervous.hide();
        winning.show();
    }
})


