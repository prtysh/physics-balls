function Particle(x, y, r){
  var options = {
    friction : 0.5,
    restitution : 1
  }
  this.body = Bodies.circle(x, y, r/2, options);
  this.r = r;
  World.add(engine.world, this.body);

  this.isOffScreen = function () {
    var pos = this.body.position;
    return (pos.y > height + 10);
  }

  this.removeFromWorld = function () {
      World.remove(engine.world, this.body);
  }

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(map(pos.y, 0, height, 255, 0),map(pos.y, 0, height, 255, 0));
    ellipse(0,0,this.r);
    fill(map(pos.y, 0, height, 0, 255),map(pos.y, 0, height, 0, 255));
    ellipse(0,0,this.r/3);
    pop();
  }
}
