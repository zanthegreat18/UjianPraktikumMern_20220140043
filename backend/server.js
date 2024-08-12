import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = 8888;

app.use(cors({
    origin: 'http://localhost:8888'


}));
app.use(express.json());

mongoose.connect(process.env.URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log("error to connect",error);
})

// app.use('/user',userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});