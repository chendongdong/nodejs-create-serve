const fs = require('fs')
// 示例1： 判断目录是否存在，不存在则创建目录
// fs.stat('upload', (err,stat)=>{
//     if (err) {
//         console.log('目录不存在');
//         fs.mkdir('upload', err=>{
//             if (err) {
//                 console.log(err)
//                 return false
//             }
//             console.log('创建目录成功')
//         })
//     } else {
//         console.log('目录已经存在')
//         console.log(stat.isDirectory())
//     }
// })
// 示例2：找出css目录下的所有目录，然后打印出来
fs.readdir('css', (err, data)=>{
    if (err) {
        console.log(err);
        return false
    }
    console.log(data)
    let dir = []
    new Promise(resolve => {
        for (let i = 0; i < data.length; i++) {
            (function(i){
                fs.stat('css/'+data[i], (err, stat) => {
                    if (err) {
                        console.log(err)
                        return false
                    }
                    if (stat.isDirectory()) {
                        console.log(data[i]+'是目录')
                        dir.push(data[i])
                    }
                    if (i == data.length - 1) {
                        resolve()
                    }
                })
            })(i)
        }
    }).then(()=>{
        console.log('完成')
        console.log(dir)
    })
})