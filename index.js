const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const uploadRoute = require('./routes/Upload');

dotenv.config();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/api/upload', fileUpload({ createParentPath: true }), uploadRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});