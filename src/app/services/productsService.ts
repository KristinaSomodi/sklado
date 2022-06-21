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

  //delete

  async deleteProduct(id: string) {
    const res = await this.instance.delete(`products/${id}`);
    return res;
  }
}
