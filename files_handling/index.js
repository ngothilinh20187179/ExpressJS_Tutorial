const express = require('express');
const router = express.Router();
const path = require('path');

// Static files from the 'public' directory
// Test: http://localhost:3000/files/index.html
router.use(express.static(path.join(__dirname, 'public')));

// Handling File Uploads
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const uploadSingle = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit/file
}).single('myfile');

const uploadMultiple = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }
}).array('myfiles', 10); // Max 10 files

// Test: Use Postman or similar tool to POST a file to http://localhost:3000/files/upload-single 
// with form-data key 'myfile'
router.post('/upload-single', (req, res) => {
    uploadSingle(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).send(`Multer Error: ${err.message}`);
        } else if (err) {
            return res.status(500).send(`Server Error: ${err.message}`);
        }
        res.send(`File uploaded successfully: ${req.file.filename}`);
    });
}); 

router.post('/upload-multiple', (req, res) => {
    uploadMultiple(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).send(`Multer Error: ${err.message}`);
        } else if (err) {
            return res.status(500).send(`Server Error: ${err.message}`);
        }
        const fileNames = req.files.map(file => file.filename).join(', ');
        res.send(`Files uploaded successfully: ${fileNames}`);
    });
});

// Handling File Downloads
// Test: http://localhost:3000/files/download/1764564665268-ExpressJs.png
router.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);
    res.download(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

module.exports = router;