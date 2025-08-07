interface Product {
    readonly id:string;
    name: string;
    price: number;
}

interface OrderItem {
    product: Product;
    quantity: number;
}

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    node?: string;
}

const product1: Product = {
    id: "P01",
    name: "Áo sơ mi",
    price: 500000,
}

const product2: Product = {
    id: "P02",
    name: "Quần tây",
    price: 400000
}

const myOrder: Order = {
    orderId: "#MAS01",
    customerName: "Nguyễn Văn A",
    items: [
        {product: product1, quantity: 1},
        {product: product2, quantity: 2}
    ],
    node: "Giao sau 18h"
}

function caculateOrderTotal(order: Order): number {
    return order.items.reduce((sum, item )=> {
        return sum + item.product.price * item.quantity; 
    }, 0);
}

function printOrder(order: Order): void {
    console.log(`Đơn hàng: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    order.items.forEach(item =>{
        console.log(`- ${item.product.name} x ${item.quantity} -> ${(item.product.price * item.quantity).toLocaleString()} VND`); 
    });
    console.log(`Tổng cộng: ${caculateOrderTotal(order).toLocaleString()} VND`);

    if (order.node) {
        console.log(`Ghi chú: ${order.node}`);
        
    }
}

printOrder(myOrder);

