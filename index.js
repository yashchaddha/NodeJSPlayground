const http=require('http');
const port=8000;

function requestHandler(req,res){
    console.log(req.url);
    res.end("Hey Yash! are you excited to learn Nodejs");
}

const server=http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log('error');
        return;
    }
    console.log("Server is up and running:",port);
});