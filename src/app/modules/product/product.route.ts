import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/products', ProductController.createProduct);

router.get('/products', ProductController.getAllProducts);

router.get('/products/:productId', ProductController.getSingleProduct);

router.put('/products/:productId', ProductController.getSingleProductUpdate)

router.delete('/products/:productId', ProductController.getProductDelete)

// order product 
router.post('/orders', ProductController.createOrder);

router.get('/orders', ProductController.getAllOrder);


export const ProductRoutes = router;
