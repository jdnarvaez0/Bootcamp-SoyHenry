const fs = require("fs");
const request = require("request");

module.exports = {
  date: function (args, print) {
    print(Date());
  },

  pwd: function (args, print) {
    print(process.cwd());
  },

  ls: function (args, print) {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      print(files.join("\n"));
    });
  },

  echo: function (args, print) {
    print(args.join(" "));
  },

  cat: function (args, print) {
    fs.readFile(args[0], "utf-8", function (err, data) {
      if (err) throw err;
      print(data);
    });
  },

  head: function (args, print) {
    fs.readFile(args[0], "utf-8", function (err, data) {
      if (err) throw err;
      print(data.split("\n").splice(0, args[1]).join("\n"));
    });
  },

  tail: function (args, print) {
    fs.readFile(args[0], "utf-8", function (err, data) {
      if (err) throw err;
      print(data.split("\n").splice(-args[1]).join("\n"));
    });
  },

  curl: function (args, print) {
    request(args[0], function (err, data) {
      if (err) throw err;
      print(data.body);
    });
  },

  clear: function (args, print) {
    console.clear();
    process.stdout.write("\nBash 🤖▶ ");
  },
};
