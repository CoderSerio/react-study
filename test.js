const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    let path = req.url.split('?')[0]
    let query = req.url.split('?')[1]
    
    if(path == '/') {
        res.end('hello')
    } else if (path == '/hi') {
        console.log(query)
        res.end(JSON.stringify({
            key: query.split('=')[0],
            value: query.split('=')[1]
        }))
    }
})

server.listen(8080, () => {
    console.log('在8080开启')
})
let obj = {
    hi: ()=> {
        console.log(123)
    }
}

obj.hi()