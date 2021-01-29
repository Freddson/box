const { exec } = require("child_process");
const callfuncargs = require(`../main`);
//const grep = exec(`grep -nr ${callfuncargs}* /usr/local`)


function rempackage() {
    console.log("called remove")
    if (callfuncargs !== undefined && callfuncargs !== null) {

    }
}

module.exports = { rempackage };