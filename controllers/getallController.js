const db = require('../models');

module.exports = {

  getAllJobs: function(req, res) {
    db.Applied.find({})
      .then(AppliedDB => res.json(AppliedDB))
      .catch(err => console.log(err))
    db.HeardBack.find({})
      .then(HeardBackDB => res.json(HeardBackDB))
      .catch(err => console.log(err))
    db.Offer.find({})
      .then(OfferDB => res.json(OfferDB))
      .catch(err => console.log(err));
  }
}