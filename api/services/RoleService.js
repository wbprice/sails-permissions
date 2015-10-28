'use strict';

var _ = require('lodash');

module.exports = {

  /**
   * @name Role#revoke
   * @description
   * A method that removes permissions for one or more actions from a given Model.
   *
   * @example
   * // To revoke 'delete' permissions from the Model of ID '51' under a Role of
   * // ID 23:
   * Role.revoke(23, 51, 'delete');
   */

   revoke: function(roleId, modelId, action) {

   },

};
