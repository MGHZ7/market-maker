export interface BackendContactsType {
  whatsappNumber: string;
  phoneNumber?: string;
  telephoneNumber?: string;
}

export class Contacts {
  private _phoneNumber: string;
  private _telephoneNumber: string;
  private _whatsappNumber: string;

  static CreateFromJson = (json: BackendContactsType): Contacts => {
    return new Contacts(
      json.whatsappNumber,
      json.telephoneNumber,
      json.phoneNumber
    );
  };

  constructor(
    whatsappNumber: string,
    phoneNumber: string = "",
    telephoneNumber: string = ""
  ) {
    this._whatsappNumber = whatsappNumber;
    this._phoneNumber = phoneNumber;
    this._telephoneNumber = telephoneNumber;
  }

  get whatsappNumber(): string {
    return this._whatsappNumber;
  }
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  get telephoneNumber(): string {
    return this._telephoneNumber;
  }

  public toJson = (): BackendContactsType => ({
    whatsappNumber: this.whatsappNumber,
    phoneNumber: this.phoneNumber,
    telephoneNumber: this.telephoneNumber,
  });
}
