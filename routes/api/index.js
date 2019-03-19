const router = require("express").Router();
const appliedRoutes = require('./appliedRoutes');
const heardbackRoutes = require('./heardbackRoutes');
const offerRoutes = require('./offerRoutes')


router.use("/applied", appliedRoutes);
router.use("/heardback", heardbackRoutes);
router.use("/offer", offerRoutes);

module.exports = router;