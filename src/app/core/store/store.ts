import { Model } from "../../shared/model/model";

export interface BackendStoreProps {
  storeId?: string;
  name: string;
  logo: string;
  description: string;
  dateCreated?: number;
}

export class Store extends Model<string> {
  static createStore(name: string, logo: string, description: string): Store {
    return new Store("", name, logo, description);
  }

  static createStoreFromJson(json: BackendStoreProps): Store {
    return new Store(
      json.storeId,
      json.name,
      json.logo,
      json.description,
      json.dateCreated
    );
  }

  private _name: string;
  private _logo: string;
  private _description: string;
  private _dateCreated: Date;

  private constructor(
    id?: string,
    name: string,
    logo: string,
    description: string,
    dateCreated?: number
  ) {
    super(id ?? "");
    this._dateCreated = dateCreated ? new Date(dateCreated) : new Date();
    this._name = name.trim();
    // TODO change image static url
    this._logo =
      logo === "logo"
        ? "https://www.shutterstock.com/image-vector/grocery-store-front-commercial-property-260nw-1728521551.jpg"
        : logo;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get logo(): string {
    return this._logo;
  }

  get description(): string {
    return this._description;
  }

  get dateCreated(): Date {
    return this._dateCreated;
  }

  get humanReadableCreatedAt(): string {
    return this._dateCreated.toString();
  }

  public toJson(): BackendStoreProps {
    const parentJson = super.toJson();

    return {
      storeId: this.id,
      name: this.name,
      logo: this.logo,
      description: this.description,
      dateCreated: this.dateCreated.getTime(),
    };
  }
}
