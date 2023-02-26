import { Product } from "@/app/core/category/product/product";
import { ProductList, ProductListProps } from "@/components/product/list/cardList";
import { AdminDashboardLayout } from "../../layout";

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