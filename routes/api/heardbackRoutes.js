const router = require("express").Router();
const heardbackController = require('../../controllers/heardbackController');

router 
  .route('/')
    .post(heardbackController.createJob);

router
  .route('/')
    .get(heardbackController.getAllJobs);

router
  .route('/:id')
    .put(heardbackController.updateJob)
    .delete(heardbackController.deleteJob)

module.exports = router;
  