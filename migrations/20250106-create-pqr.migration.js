"use strict";

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("pqr", {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "user", key: "id" }
        },
        type: { type: Sequelize.STRING, allowNull: false },
        subject: { type: Sequelize.STRING, allowNull: false },
        message: { type: Sequelize.STRING, allowNull: false }
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable("pqr");
}