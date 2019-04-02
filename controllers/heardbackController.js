const db = require('../models');

module.exports = {

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

  heardbackToOffer: function(req, res) {
    db.HeardBack.find({ _id: req.params.id })
      .then(resultDB => {
        console.log(resultDB)
        db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { heardback: { _id: req.params.id }, $push: { offer: resultDB[0]._id } } }, { new: true, $multi: true }, function(err, result) {
          if (err) {
            console.log(err); 
          }
          res.json(result);
        })
      })
      .catch(err => console.log(err))
  },

  heardbackToApplied: function(req, res) {
    db.HeardBack.find({ _id: req.params.id })
      .then(resultDB => {
        console.log(resultDB)
        db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { heardback: { _id: req.params.id }, $push: { applied: resultDB[0]._id } } }, { new: true, $multi: true }, function(err, result) {
          if (err) {
            console.log(err); 
          }
          res.json(result);
        })
      })
      .catch(err => console.log(err))
  },

}