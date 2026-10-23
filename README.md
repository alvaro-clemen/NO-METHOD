# NŌ·METHOD — Web pública

Web estática (HTML/CSS/JS puro, sin frameworks) con el mismo estilo visual que la web de referencia: fondo crema, tipografía Playfair Display (títulos) + Inter (texto), tarjetas redondeadas, botones tipo "pill".

## Estructura
- `index.html` — todo el contenido, por secciones (Hero, Más que entrenar, Equipo, Servicios, Estudio, Testimonios, Instagram, Ubicación, FAQ, Contacto)
- `styles.css` — estilos, con variables de color/tipografía arriba del todo (`:root`) por si quieres ajustar la paleta
- `script.js` — solo controla el menú móvil
- `images/` — **placeholders de color** que debes sustituir por tus fotos reales (mismo nombre de archivo, mismo formato .jpg)

## Pendiente de rellenar (busca "Pendiente" en index.html)
- Teléfono real
- Email real
- Dirección completa
- Enlace real de WhatsApp (sustituir el número `34600000000` en los botones "Reservar"/"WhatsApp")
- Fotos reales en `images/` (hero.jpg + gallery-1.jpg a gallery-6.jpg)
- Testimonios reales (puedes duplicar el bloque `.testimonial` en index.html para añadir más)

## Cómo probarlo en local
Abre `index.html` directamente en el navegador, o si tienes Node:
```
npx serve .
```

## Cómo desplegarlo en Vercel (gratis)

**Opción A — sin terminal (la más sencilla):**
1. Entra en vercel.com y crea una cuenta (con GitHub, Google o email).
2. En el dashboard, pulsa "Add New" → "Project".
3. Arrastra esta carpeta entera (o impórtala desde un repo de GitHub si subes el código allí antes).
4. Vercel detecta que es un sitio estático — no pide configuración, solo pulsa "Deploy".
5. En un par de minutos te da una URL tipo `nomethod-tunombre.vercel.app`, accesible desde cualquier lugar.

**Opción B — con terminal (más cómoda para futuras actualizaciones):**
```
npm i -g vercel
cd nomethod-web
vercel
```
Sigue las preguntas (login, nombre del proyecto) y listo. Para publicar cambios después, solo repites `vercel --prod` desde esta carpeta.

Cuando quieras un dominio propio (ej. nomethodstudio.com) en vez de `.vercel.app`, se añade gratis desde el panel de Vercel → Settings → Domains.
