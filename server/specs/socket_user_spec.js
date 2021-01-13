const assert = require('assert');
const User = require('../models/socket.io/user.js');

describe('User', function () {
    beforeEach(function () {
        user = new User('ChrisP', 3, 0, '1135813');
    });

    it('should have a name');
    it('should have wins');
    it('should have losses');
    it('should have an ID');
    
});