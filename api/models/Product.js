module.exports = {
    tableName: 'products',
    attributes: {
        name: { type: 'string', required: true },
        price: { type: 'number', required: true, columnType: 'DOUBLE' },
        description: { type: 'string', required: false },
        orders: {
            collection: 'order',
            via: 'product_id',
            through: 'orderdetails'
        },
    },
  };
