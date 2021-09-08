const express = require('express')
const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const logger = require('./middleware/middleware.logger')

app.get('/', (req, res) => {
  res.write('<h1>Home page</h1>')
  res.end()
})

app.use('/employees', require('./router/router.employee'))
app.use('/customers', require('./router/router.customer'))
app.use('/users', logger, require('./router/router.user'))
app.use('/files', require('./router/router.file'))

app.use((req, res) => {
  res.status(404).end()
  // res.status(404).json({ error: 'Error! not found page' })
})
app.listen(3000)
