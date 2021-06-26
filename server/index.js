import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';


const __dirname = path.resolve();

const dbUrl = process.env.DB_URL || "mongodb+srv://Ani:asilaydying@cluster0.p6sjf.mongodb.net/Cluster0?retryWrites=true&w=majority"

const app = express();
app.use(cors());

const uri = dbUrl;
const port = process.env.PORT || 4000;
const connect = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(
    (db) => {
        console.log("Connected correctly to server");
    },
    (err) => {
        console.error(err);
    }
);
const server = http.createServer(app);
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('src/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'src', 'build', 'index.html'));
    });
}


export default app