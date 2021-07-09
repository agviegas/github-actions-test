const core = require("@actions/core");

try {
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const time = new Date().toTimeString();
  core.setOutput("time", time);

//throw new Error("Example error message");

} catch (error) {
  core.setFailed(error.message);
}
