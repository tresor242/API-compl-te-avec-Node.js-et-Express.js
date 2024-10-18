const Ride = require('../models/Ride');


let rides = []; // Stocker les attractions en mémoire

// Créer une nouvelle attraction
const createRide = (req, res) => {
    const { id, name, capacity, minHeight, duration, status } = req.body;
    const newRide = new Ride(id, name, capacity, minHeight, duration, status);
    rides.push(newRide);
    res.status(201).json(newRide);
};

// Récupérer toutes les attractions
const getRides = (req, res) => {
    res.json(rides);
};

// Récupérer une attraction spécifique
const getRideById = (req, res) => {
    const ride = rides.find(r => r.id === parseInt(req.params.id));
    if (ride) {
        res.json(ride);
    } else {
        res.status(404).send('Attraction non trouvée');
    }
};

// Mettre à jour une attraction
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

// Supprimer une attraction
const deleteRide = (req, res) => {
    rides = rides.filter(r => r.id !== parseInt(req.params.id));
    res.status(204).send();
};

module.exports = { createRide, getRides, getRideById, updateRide, deleteRide };
