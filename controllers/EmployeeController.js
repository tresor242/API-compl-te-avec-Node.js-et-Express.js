let employees = []; // Stockage en mémoire

const createEmployee = (req, res) => {
    const { id, name, position, department } = req.body;
    const newEmployee = { id, name, position, department };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
};

const getEmployees = (req, res) => {
    res.json(employees);
};

const getEmployeeById = (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send('Employé non trouvé');
    }
};

const updateEmployee = (req, res) => {
    const { name, position, department } = req.body;
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    if (employee) {
        employee.name = name;
        employee.position = position;
        employee.department = department;
        res.json(employee);
    } else {
        res.status(404).send('Employé non trouvé');
    }
};

const deleteEmployee = (req, res) => {
    employees = employees.filter(e => e.id !== parseInt(req.params.id));
    res.status(204).send();
};

module.exports = { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee };
