import { Data } from "@/domain/shared/data/data";
import { Model } from "@/domain/shared/model/model";
import { ICRUDData } from "@/domain/shared/service/dataTransfer";

export interface IRepository<T extends Model<ID>, ID>
  extends ICRUDData<T, ID> {}

export abstract class Repository<T extends Model<ID>, ID>
  implements IRepository<T, ID>
{
  abstract getAll(): Promise<Data<T[], ID>>;
  abstract get(id: ID): Promise<Data<T, ID>>;
  abstract add(model: T): Promise<Data<T, ID>>;
  abstract update(model: T): Promise<Data<T, ID>>;
  abstract delete(model: T): Promise<void>;
}

export abstract class ApiRepository<T extends Model<ID>, ID> extends Repository<
  T,
  ID
> {
  private _basePath: string;
  // TODO add api service property

  constructor(basePath: string) {
    super();
    this._basePath = basePath;
  }
}

export abstract class StorageRepository<
  T extends Model<ID>,
  ID
> extends Repository<T, ID> {
  abstract readonly _key: string;

  protected abstract getAllFromStorage(): T[];
  protected abstract getFromStorage(id: ID): T | undefined;
  protected abstract saveToStorage(data: T): void;
  protected abstract saveArrayToStorage(data: T[]): void;
  protected abstract save(data: T[]): void;
  protected abstract encrypt(data: string): void;
  protected abstract decrypt(data: string): void;
}

export abstract class LocalStorageRepository<
  T extends Model<ID>,
  ID
> extends StorageRepository<T, ID> {
  protected getAllFromStorage(): T[] {
    const encryptedData = localStorage.getItem(this._key);
    const data = encryptedData ? this.decrypt(encryptedData) : undefined;
    return data ? JSON.parse(data) : [];
  }

  protected getFromStorage(id: ID): T | undefined {
    const storedData = this.getAllFromStorage();
    return storedData.find((item) => item.id === id);
  }

  /**
   * Save or update data item
   * @param data
   */
  protected saveToStorage(data: T) {
    const storedData = this.getAllFromStorage();
    this.handleSaveOrUpdate(data, storedData);
    this.save(storedData);
  }

  protected handleSaveOrUpdate(data: T, storedData: T[]) {
    if (data.id) {
      const index = storedData.findIndex((item) => item.id === data.id);

      if (index > -1) {
        storedData.splice(index, 1);
      }
    }

    storedData.push(data.toJson());
  }

  protected saveArrayToStorage(data: T[]) {
    const storedData = this.getAllFromStorage();
    data.forEach((item) => {
      this.handleSaveOrUpdate(item, storedData);
    });
    this.save(storedData);
  }

  protected save(data: T[]): void {
    data.sort(this.compare);
    const jsonString = JSON.stringify(data);
    const encryptedData = this.encrypt(jsonString);
    localStorage.setItem(this._key, encryptedData);
  }

  protected deleteFromStorage(data: T): void {
    const storedData = this.getAllFromStorage();
    const index = storedData.findIndex((item) => item.id == data.id);
    if (index > -1) {
      storedData.splice(index, 1);
    }

    this.save(storedData);
  }

  /**
   * The compare function used to sort the stored data, you can override it to customize
   *
   * @param a The first element to compare.
   * @param b The second element to compare.
   * @returns Number value based on the values, If a greater than b, return 1.
   */
  protected compare(a: T, b: T): number {
    return (a.id ?? 0) > (b?.id ?? 0) ? 1 : -1;
  }

  /**
   * Encrypt data before store, override it to customize
   *
   */
  protected encrypt(data: string): string {
    return Buffer.from(data).toString("base64");
  }

  /**
   * Decrypt data before store, override it to customize
   *
   * @param data, A json string
   * @returns An encrypted string
   */
  protected decrypt(data: string): string {
    return Buffer.from(data, "base64").toString();
  }
}
