const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userid: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      userpw: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      refresh: {
        type: Sequelize.TEXT,
        allowNull: true,
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: 'userid', sourceKey: 'userid' });
  }
};