// Script para limpiar duplicados anidados y luego duplicar la carpeta `app/` para cada locale
const fs = require("fs");
const path = require("path");

const locales = ["arg", "es", "us", "uk"];
const workspaceRoot = path.resolve(__dirname, "..");
const appDir = path.join(workspaceRoot, "app");

// Limpiar subcarpetas anidadas (por ejemplo app/arg/arg)
locales.forEach((locale) => {
  const nested = path.join(appDir, locale, locale);
  if (fs.existsSync(nested)) {
    console.log(`Eliminando carpeta anidada: ${nested}`);
    fs.rmSync(nested, { recursive: true, force: true });
  }
});

// Ejecutar duplicación original
const duplicateScript = path.join(
  workspaceRoot,
  "scripts",
  "duplicate-locales.js"
);
console.log("Ejecutando duplicación de locales...");
require(duplicateScript);
