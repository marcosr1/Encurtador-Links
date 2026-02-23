import { Link } from '../models/index.js';
import { isvalidUrl } from '../utils/isValidUrl.js';
import { gerarSlug } from '../utils/slugGenerator.js';
import { isblackListed } from '../utils/blackList.js';

export const createLink = async (req, res) => {
    try {
        const { originalUrl, slug } = req.body;

        if ( !originalUrl || !isvalidUrl(originalUrl) ) return res.status(400).json( { error: "originalUrl inválido" } );

        if (isblackListed(originalUrl)) return res.status(403).json( { error: "URL contém palavras proíbidas" } );

        let finalSlug = slug;

        if ( !finalSlug ) finalSlug = gerarSlug();

        const slugExists = await Link.findOne( { where: { slug: finalSlug } } );

        if (slugExists) return res.status(400).json( { error: "Slug já existe" } );

        const link = await Link.create( { originalUrl, slug: finalSlug } );

        return res.status(201).json(link);
    } catch ( error ) {
        return res.status(500).json( { error: "Erro ao criar o link" } );
    }
};
 