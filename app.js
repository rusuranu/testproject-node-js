const http=require('http');
const fs=require('fs');
const htm=fs.readFileSync('index.html','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
const hostname='95.214.11.38';
const port=8080;

const server = http.createServer((req,res)=>{
	//res.statusCode=200;
	res.writeHead(200);
	res.setHeader=('content-type','text/html');
	res.end(htm);
	});

server.listen(port,hostname,()=>{
	console.log("server running at ${hostname}:${port}");
	console.log("server running at http://%s:%s/",hostname,port); 
	console.log(htm);
	});
