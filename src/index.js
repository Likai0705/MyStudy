// const Koa = require('koa')
// const koaBody = require('koa-body')
// const cors = require('@koa/cors')
// const helmet = require('koa-helmet')
// const statics = require('koa-static')
// const path = require('path')
// const router = require('./router/router')
import Koa from 'koa'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import jsonutil from 'koa-json'
import path from 'path'
import router from'./router/router'
import compose from 'koa-compose'
import compress from 'koa-compress'

const app = new Koa()
// const router = new Router()
const isDevMode = process.env.NODE_ENV === 'production' ? false : true

// app.use(koaBody())
// app.use(helmet())
// app.use(cors())
// app.use(jsonutil({pretty:false, param: 'pretty'}))
// app.use(statics(path.join(__dirname, '../public')))

// app.use(router())



/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    jsonutil({pretty: false,param: 'pretty'}),
    helmet()
])

if (!isDevMode) {
    app.use(compress())
}

app.use(middleware)
app.use(router())
app.listen(3000)