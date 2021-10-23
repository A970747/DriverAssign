"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Drivers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstName: {
                type: Sequelize.STRING,
                defaultValue: "First Name",
            },
            lastName: {
                type: Sequelize.STRING,
                defaultValue: "Last Name",
            },
            fullName: {
                type: Sequelize.STRING,
                defaultValue: "Full Name",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Drivers');
    }
};
