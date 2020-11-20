class emitter{
    constructor(x, y){
        this.pos = createVector(x,y);
        this.rays = [];
        this.casts = [];
        for(let i=0; i < 360; i += 1){
            this.rays.push(new Ray(this.pos, p5.Vector.fromAngle(radians(i))))
        }
    }
    update(x,y){
        this.pos.set(x,y);
        this.casts = [];
    }
    show(plains){
        this.casting(plains);
        let last;
        this.casts.forEach(cast =>{
            fill(255,255,255,100)
            stroke(255,255,255,0)
            //line(this.pos.x,this.pos.y,cast.x,cast.y)
            if (last){
              console.log[cast[3]]
              triangle(this.pos.x, this.pos.y, cast[0], cast[1], last[0], last[1])
            } else {
              triangle(this.pos.x, this.pos.y, cast[0], cast[1], this.casts[this.casts.length -1][0], this.casts[this.casts.length -1][1])
            }
            last = cast;
        });
    }
    casting(plains){
      this.casts = [];
        //console.log(plains)
        for (let i = 0; i < this.rays.length; i++) {
            
            const ray = this.rays[i];
            let closest = null;
            let angle = null;
            let record = Infinity;
            for (let plain of plains) {
              const pt = ray.cast(plain);
              if (pt) {
                let d = p5.Vector.dist(this.pos, pt);
                if (d < record) {
                  record = d;
                  closest = pt;
                  angle = ray.angle;
                }
              }
            }
            if (closest) {
              stroke(255, 100);
              this.casts.push([closest.x, closest.y, [angle.x, angle.y]]);
            }
        }
    }
}