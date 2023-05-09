let contactos = [
  {
    id: 1,
    nombres: "Camilo",
    apellidos: "Rojas",
    telefono: "3123456789",
    ubicaciones: [{ ciudad: "Bogotá", direccion: "Calle 100 #20-50" }],
  },
  {
    id: 2,
    nombres: "Luis",
    apellidos: "Soto",
    telefono: "3212345678",
    ubicaciones: [{ ciudad: "Medellín", direccion: "Carrera 80 #45-20" }],
  },
  {
    id: 3,
    nombres: "Andrés",
    apellidos: "Castro",
    telefono: "3112233445",
    ubicaciones: [{ ciudad: "Cali", direccion: "Avenida 6 #23-45" }],
  },
];

function agregarContacto(nuevoContacto, listaContactos) {
  listaContactos.push(nuevoContacto);
}

function borrarContacto(idContacto, listaContactos) {
  const indice = listaContactos.findIndex(
    (contacto) => contacto.id === idContacto
  );
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  } else {
    console.log("El contacto no existe en la lista");
  }
}

function imprimirContactos(listaContactos) {
  console.log("Lista de contactos:");
  listaContactos.forEach((contacto) => {
    console.log(`ID: ${contacto.id}`);
    console.log(`Nombres: ${contacto.nombres}`);
    console.log(`Apellidos: ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`Ubicaciones:`);
    contacto.ubicaciones.forEach((ubicacion) => {
      console.log(`  Ciudad: ${ubicacion.ciudad}`);
      console.log(`  Dirección: ${ubicacion.direccion}`);
    });
    console.log("---------------------------");
  });
}

const nuevoContacto = {
  id: 4,
  nombres: "Stiven",
  apellidos: "Gonzales",
  telefono: "3009876543",
  ubicaciones: [{ ciudad: "Barranquilla", direccion: "Calle 84 #45-12" }],
};

agregarContacto(nuevoContacto, contactos);
imprimirContactos(contactos);

borrarContacto(2, contactos);
imprimirContactos(contactos);
