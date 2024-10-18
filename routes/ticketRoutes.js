const express = require('express');
const { createTicket, getTickets, getTicketById, updateTicket, deleteTicket } = require('../controllers/TicketController');
const router = express.Router();

router.get('/tickets', getTickets);
router.get('/tickets/:id', getTicketById);
router.post('/tickets', createTicket);
router.put('/tickets/:id', updateTicket);
router.delete('/tickets/:id', deleteTicket);

module.exports = router;
