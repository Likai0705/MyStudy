// function a (ctx) {
//     ctx.body = {
//         api: 'addaa'
//     }
// }

// function user (ctx) {
//     const {header, body} = ctx.request
//     let response = {}
//     if (!(body.name && body.email)) {
//         response = {code: 404, msg: 'name与email不得为空'}
//     } else if (!header.role || header.role !== 'admin') {
//         response = {code: 401, msg: '未授权请求'}
//     } else {
//         response = {name: 'imooc', email: 'imooc@email.com'}
//     }
//     ctx.body = response
// }

// module.exports = {
//     a,
//     user
// }

class aController {
    constructor(){}
    a (ctx) {
        ctx.body = {
            api: 'addaa'
        }
    }
    
    user (ctx) {
        const {header, body} = ctx.request
        let response = {}
        if (!(body.name && body.email)) {
            response = {code: 404, msg: 'name与email不得为空'}
        } else if (!header.role || header.role !== 'admin') {
            response = {code: 401, msg: '未授权请求'}
        } else {
            response = {name: 'imooc', email: 'imooc@email.com'}
        }
        ctx.body = response
    }
}

export default new aController()