import { Data } from "@/app/shared/data/data";
import { Store } from "@/app/core/store/store";
import { ApiRepository } from "../generic/apiRepository";

const STORES_BASE_PATH = "/stores";
const STORE_ID_KEY = "/storeId";

export class StoreRepository extends ApiRepository<Store, string> {
  constructor() {
    super(STORES_BASE_PATH, STORE_ID_KEY);
  }
}
