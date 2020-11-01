class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.light = new emitter(this.x,this.y);
        this.dir = 0
    }
    show(plains){
        this.light.show(plains);
        circle(this.x,this.y,10);
    }
    move(plains){
        if(this.dir == 0){
            this.x = this.x + 6;
            this.light.update(this.x, this.y, plains);
        }
        
    }
}