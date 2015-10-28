var assert = require('assert');

describe('Role Service', function() {

  it('should exist', function() {
    assert.ok(sails.services.roleservice);
    assert.ok(global.RoleService);
  });

});
