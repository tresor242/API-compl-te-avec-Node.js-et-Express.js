let visitors = []; // Stockage en mémoire

const createVisitor = (req, res) => {
    const { id, name, age, height } = req.body;
    const newVisitor = { id, name, age, height };
    visitors.push(newVisitor);
    res.status(201).json(newVisitor);
};

const getVisitors = (req, res) => {
    res.json(visitors);
};

const getVisitorById = (req, res) => {
    const visitor = visitors.find(v => v.id === parseInt(req.params.id));
    if (visitor) {
        res.json(visitor);
    } else {
        res.status(404).send('Visiteur non trouvé');
    }
};

const updateVisitor = (req, res) => {
    const { name, age, height } = req.body;
    const visitor = visitors.find(v => v.id === parseInt(req.params.id));
    if (visitor) {
        visitor.name = name;
        visitor.age = age;
        visitor.height = height;
        res.json(visitor);
    } else {
        res.status(404).send('Visiteur non trouvé');
    }
};

const deleteVisitor = (req, res) => {
    visitors = visitors.filter(v => v.id !== parseInt(req.params.id));
    res.status(204).send();
};

module.exports = { createVisitor, getVisitors, getVisitorById, updateVisitor, deleteVisitor };
