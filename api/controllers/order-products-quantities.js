module.exports = {


  friendlyName: 'Order products quantities',


  description: '',


  inputs: {
    orderId: { type: 'number', required: true },
    productIds: { type: ['number'], required: true }
  },


  exits: {

  },


  fn: async function (inputs) {
    let quantities = await OrderDetails.find(
      {
        where: { 
          order_id: inputs.orderId, 
          product_id: { 
            in: inputs.productIds 
          } 
        },
        select: ['quantity', 'price']
      });
    
    let arrayOfQuantities = quantities.map(e => e.quantity);
    // All done.
    return arrayOfQuantities;
  }
};
