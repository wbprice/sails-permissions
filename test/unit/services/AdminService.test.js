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

    it('should return all the users, with populated Role(s)', function(done) {

      AdminService.getUser()
      .then(function(users) {

        var firstRole = _.first(_.reduce(users, function(prev, current) {
          return prev.concat(current.roles);
        }, []));

        assert.ok(firstRole.name);
        done();

      });

    });

    it('should return a single user, with populated Role(s)', function(done) {

      User.find({username: 'Georgia'}).then(function(aUser) {
        AdminService.getUser(aUser.id).then(function(user) {
          done(assert.ok(user[0].roles[0].name));
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
