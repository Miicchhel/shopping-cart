const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

window.onload = async () => { 
  const items = document.querySelector('.items');
  const arrayProdutos = await fetchProducts('computador');
  await arrayProdutos.results.forEach((produto) => {
    const entrada = { sku: produto.id, name: produto.title, image: produto.thumbnail };
    console.log(`sku: ${produto.id}\nname: ${produto.title}\nimage: ${produto.thumbnail}`);
    // const novoItem = createProductItemElement(entrada);
    items.appendChild(createProductItemElement(entrada));
  });

  // console.log(arrayProdutos[0]);
  // const { id, title, thumbnail } = arrayProdutos[0];
  // const entrada = { sku: id, name: title, image: thumbnail };
  // console.log(`sku: ${id}\nname: ${title}\nimage: ${thumbnail}`);
  // console.log(createProductItemElement(entrada));
  // items.appendChild(createProductItemElement(entrada));
};
