const express = require('express');
const router = express.Router();
const projectorController = require('../controllers/projectorController');

router.post('/', projectorController.addProjector);
router.get('/', projectorController.getProjectors);
router.put('/:id', projectorController.updateProjector);
router.delete('/:id', projectorController.deleteProjector);

module.exports = router;