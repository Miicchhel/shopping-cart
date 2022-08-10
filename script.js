let arrayCarinhos = [];

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

const showProducts = async (produto) => {
  const items = document.querySelector('.items');
  const { results } = await fetchProducts(produto);
  results.forEach((item) => {
    const { id: sku, title: name, thumbnail: image } = item; 
    items.appendChild(createProductItemElement({ sku, name, image }));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const teste = event.target.innerText.slice(5, 18);
  arrayCarinhos = arrayCarinhos.filter(({ sku }) => sku !== teste);
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addToCart = async (itemID) => {
  const cartItems = document.querySelector('.cart__items');
  const data = await fetchItem(itemID);
  const { id: sku, title: name, price: salePrice } = data;
  arrayCarinhos.push({ sku, name, salePrice });
  cartItems.appendChild(createCartItemElement(arrayCarinhos[arrayCarinhos.length - 1]));
  // arrayCarinhos.forEach((item) => cartItems.appendChild(createCartItemElement(item)));
  // console.log(arrayCarinhos);
};

const callAddToCart = (event) => {
  const elemento = event.target.parentElement.firstChild;
  addToCart(elemento.innerText);
};

window.onload = async () => { 
  await showProducts('computador');
  const btnShowProducts = document.querySelectorAll('.item__add');
  btnShowProducts.forEach((element) => element.addEventListener('click', callAddToCart));
};
