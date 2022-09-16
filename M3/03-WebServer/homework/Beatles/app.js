var http = require("http");
var fs = require("fs");
const data = require("./api");
const beatles = require("./api");

http
  .createServer(function (req, res) {
    if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    }

    if (req.url.substring(0, 5) === "/api/" && req.url.length > 5) {
      let findBeatles = req.url.split("/").pop();
      let foundBeatle = beatles.find(
        (beatle) => findBeatles === encodeURI(beatle.name)
      );
      if (foundBeatle) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(foundBeatle));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("No existe el Beatle");
      }
    }

    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const index = fs.readFileSync(`${__dirname}/index.html`);
      res.end(index);
    }

    let findBeatle = req.url.split("/").pop();
    let foundBeatle = beatles.find((b) => findBeatle === encodeURI(b));
    if (foundBeatle) {
      res.writeHead(200, { "Content-Type": "text/html" });
      let read = fs.readFileSync(`${__dirname}/beatles.html`, "utf-8");
      read = read.replace(/{name}/g, foundBeatle.name);
      read = read.replace("{birthdate", foundBeatle.birthdate);
      read = read.replace("{profilePic}", foundBeatle.profilePic);
      res.end(read);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("NO existe ese Beatle");
    }
  })
  .listen(3000, "127.0.0.1");
