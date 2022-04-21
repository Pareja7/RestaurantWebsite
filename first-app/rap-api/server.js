const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (request, response) => {
  response.sendFile(_dirname + '/index.html')
})

app.listen(PORT, ()=> {
  console.log(`Server running on ${PORT}`)
})
