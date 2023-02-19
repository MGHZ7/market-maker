import { TaskStorageRepoitory } from "./../../infrastructure/repository/task/taskRepository";
import { ICRUDData } from "@/domain/shared/service/dataTransfer";
import { Task } from "./task";
import { Data } from "@/domain/shared/data/data";

export interface ITaskService extends ICRUDData<Task, string> {}

export class TaskService implements ITaskService {
  private taskStorageRepository = new TaskStorageRepoitory();

  getAll(): Promise<Data<Task[], string>> {
    return this.taskStorageRepository.getAll();
  }
  get(id: string): Promise<Data<Task, string>> {
    return this.taskStorageRepository.get(id);
  }
  async add(model: Task): Promise<Data<Task, string>> {
    const tasks = (await this.getAll()).data;
    const newId: string = (
      tasks?.length ? +(tasks[0].id ?? 0) + 1 : 1
    ).toString();
    return this.taskStorageRepository.add(
      Task.createTaskFromJson({ title: model.title, id: newId })
    );
  }
  update(model: Task): Promise<Data<Task, string>> {
    return this.taskStorageRepository.update(model);
  }
  delete(model: Task): Promise<void> {
    return this.taskStorageRepository.delete(model);
  }
}
