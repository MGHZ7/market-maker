import { Model } from "./../../shared/model/model";

export interface StoreProps {
  id: string;
  title: string;
  owner: string;
}

export class Store extends Model<string> {
  static createRepo(title: string): Store {
    return new Store("", title);
  }

  static createTaskFromJson(json: StoreProps): Store {
    return new Store(json.id, json.title);
  }

  private _title: string;
  private _createdAt: Date;

  private constructor(id: string, title: string) {
    super(id);
    this._createdAt = new Date();
    this._title = title.trim();
  }

  get title(): string {
    return this._title;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get humanReadableCreatedAt(): string {
    return this._createdAt.toString();
  }

  public toJson(): StoreProps {
    const parentJson = super.toJson();

    return { ...parentJson, title: this.title, createdAt: this.createdAt };
  }
}
