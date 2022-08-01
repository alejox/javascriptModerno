//Object literal
const producto = {
  nombre:'Monitor 20 pulgadas',
  precio:300,
  disponible:true,
  informacion: {
    medidas: {
      peso: '1kg',
      medida: '1metro'
    },
    fabricacion:{
      pais:'china'
    }
  }
}

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.fabricacion.pais);

