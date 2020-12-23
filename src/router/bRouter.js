import Router from 'koa-router'
import {b} from '../api/b.js'
const router = new Router()
// router.prefix('/bApi')
router.get('/b', b)

module.exports = router