const { Given, Then } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

let driver;

// Paso 1: Abre la página principal
Given('el usuario abre la página principal', async function () {
  driver = await new Builder().forBrowser('chrome').build(); // Inicia el navegador Chrome
  await driver.get('http://localhost:5173'); // Navega a la página principal
});

// Paso 2: Verifica que el texto esté presente
Then('debería ver {string}', async function (expectedText) {
  const bodyText = await driver.findElement(By.tagName('body')).getText(); // Obtiene el texto del cuerpo
  assert(bodyText.includes(expectedText), `El texto "${expectedText}" no fue encontrado.`);
  await driver.quit(); // Cierra el navegador después de la prueba
});
