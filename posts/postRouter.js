const express = require('express')
const router = express.Router()
const Post = require('./postDb.js')



router.get('/', (req, res)=> {
    Post.get()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.get('/:id', (req, res)=> {
    Post.getById(req.params.id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})


router.delete('/:id', (req, res)=> {
    Post.remove(req.params.id)
    .then(count => {
        res.status(200).json({message: 'deleted post'})
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.post('/:id', (req, res) => {
    // this sets the id in endpoint to the user_id so it gets attached to a user
    const newPost = { user_id: req.params.id, ...req.body}
    Post.insert(newPost)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})



module.exports = router