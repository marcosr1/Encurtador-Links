import { Link } from "../models/index.js";

export const getDashboard = async ( req, res ) => {
    const links = await Link.findAll({ attributes: ['slug', 'originalUrl', 'clicks', 'expiresAt'] } );

    const formattedLinks = links.map( link => ({
        slug: link.slug,
        originalUrl: link.originalUrl,
        clicks: link.clicks,
        expiresAt: new Date(link.expiresAt).toLocaleDateString('pt-BR')
    }));

    return res.json(formattedLinks);
}