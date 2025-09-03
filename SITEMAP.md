# Sitemap Dinámico - North Blue Agency

Este proyecto incluye un sistema de sitemap dinámico que se genera automáticamente durante el build y se actualiza con el contenido más reciente.

## 🚀 Características

- **Generación automática**: El sitemap se genera automáticamente durante el build
- **Contenido dinámico**: Incluye automáticamente posts de blog y proyectos de portfolio
- **SEO optimizado**: Configurado con prioridades y frecuencias de cambio apropiadas
- **Robots.txt incluido**: Incluye configuración automática de robots.txt
- **Validación integrada**: Scripts para validar el sitemap antes del deployment

## 📁 Archivos del Sistema

```
app/
├── sitemap.ts          # Generador principal del sitemap
├── robots.ts           # Generador de robots.txt
lib/
├── data.ts            # Datos dinámicos (blog, portfolio)
scripts/
├── generate-sitemap.js # Script de validación y generación
```

## 🛠️ Configuración

### 1. Cambiar el dominio base

Edita el archivo `app/sitemap.ts` y cambia la URL base:

```typescript
const baseUrl = "https://tu-dominio.com"; // Cambia esto por tu dominio real
```

También actualiza `app/robots.ts`:

```typescript
const baseUrl = "https://tu-dominio.com"; // Cambia esto por tu dominio real
```

### 2. Agregar contenido dinámico

Edita `lib/data.ts` para conectar con tu fuente de datos real:

```typescript
// Reemplaza los datos de ejemplo con llamadas a tu API o CMS
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch("https://tu-api.com/blog-posts");
  return response.json();
}
```

## 📄 URLs Incluidas

### Páginas Estáticas

- Página principal (/)
- Sobre nosotros (/nosotros)
- Blog (/blog)
- Contacto (/contacto)
- Portfolio (/portfolio)
- Servicios (/servicios)

### Servicios Individuales

- Redes Sociales (/servicios/redes-sociales)
- Branding (/servicios/branding)
- Desarrollo Web (/servicios/desarrollo-web)
- Marketing Digital (/servicios/marketing-digital)
- SEO (/servicios/seo)
- Analytics (/servicios/analytics)
- Campañas y Ads (/servicios/campanas-ads)
- Diseño Gráfico (/servicios/diseno-grafico)

### Contenido Dinámico

- Posts de blog (/blog/[slug])
- Proyectos de portfolio (/portfolio/[slug])

## 🎯 Prioridades SEO

| Tipo de Página         | Prioridad | Frecuencia de Cambio |
| ---------------------- | --------- | -------------------- |
| Página principal       | 1.0       | Semanal              |
| Páginas principales    | 0.9       | Anual                |
| Servicios individuales | 0.8       | Mensual              |
| Blog principal         | 0.8       | Semanal              |
| Posts individuales     | 0.7       | Mensual              |
| Portfolio individual   | 0.7       | Mensual              |

## 🔧 Scripts Disponibles

### Generar sitemap

```bash
npm run sitemap:generate
```

### Validar sitemap

```bash
npm run sitemap:validate
```

### Build con validación

```bash
npm run build:production
```

## 🌐 Acceso al Sitemap

Una vez desplegado, el sitemap estará disponible en:

- **Sitemap XML**: `https://tu-dominio.com/sitemap.xml`
- **Robots.txt**: `https://tu-dominio.com/robots.txt`

## 🔍 Validación

El sistema incluye validaciones automáticas que verifican:

✅ URLs válidas (formato correcto)
✅ Fechas válidas (lastModified)
✅ Prioridades válidas (0.0 - 1.0)
✅ Frecuencias de cambio válidas
✅ No hay URLs duplicadas

## 🚀 Deployment

1. **Vercel/Netlify**: El sitemap se genera automáticamente durante el build
2. **Google Search Console**: Envía el sitemap en `https://tu-dominio.com/sitemap.xml`
3. **Bing Webmaster Tools**: También puedes enviarlo a Bing

## 🔄 Actualización Automática

El sitemap se actualiza automáticamente:

- ✅ En cada build de producción
- ✅ Cuando agregues nuevos posts de blog
- ✅ Cuando agregues nuevos proyectos de portfolio
- ✅ Las fechas `lastModified` se actualizan correctamente

## 🐛 Troubleshooting

### Error: "Cannot resolve module"

Asegúrate de que todas las dependencias estén instaladas:

```bash
npm install
```

### URLs no aparecen en el sitemap

1. Verifica que las rutas estén en `lib/data.ts`
2. Ejecuta `npm run sitemap:validate` para verificar errores
3. Revisa que los datos dinámicos se estén cargando correctamente

### Sitemap no se actualiza

1. Limpia el cache: `rm -rf .next`
2. Rebuild: `npm run build`
3. Verifica que no haya errores de TypeScript

## 📈 Monitoreo

Para monitorear el rendimiento del sitemap:

1. **Google Search Console**: Revisa la sección "Sitemaps"
2. **Analytics**: Monitorea el tráfico orgánico
3. **Logs del servidor**: Verifica que los bots estén accediendo al sitemap

---

## 💡 Próximos Pasos

- [ ] Conectar con un CMS real (Strapi, Contentful, etc.)
- [ ] Agregar sitemap de imágenes
- [ ] Implementar sitemap index para sitios grandes
- [ ] Agregar notificaciones automáticas a Google Search Console
