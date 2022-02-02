const Post = require('./Post');
const Comment = require('./Comment');

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {

// })
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

User.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING(42),
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING(160),
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: DataTypes.STRING(24),
          allowNull: false,
          validate: {
            len: [9]
          }
        }
      },
      {
        hooks: {
          // set up beforeCreate lifecycle "hook" functionality
          async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        //     bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
            //   },
            // beforeCreate(userData) {
            // return bcrypt.hash(userData.password, 10).then(newUserData => {
            //   return newUserData
            // });
          },
          async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
    );

module.exports = User;

