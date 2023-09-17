const express = require('express')
const rolRouter = require('./RolesRouter')
const genderRouter = require('./GendersRouter')
const editorialRouter = require('./EditorialRouter')

const router = express.Router()


router.use(rolRouter)
router.use(genderRouter)
router.use(editorialRouter)


module.exports = router






