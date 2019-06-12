const multer = require('multer')
const PostController = require('../controllers/PostController')
const uploadConfig = require('../../config/upload')

const upload = multer(uploadConfig)

const PostRoute = app => {
  app.get('/posts', PostController.index)
  app.post('/posts', upload.single('image'), PostController.store)
}

module.exports = PostRoute
