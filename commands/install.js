const { spawn } = require("child_process");
const callfuncargs = require(`../main`);
const fetch = require("node-fetch")

function installfunc() {
    console.log("called install")
}

module.exports = { installfunc };