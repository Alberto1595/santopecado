// ============================================================
//  CONFIGURACIÓN DEL NEGOCIO
//  Modifica este archivo para personalizar el menú
// ============================================================

export const negocio = {
  nombre: "Santo Pecado",
  subtitulo: "BURGERS & MORE",
  tagline: '"Aquí el sabor abre caminos."',
  direccion: "De la Garza #211, Fracc. Santa María, Cadereyta Jiménez",
  horario: "Jueves a domingo 6:30pm a 11:00pm",
  whatsapp: "528132451249",
  redes: {
    whatsapp: "https://wa.me/528132451249",
    facebook: "https://www.facebook.com/share/1Kh95wxCKr/",
    instagram: "https://www.instagram.com/santopecado_cadereyta?igsh=MWl0eXA1N3RlYm1kNw==",
    maps: "https://maps.app.goo.gl/4S9iXwqUNAuaSnC39",
  },
};

export type Producto = {
  id: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  variantes?: { label: string; precio: number }[];
  badge?: string;
};

export type Seccion = {
  id: string;
  emoji: string;
  label: string;
  titulo: string;
  productos: Producto[];
};

export const secciones: Seccion[] = [
  {
    id: "burgers",
    emoji: "🍔",
    label: "Hamburguesas",
    titulo: "Hamburguesas",
    productos: [
      {
        id: "pecado-clasico",
        nombre: "Pecado Clásico",
        descripcion: "150g de carne de res con receta de la casa, jamón, queso amarillo, queso blanco, lechuga, tomate, cebolla y aderezos",
        precio: 70,
        variantes: [{ label: "Sin papas", precio: 70 }, { label: "Con papas", precio: 95 }],
      },
      {
        id: "doble-pecado",
        nombre: "Doble Pecado",
        descripcion: "300g de carne de res con receta de la casa, jamón, queso blanco, queso amarillo, lechuga, tomate, cebolla y aderezos",
        precio: 100,
        variantes: [{ label: "Sin papas", precio: 100 }, { label: "Con papas", precio: 125 }],
      },
      {
        id: "pecado-capital",
        nombre: "Pecado Capital",
        descripcion: "150g de carne de res, salchicha para asar, queso gratinado, jamón, queso blanco, queso amarillo, lechuga, tomate, cebolla y aderezos",
        precio: 95,
        variantes: [{ label: "Sin papas", precio: 95 }, { label: "Con papas", precio: 120 }],
      },
      {
        id: "asada-bendita",
        nombre: "Asada Bendita",
        descripcion: "Carne asada, queso gratinado, jamón, queso amarillo, queso blanco, lechuga, tomate, cebolla y aderezos",
        precio: 90,
        variantes: [{ label: "Sin papas", precio: 90 }, { label: "Con papas", precio: 115 }],
      },
      {
        id: "pollo-divino",
        nombre: "Pollo Divino",
        descripcion: "Carne de pollo, jamón, queso amarillo, queso blanco, lechuga, tomate, cebolla y aderezos",
        precio: 75,
        variantes: [{ label: "Sin papas", precio: 75 }, { label: "Con papas", precio: 100 }],
      },
      {
        id: "doble-pollo-divino",
        nombre: "Doble Pollo Divino",
        descripcion: "Doble carne de pollo, jamón, queso amarillo, queso blanco, lechuga, tomate, cebolla y aderezos",
        precio: 105,
        variantes: [{ label: "Sin papas", precio: 105 }, { label: "Con papas", precio: 130 }],
      },
      {
        id: "bacon-celestial",
        nombre: "Bacon Celestial",
        descripcion: "150g de carne de res, tocino a la plancha, 2 aros de cebolla, jamón, queso blanco, queso amarillo, salsa bbq y aderezos",
        precio: 100,
        variantes: [{ label: "Sin papas", precio: 100 }, { label: "Con papas", precio: 125 }],
      },
      {
        id: "sabor-caribe",
        nombre: "Sabor del Caribe",
        descripcion: "150g de carne de res, piña a la plancha, queso gratinado, jamón, queso blanco, queso amarillo, lechuga, tomate, cebolla, mango habanero y aderezos",
        precio: 95,
        variantes: [{ label: "Sin papas", precio: 95 }, { label: "Con papas", precio: 110 }],
      },
      {
        id: "cielo-mar-tierra",
        nombre: "Cielo, Mar y Tierra",
        descripcion: "150g de carne de res, camarones empanizados, carne de pollo, queso fundido y aderezos",
        precio: 130,
        variantes: [{ label: "Sin papas", precio: 130 }, { label: "Con papas", precio: 155 }],
      },
      {
        id: "bendicion-italiana",
        nombre: "Bendición Italiana",
        descripcion: "150g de carne de res, 3 piezas de salami, salsa de pizza, queso gratinado, jamón, queso blanco, queso amarillo y aderezos",
        precio: 115,
        variantes: [{ label: "Sin papas", precio: 115 }, { label: "Con papas", precio: 140 }],
      },
      {
        id: "pecado-supremo",
        nombre: "Pecado Supremo",
        descripcion: "300g de carne de res, jamón, queso blanco, queso amarillo, queso gratinado, bañada en queso cheddar y tocino deshidratado y aderezos",
        precio: 150,
        variantes: [{ label: "Sin papas", precio: 150 }, { label: "Con papas", precio: 175 }],
        badge: "👑 Especial",
      },
      {
        id: "burger-boneless",
        nombre: "Hamburguesa de Boneless",
        descripcion: "150g de boneles partidos, queso gratinado, jamón, queso amarillo, queso blanco, salsa búfalo, salsa ranch y aderezos",
        precio: 100,
        variantes: [{ label: "Sin papas", precio: 100 }, { label: "Con papas", precio: 125 }],
      },
      {
        id: "burger-tenders",
        nombre: "Hamburguesa de Tenders",
        descripcion: "3-4 piezas de tenders, jamón, queso amarillo, queso blanco, queso gratinado, salsa búfalo, salsa ranch y aderezos",
        precio: 100,
        variantes: [{ label: "Sin papas", precio: 100 }, { label: "Con papas", precio: 125 }],
      },
    ],
  },
  {
    id: "fried",
    emoji: "🍗",
    label: "Fried & More",
    titulo: "Fried & More",
    productos: [
      {
        id: "boneless",
        nombre: "Bendición de Boneless",
        descripcion: "Boneles de pollo bañados en salsa² a elección o con cup de 2oz, acompañados de papas y cup de 2oz con ranch",
        precio: 100,
        variantes: [{ label: "Media 150g", precio: 100 }, { label: "Completa 300g", precio: 170 }],
      },
      {
        id: "tenders",
        nombre: "Bendición de Tenders",
        descripcion: "4-5 piezas de tenders de pollo bañados en salsa² a elección o con cup de 2oz, acompañados de papas y cup de 2oz con ranch",
        precio: 120,
      },
      {
        id: "alitas",
        nombre: "Bendición del Cielo",
        descripcion: "8-9 piezas de alitas de pollo empanizadas, bañadas en salsa² a elección, acompañadas de papas y cup de 2oz con ranch",
        precio: 120,
      },
      {
        id: "box-tentacion",
        nombre: "Box Tentación",
        descripcion: "Bendición del cielo, bendición de boneles, papas divinas, dedos del edén, aros celestiales bañados en 1 a 3 salsas² a elección, con dos cup de 2oz con ranch",
        precio: 145,
        badge: "🔥 Favorito",
      },
      {
        id: "duo-santo-pecado",
        nombre: "Dúo Santo Pecado",
        descripcion: "Pecado clásico o pollo divino + bendición de boneles bañados en salsa a elegir, con cup de 2oz ranch (opción a otra hamburguesa con costo extra)",
        precio: 175,
      },
      {
        id: "papas-divinas",
        nombre: "Papas Divinas",
        descripcion: "200g de papas a la francesa fritas con 2 sobres individuales de ketchup",
        precio: 50,
      },
      {
        id: "papas-cheddar",
        nombre: "Papas Divinas con Queso Cheddar",
        descripcion: "200g de papas bañadas en salsa de queso cheddar y tocino deshidratado",
        precio: 75,
      },
      {
        id: "papas-asada",
        nombre: "Papas Divinas con Carne Asada",
        descripcion: "200g de papas bañadas en queso gratinado y 100g de carne asada",
        precio: 100,
      },
      {
        id: "papas-supremas",
        nombre: "Papas Supremas",
        descripcion: "300g de papas bañadas en queso gratinado y queso cheddar, con 150g de boneles bañados en salsa ranch y búfalo, más 100g de carne asada",
        precio: 150,
        variantes: [{ label: "Chica", precio: 150 }, { label: "Grande", precio: 170 }],
        badge: "👑 Especial",
      },
      {
        id: "dedos-eden",
        nombre: "Dedos del Edén",
        descripcion: "5 dedos de queso mozzarella",
        precio: 70,
      },
      {
        id: "aros-celestiales",
        nombre: "Aros Celestiales",
        descripcion: "10 aros de cebolla empanizados",
        precio: 70,
      },
    ],
  },
  {
    id: "asada",
    emoji: "🥩",
    label: "Carne Asada",
    titulo: "Carne Asada",
    productos: [
      {
        id: "tacos-celestiales",
        nombre: "Tacos Celestiales",
        descripcion: "5 tacos de carne asada en tortilla de maíz, cup de 2oz con salsa casera, cup de 2oz con pico de gallo, cebolla asada y 1 chile toreado",
        precio: 115,
        variantes: [{ label: "Sin queso", precio: 115 }, { label: "Con queso", precio: 145 }],
      },
      {
        id: "totopos-gloriosos",
        nombre: "Totopos Gloriosos",
        descripcion: "Totopos caseros con frijoles refritos, queso gratinado, 100g de carne asada, cup de 2oz con salsa casera y pico de gallo",
        precio: 120,
        variantes: [{ label: "Sin salchicha", precio: 120 }, { label: "Con salchicha", precio: 145 }],
      },
      {
        id: "tostada-celestial",
        nombre: "Tostada Celestial",
        descripcion: "Cama de tostada con queso gratinado, carne asada, tapa de tostada, cup de 2oz con salsa de la casa y cup de 2oz con pico de gallo",
        precio: 40,
      },
      {
        id: "salchicha-celestial",
        nombre: "Salchicha Celestial",
        descripcion: "4 tortillas de maíz con queso gratinado, carne asada coronada con salchicha asada en 4 partes, cup de 2oz con salsa de la casa y pico de gallo",
        precio: 40,
      },
      {
        id: "burrito",
        nombre: "Burrito",
        descripcion: "Tortilla de harina con frijoles refritos, carne asada, queso gratinado, lechuga, tomate, cebolla, cup de 2oz salsa de la casa y cup de 2oz pico de gallo",
        precio: 50,
      },
    ],
  },
  {
    id: "hotdogs",
    emoji: "🌭",
    label: "Hot Dog's",
    titulo: "Hot Dog's",
    productos: [
      {
        id: "el-inocente",
        nombre: "El Inocente",
        descripcion: "Salchicha roja asada, pan, mayonesa, mostaza y ketchup, acompañado de 1oz de tomate picado y 1oz de cebolla picada",
        precio: 50,
        variantes: [{ label: "Sin papas", precio: 50 }, { label: "Con papas", precio: 75 }],
      },
      {
        id: "fuego-eterno",
        nombre: "El Fuego Eterno",
        descripcion: "Salchicha roja asada, pan, piña en trozos sellada en la plancha, queso fundido, salsa² mango habanero",
        precio: 80,
        variantes: [{ label: "Sin papas", precio: 80 }, { label: "Con papas", precio: 105 }],
        badge: "🌶️ Picante",
      },
      {
        id: "hotdog-supremo",
        nombre: "Hot Dog Supremo",
        descripcion: "Salchicha roja asada, pan, 3 piezas de boneless, queso cheddar, tocino deshidratado, bañado en 2 salsas²",
        precio: 100,
        variantes: [{ label: "Sin papas", precio: 100 }, { label: "Con papas", precio: 125 }],
        badge: "👑 Especial",
      },
      {
        id: "excomulgado",
        nombre: "Excomulgado",
        descripcion: "Salchicha roja asada, pan, 3 salamis, salsa de tomate para pizza, queso fundido y aderezos",
        precio: 90,
        variantes: [{ label: "Sin papas", precio: 90 }, { label: "Con papas", precio: 115 }],
      },
      {
        id: "exorcismo",
        nombre: "Exorcismo",
        descripcion: "Salchicha roja asada, tender de pollo, pan, queso fundido y aderezos",
        precio: 90,
        variantes: [{ label: "Sin papas", precio: 90 }, { label: "Con papas", precio: 115 }],
      },
      {
        id: "tierno-milagro",
        nombre: "Tierno Milagro",
        descripcion: "4 boneles, pan, queso fundido, 2 salsas² y aderezos",
        precio: 75,
        variantes: [{ label: "Sin papas", precio: 75 }, { label: "Con papas", precio: 100 }],
      },
    ],
  },
  {
    id: "extras",
    emoji: "✨",
    label: "Extras",
    titulo: "Extras",
    productos: [
      { id: "carne-hamburguesa", nombre: "Carne para Hamburguesa", descripcion: "150g de carne con receta de la casa, queso amarillo y blanco", precio: 30 },
      { id: "carne-pollo", nombre: "Carne de Pollo", descripcion: "Carne de hamburguesa de pollo, queso amarillo y blanco", precio: 35 },
      { id: "salchicha", nombre: "Salchicha", descripcion: "Salchicha asada", precio: 25 },
      { id: "pina", nombre: "Piña", descripcion: "Piña sellada a la plancha", precio: 20 },
      { id: "tocino", nombre: "Tocino", descripcion: "Tocino dorado a la plancha", precio: 30 },
      { id: "aros-hamburguesa", nombre: "Aros de Cebolla p/Hamburguesa", descripcion: "2 aros de cebolla fritos en la hamburguesa de elección", precio: 10 },
      { id: "cup-salsa", nombre: "Cup de Salsa²", descripcion: "Cup de 2oz con salsa de su preferencia", precio: 20 },
      { id: "queso-cheddar", nombre: "Queso Cheddar", descripcion: "Cup de 2oz con queso cheddar", precio: 30 },
    ],
  },
];