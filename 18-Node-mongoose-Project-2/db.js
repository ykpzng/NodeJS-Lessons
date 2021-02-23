const mongoose = require('mongoose');

const connectionString= "mongodb+srv://tafatsum:dSdBBGtVtfoD6ihA@cluster0.23aft.mongodb.net/userDB?retryWrites=true&w=majority";


mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true }, 
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});
module.exports = mongoose;