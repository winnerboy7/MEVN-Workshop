const router = require('express').Router()
const Customer = require('../model/model.customer')

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find()
    res.json(customers)
  } catch (err) {
    res.json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params
    const customer = await Customer.findOne({ id: id })
    res.json(customer)
  } catch (err) {
    res.json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const newCustomer = req.body
    const cust = {
      ...newCustomer,
      updatedDate: new Date()
    }
    const customer = await Customer.create(cust)
    res.json(customer)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    let { id } = req.params
    const data = req.body
    const cust = {
      ...data,
      updatedDate: new Date()
    }
    const customer = await Customer.updateOne({ id: parseInt(id) }, {$set : cust})
    res.json(customer)
  } catch (err) {
    res.json({ message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const customer = await Customer.deleteOne({ id: parseInt(id) })
    res.json(customer)
  } catch (err) {
    res.json({ message: err.message })
  }
})

module.exports = router
