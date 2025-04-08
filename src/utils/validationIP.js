function validationIP(ip) {
    const regex = /^(25[0-5]|2[0-4]\d|[01]?\d?\d)(\.(25[0-5]|2[0-4]\d|[01]?\d?\d)){3}$/;
    if (regex.test(ip)) {
        return true;
    }
    return 'Please enter a valid IPv4 address.';
}

module.exports = validationIP;