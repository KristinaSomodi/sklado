import { Product } from "../types/Product";
import { BaseService } from "./baseService";

export default class ProductsService extends BaseService {
  //get products
  async getProducts(sortBy: string, order: string): Promise<Product[]> {
    const res = await this.instance.get(
      `/products?_sort=${sortBy}&_order=${order}`
    );
    return res.data;
  }
}
