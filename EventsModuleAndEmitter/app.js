const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2)=>{
    console.log('sum: ' + num1 + num2);
});

eventEmitter.emit('tutorial',1,2);

class AltEvent extends EventEmitter{
    constructor(name){
        super()
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let alt = new AltEvent('Name');

alt.on('name', ()=>{
    console.log(alt.name());
});

alt.emit('name');
