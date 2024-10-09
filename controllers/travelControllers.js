const Travel = require('../models/Travel.model')
// Method: GET
// Description: Get all travels books

const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find()

        res.status(200).json({
            message: 'success',
            travels: travels.reverse()
        })
    } catch (error) {
        res.send(error)
    }
}


// Method: GET
// Description: Get one travel book by id

const getTravelById = async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id)

        if(!travel){
            return res.status(404).json({
                message: 'Not Found'
            })
            
        }

        return res.status(200).json({
            message: 'success',
            travel
        })
    } catch (error) {
        res.send(error)
    }
}


// Method: POST
// Description: Add new travel book
const addTravelBook = async (req, res) => {
    try {
        const { title, image, description} = req.body

        const newTravel = await Travel.create({
            title,
            image,
            description
        })

        res.status(201).json({
            message: 'success',
            newTravel
        })
    } catch (error) {
        res.send(error)
    }
}


// Method: PUT
// Description: Edit tarvel book by its ID
const updateTravelBook = async (req, res) => {
    try {
        const { title, image, description} = req.body

        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
            title,
            image,
            description
        })

        res.status(200).json({
            message: 'success',
            updatedTravel
        })
    } catch (error) {
        res.send(error)
    }
}


// Method: DELETe
// Description: Remove travel book by its ID
const removeTravelBook = async (req, res) => {
    try {

       await Travel.findByIdAndRemove(req.params.id)
        res.status(200).json({
            message: 'Deleted'
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getAllTravels,
    getTravelById,
    addTravelBook,
    updateTravelBook,
    removeTravelBook   
}