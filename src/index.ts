import express from 'express';
import productRouter from './routes/productRoute';


const app = express();

app.use(express.json());  //trasforma el body a json

const PORT = 3001;

app.get('/ping', (_req, res) => {
    console.log('Request received  at ' + new Date().toLocaleDateString());   
    res.send('pong');
});

app.use('/api/products', productRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));