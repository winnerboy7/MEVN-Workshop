const router = require('express').Router()

const employees = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const me = {
  id: '007',
  name: 'Chaimongkol',
  surname: 'Khamokom',
}

router.get('/', (req, res) => {
  res.json(me)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const employee = employees.find((emp) => emp === parseInt(id))
  // const employee = employees.filter((emp) => emp === parseInt(id))
  res.json({ employee: employee })
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.json({ employee: req.body })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  res.json({ employee: { id: id, name: req.body.name} })
})


router.delete('/:id', (req, res) => {
  const { id } = req.params
  const result = employees.filter(emp => emp !== parseInt(id))
  res.json(result)
})

module.exports = router
