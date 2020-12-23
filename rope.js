class rope {
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness:1.4,
        }
           
    
     this.Rope=Constraint.create(options);
     World.add(world,this.Rope);
    }
    display(){

    var pointA=this.Rope.bodyA.position;
    var pointB=this.Rope.bodyB.position;
   // line(pointA.x,pointA.y, pointB.x,pointB.y);
    Rope=new rope(bob1.body,roof1.body,-bobDiameter*2,0)
    
}
}