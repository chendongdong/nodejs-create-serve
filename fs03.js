const fs = require('fs')
/**
// 流的方式读取文件
const readStream = fs.createReadStream('./css/style.css')

let str = '' // 保存数据
let count = 0
// 读取数据回调
readStream.on('data', chunk => {
    str += chunk
    count++
})
// 读取完成回调
readStream.on('end', chunk => {
    console.log('count=', count)
    console.log('str=', str)
})
// 读取错误回调
readStream.on('error', chunk => {
    console.log('err=', err)
}) */
// 创建一个可以写入的流，写入到文件output.txt中
let writeStream = fs.createWriteStream('./css/output.txt')
let readStream = fs.createReadStream('./css/input.txt')
readStream.on('data', data => {
    writeStream.write(data, 'utf8')
})
readStream.on('end', () => {
    writeStream.end()
})
// 写入完成监听
writeStream.on('finish', () => {
    console.log('写入完成')
})
// 写入报错监听
writeStream.on('error', () => {
    console.log('写入失败')
})