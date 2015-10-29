var assert = require('assert');

describe('Role Service', function() {

  it('should exist', function() {
    assert.ok(sails.services.roleservice);
    assert.ok(global.RoleService);
  });

  describe('#grant()', function() {

    beforeEach(function(done) {

      Role.create({
        name: 'wizard'
      }).then(function() {
        done();
      });

    });

    afterEach(function(done) {

      Role.destroy({
        name: 'wizard'
      }).then(function() {
        done();
      });

    });

    it('should add a Permission to a given Role in relation to a Model', function(done) {

      RoleService.grant({ name: 'wizard' }, { name: 'Model' }, 'read').then(function(permissions) {
        assert.equal(1, permissions.length);
        assert.equal('read', permissions[0].action);
        done();
      });

    });

    it('should add several Permissions to a given Role in relation to a Model', function(done) {

      RoleService.grant(
        { name: 'wizard' },
        { name: 'Model' },
        [ 'read', 'update' ]
      ).then(function(permissions) {
        assert(2, permissions.length);
        assert('read', permissions[0].action);
        assert('update', permissions[1].action);
        done();
      });

    });

  });

  describe('#revoke()', function() {

    beforeEach(function(done) {

      Role.create({
        name: 'wizard'
      }).then(function(role) {
        return PermissionService.grant([
          { role: 'wizard', model: 'Model', action: 'read' },
          { role: 'wizard', model: 'Model', action: 'create' }
        ]);
      }).then(function() {
        done();
      });

    });

    afterEach(function(done) {

      Role.destroy({
        name: 'wizard'
      }).then(function() {
        done();
      });

    });

    it('should revoke a single Permission from a given Role', function() {

      RoleService.revoke(
        { name: 'wizard' },
        { model: 'Model' },
        'read'
      ).then(function(permissions) {
        assert.equal(1, permissions.length);
        assert.equal('create', permissions[0].action);
      });

    });

    it('should revoke multiple Permissions from a given Role', function() {

      RoleService.revoke(
        { name: 'wizard' },
        { model: 'Model' },
        ['read', 'create']
      ).then(function(permissions) {
        assert.equal(0, permissions.length);
      });

    })

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
