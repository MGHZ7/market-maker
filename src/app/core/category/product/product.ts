import { MediaCardProps } from "../../../../components/ui/card/mediaCard/mediaCard";
import { ImageType } from "../../shared/image/image";
import { Model } from "@/app/shared/model/model";

export class Product extends Model {
  static createProductFromJson(json: any): Product {
    return new Product(
      json.id,
      { src: json.src },
      json.title,
      json.description
    );
  }

  image: ImageType;
  title: string;
  description?: string;

  constructor(
    id: string,
    image: ImageType,
    title: string,
    description?: string
  ) {
    super(id);
    this.image = image;
    this.title = title;
    this.description = description;
  }
}
