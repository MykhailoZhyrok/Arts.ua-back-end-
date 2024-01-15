import express from 'express';
import cors from 'cors'; 
import multer from 'multer';

import mongoose from 'mongoose';
import checkAuth from './utils/checkAuth.js'
import * as ArtController from './controllers/ArtController.js';
import * as OrderController from './controllers/OrderController.js'
mongoose.connect(process.env.MONGODB_URI)
.then(()=>
console.log('DB ok')).catch((err)=>console.log('DB error', err));

const app = express();


const storage = multer.diskStorage({
    destination:(_, __, cb)=>{
        cb(null, 'uploads');
    },
    filename: (_, file, cb)=>{
        cb(null, file.originalname);
    }
})

const upload = multer({storage})

app.get('/', (req, res)=>{
    res.send('Hi')
})
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.post('/art/upload', checkAuth, upload.single('image'), (req, res)=>{
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.post('/art', ArtController.createArt);
app.get('/arts/:id', ArtController.getOne );
app.get('/arts', ArtController.getArts);
app.delete('/arts/:id', ArtController.remove);
app.patch('/arts/:id', ArtController.update);
app.post('/order', OrderController.createOrder);

















app.listen(process.env.PORT || '4444', (err)=>{
    if(err){
       return console.log(err);
    }

    console.log('Server OK')
})

