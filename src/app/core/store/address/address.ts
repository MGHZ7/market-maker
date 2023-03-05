export interface AddressType {
  location?: string;
  map?: string;
}

export class Address {
  static createFromJson = (json: AddressType): Address => {
    return new Address(json.location, json.map);
  };
  private _map?: string;
  private _location?: string;

  constructor(location?: string, map?: string) {
    this._map = map;
    this._location = location;
  }

  public toJson = (): AddressType => ({
    map: this._map,
    location: this._location,
  });
}
