const customCLI = require('./src/services/customCLI');

async function main() {
    try {

        await customCLI();
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}

main();