import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/connection.js";

export const User = sequelizeConfig.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "user",
  }
);
