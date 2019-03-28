const router = require("express").Router();
const userController = require('../../controllers/userController');
const passport = require('passport');


router
  .route("/login")
    .post(passport.authenticate('local'), userController.login)

router
  .route("/logout")
  .get(userController.logout);

router  
  .route("/register")
  .post(userController.registerUser);

router
  .route("/:id")
  .get(userController.findUser)
  .delete(userController.deleteUser);
  
  module.exports = router;