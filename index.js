const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('VNTALKING: Hello Node.js')
})
server.listen(3000)