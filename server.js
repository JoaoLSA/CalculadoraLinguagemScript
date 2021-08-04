const express = require('express')
const app = express()
const port = 3000

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