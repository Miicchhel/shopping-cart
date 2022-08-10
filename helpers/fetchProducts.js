// const fetch = require('node-fetch');

const fetchProducts = async (elemento) => {
  // seu código aqui
  if (!elemento) {
    // console.log('entrou');
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${elemento}`;
  const request = await fetch(url);
  const json = await request.json();
  // console.log(json);
  return json;
};

// fetchProducts();

// const fetchProducts = (QUERY) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`)
// .then((response) => response.json())
// .then((data) => data.results)
// .catch((error) => error); 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
