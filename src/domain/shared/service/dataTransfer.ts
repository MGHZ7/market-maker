import { Model } from "@/domain/shared/model/model";
import { Data } from "../data/data";
import { FilterAndPaginateType } from "../model/filterAndPagination";

/**
 * Fetch data from source
 */
export interface IFetch<T extends Model<ID>, ID = string> {
  getAll(searchAndPagination?: FilterAndPaginateType): Promise<Data<T[], ID>>;
  get(id: ID): Promise<Data<T, ID>>;
}

/**
 * Add data to source
 */
export interface IAdd<T extends Model<ID>, ID> {
  add(model: T): Promise<Data<T, ID>>;
}

/**
 * update data
 */
export interface IUpdate<T extends Model<ID>, ID> {
  update(model: T): Promise<Data<T, ID>>;
}

/**
 * Delete data from source
 */
export interface IDelete<T> {
  delete(model: T): Promise<void>;
}

/**
 * CRUD data
 */
export interface ICRUDData<T extends Model<ID>, ID>
  extends IFetch<T, ID>,
    IAdd<T, ID>,
    IUpdate<T, ID>,
    IDelete<T> {}
