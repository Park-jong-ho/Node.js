const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors({
  origin: ['http://127.0.0.1 :5500/Node.js/12.16.Cookie/index.html', 'http://localhost:5500/Node.js/12.16.Cookie/index.html'],
  methods: ['GET', 'DELETE', 'OPTIONS'],
  Credential: true
}))


app.use(cookieParser())

app.get('/', (req, res) => {
  res.cookie('test-cookie', 'my cookie')
  res.send('쿠키 생성 완료')
})

app.listen(3000, () => console.log('서버 실행'))