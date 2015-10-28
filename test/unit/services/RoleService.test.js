var assert = require('assert');

describe('Role Service', function() {

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

  describe('#make()', function() {

    it('should exist', function() {
      assert.ok(sails.services.roleservice.make);
    });

  });

  describe('#search()', function() {

    it('should exist', function() {
      assert.ok(sails.services.roleservice.make);
    });

  });

});
