const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(
  'mongodb+srv://admin:v6mia8HZFruFBis@cluster-dpyxz.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
)

app.listen(3333)
