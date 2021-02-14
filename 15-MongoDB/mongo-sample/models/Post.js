const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, unique: true },
  isActive: { type: Boolean, default: false },
  comments: [{ message: String }],
  meta: {
    votes: { type: Number, required: true },
    favs: Number
  },

});

module.exports = mongoose.model('post', PostSchema);

//Collection burada tanımlanır, 

// export ederken yazdığımız 'post' ibaresi collection(table) ismidir. Bu herzaman küçük harf ve tekil yazılır. mongoose onu çoğul yapar. Büyük yazsak bile küçük hale getirir

