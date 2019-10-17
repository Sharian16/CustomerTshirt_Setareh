module.exports = ({ assert, response, store }) => ({
    path: 'ordersrows',
    method: 'get',
    test() {
     // Check that there are no users in DB
     assert.deepEqual(response, []);
    },
    setup() {
      // Store the mockusers in the db (setup for next step/query)
      store.mockOrdersRows = require('./mock-order-rows.json');
    }
  });