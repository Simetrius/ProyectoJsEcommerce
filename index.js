//Declaración de clases
//Declaro 3 diferentes, para 3 arrays de objetos diferentes, para posteriormente poder filtrar.
class Discos{
    constructor (id, titulo, interprete, año, imagen, genero, precio){
        this.id = id,
        this.titulo = titulo,
        this.interprete = interprete,
        this.año = año,
        this.imagen = imagen,
        this.genero = genero,
        this.precio = precio
    }
}

class Remeras{
	constructor (id, titulo, banda, imagen, genero, precio){
		this.id = id,
        this.titulo = titulo,
        this.banda = banda,
        this.imagen = imagen,
        this.genero = genero,
        this.precio = precio
	}
}

class Accesorios{
	constructor (id, titulo, imagen, precio){
		this.id = id,
		this.titulo = titulo,
		this.imagen = imagen,
		this.precio = precio
	}
}

//DOM
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let divProductos = document.getElementById("productos")
let botonEliminar = document.getElementById("botonEliminar")

//Objetos discografia, remerasRock y accesoriosRock
//Llamada asincrónica 1
let discografia = [];

const cargarDiscografia = async () =>{
	const response = await fetch ("discos.json")
	const data = await response.json()
	for(let disco of data){
		let nuevoProducto = new Discos(disco.id, disco.titulo, disco.interprete, disco.año, disco.imagen, disco.genero, disco.precio)
		discografia.push(nuevoProducto)
	}
	//Uso console.log para que figure todo el catálogo por consola
	console.log(discografia)
	mostrarCatalogo()
}
cargarDiscografia()



//LLamada asincronica 2
let remerasRock = [];

const cargarRemerasRock = async () =>{
	const response = await fetch ("remeras.json")
	const data = await response.json()
	for(let remera of data){
		let nuevoProducto = new Remeras(remera.id, remera.titulo, remera.banda, remera.imagen, remera.genero, remera.precio)
		remerasRock.push(nuevoProducto)
	}
	//Uso console.log para que figure todo el catálogo por consola
	console.log(remerasRock)
	mostrarCatalogo2()
}
cargarRemerasRock()



//Llamada asincronica 3
let accesoriosRock = [];

const cargarAccesoriosRock = async () =>{
	const response = await fetch ("accesorios.json")
	const data = await response.json()
	for(let accesorios of data){
		let nuevoProducto = new Accesorios(accesorios.id, accesorios.titulo, accesorios.imagen, accesorios.precio)
		accesoriosRock.push(nuevoProducto)
	}
	//Uso console.log para que figure todo el catálogo por consola
	console.log(accesoriosRock)
	mostrarCatalogo3()
}
cargarAccesoriosRock()


//Array productosEnCarrito
let productosEnCarrito = []


//Iniciar Array Carrito
if(localStorage.getItem("carrito")){
	productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
	localStorage.setItem("carrito", [])
}

//Plantillas
//Creo las 3 plantillas mediante funciones, para reducir la cantidad de código en el HTML


function mostrarCatalogo(){
	
	discografia.forEach((disco)=>{
		let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =  `<section class="productos">
										<div class="productos__center">
											<div class="producto">
												<div class="image__container">
													<img src=${disco.imagen} alt="discos de rock">
												</div>
		
												<div class="producto__footer">
													<h1>Discos Originales</h1>
													<div class="rating">
														<span>
				  											<i class="bx bxs-star"></i>
				  										</span>
				  										<span>
				  											<i class="bx bxs-star"></i>
				  										</span>
				  										<span>
				  											<i class="bx bxs-star"></i>
				  										</span>
				  										<span>
				  											<i class="bx bxs-star"></i>
														</span>
														<span>
															<i class="bx bx-star"></i>
														</span>
													</div>

													<p class="tituloCard">${disco.titulo}</p>
													<p class="interpreteCard">${disco.interprete}</p>
													<p class="generoCard">${disco.genero}</p>
													<p class="añoCard">Año ${disco.año}</p>
				
													<div class="price">$ * ${disco.precio}</div>
												</div>
												<div class="bottom">
													<div class="btn__group">
														<a href="#"  class = "btn${disco.id} btn" >Añadir carrito</a>
													</div>
												</div>
											</div>
										</div>
									</section>`
		divProductos.appendChild(nuevoProducto)
				
		//Agrego evento para los botones de añadir al carrito, capturandolo por clases
				
		let btnAñadirCarrito = document.getElementsByClassName(`btn${disco.id}`)
		for(let discoBoton of btnAñadirCarrito){
			discoBoton.addEventListener("click", ()=>{agregarAlCarrito(disco)})
		}
				
		//utilizo la funcion local dentro de cada una de las funciones diferentes de mostrar catalogo
		function agregarAlCarrito(disco){
			console.log(`El disco ${disco.titulo} del interprete ${disco.interprete} ha sido agregado al carrito`)
			productosEnCarrito.push(disco)
			console.log(productosEnCarrito)
			//Cargar en el Storage
			localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
					
			//Agrego Sweet Alert al boton
			swal({
				title: "Producto Agregado al Carrito",
				text: `Usted a agregado "${disco.titulo}"`,
				icon: "success",
				button: "Ok"
			})
		}
	})
}

