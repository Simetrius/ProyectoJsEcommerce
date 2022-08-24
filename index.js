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


//Objetos
let catalogo = []
const disco1 = new Discos(1, "Magos espadas y rosas", "Rata Blanca", 1992,"imagenes/magosEspadasYRosas.jpg", "Metal Clásico", 3000)
catalogo.push(disco1);
const disco2 = new Discos(2, "La era de la boludez", "Divididos", 1993,"imagenes/laEraDeLaBoludez.jpg", "Hard Rock", 2500)
catalogo.push(disco2);
const disco3 = new Discos(3, "Cosa de hombres", "Memphis la Blusera", 1996,"imagenes/cosaDeHombres.jpg", "Blues", 4000)
catalogo.push(disco3);
const disco4 = new Discos(4, "Detonador de sueños", "La Renga", 2003,"imagenes/detonadorDeSueños.jpg", "Hard Rock", 3500)
catalogo.push(disco4);
const disco5 = new Discos(5, "El Reino Olvidado", "Rata Blanca", 2009,"imagenes/elReinoOlvidado.jpg", "Metal Clásico", 2800)
catalogo.push(disco5);
const disco6 = new Discos(6,"Desde Cero", "Los Pericos", 2002,"imagenes/desdeCero.jpg", "Reggae", 2500 )
catalogo.push(disco6);
const disco7 = new Discos(7,"Oktubre", "PR y sus Redonditos de Ricota", 1986, "imagenes/oktubre.jpg", "Rock", 8000)
catalogo.push(disco7);
const disco8 = new Discos(8, "Civilización", "Los Piojos", 2007,"imagenes/civilizacion.jpg", "Rock", 4500)
catalogo.push (disco8);
const disco9 = new Discos(9,"Que sea Rock", "Riff", 1997,"imagenes/queSeaRock.jpg", "Hard Rock", 5000)
catalogo.push(disco9)


//Objetos 2
let catalogo2 = []
const remera1 = new Remeras(10, "Remera - La Aplanadora del Rock", "Divididos","imagenes/remeraDivididos.jpg", "Hard Rock", 5000)
catalogo.push(remera1);
const remera2 = new Remeras(11, "Remera - Detonador de Sueños", "La Renga","imagenes/remeraLaRenga.jpg", "Hard Rock", 4500)
catalogo.push(remera2);
const remera3 = new Remeras(12, "Remera - Los Pericos", "Los Pericos","imagenes/remeraLosPericos.jpg", "Reggae", 4000)
catalogo.push(remera3);
const remera4 = new Remeras(13, "Remera - Los Piojos Azul", "Los Piojos","imagenes/remeraLosPiojos.jpg", "Rock", 5500)
catalogo.push(remera4);
const remera5 = new Remeras(14, "Remera - AY AY AY", "Los Piojos","imagenes/remeraLosPiojos2.jpg", "Rock", 4800)
catalogo.push(remera5);
const remera6 = new Remeras(15,"Remera - Los Redondos", "PR y sus Redonditos de Ricota","imagenes/remeraLosRedondos.jpg", "Rock", 5500 )
catalogo.push(remera6);
const remera7 = new Remeras(16,"Remera - Oktubre", "PR y sus Redonditos de Ricota", "imagenes/remeraLosRedondos2.jpg", "Rock", 6000)
catalogo.push(remera7);
const remera8 = new Remeras(17, "Remera - Pappo Blues", "Pappo","imagenes/remeraPappo.jpg", "Rock", 7500)
catalogo.push (remera8);
const remera9 = new Remeras(18,"Remera - El Reino Olvidado", "Rata Blanca","imagenes/remeraRataBlanca.jpg", "Metal Clasico", 5000)
catalogo.push(remera9) 


//Objetos 3
let catalogo3 = []
const accesorio1 = new Accesorios(19, "Bandanas - *colores varios*","imagenes/bandanas.jpg", 1000)
catalogo.push(accesorio1);
const accesorio2 = new Accesorios(20,"Puas x10 uni.","imagenes/puas.jpg", 1500)
catalogo.push(accesorio2);
const accesorio3 = new Accesorios(21, "Pulseras Punk","imagenes/pulseras.jpg", 2500)
catalogo.push(accesorio3);
const accesorio4 = new Accesorios(22, "Cables de Guitarra - Ernie Ball - 3mts","imagenes/cables.jpg", 4500)
catalogo.push(accesorio4);
const accesorio5 = new Accesorios(23,"Cuerdas de Guitarra - Fender 09","imagenes/cuerdas.jpg",  3800)
catalogo.push(accesorio5);


//Arrays de objetos
//Declaro los 3 arrays
const discografia = [disco1, disco2, disco3, disco4, disco5, disco6, disco7, disco8, disco9]

const remerasRock = [remera1, remera2, remera3, remera4, remera5, remera6, remera7, remera8, remera9]

const accesoriosRock = [accesorio1, accesorio2, accesorio3, accesorio4, accesorio5]

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
let divProductos = document.getElementById("productos")


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

//Select dinamico

function selectClase(){
	let selectClase = document.getElementById("category").value
	if(selectClase === "productos"){
		mostrarCatalogo()
		mostrarCatalogo2()
		mostrarCatalogo3()
	}else if(selectClase === "discos"){
		mostrarCatalogo()
	}else if (selectClase === "remeras"){
		mostrarCatalogo2()
	}else if (selectClase === "accesorios"){
		mostrarCatalogo3()
	}else ""
}

selectClase()
