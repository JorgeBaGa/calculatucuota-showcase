const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://calculatucuota.es";

const screenshotsDir = path.join(__dirname, "..", "assets", "screenshots");

const pages = [
  {
    name: "home.png",
    url: `${BASE_URL}/`,
  },
  {
    name: "hipoteca.png",
    url: `${BASE_URL}/calculadora-hipoteca/`,
  },
  {
    name: "prestamo.png",
    url: `${BASE_URL}/calculadora-prestamo-personal/`,
  },
  {
    name: "amortizacion.png",
    url: `${BASE_URL}/simulador-amortizacion/`,
  },
  {
    name: "reducir-cuota-o-plazo.png",
    url: `${BASE_URL}/reducir-cuota-o-plazo/`,
  },
  {
    name: "evolucion-tipo-medio-hipotecas.png",
    url: `${BASE_URL}/evolucion-tipo-medio-hipotecas/`,
  },
];

async function main() {
  fs.mkdirSync(screenshotsDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 1400,
    },
    deviceScaleFactor: 1,
  });

  for (const item of pages) {
    console.log(`Capturando ${item.url}`);

    await page.goto(item.url, {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    await page.screenshot({
      path: path.join(screenshotsDir, item.name),
      fullPage: true,
    });

    console.log(`OK: assets/screenshots/${item.name}`);
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
