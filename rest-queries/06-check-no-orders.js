
module.exports = ({ assert, response, store }) => ({
    path: 'orders',
    method: 'get',
    test() {
     // Check that there are no users in DB
     assert.deepEqual(response, []);
    },
    setup() {
      // Store the mockusers in the db (setup for next step/query)
     // store.mockOrders = require('./mock-orders.json');
     store.mockOrders = store.mockUsers.map(user =>({userId:user.id}));
     console.log("before map store.mockUsers",store.mockUsers)
     console.log("before map store.mockOrders",store.mockOrders);

    }
  });