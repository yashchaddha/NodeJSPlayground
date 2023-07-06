const http=require('http');
const port=8000;
const fs=require('fs');

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});

    let filePath;

    switch(req.url){
        case '/s':
            filePath='./index.html';
            break;
        
        case '/404error':
            filePath='./404error.html';
            break;
        
        case '/profile':
            filePath='./profile.html';
            break;
        default:
            filePath='./default.html';
            break;
    }

    fs.readFile(filePath,function(err,data){
        if(err)
        {
            return res.end("<h1>Errorrrrrrrrrrrr!</h1>");
        }
        else{
            return res.end(data);
        }
    });
}

const server=http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log('error');
        return;
    }
    console.log("Server is running on port:",port);
});