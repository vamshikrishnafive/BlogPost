const Post = require('../dataBase/models/post')

module.exports = async (req, res) => {
        const posts = await Post.find({}).populate('author')
        console.log(posts)
        res.render('index', {
            posts
        })
    }