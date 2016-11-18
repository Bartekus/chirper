'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var Chirp = sequelize.define('chirps', {
    text: DataTypes.TEXT(140)
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
        models.chirp.belongsTo(models.user, {
          onDelete: 'cascade'
        });

        models.user.belongsToMany(models.user, {
          as: 'followees',
          through: models.follow,
          foreignKey: 'follower_id',
          otherKey: 'followee_id'
        });

        models.user.belongsToMany(models.user, {
          as: 'followers',
          through: models.follow,
          foreignKey: 'followee_id',
          otherKey: 'follower_id'
        });

        /*
         * Define relationships with other models
         * Example:
         * models.user.hasOne(models.project);
         */
      }
    },

    underscored: true,
    underscoredAll: true

    /* Find more configurations at:
     * http://docs.sequelizejs.com/en/latest/docs/models-definition/#configuration
     */
  });

  ssaclAttributeRoles(Chirp);

  return Chirp;
};
