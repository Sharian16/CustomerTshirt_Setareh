// Note: Using should test syntax
module.exports = ({ response, store, repeat, i }) => ({
    path: 'ordersrows',
    method: 'post',
    body: store.mockOrdersRows[i],
    test() {
      // check that a row was inserted in the db
      response.affectedRows.should.equal(1);
    
      if(store.mockOrdersRows[i + 1]){
        repeat();
      }
    }
  });