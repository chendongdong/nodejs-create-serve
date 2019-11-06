const fs = require('fs')
//1. fs.stat 判断是文件还是目录
// fs.stat('./test.html', (err, stat) => {
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('目录 ', stat.isDirectory())
//     console.log('文件 ', stat.isFile())
// })
// 2. fs.mkdir 创建目录，目录存在会报错
// fs.mkdir('css', err => {
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('创建目录成功')
// })
// 3. fs.writeFile 创建写入文件，已经存在会覆盖，不存在会创建文件
// fs.writeFile('./css/test.txt', 'hello nodejs', err=>{
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('写入文件成功')
// })
// 4. fs.appendFile 追加文件
// fs.appendFile('./css/t1.txt', '这是希尔内容\n', err=>{
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('写入成功')
// })
// 5. fs.readFile 读取文件
// fs.readFile('./css/t1.txt', (err, data)=>{
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('读取成功=', data.toString())
// })
// 6. fs.readdir 读取目录 把目录下面的文件和文件夹都获取到
// fs.readdir('./css', (err,data)=>{
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log(data)
// })
// 7. fs.rename 重命名
// fs.rename('./css/t2.txt', './css/t2.txt', err=>{
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('修改名字成功')
// })
// 7. fs.rename 剪切文件
// fs.rename('./css/t2.txt', './css/css2/test.txt', err=>{
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('修改名字成功')
// })
// 8. fs.rmdir （只能）删除目录
// fs.rmdir('./css/t', err=>{
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('删除目录成功')
// })
// 9. fs.unlink 删除文件
fs.unlink('./css/test.txt', err=>{
    if (err) {
        console.log(err)
        return false
    }
    console.log('删除文件成功')
})