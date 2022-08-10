require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it(`Verificando se fetchItem é uma função`, () => {
    expect(typeof fetchItem).toEqual('function')
  });
  it(`verificando se "fetch" é chamado ao executar fetchItem('MLB1615760527')`, async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled()
  });
  it(`verificando se fetch usa a endpoint correto ao executar fetchItem('MLB1615760527')`, async () => {
    await fetchItem('MLB1615760527');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527'
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it(`verificando se fetchItem('MLB1615760527') retorna um objeto igual ao objeto item`, async () => {
    await expect(fetchItem('MLB1615760527')).resolves.toEqual(item);
  });
  it(`verificando se fetchItem() retorna um erro com a msg: "You must provide an url"`, async () => {
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
