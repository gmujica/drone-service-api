const router = require('express').Router();
const UploadFile = require('../controllers/Upload');

router.post('/',  UploadFile);

module.exports = router;