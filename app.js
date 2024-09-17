const EventEmitter=require('events');

const customEmitter= new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`data ${name} ${id} received`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})


customEmitter.emit('response','john',24)