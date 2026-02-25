import QRcode from "qrcode";
import { Link } from "../models/index.js";

export const generateQRcode = async ( req, res ) => {
    const { slug } = req.params;

    const link = await Link.findOne( { where: { slug } } );

    if (!link) return res.status(404).json( { error: "Link não encontrado" } );

    if (new Date() > link.expiresAt) return res.status(410).json( { error: "Link expirado" } );

    const shortUrl = `${process.env.BASE_URL}/${slug}`;

    try {
        const qrCodeDataUrl = await QRcode.toDataURL(shortUrl);
        return res.json( { slug, shortUrl, qrCode: qrCodeDataUrl } );
    } catch ( error ) {
        return res.status(500).json( { error: "Error ao gerar QR code" } );
    }
};