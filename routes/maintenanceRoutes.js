const express = require('express');
const { createMaintenance, getMaintenanceRecords, getMaintenanceById, updateMaintenance, deleteMaintenance } = require('../controllers/MaintenanceController');
const router = express.Router();

router.get('/Maintenances', getMaintenanceRecords);
router.get('/Maintenances/:id', getMaintenanceById);
router.post('/Maintenances', createMaintenance);
router.put('/Maintenances/:id', updateMaintenance);
router.delete('/Maintenances/:id', deleteMaintenance);

module.exports = router;
