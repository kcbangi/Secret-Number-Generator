'use strict';
module.exports = function() {
    
    const randomNumberGenerator = Math.floor(Math.random() * 1000000);

    function secretNumber() {
        return randomNumberGenerator;
    };
    return secretNumber;

};
