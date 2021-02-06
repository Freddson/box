const { spawn } = require("child_process");
const fetch = require("node-fetch");
const fs = require("fs");

const package = undefined;

function download() {
fs.readFile('.boxcache', function(err, data) {
    const getdata = data;
    const package = getdata.toString()
    });
    fs.unlink('.boxcache', function (err) {
        if (err) throw err;
    });
}

function installpkg() {
    console.log("called install")
}

module.exports = { download, installpkg };