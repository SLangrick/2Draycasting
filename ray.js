class Ray{
    constructor(pos,angle){
        this.pos = pos;
        this.angle = angle;
    }

    show() {
        stroke(0);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.angle.x * 100, this.angle.y * 100);
        pop();
        
    }

    cast(plain){
    const x1 = plain.x1;
    const y1 = plain.y1;
    const x2 = plain.x2;
    const y2 = plain.y2;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.angle.x;
    const y4 = this.pos.y + this.angle.y;

    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denominator == 0) {
      return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;
    if (t > 0 && t < 1 && u > 0) {
      const xPoint = createVector();
      xPoint.x = x1 + t * (x2 - x1);
      xPoint.y = y1 + t * (y2 - y1);
      return xPoint;
    } else {
      return;
    }
    }
}