const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

let driver;

// Paso 1: Abre la página principal
Given('el usuario está en la página principal', async function () {
  driver = await new Builder().forBrowser('chrome').build(); // Inicia Chrome
  await driver.get('http://localhost:5173'); // Navega a la página principal
});

// Paso 2: Navega a la ruta especificada
When('el usuario navega a {string}', async function (path) {
  await driver.get(`http://localhost:5173${path}`); // Navega a /cartelera
});

// Paso 3: Verifica que el texto esté presente
Then('debería ver {string}', async function (expectedText) {
  const bodyText = await driver.findElement(By.tagName('body')).getText(); // Obtiene el texto del cuerpo
  assert(bodyText.includes(expectedText), `Texto esperado "${expectedText}" no encontrado`);
  await driver.quit(); // Cierra el navegador
});
