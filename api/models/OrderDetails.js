/**
 * OrderDetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    order_id: { model: 'order' },
    product_id: { model: 'product' },
    quantity: { type: 'number', defaultsTo: 1 },
    price: { type: 'number', defaultsTo: 0.0, columnType: 'DOUBLE'},
  },
};

