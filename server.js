import {createServer} from 'http'
const logger1 = (req, res, next) =>{
    console.log(`${req.url} ${req.method}`)
    console.log("logger middleware 1 - executed")
    next()
}
const logger2 = (req, res, next)=>{
    console.log(`${req.method} ${req.url}`)
    console.log("logger middleware 2 - executed")
    next()
}
const server = createServer((req, res)=>{
    logger1(req, res, ()=>{
        logger2(req, res, ()=>{
            res.end("response")
        })
    })
})
server.listen(8000, ()=>{
    console.log("server is running at port 8000")
})