function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var marcas = ["Chevrolet", "Volkswagen", "toyota", "Nissan", "Fiat", "Ford", "Renault"]; 
var modelos = ["Silverado", "golf", "Corolla", "Sentra", "Uno", "Fiesta", "Sandero"]; 
var anios = [2020, 2019, 2018, 2017, 2016, 2015, 2014]; 

for (var i = 0; i < marcas.length; i++) {
    var newAuto = new auto(marcas[i], modelos[i], anios[i]);
	console.log(`Hola ${newAuto.marca}${newAuto.modelo} ${newAuto.annio}`)
}
