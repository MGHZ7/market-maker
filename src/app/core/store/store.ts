import { Contacts } from "./contacts/contacts";
import { Address, AddressType } from "./address/address";
import {
  SocialMediaLinks,
  SocialMediaLinksType,
} from "./socialMediaLinks/socialMediaLinks";
import { StoreTheme, StoreThemeType } from "./theme/storeTheme";
import { Model } from "../../shared/model/model";
import { ContactsType as ContactsType } from "./contacts";
import { StoreTime } from "./storeTime/storeTime";

export interface StoreType {
  storeId?: string;
  contacts: ContactsType;
  theme: StoreThemeType;
  socialMediaLinks: SocialMediaLinksType;
  address: AddressType;
  openTime: string;
  closeTime: string;
  name: string;
  logo: string;
  description: string;
  dateCreated?: number;
}

export class Store extends Model<string> {
  static createStoreFromJson(json: StoreType): Store {
    return new Store(json);
  }

  private _name: string;
  private _logo: string;
  private _description: string;
  private _contacts: Contacts;
  private _theme: StoreTheme;
  private _socialMediaLinks: SocialMediaLinks;
  private _address: Address;
  private _openTime: StoreTime;
  private _closeTime: StoreTime;
  private _dateCreated: Date;

  private constructor(data: StoreType) {
    super(data.storeId ?? "");
    this._dateCreated = data.dateCreated
      ? new Date(data.dateCreated)
      : new Date();
    this._name = data.name.trim();
    // TODO change image static url
    this._logo =
      data.logo === "logo"
        ? "https://www.shutterstock.com/image-vector/grocery-store-front-commercial-property-260nw-1728521551.jpg"
        : data.logo;
    this._description = data.description.trim();
    this._contacts = Contacts.createFromJson(data.contacts);
    this._theme = StoreTheme.createFromJson(data.theme);
    this._socialMediaLinks = SocialMediaLinks.createFromJson(
      data.socialMediaLinks
    );
    this._address = Address.createFromJson(data.address);
    this._openTime = StoreTime.fromString(data.openTime);
    this._closeTime = StoreTime.fromString(data.closeTime);
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

  get contacts(): Contacts {
    return this._contacts;
  }
  get address(): Address {
    return this._address;
  }
  get theme(): StoreTheme {
    return this._theme;
  }
  get socialMediaLinks(): SocialMediaLinks {
    return this._socialMediaLinks;
  }
  get openTime(): StoreTime {
    return this._openTime;
  }
  get closeTime(): StoreTime {
    return this._closeTime;
  }

  get dateCreated(): Date {
    return this._dateCreated;
  }

  get humanReadableCreatedAt(): string {
    return this._dateCreated.toString();
  }

  public toJson(): StoreType {
    const parentJson = super.toJson();

    return {
      storeId: this.id,
      name: this.name,
      logo: this.logo,
      description: this.description,
      contacts: this.contacts.toJson(),
      theme: this.theme.toJson(),
      address: this.address.toJson(),
      socialMediaLinks: this.socialMediaLinks.toJson(),
      openTime: this.openTime.toString(),
      closeTime: this.closeTime.toString(),
      dateCreated: this.dateCreated.getTime(),
    };
  }
}
