import { Task } from "@/domain/core/task/task";
import { Model } from "@/domain/shared/model/model";
import { ICRUDData } from "./../../shared/service/dataTransfer";
import { QueryClient, UseMutationResult, UseQueryResult } from "react-query";
import { Data } from "@/domain/shared/data/data";

export interface IReactQueryService<T extends Model<ID>, ID>
  extends ICRUDData<T, ID> {
  readonly listKey: string;

  useGetAllQuery: () => UseQueryResult<Data<T[], ID>>;
  useGetQuery: (id: ID) => UseQueryResult<Data<T, ID>>;
  useAddQuery: (
    queryClient: QueryClient
  ) => UseMutationResult<Data<T, ID>, unknown, T, unknown>;
  useDeleteQuery: (
    queryClient: QueryClient
  ) => UseMutationResult<void, unknown, T, unknown>;
  useUpdateQuery: (
    queryClient: QueryClient
  ) => UseMutationResult<Data<T, ID>, unknown, Task, unknown>;
}
