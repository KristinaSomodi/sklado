import axios from "axios";

const URL = `http://localhost:3000/`;
export class BaseService {
  protected instance = axios.create({
    baseURL: URL,
  });
}
