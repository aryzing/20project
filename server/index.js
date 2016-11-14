var app = require('express')()

app.get('/mockups/:component', (req, res) => {
  // responds with html file at (__dirname/../client/${component}/mockup.html)
})

app.listen(3000, _ => {
  console.log('Listening on port 3000')
}
