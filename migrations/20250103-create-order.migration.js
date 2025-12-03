"use strict";

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("order", {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "user", key: "id" }
        },
        totalPrice: { type: Sequelize.DOUBLE, allowNull: false },
        paymentMethod: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false },
        status: { type: Sequelize.STRING, allowNull: false }
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable("order");
}