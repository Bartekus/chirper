'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    about_me: DataTypes.TEXT,

    hash: {
      type: DataTypes.STRING,
      roles: {
        admin: true
      }
    }

    /*
     * Set the table fields that you want for your model
     * Example:
     * username: DataTypes.STRING
     *
     * The "id", "created_at" and "updated_at" fields are automatically added >
     * > unless anything else is specified
     */
  }, {
    getterMethods: {
      /*
       * Set pseudo properties
       * These will not be stored in the table, but rendered in the JSON response
       * Example:
       * username_uppercased: function() { return this.getDataValue('username').toUpperCase(); }
       */
    },

    classMethods: {
      associate: function(models) {
        models.user.hasMany(models.chirp, {
          foreignKey: {
            as: 'user_id',
            allowNull: false
          }
        });
        /*
         * Define relationships with other models
         * Example:
         * models.user.hasOne(models.project);
         */
      }
    },

    underscored: true,
    underscoredAll: true,
    createdAt: 'joined_at'

    /* Find more configurations at:
     * http://docs.sequelizejs.com/en/latest/docs/models-definition/#configuration
     */
  });

  ssaclAttributeRoles(User);

  return User;
};
