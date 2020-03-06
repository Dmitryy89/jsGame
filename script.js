function Jerry(){
    this.coordX = 100;
    this.coordY = 500;
    this.width = 25;
    this.height = 25;
    this.name = 'Jerry';
    this.speedX = 15;
    this.speedY = 15;
    
    this.state = function(edit){
        if(edit === "top"){
            edit -= this.speedY; 
        } else if(edit === "bottom"){
            edit += this.speedY;
        }
        if(edit === "left"){
            edit -= this.speedX;
        } else if(edit === "right"){
            edit += this.speedX;
        }
    }
}
function Thomas(){
    Jerry.call(this);
    this.coordX /= 2;
    this.coordY /= 10;
    this.width *= 2;
    this.height *= 2;
    this.name = 'Thomas';
    this.speedY /= 2; 
}
var delay = setInterval(function () {
    var thomas = new Thomas();
    console.log(thomas.name);
    console.log(thomas.coordX);
    console.log(thomas.coordY);
    console.log(thomas.speedX);
    console.log(thomas.speedY);
    console.log(thomas.width);
    console.log(thomas.height);

}, 8000);

