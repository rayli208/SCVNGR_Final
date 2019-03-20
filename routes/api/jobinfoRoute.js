const router = require("express").Router();
const appliedController = require('../../controllers/appliedController');
const heardbackController = require('../../controllers/heardbackController');
const offerController = require('../../controllers/offerController');


router
  .route('/')
    .get(appliedController.getAllJobs)
    .get(heardbackController.getAllJobs)
    .get(offerController.getAllJobs)
    
module.exports = router;
  