import { Link } from "../models/index.js";

export const getDashboard = async ( req, res ) => {
    const links = await Link.findAll({ attributes: ['slug', 'originalUrl', 'clicks']});

    return res.json(links);
}