module.exports = {
  friendlyName: 'Products controller',
  description: '',
  inputs: {
    // name: { type: 'string', required: true },
    // price: { type: 'number', required: true },
    // description: { type: 'string', required: false }
  },
  exits: {

  },
  fn: async function (req, res, inputs) {
    // console.log(req, res, inputs);
    // var createdProduct = await Product.create( 
    //   { 
    //     name: req.name, 
    //     price: req.price, 
    //     description: req.description 
    //   }).fetch();
    // All done.
    let products = Product.find(); //.populate('orders');
    console.log(req.session)
    return products;

  }
};
