import ProductModel from "./ProductModel";

interface CategoryModel {
    id: number;
    name: string;
    items: ProductModel[];
}

export default CategoryModel;
