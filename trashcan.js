/*class Paper{
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
}*/

class TrashSides {
    constructor(x, y){
        /*var options = {
            isStatic: false

        }*/
        this.body1 = Bodies.rectangle(x, y, 10, 100, {isStatic: false});
        this.body2 = Bodies.rectangle(x + 50, y + 45, 110, 10, {isStatic: false});
        this.body3 = Bodies.rectangle(x + 100, y, 10, 100, {isStatic: false});
    }
    display(){
        var pos1 = this.body1.position;
        var pos2 = this.body2.position;
        var pos3 = this.body3.position; 
        rectMode(CENTER);
        fill(255);
        rect(pos1.x, pos1.y, 10, 100);
        rect(pos2.x, pos2.y, 100, 10);
        rect(pos3.x, pos3.y, 10, 100);

    }

}