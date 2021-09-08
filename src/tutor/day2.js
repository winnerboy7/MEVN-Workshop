const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.write('<h1>Home Page</h1>')
            res.end()
            break

        case '/html':
            const filename = path.resolve('public', 'index.html')
            const data = fs.readFileSync(filename, 'utf8')
            res.end(data)
            break
        case '/me':
          res.write('<h1>Hi ToM</h1>')
          res.end()
          break
    
        default:
            res.write('<h1>404 Page not Found</h1>')
            res.end()
            break
    }
})

server.listen(3000)

// const { sum, substract } = require("./math")
// const { random } = require("./random")

// console.log(substract(10, 20))
// console.log(sum(10, 20))
// console.log(random())

// const { EventEmitter } = require('events')
// const e = new EventEmitter()

// e.on('HELLO', () => {
//   console.log('hello')
// })

// e.on('WORLD', () => {
//   console.log('world')
// })

// setTimeout(() => {
//   e.emit('HELLO')
// }, 2000)

// setTimeout(() => {
//   e.emit('WORLD')
// }, 4000)

// const numbers = [1, 2, 3, 4, 5]
// // const result = numbers.reduce((acc, each) => acc + each, 0)
// const result = numbers.reduce((acc, each) => {
//   return each % 2 ? acc : acc + each
// })
// console.log(result)
