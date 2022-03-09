module.exports = {

  friendlyName: 'Customers controller',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    // create customer
    let createdCustomer = await Customer.create( { firstName: "Customer 1", lastName: "Customer", email: "c@c.com", tel: "210", address: "Lykabytou"} ).fetch();
    
    // create two products
    let createdProduct = await Product.create( { name: 'Smart Home', price: 10000, description: 'A dreamly Smart Home' } ).fetch();
    let createdProduct2 = await Product.create( { name: 'Smart Car', price: 100000, description: 'A dreamly Smart Car' } ).fetch();
    
    // create order for customer
    let createdOrder = await Order.create( { customer_id: createdCustomer.id, totalPrice: ((createdProduct.price * 2) + (createdProduct2.price * 2)) } ).fetch();
    // add products to order
    await Order.addToCollection(createdOrder.id, 'products', [createdProduct.id, createdProduct2.id]);
    
    // update quantity and price per product
    let updatedOrderDetails1 = await OrderDetails.find( { order_id: createdOrder.id, product_id: createdProduct.id } );
    await OrderDetails.update( { id: updatedOrderDetails1[0].id } ).set( { quantity: 2, price: createdProduct.price } );
    
    // update quantity and price per product
    let updatedOrderDetails2 = await OrderDetails.find( { order_id: createdOrder.id, product_id: createdProduct2.id } );
    await OrderDetails.update( { id: updatedOrderDetails2[0].id } ).set( { quantity: 2, price: createdProduct2.price } );

    // DON'T TRY THIS AT HOME
    // let createdOrderDetails = await OrderDetails.create( { order_id: 4, product_id: 10, quantity: 3, price: 10000 } ).fetch();
    // let createdOrderDetails2 = await OrderDetails.create( { order_id: 4, product_id: 9, quantity: 3, price: 120 } ).fetch();
    // DON'T TRY THIS AT HOME
    
    let customers = await Customer.find().populate('orders');
    console.log(req.session)
    return customers;
  }
};
