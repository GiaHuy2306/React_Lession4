"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product1 = {
    id: "P01",
    name: "Áo sơ mi",
    price: 500000,
};
const product2 = {
    id: "P02",
    name: "Quần tây",
    price: 400000
};
const myOrder = {
    orderId: "#MAS01",
    customerName: "Nguyễn Văn A",
    items: [
        { product: product1, quantity: 1 },
        { product: product2, quantity: 2 }
    ],
    node: "Giao sau 18h"
};
function caculateOrderTotal(order) {
    return order.items.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log(`
    Đơn hàng: ${order.orderId}
    Khách hàng: ${order.customerName}
    `);
    order.items.forEach(item => {
        console.log(`-${item.product} x ${item.quantity} -> ${(item.product.price * item.quantity).toLocaleString} VND`);
    });
    console.log(`Tổng cộng: ${caculateOrderTotal(order).toLocaleString} VND`);
    if (order.node) {
        console.log(`Ghi chú: ${order.node}`);
    }
}
printOrder(myOrder);
//# sourceMappingURL=bt8.js.map