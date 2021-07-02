class Mango {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0,
         // isStatic:false
      }
      this.Visibility = 255;
      this.width=width;
      this.height=height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("box.png");
      World.add(world, this.body);
    }
    display(){
      
        if(this.body.speed<3){
        //  this.body.display()
          var pos =this.body.position;
          push();
          translate(this.body.position.x, this.body.position.y);
          strokeWeight(4);
          stroke("green");
          fill("yellow");
          imageMode(CENTER);
          
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body)
          push();
          this.Visibility=this.Visibility-5;
          tint(255, this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, 40, 40);
          pop();
        }
     
    }


    score(){
      if(this.Visiblity<0 && this.Visiblity>-500){
        count++;
      }
    }


  }