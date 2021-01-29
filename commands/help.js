function help () {
    console.log("Box - a simple package manager.")
    console.log("Usage:")
    console.log("box install <package> - install a package")
    console.log("box remove <package> - remove a package from the system")
    console.log("box search <package> - search for a package in the package repository")
    console.log("box help - show this command")
}
module.exports = { help };