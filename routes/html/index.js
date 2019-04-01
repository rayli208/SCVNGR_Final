const router = require('express').Router();
const path = require('path');
const htmlRoutes = require('./htmlRoutes');
const authRoutes = require('./authRoutes');

router.use('/', authRoutes, htmlRoutes);

router.route("/").get(function (req, res) {
  if (req.user) {
    return res.redirect(`/dashboard`);
  }
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router
  .route("*")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "../../public/404.html"));
  })
  
module.exports = router;