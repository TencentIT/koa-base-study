var koa = require('koa')

var app = new koa()

// 配置路由 


// 中间件

// express 写法
// app.use(function(req,res) {
//     res.send('返回数据')
// })

// koa 写法
app.use(async (ctx) => {
    ctx.body = '您好 koa 2.x'
})


app.listen(3000)

console.log('运行成功 端口 3000');