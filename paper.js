class Paper{
    constructor(){
        var options = {
            isStatic: false,
            restituition: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(200, 200, 100, options);
            World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(this.body.position.x, this.body.position.y, this.body.radius, this.body.radius);
    }
}