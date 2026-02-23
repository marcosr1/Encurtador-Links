import { Link } from '../models/index.js';
import { isvalidUrl } from '../utils/isValidUrl.js';
import { gerarSlug } from '../utils/slugGenerator.js';

export const createLink = async (req, res) => {
    try {
        const { originalUrl, slug } = req.body;

        if ( !originalUrl || !isvalidUrl(originalUrl) ) return res.status(400).json( { error: "originalUrl inválido" } );

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

export const getLinkStats = async (req, res) => {
    try {
        const link = await Link.findAll({ attributes: ['slug', 'originalUrl', 'clicks']  });
        return res.json(link);
    } catch ( error ) {
        return res.status(500).json( { error: "Erro ao obter as estatísticas" } );
    }
};