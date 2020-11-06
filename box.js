class Box{
    constructor(x,y){
      var op={
        isStatic:false,
        restitution:0.8,
        friction:1.0,
        density:1.0

      }

      this.body=Bodies.rectangle(x,y,50,50,op);
      this.width=30;
      this.height=40;

      World.add(world,this.body);
    }

    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("purple");
      rect(pos.x, pos.y, this.width, this.height);
    }
  
  };