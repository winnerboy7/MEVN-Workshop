const mongoose = require("../setup.mongoose")

const CustomerSchema = new mongoose.Schema(
  {
    id: Number,
    username: String,
    password: String,
    name: String,
    surname: String,
    dob: Date,
    age: Number,
    updatedDate: Date,
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model("customer", CustomerSchema)
