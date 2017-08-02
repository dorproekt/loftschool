let fs = require('fs');
let http = require('http');

http.createServer(function(req, res){
    console.log("поступил запрос");
    res.setHeader("Content-Type", "text/html");
    if(req.url == '/test.html'){
        let content = fs.readFileSync("../../public/text.html");
        res.write(content);
    }

    res.end();
}).listen(7777);

/*fs.appendFile("nodejs.txt", "hello world");

fs.readFile("nodejs.txt", {encoding: "utf-8"}, function(e, content){
    console.log(content);
});

console.log(123456);*/

/*let dirs = fs.readdirSync("./");
for(dir of dirs){
    let stat = fs.statSync(dir);
    console.log(dir, stat);
}*/