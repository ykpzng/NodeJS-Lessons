const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema(
  {
    name: {
      type: String, required: true, maxLength: [20, 'En fazla 20 karakter girebilirsiniz {PATH}'],
      minLength: 5
    },
    category: { type: String, required: true },
    score: { type: Number, default: 0, min: 0, max: 100 },
    views: { type: Number, default: 0 },
    isDelete: { type: Boolean, default: false }
  }
)

module.exports = mongoose.model('author', AuthorSchema)