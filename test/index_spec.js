var should = require('chai').should(),
    icndb_api = require('../index'),
    random = icndb_api.random;

describe('#random', function(){
  it('should give a random joke', function(){
    random().should.equal('abc');
  })
})
