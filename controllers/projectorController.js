const knex = require('knex')(require('../knexfile').development);

exports.addProjector = async (req, res) => {
    try {
        const { name, is_available } = req.body;
        const [id] = await knex('projectors').insert({ name, is_available });
        return res.status(201).json({ message: 'Projector added', id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error adding projector',error });
    }
};

exports.getProjectors = async (req, res) => {
    try {
        const projectors = await knex('projectors').select('*');
        res.json(projectors);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching projectors' });
    }
};

exports.updateProjector = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, available } = req.body;
        await knex('projectors').where({ id }).update({ status, available });
        res.json({ message: 'Projector updated' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating projector' });
    }
};

exports.deleteProjector = async (req, res) => {
    try {
        const { id } = req.params;
        await knex('projectors').where({ id }).del();
        res.json({ message: 'Projector deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting projector' });
    }
};