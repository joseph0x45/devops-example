const express = require('express');
const app = express();
const { hello_handler } = require("./handlers")

const port = 8080

app.get("/hello", (req, res)=>{
  const response = hello_handler()
  return res.status(200).send(response)
})

app.get("/health", (req, res)=>{
  return res.status(200).send("OK")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
