const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://admin:v6mia8HZFruFBis@cluster-dpyxz.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
)

module.exports = mongoose
