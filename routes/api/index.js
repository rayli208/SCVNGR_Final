const router = require("express").Router();
const appliedRoutes = require('./appliedRoutes');
const heardbackRoutes = require('./heardbackRoutes');
const offerRoutes = require('./offerRoutes');
const jobinfoRoutes = require('./jobinfoRoute.js')


router.use("/applied", appliedRoutes);
router.use("/heardback", heardbackRoutes);
router.use("/offer", offerRoutes);
router.use("/getinfo", jobinfoRoutes);

module.exports = router;