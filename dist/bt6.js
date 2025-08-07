"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const product1 = {
    id: "ms01",
    name: "Pc",
    price: 12500000,
    category: {
        id: "P01",
        name: "Đồ công nghệ",
    },
    discount: 10,
};
const product2 = {
    id: "ms02",
    name: "Áo khoác",
    price: 125000,
    category: {
        id: "P02",
        name: "Quần áo",
    },
    discount: 15,
};
const product3 = {
    id: "ms03",
    name: "Bếp",
    price: 1250000,
    category: {
        id: "P03",
        name: "Đồ gia dụng",
    },
    discount: 10,
};
let listProduct = [];
function addProduct(product) {
    listProduct.push(product);
}
addProduct(product1);
addProduct(product2);
addProduct(product3);
function getFinalPrice(product) {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
}
function printProduct(product) {
    console.log(`
        Tên: ${product.name}
        Giá gốc: ${product.price.toLocaleString()} VND
        Giá sau giảm ${getFinalPrice(product).toLocaleString()} VND
        Danh mục ${product.category.name}
        `);
}
listProduct.forEach(printProduct);
//# sourceMappingURL=bt6.js.map