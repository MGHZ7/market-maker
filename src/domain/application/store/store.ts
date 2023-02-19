import { IReactQueryService } from "../generic/reactQueryService";
import { Store } from "@/domain/core/store/store";
import { TaskService } from "@/domain/core/store/storeService";
import { Data } from "@/domain/shared/data/data";
import { createContext } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";

export interface IStoreAppService extends IReactQueryService<Store, string> {
  readonly listKey: string;
  readonly addKey: string;
}

export class TaskAppService implements IStoreAppService {
  private taskService = new TaskService();
  listKey: string = "stores";
  addKey: string = "addStore";

  state = {};

  useQuery = () => useQuery(this.listKey, () => this.taskService.getAll());

  async getAll(): Promise<Data<Store[], string>> {
    const data = await this.taskService.getAll();

    return data;
  }
  async get(id: string): Promise<Data<Store, string>> {
    throw new Error("Method not implemented.");
  }
  async add(model: Store): Promise<Data<Store, string>> {
    const data = await this.taskService.add(model);

    return data;
  }
  async update(model: Store): Promise<Data<Store, string>> {
    return await this.taskService.update(model);
  }
  async delete(model: Store): Promise<void> {
    await this.taskService.delete(model);
  }

  useGetAllQuery = () => useQuery(this.listKey, this.getAll.bind(this));
  useGetQuery = (id: string) =>
    useQuery([this.listKey, id], () => this.get(id));
  useAddQuery = (queryClient: QueryClient) =>
    useMutation({
      mutationFn: (model: Store) => this.add(model),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.listKey] });
      },
    });
  useDeleteQuery = (queryClient: QueryClient) =>
    useMutation({
      mutationFn: (model: Store) => this.delete(model),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.listKey] });
      },
    });
  useUpdateQuery = (queryClient: QueryClient) =>
    useMutation({
      mutationFn: (model: Store) => this.update(model),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.listKey] });
      },
    });
}

export const TaskAppServiceContext = createContext<IStoreAppService>(
  new TaskAppService()
);
