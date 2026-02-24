import cron from "node-cron";
import Link from "../models/Link.js";
import { Op } from "sequelize";

export const cleanExpiredLinks = async () => {
    try {
        cron.schedule("0 0 * * *", async () => {
            console.log("Iniciando limpeza de links expirados...");
            const expiredLinks = await Link.findAll( { where: { expiresAt: { [Op.lt]: new Date() } } } );

            for ( const link of expiredLinks ) {
                await link.destroy();
                console.log(`Link com slug ${link.slug} expirado e removido.`);
            }

            console.log(`${expiredLinks.length} links expirados foram removidos.`);
        })
    } catch ( error ) {
        console.error("Error ao limpar links exppirados: ", error);
    }
}