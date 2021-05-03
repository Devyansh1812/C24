class Bird{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
       //to make the bird move with the help of mouse
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       
        rectMode(CENTER);
       // get a boundary which is 4 pixels thick and blue in colour
        strokeWeight(4);
        stroke("blue");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
}