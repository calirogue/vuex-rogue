const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipes');
const authenticate = require('../middleware/auth');
const admin = require('../middleware/admin');
const validateIdParam = require('../middleware/validateIdParam');
const validateRecipeBody = require('../middleware/validateRecipeBody');

router
  .route('/')
  .get(RecipeController.fetch)
  .all(authenticate, admin)
  .all(validateRecipeBody)
  .post(RecipeController.create);

router
  .route('/:id')
  .all(validateIdParam)
  .get(RecipeController.read)
  .all(authenticate, admin)
  .delete(RecipeController.delete)
  .all(validateRecipeBody)
  .patch(RecipeController.update);

module.exports = router;
