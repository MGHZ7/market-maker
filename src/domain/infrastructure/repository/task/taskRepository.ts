import { Data } from "@/domain/shared/data/data";
import { Store } from "@/domain/core/task/task";
import { ApiRepository } from "../generic/apiRepository";

export class StoreRepository extends ApiRepository<Store, string> {
  get(id: string): Promise<Data<Store, string>> {
    throw new Error("Method not implemented.");
  }
  delete(model: Store): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
