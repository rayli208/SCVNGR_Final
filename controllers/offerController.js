const db = require('../models');

module.exports = {

  createJob: function(req, res) {
    db.Offer.create(req.body)
      .then(OfferDB => (
        db.User.findOneAndUpdate({ _id: req.user._id}, { $push: { offer: OfferDB._id } }, { new: true })
      ))
      .catch(err => console.log(err))
  },

  deleteJob: function(req, res) {
    db.Offer.deleteOne({_id: req.params.id})
      .then(OfferDB => res.json(OfferDB))
      .catch(err => console.log(err))
  },

  updateJob: function(req, res) {
    db.Offer.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new:true})
      .then(OfferDB => console.log(OfferDB))
      .catch(err => console.log(err))
      .finally(res.end());
  },

  findJob: function(req, res) {
    db.Offer.find({ _id: req.params.id })
      .then(OfferDB => res.json(OfferDB))
      .catch(err => console.log(err))
  },

  offerToHeardback: function(req, res) {
    db.Offer.find({ _id: req.params.id })
      .then(resultDB => {
        console.log(resultDB)
        db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { offer: { _id: req.params.id }, $push: { heardback: resultDB[0]._id } } }, { new: true, $multi: true }, function(err, result) {
          if (err) {
            console.log(err); 
          }
          res.json(result);
        })
      })
      .catch(err => console.log(err))
  },

  offerToApplied: function(req, res) {
    db.Offer.find({ _id: req.params.id })
      .then(resultDB => {
        console.log(resultDB)
        db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { offer: { _id: req.params.id }, $push: { applied: resultDB[0]._id } } }, { new: true, $multi: true }, function(err, result) {
          if (err) {
            console.log(err); 
          }
          res.json(result);
        })
      })
      .catch(err => console.log(err))
  },

}