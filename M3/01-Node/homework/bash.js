const process = require("node:process");
const commands = require("./commands/index");

const print = function (output) {
  process.stdout.write(output);
  process.stdout.write("\nBash 🤖▶ ");
};

process.stdout.write("Bash 🤖▶ ");
process.stdin.on("data", function (data) {
  let args = data.toString().trim().split(" ");
  let cmd = args.shift();

  if (commands[cmd]) {
    commands[cmd](args, print);
  } else {
    print("Command no found");
  }
});
