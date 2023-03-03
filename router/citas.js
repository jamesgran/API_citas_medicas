const express = require("express")
const controller = require("../controllers/citas")
const router = express.Router()
const path = '/citas'

router.get(path, controller.consultar)
router.get(path + '/:id', controller.consultarPorID)
module.exports = router