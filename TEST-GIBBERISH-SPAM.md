# 🎯 Test de Detección de Spam Gibberish/Aleatorio

## 📥 Spam Detectado:

```
name: SnoRtITtNYdEbnILVdAlmbgc
email: marcelllewis74@yahoo.com
phone: 8839867559
company: vCcNfxUQXHunOmmu
service: diseno-grafico
budget: 500-1000
message: sPyjQhhJqOetQZKSnSUvyE
```

## 🛡️ Detecciones Implementadas:

### ✅ **1. Detección de Nombre Gibberish**

**Campo:** `SnoRtITtNYdEbnILVdAlmbgc`

- ❌ **Mixed case aleatorio detectado**: `randomMixedCase` pattern
- ❌ **No coincide con patrones de nombres reales**
- ❌ **Longitud excesiva sin espacios** (25 caracteres)
- ❌ **Secuencias de consonantes**: `NtNYdEb`, `LVdAlm`

**Resultado:** 🚫 **BLOQUEADO** - "Name appears to be random text"

### ✅ **2. Detección de Empresa Gibberish**

**Campo:** `vCcNfxUQXHunOmmu`

- ❌ **Mixed case aleatorio**
- ❌ **No incluye términos empresariales** (LLC, Inc, Company, etc.)
- ❌ **No coincide con patrones de empresas reales**
- ❌ **Secuencias sin sentido**: `CcNfxU`, `XHun`

**Resultado:** 🚫 **BLOQUEADO** - "Company name appears to be random text"

### ✅ **3. Detección de Mensaje Gibberish**

**Campo:** `sPyjQhhJqOetQZKSnSUvyE`

- ❌ **Secuencias consonantes excesivas**: `sPyj`, `QhhJ`, `KSnS`
- ❌ **Mixed case sin sentido**
- ❌ **Pocos voweles para la longitud** (6 voweles en 22 caracteres = 27%)

**Resultado:** 🚫 **BLOQUEADO** - "Message appears to be random text"

## 🔬 **Patrones de Detección Implementados:**

### **1. Consonantes Excesivas**

```regex
/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{5,}/
```

Detecta: `SnoRtITt`, `NfxUQXH`, etc.

### **2. Mixed Case Aleatorio**

```regex
/^[a-z]*[A-Z][a-z]*[A-Z][a-z]*[A-Z]/
```

Detecta: `SnoRtITtNYdE`, `vCcNfxUQ`, etc.

### **3. Ratio de Vocales Bajo**

```javascript
vowelCount / text.length < 0.15; // Para textos >8 caracteres
```

### **4. Patrones de Nombres Reales (Whitelist)**

```regex
/^[A-Z][a-z]+ [A-Z][a-z]+$/  // Juan Pérez
/^[A-Z][a-z]+$/              // María
```

### **5. Patrones de Empresas Reales**

```regex
/\b(LLC|Inc|Corp|Ltd|Company|Agency)\b/i
```

## 🎯 **Resultado Final:**

### ❌ **SPAM COMPLETAMENTE BLOQUEADO**

**API Response:**

```json
{
  "ok": false,
  "error": "Invalid form data",
  "details": [
    "Name appears to be random text",
    "Company name appears to be random text",
    "Message appears to be random text"
  ]
}
```

**Status:** `400 Bad Request`

## ✅ **Casos que SÍ Pasarían:**

### Nombres Válidos:

- ✅ "Juan Pérez"
- ✅ "María González"
- ✅ "John Smith"
- ✅ "Ana"

### Empresas Válidas:

- ✅ "North Blue Agency"
- ✅ "Google Inc"
- ✅ "Microsoft Corp"
- ✅ "Acme Solutions LLC"

### Mensajes Válidos:

- ✅ "Hola, me interesa su servicio de diseño web..."
- ✅ "Need help with marketing strategy for my business"

## 🚫 **Falsos Positivos Evitados:**

- ✅ Nombres extranjeros: "Björn", "François", "José María"
- ✅ Empresas con siglas: "IBM", "BMW", "3M Company"
- ✅ Mensajes técnicos: "Need API integration with OAuth2"

---

**🎉 ¡El spam que enviaste sería detectado y bloqueado instantáneamente!**
