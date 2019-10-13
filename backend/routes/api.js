const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');
const recipesRoutes = require('./recipes');
const itemsRoutes = require('./items');
const sortsRoutes = require('./sorts');

router.use('/users', usersRoutes);
router.use('/recipes', recipesRoutes);
router.use('/items', itemsRoutes);
router.use('/sorts', sortsRoutes);

module.exports = router;
