import { Schema, model, connect } from 'mongoose';

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [
    {
      type: string;
      value: string;
    },
  ];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};

export type Order = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}