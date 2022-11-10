let insertDOMcontent = document.querySelector("#insertDOMcontent");
let listaCarrito = document.querySelector("#listaCarrito");
let productosSeleccionados = [];

// Objeto JSON Base de dato
let productos = [
    {
        _id: "636c21c835dc44e5121a1bd0",
        title: "Error",
        name: "The Warning",
        picture: '<a href="https://files.fm/u/6tnng9mu9#/view/error.jpg"><img class="imagen-cs" src="https://files.fm/thumb_show.php?i=5mn7awns4"></a>',
        price: 1700,
    },
    {
        _id: "636c21c8c6409352b2ca4184",
        title: "Mayday",
        name: "The Warning",
        picture: '<a href="https://files.fm/u/3g3uju9gd#/view/mayday.jpg"><img class="imagen-cs" src="https://files.fm/thumb_show.php?i=z4rvuxfem"></a>',
        price: 1450,
    },
    {
        _id: "636c21c84aac499d9819bfa6",
        title: "Queen Of The Murder Scene",
        name: "The Warning",
        picture: '<a href="https://files.fm/u/9dz4rrypt#/view/queenofthemurderscene.jpg"><img class="imagen-cs" src="https://files.fm/thumb_show.php?i=keavdtg36"></a>',
        price: 1350,
    },
    {
        _id: "636c21c898750d3acc2fe683",
        title: "XXI Century Blood",
        name: "The Warning",
        picture: '<a href="https://files.fm/u/qr74gyfzj#/view/XXIcenturyblood.jpg"><img class="imagen-cs" src="https://files.fm/thumb_show.php?i=qps4z5nw9"></a>',
        price: 1200,
    },
    {
        _id: "636c21c88e472b8bd7816feb",
        title: "Escape The Mind",
        name: "The Warning",
        picture: '<a href="https://files.fm/u/y9fvmf5t5#/view/escapethemind.jpg"><img class="imagen-cs" src="https://files.fm/thumb_show.php?i=9jgawgmng"></a>',
        price: 1050,
    },
];

document.addEventListener("DOMContentLoaded", () => {
    productosSeleccionados = JSON.parse(localStorage.getItem("productos")) || [];
    agregarProductoAlcarro();
});

function sincronizarConLocalStorage(){
    localStorage.setItem("productos", JSON.stringify(productosSeleccionados));
};

function printData( object) {
    object.forEach(( element, index ) => {
        insertDOMcontent.innerHTML += `<div class="col-md-4">
                <div class="card mb-4">
                    <div>${element.picture}</div>
                    <div class="card-body">
                    <div class="info-card">
                      <h5 class="card-title">${element.title}</h5>
                      <small>${element.name}</small>
                      <img src="../images/estrellas.png" class="d-block my-3" alt="Estrellas">
                      <p class="precio"><span class="descuento">$2000</span>  <span class="u-pull-right">$${element.price}</span></p>
                      <hr>
                      <div class="d-grid gap-2">
                      <a href="#" class="btn btn-info agregar-carrito" id="${element._id}">Agregar al carrito</a>
                      </div>
                    </div>
                    </div>
                  </div>
            </div>`;
    });
}

function agregarProductoAlcarro() {
    listaCarrito.innerHTML = ``;
    productosSeleccionados.forEach((element,index) => {
        listaCarrito.innerHTML += `<tr>
            <td><div">${element.picture}</div></td>
            <td>${element.title}</td>
            <td class="text-center">${element.price}$</td>
            <td class="text-center"><a href="#" id="${element._id}" class="borrar-curso" data-id="1">X</a></td>
          </tr>`
    })

    let buttonDelete = document.querySelectorAll('#listaCarrito tr td a');
    
    buttonDelete.forEach(element => {
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            let id = e.target.id 
            productosSeleccionados = productosSeleccionados.filter( producto => producto._id !== id );
            console.log('Salida de productosSeleccionados', productosSeleccionados)
            agregarProductoAlcarro()
        })
    })

    sincronizarConLocalStorage();
}


function buscarProducto ( idProducto, buscarProductos ){
    let productoSeleccionado = buscarProductos.find((element) => idProducto == element._id);
    let producto = [];
    producto.push(productoSeleccionado);
    productosSeleccionados = [...productosSeleccionados, ...producto];
    agregarProductoAlcarro();
};


printData(productos);

// Seleccionamos los botones del card en un HTML Colection
let buttonCard = document.querySelectorAll("#insertDOMcontent .card a");

// Recorremos los botones asocimaos a un escuchador de eventos
buttonCard.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        let id = e.target.id;
        buscarProducto(id, productos);
    });
});