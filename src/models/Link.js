import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Link = sequelize.define("Link", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    originalUrl: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    clicks: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

export default Link;