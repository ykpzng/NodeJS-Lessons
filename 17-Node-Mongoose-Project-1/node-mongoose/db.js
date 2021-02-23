const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/studentdb', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

mongoose.connection.on('open', () => { console.log("Veritabanı bağlantısı başarıyla sağlandı.") });
mongoose.connection.on('error', (err) => { console.log("Veritabanı bağlantısı sağlanırken beklenmeyen bir hatayla karşılaşıldı.", err) });





module.exports = mongoose;