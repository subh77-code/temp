const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to home page')
    }
    if(req.url==='/about'){
        res.end('welcome to history')
    }
    res.end(`
        <h1>oops</h1>
    `)
    
})
//this is meant to work
server.listen(5000)