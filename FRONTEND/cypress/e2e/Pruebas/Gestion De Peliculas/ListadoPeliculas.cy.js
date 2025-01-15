describe("Pruebas de listado y detalles de películas", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("Debería mostrar la lista completa de películas populares", () => {
        // Paso 1: Navegar a la página de listado de películas
        cy.visit("http://localhost:5173/movies/popular");

        // Paso 2: Verificar que la lista de películas esté presente
        cy.get(".movie-item").should("have.length.greaterThan", 0);

        // Paso 3: Verificar que cada película tenga información básica
        cy.get(".movie-item").each(($movie) => {
            cy.wrap($movie).find(".movie-title").should("not.be.empty");
        });
    });

    it("Debería mostrar los detalles de una película seleccionada", () => {
        // Paso 1: Navegar a la página de listado de películas
        cy.visit("http://localhost:5173/movies/popular");

        // Paso 2: Seleccionar la primera película
        cy.get(".movie-item").first().click();

        // Paso 3: Verificar que los detalles de la película estén presentes
        cy.get("#movie-title").should("not.be.empty");
        cy.get("#movie-synopsis").should("not.be.empty");
        cy.get("#movie-schedule").should("not.be.empty");
    });
});
