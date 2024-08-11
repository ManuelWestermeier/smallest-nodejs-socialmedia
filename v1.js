var i = 0; require("http").createServer((_, res) => res.end(++i)).listen(80)
