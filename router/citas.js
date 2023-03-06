const express = require("express")
const controller = require("../controllers/citas")
const router = express.Router()
const path = '/citas'

router.post(path, controller.consultarPorID)
//router.get(path + '/:id', controller.consultarPorID)
module.exports = router