# Landing de captación — MUN en las aulas · Claret 1.º y 2.º de ESO 2026/27

Duplicado de `../landing-claret-web` (30/09/2026) para la campaña específica de primer
ciclo. Mismo sistema de diseño, precio y formulario. Un solo objetivo: **reservar plaza
con octubre gratis**.

## Qué cambia respecto a la web general de Claret

- Solo 1.º y 2.º de ESO. Dos horarios a elegir: lunes de 14:15 a 15:15 o viernes de
  13:15 a 14:15. Clases a partir del 13 de octubre.
- Octubre no se cobra (sustituye a las «dos semanas de prueba»). Domiciliación de
  noviembre a mayo.
- Torneos: CEUMUN en enero (2.º ESO) y EstuMUN en abril (1.º y 2.º ESO). Sin SYMUN:
  se retiran la sección y todas sus menciones.
- Sin bloque de pasaclases.
- Equipo: el profesor (antiguo alumno de Claret y de la academia) está pendiente y su
  ficha no se muestra (`pendiente: true` en `src/data/landing.ts`); queda Ignacio.

## Comandos

```bash
npm run dev      # servidor local en :4324
npm run build    # genera dist/
npm run og       # regenera public/og.jpg
```

## Pendientes antes de publicar

1. **Profesor:** resuelto, Javier Sanz (01/10/2026).
2. **Formulario:** es el mismo de Claret. Debe permitir elegir lunes o viernes y no
   hablar de «dos semanas de prueba».
3. **URL:** `site` apunta a `https://landing-claret-eso.vercel.app` (supuesto: el nombre
   que dará Vercel al proyecto `landing-claret-eso`). Si Vercel asigna otro, cambiarlo.
4. **Textos legales:** el pie enlaza a `#`.
5. **Datos heredados sin revalidar:** sin permanencia, torneos de 50-65 €, grupos de 6 a 15.
