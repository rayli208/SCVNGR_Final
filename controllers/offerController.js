const db = require('../models');

module.exports = {

  getAllJobs: function(req, res) {
    db.Offer.find({})
      .then(OfferDB => res.json(OfferDB))
      .catch(err => console.log(err))
  },

  createJob: function(req, res) {
    db.Offer.create(req.body)
      .then(OfferDB => res.json(OfferDB))
      .catch(err => console.log(err))
  },

  deleteJob: function(req, res) {
    db.Offer.deleteOne({_id: req.params.id})
      .then(OfferDB => res.json(OfferDB))
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

    db.Offer.findOneAndUpdate({_id: req.params.id}, {$set: updatedJobInfo}, {new:true})
      .then(OfferDB => console.log(OfferDB))
      .catch(err => console.log(err))
      .finally(res.end());
  }

}