class Log{
   //we dont want the user to enter the width for the log as it is constant hence not written in the constructor but included when we create the rectangular body
    constructor(x, y,  height,angle) {
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20, height,angle, options);
        this.width = 20;
        this.height = height;
 //angle in computer progamming are represented in radians (PI)
 //PI=180 degree,PI/2=90
 //set the angle using setangle which is inside the body object of Matter.js       
 Matter.Body.setAngle(this.body,angle);

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
}