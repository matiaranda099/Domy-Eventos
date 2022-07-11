//Creo mi array de objetos con los productos

const productos = [
    {
        id: 1,
        nombre:'Elaborados',
        valor: 600,
        imageURL: './img/food1.jpg'

    },
    {
        id: 2,
        nombre:'Empanados',
        valor: 700,
        imageURL: './img/food2.jpg'
    },
    {
        id: 3,
        nombre:'Postres',
        valor: 800,
        imageURL: './img/food3.jpg'
    }
];

//Dibujo las tarjetas con forEach

const contenedor = document.getElementById("container");
productos.forEach((elemento, indice) =>{
    let carta = document.createElement("div");
    carta.classList.add("card" ,"col-sm-12", "col-lg-3");
    carta.innerHTML = `
        <img src="${elemento.imageURL}" class="card-img-top" alt="${elemento.nombre}">
        <div class="card-body">
            <h5 class="card-title fw-bold text-black">${elemento.nombre}</h5>
            <p class="card-text text-black">$ ${elemento.valor}</p>
            <button class="btn btn-primary" onClick="add('${elemento.nombre}', ${elemento.valor})"> AGREGAR </button>
        </div>
    `
     contenedor.appendChild(carta);
});

//Asigno eventos y los manipulo con Dom

let products = [];
let total = 0;


function add (nombre , valor){
    console.log(nombre, valor);
    products.push(nombre);
    total = total + valor;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}


function pay (){
    window.alert(products.join(": , \n"));
}

