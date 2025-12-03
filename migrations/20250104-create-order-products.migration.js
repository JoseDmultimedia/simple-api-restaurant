"use strict";

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_products", {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idOrder: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "order", key: "id" }
        },
        idMenu: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "menu", key: "id" }
        },
        quantity: { type: Sequelize.INTEGER, allowNull: false },
        priceAtPurchase: { type: Sequelize.DOUBLE, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false }
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable("order_products");
}