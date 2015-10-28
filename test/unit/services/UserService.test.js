var assert = require('assert');

describe('User Service', function() {

  it('should exist', function() {
    assert.ok(sails.services.roleservice);
    assert.ok(global.RoleService);
  });

  describe('#grant()', function() {

    it('should exist', function() {
      assert.ok(sails.services.roleservice.grant);
    });

  });

  describe('#revoke()', function() {

    it('should exist', function() {
      assert.ok(sails.services.roleservice.revoke);
    });

  });

  describe('#search()', function() {

    it('should exist', function() {
      assert.ok(sails.services.roleservice.search);
    });

  });

});
