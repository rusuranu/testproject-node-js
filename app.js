const http=require('http');
const hostname='95.214.11.38';
const port=8080;

const server = http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHEADER=('content-type','text/plane');
	res.end('hello world!');
	});

server.listen(port,hostname,()=>{
	console.log("server running at ${hostname}:${port}");
	console.log("server running at http://%s:%s/",hostname,port); 
	});
