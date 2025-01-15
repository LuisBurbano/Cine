describe("Pruebas de selección de horarios de funciones", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("Debería permitir seleccionar un horario disponible", () => {
        // Paso 1: Navegar a la página de listado de películas
        cy.visit("http://localhost:5173/movies/popular");

        // Paso 2: Seleccionar la primera película
        cy.get(".movie-item").first().click();

        // Paso 3: Verificar que hay horarios disponibles
        cy.get(".schedule-option").should("have.length.greaterThan", 0);

        // Paso 4: Seleccionar el primer horario disponible
        cy.get(".schedule-option").first().click();

        // Paso 5: Verificar que se seleccionó el horario
        cy.get("#selected-schedule").should("not.be.empty");

        // Paso 6: Verificar redirección a la página de pago
        cy.url().should("include", "/payment");
    });

    it("Debería mostrar un error al intentar seleccionar un horario no disponible", () => {
        // Paso 1: Navegar a la página de detalles de una película
        cy.visit("http://localhost:5173/movies/popular");
        cy.get(".movie-item").first().click();

        // Paso 2: Intentar seleccionar un horario no disponible
        cy.get(".schedule-option.disabled").first().click();

        // Paso 3: Verificar que se muestra un mensaje de error
        cy.get(".error-message").should("contain.text", "No es posible escoger ese horario");
    });
});
