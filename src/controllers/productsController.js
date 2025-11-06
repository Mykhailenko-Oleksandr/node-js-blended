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
  const newProduct = await Product.create(req.body);

  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  });

  if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
  }

  res.status(200).json(product);
};

export const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
  }

  res.status(200).json(product);
};
