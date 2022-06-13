import { Product } from "../types/Product";
import { BaseService } from "./baseService";

export default class ProductsService extends BaseService {
  //get products
  async getProducts(): Promise<Product[]> {
    const res = await this.instance.get("posts");
    return res.data;
  }
}
