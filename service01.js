/**搭建一个服务器 */
const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
/**通过后缀名获取响应类型 */
function getMime(extname) {
    // 同步读取文件，读取完成后再调用后面的代码
    const data = fs.readFileSync('mime.json')
    const jsonStr = JSON.parse(data.toString())
    return jsonStr[extname]
}
/**创建http服务 */
http.createServer((request, response) => {
    // 解析url,获取路径名称，不包含参数
    let pathname = url.parse(request.url).pathname
    console.log('pathname=', pathname)
    // 过滤掉favicon.ico请求
    if (pathname === '/favicon.ico') {
        return
    }
    // 重定向到index.html页面
    if (pathname === '/') {
        pathname = '/index.html'
    }
    let extname = path.extname(pathname)
    // 读取static文件夹下的文件
    fs.readFile('static/' + pathname, (err, data) => {
        if (err) {
            console.log('404 err=', err)
            // 404报错页面
            fs.readFile('static/404.html', (err, data) => {
                // 响应状态404，返回404页面的内容
               response.writeHead(404, {'Content-Type': "text/html;charset='utf-8'"})
               response.write(data)
               response.end()
            })
        } else {
            const mime = getMime(extname) || 'text/html'
            console.log('mime=', mime)
            // 请求成功，响应200，返回请求的数据，响应类型根据请求的文件后缀名而定
            response.writeHead(200, {'Content-Type': mime + ";charset='utf-8'"})
            response.write(data)
            response.end()
        }
    })
}).listen(8000)