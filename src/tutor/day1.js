// const fetch = require("node-fetch")
// const axios = require("axios")

// function random() {
//   setTimeout(() => {
//     return Math.random()
//   },1000)

//   return Math.random()
// }

// console.log(random())

// function random(cb1) {
//   setTimeout(() => {
//     cb1(Math.random(), Math.random())
//   }, 3000)
// }

// random((result1 ,result2) => {
//   console.log(result1, result2)
// })

// function random(cb) {
//   setTimeout(() => {
//     cb([Math.random(), Math.random()])
//   }, 3000)
// }
// random((result) => {
//   console.log(result)
// })

// function random(value, cb) {
//   setTimeout(() => {
//     cb(Math.random() * value)
//   }, 3000)
// }
// random(10, (result) => {
//   console.log(result)
// })

// function random(val) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = Math.random()
//       if (result < 0.5) {
//         resolve(result * val)
//       } else {
//         reject('Error! ' + result)
//       }
//     }, 3000)
//   })
// }
// random(10)
//   .then((result) => {
//     return random(20)
//   })
//   .then((result => {
//     console.log(result)
//   }))
//   .catch((err) => {
//     console.log(err)
//   })

// function random() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = Math.random()
//       if (result < 0.5) {
//         resolve(result)
//       } else {
//         reject("Error! " + result)
//       }
//     }, 3000)
//   })
// }
// async function caller() {
//   try {
//     const result = await random()
//     console.log(result)
//   }
//   catch(err) {
//     console.log(err)
//   }
// }
// caller((res) => {
//   console.log(res)
// })

// function forOff() {
//   const data = [1, true, false, "Hello"] // ใช้กับข้อมูลชนิด Array ได้
//   // const data = {a: 1, b: 2, c: 3, d: 4} // ใช้กับข้อมูลชนิด Object ไม่ได้
//   // const data = "hello world!" // ใช้กับข้อมูลชนิด String ได้
//   const newArray = []

//   for (const a of data) {
//     newArray.push(a)
//   }
//   return newArray.toString()
// }
// function forOff2() {
//   const data = { a: 1, b: 2, c: 3, d: 4 }
//   const newArray = []
//   for (const [key, value] of Object.entries(data)) {
//     newArray.push({ [key]: value })
//   }
//   return JSON.stringify(newArray)
// }

// function forIn() {
//   {
//     // const data = [1, true, false, "Hello"] // ใช้กับข้อมูลชนิด Array ได้
//     const data = { a: 1, b: 2, c: 3, d: 4 } // ใช้กับข้อมูลชนิด Object ได้
//     // const data = "hello world!" // ใช้กับข้อมูลชนิด String ได้
//     const newArray = []
//     for (const a in data) {
//       newArray.push(a)
//       // newArray.push(data[a]) // ลองรันบรรทัดนี้ หากต้องการใช้ key เข้าถึง value
//     }
//     return newArray.toString()
//   }
// }

// console.log("for off: ", forOff())
// console.log("for off: ", forOff2())
// console.log("for in: ", forIn())

// async function main() {
//   const fetchData = async () => {
//     let url =
//       "https://api.github.com/repos/kongvut/laravel-best-practices/commits"
//     let response = await fetch(url)
//     let commits = await response.json()
//     return commits[0].author.login
//   }

//   const fetchData2 = () => {
//     return fetch("https://api.github.com/repos/microsoft/vscode")
//       .then((response) => response.json())
//       .then((data) => data.owner.login)
//   }

//   // Array of Promises
//   const somethingAsync = [
//     fetchData(),
//     Promise.resolve("b"),
//     Promise.resolve("c"),
//     fetchData2(),
//   ]

//   // Loop for await ... of
//   for await (const x of somethingAsync) {
//     console.log(x)
//   }

//   const [...x] = await Promise.all(somethingAsync)
//   console.log(x)
// }

// main()

// const customers = ['A','B','C','D','E']
// const result = customers.filter(each => each==='C')

// const result = customers.filter((each) => {
//   return each==='A' || each==='B'
// })
// console.log(result)

// const customers = ['Chaimongkol Khamkom','Apinan Kinnaree','Sanit Khakaew','Suriyan Chairob','Aum Nun']
// const result = customers.map((each) => {
//   return `${each.toLocaleLowerCase()}@wpksakon.ac.th`
// })
// console.log(result)

// const customers = ['A','B','C','D','E']
// const result = customers.map((each) => {
//   // return each === 'B' ? `${each}@wpksakon.ac.th` : `${each.toLocaleLowerCase()}@wpksakon.ac.th`
//   return `${each === 'B' ? each : each.toLocaleLowerCase() }@wpksakon.ac.th`
// })
// console.log(result)

const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce((acc, each) => acc + each, 0)
const result = numbers.reduce((acc, each) => {
  return each % 2 ? acc : acc + each
})
console.log(result)
