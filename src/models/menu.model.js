import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/connection.js";

export const Menu = sequelizeConfig.define(
  "Menu",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DOUBLE, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "menu",
  }
);
