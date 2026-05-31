# calculatucuota.es

Calculadora financiera web para simular hipotecas, préstamos personales y amortización anticipada de forma clara, visual y sin registro.

[![Proyecto activo](https://img.shields.io/badge/estado-activo-brightgreen)]()
[![Código privado](https://img.shields.io/badge/código-privado-lightgrey)]()
[![Astro](https://img.shields.io/badge/Astro-web-orange)]()
[![React](https://img.shields.io/badge/React-UI-blue)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)]()
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)]()

---

## Demo

Web en producción:

**https://calculatucuota.es**

---

## Resumen

**calculatucuota.es** nace para resolver un problema sencillo: muchas calculadoras financieras enseñan una cuota, pero no explican bien el coste real de una operación.

La herramienta permite simular:

- hipotecas;
- préstamos personales;
- amortización anticipada;
- comparación entre reducir plazo y reducir cuota;
- informes descargables en PDF;
- imagen compartible para enviar por WhatsApp, Telegram o similares.

El objetivo es que una persona pueda entender rápidamente:

- cuánto necesita financiar;
- cuánto pagará al mes;
- cuánto terminará pagando;
- cuánto se va en intereses;
- qué pasa si amortiza antes;
- qué ahorro real puede conseguir.

---

## Stack técnico

| Área | Tecnología |
|---|---|
| Framework | Astro |
| UI | React |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Testing | Vitest |
| Build | Static build |
| Deploy | Vercel |
| Dominio | calculatucuota.es |

---

## Features principales

### Hipoteca

- Cálculo de cuota mensual.
- Estimación de gastos de compra.
- Diferenciación entre ahorros, entrada y gastos.
- Tipo medio orientativo editable.
- Comparativa de amortización anticipada.
- PDF visual descargable.
- Imagen compartible.

### Préstamo personal

- Cálculo de importe a financiar.
- Entrada/aportación inicial.
- Finalidad del préstamo.
- Comisión de apertura y costes vinculados.
- Coste total estimado.
- Simulación de amortización extra.

### Simulador de amortización

- Capital pendiente.
- Cuota mensual actual.
- TIN.
- Plazo restante.
- Amortización mensual, anual o puntual.
- Inicio desde ahora o diferido.
- Comparativa entre reducir plazo y reducir cuota.
- Avisos cuando los datos introducidos no son coherentes.

---

## Privacidad

La herramienta está pensada para funcionar sin fricción:

- no requiere registro;
- no pide email;
- no guarda datos personales;
- no usa base de datos para las simulaciones;
- los cálculos se realizan en el navegador;
- los resultados son orientativos.

---

## Arquitectura resumida

El proyecto está construido como una aplicación estática desplegada en Vercel.

La lógica financiera está separada en módulos reutilizables para:

- cálculo de cuota;
- generación de cuadros de amortización;
- comparación de escenarios;
- simulación de amortización anticipada;
- generación de datos para PDF e imagen compartible.

La interfaz se organiza en páginas independientes para cada herramienta:

- `/calculadora-hipoteca`
- `/calculadora-prestamo-personal`
- `/simulador-amortizacion`
- `/reducir-cuota-o-plazo`

---

## Seguridad

El código fuente principal es privado.

Este repositorio es únicamente una presentación pública del proyecto. No contiene:

- código fuente de la aplicación;
- claves;
- tokens;
- variables de entorno;
- configuración sensible;
- endpoints privados;
- datos de usuarios.

---

## Estado del proyecto

Proyecto activo en fase MVP.

La primera versión está centrada en ofrecer una experiencia clara, rápida y útil para usuarios que quieren entender mejor una financiación antes de hablar con un banco o comparar ofertas.

---

## Roadmap

Próximas mejoras previstas:

- mejorar SEO y contenidos informativos;
- añadir más explicaciones para usuarios no técnicos;
- mejorar el sistema de compartir en móvil;
- añadir comisión de amortización anticipada en porcentaje;
- revisar periódicamente tipos medios orientativos;
- añadir más ejemplos guiados;
- mejorar la salida visual de informes;
- preparar comparativas más avanzadas.

---

## Autor

Proyecto creado por **JorgeBaGa**.

GitHub: [@JorgeBaGa](https://github.com/JorgeBaGa)

---

## Nota sobre el código fuente

Este repositorio es solo un showcase público.

El código fuente de calculatucuota.es se mantiene en un repositorio privado por motivos de seguridad, mantenimiento y control del producto.

calculatucuota.es no constituye una oferta vinculante ni asesoramiento financiero. Los resultados son simulaciones orientativas.
