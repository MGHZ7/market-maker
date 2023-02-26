import { Products } from "@/components/dashboard/products";
import { Product } from "@/app/core/category/product/product";
import { GetStaticProps } from "next";

export interface ServerDashboardProductsProps {
    products: Product[];
};

export const ServerDashboardProducts = ({ products }: ServerDashboardProductsProps) => {

    return (
        <Products products={products} />
    );
};

export default ServerDashboardProducts;

export const getStaticProps: GetStaticProps = (context: any) => {
    return {
        props: {
            products: [
                {
                    id: "1",
                    image: {
                        src: "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    },
                    title: "Title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit ornare sem a molestie. Cras ut purus quis odio luctus euismod eget at dui.",
                },
                {
                    id: "2",
                    image: {
                        src: "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    },
                    title: "Title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit ornare sem a molestie. Cras ut purus quis odio luctus euismod eget at dui.",
                },
                {
                    id: "3",
                    image: {
                        src: "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    },
                    title: "Title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit ornare sem a molestie. Cras ut purus quis odio luctus euismod eget at dui.",
                },
                {
                    id: "4",
                    image: {
                        src: "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    },
                    title: "Title",
                    description: "Description",
                },
                {
                    id: "5",
                    image: {
                        src: "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    },
                    title: "Title",
                    description: "Description",
                },
                {
                    id: "6",
                    image: {
                        src: "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    },
                    title: "Title",
                    description: "Description",
                },
                {
                    id: "7",
                    image: {
                        src: "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    },
                    title: "Title",
                    description: "Description",
                },
            ]
        }
    }
}