// const fetch = require('node-fetch');

const fetchProducts = async (QUERY) => {
  // seu código aqui
  if (!QUERY) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const request = await fetch(url);
  const json = await request.json();
  return json;
};

// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
