class Bob{
    constructor(x, y, density){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density: 0.3
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50
        World.add(world, this.body);
    }

    display(){
        push()
            fill("rgb(255, 59, 101)")
            circle(this.body.position.x, this.body.position.y, 100)
        pop()
    }
}