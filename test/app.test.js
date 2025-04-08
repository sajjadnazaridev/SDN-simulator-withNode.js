const { expect } = require('chai');
const validationIP = require('../src/utils/validationIP');

describe('IP Validation', function () {
    it('should return true for a valid IP address', function () {
        expect(validationIP('192.168.1.1')).to.equal(true);
    });

    it('should return an error message for an invalid IP address', function () {
        expect(validationIP('999.999.999.999')).to.be.a('string');
    });
});