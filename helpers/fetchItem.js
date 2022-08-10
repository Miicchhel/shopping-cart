const fetchItem = async (ItemID) => {
  if (!ItemID) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/items/${ItemID}`;
  const request = await fetch(url);
  const json = await request.json();
  // const { id, title, price } = json;
  // console.log(`id:${id}\ntitle:${title}\nprice:${price}`);
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
