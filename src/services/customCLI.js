const inquirer = require('inquirer');
const validationIP = require('../utils/validationIP');
const simulatePing = require('./simulatePing');

async function customCLI() {
    console.log('Welcome to the ICMP Ping Simulator (Windows version).');

    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'ip',
                message: 'Enter the IP address to ping:',
                validate: validationIP
            }
        ]);

        const ip = answers.ip;
        await simulatePing(ip);
        console.log('Ping simulation completed.');

        const reAsk = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'repeat',
                message: 'Do you want to ping another IP address?',
                default: false
            }
        ]);

        if (reAsk.repeat) {
            console.log('Restarting the ICMP Ping Simulator...');
            await customCLI();
        }
        else {
            console.log('Thank you for using the ICMP Ping Simulator!');
        }

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

module.exports = customCLI;