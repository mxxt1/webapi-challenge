const router = require('express').Router()

const db = require('../data/helpers/projectModel.js')


//get

router.get('/', (req, res) => {
    console.log(`projectrouter get`)
    db.get()
    .then(projects => {
        console.log(projects)
        res.status(200).json(projects)
    })
    .catch( () => {
        res.status(500).json({error: `failed to retrieve projects`})
    })
})

router.get('/:id', (req, res) => {
    console.log(`inside project get with id`)
    db.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({Error: err})
    })
})


//post

router.post('/', (req, res) => {
    console.log(`project post`)
    db.insert(req.body)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({Error: `failed to post new project`})
    })
})



//put


router.put('/:id', (req, res) => {
    console.log(`inside project put`)
    db.update(req.params.id, req.body)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})



//delete

router.delete('/:id', (req, res) => {
    console.log(`inside project delete`)
    db.remove(req.params.id)
    .then(count => {
        res.status(200).json(`${count} records removed`)
    })
    .catch(err => {
        res.status(500).json({Error: err})
    })
})


module.exports = router