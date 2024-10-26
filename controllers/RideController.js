const Ride = require('../models/Ride');


let rides = []; 


const createRide = (req, res) => {
    const { id, name, capacity, minHeight, duration, status } = req.body;
    const newRide = new Ride(id, name, capacity, minHeight, duration, status);
    rides.push(newRide);
    res.status(201).json(newRide);
};


const getRides = (req, res) => {
    res.json(rides);
};


const getRideById = (req, res) => {
    const ride = rides.find(r => r.id === parseInt(req.params.id));
    if (ride) {
        res.json(ride);
    } else {
        res.status(404).send('Attraction non trouvée');
    }
};


const updateRide = (req, res) => {
    const { name, capacity, minHeight, duration, status } = req.body;
    const ride = rides.find(r => r.id === parseInt(req.params.id));
    if (ride) {
        ride.name = name;
        ride.capacity = capacity;
        ride.minHeight = minHeight;
        ride.duration = duration;
        ride.status = status;
        res.json(ride);
    } else {
        res.status(404).send('Attraction non trouvée');
    }
};


const deleteRide = (req, res) => {
    rides = rides.filter(r => r.id !== parseInt(req.params.id));
    res.status(204).send();
};

module.exports = { createRide, getRides, getRideById, updateRide, deleteRide };
