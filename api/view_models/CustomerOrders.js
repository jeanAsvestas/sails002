class CustomerOrders {
    constructor(customer, productOrders, compactData = true) {
        this.customer = {
            id: customer.id,
            name: customer.firstName + " " + customer.lastName,
            email: customer.email,
            telephone: customer.tel,
            address: customer.address
        };
        this.ordersWithProducts = [];
        if (compactData == true) {
            customer.orders.forEach(order => {
                // console.log(order);
                let orderWithProducts = {};
                orderWithProducts.id = order.id;
                orderWithProducts.totalPrice = order.totalPrice;
                orderWithProducts.created = order.createdAt;
                orderWithProducts.updated = order.updatedAt;
                // customer data with orders' data (WITHOUT PRODUCTS)

                let products;
                // PLEASE change this awfull code!!! It smells BAD!!!!
                // You need to break by the time you find the correct order id
                productOrders.forEach(ο => {
                    // console.log(product);
                    // product.id == orderId
                    if (ο.id == order.id) {
                        // this needs to be changed in order to get the quantity also!!!???????
                        products = ο.products;
                    }
                });
                orderWithProducts.products = [...products];
                this.ordersWithProducts.push(orderWithProducts);
            });
        } else {
            this.ordersWithProducts = productOrders;
        }
    }
}

module.exports = { CustomerOrders }