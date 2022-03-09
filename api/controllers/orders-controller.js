module.exports = {


  friendlyName: 'Orders controller',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (req, res, inputs) {
    let orders = await Order.find().populate('products');
    // All done.
    return orders;

  }


};
