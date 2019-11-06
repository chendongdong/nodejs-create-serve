var http = require("http"); 
var url = require("url")

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
    res.write("hello nodejs ! ")
    res.write("refresh ! ")
    let requrl = req.url
    res.write('requrl=' + requrl)
    console.log(url.parse(requrl))
    res.end()
}).listen(8889)
console.log('Server running at http://127.0.0.1:8889');
