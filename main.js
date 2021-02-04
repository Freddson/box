#!/usr/bin/env node

//requiring packages
const fetch = require("node-fetch")
//call child process
const cp = require("child_process")

//args
const args = process.argv
const callfuncargs = process.argv[3]

//calling specific commandfiles
const install = require(`./commands/install`)
const help = require(`./commands/help`)
const rem = require(`./commands/remove`)
const search = require(`./commands/search`)

//export needed for install, remove and search commandfiles
module.exports.callfuncargs = process.argv[3];

//console.log(args[3])

//check if command is in func_array
if(args[2] !== null && args[2] !== undefined) {
    //if found, call the file from the commands folder with the same name
    switch(args[2]){
        case "install":
            install.installfunc(callfuncargs);
            break;
        case "remove":
            rem.rempackage(callfuncargs);
            break;
        case "search":
            search.searchpackage(callfuncargs);
            break;
        case "help":
            help.help();
            break;
        default:
            console.log("box: ERROR: This command doesn't exist!")

    }
}
else {
    help.help();
}