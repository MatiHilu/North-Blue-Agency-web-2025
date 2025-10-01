# Sitemap manual - North Blue Agency

El proyecto ahora expone un `sitemap.xml` totalmente controlado de forma manual. Esto te permite decidir qué URLs publicar, con qué prioridades y fechas, sin depender de procesos automáticos.

## 🚀 Características

- **Control total**: el archivo XML se mantiene en `public/sitemap.xml` y solo cambia cuando tú lo editas.
- **Versionado**: cualquier ajuste queda registrado en Git, ideal para revisiones en PR y auditorías SEO.
- **Compatibilidad**: Next.js sirve el archivo estático sin lógica adicional y `robots.txt` sigue apuntando al mismo recurso.

## 📁 Archivos relevantes

```
public/
└── sitemap.xml        # Archivo XML que se publica en https://tu-dominio.com/sitemap.xml
app/
└── robots.ts          # Referencia al sitemap desde robots.txt
```

## 🛠️ Configuración inicial

1. **Ajusta el dominio** en tus variables de entorno para mantener `robots.txt` correcto:
   ```env
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
   ```
2. **Abre `public/sitemap.xml`** y actualiza las URLs, prioridades y fechas según tu contenido real.

## ✏️ Cómo editar `public/sitemap.xml`

Cada entrada tiene la forma:

```xml
<url>
  <loc>https://tu-dominio.com/mi-ruta</loc>
  <lastmod>2025-10-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

Sugerencias:

- Usa fechas ISO (`YYYY-MM-DD`).
- Mantén `changefreq` dentro del estándar (`always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, `never`).
- La prioridad debe estar entre `0.0` y `1.0`.
- Elimina entradas obsoletas y agrega rutas nuevas manualmente.

## � Flujo recomendado

1. **Agregar/editar contenido** → actualiza las rutas correspondientes en el XML.
2. **Validar** el archivo con una herramienta externa (por ejemplo, [xml-sitemaps.com](https://www.xml-sitemaps.com/validate-sitemap.html) o Google Search Console).
3. **Commit & PR** → incluye el cambio en tu rama y solicita revisión al equipo SEO si aplica.
4. **Deploy** → al desplegar, el archivo quedará disponible en `https://tu-dominio.com/sitemap.xml`.
5. **Search Console** → reenvía el sitemap si deseas forzar reindexado.

## ✅ Checklist rápido

- [ ] El XML pasa una validación externa.
- [ ] Todas las URLs responden con 200 en producción.
- [ ] `robots.txt` referencia el dominio correcto y el sitemap publicado.
- [ ] Se notificó al equipo SEO (si corresponde).

## ❓ Preguntas frecuentes

**¿Dónde quedó la generación automática?**

Se eliminó `app/sitemap.ts` y los scripts asociados. Todo se gestiona ahora desde el XML estático.

**¿Qué pasa con los datos del blog o portfolio?**

Ya no se consultan dinámicamente. Debes mantener las URLs manualmente en el XML.

**¿Puedo volver al sistema dinámico?**

Sí, basta con reintroducir una ruta `app/sitemap.ts` y la lógica necesaria. Conservamos `lib/data.ts` por si deseas reutilizarla.

## 🧭 Recursos adicionales

- [Sitemaps.org](https://www.sitemaps.org/protocol.html)
- [Google Search Console – Sitemaps](https://support.google.com/webmasters/answer/183668)
- [Herramienta de validación de sitemap de Google](https://search.google.com/search-console/sitemaps)
