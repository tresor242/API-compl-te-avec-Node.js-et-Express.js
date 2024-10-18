const express = require('express');
const { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/EmployeeController');
const router = express.Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById);
router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

module.exports = router;
