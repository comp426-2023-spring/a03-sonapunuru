#!/usr/bin/env node

//import modules
import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"


//create argument variable to process arguments
var args = minimist(process.argv.slice(2));


//create help message for user to get help and rules
const help_usage = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`; 

//create constant for rules
const rules = `Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`; 


//create console control statements 
if (args.h || args.help) {
	console.log(help_usage);
	process.exit(0);
}

if (args.r || args.rules) {
	console.log(rules);
	process.exit(0);
}

let shot = args._[0]

try {
	console.log(JSON.stringify(rps(shot)));
} catch (e) {
	console.log(help_usage);
	console.log(rules);
}
