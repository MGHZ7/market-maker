import { IReactQueryService } from "./../generic/reactQueryService";
import { Task } from "@/domain/core/task/task";
import { TaskService } from "@/domain/core/task/taskService";
import { Data } from "@/domain/shared/data/data";
import { createContext } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";

import React from "react";

export interface ITaskAppService extends IReactQueryService<Task, string> {
  readonly listKey: string;
  readonly addKey: string;
}

export class TaskAppService implements ITaskAppService {
  private taskService = new TaskService();
  listKey: string = "tasks";
  addKey: string = "addTask";

  state = {};

  useQuery = () => useQuery(this.listKey, () => this.taskService.getAll());

  async getAll(): Promise<Data<Task[], string>> {
    const data = await this.taskService.getAll();

    return data;
  }
  async get(id: string): Promise<Data<Task, string>> {
    throw new Error("Method not implemented.");
  }
  async add(model: Task): Promise<Data<Task, string>> {
    const data = await this.taskService.add(model);

    return data;
  }
  async update(model: Task): Promise<Data<Task, string>> {
    return await this.taskService.update(model);
  }
  async delete(model: Task): Promise<void> {
    await this.taskService.delete(model);
  }

  useGetAllQuery = () => useQuery(this.listKey, this.getAll.bind(this));
  useGetQuery = (id: string) =>
    useQuery([this.listKey, id], () => this.get(id));
  useAddQuery = (queryClient: QueryClient) =>
    useMutation({
      mutationFn: (model: Task) => this.add(model),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.listKey] });
      },
    });
  useDeleteQuery = (queryClient: QueryClient) =>
    useMutation({
      mutationFn: (model: Task) => this.delete(model),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.listKey] });
      },
    });
  useUpdateQuery = (queryClient: QueryClient) =>
    useMutation({
      mutationFn: (model: Task) => this.update(model),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.listKey] });
      },
    });
}

export const TaskAppServiceContext = createContext<ITaskAppService>(
  new TaskAppService()
);
