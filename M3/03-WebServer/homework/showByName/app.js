var fs = require("fs");
var http = require("http");

// Escribí acá tu servidor
http
  .createServer(function (req, res) {
    fs.readFile(`${__dirname}/images/${req.url}.jpg`, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("hubo un error");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.end(data);
      }
    });
  })
  .listen(3000, "127.0.0.1");
