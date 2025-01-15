describe("Pruebas de detalles de películas", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("Debería mostrar correctamente los detalles de una película válida", () => {
        // Paso 1: Navegar a la página de detalles de una película válida
        cy.visit("http://localhost:5173/movies/1");

        // Paso 2: Verificar que los detalles estén presentes
        cy.get("#movie-title").should("not.be.empty");
        cy.get("#movie-synopsis").should("not.be.empty");
        cy.get("#movie-schedule").should("not.be.empty");
    });

    it("Debería manejar correctamente un ID de película no válido", () => {
        // Paso 1: Navegar a la página con un ID no válido
        cy.visit("http://localhost:5173/movies/9999");

        // Paso 2: Verificar que se muestra un mensaje de error
        cy.get("#error-message").should("contain.text", "Película no encontrada");
    });

    it("Debería manejar películas con información incompleta", () => {
        // Paso 1: Navegar a la página de detalles de una película con información faltante
        cy.visit("http://localhost:5173/movies/2");

        // Paso 2: Verificar cada campo de manera individual
        cy.get("#movie-title").should("not.be.empty").catch(() => {
            cy.log("Título no encontrado");
        });

        cy.get("#movie-synopsis").should("not.be.empty").catch(() => {
            cy.log("Sinopsis no encontrada");
        });

        cy.get("#movie-schedule").should("not.be.empty").catch(() => {
            cy.log("Horarios no encontrados");
        });
    });
});
