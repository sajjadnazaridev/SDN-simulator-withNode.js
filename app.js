const customCLI = require('./src/services/customCLI');

const cli = customCLI();

async function main() {
    try {

        await customCLI();
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}

main();