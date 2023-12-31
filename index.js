const products = [
  {
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Zapatos Nike',
    price: '80'
  },
  {
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Audifonos',
    price: '20'
  },
  {
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
    name: 'Reloj',
    price: '50'
  },
  {
    img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    name: 'Smartwatch',
    price: '90'
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    name: 'Perfume',
    price: '40'
  },


  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/79aa37e1-a283-4a3f-9fc2-6dd96c718c5e/calzado-de-f%C3%BAtbol-de-corte-high-para-terreno-firme-phantom-gx-elite-qC22Bz.png",
    name: 'zapatillas nike',
    price: '500'
  },

  {
    img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2697244087014671a47ae11279959ffa_9366/camiseta-titular-real-madrid-23-24.jpg",
    name: 'Camisa de futbol',
    price: '100'
  },

  {
    img: "https://fotos.perfil.com//2022/12/13/900/0/al-hilm-1471546.jpg",
    name: 'Balon de futbol',
    price: '75'
  },

  {
    img: "https://www.jbl.com.ar/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw7680a5c4/pdp/JBL_Charge_5_Lifestyle1_904x560px.png",
    name: 'jbl 5 charge',
    price: '160'
  },

  {
    img: "https://philco.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/f/m/fm18p9am211p-2.jpg",
    name: 'Bicicleta',
    price: '600'
  },
]




const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

const productlist = document.querySelector('.container-items')

let carrito = []

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos')

const cartEmpty = document.querySelector('.cart-empty');

const cartTotal = document.querySelector('.cart-total');

productlist.addEventListener('click', e => {
  if (e.target.classList.contains("btn")) {  
    const product = e.target.parentElement

    const infoProduct = {
      quantity: 1,
      title: product.querySelector('h2').textContent,
      price: product.querySelector('p').textContent,
    };

    const exits = carrito.some(product => product.title === infoProduct.title);


    if(exits){
      const products = carrito.map(product => {
        if(product.title === infoProduct.title){
          product.quantity++;
          return product;
        }else{
          return product;
        }
      });
      carrito = [...products];
    }else{
      carrito = [...carrito, infoProduct];
    }
    showHTML();
  }
});


rowProduct.addEventListener("click", (e) => {
  if(e.target.classList.contains("icon-close")){
    const product = e.target.parentElement
    const title = product.querySelector("p").textContent

    carrito = carrito.filter(
      product => product.title !== title
    );
    showHTML();
  }
})

const showHTML = () => {

  rowProduct.innerHTML ='' ;

  let total = 0;
	let totalOfProducts = 0;
 

carrito.forEach(product => {
  const containerProduct = document.createElement("div")
  containerProduct.classList.add("cart-product")

  containerProduct.innerHTML = `
  <div class="info-cart-product">
  <span class="cantidad-producto-carrito">${product.quantity}</span>
    <p class="titulo-producto-carrito">${product.title}</p>
    <span class="precio-producto-carrito">${product.price}</span>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" class="icon-close">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>

  `;

  rowProduct.append(containerProduct);

  total =
  total + parseInt(product.quantity * product.price.slice(1));
totalOfProducts = totalOfProducts + product.quantity;


  
});

valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;


}; 































///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const productos = document.getElementById("productos");
const searchInput = document.getElementById("searchInput")
const noResults = document.getElementById("noResults");

const displayProducts = (productlist) => {
  productos.innerHTML = "";

  if (productlist.length === 0) {
    noResults.style.display = "block";
  } else {
    productlist.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `
          <img class="foto" src="${producto.img}">
          <div class="info-product">
          <h2>${producto.name}</h2>
          <p class="price">${producto.price}$</p>
            <button class="btn">Añadir al carrito</button>
          </div>
        `;
      productos.append(div);

    });
    noResults.style.display = "none";
  }
};

const parche = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((producto) => producto.name.toLowerCase().startsWith(searchTerm));


  displayProducts(filteredProducts);

};

displayProducts(products);


searchInput.addEventListener("input", parche)