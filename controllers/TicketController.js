let tickets = []; 

const createTicket = (req, res) => {
    const { id, visitorId, type, price, purchaseDate, validUntil } = req.body;
    const newTicket = { id, visitorId, type, price, purchaseDate, validUntil };
    tickets.push(newTicket);
    res.status(201).json(newTicket);
};

const getTickets = (req, res) => {
    res.json(tickets);
};

const getTicketById = (req, res) => {
    const ticket = tickets.find(t => t.id === parseInt(req.params.id));
    if (ticket) {
        res.json(ticket);
    } else {
        res.status(404).send('Billet non trouvé');
    }
};

const updateTicket = (req, res) => {
    const { type, price, validUntil } = req.body;
    const ticket = tickets.find(t => t.id === parseInt(req.params.id));
    if (ticket) {
        ticket.type = type;
        ticket.price = price;
        ticket.validUntil = validUntil;
        res.json(ticket);
    } else {
        res.status(404).send('Billet non trouvé');
    }
};

const deleteTicket = (req, res) => {
    tickets = tickets.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
};

module.exports = { createTicket, getTickets, getTicketById, updateTicket, deleteTicket };
