const mongoose = require('mongoose');

<<<<<<< HEAD
const prod= true;

function main(url) {
    if(prod){
        const url_prod = "mongodb+srv://learingdevelopment4:0aDP25RcCmnxDFdH@cluster0.nfd8eyo.mongodb.net/?retryWrites=true&w=majority"
        return mongoose.connect(url_prod);
    }
    return mongoose.connect(url);

=======
function main(url) {
    return mongoose.connect(url);
>>>>>>> 518898d19968b22717f24d3365a9ea6739f44340
}

module.exports = {
    main,
}