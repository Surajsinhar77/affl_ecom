const mongoose = require('mongoose');

const prod= true;

function main(url) {
    if(prod){
        const url_prod = "mongodb+srv://learingdevelopment4:0aDP25RcCmnxDFdH@cluster0.nfd8eyo.mongodb.net/?retryWrites=true&w=majority"
        return mongoose.connect(url_prod);
    }
    return mongoose.connect(url);

}

module.exports = {
    main,
}