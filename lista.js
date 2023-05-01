let contactos = ["camilo rojas", "luis soto", "andres castro"];

function agregarContacto(nombreCompleto, listaContactos) {
  listaContactos.push(nombreCompleto);
}

function borrarContacto(nombreCompleto, listaContactos) {
  const indice = listaContactos.indexOf(nombreCompleto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  } else {
    console.log("El contacto no existe en la lista");
  }
}

function imprimirContactos(listaContactos) {
  console.log("Lista de contactos:");
  listaContactos.forEach((contacto) => {
    console.log(contacto);
  });
}

agregarContacto("stiven gonzales", contactos);
imprimirContactos(contactos);
borrarContacto("andres castro", contactos);
imprimirContactos(contactos);
