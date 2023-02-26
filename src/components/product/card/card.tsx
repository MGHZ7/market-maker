import { ItemCard } from "@/components/ui/card/itemCard/itemCard";
import { Product } from "@/app/core/category/product/product";

export const ProductCard = (product: Product) => {

    return (
        <ItemCard description={product.description ?? ''} title={product.title} image={{ ...product.image, src: product.image.src ?? '' }} />
    );
};