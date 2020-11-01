class emitter{
    constructor(x, y){
        this.pos = createVector(x,y);
        this.rays = [];
        this.casts = [];
        for(let i=0; i < 360; i += 10){
            this.rays.push(new Ray(this.pos, p5.Vector.fromAngle(radians(i))))
        }
    }
    update(x,y){
        this.pos.set(x,y);
        this.casts = [];
    }
    show(plains){
        this.casting(plains);
        this.casts.forEach(cast =>{
            line(this.pos.x,this.pos.y,cast.x,cast.y)
        });
    }
    casting(plains){
        //console.log(plains)
        for (let i = 0; i < this.rays.length; i++) {
            
            const ray = this.rays[i];
            let closest = null;
            let record = Infinity;
            for (let plain of plains) {
              const pt = ray.cast(plain);
              if (pt) {
                let d = p5.Vector.dist(this.pos, pt);
                if (d < record) {
                  record = d;
                  closest = pt;
                }
              }
            }
            if (closest) {
              stroke(255, 100);
              line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }
}