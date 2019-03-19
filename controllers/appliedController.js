const db = require('../models');

module.exports = {

  getAllJobs: function(req, res) {
    db.Applied.find({})
      .then(AppliedDB => res.json(AppliedDB))
      .catch(err => console.log(err))
  },

  createJob: function(req, res) {
    db.Applied.create(req.body)
      .then(AppliedDB => res.json(AppliedDB))
      .catch(err => console.log(err))
  },

  deleteJob: function(req, res) {
    db.Applied.deleteOne({_id: req.params.id})
      .then(AppliedDB => res.json(AppliedDB))
      .catch(err => console.log(err))
  },

  updateJob: function(req, res) {
    const updateJobInfo = {};

    if(req.body.job_title) {
      updateJobInfo.job_title = req.body.job_title
    }
    if(req.body.phone_number) {
      updateJobInfo.phone_number = req.body.phone_number
    }
    if(req.body.email) {
      updateJobInfo.email = req.body.email
    }
    if(req.body.location) {
      updateJobInfo.location = req.body.location
    }
    if(req.body.salary) {
      updateJobInfo.salary = req.body.salary
    }
    if(req.body.link) {
      updateJobInfo.link = req.body.link
    }
    if(req.body.info) {
      updateJobInfo.info = req.body.info
    }
    if(req.body.positionId) {
        updateJobInfo.positionId = req.body.positionId
    }

    db.Applied.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new:true})
      .then(AppliedDB => console.log(AppliedDB))
      .catch(err => console.log(err))
      .finally(res.end());
  }

}