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
    db.HeardBack.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new:true})
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