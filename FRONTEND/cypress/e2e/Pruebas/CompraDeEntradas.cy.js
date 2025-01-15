describe("Pruebas de compra de entradas", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("Debería completar la compra con información válida", () => {
        cy.visit("http://localhost:5173/movies/popular");

        // Seleccionar la primera película
        cy.get(".movie-item").first().click();

        // Seleccionar un horario disponible
        cy.get(".schedule-option").first().click();

        // Seleccionar dos asientos disponibles
        cy.get(".seat-available").eq(0).click();
        cy.get(".seat-available").eq(1).click();

        // Hacer clic en el botón de compra
        cy.get("#buy-button").click();

        // Completar el formulario de pago
        cy.get("#payment-form").should("be.visible");
        cy.get("[name='cardNumber']").type("4111111111111111");
        cy.get("[name='expiryDate']").type("12/25");
        cy.get("[name='cvv']").type("123");
        cy.get("[name='billingAddress']").type("123 Main St");
        cy.get("[name='city']").type("Ciudad");
        cy.get("[name='postalCode']").type("12345");

        // Confirmar la compra
        cy.get("#confirm-button").click();

        // Verificar el mensaje de confirmación
        cy.get("#success-message")
            .should("contain.text", "Compra registrada con éxito")
            .and("be.visible");
    });

    it("Debería mostrar error al intentar comprar con campos vacíos", () => {
        cy.visit("http://localhost:5173/movies/popular");

        // Seleccionar la primera película y un horario
        cy.get(".movie-item").first().click();
        cy.get(".schedule-option").first().click();

        // Seleccionar asientos y proceder a la compra
        cy.get(".seat-available").eq(0).click();
        cy.get(".seat-available").eq(1).click();
        cy.get("#buy-button").click();

        // Intentar confirmar sin llenar los campos
        cy.get("#payment-form").should("be.visible");
        cy.get("#confirm-button").click();

        // Verificar mensajes de error en campos vacíos
        cy.get(".error-message").should("contain.text", "Este campo es obligatorio");
    });

    it("Debería mostrar error al intentar comprar con información incorrecta", () => {
        cy.visit("http://localhost:5173/movies/popular");

        // Seleccionar la primera película y un horario
        cy.get(".movie-item").first().click();
        cy.get(".schedule-option").first().click();

        // Seleccionar asientos y proceder a la compra
        cy.get(".seat-available").eq(0).click();
        cy.get(".seat-available").eq(1).click();
        cy.get("#buy-button").click();

        // Completar el formulario con datos incorrectos
        cy.get("#payment-form").should("be.visible");
        cy.get("[name='cardNumber']").type("1234567890123456"); // Número de tarjeta inválido
        cy.get("[name='expiryDate']").type("00/00"); // Fecha inválida
        cy.get("[name='cvv']").type("abc"); // CVV no numérico

        // Intentar confirmar la compra
        cy.get("#confirm-button").click();

        // Verificar mensajes de error en los campos
        cy.get(".error-message")
            .should("contain.text", "Por favor, ingrese un número de tarjeta válido")
            .and("be.visible");
    });
});
