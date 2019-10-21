
module.exports = ({ assert, response, store }) => ({
    path: 'orders',
    method: 'get',
    test() {
     // Check that there are no users in DB
     assert.deepEqual(response, []);
    },
    setup() {
       // Store the mockusers in the db (setup for next step/query)
      store.mockOrders= require('./mock-orders.json');
     
     //Reuse the mockUsers ids when  creating new orders
     store.mockOrders.forEach((orders, index) => {
       orders.userId=store.mockUsers[index].id;
     });

     console.log("before map store.mockUsers",store.mockUsers)
     console.log("before map store.mockOrders",store.mockOrders);

    }
  });