// Soal 1
// Release 0
class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }

    get cName(){
        return this.name;
    }

    set cName(vName){
        this.name = vName;
    }

    get cLegs(){
        return this.legs;
    }

    get cColdBlooded(){
        return this.cold_blooded;
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1

class Frog extends Animal {
    constructor(name){
        super(name);
    }

    jump(){
        return console.log('hop hop');
    }
}

class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }
    yell() {
        console.log("Auooo");
    }
}


// Code class Ape dan class Frog di sini
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 


// Soal 2

class Clock{

    constructor(template){
        this._template = template;
        this.timer;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this._template
                     .replace('h', hours)
                     .replace('m', mins)
                     .replace('s', secs);

        console.log(output);
    }

    stop(){
        clearInterval(this.timer);
    }

    start(){
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }

}
  
  var clock = new Clock('h:m:s');
  clock.start(); 