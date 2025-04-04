/*El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. 
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias. 
Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de 
notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y 
promedio mínimo de 12 (1=beisbol - 2=fútbol). 
Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un 
estudiante y reporte si es admitido en el equipo que solicita.

*/

import deportista from "./Cl_deportista.js";

let dep1 = new deportista("Juan", 132, 8, 1, 21),
    dep2 = new deportista("Felix", 110, 10, 2, 20);

let salida = document.getElementById("salida");

salida.innerHTML = `
<br>Nombre del estudiante: ${dep1.nombre}
<br>Acumulado de notas: ${dep1.acNotas}
<br>Cantidad de materias: ${dep1.cantMaterias}
<br>Deporte: ${dep1.deporte}
<br>Edad: ${dep1.edad}
<br>Nota promedio: ${dep1.promNotas()}
<br>${dep1.nombre} ${dep1.tipDeporte()}
<br>
<br><br>Nombre del estudiante: ${dep2.nombre}
<br>Acumulado de notas: ${dep2.acNotas}
<br>Cantidad de materias: ${dep2.cantMaterias}
<br>Deporte: ${dep2.deporte}
<br>Edad: ${dep2.edad}
<br>Nota promedio: ${dep2.promNotas()}
<br>${dep2.nombre} ${dep2.tipDeporte()}`