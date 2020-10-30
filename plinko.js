class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      this.color = "white";
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
