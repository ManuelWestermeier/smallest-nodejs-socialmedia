var i = 0; require("http").createServer((req, res) => req.url == "/decrease" ? res.end(--i) : res.end(++i)).listen(80)
