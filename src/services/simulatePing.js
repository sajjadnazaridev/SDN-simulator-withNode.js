/**
 * Simulate a ping to a given IP address.
 * @param {string} ip - The IP address to ping.
 * @returns {Promise<void>} - A promise that resolves when the ping simulation is complete.
 */
function simulatePing(ip) {
    console.log(`Sending ICMP Request to ${ip}...`);

    const responseTime = Math.floor(Math.random() * 100) + 30;
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Received ICMP Reply from ${ip} in ${responseTime} ms.`);
            resolve(responseTime);
        }, responseTime);
    });
}

module.exports = simulatePing;