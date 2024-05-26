import express from 'express';  //ESModule

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Fetching products');
})

router.post('/', (_req, res) => {
    res.send('Adding a product');
})


export default router;  //ESModule