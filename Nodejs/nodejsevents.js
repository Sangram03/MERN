// const { EventEmitter } = require("stream");
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}


const MyEmitter = new MyEmitter();


MyEmitter.on('WaterFull' , () => {
    console.log('Please turn off the motor!');
    setTimeout(() => {

        console.log('Please turn off the motor! Its a gentle reminder');
    }, 3000)
    
})

console.log("The script is running");
MyEmitter.emit('WaterFull');
console.log("The script is still running");
MyEmitter.emit('WaterFull');

