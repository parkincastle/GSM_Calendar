var http = require('http'); var fs = require('fs'); // 파일 읽기, 쓰기 등 을 할 수 있는 모듈 

// 404 error message : 페이지 오류가 발생했을때, 
function send404Message(response){ 
    response.writeHead(404,{"Content-Type":"text/plain"}); // 단순한 글자 출력 
    response.write("404 ERROR... "); 
    response.end(); 
} 
    
// 200 Okay : 정상적인 요청 
function onRequest(request, response){ 

    if(request.method == 'GET' && request.url == '/'){ 
        response.writeHead(200,{"Content-Type":"text/html"}); // 웹페이지 출력 
        fs.createReadStream("./index.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함 
    } else { 
        // file이 존재 하지않을때, 
        send404Message(response); 
    } 
} http.createServer(onRequest).listen(8888); 
console.log("Server Created...");​

const http = require('http'); const hostname = 'ip주소'; //내 컴퓨터의 IP 
const port = 3000; 
const server = http.createServer((req, res) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Hello World\n'); 
}); //port 번호와 IP를 통해서 접근한다. 

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`); 
});
