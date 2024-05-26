import { Product } from "../types";
import productData from "./products.json";

const products : Array<Product> =  productData as Array<Product>;

export const getProducts = () => products;

export const addProduct = (product: any) => null

