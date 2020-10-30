const express = require('express')
const router = express.Router()
const User = require('./userDb.js')


router.get('/', (req, res) =>{
    User.get()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({mesage: err.message})
    })
})

router.get('/:id', (req, res)=> {
    User.getById(req.params.id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.delete('/:id', (req, res)=> {
    User.remove(req.params.id)
    .then(user => {
        res.status(200).json({message: 'user removed'})
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
    User.insert(req.body)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.put('/:id', (req, res) => {
    User.update(req.params.id, req.body)
    .then(updatedUser => {
        res.status(200).json(updatedUser)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})


function validateUser(req, res, next){
    if (!req.body){
        res.status(400).json({message: 'missing data'})
    } else if (!req.body.name){
        res.status(400).json({message: 'missing name'})
    } else {
        next()
    }
}





module.exports = router