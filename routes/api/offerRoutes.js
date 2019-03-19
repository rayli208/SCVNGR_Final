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
    .delete(offerController.deleteJob)

module.exports = router;
  