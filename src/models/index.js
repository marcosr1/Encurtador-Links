import sequelize from "../config/database.js";
import Link from "./Link.js";

export const initDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log("Database conectado e sincronizado!");
    } catch ( error ) {
        console.error("Erro ao conectar no banco", error);
    }
};

export { Link };
