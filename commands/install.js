const { spawn } = require("child_process");
const callfuncargs = require(`../main`);
const properargs = callfuncargs.toString()
const fetch = require("node-fetch");
const path = require('path');

function download() {
    console.log("called download")
    //const linkarray = ["https://github.com/Freddson/box-packages/"]
    //linkarray.push(callfuncargs)
    //linkarray.push("/info.json")
    //const arraytostring = linkarray.toString()
    //console.log(arraytostring)
    //fetch(`https://github.com/Freddson/box-packages/${callfuncargs}/info.json`)
    //.then(res => res.json())
    //.then(json => console.log(json));
    const link = path.join("https://github.com/Freddson/box-packages/", properargs, "/info.json")
    console.log(link)
}

function installpkg() {
    console.log("called install")
}

module.exports = { download, installpkg };