const router = require("express").Router();
const heardbackController = require('../../controllers/heardbackController');

router
  .route('/')
  .post(heardbackController.createJob);

router
  .route('/:id')
  .put(heardbackController.updateJob)
  .get(heardbackController.findJob)
  .delete(heardbackController.deleteJob);

router
  .route('/offer/:id')
  .post(heardbackController.heardbackToOffer);

router
  .route('/applied/:id')
  .post(heardbackController.heardbackToApplied);


module.exports = router;