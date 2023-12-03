const router = require("express").Router();

router.use("/auth", require('./auth.routes'))
router.use("/users", require('./users.routes'))
router.use("/jobs", require('./job.routes'))
router.use("/experience", require('./experience.routes'))
router.use("/upload", require('./upload.routes'))
router.use("/test", require('./test.routes'))

module.exports = router
