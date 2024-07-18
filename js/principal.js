import Cl_Salon from "./Cl_Salon.js";
import Cl_estudiante from "./Cl_estudiantes.js";

let est1 = new Cl_estudiante(888, 60);
let est2 = new Cl_estudiante(777, 50);
let est3 = new Cl_estudiante(999, 40);
let est4 = new Cl_estudiante(333, 90);
let est5 = new Cl_estudiante(111, 30);
let est6 = new Cl_estudiante(666, 90);
let est7 = new Cl_estudiante(444, 48);
let est8 = new Cl_estudiante(222, 60);

let salon = new Cl_Salon();
salon.procesarEstudiante(est1);
salon.procesarEstudiante(est2);
salon.procesarEstudiante(est3);
salon.procesarEstudiante(est4);
salon.procesarEstudiante(est5);
salon.procesarEstudiante(est6);
salon.procesarEstudiante(est7);
salon.procesarEstudiante(est8);

let salida = document.getElementById("Salida");
salida.innerHTML += "Porcentaje de aprobados: " +"%"+ salon.porcAprob() + "<br> Cédula de uno de los mejores estudiantes: " + salon.mostrarMejorEst();
