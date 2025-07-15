// Script para duplicar la carpeta `app/` en subcarpetas por cada locale y excluir duplicaciones recursivas
const fs = require("fs");
const path = require("path");

const locales = ["arg", "es", "us", "uk"];
const workspaceRoot = path.resolve(__dirname, "..");
const appDir = path.join(workspaceRoot, "app");

locales.forEach((locale) => {
  const targetDir = path.join(appDir, locale);
  if (fs.existsSync(targetDir)) {
    console.log(`La carpeta ${locale}/ ya existe, se omite.`);
    return;
  }

  // Copiar recursivamente app/ a app/<locale>/, excluyendo carpetas de locales
  fs.cpSync(appDir, targetDir, {
    recursive: true,
    filter: (src) => {
      // No copiar las carpetas de locale dentro de sí mismas
      const rel = path.relative(appDir, src);
      const parts = rel.split(path.sep);
      return !locales.includes(parts[0]);
    },
  });

  console.log(`Carpeta duplicada: app/ -> app/${locale}/`);
});

console.log("Duplicación completada.");
