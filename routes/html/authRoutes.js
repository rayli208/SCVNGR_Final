// const router = require('express').Router();
// const path = require("path");
// const authenticateUser = require('../../middleware/authenticateUser');

// router.use(authenticateUser);

// router.route("/dashboard").get(function (req, res) {
//   if (req.user) {
//     return res.redirect(`/dashboard`);
//   }
//   res.sendFile(path.join(__dirname, "../../public/dashboard.html"));
// });

// router.route("/chart").get((req, res) => {
//   res.sendFile(path.join(__dirname, "../../public/chart.html"));
// });

// router.route("/user").get((req, res) => {
//   res.sendFile(path.join(__dirname, "../../public/user.html"));
// })

// module.exports = router;