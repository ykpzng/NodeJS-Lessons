const events = require('events');  //NodeJS de Olaylar(events) yönetmek için kullanılır.

const eventEmitter = new events.EventEmitter(); //Tetiklenen olayın başlangıç ve bitişini yönetmek için

//Bir olay tanımlama.(on) Birinci parametre olayın adı, ikinci parametre calback function(bu olay tetiklenince çalışır)
eventEmitter.on('viewMessage', () => {
  console.log("Hello world!!");
});

//event tetikleme ('emit' tetikleyen fonksiyon)
eventEmitter.emit('viewMessage');

//----------Parametreli Event

eventEmitter.on('viewMessage2', (text) => {
  console.log("Hello world!! ", text);
});

const name = "Tommy.."
// event 2 saniyede tekrarlansın
setInterval(() => {
  eventEmitter.emit('viewMessage2', name);
}, 2000);


//Olay bir kere tetiklensin. Bir daha tetiklenmesin istersek. (once)

eventEmitter.once('sayOneHi', () => {
  console.log("Say Hi....")
})

eventEmitter.emit('sayOneHi'); //sadece bu tetiklenir

eventEmitter.emit('sayOneHi');

