const http=require('http');
const port=8000;

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    res.end("<h1>Hey Yash! are you excited to learn Nodejs</h1>");
}

const server=http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log('error');
        return;
    }
    console.log("Server is up and running:",port);
});