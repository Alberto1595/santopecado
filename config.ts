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
  whatsapp: "528132451249", // sin + ni espacios
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
  precio: number;           // precio base (sin variante)
  variantes?: {             // opcional: precio con/sin algo
    label: string;
    precio: number;
  }[];
  badge?: string;           // ej: "🔥 Favorito"
};

export type Seccion = {
  id: string;
  emoji: string;
  label: string;            // en el nav
  titulo: string;           // en el encabezado de sección
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
        id: "clasica",
        nombre: "Pecado Clásico",
        descripcion: "Carne de res, lechuga, tomate, cebolla, pepinillos, mostaza y catsup",
        precio: 70,
        variantes: [
          { label: "Sin papas", precio: 70 },
          { label: "Con papas", precio: 95 },
        ],
      },
      {
        id: "doble",
        nombre: "Doble Condena",
        descripcion: "Doble carne, doble queso, tocino crujiente, jalapeños y salsa especial",
        precio: 95,
        variantes: [
          { label: "Sin papas", precio: 95 },
          { label: "Con papas", precio: 120 },
        ],
        badge: "🔥 Favorito",
      },
      {
        id: "bbq",
        nombre: "BBQ Infernal",
        descripcion: "Carne de res, queso gouda, tocino, cebolla caramelizada y salsa BBQ ahumada",
        precio: 95,
        variantes: [
          { label: "Sin papas", precio: 95 },
          { label: "Con papas", precio: 120 },
        ],
      },
      {
        id: "mushroom",
        nombre: "Mushroom Maldito",
        descripcion: "Carne de res, champiñones salteados, queso suizo y salsa de ajo",
        precio: 100,
        variantes: [
          { label: "Sin papas", precio: 100 },
          { label: "Con papas", precio: 125 },
        ],
      },
      {
        id: "chicken",
        nombre: "Pollo Pecaminoso",
        descripcion: "Pechuga empanizada o a la plancha, lechuga, jitomate y aderezo chipotle",
        precio: 85,
        variantes: [
          { label: "Sin papas", precio: 85 },
          { label: "Con papas", precio: 110 },
        ],
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
        id: "alitas-bbq",
        nombre: "Alitas BBQ",
        descripcion: "Alitas crujientes bañadas en salsa BBQ ahumada. Orden de 10 piezas",
        precio: 120,
      },
      {
        id: "alitas-buffalo",
        nombre: "Alitas Buffalo",
        descripcion: "Alitas bañadas en salsa buffalo picante con aderezo ranch. Orden de 10 piezas",
        precio: 120,
        badge: "🌶️ Picante",
      },
      {
        id: "nuggets",
        nombre: "Nuggets Malditos",
        descripcion: "12 piezas de nuggets de pollo con salsa a elegir",
        precio: 85,
      },
      {
        id: "papas-fritas",
        nombre: "Papas a la Francesa",
        descripcion: "Papas crujientes con queso y jalapeños",
        precio: 55,
      },
      {
        id: "onion-rings",
        nombre: "Onion Rings",
        descripcion: "Aros de cebolla empanizados crujientes con aderezo ranch",
        precio: 60,
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
        id: "asada-clasica",
        nombre: "Carne Asada Clásica",
        descripcion: "200g de arrachera a las brasas con guarnición de frijoles, guacamole y tortillas",
        precio: 160,
      },
      {
        id: "asada-papas",
        nombre: "Asada con Papas",
        descripcion: "200g de arrachera con papas a la francesa y ensalada",
        precio: 175,
        badge: "⭐ Popular",
      },
      {
        id: "taco-asada",
        nombre: "Tacos de Asada (3 pzs)",
        descripcion: "Tres tacos de arrachera con cebolla, cilantro y salsa verde",
        precio: 90,
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
        id: "hotdog-clasico",
        nombre: "Hot Dog Clásico",
        descripcion: "Salchicha jumbo, mostaza, catsup, cebolla y pepinillos",
        precio: 55,
        variantes: [
          { label: "Sin papas", precio: 55 },
          { label: "Con papas", precio: 75 },
        ],
      },
      {
        id: "hotdog-bacon",
        nombre: "Hot Dog Bacon",
        descripcion: "Salchicha jumbo envuelta en tocino, queso fundido y cebolla caramelizada",
        precio: 70,
        variantes: [
          { label: "Sin papas", precio: 70 },
          { label: "Con papas", precio: 90 },
        ],
        badge: "🔥 Favorito",
      },
      {
        id: "hotdog-chili",
        nombre: "Hot Dog Chili",
        descripcion: "Salchicha jumbo con chili de carne, queso cheddar y cebolla",
        precio: 75,
        variantes: [
          { label: "Sin papas", precio: 75 },
          { label: "Con papas", precio: 95 },
        ],
      },
    ],
  },
  {
    id: "extras",
    emoji: "✨",
    label: "Extras",
    titulo: "Extras",
    productos: [
      { id: "refresco", nombre: "Refresco", descripcion: "Coca-Cola, Pepsi, Sprite, Manzanita — 355ml lata", precio: 25 },
      { id: "agua", nombre: "Agua Mineral", descripcion: "Agua mineral 600ml", precio: 20 },
      { id: "queso-extra", nombre: "Queso Extra", descripcion: "Queso amarillo o Gouda fundido", precio: 15 },
      { id: "tocino-extra", nombre: "Tocino Extra", descripcion: "Dos tiras de tocino crujiente", precio: 20 },
      { id: "jalape", nombre: "Jalapeños", descripcion: "Porción de jalapeños encurtidos", precio: 10 },
      { id: "guacamole", nombre: "Guacamole", descripcion: "Porción de guacamole fresco", precio: 25 },
    ],
  },
];
