import { ItemCardProps } from "@/components/ui/card/itemCard/itemCard";
import { MediaCardProps } from "@/components/ui/card/mediaCard/mediaCard";
import { Product } from "@/domain/core/category/product/product";
import { useMemo } from "react";
import { ProductCard } from "../card/card";
import { ItemCardList } from "@/components/ui/card/itemList";
import { FilterBarWithAdd } from "@/components/ui/filterAndSearch/layout/withAdd/filterBarWithAdd";

export interface ProductListProps {
    products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {

    return (
        <>
            <FilterBarWithAdd className={`mb-4`}>
                <h4>Filter</h4>
            </FilterBarWithAdd>
            <ItemCardList>
                {products.map((product) => (<ProductCard key={product.id} {...product} id={product.id} toJson={product.toJson} />))}
            </ItemCardList>
        </>
    );
}