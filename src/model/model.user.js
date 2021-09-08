const mongoose = require("../setup.mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: { type: String, select: false },
    // password: { type: String },
    role: { type: String, enum: ["Admin", "Area", "User"], default: "User" },
    name: String,
    surname: String,
  },
  { timestamps: true, versionKey: false }
)

UserSchema.pre("save", async function (next) {
  const salt = bcrypt.genSaltSync()
  this.password = bcrypt.hashSync(this.password, salt)

  next()
})

UserSchema.methods.verifyPassword = function (plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password)
}

module.exports = mongoose.model("user", UserSchema)
