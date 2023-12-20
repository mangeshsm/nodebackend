require('dotenv').config()
const http =require('http');
const express = require('express')
const {MongoClient} = require('mongodb');
const database='ziffytech';
const app = express()
const port = 4000

async function getData(){
  let result = await client.connect();
  let db=result.db(database);
  let collection=db.collection('ziffy');
 
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData();


http.createServer((req,resp)=>{
  resp.writeHead(200,{'Content-Type':'application/json'});
  resp.write(JSON.stringify({name:'mangesh mane kkkk',email:'mane@gmail.com'}));
  resp.end();
}).listen(5000);



app.get('/youtype', (req, res)=>{
res.send('Mangesh Mane')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})