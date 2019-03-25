const db = require('../models');
const User = require('../models/User')

module.exports = {

  findUser: function(req, res) {
    db.User.find({_id: req.params.id})
      .then(userDB => res.json(userDB))
      .catch(err => console.log(err));
  },

  login: function(req, res) {
    console.log(req.user);
    res.json('/dashboard')
  },

  logout: function(req, res) {
    req.logout();
    console.log(req.user);
  },

  registerUser: function(req, res) {
    console.log(req.body);
    User
      .register(new User({
        username: req.body.username,
        }), req.body.password,
        function(err) {
        if (err) {
          console.log("Error with user registration", err);
          res.json(err);
        }
        res.json('/dashboard');
      })
  },

  deleteUser: function(req, res) {
    db.User.deleteOne({ _id: req.user.id})
      .then(console.log(req.user))
      .catch(err => console.log(err));
  },

  updateUser: function(req, res) {
    db.User.findOneAndUpdate({
      _id: req.params.id
      }, req.body)
        .then(userDB => res.json(userDB))
        .catch(err => console.log(err));
  }

}
