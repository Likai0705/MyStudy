import combineRouters from 'koa-combine-routers'
import aRouter from './aRouter'
import bRouter from './bRouter'

module.exports = combineRouters(aRouter, bRouter)
                                                           