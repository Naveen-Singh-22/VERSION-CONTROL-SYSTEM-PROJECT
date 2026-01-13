const yargs = require('yargs');
const {hideBin} = require("yargs/helpers"); //helps in to read arguement attached with command

const { initRepo } = require("./controllers/init");

yargs(hideBin(process.argv))
    .command(
    "init",
    "Initialise a new repository",
    {},
    initRepo
).demandCommand(1,"You need at least one command").help().argv;

