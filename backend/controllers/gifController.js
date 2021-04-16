const express = require ('express')
const gifs = express.Router()
const GifModel = require('../models/GifModel')


//index
gifs.get('/', (req, res) => {
    GifModel.find({}, (error, foundgifs) => {
        if (error){
            res.status(400).json({error: error.message})
        }
            res.status(200).json(foundgifs)
        })
    })


//create
gifs.post("/", (req, res) => {
  GifModel.create(req.body, (error, createdGif) => {
    if (error){
      res.status(400).json({error:error.message})
  }
      res.status(201).json(createdGif)
    })
})


//update
gifs.put('/:id', (req, res) => {
    GifModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGif) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(updatedGif)
    })
})

//delete
gifs.delete('/:id', (req, res) => {
    GifModel.findByIdAndDelete(req.params.id, (error, deletedGif) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      else if (deletedGif === null){
          res.status(404).json({message: 'Gif Not Found'})
      }
      res.status(200).json({message: 'Gif ' + deletedGif.name + ' deleted successfully'}) 
    })
  })


module.exports = gifs