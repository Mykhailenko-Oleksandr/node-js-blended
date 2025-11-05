import { Router } from 'express';
import {
  createProduct,
  getProducts,
  getProductsById,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:productId', getProductsById);

router.post('/products/:productId', createProduct);

export default router;
