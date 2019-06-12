const sharp = require('sharp')
const path = require('path')
const fs = require('fs')
const Post = require('../models/Post')

const PostController = {
  index: async (req, res) => {
    const posts = await Post.find().sort('-createdAt')

    res.status(200).send(posts)
  },
  store: async (req, res) => {
    const { author, place, description, hashtags } = req.body
    const { filename: image } = req.file

    const [name] = image.split('.')
    const fileName = `${name}.jpg`

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, 'resized', fileName))

    fs.unlinkSync(req.file.path)

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName,
    })
    req.io.emit('post', post)
    return res.status(200).send(post)
  },
}

module.exports = PostController
