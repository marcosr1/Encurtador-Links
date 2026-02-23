const blackList = [
    'malware',
    'phishing',
    'virus',
    'scam'
]

export const isblackListed = ( url ) => {
    return blackList.some( word => url.includes( word) );
};