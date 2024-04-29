var sale = {
    details: {
        // subtotal_exempt: 0.00,
        subtotal: 0.00,
        iva: 0.00,
        discount: 0.00,
        total: 0.00,
        products: [],
        products_review: []
    },
    calculateInvoice: function () {
        let total = document.getElementById('total-mount');
        let delivery = document.getElementById('delivery-cost');
        let cont_delivery = document.getElementById('cont-delivery-cost'); // span que contiene la informacion del costo del envio
        // var subtotal_exempt = 0.00;

        var subtotal = 0.00;
        var cant = 0;
        // var iva = $('input[name="iva"]').val();
        // var discount = $('input[name="discount"]').val();
        this.details.products.forEach(function (value, index, array) {
            let ttProduct = document.getElementById(value.item)
            value.index = index;

            value.cant = parseInt(value.cant);
            cant += parseInt(value.cant);
            value.subtotal = value.cant * parseFloat(value.precio);
            subtotal += value.subtotal;
            ttProduct.innerHTML = value.subtotal;
        });

        cont_delivery.style.display = 'inline-block';
        if (cant <= 10){
            delivery.innerHTML = 80;
        }
        if (cant >= 11  && cant <= 20){
            delivery.innerHTML = 150;
        }
        if (cant >= 21  && cant <= 30){
            delivery.innerHTML = 220;
        }
        if (cant >= 31){
            delivery.innerHTML = 300;
        }

        this.details.total = subtotal;
        total.innerHTML = subtotal;
    },
    listProduct: function () {
        let cards = '';
        let container = document.getElementById('continer-shop-items');
        // const element = document.createElement("div");
        // element.setAttribute("class", "shop-item")
        this.details.products.forEach(e =>{
            cards += `<div class="shop-item">
            <div class="shop-img">
                <figure>
                    <img src="img/products/${e.img}.png" alt="">
                </figure>
            </div>
            <div class="shop-info">
                <h6>${e.descripcion}</h6>
                <span>C$ ${e.precio}</span>
                <p class="shop-p">${e.categoria}</p>
                <div class="container-btn-shop">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-append">
                                <button onclick="deleteItem(${e.item})" type="button" class="btn btn-danger btn-flat">
                                    <i class="fa fa-trash"></i>
                                </button>
                        </span>
                        <input onchange="btnShopPlus(this)" data-id="${e.id}" name="cant" type="number" min+"1" max="1000" step="1" value="1" class="form-control rounded-0">
                    </div>
                    <hr>
                    <span>Total producto: C$<span id="${e.item}">0.00</span></span>
                    </div>
                </div>
            </div>`;
        });

        // element.innerHTML = card
        container.innerHTML = cards;
        this.calculateInvoice();
        // container.appendChild(element)

    }
    // listProduct: function (e) {
    //     let container = document.getElementById('continer-shop-items');
    //     const element = document.createElement("div");
    //     element.setAttribute("class", "shop-item")

    //     let card = `<div class="shop-img">
    //             <figure>
    //                 <img src="img/products/${e.img}.png" alt="">
    //             </figure>
    //         </div>
    //         <div class="shop-info">
    //             <h3>${e.producto}</h3>
    //             <span>${e.precio}</span>
    //             <h6>Cacao</h6>
    //             <p class="shop-p">${e.proveedor}</p>
    //             <div class="container-btn-shop">
    //                 <div class="input-group input-group-sm mb-3">
    //                     <span class="input-group-append">
    //                         <button type="button" class="btn btn-danger btn-flat">-</button>
    //                     </span>
    //                     <input type="text" value="1" class="form-control rounded-0">
    //                     <span class="input-group-append">
    //                         <button type="button" class="btn btn-success btn-flat btn-menu-+">+</button>
    //                     </span>
    //                 </div>

    //             </div>
    //         </div>`;

    //     element.innerHTML = card

    //     container.appendChild(element)

    // }
}

const insertProduct = async (e) => {
    e.style.display = "None";
    let contador = document.getElementById('count-items');
    let searchedItem = await getData(parseInt(e.dataset.item));

    // console.log(sale.details.products.map(value => value.Item))
    // console.log(sale.details)
    // console.log(searchedItem)

    contador.innerHTML = parseInt(contador.textContent) + 1;
    searchedItem[0].cant = 1;
    searchedItem[0].subtotal = 0.00;
    sale.details.products.push(searchedItem[0]);
    sale.listProduct();
}

const deleteItem = (id) =>{
    let contador = document.getElementById('count-items');
    contador.innerHTML = parseInt(contador.textContent) - 1;
    let index = sale.details.products.findIndex(index => index.item == id);
    sale.details.products.splice(index, 1);
    let cont_delivery = document.getElementById('cont-delivery-cost'); // span que contiene la informacion del costo del envio
    sale.listProduct();
    if (sale.details.products.length === 0 ){
        cont_delivery.style.display = 'None';
    }
}

let menuShop = document.querySelector('#shop-menu'); // select the buttons on the menu panel
// let links = document.querySelectorAll('a[class="navbar-link"]'); // Select all links from the panel menu


const btnIconShop = () => {
    let btn = document.querySelector('.btn-icon-shop');

    btn.addEventListener('click', function () {
        menuShop.classList.toggle('visible');
    })
}

const btnIconShopX = () => {
    let btn = document.querySelector('.btn-icon-shop-x');

    btn.addEventListener('click', function () {
        menuShop.classList.toggle('visible');
    })
}

btnIconShop();
btnIconShopX();
