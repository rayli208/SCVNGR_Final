const router = require("express").Router();
const path = require("path");

router.route("/").get(function (req, res) {
  if (req.user) {
    return res.redirect(`/dashboard`);
  }
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});

router.route("/dashboard").get(function (req, res) {
  if (req.user) {
    return res.redirect(`/dashboard`);
  }
  res.sendFile(path.join(__dirname, "../../public/dashboard.html"));
});

router.route("/register").get(function (req, res) {
  if (req.user) {
    return res.redirect(`/dashboard`);
  }
  res.sendFile(path.join(__dirname, "../../public/dashboard.html"));
});

router.route("/chart").get((req, res) => {
  res.sendFile(path.join(__dirname, "../../public/chart.html"));
});

router.route("/dashboard/user").get((req, res) => {
  res.sendFile(path.join(__dirname, "../../public/user.html"));
})


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