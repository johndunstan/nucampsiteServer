const mongoose = require('mongoose')
const Schhema = mongoose.Schema

const partnerSchema = new Schhema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Partner = mongoose.model('Parter', partnerSchema)

module.exports = Partner
