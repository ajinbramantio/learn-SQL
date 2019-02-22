require('dotenv').config()
const express = require('express')
const sqlite = require('sqlite')

const app = express()
const port = process.env.PORT || 8000
const dbPromise = sqlite.open(process.env.DB_PATH, { Promise })

app.get('/users', async (req, res) => {
  const db = await dbPromise
  const users = await db.all('SELECT * FROM users')
  res.send({
    message: 'Get all users',
    users: users
  })
})

app.get('/users/:id', async (req, res) => {
  const db = await dbPromise
  const user = await db.get(`SELECT * FROM users WHERE id = ${req.params.id}`)

  if (user) {
    res.send({
      message: 'Get one user',
      user: user
    })
  } else {
    res.send({
      message: 'Failed to get one user'
    })
  }
})

app.delete('/users/:id', async (req, res) => {
  const db = await dbPromise
  const user = await db.get(`DELETE FROM users WHERE id = ${req.params.id}`)

  res.send({
    user: user
  })
})

// app.post('/users', async (req, res) => {
//   const db = await dbPromise
//   console.log(res.body.id, res.body.name, res.body.email)

//     const user = await db.get(`INSERT INTO nama_tabel('id', 'name', 'email' )
//   VALUES('3', 'dony', 'dony@gmail.com');`)

//     res.send({
//       user: user
//     })
// })

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
