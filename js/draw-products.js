const getData = async (category) => {

  let isInteger = Number.isInteger(category);

  return await fetch("./../js/products.JSON")
    .then(res => res.json())
    .then((res) => {

      let filter = res.filter(function (res) {
        // return res.categoria === 'Perecedero';

        if (isInteger) {
          return res.item === category;
        } else {
          if (category === 'Perecedero') {
            return res.categoria === category;
          }
          if (category === 'No perecedero') {
            return res.categoria === category;
          }
          if (category === 'all') {
            return res;
          }
        }
      });
      return filter;
    });
};

const drawProduct = async (category) => {
  let container = document.getElementById('container-products');
  let cards = '';
  var data = await getData(category);

  data.forEach(e => {
    cards += `<div class="product-card">
      <div class="box-img">
          <figure>
              <img src="img/products/${e.img}.png" alt="${e.descripcion}">
          </figure>
          
            <span class="btn-add id-item btn-add-basket" onclick="insertProduct(this)" data-item='${e.item}'>+</span>
      </div>
      <div class="info-product">
          <p class="p-info">Venta al por mayor</p>
              <span class="price">
                      C$${e.precio} x ${e.udm}
              </span>
              <p class="description">
                      ${e.descripcion}
              </p>
              <p class="proveedor">
                        ${e.proveedor}
              </p>     
      </div>
      </div>`;
  });
  container.innerHTML = cards
}

// CLICK BTN PERECEDEROS

document.getElementById('perecederos').addEventListener('click', function () {
  drawProduct('Perecedero');
})

// CLICK BTN PERECEDEROS

document.getElementById('no-perecederos').addEventListener('click', function () {
  drawProduct('No perecedero');
})