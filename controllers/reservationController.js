const knex = require('knex')(require('../knexfile').development);

exports.addReservation = async (req, res) => {
    try {
        const { user_id, projector_id, start_time, end_time } = req.body;
        const [id] = await knex('reservations').insert({ user_id, projector_id, start_time, end_time });
        res.status(201).json({ message: 'Reservation added', id });
    } catch (error) {
        res.status(500).json({ error: 'Error adding reservation' });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await knex('reservations').select('*');
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching reservations' });
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        await knex('reservations').where({ id }).del();
        res.json({ message: 'Reservation deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting reservation' });
    }
};