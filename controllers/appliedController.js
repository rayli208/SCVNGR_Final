const db = require('../models');

module.exports = {

  createJob: function(req, res) {
    db.Applied.create(req.body)
      .then(AppliedDB => (
        db.User.findOneAndUpdate({ _id: req.user._id}, { $push: { applied: AppliedDB._id } }, { new: true })
      ))
      .then(AppliedDB => res.json(AppliedDB))
      .catch(err => console.log(err))
  },

  deleteJob: function(req, res) {
    db.Applied.deleteOne({ _id: req.params.id })
      .then(AppliedDB => res.json(AppliedDB))
      .catch(err => console.log(err))
  },

  updateJob: function(req, res) {
    db.Applied.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new:true})
      .then(AppliedDB => console.log(AppliedDB))
      .catch(err => console.log(err))
      .finally(res.end());
  },

  findJob: function(req, res) {
    db.Applied.find({ _id: req.params.id })
      .then(AppliedDB => res.json(AppliedDB))
      .catch(err => console.log(err))
  },

  appliedToHeardback: function(req, res) {
    db.Applied.find({ _id: req.params.id })
      .then(resultDB => {
        console.log(resultDB)
        db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { applied: { _id: req.params.id } , $push: { heardback: resultDB[0]._id } } }, { new: true, $multi: true }, function(err, result) {
          if (err) {
            console.log(err); 
          }
          res.json(result);
        })
      })
      .catch(err => console.log(err))
  },

  appliedToOffer: function(req, res) {
    db.Applied.find({ _id: req.params.id })
      .then(resultDB => {
        console.log(resultDB)
        db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { applied: { _id: req.params.id }, $push: { offer: resultDB[0]._id } } }, { new: true, $multi: true }, function(err, result) {
          if (err) {
            console.log(err); 
          }
          res.json(result);
        })
      })
      .catch(err => console.log(err))
  },
}