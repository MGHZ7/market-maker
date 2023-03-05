export interface StoreThemeType {
  primaryColor: string;
  backgroundColor: string;
  cardColor: string;
  secondaryColor: string;
}

export class StoreTheme {
  static createFromJson = (json: StoreThemeType): StoreTheme => {
    return new StoreTheme(
      json.primaryColor,
      json.backgroundColor,
      json.cardColor,
      json.secondaryColor
    );
  };

  private _primaryColor: string;
  private _backgroundColor: string;
  private _cardColor: string;
  private _secondaryColor: string;

  constructor(
    primaryColor: string,
    backgroundColor: string,
    cardColor: string,
    secondaryColor: string
  ) {
    this._primaryColor = primaryColor;
    this._backgroundColor = backgroundColor;
    this._cardColor = cardColor;
    this._secondaryColor = secondaryColor;
  }

  get primaryColor(): string {
    return this._primaryColor;
  }
  get backgroundColor(): string {
    return this._backgroundColor;
  }
  get cardColor(): string {
    return this._cardColor;
  }
  get secondaryColor(): string {
    return this._secondaryColor;
  }

  public toJson = (): StoreThemeType => ({
    primaryColor: this.primaryColor,
    backgroundColor: this.backgroundColor,
    cardColor: this.cardColor,
    secondaryColor: this.secondaryColor,
  });
}
