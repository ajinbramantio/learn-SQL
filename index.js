require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_DATABASE || 'yourdatabasename'
  }
})

app.get('/users', async (req, res) => {
  res.send({
    message: 'List of all users',
    users: await knex.select().from('users')
  })
})

app.get('/users/:id', async (req, res) => {
  res.send({
    message: 'list users by id',
    users: await knex
      .select()
      .from('users')
      .where('id', Number(req.params.id))
  })
})

app.post('/users', async (req, res) => {
  res.send({
    message: 'add user',
    users: await knex('users')
      .insert([
        { id: Number(req.body.id), name: req.body.name, email: req.body.email }
      ])
      .from('users')
  })
})

app.delete('/users/:id', async (req, res) => {
  res.send({
    message: 'list users by id',
    users: await knex
      .select()
      .from('users')
      .where('id', Number(req.params.id))
      .del()
  })
})

app.put('/users/:id', async (req, res) => {
  console.log(req.params.id)
  res.send({
    message: 'list users by id',
    users: await knex
      .select()
      .from('users')
      .where('id', Number(req.params.id))
      .update({ name: req.body.name, email: req.body.email })
  })
})

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
