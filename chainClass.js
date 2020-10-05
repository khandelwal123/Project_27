class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 500
        }

        this.pointB = pointB
        
        this.chain = Constraint.create(options);
        World.add(world, this.chain);        

    }

    display(){
        stroke("white");
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x, this.pointB.y)
    }
}