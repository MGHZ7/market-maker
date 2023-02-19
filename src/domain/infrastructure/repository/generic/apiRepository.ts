import { FilterAndPaginateType } from "./../../../shared/model/filterAndPagination";
import { get } from "./../../services/api-service";
import { Model } from "@/domain/shared/model/model";
import { Repository } from "./repository";
import { Data } from "@/domain/shared/data/data";
import apiService from "../../services/api-service";

export abstract class ApiRepository<T extends Model<ID>, ID> extends Repository<
  T,
  ID
> {
  protected _basePath: string;
  protected _idKey: string = "id";

  constructor(basePath: string, idKey: string) {
    super();
    this._basePath = basePath;
    this._idKey = idKey;
  }

  /**
   * Add model ID as a query parameter
   *
   * @param id
   * @param params
   * @returns
   */
  protected constructParamsWithId = (id?: ID, params: any = {}) => {
    if (!id) {
      return params;
    }

    const paramsAfterAddingId: { [x: string]: any } = {};
    paramsAfterAddingId[this._idKey] = id;

    return paramsAfterAddingId;
  };

  async getAll(
    filterAndPaginate: FilterAndPaginateType
  ): Promise<Data<T[], ID>> {
    return await apiService.get<FilterAndPaginateType, Data<T[], ID>>(
      `${this._basePath}`,
      filterAndPaginate,
      {}
    );
  }

  async get(id: ID): Promise<Data<T, ID>> {
    const path = `${this._basePath}`;
    const params = this.constructParamsWithId(id);
    return await apiService.get(path, params);
  }

  async add(model: T): Promise<Data<T, ID>> {
    return (await apiService.post<T, Data<T, ID>>(`${this._basePath}`, model))
      .data;
  }

  async update(model: T): Promise<Data<T, ID>> {
    const path = `${this._basePath}/${model.id}`;
    const params = this.constructParamsWithId(model.id);
    return (await apiService.put<T, Data<T, ID>>(path, model)).data;
  }

  async delete(model: T): Promise<void> {
    const path = `${this._basePath}`;
    const params = this.constructParamsWithId(model.id!);
    await apiService.deleteRequest(path, params);
  }
}
