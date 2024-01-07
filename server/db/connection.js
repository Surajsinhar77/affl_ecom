const mongoose = require('mongoose');

function main(url) {
    return mongoose.connect(url);
}

module.exports = {
    main,
}