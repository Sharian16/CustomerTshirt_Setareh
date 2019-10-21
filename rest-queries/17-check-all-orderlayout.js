// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
    path: 'otherlayouts',
    method: 'get',
    test() {
      // filter and map mockOrderRows to match expected result
      let expected = store.mockOrdersRows
      .filter(row => row.share === 1)
      .map(row => ({text: row.text, image: row.image}));


      // check that we got the right number of users
      // (intentionelly spelled length wrong to provoke a fail)
      assert.equal(response.length, expected.length);
      // check that all users where
      // inserted correctly with correct data
      assert.deepEqual(response, expected);
    },
    setup(){
        
    }
  });