describe('Pruebas de autenticación de usuario', () => {
    const baseUrl = 'http://localhost:5000/api/users';
  
    it('Verifica que un usuario puede autenticarse correctamente', () => {
      cy.visit(`${baseUrl}/login`);
  
      // Llenar campos del formulario de inicio de sesión
      cy.get('input[name="emailOrUsername"]').type('nando');
      cy.get('input[name="password"]').type('qwert123');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar el resultado esperado
      cy.get('#success-message').should('contain.text', 'Inicio de sesión exitoso');
    });
  
    it('Verifica que un usuario no puede autenticarse con una contraseña incorrecta', () => {
      cy.visit(`${baseUrl}/login`);
  
      // Llenar campos del formulario con contraseña incorrecta
      cy.get('input[name="emailOrUsername"]').type('usuario@email.com');
      cy.get('input[name="password"]').type('wrongpassword');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar el resultado esperado
      cy.get('#error-message').should('contain.text', 'Contraseña incorrecta');
    });
  
    it('Verifica que un usuario inexistente no puede autenticarse', () => {
      cy.visit(`${baseUrl}/login`);
  
      // Llenar campos del formulario con un usuario inexistente
      cy.get('input[name="emailOrUsername"]').type('inexistente@email.com');
      cy.get('input[name="password"]').type('password123');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar el resultado esperado
      cy.get('#error-message').should('contain.text', 'Usuario no encontrado');
    });
  });
  