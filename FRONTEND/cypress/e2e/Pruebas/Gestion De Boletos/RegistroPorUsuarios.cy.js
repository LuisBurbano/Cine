describe("Pruebas del historial de compras por usuarios", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("Debería mostrar correctamente el historial de compras para un usuario con registros", () => {
        const userId = 1; // Cambiar por un ID válido
        cy.visit(`http://localhost:5173/compras/${userId}`);

        // Verificar que se cargue el historial de compras
        cy.get(".purchase-item").should("have.length.greaterThan", 0);

        // Validar detalles de cada compra
        cy.get(".purchase-item").each(($purchase) => {
            cy.wrap($purchase).find(".movie-title").should("not.be.empty");
            cy.wrap($purchase).find(".purchase-date").should("not.be.empty");
            cy.wrap($purchase).find(".total-amount").should("not.be.empty");
        });
    });

    it("Debería mostrar un mensaje cuando no hay compras registradas", () => {
        const userId = 999; // Usuario sin compras
        cy.visit(`http://localhost:5173/compras/${userId}`);

        // Verificar el mensaje de que no hay transacciones
        cy.get(".no-purchases-message")
            .should("be.visible")
            .and("contain.text", "No hay transacciones en el historial");
    });

    it("Debería mostrar los detalles completos de la compra más reciente", () => {
        const userId = 1; // Cambiar por un ID válido
        cy.visit(`http://localhost:5173/compras/${userId}`);

        // Validar detalles de la compra más reciente
        cy.get(".purchase-item").first().within(() => {
            cy.get(".movie-title").should("not.be.empty");
            cy.get(".purchase-date").should("not.be.empty");
            cy.get(".total-amount").should("not.be.empty");
        });
    });
});
