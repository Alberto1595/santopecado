# 🍔 Menú Digital con Carrito WhatsApp

Menú digital para restaurantes con carrito de pedidos integrado que genera el mensaje de WhatsApp automáticamente.

## Personalizar para un nuevo negocio

**Solo edita `config.ts`** — cambia nombre, teléfono, redes y productos. Nada más.

```ts
// config.ts
export const negocio = {
  nombre: "Tu Negocio",
  subtitulo: "SUBTÍTULO",
  tagline: '"Tu frase aquí."',
  direccion: "Tu dirección",
  horario: "Lunes a viernes 12pm a 10pm",
  whatsapp: "521234567890",   // ← número con código de país, sin + ni espacios
  redes: {
    whatsapp: "https://wa.me/521234567890",
    facebook: "https://facebook.com/...",
    instagram: "https://instagram.com/...",
    maps: "https://maps.app.goo.gl/...",
  },
};
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

1. Sube el proyecto a un repositorio de GitHub
2. Importa el repo en [vercel.com](https://vercel.com)
3. Click en Deploy — sin configuración adicional necesaria

## Estructura

```
├── config.ts          ← TODO lo editable del negocio va aquí
├── app/
│   ├── layout.tsx     ← fuentes y metadata
│   ├── page.tsx       ← página principal del menú
│   └── globals.css    ← estilos globales
└── components/
    ├── CartContext.tsx ← estado global del carrito (useReducer)
    ├── CartButton.tsx  ← botón flotante con badge
    ├── CartDrawer.tsx  ← panel lateral del carrito
    ├── ProductCard.tsx ← tarjeta de producto con variantes
    └── SocialLinks.tsx ← botones de redes sociales
```

## Cómo funciona el carrito

1. Cliente navega el menú y da clic en **+ Agregar**
2. El botón flotante (abajo izquierda) muestra el total acumulado
3. Al abrir el carrito puede ajustar cantidades
4. Al dar clic en **Enviar pedido por WhatsApp** se construye automáticamente el mensaje con el resumen y se abre WhatsApp
