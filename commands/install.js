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
        //yes i know that instead of "Deleted" there should be "Created" here but JavaScript is weird and mixes the logs up, saying that it first deleted the cache and then created. Gotta find a fix ASAP
        console.log("Created cachefile.")
    });
}

function installpkg() {

}

module.exports = { download, installpkg };