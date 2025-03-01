const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/', reservationController.addReservation);
router.get('/', reservationController.getReservations);
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;