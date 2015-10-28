'use strict';

var _ = require('lodash'),
    Promise = require('bluebird');

module.exports = {

  /**
   * @name RoleService#revoke
   * @description
   * A method that adds a permission for an action to a given Model.
   * @example
   * // To add 'delete' permission to the Model of ID '51' under a Role of
   * // ID 23:
   * Role.grant(23, 51, 'delete');
   */

  grant: function(roleId, modelId, action) {

    Promise.all([
      Role.findOne(roleId),
      Model.findOne(modelId)
    ]).spread(function() {

      console.log('grant promises were resolved');

    });

  },

  /**
   * @name RoleService#revoke
   * @description
   * A method that removes permissions for one or more actions from a given Model.
   *
   * @example
   * // To revoke 'delete' permissions from the Model of ID '51' under a Role of
   * // ID 23:
   * Role.revoke(23, 51, 'delete');
   */

   revoke: function(roleId, modelId, action) {

      Promise.all([
        Role.findOne(roleId),
        Model.findOne(modelId)
      ]).spread(function() {

        console.log('revoke promises were resolved!');

      });

   },

   /**
    * @name RoleService#make
    * @description
    * A method that creates a new role and allows it to perform specified actions
    * on a given number of models.
    * @example
    */

   make: function() {

   },

   /**
    * @name RoleController#search
    * @description
    * Fuzzy search on a budget.  Matches the beginning of a string
    * and returns an array of similar matches from available Roles.
    * @returns {object}
    * An object containing a status and an array containing matches.
    */

   search: function() {

   }

};
