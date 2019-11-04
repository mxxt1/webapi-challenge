const router = require('express').Router()

const db = require('../data/helpers/actionModel.js')



//get
router.get('/', (req, res) => {
    console.log(`get from action router`);
    db.get()
    .then(actions => {
        console.log(actions)
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({Error: err})
    })
});

router.get('/:id', (req, res) => {
    console.log(`action get with id`)
    db.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})


//post

router.post('/', (req, res) => {
    console.log(`action post`)
    // const {project_id} = req.params
    
    db.insert(req.body)
    .then(newAction => {
            res.status(200).json(newAction)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})



//put

router.put('/:id', (req, res) => {
    console.log(`inside action put`)
    db.update(req.params.id, req.body)
    .then(updated => {
        if(updated === null){
            res.status(400).json(`Id does not exist`)
        } else if (req.body.description.length() > 128){
            res.status(400).json(`Please shorten the description to <= 128 chars`)
        } else {
            res.status(200).json(updated)
        }
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})



//delete

router.delete('/:id', (req, res) => {
    console.log(`inside action delete`)
    db.remove(req.params.id)
    .then(count => {
        res.status(200).json(`deleted ${count} actions`)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})


module.exports = router