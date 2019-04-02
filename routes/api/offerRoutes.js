const router = require("express").Router();
const offerController = require('../../controllers/offerController');

router
  .route('/')
  .post(offerController.createJob);

router
  .route('/')
  .get(offerController.getAllJobs);

router
  .route('/:id')
  .put(offerController.updateJob)
  .get(offerController.findJob)
  .delete(offerController.deleteJob);

router
  .route('/heardback/:id')
  .post(offerController.offerToHeardback);

router
  .route('/applied/:id')
  .post(offerController.offerToApplied);


module.exports = router;