export interface SocialMediaLinksType {
  facebook?: string;
  instagram?: string;
}

export class SocialMediaLinks {
  static createFromJson = (json: SocialMediaLinksType): SocialMediaLinks => {
    return new SocialMediaLinks(json.facebook, json.instagram);
  };

  private _facebook?: string;
  private _instagram?: string;

  constructor(facebook?: string, instagram?: string) {
    this._facebook = facebook;
    this._instagram = instagram;
  }

  get facebook(): string | undefined {
    return this._facebook;
  }
  get instagram(): string | undefined {
    return this._instagram;
  }

  public toJson = (): SocialMediaLinksType => ({
    facebook: this.facebook,
    instagram: this.instagram,
  });
}
