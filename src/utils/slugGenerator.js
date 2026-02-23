const palavras = [
  'confia',
  'suspeito',
  'nao-clica',
  'vai-dar-certo',
  'clicou-ja-era',
  'link-da-fofoca',
  'so-vai',
  'medo',
  'coragem'
];

export const gerarSlug = () => {
    const palavra = palavras[Math.floor(Math.random() * palavras.length)];
    const sufixo = Math.floor(Math.random() * 1000);

    return `${palavra}-${sufixo}`;
};