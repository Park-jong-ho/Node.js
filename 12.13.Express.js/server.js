const express = require('express')
const cors = require('cors')

let todo = [{id:1, content: '밥먹기'}, {id:2, content: '잠자기'}]

const app = express()

app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.text())

app.options('/', (req, res) => {
  return res.send('요청 보내세요.')
})

app.get('/', (req, res) => {
  return res.json(todo)
})

app.post('/', (req, res) => {
  console.log(req.body);
  const newTodo = { id: Number(new Date()), content: req.body }
  todo.push(newTodo)
  return res.send("Todo가 추가됐습니다.")
})

app.put('/', (req, res) => {
  console.log(req.body);
  todo = todo.map(el => {
    if (el.id === req.body.id) {
      return req.body
    }else {
      return el
    }
  })
  return res.send("Todo가 수정되었습니다.")
})

app.delete('/', (req, res) => {
  const id = Number(req.body)
  todo = todo.filter(el => el.id !== id)
  return res.send("Todo가 삭제되었습니다.")
})

// const server = http.createServer((req, res) => {
//   console.log(req.method + '요청이 들어왔어요');

//   res.setHeader('Access-Control-Allow-Origin', "http://127.0.0.1:5500")
//   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE')

//   // preflight 요청 처리
//   if (req.method === 'OPTIONS') {
//     return res.end('요청 보내세요.')
//   }

//   // GET 요청 처리
//   if (req.method === "GET") {
//     // 참조자료형은 JSON 형태의 문자열로 보내야 합니다.
//     return res.end(JSON.stringify(todo))
//   }

//   // POST 요청 처리
//   if (req.method === 'POST') {
//     let data

//     // 'data'가 들어오는 이벤트가 발생하면
//     req.on('data', (chunk) => {
//       // 데이터를 받아옵니다
//       data = chunk.toString()
//     })

//     // 데이터를 다 받아오고나면
//     req.on('end', () => {
//       //데이터를 사용해서 Todo를 추가합니다
//       const newTodo = { id: Number(new Date()), content: data }
//       todo.push(newTodo)
//     })
//     return res.end('Todo가 추가됐습니다.')
//   }

//   // PUT 요청 처리
//   if (req.method === 'PUT') {
//     let data
//     req.on('data', (chunk) => {
//       data = chunk.toString()
//     })
//     req.on('end', () => {
//       const newTodo = JSON.parse(data)
//       todo = todo.map(el => {
//         if (el.id === newTodo.id) {
//           return newTodo
//         } else {
//           return el
//         }
//       })
//     })
//     return res.end('Todo가 수정됐습니다.')
//   }

//    // DELETE 요청 처리
//   if (req.method === 'DELETE') {
//     let data
//     req.on('data', (chunk) => {
//       data = chunk.toString()
//     })
//     req.on('end', () => {
//       const id = Number(data)
//       todo = todo.filter(el => el.id !== id )
//     })
//     return res.end('Todo가 삭제됐습니다.')
//   }

//   return res.end('end!')
// })

// 만들어준 서버 열기
app.listen(3000, () => {
  console.log('서버가 열렸어요!')
})