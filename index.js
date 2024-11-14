
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 5000
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'views/index.html'))
})
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname,'views/login.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/submit', (req, res) => {
  // Retrieve input values from the form
  const email = req.body.email;
  const password = req.body.password;

  // Do something with the input values
  // For example, you can send a response back
  res.send(`email: ${email}, Password: ${password}`);
});

