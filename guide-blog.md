# Guía: cómo publicar un artículo nuevo en el blog

Los artículos son archivos Markdown (`.md`) dentro de `src/content/blog/`. Al subirlos a GitHub, Vercel reconstruye el sitio y los publica solo.

## Paso a paso

### 1. Crear el archivo

Crea un archivo nuevo en `src/content/blog/`. **El nombre del archivo será la URL** del artículo:

```
src/content/blog/como-abrir-una-puerta-trabada.md
→ https://cerrajeriasos24.com/blog/como-abrir-una-puerta-trabada/
```

Reglas para el nombre:
- Todo en minúsculas, sin tildes ni `ñ`.
- Palabras separadas por guiones (`-`), sin espacios.
- Que incluya la palabra clave principal (ayuda al SEO).

### 2. Agregar los datos del artículo (frontmatter)

Al inicio del archivo, entre dos líneas `---`:

```md
---
title: "Título del artículo"
description: "Resumen de 120 a 160 caracteres que aparecerá en Google."
date: 2026-10-20
image: "/assets/mi-imagen.jpg"
draft: false
---
```

| Campo | Obligatorio | Descripción |
|---|---|---|
| `title` | Sí | Título del artículo (también aparece en Google). |
| `description` | Sí | Resumen corto, de 120 a 160 caracteres. |
| `date` | Sí | Fecha de publicación, formato `AAAA-MM-DD`. |
| `image` | No | Imagen de portada (ruta dentro de `public/`). |
| `draft` | No | `true` = borrador, no se publica. Por defecto es `false`. |

> Pon el título entre comillas. Si el texto lleva comillas dobles, usa comillas simples por fuera.

### 3. Escribir el contenido

Debajo del frontmatter, escribe en Markdown. **No pongas un `#` (H1)**: el título ya se muestra automáticamente. Empieza con `##`.

```md
Párrafo de introducción.

## Primer subtítulo

Texto normal con **negrita** y *cursiva*.

- Elemento de lista
- Otro elemento

## Segundo subtítulo

1. Paso uno
2. Paso dos

[Texto del enlace](https://cerrajeriasos24.com/)
```

### 4. Agregar imágenes (opcional)

1. Copia la imagen a `public/assets/` (mejor en `.jpg` o `.webp`, de menos de 200 KB).
2. Úsala como portada con `image: "/assets/nombre.jpg"` en el frontmatter.
3. O dentro del texto:

```md
![Descripción de la imagen](/assets/nombre.jpg)
```

Escribe siempre una descripción en el texto alternativo (`alt`): ayuda al SEO y a la accesibilidad.

### 5. Revisar en local

```bash
npm run dev
```

Abre `http://localhost:4321/blog/` y comprueba que el artículo aparece y se ve bien.

### 6. Probar la compilación (recomendado)

```bash
npm run build
```

Si hay un error (por ejemplo, falta un campo obligatorio), aquí se muestra.

### 7. Publicar

```bash
git add .
git commit -m "Nuevo artículo: título del artículo"
git push
```

Vercel detecta el cambio y publica el sitio en 1 o 2 minutos. El artículo aparecerá en `/blog/` y se agregará solo al sitemap.

## Plantilla lista para copiar

```md
---
title: ""
description: ""
date: 2026-01-01
draft: true
---

Introducción del artículo.

## Primer subtítulo

Contenido.

## Segundo subtítulo

Contenido.

---

¿Necesitas un cerrajero en Caracas? Escríbenos y te atendemos las 24 horas.
```

## Consejos de SEO local

- Menciona **Caracas** y las zonas (Chacao, Altamira, Las Mercedes, etc.) de forma natural.
- Usa una palabra clave principal por artículo (ej. "cambio de cilindro en Caracas").
- Escribe al menos 500 palabras, con subtítulos (`##`) claros.
- Termina con un llamado a la acción (WhatsApp o teléfono). El botón de WhatsApp ya se agrega solo al final.
- Una vez publicado, solicita la indexación en Google Search Console.

## Editar o despublicar

- **Editar:** modifica el `.md` y haz `git push`.
- **Despublicar:** cambia `draft: true` (o borra el archivo) y haz `git push`.
- **Cambiar el nombre del archivo** cambia la URL: evítalo una vez publicado.