//2da funcion
function mostrarCatalogo2(){
	
	remerasRock.forEach((remera)=>{
		let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =  `<section class="productos">
										<div class="productos__center">
											<div class="producto">
												<div class="image__container">
													<img src=${remera.imagen} alt="remeras de rock">
												</div>
		
												<div class="producto__footer">
													<h1>Remeras Originales</h1>
													<div class="rating">
														<span>
															<i class="bx bxs-star"></i>
														</span>
														<span>
															<i class="bx bxs-star"></i>
														</span>
														<span>
															<i class="bx bxs-star"></i>
														</span>
														<span>
				  											<i class="bx bxs-star"></i>
														</span>
														<span>
															<i class="bx bx-star"></i>
														</span>
													</div>

													<p class="tituloCard">${remera.titulo}</p>
													<p class="bandaCard">${remera.banda}</p>
													<p class="generoCard">${remera.genero}</p>
													<div class="price">$ * ${remera.precio}</div>
												</div>
												<div class="bottom">
													<div class="btn__group">
														<a href="#" class="btn${remera.id} btn">Añadir carrito</a>
													</div>
												</div>
											</div>
										</div>
									</section>`
		divProductos.appendChild(nuevoProducto)
			
		//Agrego evento para los botones de añadir al carrito
			
		let btnAñadirCarrito = document.getElementsByClassName(`btn${remera.id}`)
		for(let remeraBoton of btnAñadirCarrito){
			remeraBoton.addEventListener("click", ()=>{agregarAlCarrito(remera)})
		}
		
		//utilizo la funcion local dentro de cada una de las funciones diferentes de mostrar catalogo
		function agregarAlCarrito(remera){
			console.log(`El producto ${remera.titulo} de la banda ${remera.banda} ha sido agregado al carrito`)
			productosEnCarrito.push(remera)
			console.log(productosEnCarrito)
			//Cargar en el Storage
			localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
			
			//Agrego Sweet Alert al boton
			swal({
				title: "Producto Agregado al Carrito",
				text: `Usted a agregado "${remera.titulo}"`,
				icon: "success",
				button: "Ok"
			})
		}
	})
}

//3ra funcion
function mostrarCatalogo3(){
	
	accesoriosRock.forEach((accesorios)=>{
		let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =  `<section class="productos">
										<div class="productos__center">
											<div class="producto">
												<div class="image__container">
													<img src=${accesorios.imagen} alt="accesorios de rock">
												</div>
		
												<div class="producto__footer">
													<h1>Accesorios Originales</h1>
													<div class="rating">
														<span>
															<i class="bx bxs-star"></i>
														</span>
														<span>
															<i class="bx bxs-star"></i>
														</span>
														<span>
				  											<i class="bx bxs-star"></i>
				  										</span>
				  										<span>
				  											<i class="bx bxs-star"></i>
				  										</span>
				  										<span>
				  											<i class="bx bx-star"></i>
				  										</span>
				  									</div>

			  										<p class="tituloCard">${accesorios.titulo}</p>
			  										<div class="price">$ * ${accesorios.precio}</div>
			  									</div>
			  									<div class="bottom">
			  										<div class="btn__group">
			  											<a href="#" class="btn${accesorios.id} btn">Añadir carrito</a>
			  										</div>
			  									</div>
			  								</div>
			  							</div>
									</section>`
		divProductos.appendChild(nuevoProducto)
			  
		//Agrego evento para los botones de añadir al carrito
			  
		let btnAñadirCarrito = document.getElementsByClassName(`btn${accesorios.id}`)
		for(let accesoriosBoton of btnAñadirCarrito){
			accesoriosBoton.addEventListener("click", ()=>{agregarAlCarrito(accesorios)})
		}
				
		//utilizo la funcion local dentro de cada una de las funciones diferentes de mostrar catalogo
		function agregarAlCarrito(accesorios){
			console.log(`El Producto ${accesorios.titulo} ha sido agregado al carrito`)
			productosEnCarrito.push(accesorios)
			console.log(productosEnCarrito)
			//Cargar en el Storage
			localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
			
			//Agrego Sweet Alert al boton
			swal({
				title: "Producto Agregado al Carrito",
				text: `Usted a agregado "${accesorios.titulo}"`,
				icon: "success",
				button: "Ok"
			})
		}
	})
}

//Evento botonCarrito
botonCarrito.addEventListener('click', () => {
	cargarProductosCarrito(productosEnCarrito)
})

function cargarProductosCarrito(productosDelStorage) {

    modalBody.innerHTML = " "  
    productosDelStorage.forEach((productosEnCarrito) => {
        
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productosEnCarrito.id}" style="max-width: 300px;">
                <img class="card-img-top" src="${productosEnCarrito.imagen}" alt="${productosEnCarrito.titulo}">
                <div class="card-body">
                        <h4 class="card-title">${productosEnCarrito.titulo}</h4>
                    
                        <p class="card-text">$${productosEnCarrito.precio}</p> 
                        <button onclick="eliminarCarrito(${productosEnCarrito.id})" class= "btn btn-danger" id="botonEliminar">Eliminar<i class="fas fa-trash-alt"></i></button>
                </div>    
            
            
            </div>`
    
	})
//Function del total
//productosEnCarritos
compraTotal(productosDelStorage)

}

function compraTotal(productosTotal) {
    acumulador = 0;
    //recorrer productosTotal
    productosTotal.forEach((productoCarrito)=>{
        acumulador += productoCarrito.precio 
    })
    console.log(acumulador)
    //if acumularo = 0 o !=
    if(acumulador == 0){
        parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`
    }else{
        parrafoCompra.innerHTML = `Importe de su compra total = $ ${acumulador}`
    }
}

const eliminarCarrito = (productosEnCarritoId) =>{

	const item = productosEnCarrito.find((productosEnCarrito)=> productosEnCarrito === productosEnCarritoId)
	const indice = productosEnCarrito.indexOf(item)
	productosEnCarrito.splice(indice, 1)

	cargarProductosCarrito()
}
