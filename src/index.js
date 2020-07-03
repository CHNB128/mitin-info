const express = require('express')
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const path = require('path')

const app = express()
const port = 3000
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'info',
  password: 'postgres',
  port: 5432,
})

app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/info', (req, res) => {
  const { name, surname, patronomic, phone } = req.body
  const { name_parent, surname_parent, patronomic_parent, phone_parent } = req.body
  const query = {
    text: `
      INSERT INTO info(
        name, surname, patronomic, phone,
        name_parent, surname_parent, patronomic_parent, phone_parent)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
    values: [name, surname, patronomic, phone, name_parent, surname_parent, patronomic_parent, phone_parent],
  }
  pool.query(query)
    .then(() => res.redirect('/thanks.html'))
    .catch(e => console.error(e.stack))
})
app.get('/info', (req, res) => {
  const query = `select * from info`
  pool.query(query)
    .then(data => res.json(data.rows))
    .catch(e => console.error(e.stack))
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

