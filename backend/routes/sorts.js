const express = require('express');
const router = express.Router();
const SortController = require('../controllers/sorts');
const authenticate = require('../middleware/auth');
const admin = require('../middleware/admin');
const validateIdParam = require('../middleware/validateIdParam');
const validateSortBody = require('../middleware/validateSortBody');

router
  .route('/')
  .get(SortController.fetch)
  .all(authenticate, admin)
  .all(validateSortBody)
  .post(SortController.create);

router
  .route('/:id')
  .all(validateIdParam)
  .get(SortController.read)
  .all(authenticate, admin)
  .delete(SortController.delete)
  .all(validateSortBody)
  .patch(SortController.update);

module.exports = router;
