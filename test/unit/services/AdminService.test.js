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

    beforeEach(function(done) {

      User.create([
        { username: 'Harry Potter' },
        { username: 'Hermione Granger' }
      ]).spread(function(harry, hermione) {
        return Role.create([
          { name: 'wizard', users: [harry.id] },
          { name: 'witch', users: [hermione.id] }
        ]);
      }).spread(function(wizard, witch) {
        return PermissionService.grant([
          { role: wizard.name, model: 'Model', action: 'create'},
          { role: witch.name, model: 'Model', action: 'create'}
        ]);
      }).then(function() {
        done();
      });

    });

    afterEach(function(done) {

      // Unable to pass an array to User#destroy?

      Promise.all([
        User.destroy({
          username: 'Harry Potter'
        }),
        User.destroy({
          username: 'Hermione Granger'
        })
      ]).spread(function(harry, hermione) {
        return Promise.all([
          Role.destroy({
            name: 'witch'
          }),
          Role.destroy({
            name: 'wizard'
          })
        ]);
      }).then(function() {
        done();
      });

    });

    it('should return a list of Roles, with populated Permissions', function(done) {

      AdminService.getRole()
        .then(function(roles) {

          var wizard = _.find(roles, function(role) {
            return role.name === 'wizard';
          }),
          witch = _.find(roles, function(role) {
            return role.name === 'witch';
          });

          assert.equal(1, wizard.permissions.length);
          assert.equal('create', wizard.permissions[0].action);
          assert.equal(1, witch.permissions.length);
          assert.equal('create', witch.permissions[0].action);
          done();

        });

    });

    it('should return a single Role, with populated Permissions', function(done) {

      Role.find({name: 'wizard'}).then(function(aRole) {

        AdminService.getRole(aRole[0].id).then(function(role) {

          assert.equal(1, role.length);
          assert.equal(1, role[0].permissions.length);
          assert.equal('create', role[0].permissions[0].action);
          done();

        });

      });

    });

  });

});
