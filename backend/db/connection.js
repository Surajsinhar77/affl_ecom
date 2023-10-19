const mongoose = require('mongoose');

async function main() {
    return await mongoose.connect('mongodb://127.0.0.1:27017/demodb');
}

module.exports  = main;