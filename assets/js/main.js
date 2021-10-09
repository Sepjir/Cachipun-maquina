
// Agregando variables y consulta al usuario de veces a jugar
let jugadaUsuario
let vecesJugar = parseInt(prompt("¿Cuántas veces quieres jugar?:"));


//For para establecer el número de jugadas del usuario
for(i=1; i <= vecesJugar; i++){

  //Consulta de jugadas del usuario, estableciendo que estas sean alguna de las 3: Piedra, Papel o Tijeras
    do {
      jugadaUsuario = prompt('Elige tu jugada, Piedra Papel o Tijeras').toLowerCase();
    } while (jugadaUsuario !== 'piedra' && jugadaUsuario !== 'papel' && jugadaUsuario !== 'tijeras');  
      
      //Creando la jugada de la Máquina, usando Math.random para establecer parametros  
        let jugadaMaquina= Math.floor(Math.random()*3);

        //Condicional para guardar en variable jugada de máquina
        if(jugadaMaquina == 0){
          jugadaMaquina = 'piedra'
        }else if(jugadaMaquina == 1){
          jugadaMaquina = 'papel'
        }else {
          jugadaMaquina = 'tijeras'
        }
        
        //Condicional para crear jugada de la máquina, estableciendo condiciones para 3 casos: Ganar, Perder o Empatar e imprimiendo la acción en el DOM y a través de un Alert
        if (jugadaUsuario === jugadaMaquina) {
          alert(`En la ronda ${i}: Oh, no... empataron`)
          document.write(`<h2>En la ronda ${i} elegiste: ${jugadaUsuario} y la maquina eligio ${jugadaMaquina} y ¡Haz empatado con la máquina!</h2>`);
        } else if ((jugadaUsuario === "piedra" && jugadaMaquina === 'tijera') || (jugadaUsuario === "papel" && jugadaMaquina === 'piedra') || (jugadaUsuario === "tijera" && jugadaMaquina === 'papel')) {
          alert(`En la ronda ${i}: ¡GANASTE!`)
          document.write(`<h2>En la ronda ${i} elegiste: ${jugadaUsuario} y la maquina eligio ${jugadaMaquina} y ¡Haz ganado contra la máquina!</h2>`);
        } else {
          alert(`En la ronda ${i}: perdiste :C`)
          document.write(`<h2>En la ronda ${i} elegiste: ${jugadaUsuario} y la maquina eligio ${jugadaMaquina} y ¡Haz perdido contra la máquina!</h2>`);
        }
}