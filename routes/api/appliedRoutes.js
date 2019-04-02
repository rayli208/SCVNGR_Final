const router = require("express").Router();
const appliedController = require('../../controllers/appliedController');

router 
  .route('/')
    .post(appliedController.createJob);

router
  .route('/')
    .get(appliedController.getAllJobs);

router
  .route('/:id')
    .put(appliedController.updateJob)
    .get(appliedController.findJob)
    .delete(appliedController.deleteJob)

router
  .route('/heardback/:id')
    .post(appliedController.appliedToHeardback);

router
  .route('/offer/:id')
    .post(appliedController.appliedToOffer);

module.exports = router;
