const express = require('express')
const router = express.Router()
module.exports = router

const coba = require('./../controllers/coba')

router.route('/coba/first').get(coba.first)
router.route('/coba/getAdmin').get(coba.getAdmin)
router.route('/coba/getAdminID/:username').get(coba.getAdminID)
router.route('/coba/dataAdmin').post(coba.create)
router.route('/coba/dataAdmin').put(coba.update)
router.route('/coba/dataAdmin/:idadmin').delete(coba.delete)
// router.route('/coba/postAdmin').post(coba.create)