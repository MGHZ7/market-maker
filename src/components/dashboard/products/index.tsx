import { Product } from "@/app/core/category/product/product";
import { AdminDashboardLayout } from "../layout";
import { ProductList, ProductListProps } from "@/components/product/list/cardList";

export interface ProductsProps {
    products: Product[];
}

export const Products = ({ products }: ProductsProps) => {

    return (
        <AdminDashboardLayout>
            <ProductList products={products} />
        </AdminDashboardLayout>
    );
}