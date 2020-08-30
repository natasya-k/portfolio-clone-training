
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/work', (req, res) => {
  res.render('work')
})

app.listen(port, () => {
  console.log(`Portfolio app listening at http://localhost:${port}`)
})
