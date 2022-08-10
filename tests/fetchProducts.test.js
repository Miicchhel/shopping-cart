require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('verificando se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  });

  it('verificando se "fetch" é chamado ao executar fetchProducts("computador")', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('verificando se fetch usa a URL correta ao executar fetchProducts("computador")', async () => {
    await fetchProducts('computador');
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    expect(fetch).toHaveBeenCalledWith(URL);
  });

  it('verificando se fetchProducts("computador") retorna um objeto igual ao objto computadorSearch', async () => {
    const esperado = await fetchProducts('computador');
    const resultado = computadorSearch
    expect(esperado).toEqual(resultado);
  });

  it('verificando se fetchProducts() retorna um erro com a msg: "You must provide an url"', async () => {
    const resultado = 'You must provide an url';
    await expect(fetchProducts()).rejects.toThrow(resultado);
  });
});
