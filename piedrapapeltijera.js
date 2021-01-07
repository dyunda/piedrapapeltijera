var option1 = "piedra"; 
var option2 = "papel";  

piedrapapeltijera("piedra","papel")


function piedrapapeltijera(option1,option2) {
		
	if(option1 === "piedra") {
		if(option2 === "piedra") {
			accion = 'empate'
		} else if(option2 == "tijera") { 
			accion = 'ganaste'
		} else { 
			accion = 'perdiste'
		}
	} else if(option1 === "tijera") { 
		if(option2 === "piedra") {
			accion = 'perdiste'
		} else if(option2 == "tijera") { 
			accion = 'empate'
		} else { 
			accion = 'ganaste'
		}
	} else { 
		if(option2 === "piedra") {
			accion = 'ganaste'
		} else if(option2 == "tijera") { 
			accion = 'perdiste'
		} else { 
			accion = 'empate'
		}
	} 

	console.log(`Hola ${accion}`);
	
}
