const express = require('express');
const { createVisitor, getVisitors, getVisitorById, updateVisitor, deleteVisitor } = require('../controllers/VisitorController');
const router = express.Router();

router.get('/visitors', getVisitors);
router.get('/visitors/:id', getVisitorById);
router.post('/visitors', createVisitor);
router.put('/visitors/:id', updateVisitor);
router.delete('/visitors/:id', deleteVisitor);

module.exports = router;
