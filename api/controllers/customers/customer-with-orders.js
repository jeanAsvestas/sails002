const { CustomerOrders } = require("../../view_models/CustomerOrders");

async function createTestData(customer_id, products) {
  // create order for customer
  let createdOrder = await Order.create( { 
    customer_id: customer_id, 
    totalPrice: ((products[0].price * 2) + (products[1].price * 2)) 
  }).fetch();
  // add products to order
  await Order.addToCollection(createdOrder.id, 'products', [products[0].id, products[1].id]);
  
  // update quantity and price per product
  let updatedOrderDetails1 = await OrderDetails.find( { order_id: createdOrder.id, product_id: products[0].id } );
  await OrderDetails.update( { id: updatedOrderDetails1[0].id } ).set( { quantity: 2, price: products[0].price } );
  
  // update quantity and price per product
  let updatedOrderDetails2 = await OrderDetails.find( { order_id: createdOrder.id, product_id: products[1].id } );
  await OrderDetails.update( { id: updatedOrderDetails2[0].id } ).set( { quantity: 2, price: products[1].price } );
}

module.exports = {


  friendlyName: 'Customer with orders',


  description: '',


  inputs: {
    id: { type: 'number', required: false },
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/customers/customerWithOrders'
    }
  },

  fn: async function (inputs) {
    // create Order
    // create order for customer
    // let createdOrder = await Order.create( { customer_id: inputs.id, totalPrice: ((10000 * 2) + (100000 * 2)) } ).fetch();

    let customer = await Customer.find( { id: inputs.id }).populate('orders');
    // just testing for multiple orders
    // await createTestData(inputs.id, await Product.find( { id: { in: [1,2] } } ));

    let productOrders = await Order.find( { customer_id: customer[0].id } ).populate('products');
    customerWithOrders = new CustomerOrders(customer[0], productOrders);
    // console.log(customerWithOrders);
    // All done.
    return { customerWithOrders: customerWithOrders };
  },
};
