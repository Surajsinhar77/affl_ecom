const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload/'); // Set the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Set the filename for the uploaded file
    },
});
    
// Create a Multer instance with the storage configuration
module.exports = multer({ storage: storage });
