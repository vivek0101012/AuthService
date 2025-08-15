'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull:false,
        type: Sequelize.STRING,
        validate:{
          isEmail:true
        },
        unique:true,
       
      
      },
      password: {
        allowNull:false,
        type: Sequelize.STRING,
        validate:{
        len:[8,20],
       }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        
        allowNull: false,
        type: Sequelize.DATE,

        
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};