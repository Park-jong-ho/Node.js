const express = require('express')
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
  methods: [ "OPTION", "POST", "DELETE"]
}))

app.use(express.json())

app.listen(3000, () => console.log("서버 열림"))