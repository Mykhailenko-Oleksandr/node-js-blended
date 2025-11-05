import createHttpError from 'http-errors';
import { Product } from '../models/product.js';

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

export const getProductsById = async (req, res, next) => {
  const { productId } = req.params;

  const products = await Product.findById(productId);

  if (!products) {
    next(createHttpError(404, 'Product not found'));
    return;
  }

  res.status(200).json(products);
};

export const createProduct = async (req, res) => {
  res.status(201).json();
};
