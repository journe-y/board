const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            imgpath:{
                type:Sequelize.STRING(500),
                allowNull: true,
            },
            contents: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            category: {
                type: Sequelize.STRING(50),
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: 'userid', targetKey: 'userid' });
    }
};