const router = require("express").Router()
const User = require("../model/model.user")
const secret = require("../secrets")
const jwt = require("jsonwebtoken")

router.get("/", async (req, res) => {
  try {
    const query = req.query["role"] ? { role: req.query["role"] } : {}
    const users = await User.find(query)
    res.json(users)
  } catch (err) {
    res.json({ message: err.message })
  }
})

router.post("/register", async (req, res) => {
  try {
    const user = req.body
    const result = await User.create(user)
    res.json(result)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post("/login", async (req, res) => {
  try {
    const u = req.body
    const user = await User.findOne({ username: u.username })

    // console.log(u)

    if (user && user.verifyPassword(u.password)) {
      const token = jwt.sign({ username: user.username, role: user.role }, secret)
      res.json({ token })
    } else {
      res.status(401).json({ message: "Invalid username or password" })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
