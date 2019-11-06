var http = require("http"); 

http.createServer(function(res, res){
    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
    res.write("hello nodejs ! ")
    res.write("哈哈 refresh ! ")
    res.end()
}).listen(8888)
console.log('Server running at http://127.0.0.1:8888');
