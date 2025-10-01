import {createServer} from 'http'
const users = [
    {
        id : 1,
        name : "vinoth"
    }, 
    {
        id : 2,
        name : "mani"
    }
]
const getRequestHandler = (req, res)=>{
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()    
}
const postRequestHandler = (req, res)=>{
    let body = '';
    req.on('data', (chunk)=>{
        body += chunk.toString();
    })
    req.on('end', ()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser))
        res.end()
    })
}
const server = createServer((req, res)=>{
    if(req.method === 'GET' && req.url === '/api/users'){
        getRequestHandler(req, res);
    }
    else if(req.method === 'POST' && req.url === '/api/users'){
        postRequestHandler(req, res);
    }
})
server.listen(8000, ()=>{
    console.log("server is running at port 8000")
})