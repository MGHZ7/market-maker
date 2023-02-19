import { Data } from "@/domain/shared/data/data";
import { LocalStorageRepository } from "../generic/repository";
import { Task } from "@/domain/core/task/task";

export class TaskStorageRepoitory extends LocalStorageRepository<Task, string> {
  _key: string = "tasks";

  async getAll(): Promise<Data<Task[], string>> {
    const json: any[] = this.getAllFromStorage();
    return Data.success<Task[], string>(
      json.map((item: any) => Task.createTaskFromJson(item))
    );
  }

  async get(id: string): Promise<Data<Task>> {
    const data = this.getAllFromStorage();
    const task = data?.find((task: Task) => task.id === id);
    return task ? Data.success<Task>(task) : Data.empty<Task>();
  }

  async add(model: Task): Promise<Data<Task, string>> {
    this.saveToStorage(model);

    return Data.success<Task, string>(model);
  }
  async update(model: Task): Promise<Data<Task, string>> {
    this.saveToStorage(model);

    return Data.success<Task, string>(model);
  }
  async delete(model: Task): Promise<void> {
    this.deleteFromStorage(model);
  }
}
