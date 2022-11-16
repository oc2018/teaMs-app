import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import Auth from './middleware/auth.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({limit: '30mb', extendend: true }));

const PORT = process.env.PORT || 5000;

app.use('/user', userRoutes);
app.use('/posts', Auth, postRoutes);

// app.get('/',(req,res) =>{
//     res.send('Hello world');
// });

mongoose.connect(process.env.CONNECTION_URL, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => app.listen(PORT, () => console.log(`Running on port: ${PORT}`))).catch((error) => console.log(error));

