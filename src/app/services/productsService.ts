import { Product } from "../types/Product";
import { BaseService } from "./baseService";

export default class ProductsService extends BaseService {
  static deleteProduct(id: string) {
    throw new Error("Method not implemented.");
  }
  //get products
  async getProducts(sortBy: string, order: string): Promise<Product[]> {
    const res = await this.instance.get(
      `/products?_sort=${sortBy}&_order=${order}`
    );
    return res.data;
  }

  async getProduct(id: string) {
    const res = await this.instance.get(`/products/${id}`);
    return res.data;
  }

  //delete

  async deleteProduct(id: string) {
    const res = await this.instance.delete(`products/${id}`);
    return res;
  }

  //post

  async postProduct(productData: Product) {
    const res = await this.instance.post(`products`, productData);
    return res;
  }

  //put
  async editProduct(data: Product, id: string) {
    const res = await this.instance.put(`products/${id}`, data);
    return res;
  }
}
