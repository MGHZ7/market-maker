import { StoreRepository } from "../../infrastructure/repository/store/storeRepository";
import { ICRUDData } from "@/app/shared/service/dataTransfer";
import { Data } from "@/app/shared/data/data";
import { Store } from "./store";

export interface ITaskService extends ICRUDData<Store, string> {}

export class TaskService implements ITaskService {
  private storeApiRepository = new StoreRepository("stores", "storeId");

  getAll(): Promise<Data<Store[], string>> {
    return this.storeApiRepository.getAll({});
  }
  get(id: string): Promise<Data<Store, string>> {
    return this.storeApiRepository.get(id);
  }
  async add(model: Store): Promise<Data<Store, string>> {
    return this.storeApiRepository.add(model);
  }
  update(model: Store): Promise<Data<Store, string>> {
    return this.storeApiRepository.update(model);
  }
  delete(model: Store): Promise<void> {
    return this.storeApiRepository.delete(model);
  }
}
