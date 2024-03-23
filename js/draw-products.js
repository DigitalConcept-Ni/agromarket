
const drawProduct = (data) => {
  let container = document.getElementById('container-products');
  let cards = '';

  data.forEach(e => {
    cards += `<div class="product-card">
      <div class="box-img">
          <figure>
              <img src="img/products/${e.img}.png" alt="${e.descripcion}">
          </figure>
                <span class="btn-add" data-item='${e.item}'>+</span>
      </div>
      <div class="info-product">
          <p class="p-info">Venta al por mayor</p>
              <span class="price">
                      ${e.precio} x ${e.udm}
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



const getData = (category) => {
  fetch("./../js/products.JSON")
    .then((res) => res.json())
    .then((datos) => {

      let filter = datos.filter(function (datos) {
        // return datos.categoria === 'Perecedero';
        if (datos.categoria === category) {
          return datos
        } else if (datos.categoria === category) {
          return datos
        }
      });
      console.log(filter)
      drawProduct(filter)
    });
};

// CLICK BTN PERECEDEROS

document.getElementById('perecederos').addEventListener('click', function () {
  getData('Perecedero');
})

// CLICK BTN PERECEDEROS

document.getElementById('no-perecederos').addEventListener('click', function () {
  getData('No perecedero');
})