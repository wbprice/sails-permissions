var assert = require('assert');

describe('Admin Service', function() {

  it('should exist', function() {
    assert.ok(sails.services.adminservice);
    assert.ok(global.AdminService);
  });

  describe('#getUser()', function() {

    it('should exist', function() {
      assert.ok(sails.services.adminservice.getUser);
    });

  });

  describe('#getRole()', function() {

    it('should exist', function() {
      assert.ok(sails.services.adminservice.getRole);
    });

  });

});
