import express from 'express';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
}) 

app.get('/', (req, res) => {
 res.send('Hello, World!');
});

app.get('/about', (req, res) => {
 res.send('About Page');
});

app.get('/contant', (req, res) => {
 res.send('Contact Page');
});
``````
app.get("/users", (req, res) => {
 res.json({
  users: [
   {username: 'test1'},
   {username: 'test2'}
  ]
 });
});

app.post("/data", (req, res) => {
 console.log(req.body);
 res.send("Data Recieved");
});


app.listen(4000, () => {
  console.log('Server running on port 4000');
 });