export interface AddressType {
  map?: string;
  location?: string;
}

export class Address {
  private _map?: string;
  private _location: string;

  constructor(location: string, map?: string) {
    this._map = map;
    this._location = location;
  }

  public toJson = (): AddressType => ({
    map: this._map,
    location: this._location,
  });
}
