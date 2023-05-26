function productStructure() {
  const result = {};

  const products = [
    "preto-PP",
    "preto-M",
    "preto-G",
    "preto-GG",
    "preto-GG",
    "branco-PP",
    "branco-G",
    "vermelho-M",
    "azul-XG",
    "azul-XG",
    "azul-XG",
    "azul-P"
  ];

  products.forEach((item) => {
    const [Cor, Tamanho] = item.split('-');

    result[Cor] = result[Cor] || {};
    result[Cor][Tamanho] = (result[Cor][Tamanho] || 0) + 1;
  });

  return result;
}

module.exports = productStructure;

