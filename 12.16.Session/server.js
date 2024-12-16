const express = require('express')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const users = [
  {
    user_id: 'test',
    user_password: '1234',
    user_name: '테스트 유저',
    user_info: '테스터 유저입니다'
  }
]

const app = express()
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
  methods: ['OPTIONS', 'POST', 'GET', 'DELETE'],
  credential: true
}))

app.use(cookieParser())
app.use(express.json())

app.use(session({
  secret: 'session secret',
  resave: false,
  saveUninitialized: false
}))

app.post('/', (req, res) => {
  console.log(req.body);
})

app.listen(3000, () => console.log('서버 실행'))