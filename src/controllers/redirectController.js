import { Link } from "../models/index.js";

export const redirectToOriginalUrl = async (req, res) => {
    const { slug } = req.params;
    
    const link = await Link.findOne( { where: {slug} } );

    if (!link) return res.status(404).json( { error: "Link não encontrado" } );

    await link.increment("clicks");

    return res.redirect(link.originalUrl);
};