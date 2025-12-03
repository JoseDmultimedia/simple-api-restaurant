import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/connection.js";

export const Reservation = sequelizeConfig.define(
  "Reservation",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idUser: { type: DataTypes.INTEGER, allowNull: false },
    reservationDate: { type: DataTypes.STRING, allowNull: false },
    tableNumber: { type: DataTypes.INTEGER, allowNull: false },
    numberOfPeople: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "reservation",
  }
);
