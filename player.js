class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.light = new emitter(this.x,this.y);
    }
    show(plains){
        this.light.show(plains);
        circle(this.x,this.y,10);
    }
    move(x, y,plains){
        this.x = x;
        this.y = y;
        this.light.update(this.x, this.y, plains);
        
        
    }
}