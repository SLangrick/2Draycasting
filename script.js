let plains = [];
let player;

function setup() {
    //frameRate(1)
    createCanvas(displayWidth, displayHeight);
    
    for(i = 0; i < 10; i++){
        plains.push(new plain(random(displayWidth),random(displayHeight),random(displayWidth),random(displayHeight)));
    }
    player = new Player(400,400);
    plains.push(new plain(0,0, 0,displayHeight))
    plains.push(new plain(0,0,displayWidth,0))
    plains.push(new plain(displayWidth,0,displayWidth,displayHeight))
    plains.push(new plain(0,displayHeight,displayWidth,displayHeight))

    // plains.push(new plain(550,500,550,400))
    // plains.push(new plain(540,500,660,400))
    // plains.push(new plain(600,500,1000,400))
    // plains.push(new plain(900,500,1000,400))
}

function draw() {
    background(200);
    player.move(mouseX, mouseY,plains);
    player.show(plains);

    plains.forEach(plain => {
        plain.show();
    });
}

