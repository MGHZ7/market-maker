import { ItemCardProps } from "@/components/ui/card/itemCard/itemCard";
import { MediaCardProps } from "@/components/ui/card/mediaCard/mediaCard";
import { Product } from "@/domain/core/category/product/product";
import { useMemo } from "react";
import { ProductCard } from "../card/card";
import { ItemCardList } from "@/components/ui/card/itemList";
import { FilterBarWithAdd } from "@/components/ui/filterAndSearch/layout/withAdd/filterBarWithAdd";
import { FilterBarPropsWithSearch } from "@/components/ui/filterAndSearch/layout/withSearchAndAdd/filterBarWithSearchAndAdd";

export interface ProductListProps {
    products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {

    return (
        <>
            <FilterBarPropsWithSearch className={`mb-4`} />
            <ItemCardList>
                {products.map((product) => (<ProductCard key={product.id} {...product} id={product.id} toJson={product.toJson} />))}
            </ItemCardList>
        </>
    );
}