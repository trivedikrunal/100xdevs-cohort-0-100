class Animal{
    constructor(name,legCount,speake){
        this.name = name;
        this.legCount = legCount;
        this.speake = speake;
    }
    static typeName(){
        console.log("Hello my name " + this.name);
        
    }
    speak(){
        console.log(this.name + " " + "is speck " + this.speake);
        
    }
}
let dog = new Animal("Dog", 4, "Bhow Bhow")
dog.speak(); // only object acces
Animal.typeName(); // only class acess
