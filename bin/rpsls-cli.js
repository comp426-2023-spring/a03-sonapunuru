#!/usr/bin/env node

//import necessary modules
import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js"


//create argument variable to process arguments
var args = minimist(process.argv.slice(2));


//create help_usage variable to output help and rules for game
const help_usage = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}
`;


//create rules variable to output rules
const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors
`;


//create statements to manage output statements
if (args.h || args.rules) {
        console.log(help_usage);
        process.exit(0);
}

if (args.r || args.rules) {
        console.log(rules);
        process.exit(0);
}

let shot = args._[0]

try {
        console.log(JSON.stringify(rpsls(shot)));
} catch (e) {
        console.log(rules);
}
