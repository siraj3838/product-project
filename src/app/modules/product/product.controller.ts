import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { ProductModel } from '../product.model';

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const result = await ProductServices.createProductDB(product);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductFromDB();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};

const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};

const getSingleProductUpdate = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const result = await ProductServices.getSingleProductUpdateFromDB(productId, updateData);
        const updatedProduct = await ProductModel.findOne({ _id: productId }).select({
            'variants._id': 0,
            __v: 0,
            _id: 0
        });
        // console.log(updatedProduct);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: updatedProduct,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Error updating the product',
        });
    }
};
const getProductDelete = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getProductDeleteFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Error deleted the product',
        });
    }
};



export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    getSingleProductUpdate,
    getProductDelete
};
