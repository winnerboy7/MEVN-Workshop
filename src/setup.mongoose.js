const mongoose = require('mongoose')

// const url = 'mongodb://superAdmin:adm1n@localhost:27017/obec?authSource=admin&retryWrites=true&w=majority'
const url = 'mongodb://obec:Adm1n%400becTra1ner@localhost:27017/obec?authSource=admin&retryWrites=true&w=majority'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(url, options)
mongoose.set('debug', true)

module.exports = mongoose