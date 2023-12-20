require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify({name:'mangesh mane',email:'mane@gmail.com'}));
    resp.end();
  }).listen(6000);
})

// app.get('/', (req, res) => {
//   res.send('Hello World sss!')
// })

app.get('/youtype', (req, res)=>{
res.send('Mangesh Mane')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})