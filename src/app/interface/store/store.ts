import { IReactQueryService } from "../generic/reactQueryService";
import { Store } from "@/app/core/store/store";
import { StoreService } from "@/app/core/store/storeService";
import { Data } from "@/app/shared/data/data";
import { createContext } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";

export interface IStoreAppService extends IReactQueryService<Store, string> {
  readonly listKey: string;
}

export class StoreAppService implements IStoreAppService {
  private storeSerive = new StoreService();
  listKey: string = "stores";

  state = {};

  async getAll(): Promise<Data<Store[], string>> {
    const data = await this.storeSerive.getAll();

    return data;
  }
  async get(id: string): Promise<Data<Store, string>> {
    throw new Error("Method not implemented.");
  }
  async add(model: Store): Promise<Data<Store, string>> {
    const data = await this.storeSerive.add(model);

    return data;
  }
  async update(model: Store): Promise<Data<Store, string>> {
    return await this.storeSerive.update(model);
  }
  async delete(model: Store): Promise<void> {
    await this.storeSerive.delete(model);
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
