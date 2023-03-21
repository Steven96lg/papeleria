
const contenedor = document.getElementById('contenedor');

//MAPEO DE PRODUCTOS    
products.map(producto => {
    let contentProduct = document.createElement('div')
    contentProduct.classList = 'contentProduct';
    let descProduct = document.createElement('div');
    descProduct.classList = 'descProduct';
    let comprarProducto = document.createElement('div');
    comprarProducto.classList = 'comprarProducto';
    //CreateElements
    let img = document.createElement('img');
    let p = document.createElement('p');
    let strong = document.createElement('strong');
    let pDesc = document.createElement('p')
    pDesc.classList = 'pdesc'
    let btnOne = document.createElement('button')
    let btnTwo = document.createElement('button')
    btnOne.classList = 'buyProduct'
    btnTwo.classList = 'addTocar'
    //ElementsValue
    img.src = producto.imgUrl
    p.textContent = producto.name
    strong.textContent = `$${producto.precio}`
    pDesc.textContent = producto.desc
    btnOne.textContent = 'Comprar Producto'
    btnTwo.textContent = 'Agregar al Carrito'
    btnOne.value = 'buyProduct';
    btnTwo.value = 'addToCar';

    descProduct.appendChild(p)
    descProduct.appendChild(strong)
    comprarProducto.appendChild(btnOne)
    comprarProducto.appendChild(btnTwo)
    contentProduct.appendChild(img)
    contentProduct.appendChild(descProduct)
    contentProduct.appendChild(pDesc)
    contentProduct.appendChild(comprarProducto)
    contenedor.appendChild(contentProduct)
})

const buyProduct = document.querySelector('.buyProduct');
const addToCar = document.querySelector('.addTocar');

console.log(buyProduct)
console.log(addToCar)

document.addEventListener('click', (e) => {

    let buyMyProduct = document.querySelector('.buyMyProduct');
    if(e.target.value === 'buyProduct'){
        buyMyProduct.style.display = 'flex';
        window.scrollTo({
            top: 0
        });
    }
})

const closeBtn = document.querySelector('.btn-close');
const btnPagar = document.querySelector('.btnPagar');

closeBtn.addEventListener('click', (e) => {
    let buyMyProduct = document.querySelector('.buyMyProduct');
    buyMyProduct.style.display = 'none'
})

btnPagar.addEventListener('click', (e) => {
        alert('TU PEDIDO ESTA EN CAMINO')
        buyMyProduct.style.display = 'none';

    e.preventDefault;
})

console.log(btnPagar)