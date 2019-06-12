const PostRoute = require('./PostRoute')
const LikeRoute = require('./LikeRoute')

const routes = app => {
  app.get('/', (req, res) => {
    return res.send('Server is running')
  })

  PostRoute(app)
  LikeRoute(app)
}

module.exports = routes
