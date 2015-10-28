var assert = require('assert');

describe('Admin Service', function() {

  it('should exist', function() {
    assert.ok(sails.services.adminservice);
    assert.ok(global.AdminService);
  });

  describe('#getUser()', function() {

    beforeEach(function() {
      User.create({
        username: 'Phillip'
      });
      User.create({
        username: 'Georgia'
      });
      User.create({
        username: 'Hiro Protaganist'
      });
    });

    afterEach(function(done) {
      User.destroy().exec(function() {
        done();
      });
    });

    it('should exist', function() {
      assert.ok(sails.services.adminservice.getUser);
    });

    it('should return all the users, with populated Role(s)', function() {


    });

    it('should return a single user, with populated Role(s)', function() {

    });

  });

  describe('#getRole()', function() {

    it('should exist', function() {
      assert.ok(sails.services.adminservice.getRole);
    });

  });

});
