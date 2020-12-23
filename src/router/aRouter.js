import Router from 'koa-router'
import aController from '../api/aController.js'
const router = new Router()
router.prefix('/api')
router.get('/a', aController.a)
router.post('/user', aController.user)

module.exports = router