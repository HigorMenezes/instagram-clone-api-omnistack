const LikeController = require('../controllers/LikeController')

const PostRoute = app => {
  app.post('/posts/:id/like', LikeController.store)
}

module.exports = PostRoute
