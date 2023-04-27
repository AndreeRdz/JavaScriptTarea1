// ======================================================
//TAREA 1



// var i, j;

// for(i=1; i<=6; i++){

//     for(j=1; j<=i; j++){
        
//         document.write(j);
//     }
//     document.write("<br>");
// }


// ======================================================
//TAREA 2



// const fruta1  = ["Mango", "Banana", "Apples", "Grapes","Oranges"].sort();
// const fruta2  = ["Mango", "Banana", "WaterMelon", "Peaches","Oranges"].sort();
// let duplicados = [];
// console.log(fruta1);
// console.log(fruta2);
 
// for (let i = 0; i < fruta1.length; i++) 
//     {
//     for(let j=0; j< fruta1.length; j++){
    
//   if (fruta1[i] === fruta2[j]){
//         duplicados++;
//         console.log(fruta2[j])
//   } 
    
//   }
// }



// ======================================================
//TAREA 3




// class carrito {
//   constructor() {
//     this.productos = [];
//     this.total = 0;
//   }

//   agregarProducto(nombre, precio) {
//     const producto = { nombre, precio };
//     this.productos.push(producto);
//     this.actualizarTotal();
//   }

//   mostrarProductos() {  
//     this.productos.forEach((producto, index) => {
//       console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
//     });
//   }

//   actualizarTotal() {
//     this.total = this.productos.reduce((acumulador, producto) => {
//       return acumulador + producto.precio;
//     }, 0);
//   }
// }

// const carrito1 = new carrito();
// carrito1.agregarProducto("Leche", 1.5);
// carrito1.agregarProducto("Pan", 2);
// carrito1.agregarProducto("Arroz", 4, 1)
// try{

// }
// catch(error){
//     console.log(error)
//   }finally{
//     console.log(carrito1)
//   }
