import {createServer} from 'http'
const users = [
    {
        id : 1,
        name : "vinoth"
    },
    {
        id : 2,
        name : "ram"
    }
]
const getReqHandler = (req, res, data)=>{
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(data));
    res.end();
}
const postReqHandler = (req, res)=>{
    let body = '';
    req.on('data', (chunk)=>{
        body += chunk.toString();
    })
    req.on('end', ()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    })
}
const server = createServer((req, res)=>{
    if(req.method === 'GET' && req.url === '/api/users'){
        getReqHandler(req, res, users);
    }else if(req.method === 'POST' && req.url === '/api/users'){
        postReqHandler(req, res);
    }
})
server.listen(8000, ()=>{
    console.log("server is listening at port 8000");
})