const express = require ('express')
const gifs = express.Router()
const gifModel = require('../models/GifModel')


//index
gifs.get('/', (req, res) => {
    gifModel.find({}, (error, foundgifs) => {
        if (error){
            res.status(400).json({error: error.message})
        } else {
            res.status(200).json(foundgifs)
        }
            
        })
    })


//create
gifs.post('/', (req, res) => {
  gifModel.create(req.body, (error, createdGif) => {
    if (error){
      res.status(400).json({error:error.message})
  } else {
      res.status(201).json(createdGif)
  }
    })
})


//update
gifs.put('/:id', (req, res) => {
    gifModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGif) => {
        if (err) {
            res.status(400).json({error: err.message})
        } else {
            res.status(200).json(updatedGif)
        }
    })
})

//delete
gifs.delete('/:id', (req, res) => {
    gifModel.findByIdAndDelete(req.params.id, (error, deletedGif) => {
      if (error) {
        res.status(400).json({ error: error.message })
      } else if (deletedGif === null) {
          res.status(404).json({message: 'Gif Not Found'})
      } else {
          res.status(200).json({message: 'Gif ' + deletedGif.name + ' deleted successfully'}) 
      }
    })
  })

module.exports = gifs