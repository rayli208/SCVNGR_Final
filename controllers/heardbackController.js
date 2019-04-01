const db = require('../models');

module.exports = {

  getAllJobs: function(req, res) {
    db.HeardBack.find({})
      .then(HeardBackDB => res.json(HeardBackDB))
      .catch(err => console.log(err))
  },

  createJob: function(req, res) {
    console.log(req.body);
    db.HeardBack.create(req.body)
      .then(HeardBackDB => (
        db.User.findOneAndUpdate({ _id: req.user._id}, { $push: { heardback: HeardBackDB._id } }, { new: true })
      ))
      .catch(err => console.log(err))
  },

  deleteJob: function(req, res) {
    db.HeardBack.deleteOne({_id: req.params.id})
      .then(HeardBackDB => res.json(HeardBackDB))
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

    db.HeardBack.findOneAndUpdate({_id: req.params.id}, {$set: updatedJobInfo}, {new:true})
      .then(HeardBackDB => console.log(HeardBackDB))
      .catch(err => console.log(err))
      .finally(res.end());
  },

  findJob: function(req, res) {
    db.HeardBack.find({ _id: req.params.id })
      .then(HeardBackDB => res.json(HeardBackDB))
      .catch(err => console.log(err))
  },

}