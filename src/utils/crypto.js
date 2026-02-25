import crypto from "crypto";

const algorithm = "aes-256-cbc";
const secretKey = crypto.createHash('sha256').update(process.env.CRYPTO_SECRET).digest()

export const encrypt =( text ) => {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv( algorithm, secretKey, iv );
    let encrypted = cipher.update( text, "utf8", "hex");
    encrypted += cipher.final("hex");

    return `${iv.toString("hex")}:${encrypted}`;
};

export const decrypt = ( encryptedText ) => {
    const [ ivHex, encrypted ] = encryptedText.split(":");
    const iv = Buffer.from( ivHex, "hex" );

    const decipher = crypto.createDecipheriv( algorithm, secretKey, iv );
    let decrypted = decipher.update( encrypted, "hex", "utf8" );
    decrypted += decipher.final("utf8");

    return decrypted;
};
 