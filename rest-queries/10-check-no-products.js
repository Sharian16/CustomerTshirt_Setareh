
module.exports = ({ assert, response, store }) => ({
    path: 'products',
    method: 'get',
    test() {
     // Check that there are no users in DB
     assert.deepEqual(response, []);
    },
    setup() {
      // Store the mockusers in the db (setup for next step/query)
      store.mockProducts = require('./mock-products.json');
    }
  });