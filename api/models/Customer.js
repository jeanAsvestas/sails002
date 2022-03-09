/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'customers',
  attributes: {
    firstName: { type: 'string', required: true, columnName: 'firstname' },
    lastName: { type: 'string', required: true, columnName: 'lastname' },
    email: { type: 'string', required: true, isEmail: true },
    tel: { type: 'string', required: true },
    address: { type: 'string' },
    orders: { 
      collection: 'order',
      via: 'customer_id'
    }
  },
};

