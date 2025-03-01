const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const projectorRoutes = require('./routes/projectorRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const authController = require('./controllers/authController');
const projectorController = require('./controllers/projectorController');
const reservationController = require('./controllers/reservationController');
const knex = require('./knexfile');
const authMiddleware = require('./middleware/authMiddleware');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/projectors', authMiddleware, projectorRoutes);
app.use('/api/reservations', authMiddleware, reservationRoutes);
app.get('/api/profile', authMiddleware, authController.getProfile);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));