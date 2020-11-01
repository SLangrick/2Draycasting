let plains = [];
let player;

function setup() {
    createCanvas(displayWidth, displayHeight);
    
    for(i = 0; i < 10; i++){
        plains.push(new plain(random(displayWidth),random(displayHeight),random(displayWidth),random(displayHeight)));
    }
    player = new Player(400,400);
    // plains.push(new plain(50,500,50,400))
    // plains.push(new plain(40,500,60,400))
    // plains.push(new plain(100,500,100,400))
    // plains.push(new plain(10,500,10,400))

    // plains.push(new plain(550,500,550,400))
    // plains.push(new plain(540,500,660,400))
    // plains.push(new plain(600,500,1000,400))
    // plains.push(new plain(900,500,1000,400))
}

function draw() {
    background(200);
    player.move(plains);
    player.show(plains);

    plains.forEach(plain => {
        plain.show();
    });
}

