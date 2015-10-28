'use strict';

var _ = require('lodash');

module.exports = {

  /**
   * @name AdminService#getUser
   * @description
   * A service that returns a list of (or optionally, one) active user(s), with
   * populated Roles
   * @example
   * // Returns all users with Roles populated.
   * AdminService.getUsers();
   * // Returns user 51 with Roles populated.
   * AdminService.getUser(51);
   */

  getUser: function(userId) {

    return User.find(userId)
      .populate('roles')
      .then(function(users) {
        return users;
      });

  },

  getRole: function() {

  }

};
