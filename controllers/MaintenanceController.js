let maintenanceRecords = []; 

const createMaintenance = (req, res) => {
    const { id, rideId, employeeId, date, description, status } = req.body;
    const newMaintenance = { id, rideId, employeeId, date, description, status };
    maintenanceRecords.push(newMaintenance);
    res.status(201).json(newMaintenance);
};

const getMaintenanceRecords = (req, res) => {
    res.json(maintenanceRecords);
};

const getMaintenanceById = (req, res) => {
    const maintenance = maintenanceRecords.find(m => m.id === parseInt(req.params.id));
    if (maintenance) {
        res.json(maintenance);
    } else {
        res.status(404).send('Maintenance non trouvée');
    }
};

const updateMaintenance = (req, res) => {
    const { date, description, status } = req.body;
    const maintenance = maintenanceRecords.find(m => m.id === parseInt(req.params.id));
    if (maintenance) {
        maintenance.date = date;
        maintenance.description = description;
        maintenance.status = status;
        res.json(maintenance);
    } else {
        res.status(404).send('Maintenance non trouvée');
    }
};

const deleteMaintenance = (req, res) => {
    maintenanceRecords = maintenanceRecords.filter(m => m.id !== parseInt(req.params.id));
    res.status(204).send();
};

module.exports = { createMaintenance, getMaintenanceRecords, getMaintenanceById, updateMaintenance, deleteMaintenance };
