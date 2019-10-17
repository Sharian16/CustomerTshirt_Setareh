// Note: Using should test syntax
module.exports = ({ response, store, repeat, i }) => ({
    path: 'ordersrows',
    method: 'post',
    body: store.mockOrdersRows[i],
    test() {
      // check that a row was inserted in the db
      response.affectedRows.should.equal(1);
      // store the inserted id in mockUsers
      store.mockOrdersRows[i].id = response.insertId;
      // repeat this step/query as long as
      // there a more mockUsers to insert
      if(store.mockOrdersRows[i + 1]){
        repeat();
      }
    }
  });