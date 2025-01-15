describe("Pruebas de selección de asientos", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("Debería permitir seleccionar asientos disponibles", () => {
        // Paso 1: Navegar a la página de listado de películas
        cy.visit("http://localhost:5173/movies/popular");

        // Paso 2: Seleccionar la primera película
        cy.get(".movie-item").first().click();

        // Paso 3: Seleccionar un horario disponible
        cy.get(".schedule-option").first().click();

        // Paso 4: Verificar que hay asientos disponibles
        cy.get(".seat-available").should("have.length.greaterThan", 0);

        // Paso 5: Seleccionar los primeros dos asientos disponibles
        cy.get(".seat-available").eq(0).click();
        cy.get(".seat-available").eq(1).click();

        // Paso 6: Verificar que los asientos seleccionados se actualicen correctamente
        cy.get(".seat-selected").should("have.length", 2);
    });

    it("Debería mostrar un error al intentar seleccionar asientos no disponibles", () => {
        // Paso 1: Navegar a la página de listado de películas
        cy.visit("http://localhost:5173/movies/popular");

        // Paso 2: Seleccionar la primera película
        cy.get(".movie-item").first().click();

        // Paso 3: Seleccionar un horario disponible
        cy.get(".schedule-option").first().click();

        // Paso 4: Intentar seleccionar un asiento no disponible
        cy.get(".seat-unavailable").first().click();

        // Paso 5: Verificar que se muestra un mensaje de error
        cy.get(".error-message").should("contain.text", "No puede seleccionar este asiento");
    });
});
