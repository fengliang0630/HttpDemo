import * as http from "http";

const server = http.createServer((req, res) => {
    res.end('hello Node 1111');
})


server.listen('8000');