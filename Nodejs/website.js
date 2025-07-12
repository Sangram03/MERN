const { fs } = require('fs');
const http = require('http');
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

const port = process.env.PORT || 3000 ;



const server = http.createServer((req,res) =>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
   

     if (req.url == '/') {
        res.statusCode = 200; // OK
        res.end('<h1> This is CodeWithHarry </h1> <p> Hey this is the way to rock the world! </p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200; // OK
        res.end('<h1> This is CodeWithHarry </h1> <p> Hey this is the way to rock the world! </p>');
    }
    else if (req.url == '/hello') {
        res.statusCode = 200; // OK
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else {
        // res.harry();
        res.statusCode = 404; // OK
        res.end('<h1> Not found </h1> <p> Hey this page was not found on this server </p>');


    }
    
    
    
})


server.listen(port ,() => {
    console.log(`Server is listening on port ${port}`);
    
});
