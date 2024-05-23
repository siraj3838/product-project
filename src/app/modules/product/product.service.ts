import { OrderModel, ProductModel } from '../product.model';
import { Order, Product } from './product.interface';

const createProductDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
};

const getAllProductFromDB = async () => {
    const res = await ProductModel.find({}, { 'variants._id': 0, __v: 0 });
    return res;
};

const getSingleProductFromDB = async (_id: string) => {
    const res = await ProductModel.findOne({ _id }).select({
        'variants._id': 0,
        __v: 0,
    });
    return res;
};

const getSingleProductUpdateFromDB = async (_id: string, updateData: Partial<Product>) => {
    const res = await ProductModel.updateOne({ _id }, { $set: updateData });
    return res;
};

const getProductDeleteFromDB = async (_id: string) => {
    const res = await ProductModel.deleteOne({ _id });
    return res;
};


// order services
const createOrderDB = async (order: Order) => {
    const result = await OrderModel.create(order);
    return result;
};

const getAllOrderFromDB = async () => {
    const res = await OrderModel.find({}, { '__v': 0, _id: 0 });
    return res;
};

export const ProductServices = {
    createProductDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    getSingleProductUpdateFromDB,
    getProductDeleteFromDB,
    createOrderDB,
    getAllOrderFromDB
};
