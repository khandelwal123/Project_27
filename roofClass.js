class Roof{
    constructor(x,y){
        var options = {
            isStatic : true
        }

        this.body = Bodies. rectangle(x, y, 500, 20, options);
        this.width = 500
        this.height = 20
        World.add(world, this.body);
    }

    display(){
        push()
            fill("rgb(27, 247, 240)");
            rect(this.body.position.x, this.body.position.y, 500, 20);
        pop();
    }
}