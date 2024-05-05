import express from 'express';
import { createPorduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productControllers.js';

const router = express.Router();

router.get('/', getProducts)
router.post('/new', createPorduct)
router.get('/product/:id', getProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

export default router;