"use strict";

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("reservation", {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "user", key: "id" }
        },
        reservationDate: { type: Sequelize.STRING, allowNull: false },
        tableNumber: { type: Sequelize.INTEGER, allowNull: false },
        numberOfPeople: { type: Sequelize.INTEGER, allowNull: false }
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable("reservation");
}