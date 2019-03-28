const router = require("express").Router();
const appliedRoutes = require('./appliedRoutes');
const heardbackRoutes = require('./heardbackRoutes');
const offerRoutes = require('./offerRoutes');
const userRoutes = require('./userRoutes');


router.use("/applied", appliedRoutes);
router.use("/heardback", heardbackRoutes);
router.use("/offer", offerRoutes);
router.use("/user", userRoutes);

module.exports = router;