import { ItemCardProps } from "@/components/ui/card/itemCard/itemCard";
import { MediaCardProps } from "@/components/ui/card/mediaCard/mediaCard";
import { Product } from "@/domain/core/category/product/product";
import { useMemo } from "react";
import { ProductCard } from "../card/card";
import { ItemCardList } from "@/components/ui/card/itemList";

export interface ProductListProps {
    products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {

    const cards = useMemo<ItemCardProps[]>(() => products.map((product) =>
    ({
        description: product.description ?? '',
        image: { ...product.image, src: product.image.src ?? '' },
        title: product.title
    })),
        [products]);

    return (
        <ItemCardList
            cards={cards}
        />
    );
}