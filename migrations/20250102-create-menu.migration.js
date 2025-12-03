"use strict";

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("menu", {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING, allowNull: false },
        price: { type: Sequelize.DOUBLE, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: false },
        category: { type: Sequelize.STRING, allowNull: false },
        isActive: { type: Sequelize.BOOLEAN, defaultValue: true },
        createdAt: { type: Sequelize.DATE, allowNull: false },
        updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable("menu");
}