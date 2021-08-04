const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
  

calculateResult = (value) => {
    return value ** 2
}

app.get('/calculate', (req, res) => {
  let result = calculateResult(req.query.value);
  res.send(result.toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})