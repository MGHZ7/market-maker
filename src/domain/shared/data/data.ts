import { Model } from "../model/model";

/**
 * Data class is made to fetch data from outsource,
 * Use on of the static builder to construct an object
 */
export class Data<T extends Model<ID> | Model<ID>[], ID = string> {
  /**
   * Construct a data object with success status, and it contains the requested data
   *
   * @param data
   * @returns A Data object that is filled with data
   */
  static success<T extends Model<ID> | Model<ID>[], ID = string>(
    data: T
  ): Data<T, ID> {
    return new Data<T, ID>(data, DataState.SUCCESS);
  }

  /**
   * Contract an empty data object that refers to an empty result
   *
   * @returns Empty data object with empty state
   */
  static empty<T extends Model<ID> | Model<ID>[], ID = string>(): Data<T, ID> {
    return new Data<T, ID>(undefined, DataState.SUCCESS);
  }

  /**
   * Contract an error object that refers to a failure in process
   *
   * @param data
   * @returns Data object with error state
   */
  static error<T extends Model<ID> | Model<ID>[], ID = string>(
    data: T
  ): Data<T, ID> {
    return new Data<T, ID>(undefined, DataState.ERROR);
  }

  /**
   * Construct a data object that refers to a data loading state
   *
   * @param data
   * @returns Data object with loading state
   */
  static loading<T extends Model<ID> | Model<ID>[], ID = string>(
    data: T
  ): Data<T, ID> {
    return new Data<T, ID>(undefined, DataState.LOADING);
  }

  private _data?: T;
  private _state: DataState;

  private constructor(data: T | undefined, state: DataState) {
    this._data = data;
    this._state = state;
  }

  public get data(): T | undefined {
    return this._data;
  }

  public get state(): DataState {
    return this._state;
  }

  public get isLoading(): boolean {
    return this.state === DataState.LOADING;
  }

  public get isSuccess(): boolean {
    return this.state === DataState.SUCCESS;
  }

  public get isError(): boolean {
    return this.state === DataState.ERROR;
  }

  public get isEmpty(): boolean {
    return this.state === DataState.EMPTY;
  }
}

export enum DataState {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  EMPTY = "EMPTY",
}
