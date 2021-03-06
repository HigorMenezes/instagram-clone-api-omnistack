const Post = require('../models/Post')

const LikeController = {
  store: async (req, res) => {
    const post = await Post.findById(req.params.id)
    post.likes += 1
    await post.save()
    req.io.emit('like', post)
    return res.status(200).send(post)
  },
}

module.exports = LikeController
