import {schema} from 'normalizr';

export const Category = new schema.Entity("category");

const Product = new schema.Entity("product", {
    category: Category
});

export default Product;

