import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/connection.js";

export const Pqr = sequelizeConfig.define(
  "Pqr",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idUser: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "pqr",
  }
);
