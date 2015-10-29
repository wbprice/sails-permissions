var assert = require('assert');
var Promise = require('bluebird');

describe('Admin Service', function() {

  it('should exist', function() {
    assert.ok(sails.services.adminservice);
    assert.ok(global.AdminService);
  });

  describe('#getUser()', function() {

    beforeEach(function(done) {

      Promise.all([
        User.create({
          username: 'Phillip'
        }),
        User.create({
          username: 'Georgia'
        }),
        User.create({
          username: 'Hiro Protaganist'
        })
      ]).spread(function() {
        done();
      });

    });

    afterEach(function(done) {

      Promise.all([
        User.destroy({
          username: 'Phillip'
        }),
        User.destroy({
          username: 'Georgia'
        }),
        User.destroy({
          username: 'Hiro Protaganist'
        })
      ]).spread(function() {
        done();
      });

    });

    it('should exist', function() {
      assert.ok(sails.services.adminservice.getUser);
    });

    it('should return all the users, with populated Role(s)', function(done) {

      AdminService.getUser()
      .then(function(users) {
        assert.ok(users);
        done();
      });

    });

    it('should return a single user, with populated Role(s)', function(done) {

      User.find().limit(1).then(function(user) {

        AdminService.getUser(user.id).then(function(user) {
          assert.ok(user);
          done();
        });

      });

    });

  });

  describe('#getRole()', function() {

    it('should exist', function() {
      assert.ok(sails.services.adminservice.getRole);
    });

  });

});
