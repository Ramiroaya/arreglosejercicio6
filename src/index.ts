let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  let tamañoArreglo = Number(prompt("Ingrese el tamaño del arreglo"));
  let arreglo: number[] = Array(tamañoArreglo);
  let indice: number;

  for (indice = 0; indice < tamañoArreglo; indice++) {
    arreglo[indice] = Number(prompt("Ingrese el numero en el indice" + indice));
  }
  for (indice = tamañoArreglo - 1; indice >= 0; indice--) {
    console.log("La numero en el indice    " + arreglo[indice]);
  }
});
