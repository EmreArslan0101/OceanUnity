const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoryStatus: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
