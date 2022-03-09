/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'orders',
  attributes: {
    customer_id: { model: 'customer' },
    products: {
      collection: 'product',
      via: 'order_id',
      through: 'orderdetails'
    },
    totalPrice: { type: 'number', required: true, columnType: 'DOUBLE', columnName: 'totalprice' },
  },
};

