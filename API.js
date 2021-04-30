import {address} from "./ADDRESS.js";

const call = async (url) => {
    const req = await fetch(address + url);
    const result = await req.json();
    return result;
}

export const getProductsData = async (sort= null) => {
    return await call(`products${sort ? `?sort=${sort}` : ''}`);
}

export const gerProductsCategories = async () => {
    return await call('products/categories')
}


