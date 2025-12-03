"use strict";

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("user", {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false, unique: true },
        phoneNumber: { type: Sequelize.STRING, allowNull: false },
        address: { type: Sequelize.STRING, allowNull: false }
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable("user");
}