//Object literal
const producto = {
  nombre:'Monitor 20 pulgadas',
  precio:300,
  disponible:true
}

const medidas = {
  peso: '1kg',
  medidas: '1mt'
}

console.log(producto);
console.log(medidas);


const resultado = Object.assign(producto, medidas);

console.log(resultado);

// Spread Operator o Rest Operator

const resultado2 = {...producto, ...medidas};

console.log(resultado2);